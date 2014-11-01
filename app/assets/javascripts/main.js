var ready;


ready = function(){

        var width=1000;
        var height=400;

        var axislabels =["today","tomorrow","the day after tomorrow"];

        var svg = d3.select("body")
                    .select(".grid")
                    .attr("width",width)
                    .attr("height",height);

             
        var xscale = d3.time.scale()
            .domain([1,31])
            .range([0, width]);

        var xAxis = d3.svg.axis()
            .scale(xscale)
            .ticks(10)
            .tickSize(6, 0)
            .orient("top");
       
        var gx = svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

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
            // console.log(data);

            
            windgroup.selectAll("circle").data(data)
                .enter()
                .append("circle")
                .attr("r", 0)
                .attr("cy", 40)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .style('fill', 'gold')
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(50, 0)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r",function(d, i) {
                    return 5 * d.speed
                }) 


            windgroup.selectAll("text").data(data)
                .enter()
                .append("text")
                .attr("width",50)
                .attr("height",20)
                .style("opacity",0)
                .attr("y", 40)
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
                    return 50 * i
                })
                .text(function(d, i) {
                    return d.speed
                })
                .attr("class", "labels");

        });

        d3.json("/topics/temperature.json", function(error, json) {

            datat = json;
            console.log(datat);
            temperaturegroup.selectAll("circle").data(datat)
                .enter()
                .append("circle")
                .attr("cy", 120)
                .attr("r",0)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .style("fill","dodgerblue")
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(50, 0)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r", function(d, i) {
                    return 2 * d.temperature/50 });
               

              temperaturegroup.selectAll("text").data(datat)
                .enter()
                .append("text")
                .attr("width",50)
                .attr("height",20)
                .style("opacity",0)
                .attr("y", 120)
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
                    return 50 * i
                })
                .text(function(d, i) {
                    return d.temperature
                })
                .on()
                .attr("class", "labels");

        });

        d3.json("/topics/humidity.json", function(error, json) {
    
            datas = json;
            // console.log(datas);
            humiditygroup.selectAll("circle").data(datas)
                .enter()
                .append("circle")
                .attr("r",0)
                .attr("cy", 200)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .style("fill","deeppink")
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(50, 0)")
                .transition()
                .duration(1000) 
                .delay(100)
                .attr("r", function(d, i) {
                    return d.hum/5 });

            humiditygroup.selectAll("text").data(datas)
                .enter()
                .append("text")
                .attr("width",50)
                .attr("height",20)
                .style("opacity",0)
                .attr("y", 200)
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
                    return 50 * i
                })
                .text(function(d, i) {
                    return d.hum
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


