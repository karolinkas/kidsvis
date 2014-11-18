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
													.attr("transform", function(d, i) {	
													  var factor = d.hours/20,
													  translate = "translate("+Math.random()*(width-50)+","+Math.random()*(height-50)+")",
													  scale = "scale(" + factor + ")";								 
													  return translate + " " + scale;
													})
													.append("use") 
													.attr("xlink:href", "#game");


		svg1.selectAll("text").data(data)
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

		svg2.selectAll("text").data(data)
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
														return d.pieces+"cm"
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

    svg3.selectAll("text").data(data)
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
	

//bubble experiment

// var diameter = 960,
//     format = d3.format(",d"),
//     color = d3.scale.category20c();

// var bubble = d3.layout.pack()
//     .sort(null)
//     .size([diameter, diameter])
//     .padding(1.5);

// var svg = d3.select("body").append("svg")
//     .attr("width", diameter)
//     .attr("height", diameter)
//     .attr("class", "bubble");

// d3.json("/kids.json", function(error, root) {
//   var node = svg.selectAll(".node")
//       .data(bubble.nodes(classes(root))
//       .filter(function(d) { return !d.hours; }))
//     .enter().append("g")
//       .attr("class", "node")
//       .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//   node.append("title")
//       .text(function(d) { return d.className + ": " + format(d.value); });

//   node.append("circle")
//       .attr("r", function(d) { return d.r; })
//       .style("fill", function(d) { return color(d.packageName); });

//   node.append("text")
//       .attr("dy", ".3em")
//       .style("text-anchor", "middle")
//       .text(function(d) { return d.className.substring(0, d.r / 3); });
// });

// // Returns a flattened hierarchy containing all leaf nodes under the root.
// function classes(root) {
//   var classes = [];

//   function recurse(name, node) {
//     if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
//     else classes.push({packageName: name, className: node.name, value: node.hours});
//   }

//   recurse(null, root);
//   return {children: classes};
// }

// d3.select(self.frameElement).style("height", diameter + "px");


}

$(document).ready(ready);






