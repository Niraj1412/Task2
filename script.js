const product = [
  {
      id: 0,
      image: 'https://m.media-amazon.com/images/I/51M1MId+fRL._AC._SR360,460.jpg',
      price: 5,
  },
  {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/61b2Ae0EqML._AC_UL480_QL65_.jpg',
      price: 5,
  },
  {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/71KZQkANkFS._AC_UL480_QL65_.jpg',
      price: 7,
  },
  {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/61u1fsYBBGL._AC_UL480_QL65_.jpg',
      price: 7,
  }
  ,{
      id: 4,
      image: 'https://m.media-amazon.com/images/I/71Uwnd6YrBL._AC_UL480_QL65_.jpg',
      price: 5,
  },
  {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/41EDA8+SbXL._AC_UL480_QL65_.jpg',
      price: 7,
  },
  {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/5121L5CeS0L._AC._SR360,460.jpg',
      price: 5,
  },
  {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/71U1l1SfgJL._AC._SR360,460.jpg',
      price: 5,
  },
  {
      id: 8,
      image: 'https://m.media-amazon.com/images/I/41E3Kb7NEUL._AC_UF420%2C420_FMjpg_.jpg',
      price: 5,
  },
  

];

const categories = [...new Set(product.map((item) => item))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
          <div class='bottom'>
              <p>${title}</p>
              <h2>₹ ${price}.00</h2>` +
      "<button onclick='addtocart(" + i++ + ")'>Add to cart</button>" +
      `</div>
      </div>`
  );
}).join('');

var cart = [];

function addtocart(a) {
  if (cart.length < 8) {
      cart.push({ ...categories[a] });
      displaycart();
  } else {
      alert("Your cart is full. You can't add more than 8 items.");
  }
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
      total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = 'Your cart is empty';
      document.getElementById('total').innerHTML = '$ ' + 0 + '.00';
  } else {
      document.getElementById('cartItem').innerHTML = cart
          .map((items) => {
              var { image, title, price } = items;
              total = total + price;
              document.getElementById('total').innerHTML =
                  '$ ' + total + '.00';
              return (
                  `<div class='cart-item'>
                  <div class='row-img'>
                      <img class='rowimg' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}</p>
                  <h2 style='font-size: 15px;'>₹ ${price}.00</h2>` +
                  "<i class='fa-solid fa-trash' onclick='delElement(" +
                  j++ +
                  ")'></i></div>"
              );
          })
          .join('');
  }
}