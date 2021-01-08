//from data.js
var tableData = data;

//tbody variable for appending a table to html in future
var tbody = d3.select("tbody");

//function appendTable, which takes values from the data and append to html table
function appendTable(sightingUFO) {
    row = tbody.append("tr");
    Object.entries(sightingUFO).forEach(function([key, value]) {
        row.append("td").text(value);
    })
}
tableData.forEach(appendTable);

//variable for a filter data button
var button = d3.select("#filter-btn");

//variable for a form, which accepts inpute data
var form = d3.select(".form-group");

//creating event handlers 
button.on("click", checkIng);
form.on("submit", checkIng);

//creating the event handler function for the form
function checkIng() {

  //preventing the page from refreshing
  d3.event.preventDefault();
  
  //variable for an input element 
  var inputElement = d3.select("#datetime");

  //variable for user`s value property of the input element
  var inputDate = inputElement.property("value");
  
  //condition for handling filled/empty user`s input
  //if user`s input has a value than filtering appears
  if (inputDate != "") {
    
    //existing table should be cleaned
    tbody.html("");
    
    //data from data.js should be filtered on user`s input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
    
    //filtered data should be appended to the html table
    filteredData.forEach(appendTable);
   }
  //in other cases (user`s input is empty) return to initial state accures
  else {
    
    //existing table should be cleaned (that applies also in cases if
    //there was not empty user`s input before without refreshing the web-page)
    tbody.html("");
    
    //full data appends to the html table
    tableData.forEach(appendTable);  
   }
}
