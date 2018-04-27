
// COLLECTION TO USE
var coll = db.gospergun;


// GRID SIZE
var MAX_X = 50;
var MAX_Y = 21;
var MAX_TIME = 1000;


// INITIAL CONDITIONS
function setupInitialConditions() {
	return [
		// Gosper's glider gun
		// http://www.conwaylife.com/w/index.php?title=Gosper_glider_gun
		{y:6, x:2},
		{y:6, x:3},
		{y:7, x:2},
		{y:7, x:3},

		{y:4, x:36},
		{y:4, x:37},
		{y:5, x:36},
		{y:5, x:37},

		{y:2, x:26},
		{y:3, x:26},
		{y:3, x:24},
		{y:4, x:22},
		{y:4, x:23},
		{y:5, x:22},
		{y:5, x:23},
		{y:6, x:22},
		{y:6, x:23},
		{y:7, x:24},
		{y:7, x:26},
		{y:8, x:26},

		{y:7, x:19},
		{y:6, x:18},
		{y:7, x:18},
		{y:8, x:18},
		{y:7, x:16},
		{y:5, x:17},
		{y:9, x:17},

		{y:4, x:15},
		{y:4, x:14},
		{y:5, x:13},
		{y:6, x:12},
		{y:7, x:12},
		{y:8, x:12},
		{y:9, x:13},
		{y:10, x:14},
		{y:10, x:15},
	];
}


// RULES
function rule(branches, a1, a2, a3, a4, a5, a6, a7, a8) {
	// GAME OF LIFE
	//
	// | a1 | a2 | a3 |
	// | a4 | $v | a5 |
	// | a6 | a7 | a8 |
	//
	// Each of the aX variables is 0 or 1.

	// Figure out how many cells around this cell are "alive" (1).
	var count = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8;

	// For cells that are alive, these rules decide if it should be alive or dead next.
	var liveResult;
	if (count < 2) {
		liveResult = false;
	} else if (count > 3) {
		liveResult = false;
	} else {
		liveResult = true;
	}
	branches.push({ case: { $and: [ { $eq: [ "$v", true  ] }, { $eq: [ "$prev", "" + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 ] } ] }, then: liveResult });

	// For cells that are dead, this rule decides if it should be alive or dead next.
	var deadResult = (count == 3);
	branches.push({ case: { $and: [ { $eq: [ "$v", false ] }, { $eq: [ "$prev", "" + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 ] } ] }, then: deadResult });
}



//////////////////////////////////////////////////////////////////////////

// Setup the blank grid
coll.drop()
var init = [];
var v = false;
for (var x = 0; x < MAX_X; x++) {
	for (var y = 0; y < MAX_Y; y++) {
		init.push( { _id: { y, x }, v } );
	}
}
coll.insert(init);

var initState = setupInitialConditions();
for (let point in initState) {
	coll.update({_id: initState[point]}, {$set:{v:true}});
}


var clear_screen = "\033[H\033[2J";

function disp() {
	var img = [];
	for (var y = 0; y < MAX_Y; y++) {
		img[y] = [];
	}
	coll.find().forEach( (doc) => {
		img[doc._id.y][doc._id.x] = doc.v;
	});
    var s = "";
	for (var y = 0; y < MAX_Y; y++) {
		s += img[y].map((x)=>x?"#":" ").join("") + "\n";
	}
    return s;
}

print(disp());

var branches = [];
// Rules for the edges, leave these alone.
branches.push({ case: { $eq: [ "$_id.y",  0 ] }, then: "$v" });
branches.push({ case: { $eq: [ "$_id.y", MAX_Y-1 ] }, then: "$v" });
branches.push({ case: { $eq: [ "$_id.x",  0 ] }, then: "$v" });
branches.push({ case: { $eq: [ "$_id.x", MAX_X-1 ] }, then: "$v" });

// Rules for each case.
for (var a1 = 0; a1 <= 1; a1++) {
	for (var a2 = 0; a2 <= 1; a2++) {
		for (var a3 = 0; a3 <= 1; a3++) {
			for (var a4 = 0; a4 <= 1; a4++) {
				for (var a5 = 0; a5 <= 1; a5++) {
					for (var a6 = 0; a6 <= 1; a6++) {
						for (var a7 = 0; a7 <= 1; a7++) {
							for (var a8 = 0; a8 <= 1; a8++) {
								rule(branches, a1, a2, a3, a4, a5, a6, a7, a8);
							}
						}
					}
				}
			}
		}
	}
}

//printjson(branches);

for (var time = 0; time < MAX_TIME; time++) {
	var start = Date.now();
	var res = db.runCommand({aggregate: coll.getName(), pipeline: [

		{ "$addFields": {
			prev_y: { "$add": [ "$_id.y", -1 ] },
			next_y: { "$add": [ "$_id.y",  1 ] },
			prev_x: { "$add": [ "$_id.x", -1 ] },
			next_x: { "$add": [ "$_id.x",  1 ] },
		} },

		{ "$addFields": {
			prev: [
				// top row
				{ y: "$prev_y", x: "$prev_x" },
				{ y: "$prev_y", x: "$_id.x" },
				{ y: "$prev_y", x: "$next_x" },

				// this row
				{ y: "$_id.y", x: "$prev_x" },
				{ y: "$_id.y", x: "$next_x" },

				// bottom row
				{ y: "$next_y", x: "$prev_x" },
				{ y: "$next_y", x: "$_id.x" },
				{ y: "$next_y", x: "$next_x" },
			],
		} },
		{ "$project": {
			prev_y: 0,
			next_y: 0,
			prev_x: 0,
			next_x: 0,
		} },

		{ "$unwind": "$prev" },

		{ "$lookup": {
			from: coll.getName(),
			localField: "prev",
			foreignField: "_id",
			as: "prev",
		} },

		{ "$group": {
			_id: "$_id",
			v: { $first: "$v" },
			prev: { $push: "$prev.v" },
		} },

		{ "$addFields": {
			prev: { $reduce: {
				input: "$prev",
				initialValue: "",
				in: { $concat: [
					"$$value",
					{ $cond: {
						if: { $reduce: {
							input: "$$this",
							initialValue: null,
							in: "$$this"
						} },
						then: "1",
						else: "0",
					} },
				] },
			} },
		} },

		{ "$project": {
			_id: 1,
			v: { $switch: {
				branches: branches,
				default: "$v",
			} },
		} },

		{ "$out": coll.getName() }
	] , cursor: { } } );
	if ( ! res.ok) shellPrint(res);
	var end = Date.now();
	var diff = end - start;
	var display = clear_screen + time + " " + diff + "ms\n" + disp();
	print(display);
}
