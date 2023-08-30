
const iphoneContainer = document.getElementById(`iphone-container`);
const getSamsungData =()=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`)
    .then(res => res.json())
    .then(json => displaySamsung(json))
}

const displaySamsung =(samPhone)=>{
    console.log(samPhone);
    samPhone.data.map(phone=>{
        console.log(phone);
        const div = document.createElement(`div`);
        div.innerHTML = `
        <div  class="w-fit mx-auto"> 
                <div class="card w-72 bg-base-100 shadow-xl">
                    <figure><img class="p-3" src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name
                      }</h2>
                      <p> ${phone.brand} ${phone.slug} does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-success">Buy Now</button>
                      </div>
                    </div>
                  </div>
            </div>
            `
            iphoneContainer.appendChild(div);
    })
}

getSamsungData();