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
        
        
        var filteredData = tableData;
        
        if (inputDate === "" && inputCity === "" && inputState === "" && inputCountry === "" && inputShape === "") {
                    tbody.html(""); 
                    tableData.forEach(appendTable);
        }
        
        function conditionalCheck(input, item) {
                if (input != "") {
                    tbody.html(""); 
                    filteredData = filteredData.filter(sighting => sighting[item] === input);
                    filteredData.forEach(appendTable);
                    console.log(item)
                }
        }
        conditionalCheck(inputDate, "datetime");
        conditionalCheck(inputCity, "city");
        conditionalCheck(inputState, "state");
        conditionalCheck(inputCountry, "country");
        conditionalCheck(inputShape, "shape");

}
        