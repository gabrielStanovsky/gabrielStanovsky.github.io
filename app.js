// set up SVG for D3
var width  = 960,
    height = 1000,
    colors = function(){ return "#FFF";};//d3.scale.category10();

var svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.

var CHARGE = -100;
var GRAVITY = -100;


var nodes = [
    /*{id: "A", reflexive: false},
    {id: "B", reflexive: false},
    {id: "C", reflexive: false}*/
  ],
  lastNodeId = 0
  links = [
    /*{source: nodes[0], target: nodes[1], left: false, right: true },
    {source: nodes[1], target: nodes[2], left: false, right: true }*/
  ];
  
// init D3 force layout
var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
//    .linkDistance(150)
    .charge(CHARGE)
	.gravity(GRAVITY)
    .on('tick', tick)

// define arrow markers for graph links
svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');

svg.append('svg:defs').append('svg:marker')
    .attr('id', 'start-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#000');

// line displayed when dragging new nodes
var drag_line = svg.append('svg:path')
  .attr('class', 'link dragline hidden')
  .attr('d', 'M0,0L0,0');

// handles to link and node element groups
var path = svg.append('svg:g').selectAll('path'),
    circle = svg.append('svg:g').selectAll('g');

// mouse event vars
var selected_node = null,
    selected_link = null,
    mousedown_link = null,
    mousedown_node = null,
    mouseup_node = null;

function resetMouseVars() {
  mousedown_node = null;
  mouseup_node = null;
  mousedown_link = null;
}



// update force layout (called automatically each iteration)
function tick() {
  // draw directed edges with proper padding from node centers
  path.attr('d', function(d) {
    var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 35 : 30,
        targetPadding = d.right ? 35 : 30
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
    return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;
  });

  circle.attr('transform', function(d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  });
}

// update graph (called when needed)
function restart() {
  // path (link) group
  path = path.data(links);

  // update existing links
  path.classed('selected', function(d) { return d === selected_link; })
    .style('marker-start', function(d) { return d.left ? 'url(#start-arrow)' : ''; })
    .style('marker-end', function(d) { return d.right ? 'url(#end-arrow)' : ''; });


  // add new links
  path.enter().append('svg:path')
    .attr('class', 'link')
    .classed('selected', function(d) { return d === selected_link; })
    .style('marker-start', function(d) { return d.left ? 'url(#start-arrow)' : ''; })
    .style('marker-end', function(d) { return d.right ? 'url(#end-arrow)' : ''; })
    .on('mousedown', function(d) {
      if(d3.event.ctrlKey) return;

      // select link
      mousedown_link = d;
      if(mousedown_link === selected_link) selected_link = null;
      else selected_link = mousedown_link;
      selected_node = null;
      restart();
    });

  // remove old links
  path.exit().remove();


  // circle (node) group
  // NB: the function arg is crucial here! nodes are known by id, not by index!
  circle = circle.data(nodes, function(d) { return d.id; });

  // update existing nodes (reflexive & selected visual states)
  circle.selectAll('circle')
    .style('fill', function(d) { return (d === selected_node) ? d3.rgb(colors(d.id)).darker().toString() : colors(d.id); })
    .classed('reflexive', function(d) { return d.reflexive; });

  // add new nodes
  var g = circle.enter().append('svg:g');

  g.append('svg:circle')
    .attr('class', 'node')
    .attr('r', 30)
    .style('fill', function(d) { return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id); })
    .style('stroke', function(d) { return d3.rgb(colors(d.id)).darker().toString(); })
    .classed('reflexive', function(d) { return d.reflexive; })
    .on('mouseover', function(d) {
      if(!mousedown_node || d === mousedown_node) return;
      // enlarge target node
      d3.select(this).attr('transform', 'scale(1.1)');
    })
    .on('mouseout', function(d) {
      if(!mousedown_node || d === mousedown_node) return;
      // unenlarge target node
      d3.select(this).attr('transform', '');
    })
    .on('mousedown', function(d) {
      if(d3.event.ctrlKey) return;

      // select node
      mousedown_node = d;
      if(mousedown_node === selected_node) selected_node = null;
      else{ 
		selected_node = mousedown_node;
		document.getElementById('myText').value = mousedown_node.myText;
		document.getElementById('features').value = mousedown_node.features;
	  }
      selected_link = null;

      // reposition drag line
      drag_line
        .style('marker-end', 'url(#end-arrow)')
        .classed('hidden', false)
        .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mousedown_node.x + ',' + mousedown_node.y);

      restart();
    })
    .on('mouseup', function(d) {
      if(!mousedown_node) return;

      // needed by FF
      drag_line
        .classed('hidden', true)
        .style('marker-end', '');
	
      // check for drag-to-self - workaround for deleting a node
      mouseup_node = d;
      if(mouseup_node === mousedown_node) { 
		if(selected_node) {
        //nodes.splice(nodes.indexOf(selected_node), 1);
        //spliceLinksForNode(selected_node);
    	}
	    //selected_link = null;
	    //selected_node = null;
	    //restart();
		resetMouseVars(); 
		
	  }

      // unenlarge target node
      d3.select(this).attr('transform', '');

      // add link to graph (update if exists)
      // NB: links are strictly source < target; arrows separately specified by booleans
      var source, target, direction;
      if(mousedown_node.id < mouseup_node.id) {
        source = mousedown_node;
        target = mouseup_node;
        direction = 'right';
      } else {
        source = mouseup_node;
        target = mousedown_node;
        direction = 'left';
      }

      var link;
      link = links.filter(function(l) {
        return (l.source === source && l.target === target);
      })[0];

      if(link) {
        link[direction] = true;
      } else {
        link = {source: source, target: target, left: false, right: false, type:"TEST"};
        link[direction] = true;
        links.push(link);
      }

      // select new link
      selected_link = link;
      selected_node = null;
      restart();
    });
  
  
  
  // show node IDs
  g.append('svg:text')
      .attr('x', 0)
      .attr('y', 4)
      .attr('class', 'id')
