'use strict';







let allimgElement = document.getElementsByClassName("threeImgClass"); 

let firstImgElement = document.getElementById("firstImg");

let secondImgElement = document.getElementById("secondImg");

let thirdImgElement = document.getElementById("thirdImg");

let buttonElement = document.getElementById("button");

let listResult = document.getElementById("list-result");

let maxAttempts=10;

let userAttemptCounter=0;

let firstImgIndex;
let secondImgIndex;
let thirdImgIndex;


function Product(name,source) {
    this.name=name;
    this.source=source;
    this.timesImgDisplayed=0;
    this.vote=0;

    Product.productArray.push(this);
    
}

Product.productArray=[];

new Product("bag","img/bag.jpg");
new Product("banana","img/banana.jpg");
new Product("bathroom","img/bathroom.jpg");
new Product("boots","img/boots.jpg");
new Product("breakfast","img/breakfast.jpg");
new Product("bubblegum","img/bubblegum.jpg");
new Product("chair","img/chair.jpg");
new Product("cthulhu","img/cthulhu.jpg");
new Product("dog-duck","img/dog-duck.jpg");
new Product("dragon","img/dragon.jpg");
new Product("pen","img/pen.jpg");
new Product("pet-sweep","img/pet-sweep.jpg");
new Product("scissors","img/scissors.jpg");
new Product("shark","img/shark.jpg");
new Product("sweep","img/sweep.jpg");
new Product("tauntaun","img/tauntaun.jpg");
new Product("unicorn","img/unicorn.jpg");
new Product("usb","img/usb.jpg");
new Product("water-can","img/water-can.jpg");
new Product("wine-glass","img/wine-glass.jpg");




function getRandomImg() {
    return Math.floor(Math.random() * Product.productArray.length);
    
}


function renderThreeImg() {

    firstImgIndex=getRandomImg();
    secondImgIndex=getRandomImg();
    thirdImgIndex=getRandomImg();


    while(firstImgIndex===secondImgIndex && secondImgIndex===thirdImgIndex && firstImgIndex===thirdImgIndex ) {
        secondImgIndex=getRandomImg;
        thirdImgIndex=getRandomImg;
    }




    firstImgElement.src=Product.productArray[firstImgIndex].source;
    secondImgElement.src=Product.productArray[secondImgIndex].source;
    thirdImgElement.src=Product.productArray[thirdImgIndex].source;

    // console.log(Product.productArray[firstImgIndex].source);
    
}

renderThreeImg();

buttonElement.addEventListener("click", getAllResult);

allimgElement.addEventListner("click", getNewPicturesWhenClick);


function getNewPicturesWhenClick(event) {


userAttemptCounter++;



if (userAttemptCounter<=maxAttempts){

if(event.target.id==="firstImg"){

    Product.Product.productArray[firstImgIndex].vote++
}else if (event.target.id==="secondImg"){
    Product.productArray[secondImgIndex].vote++


}else {

    Product.productArray[thirdImgIndex].vote++

}


}

}

    


    

    function getAllResult(event) {
       if (userAttemptCounter>maxAttempts){
           let liElement=document.createElement("li");
           listResult.appendChild(liElement);

           liElement.textContent = `${Product.productArray[i].name} had ${Product.productArray[i].vote} votes, and was seen ${Product.productArray[i].timesImgDisplayed} times`

       }
        
        
    }

    // renderThreeImg();
    // getNewPicturesWhenClick();
    // getAllResult();