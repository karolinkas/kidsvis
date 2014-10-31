var ready;


ready = function() {


        var d = [{ x: 20, y: 20 }];

        var g1 = d3.select("body")
                    .select(".mainsvg")
                    .data(d)
                    .append("g")
                    .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})
                    .call(onDragDrop(dragmove, dropHandler));
                   

           
        var g2 = d3.select("body")
                   .select(".mainsvg")
                   .data(d)
                   .append("g")
                   .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})
                   .call(onDragDrop(dragmove, dropHandler)); 
        
        var g3 = d3.select("body")
                    .select(".mainsvg")
                    .data(d)
                    .append("g")
                    .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})
                    .call(onDragDrop(dragmove, dropHandler));

        var windgroup = g1.append("svg")
          .attr("width",800)
          .attr("height",300)
          .attr("id", "windsvg");
          

        var temperaturegroup = g2.append("svg")
          .attr("width",800)
          .attr("id", "temperaturesvg");
       

        var raingroup = g3.append("svg")
          .attr("width",800)
          .attr("id", "rainsvg");
                        


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
                .attr("r", function(d, i) {
                    return 2 * d.speed
                })
                .attr("cy", 40)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(50, 0)");




            windgroup.selectAll("text").data(data)
                .enter()
                .append("text")
                .attr("y", 40)
                .attr("x", function(d, i) {
                    return 50 * i
                })
                .style('opacity', 0.0)
                .style('fill', 'orange')
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
                .attr("r", function(d, i) {
                    return 2 * d.degrees
                })
                .attr("cy", 40)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(50, 0)");



        })

        d3.json("/topics/rain.json", function(error, json) {

          
            datat = json;
            console.log(datat);
            raingroup.selectAll("circle").data(datat)
                .enter()
                .append("circle")
                .attr("r", function(d, i) {
                    return 2 * d.prec
                })
                .attr("cy", 40)
                .attr("cx", function(d, i) {
                    return 50 * i
                })
                .attr("height", 10)
                .attr("width", 20)
                .attr("transform", "translate(50, 0)");

        })

        

    } // Pageload


    // style.display property to "none"
    // and
    // show() and hide function

//     $("button").click(function(){
//   $("element").toggle();
// });

$(document).ready(ready);
