// rom data.js
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

//calling appendTable function for each object in data.js
tableData.forEach(appendTable);

//variable for a filter data button
var button = d3.select("#filter-btn");

//variable for a form, which accepts inpute data
var form = d3.select(".form-group");

//creating event handlers  
button.on("click", checkIng);
form.on("submit", checkIng);

//creating the event handler function for the button and form
// Complete the event handler function for the form
function checkIng() {

        //preventing the page from refreshing
        d3.event.preventDefault();
        
        //variables for different input elements in html code
        var inputElementDate = d3.select("#datetime");
        var inputElementCity = d3.select("#city");
        var inputElementState = d3.select("#state");
        var inputElementCountry = d3.select("#country");
        var inputElementShape = d3.select("#shape");

        //variables for user`s inputs
        var inputDate = inputElementDate.property("value");
        var inputCity = inputElementCity.property("value");
        var inputState = inputElementState.property("value");
        var inputCountry = inputElementCountry.property("value");
        var inputShape = inputElementShape.property("value");
        
        //variable for handling filtered data. Initial state of variable should 
        // include all the data
        var filteredData = tableData;
        
        //additional function for a condition check (witten as there were repeatable code for each 
        // user`s input)
        function conditionalCheck(input, item) {
            if (input != "") {
                tbody.html(""); 
                filteredData = filteredData.filter(sighting => sighting[item] === input);
                filteredData.forEach(appendTable);
                console.log(item)
            }
        }
        
        //condition that returns table in initial form (full data) in case when all user`s inputs are empty
        if (inputDate === "" && inputCity === "" && inputState === "" && inputCountry === "" && inputShape === "") {
                    tbody.html(""); 
                    tableData.forEach(appendTable);
        }
        // in case when there is at least one user`s input the filtering accures
        else {
                    conditionalCheck(inputDate, "datetime");
                    conditionalCheck(inputCity, "city");
                    conditionalCheck(inputState, "state");
                    conditionalCheck(inputCountry, "country");
                    conditionalCheck(inputShape, "shape"); 
        }       
}
        