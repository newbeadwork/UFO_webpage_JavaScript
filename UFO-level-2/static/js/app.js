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
//!!!!!!!!!
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
  
  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputDate = inputElementDate.property("value");
  var inputCity = inputElementCity.property("value");
  var inputState = inputElementState.property("value");
  var inputCountry = inputElementCountry.property("value");
  var inputShape = inputElementShape.property("value");
  
  var filteredData = [];
  
  if (inputDate != "") {
    tbody.html("");
    filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
    filteredData.forEach(appendTable); 
    console.log(1)
  }
  else {
    
    //existing table should be cleaned (that applies also in cases if
    //there was not empty user`s input before without refreshing the web-page)
    tbody.html("");
    
    //full data appends to the html table
    filteredData = tableData; 
    filteredData.forEach(appendTable);
   }

  if (inputCity != "") {
      tbody.html(""); 
      filteredData = filteredData.filter(sighting => sighting.city === inputCity);
      filteredData.forEach(appendTable);
      console.log(inputCity);
  }
  
  if (inputState != "") {
    tbody.html("");
    filteredData = tableData.filter(sighting => sighting.datetime === inputState);
    filteredData.forEach(appendTable);
    console.log(inputState)
  }
  
  if (inputCountry != "") {
    tbody.html("");
    filteredData = tableData.filter(sighting => sighting.datetime === inputCountry);
    filteredData.forEach(appendTable);
  }
  
  
  if (inputShape != "") {
    tbody.html("");
    filteredData = tableData.filter(sighting => sighting.datetime === inputShape);
    filteredData.forEach(appendTable);
  }
  
}
