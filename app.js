const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const porductsListEl = document.querySelector(".products-list");
const seeMoreBtn = document.querySelector(".seeMore");
const description = document.querySelector(".displayDescription");



function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item   product-box ">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
  });
}
renderProdcuts();

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal();

  localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

function renderCartItems() {
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}




seeMoreBtn.addEventListener('click', () => {
porductsListEl.scrollIntoView({ behavior: "smooth" })
})


var userName=localStorage.getItem("uName")
if (! userName ){
  description.innerHTML +=`
  there are new  Summer T-shirt
   `;
}
else{
  description.innerHTML +=`
 Hello ${userName} there are new  Summer T-shirt
   `;
}

function goBack() {
  location.href = "login.html"
  window.localStorage.clear();
}

var images = ["./img/1.png","./img/4.png","./img/6.png"];


var i = 0;

function startSlider() {

setInterval(function () {
    i++;
    if (i > images.length-1) {
    i = 0
    }
    document.getElementById("show").src = images[i];
  }, 3000);
}



// var images2 = ["./img/t1.png","./img/t4.png","./img/t2.png"];
// function immm(){

//   setInterval(function(){
//     i++;
//     if (i > images2.length-1) {
//     i = 0
//     }
//     if(i=0){
//       document.getElementsByClassName("product")[0].src=images2[i+2]
//       document.getElementsByClassName("product")[2].src=images2[i]
  
//     }

//     // document.getElementsByClassName("product")[1].src=images2[]
//   },3000)
  
// }



// var i=-1
// var p
//     function play(){
//     p= setInterval(set,3000)
//     }

// function set()
//   {
//       i++
//       if( i >=0 && i<2)
//           {
//           document.getElementsByClassName("product")[i].src= "2.jpg"
//           setTimeout(done, 3000);
//           }
//       else{
//             i= -1
//           }
//   }  
//   function done(){
//             document.getElementsByClassName("product")[i].src= "1.jpg"} 
          
















function ChangeBgColor(c)
{
  document.querySelector(".changeColor").style.backgroundColor=c;

}

function search(){
  let input = document.getElementById('searchOnProduct').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('product-box');

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
      } else {
          x[i].style.display = "list-item";
      }
  }
}


