var av = new JSAV("container");

var arr = av.ds.array([5, 6, 1, 3, 2], {indexed: true});
av.displayInit();
var i = 0;
var j = 0;
for(i = 0; i < arr.size(); i++) {
    av.step();
    for(j = 0; j < arr.size()-i-1; j++) {
        av.umsg("i = {i} <br> j = {j}", {fill: {j: j, i: i}});
        arr.highlight([j, j + 1]);
        av.step();
        if(arr.value(j) > arr.value(j+1)) {
            av.umsg("j is greater than j+1, so swapping");
            av.step();
            arr.swap(j, j + 1);
            av.step();
        }
        arr.unhighlight([j, j + 1]);
    }
}

av.recorded();
