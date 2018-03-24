

var chairs = Array(1018);
chairs.fill(1);

for(var i = 0; i < chairs.length; i ++){
    if (chairs.indexOf(1, i) == i){
        chairs[i] = 0;
    }


}
