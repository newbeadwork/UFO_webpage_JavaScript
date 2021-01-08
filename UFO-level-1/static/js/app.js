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