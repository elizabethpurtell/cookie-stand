'use strict';

// *** GLOBAL VARIABLES ***

let storeSection = document.getElementById('storeSection');

let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'];


// *** HELPER FUNCTIONS OR UTILITIES ***


//  *** OBJECT LITERALS ***

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [], // this is the container to store our simulated cookies
  cookiesTotal: 0,

  randomCustomerGenerator: function (minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); // inclusive min and max from MDN
  },
  getCookieCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.cookiesBought.push(Math.ceil(hourlyCookie));
      this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
    }
  },
  render: function () {
    this.getCookieCalc();

    let articleEle = document.createElement('article');
    storeSection.appendChild(articleEle);

    let storeHeading = document.createElement('h2'); // html creation
    storeHeading.innerText = this.name; // context
    articleEle.appendChild(storeHeading); // dom addition

    let seattleUL = document.createElement('ul');
    articleEle.appendChild(seattleUL);

    for (let i = 0; i < this.cookiesBought.length; i++) {
      let avgCookieByHourLI = document.createElement('li');
      avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
      seattleUL.appendChild(avgCookieByHourLI);
    }
    let totalLI = document.createElement('li');
    totalLI.innerText = `Total: ${this.cookiesTotal}`;
    seattleUL.appendChild(totalLI);
  }

};
console.log(seattle);

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [], // container storing simulated cookies
  cookiesTotal: 0, // the total amount of simulated cookies

  randomCustomerGenerator: function (minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); // inclusive min and max from MDN
  },
  getCookieCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.cookiesBought.push(Math.ceil(hourlyCookie));
      this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
    }
  },
  render: function () {
    this.getCookieCalc();

    let articleEle = document.createElement('article');
    storeSection.appendChild(articleEle);

    let storeHeading = document.createElement('h2'); // html creation
    storeHeading.innerText = this.name; // context
    articleEle.appendChild(storeHeading); // dom addition

    let tokyoUL = document.createElement('ul');
    articleEle.appendChild(tokyoUL);

    for (let i = 0; i < this.cookiesBought.length; i++) {
      let avgCookieByHourLI = document.createElement('li');
      avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
      tokyoUL.appendChild(avgCookieByHourLI);
    }
    let totalLI = document.createElement('li');
    totalLI.innerText = `Total: ${this.cookiesTotal}`;
    tokyoUL.appendChild(totalLI);
  }

};
console.log(tokyo);

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [], // container for simulated cookies
  cookiesTotal: 0, // total sim cookies

  randomCustomerGenerator: function (minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  getCookieCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.cookiesBought.push(Math.ceil(hourlyCookie));
      this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
    }
  },
  render: function () {
    this.getCookieCalc();

    let articleEle = document.createElement('article');
    storeSection.appendChild(articleEle);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);

    let dubaiUL = document.createElement('ul');
    articleEle.appendChild(dubaiUL);

    for (let i = 0; i < this.cookiesBought.length; i++) {
      let avgCookieByHourLI = document.createElement('li');
      avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
      dubaiUL.appendChild(avgCookieByHourLI);
    }
    let totalLI = document.createElement('li');
    totalLI.innerText = `Total: ${this.cookiesTotal}`;
    dubaiUL.appendChild(totalLI);
  }
};
console.log(dubai);

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [], // container for simulated cookies
  cookiesTotal: 0, // total sim cookies

  randomCustomerGenerator: function (minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  getCookieCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.cookiesBought.push(Math.ceil(hourlyCookie));
      this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
    }
  },
  render: function () {
    this.getCookieCalc();

    let articleEle = document.createElement('article');
    storeSection.appendChild(articleEle);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);

    let parisUL = document.createElement('ul');
    articleEle.appendChild(parisUL);

    for (let i = 0; i < this.cookiesBought.length; i++) {
      let avgCookieByHourLI = document.createElement('li');
      avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
      parisUL.appendChild(avgCookieByHourLI);
    }
    let totalLI = document.createElement('li');
    totalLI.innerText = `Total: ${this.cookiesTotal}`;
    parisUL.appendChild(totalLI);
  }
};
console.log(paris);


let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [], // container for simulated cookies
  cookiesTotal: 0, // total sim cookies

  randomCustomerGenerator: function (minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  getCookieCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookie = this.avgCookieBought * this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.cookiesBought.push(Math.ceil(hourlyCookie));
      this.cookiesTotal = this.cookiesTotal + Math.ceil(hourlyCookie);
    }
  },
  render: function () {
    this.getCookieCalc();

    let articleEle = document.createElement('article');
    storeSection.appendChild(articleEle);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);

    let limaUL = document.createElement('ul');
    articleEle.appendChild(limaUL);

    for (let i = 0; i < this.cookiesBought.length; i++) {
      let avgCookieByHourLI = document.createElement('li');
      avgCookieByHourLI.innerText = `${hours[i]}: ${this.cookiesBought[i]}`;
      limaUL.appendChild(avgCookieByHourLI);
    }
    let totalLI = document.createElement('li');
    totalLI.innerText = `Total: ${this.cookiesTotal}`;
    limaUL.appendChild(totalLI);
  }
};
console.log(lima);


// *** EXECUTABLE CODE (ON PAGE LOAD) ***

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
