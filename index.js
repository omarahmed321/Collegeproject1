

//Shared
// modal 
let sideBar = document.querySelector("#sideBar");
let modalOverlay = document.querySelector(".modal-screen");
function appear() {
  modalOverlay.style.transform = "scale(1)";
  modalOverlay.style.opacity = "1";
  sideBar.style.left = 0;
  modalOverlay.style.pointerEvents = "all";
  document.body.style.overflow = "hidden";
};
function disappear (){
  sideBar.style.left = "-250px";
  modalOverlay.style.opacity = "0";
  modalOverlay.style.pointerEvents = "none";
  document.body.style.overflow = "auto";

  setTimeout(() => {
      modalOverlay.style.transform = "scale(0)";
  }, 500);
};
function modelOverlay (click){
  if (click.target == modalOverlay) {
    disappear();
  }
}



// Home
// slider-hero section
let index = 0;
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let slide = (direction) => {
    index += direction;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slider.style.transform = `translateX(-${index * 100}%)`;
}
// toggle button
let input = document.querySelector('.checkbox');
let body = document.body;

let p = document.querySelectorAll('p');
let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let h3 = document.querySelectorAll('h3');
let button = document.querySelectorAll('button');

let toggle = () => {
    let bg = getComputedStyle(body).backgroundColor;

    if (bg === 'rgb(35, 35, 35)') {
        body.style.backgroundColor = '#FFF8F0';
        body.style.color = 'black';

      
        h1.forEach(el => el.style.color = 'black');
        h2.forEach(el => el.style.color = 'black');
        h3.forEach(el => el.style.color = 'black');
      

    } else {
        body.style.backgroundColor = '#232323';
        body.style.color = 'white';

       
        h1.forEach(el => el.style.color = 'white');
        h2.forEach(el => el.style.color = 'white');
        h3.forEach(el => el.style.color = 'white');
       
    }
};

// ABout 
let h1ForAboutPage = document.querySelector('#aboutUs');
let pForAboutPage= document.querySelector('#infoForAboutPage');
function About(){
    h1ForAboutPage.textContent = "About SYMO";
   pForAboutPage.textContent =`SYMO is a secure, easy-to-use, and reliable online marketplace offering a curated selection of authentic, high-quality consumer products. We focus on providing the latest electronics, including laptops, smartphones, and professional tech accessories like mechanical keyboards. Our goal is to deliver a world-class shopping experience through fast delivery, flexible payment options, easy returns, and dependable customer support.

Founded in 2021 in the heart of Cairo, Egypt, we are a passionate team dedicated to simplifying everyday life through innovative technology solutions. We strive to be your first destination for everything you need, all in one place.`;
}
function Terms(){
    h1ForAboutPage.textContent = "Terms and Conditions";
    pForAboutPage.textContent =`Please read these terms carefully before using our website. By using this website, you agree to abide by them.

Warranty, Return, & Exchange Policy:

14-Day Return Guarantee: To ensure your complete satisfaction, SYMO offers a flexible return policy. You have the right to return any product within 14 days from the date of receipt, provided it is in its original condition and complete packaging.

One-Month Exchange Guarantee: We also offer a full month replacement guarantee for the product in the event of any manufacturing defect, ensuring the quality of our products and your trust in us.

These policies set us apart and guarantee you a safe and convenient shopping experience.`;
}
function Privacy(){
   h1ForAboutPage.textContent = "Privacy and Policy";
    pForAboutPage.textContent =`At SYMO, we prioritize the privacy and security of your data. This policy clarifies how we collect, use, and protect your personal information. We only collect the necessary information required to complete your orders and improve your experience on our website, such as contact details, shipping address, and browsing data.

We use advanced encryption systems to protect your data from any unauthorized access. Rest assured that we will not share your personal information with any third party, except as required by law or with your explicit consent.`;
}

// cart
function updateTotals() {
  const items = document.querySelectorAll(".cart-item");
  const summary = document.querySelector(".summary");
  const labels = summary.querySelectorAll(".labels");
  const totalDisplay = summary.querySelector("#Total");
  let subtotal = 0;

  items.forEach(function (item) {
    let priceText = item.querySelector(".price-text").innerText;
    let priceValue = parseFloat(priceText.replace("price:$", ""));
    let qtyValue = parseInt(item.querySelector(".qty").innerText);
    subtotal += priceValue * qtyValue;
  });

  let shipping = subtotal > 0 ? 10 : 0;
  let tax = subtotal * 0.025;
  let finalTotal = subtotal + shipping + tax;

  labels[0].innerText = "Subtotal: $" + subtotal;
  labels[1].innerText = "Shipping: $" + shipping;
  labels[2].innerText = "Tax: $" + tax;
  totalDisplay.innerText = "Total: $" + finalTotal;

  let lastItem = items[items.length - 1];
  lastItem.style.border = "none";
}

