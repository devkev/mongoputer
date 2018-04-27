
var coll = db.fib;
coll.drop()
//coll.insert({_id: 1, x1: 1, x2: 1});
//coll.insert({_id: 1, x1: NumberLong(1), x2: NumberLong(1)});
coll.insert({_id: 1, x1: NumberDecimal(1), x2: NumberDecimal(1)});
var keepGoing = true;
while (keepGoing) {
	var res = db.runCommand({aggregate: coll.getName(), pipeline: [

		{ "$project": {
			_id: { "$sum": [ "$_id", 1 ] },
			x1: { "$sum": [ "$x1", "$x2" ] },
			x2: "$x1",
		} },

		{ "$addFields": {
			halt: { "$cond": {
				if: { "$gt": [ "$_id", 100 ] },
				then: 0,
				else: 1,
			} },
		} },
		{ "$addFields": {
			halt_: { "$divide": [1, "$halt"] },
		} },
		{ "$project": {
			halt: 0,
			halt_: 0,
		} },
		{ "$out": coll.getName() }
	] , cursor: { } } );
	//shellPrint(res);
	keepGoing = res.ok;
}

