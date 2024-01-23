var picture=[80,60]

var men=[
    {  id:0, 
        imgurl:"https://www.venum.com/cdn/shop/products/3_252F9_252Fb_252F5_252F39b564262b9a6fa6be9aefbb3c0f53d92ecbb037_RASH_LS_ELECTRON_3_NAVY_BLUE_03_9fe83976-1f43-4f86-b2d5-4c9e5664b1a2.jpg?v=1703849141&width=1946" ,
        price:80,
        name:'seclisem',
        description:"Venum Electron 3.0 Hoodie Navy Blue"
    },
    {  id:1,
         imgurl:"https://www.venum.com/cdn/shop/products/f_252F4_252F3_252F9_252Ff4390e0da875fbb8eabe52a14af79a11d9fa6ac3_RASH_SS_ELECTRON_3_GREY_RED_03_894d171c-88e4-4520-ba77-c250612d1e91.jpg?v=1703849588" ,
    price:80,
    name:'seclisem',
    description:"Venum Electron 3.0 Hoodie - Grey/Red"
},
{  id:2,
     imgurl:"https://www.venum.com/cdn/shop/products/8_252Fd_252Fd_252F1_252F8dd175a35167252f547dcc293c3d6ffefc9de9d2_HOODIE_ELECTRON3.0_BLACK_05_0f6b731d-e181-44fa-886b-1ab27b1d6658.jpg?v=1703842156&width=823" ,
price:80,
name:'seclisem',
description:"Venum Cargo Light Half Zip Sweater - Black"
},
]
var woman=[
    {  id:0,
         imgurl:"https://www.venum.com/cdn/shop/products/0_252Fe_252F9_252F0_252F0e904822cb4d275eeb95c3a5171104f2c59161a5_VNMUFC_00146_002_04_4cf3c389-d688-4d59-8b58-ee95772dfb1b.jpg?v=1691411132&width=1946" ,
    price:80,
    name:'seclisem',
    description:"UFC Venum Authentic Fight Night 2.0 Kit by Venum Women's Walkout Hoodie - White"
},
{ id:1,
      imgurl:"https://www.venum.com/cdn/shop/products/e_252Fc_252Fb_252F3_252Fecb37b6f3fb8f5c4d88760941053ecb178f73b34_HOODIE_JACKET_PERFORMANCE_INSTITUTE_2.0_BLACK_RED_9.jpg?v=1701167312&width=1946" ,
price:80,
name:'seclisem',
description:"UFC Venum Performance Institute 2.0 Women’s Zip Hoodie - Black/Red"
},
{ id:2,
      imgurl:"https://www.venum.com/cdn/shop/products/f_252F8_252F5_252F0_252Ff85010004056883f84a440a1d2495d5f99121c62_VNMUFC_00146_202_01_1_d00eb451-90f8-45fc-930a-35b3d5b307a0.jpg?v=1677246363&width=1946" ,
price:80,
name:'seclisem',
description:"Authentic Fight Night 2.0 Kit by Venum Women's"
},
     
]
var total =0
$(".total").html(total)
function totales(id){
    for (let i = 0; i < men.length; i++) {
        if(id===men[i].id){
            total+=men[i].price
            $(".total").html(total)
        }
        
    }

}
function showManCards(){
    var container=$(".container")
    men.forEach(function(elemnt,i){
        container.append(` <div value="${i}"  class="card">
        <img class="img_product" src=${elemnt.imgurl}>
        <h1>${elemnt.name}</h1>
        <p  class="price">$${elemnt.price}</p>
        <p  >${elemnt.description}</p>
        <p ><button id="${i}"  onclick="totales(${elemnt.id})" class='btn'>Add to Cart</button></p>
      </div>`)
    })

}
showManCards()
$(".card").on("click",function(){
    console.log("hii")
   var s= $(".card").attr('value')
   console.log(s)

})
var totals =0
$(".totals").html(totals)
function totale(id){
    for (let j = 0; j < woman.length; j++) {
        if(id===woman[j].id){
            totals+=woman[j].price
            $(".totals").html(totals)
        }
        
    }

}

function showwomenCards(){
    var container=$(".containers")
    woman.forEach(function(elemnt,j){
        container.append(` <div value="${j}"  class="card">
        <img class="img_product" src=${elemnt.imgurl}>
        <h1>${elemnt.name}</h1>
        <p  class="price">$${elemnt.price}</p>
        <p  >${elemnt.description}</p>
        <p ><button id="${j}"  onclick="totale(${elemnt.id})" class='btn'>Add to Cart</button></p>
      </div>`)
    })   
}
showwomenCards()
    $(".card").on("click",function(){
        console.log("hiiii")
       var s= $(".card").attr("value")
       console.log(s)
}) 





