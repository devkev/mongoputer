
var coll = db.ca30;

var MAX_X = 100;
var MAX_Y = 100;

coll.drop()
var init = [];
var v = false;
for (var x = 0; x < MAX_X; x++) {
	for (var y = 0; y < MAX_Y; y++) {
		init.push( { _id: { y, x }, v } );
	}
}
coll.insert(init);

//coll.ensureIndex({"_id.y":1, "_id.x":1});

coll.update({_id: {y:0, x:MAX_X/2}}, {$set:{v:true}});

function disp() {
	var img = [];
	for (var y = 0; y < MAX_Y; y++) {
		img[y] = [];
	}
	coll.find().forEach( (doc) => {
		img[doc._id.y][doc._id.x] = doc.v;
	});
	for (var y = 0; y < MAX_Y; y++) {
		print(img[y].map((x)=>x?"#":" ").join(""));
	}
}

disp();

for (var time = 0; time < MAX_Y - 1; time++) {
	print(time);
	var res = db.runCommand({aggregate: coll.getName(), pipeline: [

		{ "$addFields": {
			prev_y: { "$add": [ "$_id.y", -1 ] },
			prev_x: { "$add": [ "$_id.x", -1 ] },
			next_x: { "$add": [ "$_id.x",  1 ] },
		} },

		{ "$addFields": {
			prev: [
				{ y: "$prev_y", x: "$prev_x" },
				{ y: "$prev_y", x: "$_id.x" },
				{ y: "$prev_y", x: "$next_x" },
			],
		} },
		{ "$project": {
			prev_y: 0,
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
				branches: [
					{ case: { $eq: [ "$_id.y",  0 ] }, then: "$v" },
					{ case: { $eq: [ "$_id.y", MAX_Y-1 ] }, then: "$v" },
					{ case: { $eq: [ "$_id.x",  0 ] }, then: "$v" },
					{ case: { $eq: [ "$_id.x", MAX_X-1 ] }, then: "$v" },

					{ case: { $eq: [ "$prev", "111" ] }, then: false },
					{ case: { $eq: [ "$prev", "110" ] }, then: false },
					{ case: { $eq: [ "$prev", "101" ] }, then: false },
					{ case: { $eq: [ "$prev", "100" ] }, then: true },
					{ case: { $eq: [ "$prev", "011" ] }, then: true },
					{ case: { $eq: [ "$prev", "010" ] }, then: true },
					{ case: { $eq: [ "$prev", "001" ] }, then: true },
					{ case: { $eq: [ "$prev", "000" ] }, then: false },
				],
				default: "$v",
			} },
		} },

		{ "$out": coll.getName() }
	] , cursor: { } } );
	if ( ! res.ok) shellPrint(res);
	disp();
}
