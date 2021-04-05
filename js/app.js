'use strict';

// Random number generator function
// Global declarations
let hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm '];
function randomGenerator(min ,max) {

    return Math.floor(Math.random() * (max - min)) + min;
}
//  Constructor for cities

function City (minCust , maxCust , avgCookie ,total ) {
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.total = total ;
    this.costumerHrGenerator = [];
    this.averageSales = [];
}
// Prototype functions and properties 


let hourlySales = [];
City.prototype.customers = function (){
    for (let i = 0; i < hours.length; i++) {
        this.costumerHrGenerator[i] = randomGenerator(this.minCust , this.maxCust);
    }
};

City.prototype.sales = function() {
    for (let i = 0; i < hours.length; i++) {
        this.averageSales[i] = Math.floor(this.costumerHrGenerator[i] * this.avgCookie);
        this.total += this.averageSales[i];
    }
};

let Seattle = new City(23,65,6.3 , 0);
Seattle.customers();
Seattle.sales();
let Tokyo = new City(3,24,1.2 , 0);
Tokyo.customers();
Tokyo.sales();
let Dubai = new City(11,38,3.7 , 0);
Dubai.customers();
Dubai.sales();
let Paris = new City(20,38,2.3 , 0);
Paris.customers();
Paris.sales();
let Lima = new City(2,16,4.6 , 0);
Lima.customers();
Lima.sales();


// Hourly sales calculator

function hourlySalesCalculator () {
    for (let i = 0 ; i < hours.length ; i++) {
        hourlySales[i] =Seattle.averageSales[i] + Tokyo.averageSales[i] + Dubai.averageSales[i] + Paris.averageSales[i] + Lima.averageSales[i];
    }
}
hourlySalesCalculator();

// Table creating 

// let parentTable = document.getElementById('Container');
// let tableElement = document.createElement('table');
// parentTable.appendChild(tableElement);
