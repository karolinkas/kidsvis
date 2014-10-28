var ready;

ready = function() {

var svg = d3.select("svg");

 $.ajax({ 
  url:"http://api.openweathermap.org/data/2.5/forecast/city?id=3128760&APPID=da6db9aad545136ce8708eb2d76c2559"


 }).done(function(data) {
   
   svg.selectAll("circle").data(data.list) 
                          .enter() 
                          .append("circle")     
                          .attr("r",function(d,i){ return d.wind["speed"]*3 })
                          .attr("cy",30)
                          .attr("cx", function(d,i){ return 40*i })
                          .attr("height",10)
                          .attr("width",20 )

    svg.selectAll("text").data(data.list)
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
                         .text(function(d,i){return d.dt_txt});


   console.log(data);                   
   
   $("#mybox").html(JSON.stringify(data));            
    }).fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
    });

}

$(document).ready(ready);
$(document).on('page:load', ready);

