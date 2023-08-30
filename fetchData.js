console.log(`conneted`);
const iphoneContainer = document.getElementById(`iphone-container`);
const cerusolDisplay =document.getElementById(`cerusol-display`);
const iphoneData = ()=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then( json => displayIphone(json))
}

const displayIphone = (phones)=>{
    console.log(phones);
   phones.data.map(element => {
    // console.log(element);
    console.log(element);
    const div = document.createElement(`div`);
    div.innerHTML = `
    <div  class="w-fit mx-auto"> 
            <div class="card w-72 bg-base-100 shadow-xl">
                <figure><img class="p-3" src="${element.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${element.phone_name
                  }</h2>
                  <p> ${element.brand}If a dog ${element.slug} does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-success">Buy Now</button>
                  </div>
                </div>
              </div>
        </div>
        `
        iphoneContainer.appendChild(div)
        carusol(element);

   });
}
iphoneData()

function carusol (element){
console.log(element.image);
const imgdiv = document.createElement(`div`);
imgdiv.classList= `carousel-item`;
imgdiv.innerHTML =`

<img src="${element.image}" class="rounded-box" />

`
cerusolDisplay.appendChild(imgdiv);
}
