slide = 0

function makeWind(){
        d3.json("/topics/wind.json", function(error, json) {
            beginning = slide*18+1
            end = beginning + 17            
            dataw = json.slice(beginning, end);

            windgroup.selectAll("circle").remove();
            windgroup.selectAll("circle").data(dataw)
                                         .enter()
                                         .append("circle")
                                         .attr("r", 0)
                                         .attr("cy", 40)
                                         .attr("cx", function(d, i) {
                                            return 50 * i
                                         })
                                         .style('fill', 'deeppink')
                                         .attr("height", 10)
                                         .attr("width", 20)
                                         .attr("transform", "translate(26, 25)")
                                         .transition()
                                         .duration(1000) 
                                         .delay(100)
                                         .attr("r",function(d, i) {
                                            return xscale(d.speed/7)+40
                                         });
        })

    }


function travelTime(ahead) {
    if(ahead) {
        slide += 1
    }else{
        slide -= 1
    }

    makeWind();
    

    
    d3.json("/topics/temperature.json", function(error, json) {
        beginning = slide*18+1
        end = beginning + 17 
        datat = json.slice(beginning, end);
       
        temperaturegroup.selectAll("circle").remove();
        temperaturegroup.selectAll("circle").data(datat)
                                            .enter()
                                            .append("circle")
                                            .attr("cy", 120)
                                            .attr("r",0)
                                            .attr("cx", function(d, i) {
                                                return 50 * i
                                            })
                                            .style("fill","gold")
                                            .attr("height", 10)
                                            .attr("width", 20)
                                            .attr("transform", "translate(26, 65)")
                                            .transition()
                                            .duration(1000) 
                                            .delay(100)
                                            .attr("r", function(d, i) {
                                                return xscale(d.temperature/200) 
                                            });
    })

    d3.json("/topics/humidity.json", function(error, json) {
    
        beginning = slide*18+1
        end = beginning + 17            
        datah = json.slice(beginning, end);
           
        humiditygroup.selectAll("circle").remove();
        humiditygroup.selectAll("circle").data(datah)
                .enter()
                .append("circle")
                .attr("r",0)
                .attr("cy", 200)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .style("fill","dodgerblue")
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(26, 100)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r", function(d, i) {
                    return xscale(d.hum/55) });

    })

    
}


    





function travelAhead() {
    travelTime(true);
}

function travelBack() {
    travelTime(false);
}


var ready;


ready = function(){

        var margin = {top: 50, right: 50, bottom: 50, left: 50};

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("body")
                    .select(".grid")
                    .attr("width",width)
                    .attr("height",height);

             
        var xscale = d3.scale.linear()
            .domain([1,31])
            .range([0, width]);

        var xAxis = d3.svg.axis()
            .scale(xscale)
            .ticks(22)
            .tickSize(6, 0)
            .orient("top");
       
        var gx = svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y",width)
            .attr("dy", ".0em")
            .style("text-anchor", "start")
            .attr("fill","grey")
            .text("hours");


        var d = [{ x: 0, y: 0 }];

        var g1 = d3.select("body")
                    .select(".grid")
                    .data(d)
                    .append("g")
                    .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})
                    .call(onDragDrop(dragmove, dropHandler));
                   
           
        var g2 = d3.select("body")
                   .select(".grid")
                   .data(d)
                   .append("g")
                   .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})
                   .call(onDragDrop(dragmove, dropHandler)); 

        
        var g3 = d3.select("body")
                    .select(".grid")
                    .data(d)
                    .append("g")
                    .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})
                    .call(onDragDrop(dragmove, dropHandler));


        var windgroup = g1.append("svg")
          .attr("id", "windsvg");
        


        var temperaturegroup = g2.append("svg")
          .attr("id", "temperaturesvg");
       

        var humiditygroup = g3.append("svg")
          .attr("id", "humiditysvg");

        var rect = windgroup.selectAll("div")
                        


        function onDragDrop(dragHandler, dropHandler) {
            var drag = d3.behavior.drag();

            drag.on("drag", dragHandler)
                .on("dragend", dropHandler);
            return drag;
        }

        function dropHandler(d) {
            console.log('dropped');
        }

        function dragmove(d) {

            d.y += d3.event.dy;
            d3.select(this).attr("transform", "translate(" + d.x + "," + d.y + ")");
        }




        d3.json("/topics/wind.json", function(error, json) {
            
            data = json;
            console.log(data);
            
            windgroup.selectAll("circle").data(data)
                .enter()
                .append("circle")
                .attr("r", 0)
                .attr("cy", 40)
                .attr("cx", function(d, i) {
                    return 50 * (i-21)
                })
                .style('fill', 'deeppink')
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(500, 25)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r",function(d, i) {
                    return xscale(d.speed/7)+40
                }); 


            windgroup.selectAll("text").data(data)
                .enter()
                .append("text")
                .attr("width",50)
                .attr("height",20)
                .style("opacity",0)
                .attr("y", 60)
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
                .attr("x", function(d, i) {
                    return 50 * (i-21)
                })
                .text(function(d, i) {
                    return d3.round(d.speed) + " mps"
                })
                .attr("class", "labels");

        });

        d3.json("/topics/temperature.json", function(error, json) {


            beginning = slide*18+1
            end = beginning + 17            
            datat = json.slice(beginning, end);



           
            temperaturegroup.selectAll("circle").data(datat)
                .enter()
                .append("circle")
                .attr("cy", 120)
                .attr("r",0)
                .attr("cx", function(d, i) {
                    return 50 * (i-21)
                })
                .style("fill","gold")
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(500, 65)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r", function(d, i) {
                    return xscale(d.temperature/200) });
               

              temperaturegroup.selectAll("text").data(datat)
                .enter()
                .append("text")
                .attr("width",50)
                .attr("height",20)
                .style("opacity",0)
                .attr("y", 190)
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
                .attr("x", function(d, i) {
                    return 50 * (i-21)
                })
                .text(function(d, i) {
                    return d3.round((d.temperature - 273.15)) + "°C";
                })
                .on()
                .attr("class", "labels");

        });

        d3.json("/topics/humidity.json", function(error, json) {
    

            beginning = slide*18+1
            end = beginning + 17            
            datah = json.slice(beginning, end);



           
            humiditygroup.selectAll("circle").data(datah)
                .enter()
                .append("circle")
                .attr("r",0)
                .attr("cy", 200)
                .attr("cx", function(d, i) {
                    return 50 * (i-21)
                })
                .style("fill","dodgerblue")
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(500, 100)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r", function(d, i) {

                    return xscale(d.hum/30) });



            humiditygroup.selectAll("text").data(datah)
                .enter()
                .append("text")
                .attr("width",50)
                .attr("height",20)
                .style("opacity",0)
                .attr("y", 300)
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
                .attr("x", function(d, i) {
                    return 50 * (i-21)
                })
                .text(function(d, i) {
                    return d.hum + "%"
                })
                .attr("class", "labels");

        });



} // Pageload





    // style.display property to "none"
    // and
    // show() and hide function

//     $("button").click(function(){
//   $("element").toggle();
// });

$(document).ready(ready);


