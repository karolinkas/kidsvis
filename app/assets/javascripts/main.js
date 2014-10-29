var ready;

ready = function() {

var svg = d3.select("svg");


$.get( "/retrieve_data_fromAPI", function(data) {
  
    // console.log(data.blob);
}).done(function(data) {
    
      svg.selectAll("circle").data(data.blob.list) 
                          .enter() 
                          .append("circle")
                          .attr("r",0)
                          .transition()
                          .delay( 200 * i )     
                          .attr("r",function(d,i){ return d.wind["speed"]*3 })
                          .attr("cy",30)
                          .attr("cx", function(d,i){ return 40*i })
                          .attr("height",10)
                          .attr("width",20 )

    svg.selectAll("text").data(data.blob.list)
                         .enter()
                         .append("text")
                         .attr("y",30)
                         .attr("x", function(d,i){ return 20+40*i })
                         .style('opacity',0.0)
                         .style('fill','orange')
                         .on('mouseover', function(d){ 
                           d3.select(this).style({opacity:'1.0'})
                         })
                         .on('mouseout', function(d){ 
                           d3.select(this).style({opacity:'0.0'})
                         })
                         .text(function(d,i){return d.dt_txt})
                         .attr("class","labels");


  })
  .fail(function() {
   console.log("fail");
  })
  .always(function() {
   
}); 

}


$(document).ready(ready);
$(document).on('page:load', ready);

