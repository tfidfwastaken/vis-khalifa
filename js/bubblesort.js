var btn = document.getElementById('load_values');
var av = new JSAV("container");
var inputarr = [];
var arr = null;

btn.onclick = startVis;

function startVis(e) {
    inputarr = document.getElementById('arrayinput').value.split(' ').map(Number);
    if(arr) {
        arr.clear();
        av.clearumsg();
    }
    console.log(inputarr);
    arr = av.ds.array(inputarr, {indexed: true});
    var i, j;
    av.displayInit();
    for(i = 0; i < arr.size(); i++) {
        av.step();
        for(j = 0; j < arr.size()-i-1; j++) {
            av.umsg("i = {i} <br> j = {j}", {fill: {j: j, i: i}});
            arr.unhighlight(true);
            arr.highlight([j, j + 1]);
            av.step();
            if(arr.value(j) > arr.value(j+1)) {
                av.umsg("j is greater than j+1, so swapping");
                av.step();
                arr.swap(j, j + 1);
                av.step();
            }
        }
    }
    av.recorded();
}
