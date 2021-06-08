'use strict';







let allimgElement = document.getElementById('products');

let firstImgElement = document.getElementById('firstImg');

let secondImgElement = document.getElementById('secondImg');

let thirdImgElement = document.getElementById('thirdImg');
let buttonElement = document.getElementById('button');


let maxAttempts = 10;

let userAttemptCounter = 0;

let firstImgIndex;
let secondImgIndex;
let thirdImgIndex;

Product.productArray = [];

let votes = [];
let shown = [];
let productnames = [];

function Product(name, source) {
  this.name = name;
  this.source = source;
  this.timesImgDisplayed = 0;
  this.vote = 0;

  Product.productArray.push(this);
  productnames.push(this.name);



}


new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');




function getRandomImg() {
  return Math.floor(Math.random() * Product.productArray.length);

}


function renderThreeImg() {

  firstImgIndex = getRandomImg();
  secondImgIndex = getRandomImg();
  thirdImgIndex = getRandomImg();

  let picturesArray=[firstImgIndex,secondImgIndex,thirdImgIndex];

  while (firstImgIndex === secondImgIndex || secondImgIndex === thirdImgIndex || firstImgIndex === thirdImgIndex || picturesArray.includes(firstImgIndex) || picturesArray.includes(secondImgIndex) || picturesArray.includes(thirdImgIndex)) {
    secondImgIndex = getRandomImg();
    thirdImgIndex = getRandomImg();
    firstImgIndex = getRandomImg();
  }

  // firstImgIndex and second and third are all random numbers




  firstImgElement.src = Product.productArray[firstImgIndex].source;
  Product.productArray[firstImgIndex].timesImgDisplayed++;

  secondImgElement.src = Product.productArray[secondImgIndex].source;
  Product.productArray[secondImgIndex].timesImgDisplayed++;

  thirdImgElement.src = Product.productArray[thirdImgIndex].source;
  Product.productArray[thirdImgIndex].timesImgDisplayed++;

  console.log(Product.productArray[secondImgIndex].timesImgDisplayed++);



}

renderThreeImg();



allimgElement.addEventListener('click', getNewPicturesWhenClick);


function getNewPicturesWhenClick(event) {


  userAttemptCounter++;



  if (userAttemptCounter <= maxAttempts) {

    if (event.target.id === 'firstImg') {

      renderThreeImg();
      Product.productArray[firstImgIndex].vote++;


    } else if (event.target.id === 'secondImg') {
      renderThreeImg();
      Product.productArray[secondImgIndex].vote++;


    } else if (event.target.id === 'thirdImg') {
      renderThreeImg();
      Product.productArray[thirdImgIndex].vote++;


    }

  
  } else {
    // let buttonElement = document.getElementById('button');

    // buttonElement.hidden = false;
    buttonElement.addEventListener('click', getAllResult);

    allimgElement.removeEventListener('click', getNewPicturesWhenClick);

    // getAllResult(event);

    // buttonElement.removeEventListener('click',getAllResult);
    //     console.log(getAllResult());
    for (let i = 0; i < Product.productArray.length; i++) {
      votes.push(Product.productArray[i].vote);
      shown.push(Product.productArray[i].timesImgDisplayed);

    }

    chart();

  }



}

function getAllResult() {


  for (let i = 0; i < Product.productArray.length; i++) {
    let listResult = document.getElementById('list-result');
    let liElement = document.createElement('li');
    listResult.appendChild(liElement);

    liElement.textContent = `${Product.productArray[i].name} had ${Product.productArray[i].vote} votes, and was seen ${Product.productArray[i].timesImgDisplayed} times`;
  }
//   buttonElement.hidden =true;
buttonElement.removeEventListener('click', getAllResult);
}


// buttonElement.hidden = true;









function chart() {
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels:productnames,
      datasets: [{
        label: '# of Votes',
        data:votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Shown',
        data:shown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}




// renderThreeImg();
// getNewPicturesWhenClick();
// getAllResult();
