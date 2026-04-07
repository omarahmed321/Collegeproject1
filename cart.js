function updateTotals() {
  const items = document.querySelectorAll(".cart-item");
  const summary = document.querySelector(".summary");
  const labels = summary.querySelectorAll("p");
  const totalDisplay = summary.querySelector("h3");

  let subtotal = 0;

  console.log("--- Updating Cart ---");

  items.forEach(function (item) {
    let priceText = item.querySelector("strong").innerText;
    let priceValue = parseFloat(priceText.replace("price:$", ""));
    let qtyValue = parseInt(item.querySelector("span").innerText);

    subtotal += priceValue * qtyValue;
    console.log("Price: " + priceValue + " | Qty: " + qtyValue);
  });

  let shipping = subtotal > 0 ? 10 : 0;
  let tax = subtotal * 0.025;
  let finalTotal = subtotal + shipping + tax;

  console.log("Subtotal: " + subtotal);
  console.log("Total: " + finalTotal);

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
    const buttons = item.querySelectorAll("button");
    const minusBtn = buttons[0];
    const plusBtn = buttons[1];
    const removeBtn = buttons[2];
    const qtySpan = item.querySelector("span");

    plusBtn.onclick = function () {
      console.log("Clicked Plus");
      let qty = parseInt(qtySpan.innerText);
      qtySpan.innerText = qty + 1;
      updateTotals();
    };

    minusBtn.onclick = function () {
      console.log("Clicked Minus");
      let qty = parseInt(qtySpan.innerText);
      if (qty > 1) {
        qtySpan.innerText = qty - 1;
        updateTotals();
      }
    };

    removeBtn.onclick = function () {

      console.log("Clicked Remove");
      item.remove();

      updateTotals();
 
  
    };

  });
}
function checkout(){
  window.open("payment.html","_self");
}

initCart();
updateTotals();
