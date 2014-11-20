var ready;

var width = 1000;
var height = 600;
ready = function(){

	d3.json("/kids.json", function(error, datafull) {
	  
	  data = datafull.slice(1,8);

	  d3.select("body").select("#mainkids").attr("height", height)
			                				 					 .attr("width", width);

	  var svg1 = d3.select("body").select("#mainkids")
	  													 .append("svg")
	  													 .attr("class","svg1")
	                             .attr("height", height)
			                				 .attr("width", width)
		var svg2 = d3.select("body").select("#mainkids")
															 .append("svg")
	  													 .attr("class","svg2")
	                             .attr("height", height)
			                				 .attr("width", width)
		var svg3 = d3.select("body").select("#mainkids")
															 .append("svg")
	  													 .attr("class","svg3")
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

		gnodes1.append("text")
		.style("opacity", 0)
	  .attr("x", "0")
	  .attr("y", "0")
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
	  .text(function(d) { return d.hours; });

  
		// var tooltip = d3.select("body")
		// .append("div")
		// .attr("class","tooltip")
		// .style("position", "absolute")
		// .style("z-index", "10")
		// .style("visibility", "hidden")
		// .text("a simple tooltip");

		// gnodes1
		// .on("mouseover", function(){	
			 
		// tooltip.selectAll("div").html(data.hours)
		// 	return tooltip.style("visibility", "visible");})
		// .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		// .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
		
		// console.log(tooltip);
		

   


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
    .text(function(d) { return d.pieces; });


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
    .text(function(d) { return d.diameter; });
	

	})


}

$(document).ready(ready);




