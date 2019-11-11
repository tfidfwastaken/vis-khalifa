//still need to add user input

var av = new JSAV("container");
var l = av.ds.list({nodegap: 70});

av.umsg("We start by creating a queue and adding an element \"1\"");
l.layout();
l.addLast(1);
av.displayInit();
av.step()

av.umsg("Add a new item \"2\" to the queue");
l.addLast(2, {edgeLabel: "e1" });
l.layout();
av.step();

av.umsg("Add a new item \"3\" to the queue");
l.addLast(3, {edgeLabel: "e2" });
l.layout();
av.step();

av.umsg("Remove an item from the queue");
l.removeFirst();
l.layout();
av.step();

av.umsg("Remove an item from the queue");
l.removeFirst();
l.layout();
av.step();

av.umsg("Empty Queue");
l.removeFirst();
l.layout();
av.step();

av.recorded();
