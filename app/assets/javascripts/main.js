var ready;

ready = function() {

var umbrella = $("#umbrella");
console.log(umbrella);

    var data;
    d3.json( "/topics/wind.json", function(error, json) { 
      var svg = d3.select("#windsvg");
      data = json;
      console.log(data);
      svg.selectAll("circle").data(data) 
                           .enter() 
                           .append("circle")         
                           .attr("r",function(d,i){ return 2*d.speed })
                           .attr("cy",30)
                           .attr("cx", function(d,i){ return 40*i })
                           .attr("height",10)
                           .attr("width",20 )
                           .attr("transform", "translate(50, 0)")

      // console.log("g");
      // console.log(g);
      // $.each(umbrella.find("path"), function(i, e) {
      //   console.log(e);
      //   g.append("path").attr("d", $(e).attr("d"));
      // }),

      // g.attr("transform", function(d,i){return "translate(" + (i * 40) + ", 30)" + " scale"+"("+d.speed+","+d.speed+")"})

    svg.selectAll("text").data(data)
                         .enter()
                         .append("text")
                         .attr("y",30)
                         .attr("x", function(d,i){ return 40*i })
                         .style('opacity',0.0)
                         .style('fill','orange')
                         .on('mouseover', function(d){ 
                           d3.select(this).style({opacity:'1.0'})
                         })
                         .on('mouseout', function(d){ 
                           d3.select(this).style({opacity:'0.0'})
                         })
                         .text(function(d,i){return d.speed})
                         .attr("class","labels");
    });
  }


$(document).ready(ready);
// $(document).on('page:load', ready);


