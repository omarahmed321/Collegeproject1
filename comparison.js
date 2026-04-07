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