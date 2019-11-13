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
    	//alert(input_edges[i][2]);//alert(a);
    	g.addEdge(x[input_edges[i][0]],x[input_edges[i][2]]);
      }
      /*var a = g.addNode("A"),
          b = g.addNode("B"),
          c = g.addNode("C"),
          d = g.addNode("D"),
          e = g.addNode("E"),
          f = g.addNode("F");
      g.addEdge(a, b);
      g.addEdge(a, c);
      g.addEdge(b, d);
      g.addEdge(e, a);
      g.addEdge(d, e);
      g.addEdge(d, f);*/
      return g;
     };
    //var l2 = jsav.label("Default automatic graph layout")
    //var g2 = initGraph({layout: "automatic"});
    //g2.layout();
    jsav.label("Layered graph layout")
    var g = initGraph({layout: "layered"});
    document.getElementById('arrayinput').disabled = true;
    g.layout();
    jsav.displayInit();
    // hide the "other" graph
    //g2.hide();
    //l2.hide();
    jsav.step();
    var preVisit = function(node, prev) {
      node.addClass("processing");
      jsav.umsg("Add node " + node.value() + " to the DFS search tree");
      if (prev) {
        node.edgeFrom(prev).css("stroke", "red"); // highlight
        node.edgeTo(prev).css("stroke", "red"); // highlight
      }
      jsav.step();
    };
    var visit = function(node) {
      node.addClass("visited");
      jsav.umsg("Call DFS for node " + node.value());
      jsav.step();
    };
    var postVisit = function(node) {
      node.addClass("finished");
      node.css("background-color","green");
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
