

var ready;

var width = 1000;
var height = 600;
ready = function(){

	d3.json("/kids.json", function(error, datafull) {
	  
	  data = datafull.slice(1,8);

	  var svg1 = d3.select("body").select("#mainkids")
	                             .attr("height", height)
			                				 .attr("width", width)
		var svg2 = d3.select("body").select("#mainkids")
	                             .attr("height", height)
			                				 .attr("width", width)
		var svg3 = d3.select("body").select("#mainkids")
	                             .attr("height", height)
			                				 .attr("width", width)


		svg1.selectAll("g.node").data(data)
													.enter()
													.append("g")
													.attr("class","node")
													.attr("transform", function(d, i) {	
													  var factor = d.hours/20,
													  translate = "translate("+Math.random()*(width-50)+","+Math.random()*(height-50)+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#game");


		var gnodes1 = svg1.selectAll("g")
  
  	gnodes1
    .append('rect')
    .style({opacity:'0.0'})
	  .attr('x', 0)
	  .attr('y', 0)
	  .attr('fill',"white")
	  .on('mouseenter', function(d) {
        d3.select(this).style({opacity: '1.0'})
    })
    .on('mouseleave', function(d) {
        d3.select(this).style({opacity: '0.0'})      
    })
	  .attr('width', 200)
	  .attr('height', 100);

		gnodes1.append("text")
    .attr("x", "0")
    .attr("y", "0")
    .attr("font-size",100)
    .attr("fill", "grey")
    .text(function(d) { return d.hours; });

   


	// 	svg2.selectAll("g.node").data(data)
	// 												.enter()
	// 												.append("g") 
	// 												.attr("transform", function(d, i) {	
	// 												  var factor = d.pieces/20,
	// 												  translate = "translate("+Math.random()*(width-100)+","+Math.random()*(height-100)+")",
	// 												  scale = "scale(" + factor + ")";								 
	// 												  return translate + " " + scale;
	// 												})
	// 												.append("use") 
	// 												.attr("xlink:href", "#choc");

 //    var gnodes2 = svg2.selectAll("g")

 //    gnodes2.append("text")
 //    .attr("dx", "2em")
 //    .attr("dy", "2em")
 //    .attr("width", 50)
 //    .attr("height", 20)
 //    .attr("font-size",100)
 //    .attr("fill", "white")
 //    .text(function(d) { return d.pieces; });


	// 	svg3.selectAll("g.node").data(data)
	// 												.enter()
	// 												.append("g") 
	// 												.attr("transform", function(d, i) {	
	// 												  var factor = d.diameter/20,
	// 												  translate = "translate("+Math.random()*(width-100)+","+Math.random()*(height-100)+")",
	// 												  scale = "scale(" + factor + ")";								 
	// 												  return translate + " " + scale;
	// 												})
	// 												.append("use") 
	// 												.attr("xlink:href", "#bubble");

											

	// var gnodes3 = svg3.selectAll("g")

	// gnodes3.append("text")
 //    .attr("dx", "2em")
 //    .attr("dy", "2em")
 //    .attr("width", 50)
 //    .attr("height", 20)
 //    .attr("font-size",100)
 //    .attr("fill", "white")
 //    .text(function(d) { return d.diameter; });
	

	})


}

$(document).ready(ready);