function initCart() {
  const items = document.querySelectorAll(".cart-item");
  items.forEach(function (item) {
    const minusBtn = item.querySelector(".minus");
    const plusBtn = item.querySelector(".plus");
    const removeBtn = item.querySelector(".remove");
    const qtySpan = item.querySelector(".qty");

    plusBtn.onclick = function () {
      let qty = parseInt(qtySpan.innerText);
      qtySpan.innerText = qty + 1;
      updateTotals();
    };

    minusBtn.onclick = function () {
      let qty = parseInt(qtySpan.innerText);
      if (qty > 1) {
        qtySpan.innerText = qty - 1;
        updateTotals();
      }
    };

    removeBtn.onclick = function () {
      item.remove();
      updateTotals();
    };
  });
}

function checkout() {
  window.open("payment.html", "_self");
}


// Comparison page
// wether the function is already running and typing to the response_box
running = false;
function getAiResponse(product1,product2){
  const generatedResponse= [
    "The choice between {product1} and {product2} ultimately comes down to what you prioritize in your daily workflow. {product1} is engineered with high-performance tracking and responsiveness in mind, making it an excellent choice for users who need speed and pinpoint precision. On the other hand, {product2} focuses heavily on comfort and reliability, offering a more forgiving, ergonomic design tailored for long hours at the desk. While both are highly capable peripherals, power users might lean towards the raw specs of {product1}, whereas those working extended shifts will appreciate the ease of {product2}.",
    
    "When putting {product1} head-to-head against {product2}, we see two very different approaches to peripheral design. {product1} strips away the unnecessary extras to deliver a highly reliable, straightforward experience that offers incredible value for everyday use. In contrast, {product2} is built for versatility, packed with extra programmable inputs, premium materials, and software customization. If you want a simple, plug-and-play solution that just works, {product1} is the clear winner. However, if you love tweaking your setup to perfection, {product2} easily justifies its position.",
    
    "Deciding between {product1} and {product2} depends largely on where you do your best work. {product1} boasts an ultra-lightweight chassis and a low-profile design, making it the perfect travel companion for professionals on the go. Conversely, {product2} offers a robust, heavy-duty build intended to be a permanent fixture on your desk. For the digital nomad, {product1} is unmatched, but for the home office enthusiast, {product2} provides a superior, planted feel.",
    
    "If aesthetics are at the top of your list, {product1} stands out with its vibrant, customizable lighting and sleek modern lines. However, this visual flair comes at the cost of battery longevity. {product2} takes a more minimalist, stealthy approach, ditching the flashy aesthetics in favor of an exceptionally long-lasting battery that can go months without a charge. Opt for {product1} if you want your setup to pop, but choose {product2} if you despise reaching for the charging cable.",
    
    "The battle between {product1} and {product2} is essentially a debate between satisfying feedback and stealthy operation. {product1} features pronounced, tactile clicks that give you absolute confirmation of every input, which is deeply satisfying for heavy typists and gamers alike. {product2}, however, is engineered with dampened switches designed for whisper-quiet operation. If you work in a shared office space or stream late at night, {product2} is the considerate choice, whereas {product1} is perfect for those who love a tactile response.",
    
    "Connectivity is the main differentiator when comparing {product1} to {product2}. {product1} sticks to a traditional wired connection, ensuring absolute zero latency and eliminating the need to ever worry about battery life or interference. On the flip side, {product2} embraces modern wireless freedom, offering seamless multi-device switching and an ultra-fast wireless receiver. Purists who demand an uninterrupted signal will prefer {product1}, but multitaskers juggling multiple devices will find {product2} indispensable.",
    
    "Comparing {product1} and {product2} highlights the classic debate of price versus premium features. {product1} is a fantastic entry-level device that covers all the essential bases without breaking the bank, making it ideal for students or casual users. {product2}, meanwhile, carries a flagship price tag but justifies it with aerospace-grade materials, a state-of-the-art sensor, and an industry-leading warranty. If you are watching your budget, {product1} punches above its weight class, but if you want the absolute best money can buy, {product2} is the investment to make."
  ];

  response = generatedResponse[(Math.floor(Math.random() * generatedResponse.length))]
  if(product1 == product2){
    response = "both items are the same.";
  }
  response = response.replaceAll("{product1}",product1);
  response = response.replaceAll("{product2}",product2);
  return response
}
function compare(){ 
  // to stop the function of running twice and mess the output
  if(running){
    return;
  }

  running = true;
  timeout = Math.random() * 12 + 4; // random timeout from 4ms to 16ms
  console.log(timeout);
  products = document.querySelectorAll(".prds");
  let product1 = products[0].value;
  let product2 = products[1].value;
  response = getAiResponse(product1,product2);
  aiChat = document.getElementById("aigen");
  aiChat.value = "";
  [...response].forEach((char,index) => { 
    setTimeout(() => {
          aiChat.value += char;
      }, index * timeout); 
  });

  setTimeout(() => {
    running = false;
      },[...response].length * timeout);
    }

function changeimg(){
  products = [...document.querySelectorAll(".prds")].map((x) => x.value)
 products.forEach((element,index) => {
    filename = "resources for comparison page/"+element+".png";
    index+=1
    console.log(filename, index)
    img = document.getElementById(`img${index}`)

    console.log(img)
    img.src = filename; 
  });
}

changeimg();