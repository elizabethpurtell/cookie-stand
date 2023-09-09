'use strict';

// *** GLOBAL VARIABLES ***
const storeArray = [];

// *** WINDOW INTO THE DOM ***

let storeSection = document.getElementById('storeSection');

let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'];


// *** HELPER FUNCTIONS OR UTILITIES ***

function renderAll() {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
}
let rowHeading = document.createElement('tr');
table.appendChild(hours);

//  *** CONSTRUCTOR FUNCTION ***

function Store(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = 0;
  this.cookiesTotal = 0;
}

//  *** PROTOTYPE METHODS ***

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

  let articleEle = document.createElement('article');
  storeSection.appendChild(articleEle);

  let storeHeading = document.createElement('h2'); // html creation
  storeHeading.innerText = this.name; // context
  articleEle.appendChild(storeHeading); // dom addition

  let storeUL = document.createElement('ul');
  articleEle.appendChild(storeUL);

  for (let i = 0; i < this.cookiesBought.length; i++) {
    let avgCookieByHourLI = document.createElement('li');
    avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
    storeUL.appendChild(avgCookieByHourLI);
  }
  let totalLI = document.createElement('li');
  totalLI.innerText = `Total: ${this.cookiesTotal}`;
  storeUL.appendChild(totalLI);
};

//  *** TABLE ***

let table = document.createElement('table');
articleEle.appendChild(table);

// tr is a row
// let rowHeading = document.createElement('tr');
// table.appendChild(rowHeading);
// th is a heading
// let storeName = document.createElement('th');
// storeName.textContent = 'Location';
// rowHeading.appendChild(storeName);
let storeName = document.createElement('th'); // html creation
storeName.innerText = this.name; // context
rowHeading.appendChild(storeName); // dom addition

let rowHourlyValues = document.createElement('tr');
table.appendChild(hours);
  for (let i = 0; i < this.cookiesBought.length; i++) {
    let avgCookieByHourLI = document.createElement('tr');
    avgCookieByHourLI.innerText = `${this.cookiesBought[i]}`;
    rowHourlyValues.appendChild(avgCookieByHourLI);
  }


let totalValue = document.createElement('tr');
table.appendChild(cookiesTotal);
// td is table data
let storeHours = document.createElement('td');
storeHours.textContent = this.storeHours;
rowValues.appendChild(storeHours);

// let goodWithDogValue = document.createElement('td');
// goodWithDogValue.textContent = this.isGoodWithDogs;
// rowValues.appendChild(goodWithDogValue);

// let goodWithKidValue = document.createElement('td');
// goodWithKidValue.textContent = this.isGoodWithKids;
// rowValues.appendChild(goodWithKidValue);
};




// *** EXECUTABLE CODE (ON PAGE LOAD) ***

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

storeArray.push(seattle, tokyo, dubai, paris, lima);
renderAll();


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


