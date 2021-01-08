// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function appendTable(sightingUFO) {
    row = tbody.append("tr");
    Object.entries(sightingUFO).forEach(function([key, value]) {
        row.append("td").text(value);
    })
}
tableData.forEach(appendTable);

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
  
  var table = tableData.forEach(appendTable);
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  
  tbody.html("");

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
  filteredData.forEach(appendTable);



}
