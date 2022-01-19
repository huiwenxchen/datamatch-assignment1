// PART 2 of the Assingment, make sure you've done PART 1 first!

// Step 1: Select the body of the HTML document and append an h2 element
// with the text "Starting Part 2! We're Learning D3"
var Addtext = d3.select("body")
        .append("h2")
        .text("Starting Part 2! We're Learning D3!");
// Step 2: Select the body again and append a div with the id dynamic-content
var addDiv = d3.select("body")
    .append("div")
    .attr("id", "dynamic-content");

// Step 3: Select the div you just created (using its id!) and append a
// paragraph with some text of your choice (you can also style this if you want!)
var addparagraph = d3.select("#dynamic-content")    
    .append("p")
    .text("D3 visuals");

// PART II: Binding data

var schools = [
    { name: "Harvard", signups: 4695, region: "Northeast" },
    { name: "UW Madison", signups: 4232, region: "Midwest" },
    { name: "WashU", signups: 3880, region: "Midwest" },
    { name: "Brown", signups: 2603, region: "Northeast" },
    { name: "UChicago", signups: 2088, region: "Midwest" },
    { name: "UW", signups: 2042, region: "West" }
];

// Step 1: Append a new SVG element to HTML document with D3
// (width = 500px, height = 500px)
var svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

// Step 2: Append a new SVG circle for every object in the schools array
//circles (does not exist yet but will be created) will be bound to each element in schools
svg.selectAll("cirlce")
    .data(schools)
    .enter()
    .append("circle")

// Step 3: Define the following dynamic properties for each circle:
//   - Position: set the x/y coordinates and make sure that the circles don’t overlap each other
//   - Radius: schools with over 3500 signups should be twice as big as schools with less than 2500 signups
//   - Colors: use a different color for each region
//   - Border: add a border to every circle (SVG property: stroke)
    .attr("stroke", "#FF957E")
    .attr("fill", function(d){
        if(d.region === "Midest"){
            return "black";
        }
        else if (d.region === "Northeast"){
            return "red";
        }
        else if (d.region === "West"){
            return "yellow";
        }
    })
    //make each circle 50 spacing apart and setting first circle at x position = 30\
    .attr("cx", function(d, i){
        return 30+50*i;
    })
    .attr("cy", 30)
    .attr("r", function(d) {
        if (d.signups > 3500){
            return 20;
        }
        else {
            return 10;
        }
    });

// PART III: Loading data

// Step 4: Prepare the data - each value of the CSV file is stored as a string,
// but we want numerical values to be numbers.
var rowConverter = function(d){
    return{
        school: d.school,
        signups: +d.signups,
        x: +d.x,
        y: +d.y,
        eu: d.eu,
    };
}

// Step 1: Use D3 to load the CSV file "schools.csv". then, print the data
// to the console and inspect it in your browser
d3.csv("../data/schools.csv", rowConverter, function(data) {
    console.log(data);



// Step 2: Filter the dataset: Filter the dataset to only include schools that are
// part of the Datamatch Schools (using the datamatchSchool variable).
var filteredData = data.filter(function(row) {
    return row.eu === "TRUE";
})

console.log(filteredData);


// Step 3: Append a new paragraph to your HTML document that shows the
// number of Datamatch schools
var numberCount = filteredData.length;
var Addtext = d3.select("body")
    .data(filteredData)
    .enter()
    .append("p")
    .text(numberCount);

let width = 700;
let padding = 20;

let xScale = d3.scaleLinear()
// d3.extent finds the max and min
    .domain(d3.extent(filteredData, function(d){
        return d.signups;
    }))
    //t define
    .range(t[padding, width - padding]);

// Step 5: Draw an SVG circle for each school in the filtered dataset
//   - All the elements (drawing area + circles) should be added dynamically with D3
//   - SVG container: width = 700px, height = 550px
//   - Use the randomly generated x/y coordinates for each school from the dataset to position the circles
var newCircle = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", 550);



// Step 2: Append a new SVG circle for every object in the schools array
svg.selectAll("cirlce")
    .data(filteredData)
    .enter()
    .append("circle")
    .attr("cy", function(d){
        return d.y;
    })
    .attr("cx", function(d){
        return xScale(d.signups);
    })


// Step 6: Change the radius of the circle to be data-dependent
//   - The radius should be 5px for schools with signups less than 500
//   - The radius for all other schools should be 10px
    .attr("r", function(d){
        if (d.signups < 500)
        {
               return 5;
        }
        else 
        {
            return 10;
        }
    });



// Step 7: Add labels with the names of the schools
//   - Use the SVG text element
//   - All the elements should be the class of school-label
//   - The labels should only be visible for schools with signups greater than 500

svg.selectAll("text")
    .data(filteredData)
    .enter()
    .append("text")
    .attr("class", "school")
    .text(function(d)
    {
        if (d.signups > 500)
        {
            return d.school;
        }     
    })
    .attr("y", function(d){
        return d.y + 10;
    })
    .attr("x", function(d){
        return xScale(d.signups) + 20;
    })
    

let xAxis =  d3.axisBottom(xScale)
    .ticks(20)


svgContainer.append("g")
    .attr("class", "axis xAxis")
    .attr("transform", "translate (0, " + (550 - padding) +")")
    .call(xAxis)




// Step 8: Styling - in the external stylesheet, do some styling
//   - Make sure to at least style school-label with font size = 11 px and
//   text anchor = middle
    .attr("text-anchor", "middle")
    .attr("font-size", "11px")
    .attr("fill", "red")
})
// Optional bonus step: add tooltips displaying the country for each school
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73