//  *** OBJECT LITERALS ***

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [], // this is the container to store our simulated cookies
//   cookiesTotal: 0,

  // randomCustomerGenerator: function (minCust, maxCust) {
  //   return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); // inclusive min and max from MDN
  // },
  // getCookieCalc: function () {
  //   for (let i = 0; i < hours.length; i++) {
  //     let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
  //     this.cookiesBought.push(Math.ceil(hourlyCookie));
  //     this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
  //   }
  // },
  //   render: function () {
  //     this.getCookieCalc();

  //     let articleEle = document.createElement('article');
  //     storeSection.appendChild(articleEle);

  //     let storeHeading = document.createElement('h2'); // html creation
  //     storeHeading.innerText = this.name; // context
  //     articleEle.appendChild(storeHeading); // dom addition

  //     let seattleUL = document.createElement('ul');
  //     articleEle.appendChild(seattleUL);

  //     for (let i = 0; i < this.cookiesBought.length; i++) {
  //       let avgCookieByHourLI = document.createElement('li');
  //       avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
  //       seattleUL.appendChild(avgCookieByHourLI);
  //     }
  //     let totalLI = document.createElement('li');
  //     totalLI.innerText = `Total: ${this.cookiesTotal}`;
  //     seattleUL.appendChild(totalLI);
  //   }

  // };
  // console.log(seattle);

  // let tokyo = {
  //   name: 'Tokyo',
  //   minCust: 3,
  //   maxCust: 24,
  //   avgCookieBought: 1.2,
  //   cookiesBought: [], // container storing simulated cookies
  //   cookiesTotal: 0, // the total amount of simulated cookies

  //   randomCustomerGenerator: function (minCust, maxCust) {
  //     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); // inclusive min and max from MDN
  //   },
  //   getCookieCalc: function () {
  //     for (let i = 0; i < hours.length; i++) {
  //       let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
  //       this.cookiesBought.push(Math.ceil(hourlyCookie));
  //       this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
  //     }
  //   },
  //   render: function () {
  //     this.getCookieCalc();

  //     let articleEle = document.createElement('article');
  //     storeSection.appendChild(articleEle);

  //     let storeHeading = document.createElement('h2'); // html creation
  //     storeHeading.innerText = this.name; // context
  //     articleEle.appendChild(storeHeading); // dom addition

  //     let tokyoUL = document.createElement('ul');
  //     articleEle.appendChild(tokyoUL);

  //     for (let i = 0; i < this.cookiesBought.length; i++) {
  //       let avgCookieByHourLI = document.createElement('li');
  //       avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
  //       tokyoUL.appendChild(avgCookieByHourLI);
  //     }
  //     let totalLI = document.createElement('li');
  //     totalLI.innerText = `Total: ${this.cookiesTotal}`;
  //     tokyoUL.appendChild(totalLI);
  //   }

  // };
  // console.log(tokyo);

  // let dubai = {
  //   name: 'Dubai',
  //   minCust: 11,
  //   maxCust: 38,
  //   avgCookieBought: 3.7,
  //   cookiesBought: [], // container for simulated cookies
  //   cookiesTotal: 0, // total sim cookies

  //   randomCustomerGenerator: function (minCust, maxCust) {
  //     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  //   },
  //   getCookieCalc: function () {
  //     for (let i = 0; i < hours.length; i++) {
  //       let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
  //       this.cookiesBought.push(Math.ceil(hourlyCookie));
  //       this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
  //     }
  //   },
  //   render: function () {
  //     this.getCookieCalc();

  //     let articleEle = document.createElement('article');
  //     storeSection.appendChild(articleEle);

  //     let storeHeading = document.createElement('h2');
  //     storeHeading.innerText = this.name;
  //     articleEle.appendChild(storeHeading);

  //     let dubaiUL = document.createElement('ul');
  //     articleEle.appendChild(dubaiUL);

  //     for (let i = 0; i < this.cookiesBought.length; i++) {
  //       let avgCookieByHourLI = document.createElement('li');
  //       avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
  //       dubaiUL.appendChild(avgCookieByHourLI);
  //     }
  //     let totalLI = document.createElement('li');
  //     totalLI.innerText = `Total: ${this.cookiesTotal}`;
  //     dubaiUL.appendChild(totalLI);
  //   }
  // };
  // console.log(dubai);

  // let paris = {
  //   name: 'Paris',
  //   minCust: 20,
  //   maxCust: 38,
  //   avgCookieBought: 2.3,
  //   cookiesBought: [], // container for simulated cookies
  //   cookiesTotal: 0, // total sim cookies

  //   randomCustomerGenerator: function (minCust, maxCust) {
  //     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  //   },
  //   getCookieCalc: function () {
  //     for (let i = 0; i < hours.length; i++) {
  //       let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
  //       this.cookiesBought.push(Math.ceil(hourlyCookie));
  //       this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
  //     }
  //   },
  //   render: function () {
  //     this.getCookieCalc();

  //     let articleEle = document.createElement('article');
  //     storeSection.appendChild(articleEle);

  //     let storeHeading = document.createElement('h2');
  //     storeHeading.innerText = this.name;
  //     articleEle.appendChild(storeHeading);

  //     let parisUL = document.createElement('ul');
  //     articleEle.appendChild(parisUL);

  //     for (let i = 0; i < this.cookiesBought.length; i++) {
  //       let avgCookieByHourLI = document.createElement('li');
  //       avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
  //       parisUL.appendChild(avgCookieByHourLI);
  //     }
  //     let totalLI = document.createElement('li');
  //     totalLI.innerText = `Total: ${this.cookiesTotal}`;
  //     parisUL.appendChild(totalLI);
  //   }
  // };
  // console.log(paris);


  // let lima = {
  //   name: 'Lima',
  //   minCust: 2,
  //   maxCust: 16,
  //   avgCookieBought: 4.6,
  //   cookiesBought: [], // container for simulated cookies
  //   cookiesTotal: 0, // total sim cookies

  //   randomCustomerGenerator: function (minCust, maxCust) {
  //     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  //   },
  //   getCookieCalc: function () {
  //     for (let i = 0; i < hours.length; i++) {
  //       let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
  //       this.cookiesBought.push(Math.ceil(hourlyCookie));
  //       this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
  //     }
  //   },
  //   render: function () {
  //     this.getCookieCalc();

  //     let articleEle = document.createElement('article');
  //     storeSection.appendChild(articleEle);

  //     let storeHeading = document.createElement('h2');
  //     storeHeading.innerText = this.name;
  //     articleEle.appendChild(storeHeading);

  //     let limaUL = document.createElement('ul');
  //     articleEle.appendChild(limaUL);

  //     for (let i = 0; i < this.cookiesBought.length; i++) {
  //       let avgCookieByHourLI = document.createElement('li');
  //       avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
  //       limaUL.appendChild(avgCookieByHourLI);
  //     }
  //     let totalLI = document.createElement('li');
  //     totalLI.innerText = `Total: ${this.cookiesTotal}`;
  //     limaUL.appendChild(totalLI);
  //   }
  // };
  // console.log(lima);