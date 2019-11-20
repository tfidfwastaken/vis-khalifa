var btn = document.getElementById('load_values');
var inputline = document.getElementById('arrayinput');
var av = new JSAV("container");
var inputarr = [];

btn.addEventListener("click", startVis);

function startVis(e) {
    this.value = "Try another input";
    this.removeEventListener("click", startVis);
    this.addEventListener("click", e => {
        window.location.reload(false);
    });
    inputarr = inputline.value.split(' ').map(Number);
    inputline.disabled = true;

    var bt = av.ds.binarytree();
    bt.root(inputarr[0]);
    bt.layout();
    bt.root().css({"background-color": "#F8EDB2"});
    av.displayInit();
    
    var root = bt.root();
    var parent = null;
    for(var i = 1; i < inputarr.length; i++){
        while(typeof root !== 'undefined'){
            parent = root;
            if(inputarr[i] < root.value()){
                root = root.left(); 
            } else {
                root = root.right();
            } 
        }
        if (inputarr[i] < parent.value()) {
            av.umsg("{ch} inserted to left of {pa}", {fill: {ch: inputarr[i], pa: parent.value()}});
            parent.left(inputarr[i]);
        } else if (inputarr[i] > parent.value()) {
            av.umsg("{ch} inserted to right of {pa}", {fill: {ch: inputarr[i], pa: parent.value()}});
            parent.right(inputarr[i]); 
        }
        root = bt.root();
        bt.layout();
        av.step()
    } 
    av.recorded();
}
