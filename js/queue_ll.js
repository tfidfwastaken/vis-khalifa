//still need to add user input

var btn = document.getElementById('load_values');
var opt = document.getElementById('sel1');
var inputline = document.getElementById('arrayinput');
var av = new JSAV("container");
var l = av.ds.list({nodegap: 70});

opt.addEventListener("change", (e) => {
	if(e.target.value != "Enqueue") {
		console.log(e.target.value);
		inputline.disabled = true;
	} else {
		inputline.disabled = false;
	}
});

btn.addEventListener("click", startVis);

function startVis(e) {
	if (opt.value == "Enqueue") {
		l.addLast(Number(inputline.value));
		l.layout();
		av.umsg("Add a new item to the queue");
		av.displayInit();
	} else if (opt.value == "Dequeue") {
		l.removeFirst();
		l.layout();
		av.umsg("Remove an item from the queue");
		av.displayInit();
	} else {
		l.clear();
		av.umsg("Clearing the queue");
		av.displayInit();
	}
	av.recorded();
}
