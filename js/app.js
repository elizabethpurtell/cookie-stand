'use strict';

// *** GLOBAL VARIABLES ***
const storeArray = [];

// *** WINDOW INTO THE DOM ***

// let storeSection = document.getElementById('storeSection');
let table = document.querySelector('table');

let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'];


// *** HELPER FUNCTIONS OR UTILITIES ***

function renderAll() {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
}

// *** HEADER ROW FUNCTION ***
function headerFunction() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  let cell = document.createElement('th'); //CREATE EMPTY CELL
  headerRow.appendChild(cell);

  // ADDS EACH HOUR IN THE ROW
  for (let i = 0; i < hours.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    headerRow.appendChild(headerCell);
  }

  let totalHeaderCell = document.createElement('th');
  totalHeaderCell.textContent = 'Daily Location Total';
  headerRow.appendChild(totalHeaderCell);
}

// *** FOOTER ROW FUNCTION ***

function footerFunction() {
  // let footer = document.createElement('footer');
  // table.appendChild();
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  let footerCell = document.createElement('th'); //CREATE total CELL
  footerCell.textContent = 'Totals';
  footerRow.appendChild(footerCell);

  for (let i = 0; i < hours.length; i++) { //slow loop
    let total = 0;
    for (let j = 0; j < storeArray.cookiesTotal; j++) { //fast loop
      total += storeArray[j][i];
    }
  }
  // targeting seattle 6am totals
  // you would type: cityArray[0].randomCookie[0]
  // tokyo: cityArray[1].randomCookie[0]
  // dubai: cityArray[2].randomCookie[0]
  // what is our slow loop: hours array
  // what is the fast loop: city array
  // still need to find the total for all the stores, last cell
  // create a row
  // create a cell that will populate with each hourly from each location
}

//  *** CONSTRUCTOR FUNCTION ***

function Store(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.cookiesTotal = 0;
}

//  *** PROTOTYPE METHODS -inherits ***

Store.prototype.randomCustomerGenerator = function (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
};

Store.prototype.getCookieCalc = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
    this.cookiesBought.push(Math.ceil(hourlyCookie));
    this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
  }
};

Store.prototype.render = function () {
  this.getCookieCalc();

  let chRow = document.createElement('tr');
  table.appendChild(chRow);

  let locationName = document.createElement('td');
  locationName.textContent = this.name;
  chRow.appendChild(locationName);

  for (let i = 0; i < this.cookiesBought.length; i++) {
    let avgCookieByHourTD = document.createElement('td');
    avgCookieByHourTD.innerText = this.cookiesBought[i];
    chRow.appendChild(avgCookieByHourTD);
  }
  let totalTD = document.createElement('td');
  totalTD.innerText = this.cookiesTotal;
  chRow.appendChild(totalTD);
};


// *** EXECUTABLE CODE (ON PAGE LOAD) ***

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

storeArray.push(seattle, tokyo, dubai, paris, lima);
headerFunction();
renderAll();
footerFunction();
