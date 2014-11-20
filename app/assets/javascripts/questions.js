var ready;


var margin = {top: 80, right: 80, bottom: 80, left: 80};

var width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

ready = function(){

	d3.json("/kids.json", function(error, datafull) {
	  
	  data = datafull.slice(1,8);

	  d3.select("body").select("#mainkids")
	    .attr("width", width + margin.left + margin.right)
    	.attr("height", height + margin.top + margin.bottom)
  		.append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	  var svg1 = d3.select("body").select("#mainkids")
	  													 .append("svg")
	  													 .attr("class","svg1")
	                             .attr("height", height + margin.top + margin.bottom)
			                				 .attr("width", width + margin.left + margin.right)
			                				 .append("g")
    													 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var svg2 = d3.select("body").select("#mainkids")
															 .append("svg")
	  													 .attr("class","svg2")
	                             .attr("height", height + margin.top + margin.bottom)
			                				 .attr("width", width + margin.left + margin.right)
			                				 .append("g")
    													 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var svg3 = d3.select("body").select("#mainkids")
															 .append("svg")
	  													 .attr("class","svg3")
	                             .attr("height", height + margin.top + margin.bottom)
			                				 .attr("width", width + margin.left + margin.right)
			                				 .append("g")
    													 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		svg1.selectAll("g.node").data(data)
													.enter()
													.append("g")
													.attr("class","node")
													.attr("transform", function(d, i) {	
													  var factor = d.hours/20,
													  translate = "translate("+Math.random()*(width-100)+","+Math.random()*(height-100)+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#game");

		var gnodes1 = svg1.selectAll("g")

		gnodes1.append("text")
		.style("opacity", 0)
	  .attr("x", "30")
	  .attr("y", "30")
	  .attr("font-size",100)
	  .attr("fill", "white")
	  .on('mouseover', function(d) {
      d3.select(this).style({
          opacity: '1.0'
      })
  	})
    .on('mouseout', function(d) {
          d3.select(this).style({
              opacity: '0.0'
       })
     })
	  .text(function(d) { return d.hours + " hours"; });

		svg2.selectAll("g.node").data(data)
			.enter()
			.append("g") 
			.attr("transform", function(d, i) {	
			  var factor = d.pieces/20,
			  translate = "translate("+Math.random()*(width-100)+","+Math.random()*(height-100)+")",
			  scale = "scale(" + factor + ")";								 
			  return translate + " " + scale;
			})
			.append("use") 
			.attr("xlink:href", "#choc");

    var gnodes2 = svg2.selectAll("g")

    gnodes2.append("text")
    .style("opacity", 0)
    .attr("width", 50)
    .attr("height", 20)
    .attr("font-size",100)
    .attr("fill", "white")
    .on('mouseover', function(d) {
      d3.select(this).style({
          opacity: '1.0'
      })
  	})
    .on('mouseout', function(d) {
          d3.select(this).style({
              opacity: '0.0'
       })
     })
    .text(function(d) { return d.pieces+" pieces"; });


		svg3.selectAll("g.node").data(data)
													.enter()
													.append("g") 
													.attr("transform", function(d, i) {	
													  var factor = d.diameter/20,
													  translate = "translate("+Math.random()*(width-100)+","+Math.random()*(height-100)+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#bubble");

											

	var gnodes3 = svg3.selectAll("g")

	gnodes3.append("text")
	  .style("opacity", 0)
    .attr("width", 50)
    .attr("height", 20)
    .attr("x", "30")
	  .attr("y", "30")
    .attr("font-size",100)
    .attr("fill", "white")
    .on('mouseover', function(d) {
      d3.select(this).style({
          opacity: '1.0'
      })
  	})
    .on('mouseout', function(d) {
          d3.select(this).style({
              opacity: '0.0'
       })
     })
    .text(function(d) { return d.diameter+"cm"; });
	

	})


}

$(document).ready(ready);




