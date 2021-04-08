'use strict';

// Random number generator function
// Global declarations
let hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm '];
function randomGenerator(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}
let totalOfTotals = 0;
let parentTable = document.getElementById('Container');
let tableElement = document.createElement('table');
parentTable.appendChild(tableElement);
let cities = [];
//  Constructor for cities

function City(minCust, maxCust, avgCookie, total, name) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.total = total;
    this.costumerHrGenerator = [];
    this.averageSales = [];
    cities.push(this);
}
// Prototype functions and properties 


City.prototype.customers = function () {
    for (let i = 0; i < hours.length; i++) {
        this.costumerHrGenerator[i] = randomGenerator(this.minCust, this.maxCust);
    }
};
City.prototype.render = function () {
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    let tableCell = document.createElement('td');
    trElement.appendChild(tableCell).textContent = this.name;
    for (let i = 0; i <= hours.length; i++) {
        if (i === 14) {

            let tableCell = document.createElement('td');
            trElement.appendChild(tableCell).textContent = this.total;
        }
        else {
            let tableCell = document.createElement('td');
            trElement.appendChild(tableCell).textContent = this.averageSales[i];
        }
    }



};


City.prototype.sales = function () {
    this.total = 0;
    for (let i = 0; i < hours.length; i++) {
        this.averageSales[i] = Math.floor(this.costumerHrGenerator[i] * this.avgCookie);
        this.total += this.averageSales[i];
    }
};


let Seattle = new City(23, 65, 6.3, 0, 'Seattle');
console.log(Seattle);
let Tokyo = new City(3, 24, 1.2, 0, 'Tokyo');
console.log(Tokyo);
let Dubai = new City(11, 38, 3.7, 0, 'Dubai');
console.log(Dubai);
let Paris = new City(20, 38, 2.3, 0, 'Paris');
console.log(Paris);
let Lima = new City(2, 16, 4.6, 0, 'Lima');
console.log(Lima);


// Hourly sales calculator


// tr for header
function hoursDisplay() {
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    for (let i = -1; i < hours.length; i++) {
        if (i >= 0) {
            let thElement = document.createElement('th');
            trElement.appendChild(thElement).textContent = hours[i];
        }
        else {
            let thElement = document.createElement('th');
            thElement.setAttribute('id' , 'Store-time');
            trElement.appendChild(thElement).textContent = 'Store / Time';
        }
    }

    let thElement = document.createElement('th');
    trElement.appendChild(thElement).textContent = 'Total';

}
let hourlySales = [];
function hourlySalesCalculator() {
    hourlySales = [];
    let x = 0;
    for (let i = 0; i < hours.length; i++) {
        x = 0;
        for (let j = 0; j < cities.length; j++) {
            x += cities[j].averageSales[i];

        }
        hourlySales.push(x);
        totalOfTotals+=hourlySales[i];
    }
    console.log(hourlySales);
}

function hourlyTotal() {
    hourlySalesCalculator();
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    for (let i = -1; i <= hours.length; i++) {
        if (i >= 0 && i !== 14) {
            let thElement = document.createElement('th');
            trElement.appendChild(thElement).textContent = hourlySales[i];
        }
        else if (i === 14) {
            let thElement = document.createElement('th');
            trElement.appendChild(thElement).textContent = totalOfTotals;
        }
        else {
            let thElement = document.createElement('th');
            trElement.appendChild(thElement).textContent = 'Total';
        }
    }
    console.log(hourlySales);

}

let form = document.getElementById('add-city');

form.addEventListener('submit', addCity);

function addCity(event) {
    event.preventDefault();
    let cityName = event.target.nameField.value;
    let startTotal = parseInt(event.target.totalField.value);
    let minCookie = parseInt(event.target.minField.value);
    let maxCookie = parseInt(event.target.maxField.value);
    let avgCookie = parseInt(event.target.avgField.value);
    totalOfTotals = 0;
    let newCity = new City(minCookie, maxCookie, avgCookie, startTotal, cityName);
    console.log(newCity);
    console.log(totalOfTotals);
    tableElement.textContent = '';
    for (let i = -1; i <= cities.length; i++) {
        if (i === -1) {
            hoursDisplay();
        }
        else if (i === cities.length) {
            hourlyTotal();
        }
        else {
            cities[i].customers();
            cities[i].sales();
            cities[i].render();
        }
    }

}
// function hideFooter() {

// }
console.log(cities);
for (let i = -1; i <= cities.length; i++) {
    if (i === -1) {
        hoursDisplay();
    }
    else if (i === cities.length) {
        hourlyTotal();
    }
    else {
        cities[i].customers();
        cities[i].sales();
        cities[i].render();
    }
}
let flag = true;
let formFlag = true;
function showTable() {
    if(formFlag && flag) {
        document.getElementsByTagName('form')[0].style.opacity = '0';
        document.getElementsByTagName('form')[0].style.height = '0';
        document.getElementsByTagName('table')[0].style.opacity = '1';
        flag = false;
    }
    else if (flag) {
        document.getElementsByTagName('table')[0].style.opacity = '1';
        flag = false;
    }
    else {
        document.getElementsByTagName('table')[0].style.opacity = '0';
        flag = true;
    }
}
function showForm() {
    if (formFlag) {
        document.getElementsByTagName('form')[0].style.opacity = '1';
        document.getElementsByTagName('form')[0].style.height = '400px';
        formFlag = false;
    }

    else {
        document.getElementsByTagName('form')[0].style.opacity = '0';
        formFlag = true;
    }

}

// formFlag = false , flag = true 
// document.getElementsByTagName('form')[0].style.opacity = '0';
//document.getElementsByTagName('form')[0].style.height = '0';