var av = new JSAV("container");

var arr = av.ds.array([5, 6, 1, 3, 2], {indexed: true});
av.displayInit();
var i = 0;
var j = 0;
let ival = av.variable(i, {visible: true, label: "i = "});
let jval = av.variable(j, {visible: true, label: "j = "});
for(i = 0; i < arr.size(); i++) {
    ival.value(i);
//    arr.highlight(i);
    av.step();
    for(j = 0; j < arr.size()-i-1; j++) {
        jval.value(j);
        arr.highlight([j, j + 1]);
        av.step();
        if(arr.value(j) > arr.value(j+1)) {
            av.step();
            arr.swap(j, j + 1);
            av.step();
        }
        arr.unhighlight([j, j + 1]);
  //      arr.highlight(false);
    }
 //   arr.unhighlight(i);
}

av.recorded();
