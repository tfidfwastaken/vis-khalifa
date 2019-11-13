var btn = document.getElementById('load_values');
var inputline = document.getElementById('arrayinput');
var av = new JSAV("container");
var inputarr = [];
var arr = null;

btn.addEventListener("click", startVis);

function startVis(e) {
    this.value = "Try another input";
    this.removeEventListener("click", startVis);
    this.addEventListener("click", e => {
        window.location.reload(false);
    });
    inputarr = inputline.value.split(' ').map(Number);
    inputline.disabled = true;
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
