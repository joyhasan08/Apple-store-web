console.log(`conneted`);

const iphoneContainer = document.getElementById(`iphone-container`);
const cerusolDisplay =document.getElementById(`cerusol-display`);
const iphoneData = async ()=>{
   await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then( json => displayIphone(json))
}

const displayIphone = async (phones)=>{
    // console.log(phones.data.length/3.);
    let page1 =[];
    let temp =[];
    // let phoneData = phones.data.length/3;
    // console.log(phoneData.toFixed(0));
    for( let i=0; i< phones.data.length ; i++ ){
      if(temp.length== 9){
        page1.push(temp);
        temp=[]
        

      }
      temp.push(phones.data[i])
    }
    page1.push(temp);
    console.log(page1);
    
   phones.data.map(async element => {
    // console.log(element);
    // console.log(element);
  //   let dits = element.slug;
  //   fetch(`https://openapi.programming-hero.com/api/phone/${dits}`)
  // .then(res => res.json())
  // .then(  json =>json.data);
 

    const div = document.createElement(`div`);
    div.innerHTML = `
    <div  class="w-fit mx-auto"> 
            <div class="card w-72 bg-base-100 shadow-xl">
                <figure><img class="p-3" src="${element.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${element.phone_name
                  }</h2>
                  <p> ${element.brand}If a dog <span class="overflow-x-hidden">${element.slug}</span>does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-success bg-orange-300 border-none">Buy Now</button>
                  </div>
                </div>
              </div>
        </div>
        `
        iphoneContainer.appendChild(div)
        carusol(element);

        let phoneDetails = await phoneSpec(element);
        console.log(phoneDetails);

   });
}
iphoneData()

function carusol (element){
// console.log(element.slug);
const imgdiv = document.createElement(`div`);
imgdiv.classList= `carousel-item`;
imgdiv.innerHTML =`

<img src="${element.image}" class="rounded-box" />

`
cerusolDisplay.appendChild(imgdiv);
}

const phoneSpec =async (element)=>{
  let slug = element?.slug
  // console.log(slug);
  await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
  .then(res => res.json())
  .then(json =>{
    // console.log(json.data.name);
    // slugData = json.data;
    const slugData =json?.data;
    console.log(slugData);
    return slugData;
  })
}
phoneSpec();
