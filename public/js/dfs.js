var btn = document.getElementById('load_values');
var jsav = new JSAV("container");
btn.addEventListener("click", startVis);

function startVis(e){

    this.value = "Try another input";
    this.removeEventListener("click", startVis);
    this.addEventListener("click", e => {
        window.location.reload(false);

    });
    var initGraph = function(opts) {
      var g = jsav.ds.graph($.extend({width: 500, height: 350}, opts));
      var arr_size = Number(document.getElementById('no_elements').value);
      var x=[];
      for(var i=1; i<=arr_size;i++)
      {
    	  x[i] = g.addNode(i.toString(10));
      }
      var input_edges = document.getElementById('arrayinput').value.split('\n');
      for(var i=0;i<input_edges.length;i++)
      {
        y = input_edges[i].split(' ');
    	  g.addEdge(x[y[0]],x[y[1]]);
      }
      return g;
     };
    var g = initGraph({layout: "layered"});
    document.getElementById('arrayinput').disabled = true;
    document.getElementById('no_elements').disabled = true;
    g.layout();
    jsav.displayInit();
    jsav.step();
    var preVisit = function(node, prev) {
      node.addClass("processing");
      jsav.umsg("Add node " + node.value() + " to the DFS search tree");
      if (prev) {
        node.edgeFrom(prev).css("stroke", "red"); // highlight
        node.edgeTo(prev).css("stroke", "red");
        node.edgeTo(prev).css("stroke-width", "3px");
      }
      jsav.step();
    };
    var visit = function(node) {
      node.addClass("visited");
      jsav.umsg("Call DFS for node " + node.value());
      node.css("border","2px solid red");
      jsav.step();
    };
    var postVisit = function(node) {
      node.addClass("finished");
      node.css("background-color","#F8EDB2");
      jsav.umsg("Done with node " + node.value());
      jsav.step();
    };
    var dfs = function(start, prev) {
      var successors,
          next;
      preVisit(start, prev);
      successors = start.neighbors();
      for (next = successors.next(); next; next = successors.next()) {
        if (!next.hasClass("visited")) {
          visit(next);
          dfs(next, start);
        }
      }
      postVisit(start);
    };
    visit(g.nodes()[0]);
    dfs(g.nodes()[0]);
    jsav.recorded();
}
