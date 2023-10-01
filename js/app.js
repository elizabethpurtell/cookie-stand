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


//  *** CONSTRUCTOR FUNCTION ***

function Store(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.cookiesTotal = 0;
  // this.totals = [];
  // this.grandTotal = [];
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
// add a row for the footer totals

function renderTableFooter() {
  let tableFooter = document.createElement('tr');
  tableFooter.id = 'lastRow';
  table.appendChild(tableFooter);

  let totals = document.createElement('td'); //CREATE total CELL
  totals.textContent = 'Totals';
  tableFooter.appendChild(totals);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) { //slow loop
    let totals = 0;
    for (let j = 0; j < storeArray.cookiesTotal; j++) { //fast loop
      totals += storeArray[j].avgCookieByHourTD[i];
      grandTotal += storeArray[j].avgCookieByHourTD[i];
    }
    let hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = `${totals}`;
    tableFooter.appendChild(hourlyTotals);
  }
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = `${grandTotal}`;
  tableFooter.appendChild(grandTotalCell);
}



// *** EXECUTABLE CODE (ON PAGE LOAD) ***

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

storeArray.push(seattle, tokyo, dubai, paris, lima);
headerFunction();
renderAll();
renderTableFooter();


//  *** FORM SUBMISSION EVENT LISTENER AND HANDLER ***
let myStoreForm = document.getElementById('newStoreForm');

function handleSubmit(event) {
  event.preventDefault(); // keeps info from dumping to random server. this keeps infor loading into our table

  // taking the info from the inputs on the form value and storing it in the variable
  let name = event.target.name.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookieBought = +event.target.avgCookieBought.value;

  // declaring a new variable with the value of the new key constructor
  let newCookieStore = new Store(name, minCust, maxCust, avgCookieBought);

  table.deleteRow(-1);

  newCookieStore.renderList();

  renderTableFooter();

  myStoreForm.reset();

}

myStoreForm.addEventListener('submit', handleSubmit); // handleSubmit is a callback

