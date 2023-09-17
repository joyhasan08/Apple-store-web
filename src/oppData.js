console.log(`connet`);
const iphoneContainer = document.getElementById(`iphone-container`);
const getOppoData = ()=>{
    fetch('https://openapi.programming-hero.com/api/phones?search=oppo')
    .then(res => res.json())
    .then(json => oppoDisplay(json))
    
}

let oppoDisplay = (oppo) =>{
    console.log(oppo);
    oppo.data.forEach(oppoPhone =>{
        console.log(oppoPhone);
        const div = document.createElement(`div`);
        
         div.innerHTML = `
        <div  class="w-fit mx-auto"> 
            <div class="card w-72 bg-base-100 shadow-xl">
                <figure><img class="p-3" src="${oppoPhone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${oppoPhone.phone_name
                  }</h2>
                  <p> ${oppoPhone.brand}  does he choose?</p>
                  <p>${oppoPhone.slug}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-success bg-orange-300 border-none">Buy Now</button>
                  </div>
                </div>
              </div>
        </div>
        `
        iphoneContainer.appendChild(div)
    })
} 


getOppoData();