const menuShop = document.querySelector(".shop-menu-header");
const menuScrapbooks = document.querySelector(".scrapbooks-menu-header");
const menuVideo = document.querySelector(".video-menu-header");
const menuSearch = document.querySelector(".search-menu-header");



const menuItemShop = document.querySelector(".drop-down .menu-item .shop-item");
const menuItemScrapbooks = document.querySelector(".drop-down .menu-item .scrapbooks-item");
const menuItemVideo = document.querySelector(".drop-down .menu-item .video-item");
const menuItemSearch = document.querySelector(".drop-down .menu-item .search-item");



const dropdown = document.querySelector(".shop-menu-header .bxs-chevron-down");
const dropdown1 = document.querySelector(".scrapbooks-menu-header .bxs-chevron-down");
const dropdown2 = document.querySelector(".video-menu-header .bxs-chevron-down");
const dropdown3 = document.querySelector(".search-menu-header .bxs-chevron-down");



const menuClose = document.querySelector(".drop-down  .menu-item .close");
const menuItem = document.querySelector(".drop-down  .menu-item");
const menu = document.querySelector(".menu");


const header = document.querySelector("header");

console.log(header.offsetHeight);

let preScroll = window.pageYOffset;

window.addEventListener("scroll",()=>{
   if(window.pageYOffset >35){
       header.style.position = "fixed";
       header.style.top = "30";
       header.style.left = "0";
       header.style.right = "0";
    if(window.pageYOffset> preScroll){
        header.style.top = "-75px"
    }else{
        header.style.top = "0";
      
    }
    preScroll = window.pageYOffset ;
   }
})
menuShop.addEventListener("click",()=>{
    dropdown.classList.toggle("bx-rotate-180")
    menuItemShop.classList.toggle("active");
})
menuScrapbooks.addEventListener("click",()=>{
    dropdown1.classList.toggle("bx-rotate-180")
    menuItemScrapbooks.classList.toggle("active");
})
menuVideo.addEventListener("click",()=>{
    dropdown2.classList.toggle("bx-rotate-180")
    menuItemVideo.classList.toggle("active");
})
menuSearch.addEventListener("click",()=>{
    dropdown3.classList.toggle("bx-rotate-180")
    menuItemSearch.classList.toggle("active");
})
menu.addEventListener('click',()=>{
    menuItem.classList.remove("activee");
    console.log("ee");
})
menuClose.addEventListener("click",()=>{
   menuItem.classList.add("activee");
})
let data =[{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3945_533x.jpg?v=1641841357",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3947_533x.jpg?v=1641841357",
    name:"skiddoodle hoodie golden yellow",
    color:"2+ colors",
    colorClass:"",
    price:"$248.00",
    class:""
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3958_533x.jpg?v=1641841455",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3959_533x.jpg?v=1641841453",
    name:"skidoole straight leg sweatpant golden yellow",
    color:"2+ colors",
    colorClass:"",
    price:"$248.00",
    class:"par"
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4604_533x.jpg?v=1641321953",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4605_533x.jpg?v=1641321952",
    name:"cherub ss ringer tee cream/golden yellow",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"par",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A3981_533x.jpg?v=1637617831",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A3983_533x.jpg?v=1637617831",
    name:"secret soft rib beanie golden yellow",
    color:"3+ colors",
    colorClass:"",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/Dec16Flats-08_533x.jpg?v=1638918571",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/Dec16Flats-09_533x.jpg?v=1638918571",
    name:"secret deconstructed hoodie idears/heather gray",
    color:"",
    colorClass:"ma",
    price:"$188.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/Dec16Flats-10_533x.jpg?v=1638918494",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/Dec16Flats-11_533x.jpg?v=1638918494",
    name:"secret house sweatpant idears/heather grey",
    color:"",
    colorClass:"ma",
    price:"$188.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7575_533x.jpg?v=1641322293",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7576_533x.jpg?v=1641322293",
    name:"pinwheel ss tee golden yellow",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4437_533x.jpg?v=1637616527",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4435_533x.jpg?v=1637616527",
    name:"theodore snapback hat golden yellow",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4454_533x.jpg?v=1637616567",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4452_533x.jpg?v=1637616567",
    name:"dinodrew snapback hat lavender",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4552_533x.jpg?v=1637617860",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4554_533x.jpg?v=1637617860",
    name:"secret soft rib beanie lavender",
    color:"3+ colors",
    colorClass:"",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4588_533x.jpg?v=1641322211",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4589_533x.jpg?v=1641322210",
    name:"drew house ss tee violet",
    color:"2+ colors",
    colorClass:"",
    price:"$58.00",
    class:"par",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4484_533x.jpg?v=1637617699",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/IMG_4482_533x.jpg?v=1637617699",
    name:"scribble billed rib beanie lavender",
    color:"2+ colors",
    colorClass:"",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3930_533x.jpg?v=1641841424",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3932_533x.jpg?v=1641841423",
    name:"skidoodle hoodie ink",
    color:"2+ colors",
    colorClass:"",
    price:"$248.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3968_533x.jpg?v=1641841499",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3972_533x.jpg?v=1641841498",
    name:"skidoodle straight let sweatpant ink",
    color:"2+ colors",
    colorClass:"",
    price:"$248.00",
    class:"par",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7592_533x.jpg?v=1641322338",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7594_533x.jpg?v=1641322337",
    name:"secret ss tee ink",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7605_533x.jpg?v=1641322075",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7606_533x.jpg?v=1641322075",
    name:"drew house boxers ink",
    color:"",
    colorClass:"ma",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7422_533x.jpg?v=1641322169",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7425_533x.jpg?v=1641322170",
    name:"drew house crewneck sweatshirt black",
    color:"",
    colorClass:"ma",
    price:"$138.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7513_533x.jpg?v=1641322274",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7514_533x.jpg?v=1641322273",
    name:"mascot house sweatpant black",
    color:"",
    colorClass:"ma",
    price:"$148.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7584_533x.jpg?v=1641322191",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7585_533x.jpg?v=1641322192",
    name:"drew house ss tee black",
    color:"2+ colors",
    colorClass:"",
    price:"$58.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A3992_533x.jpg?v=1641510343",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/image_83f85169-6070-4672-be9b-fd162dcede4c_533x.jpg?v=1642702433",
    name:"mascot rib beanie black",
    color:"",
    colorClass:"ma",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4634_533x.jpg?v=1641321858",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4635_533x.jpg?v=1641321859",
    name:"basic ss tee whtie",
    color:"2+ colors",
    colorClass:"",
    price:"$48.00",
    class:"par",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4647_533x.jpg?v=1641321839",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4648_533x.jpg?v=1641321839",
    name:"basic ss tee black",
    color:"2+ colors",
    colorClass:"",
    price:"$48.00",
    class:"par",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4660_533x.jpg?v=1641321817",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/088A4661_533x.jpg?v=1641321815",
    name:"basic ls pocket tee black",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"par",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/BlackBeanie_1ce879aa-50f2-4d7c-95e4-fe880ef8eb9c_533x.jpg?v=1641508278",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/5D3A4399_1a8ade3f-3b45-444d-98fc-0e239c821950_533x.jpg?v=1642647555",
    name:"secret soft rib beanie black",
    color:"3+ colors",
    colorClass:"",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/DogGal-29_533x.jpg?v=1636480060",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/DogGal-28_533x.jpg?v=1636480060",
    name:"sketch mascot snapback hat black",
    color:"",
    colorClass:"ma",
    price:"$58.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/DogGal-53_533x.jpg?v=1636479945",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/DogGal-52_533x.jpg?v=1636479945",
    name:"scribble billed rib beanie black",
    color:"2+ colors",
    colorClass:"",
    price:"$38.00",
    class:"",
},{
    img1:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7644_533x.jpg?v=1641322313",
    img2:"//cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY7645_533x.jpg?v=1641322312",
    name:"secret face mask ink",
    color:"",
    colorClass:"ma",
    price:"$12.00",
    class:"",
}]
const cardArea = document.querySelector(".card-area");
let adding = cardArea.innerHTML;
for(let i =0;i<data.length;i++){
    let ok = `  <div class="card-box">
    <div class="img-box">
        <img class="img1" src="${data[i].img1}" alt="">
        <img class="img2 ${data[i].class}" src="${data[i].img2}" alt="">

    </div>
    <div class="card-title">${data[i].name}</div>
    <div class="card-color">${data[i].color}</div>
    <div class="card-price ${data[i].colorClass}">${data[i].price}</div>
    </div>`;
    cardArea.innerHTML+=ok;
}