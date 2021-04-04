'use strict';
let hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm '];
let total = 0;
function randomGenerator(min ,max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

let seattle = {

    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    averageSales: [],
    costumerHrGenerator : 1,

    customers: function () {
        for (let i = 0; i < 14; i++) {
            this.costumerHrGenerator = randomGenerator(this.minCust , this.maxCust);
        }
        return this.costumerHrGenerator;
    },
    sales: function () {
        for (let i = 0; i < 14; i++) {
            this.averageSales[i] = Math.floor(this.customers() * this.avgCookie);
        }
        return this.averageSales;
    }
    ,

};

document.getElementById('Seattle').appendChild(document.createElement('h1')).textContent = 'Seattle';
document.getElementById('Seattle').appendChild(document.createElement('ul'));

for ( let i = 0 ; i < 14 ; i++) {
    document.getElementsByTagName('ul')[0].appendChild(document.createElement('li')).textContent = hours[i] + ' : ' + seattle.sales()[i] + ' cookies.';
    total += seattle.sales()[i];
}

document.getElementsByTagName('ul')[0].appendChild(document.createElement('li')).textContent = 'Total : ' + total;

// **********************************************
// **********************************************
// **********************************************
// **********************************************

total = 0 ;
let Tokyo = {

    total: 0,
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    averageSales: [],
    costumerHrGenerator : 1,

    customers: function () {
        for (let i = 0; i < 14; i++) {
            this.costumerHrGenerator = randomGenerator(this.minCust , this.maxCust);
        }
        return this.costumerHrGenerator;
    },
    sales: function () {
        for (let i = 0; i < 14; i++) {
            this.averageSales[i] = Math.floor(this.customers() * this.avgCookie);
            this.total += this.averageSales[i];
        }
        return this.averageSales;
    }
    ,

};

document.getElementById('Tokyo').appendChild(document.createElement('h1')).textContent = 'Tokyo';
document.getElementById('Tokyo').appendChild(document.createElement('ul'));

for ( let i = 0 ; i < 14 ; i++) {
    document.getElementsByTagName('ul')[1].appendChild(document.createElement('li')).textContent = hours[i] + ' : ' + Tokyo.sales()[i] + ' cookies.';
    total += Tokyo.sales()[i];
}

document.getElementsByTagName('ul')[1].appendChild(document.createElement('li')).textContent = 'Total : ' + total;


let Dubai = {

    total: 0,
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    averageSales: [],
    costumerHrGenerator : 1,

    customers: function () {
        for (let i = 0; i < 14; i++) {
            this.costumerHrGenerator = randomGenerator(this.minCust , this.maxCust);
        }
        return this.costumerHrGenerator;
    },
    sales: function () {
        for (let i = 0; i < 14; i++) {
            this.averageSales[i] = Math.floor(this.customers() * this.avgCookie);
            this.total += this.averageSales[i];
        }
        return this.averageSales;
    }
    ,

};

document.getElementById('Dubai').appendChild(document.createElement('h1')).textContent = 'Dubai';

document.getElementById('Dubai').appendChild(document.createElement('ul'));

for ( let i = 0 ; i < 14 ; i++) {
    document.getElementsByTagName('ul')[2].appendChild(document.createElement('li')).textContent = hours[i] + ' : ' + Dubai.sales()[i] + ' cookies.';
    total += Dubai.sales()[i];
}

document.getElementsByTagName('ul')[2].appendChild(document.createElement('li')).textContent = 'Total : ' + total;

// **********************************************
// **********************************************
// **********************************************
// **********************************************


let Paris = {

    total: 0,
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    averageSales: [],
    costumerHrGenerator : 1,

    customers: function () {
        for (let i = 0; i < 14; i++) {
            this.costumerHrGenerator = randomGenerator(this.minCust , this.maxCust);
        }
        return this.costumerHrGenerator;
    },
    sales: function () {
        for (let i = 0; i < 14; i++) {
            this.averageSales[i] = Math.floor(this.customers() * this.avgCookie);
            this.total += this.averageSales[i];
        }
        return this.averageSales;
    }
    ,

};

document.getElementById('Paris').appendChild(document.createElement('h1')).textContent = 'Paris';
document.getElementById('Paris').appendChild(document.createElement('ul'));

for ( let i = 0 ; i < 14 ; i++) {
    document.getElementsByTagName('ul')[3].appendChild(document.createElement('li')).textContent = hours[i] + ' : ' + Paris.sales()[i] + ' cookies.';
    total += Paris.sales()[i];
}

document.getElementsByTagName('ul')[3].appendChild(document.createElement('li')).textContent = 'Total : ' + total;


// **********************************************
// **********************************************
// **********************************************
// **********************************************


let Lima = {

    total: 0,
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    averageSales: [],
    costumerHrGenerator : 1,

    customers: function () {
        for (let i = 0; i < 14; i++) {
            this.costumerHrGenerator = randomGenerator(this.minCust , this.maxCust);
        }
        return this.costumerHrGenerator;
    },
    sales: function () {
        for (let i = 0; i < 14; i++) {
            this.averageSales[i] = Math.floor(this.customers() * this.avgCookie);
            this.total += this.averageSales[i];
        }
        return this.averageSales;
    }
    ,

};

document.getElementById('Lima').appendChild(document.createElement('h1')).textContent = 'Lima';


document.getElementById('Lima').appendChild(document.createElement('ul'));

for ( let i = 0 ; i < 14 ; i++) {
    document.getElementsByTagName('ul')[4].appendChild(document.createElement('li')).textContent = hours[i] + ' : ' + Lima.sales()[i] + ' cookies.';
    total += Lima.sales()[i];
}

document.getElementsByTagName('ul')[4].appendChild(document.createElement('li')).textContent = 'Total : ' + total;
