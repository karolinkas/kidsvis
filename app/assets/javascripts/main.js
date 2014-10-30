var ready;


ready = function() {
      
    function onDragDrop(dragHandler, dropHandler) {
        var drag = d3.behavior.drag();

    drag.on("drag", dragHandler)
    .on("dragend", dropHandler);
    return drag;
    }


    function dragmove(d) {
              d.x += d3.event.dx;
              d.y += d3.event.dy;
              d3.select(this).attr("transform", "translate(" + d.x + "," + d.y + ")");
    }


      d3.json( "/topics/wind.json", function(error, json) { 
        var windsvg = d3.select("#windsvg");
        data = json;
        console.log(data);

                           
        windsvg.selectAll("circle").data(data) 
                             .enter() 
                             .append("circle")         
                             .attr("r",function(d,i){ return 2*d.speed })
                             .attr("cy",40)
                             .attr("cx", function(d,i){ return 40*i })
                             .attr("height",10)
                             .attr("width",20 )
                             .attr("transform", "translate(50, 0)");
                           

        

      windsvg.selectAll("text").data(data)
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

    d3.json("/topics/temperature.json", function(error,json){

      var temperaturesvg = d3.select("#temperaturesvg");
        datat = json;
        console.log(datat);
        temperaturesvg.selectAll("circle").data(datat) 
                             .enter() 
                             .append("circle")         
                             .attr("r",function(d,i){ return 2*d.degrees })
                             .attr("cy",40)
                             .attr("cx", function(d,i){ return 40*i })
                             .attr("height",10)
                             .attr("width",20 )
                             .attr("transform", "translate(50, 0)");
                            


    })

     d3.json("/topics/rain.json", function(error,json){

      var rainsvg = d3.select("#rainsvg");
        datat = json;
        console.log(datat);
        rainsvg.selectAll("circle").data(datat) 
                             .enter() 
                             .append("circle")         
                             .attr("r",function(d,i){ return 2*d.prec })
                             .attr("cy",40)
                             .attr("cx", function(d,i){ return 40*i })
                             .attr("height",10)
                             .attr("width",20 )
                             .attr("transform", "translate(50, 0)");
                       

  })

          
}// Pageload

$(document).ready(ready);



