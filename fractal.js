// From https://ilearnasigoalong.blogspot.com.au/2013/12/mongo-aggregating-fractals.html

DBQuery.shellBatchSize = 500
iters = 1000

zrsquare = {'$multiply' : [ '$zr','$zr' ]};
zisquare =  {'$subtract' : [ 0 , {'$multiply' : [ '$zi','$zi' ]}]};
zixzrx = { '$multiply' : [{'$multiply' : [ '$zr','$zi' ]},2]};
inciflow = { '$cond' : [ { '$lte' : [ '$zr' , 4 ]} , 1 , 0] };
itterate = { '$project' :
    { 
        'cr' : 1,
        'ci' : 1 ,
        'zr' : { '$add' : [ zrsquare , zisquare, '$cr']},
        'zi' : { '$add' : [ zixzrx, '$ci' ] } ,
        'it' : { '$add' : [ "$it" , inciflow]}
    } 
};

pipeline =[];
for(i=0;i<iters;i++){ pipeline.push(itterate);}
pipeline.push({ '$group' : { '_id' :'$ci','r' : { '$push' : { '$cond' : [{ '$lt' : [ '$it', iters]},"88888","     "]}}}});
pipeline.push({ '$sort' : { '_id' : 1 }});
pipeline.push({'$project':{ '_id' : 0, r : 1}});

shellPrint(db.img.aggregate(pipeline))
