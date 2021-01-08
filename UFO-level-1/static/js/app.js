// from data.js
var tableData = data;

// YOUR CODE HERE!



var tbody = d3.select("tbody");

tableData.forEach(function(sightingUFO) {
    row = tbody.append("tr");
    Object.entries(sightingUFO).forEach(function([key, value]) {
        row.append("td").text(value);
    });
});


var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", checkIng);
form.on("submit", checkIng);

// Complete the event handler function for the form
function checkIng() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
}
 

  //var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  //console.log(filteredData);
