var ready;


ready = function(){

	d3.json("/kids.json", function(error, json) {

	  data = json
	  
	  var svg = d3.select("body").select("#mainkids")
	                             .attr("height", 600)
			                				 .attr("width", 1000)

		var xscale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0,width]);
		var yscale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0,height]);
		
			                				 

	  svg.selectAll("circle").data(data)
			                .enter()
			                .append("circle")
			                .attr("r", 0)
			                .attr("cy", function(d, i) {
			                    return 20*d.hours
			                })
			                .attr("cx", function(d, i) {
			                    return 50 * i
			                })
			                .style('fill', 'deeppink')
			                .attr("height", 10)
			                .attr("width", 20)
			                .attr('transform', "translate(50 ,50 )")
			                .transition()
			                .duration(1000) 
			                .delay(100)
			                .attr("r",5); 



		})

}

$(document).ready(ready);
$(document).on('page:load', ready);






