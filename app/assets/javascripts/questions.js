var ready;

var width = 700;
var height = 400;
ready = function(){

	d3.json("/kids.json", function(error, datafull) {
	  
	  data = datafull.slice(1,8);

	  var svg = d3.select("body").select("#mainkids")
	                             .attr("height", height)
			                				 .attr("width", width)

				

		svg.selectAll("g.node").data(data)
													.enter()
													.append("g") 
													.attr("transform", function(d, i) {	
													  var factor = d.hours/20,
													  translate = "translate("+90*i+","+40+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#game");


		svg.selectAll("text").data(data)
													.enter()
													.append("text") 
													.attr("transform", function(d, i) {	
													var factor = d.hours/20,
													translate = "translate("+(90*i)+","+40+")",
													scale = "scale(" + factor + ")";								 
													return translate;
													})
													.attr("fill","white")
													.attr("stroke", "grey")
      										.attr("stroke-width", ".6px")
													.style("opacity", 0)

													.text(function(d,i){
														return d.hours+"hours"
													})
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
													.attr("class", "labels");

		svg.selectAll("g.node").data(data)
													.enter()
													.append("g") 
													.attr("transform", function(d, i) {	
													  var factor = d.pieces/20,
													  translate = "translate("+90*i+","+300+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#choc");

		svg.selectAll("text").data(data)
													.enter()
													.append("text") 
													.attr("transform", function(d, i) {	
													var factor = d.diameter/20,
													translate = "translate("+(90*i)+","+170+")",
													scale = "scale(" + factor + ")";								 
													return translate;
													})
													.attr("fill","white")
													.attr("stroke", "grey")
      										.attr("stroke-width", ".6px")
													.style("opacity", 0)

													.text(function(d,i){
														return d.diameter+"cm"
													})
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
													.attr("class", "labels");

		svg.selectAll("g.node").data(data)
													.enter()
													.append("g") 
													.attr("transform", function(d, i) {	
													  var factor = d.diameter/20,
													  translate = "translate("+90*i+","+170+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#bubble");

    svg.selectAll("text").data(data)
													.enter()
													.append("text") 
													.attr("transform", function(d, i) {	
													var factor = d.pieces/20,
													translate = "translate("+(90*i)+","+300+")",
													scale = "scale(" + factor + ")";								 
													return translate;
													})
													.attr("fill","white")
													.attr("stroke", "grey")
      										.attr("stroke-width", ".6px")
													.style("opacity", 0)

													.text(function(d,i){
														return d.pieces+" pieces"
													})
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
													.attr("class", "labels");   

												
	})
											

}

$(document).ready(ready);