//	  .style("stroke","#000000")
	  .style("fill",function(d) { return d.color; })//color)	
	  .text(function(d) { return d.text; });;//d.id; });
  
  
  if (features){
	g.append("svg:title").text(features);
  }
  // remove old nodes
  circle.exit().remove();

  // set the graph in motion
  /*var n = 1;
  force.start();
     for (var i = 0; i < n; ++i) force.tick();
  force.stop();*/
  force.start();
}

var bool = false;

function mousedown() {
  // prevent I-bar on drag
  //d3.event.preventDefault();
  
  // because :active only works in WebKit?
  svg.classed('active', true);

  if(d3.event.ctrlKey || mousedown_node || mousedown_link) return;

  var features =  document.getElementById('features').value;
  var toWrite = document.getElementById('myText').value;
  if (features){
	toWrite += " (" + features + ")";
  }
  var myColor = "#080808"
  if (document.getElementById("predicateCheckbox").checked){
	myColor = "#D11919"
  }
	  // insert new node at point
	  var point = d3.mouse(this),
		  node = {id: ++lastNodeId, reflexive: false, text: toWrite, color:myColor, myText: document.getElementById('myText').value, features: features, fixed:true};
	  node.x = point[0];
	  node.y = point[1];
	  nodes.push(node);

	  restart();
	
}

function mousemove() {
  if(!mousedown_node) return;

  // update drag line
  drag_line.attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + d3.mouse(this)[0] + ',' + d3.mouse(this)[1]);

  restart();
}

function mouseup() {

  if(mousedown_node) {
    // hide drag line
    drag_line
      .classed('hidden', true)
      .style('marker-end', '');
  }

  // because :active only works in WebKit?
  svg.classed('active', false);

  // clear mouse event vars
  resetMouseVars();
}

function spliceLinksForNode(node) {
  var toSplice = links.filter(function(l) {
    return (l.source === node || l.target === node);
  });
  toSplice.map(function(l) {
    links.splice(links.indexOf(l), 1);
  });
}

// only respond once per keydown
var lastKeyDown = -1;

function update(val){
	
}

