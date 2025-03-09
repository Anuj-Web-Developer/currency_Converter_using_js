// Get the select element by its ID
const select1 = document.querySelector(".sel-opt1");
const select2 = document.querySelector(".sel-opt2");
const img = document.querySelector("#img")
const img2 = document.querySelector("#img2")
//  console.log(select2)

// Clear default options
select1.innerHTML = "";
select2.innerHTML = "";
// Loop through the countryList object
for (const [currency, country] of Object.entries(countryList)) {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = currency; 
    option1.textContent = `${country}`;

    option2.value = currency; 
    option2.textContent = `${country}`;

    select1.appendChild(option1);
    select2.appendChild(option2);
   
}
// img.src = `https://flagsapi.com/${select1.value1}/flat/64.png`;
// img2.src = `https://flagsapi.com/${select2.value}/flat/64.png`;
// alert(select1.innerText);
// // Change flag when selection changes
// select1.addEventListener("change", function () {
//     img.src = `https://flagsapi.com/${select1.innerHTML}/flat/64.png`;
// });

// select2.addEventListener("change", function () {
//     img2.src = `https://flagsapi.com/${select2.value}/flat/64.png`;
// });


async function currencyConvert() {
  
  let oneOption = document.querySelector("#option1");
  let twoOption = document.querySelector("#option2");
let Amount = document.querySelector("#amt");
let Input = document.querySelector("#input");
let Output = document.querySelector("#output");

  let value1 = oneOption.value;
 
  let value2 = twoOption.value;
    
  const url = `https://v6.exchangerate-api.com/v6/5a35583e22d97bea3c38719d/latest/${value1}`;
  
  try{
   let currency = await fetch(url);
   
   let result = await currency.json();
  
let res = result.conversion_rates[value2]*Amount.value;
let rounded = res.toFixed(2);
let roundedNum = parseFloat(rounded);


  let final_res_in = `${Amount.value} ${value1}`;
  Input.innerHTML = final_res_in;

  let final_res_out = `${roundedNum} ${value2}`;
  Output.innerHTML = final_res_out;
  

  }
  catch(error)
  {
   alert(error);
   console.error(error);
  }
  
}

