async function currencyConvert() {
  // alert("Function working successfully!")
  let oneOption = document.querySelector("#option1");
  let twoOption = document.querySelector("#option2");
let Amount = document.querySelector("#amt");
let Input = document.querySelector("#input");
let Output = document.querySelector("#output");

  let value1 = oneOption.value;
  // console.log(oneOption.value);
  // alert(value1);

  let value2 = twoOption.value;
  // console.log(value2);
  // alert(value2);

  
  const url = `https://v6.exchangerate-api.com/v6/5a35583e22d97bea3c38719d/latest/${value1}`;
  
  try{
   let currency = await fetch(url);
   
   let result = await currency.json();
  //  console.log(result);
  //  alert(result);
let res = result.conversion_rates[value2]*Amount.value;
let rounded = res.toFixed(2);
let roundedNum = parseFloat(rounded);
// console.log(result.conversion_rates[value2]);
// alert(roundedNum);

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

