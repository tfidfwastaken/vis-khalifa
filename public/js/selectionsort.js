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
    var i, j, min_idx; 
    av.displayInit()
    for (i = 0; i < arr.size(); i++) { 
        av.step();
        arr.unhighlight(true);
        min_idx = i;
        arr.highlight(min_idx);
        for (j = i+1; j < arr.size(); j++) {
            av.umsg("i = {i} <br> j = {j} <br> min_idx={min_idx}",
                    {fill: {j: j, i: i, min_idx: min_idx}});
            arr.highlight(j);
            if (arr.value(j) < arr.value(min_idx)) {
                av.umsg("j = {j}<br>arr[j] is less than min, so setting this j as minimum", {fill: {j: j}});
                min_idx = j; 
            }
            av.step();
            arr.unhighlight(j);
        }
        av.umsg("swapping the minimum found with ith element");
        arr.swap(min_idx, i); 
    } 
    arr.unhighlight(true);
    av.umsg("Done sorting.");
    av.recorded();
}
