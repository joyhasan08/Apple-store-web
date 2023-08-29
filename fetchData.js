console.log(`conneted`);
const iphoneContainer = document.getElementById(`iphone-container`);

const iphoneData = ()=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then( json => displayIphone(json))
}

const displayIphone = (phones)=>{
    // console.log(phones.data);
    phones.data.map(element => {
        // console.log(element);
        const iphoneDiv = document.createAttribute('div');
        iphoneDiv.innerHTML = `
        <div  class="w-fit mx-auto"> 
                <div class="card w-72 bg-base-100 shadow-xl">
                    <figure><img src="./img/portet  (3).jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
            </div>
            `
            console.log(iphoneDiv);
            // iphoneContainer.appendChild(iphoneDiv);
    })
}
iphoneData()