function keydown() {
  d3.event.preventDefault();

  if(lastKeyDown !== -1) return;
  lastKeyDown = d3.event.keyCode;

  // ctrl
  if(d3.event.keyCode === 17) {
    circle.call(force.drag);
    svg.classed('ctrl', true);
  }

  if(!selected_node && !selected_link) return;
  switch(d3.event.keyCode) {
    case 8: // backspace
    case 46: // 	
      if(selected_node) {
        nodes.splice(nodes.indexOf(selected_node), 1);
        spliceLinksForNode(selected_node);
      } else if(selected_link) {
        links.splice(links.indexOf(selected_link), 1);
      }
      selected_link = null;
      selected_node = null;
      restart();
      break;
    case 66: // B
      if(selected_link) {
        // set link direction to both left and right
        selected_link.left = true;
        selected_link.right = true;
      }
      restart();
      break;
    case 76: // L
      if(selected_link) {
        // set link direction to left only
        selected_link.left = true;
        selected_link.right = false;
      }
      restart();
      break;
    case 82: // R
      if(selected_node) {
        // toggle node reflexivity
        selected_node.reflexive = !selected_node.reflexive;
      } else if(selected_link) {
        // set link direction to right only
        selected_link.left = false;
        selected_link.right = true;
      }
      restart();
      break;
  }
}

function keyup() {
  lastKeyDown = -1;

  // ctrl
  if(d3.event.keyCode === 17) {
    circle
      .on('mousedown.drag', null)
      .on('touchstart.drag', null);
    svg.classed('ctrl', false);
  }
}

function toggle(chkbox, group) { 
	if(chkbox.checked){
		d3.select("body")
		  .on('keydown', keydown)
		  .on('keyup', keyup);

	}
	else{
		d3.select("body")
		  .on('keydown', null)
		  .on('keyup', null);
	}
}


function sendToServer(data)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	    if (this.readyState!==4) return; // not ready yet
		if (this.status===200) { // HTTP 200 OK
			alert(this.responseText);
		} else {
			alert(this.status)
		}
	  }
	//prompt("Copy to clipboard: Ctrl+C, Enter", data);
	xmlhttp.open("POST","http://localhost:8070/save",false);
	xmlhttp.send(data);
}

function getFromServer()
{
	alert("?");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			alert(xhr.responseText);
		}
	}
	xhr.open('GET', 'http://localhost:8070/save', true);
	xhr.send(null);
	
}




/*
function update(chkbox, group) {
	if (selected_node){

	}
} 
*/

var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);


d3.select('button').on('click', function() {
		var filename = prompt("Please file name", "test.json");
		// change edges to point to indices:
		linksToSave = []
		
		links.forEach(function(link) {
			var newLink = jQuery.extend({}, link);
			newLink['source'] = nodes.indexOf(link['source']);
			newLink['target'] = nodes.indexOf(link['target']);
			linksToSave.push(newLink);
		});
		var comments = document.getElementById('comments').value;
		var data = JSON.stringify({filename:filename,data:{nodes:nodes,links:linksToSave,comments:comments}}, null, 2);
		
		sendToServer(data);
		
    });

	
function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
		  //alert( contents);  
		  obj = JSON.parse(contents);
		  document.getElementById('comments').value = obj['comments'];
		  nodes = obj["nodes"];
		  nodes.forEach(function(node){
			node['fixed'] = true;
		  });
		  links = obj["links"];
		  links.forEach(function(link) {
			link['source'] = nodes[link['source']];
			link['target'] = nodes[link['target']];
		  });
		  // init D3 force layout
    force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    //.linkDistance(150)
    .charge(CHARGE)
	.gravity(GRAVITY)
    .on('tick', tick)

// define arrow markers for graph links
svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');

svg.append('svg:defs').append('svg:marker')
    .attr('id', 'start-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#000');

// line displayed when dragging new nodes
drag_line = svg.append('svg:path')
  .attr('class', 'link dragline hidden')
  .attr('d', 'M0,0L0,0');

// handles to link and node element groups
path = svg.append('svg:g').selectAll('path');
    circle = svg.append('svg:g').selectAll('g');

// mouse event vars
selected_node = null;
    selected_link = null;
    mousedown_link = null
    mousedown_node = null;
    mouseup_node = null;
		restart();
		  }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
	
	force.start();
  }

  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
// app starts here

svg.on('mousedown', mousedown)
  .on('mousemove', mousemove)
  .on('mouseup', mouseup)
  .on('keydown', keydown)
  .on('keyup', keyup);
/*
d3.select("body")
  .on('keydown', keydown)
  .on('keyup', keyup)
  .on('mousedown', mousedown)
  .on('mousemove', mousemove)
  .on('mouseup', mouseup);
 */
 
 
restart();