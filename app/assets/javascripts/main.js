var ready;

ready = function() {

var svg = d3.select("svg");

 $.ajax({ url:"http://api.openweathermap.org/data/2.5/forecast/city?id=3128760&APPID=da6db9aad545136ce8708eb2d76c2559"
 }).done(function(data) {
   
   svg.selectAll("circle").data(data.list) 
                      .enter() 
                      .append("circle")     
                      .attr("r",function(d,i){ return d.wind["speed"]*3 })
                      .attr("cy",30)
                      .attr("cx", function(d,i){ return 40*i })
                      .attr("height",10)
                      .attr("width",20 )
   console.log(data);                   
   
   $("#mybox").html(JSON.stringify(data));            
    }).fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
    });

}

$(document).ready(ready);
$(document).on('page:load', ready);

