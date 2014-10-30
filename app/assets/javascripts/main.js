var ready;
var selectedElement = 0;
var currentX = 0;
var currentY = 0;
var currentMatrix = 0;


function selectElement(evt) {
  selectedElement = evt.target;
  currentX = evt.clientX;
  currentY = evt.clientY;
  currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');

  for(var i=0; i<currentMatrix.length; i++) {
  currentMatrix[i] = parseFloat(currentMatrix[i]);
  }

  selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
  selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
  selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
}

console.log(selectElement);

function moveElement(evt) {
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentMatrix[4] += dx;
  currentMatrix[5] += dy;

  selectedElement.setAttributeNS(null, "transform", "matrix(" + currentMatrix.join(' ') + ")");
  currentX = evt.clientX;
  currentY = evt.clientY;
}

function deselectElement(evt) {
  if(selectedElement != 0){
    selectedElement.removeAttributeNS(null, "onmousemove");
    selectedElement.removeAttributeNS(null, "onmouseout");
    selectedElement.removeAttributeNS(null, "onmouseup");
    selectedElement = 0;
  }
}

ready = function() {
  $("#table-filters>ul>li.active").removeClass("active");
  var umbrella = $("#umbrella");
  console.log(umbrella);

      var data;
      var datat;
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

        // console.log("g");
        // console.log(g);
        // $.each(umbrella.find("path"), function(i, e) {
        //   console.log(e);
        //   g.append("path").attr("d", $(e).attr("d"));
        // })

        // g.attr("transform", function(d,i){return "translate(" + (i * 40) + ", 30)" + " scale"+"("+d.speed+","+d.speed+")"})

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



