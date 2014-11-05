var ready;

var width = 700;
var height = 400;
ready = function(){

	d3.json("/kids.json", function(error, data) {
	  
	  var svg = d3.select("body").select("#mainkids")
	                             .attr("height", height)
			                				 .attr("width", width)

		var xscale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0,width]);
		var yscale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0,height]);
				

		// .style("opacity", 0)
  //                   .attr("y", 45)
  //                   .on('mouseover', function(d) {
  //                       d3.select(this).style({
  //                           opacity: '1.0'
  //                       })
  //                   })
  //                   .on('mouseout', function(d) {
  //                       d3.select(this).style({
  //                           opacity: '0.0'
  //                       })
  //                   })


    svg.selectAll("text").data(data)
													.enter()
													.append("text") 
													.attr("transform", function(d, i) {	
													var factor = d.diameter/20,
													translate = "translate("+90*i+","+90+")",
													scale = "scale(" + factor + ")";								 
													return translate;
													})
													.attr("fill","white")
													.text(function(d,i){
														return d.diameter
													});
                


		svg.selectAll("g.node").data(data)
													.enter()
													.append("g") 
													.attr("transform", function(d, i) {	
													  var factor = d.diameter/20,
													  translate = "translate("+90*i+","+90+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#bubble");

	})
											

}

$(document).ready(ready);






