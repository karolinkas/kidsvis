var ready;

var width = 700;
var height = 400;
ready = function(){

	d3.json("/kids.json", function(error, json) {

	  data = json
	  
	  var svg = d3.select("body").select("#mainkids")
	                             .attr("height", height)
			                				 .attr("width", width)

		var xscale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0,width]);
		var yscale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0,height]);
				

		svg.selectAll("g.node")
													.data(data)
													.enter()
													.append("g") 
													.attr("transform", function(d, i) {	
													var factor = d.diameter/20,
													position = 60 * i * factor,
													translate = "translate("+80*i+","+50+")",
													scale = "scale(" + factor + ")";
													 
													return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#bubble");

	})
											

}

$(document).ready(ready);
$(document).on('page:load', ready);






