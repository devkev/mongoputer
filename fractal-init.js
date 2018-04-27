// From https://ilearnasigoalong.blogspot.com.au/2013/12/mongo-aggregating-fractals.html

db.img.drop()

for (x=-1.5;x<1;x=x+0.03){
 for (y=-1.1;y<1;y=y+0.01){
   db.img.insert({'cr':x,'ci':y,'zr':x,'zi':y,'it':0})
 }
}
