const input = document.getElementById("input");
const checkBtn = document.getElementById("button");
const result = document.getElementById("result");


function checkPali (input) {

   const cutReg = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
   
   const reversedStr = cutReg.split('').reverse().join('');

   return cutReg === reversedStr;

}

input.addEventListener("change", (e) => {
  if (e.key = "Enter") {
    if (checkPali(input.value)) {
      result.innerText = `${input.value} is a palindrome`;
    } else {
      result.innerText = `${input.value} is not a palindrome`
    }
  };
});

checkBtn.addEventListener("click", () => {
   if (checkPali(input.value)) {
      result.innerText = `${input.value} is a palindrome`;
    } else {
      result.innerText = `${input.value} is not a palindrome`
    };
})

document.addEventListener("DOMContentLoaded", () => {
   const input = prompt("enter a word then press either enter or check button to process the result, to proceed enter got it", "");

   if (input !== null && input.trim().toLowerCase() === "got it") {
      alert("lets go to the palindrome page");
      window.location.href = index.html;
   } else {
      document.body.innerHTML = "";
      const hOne = document.createElement("div");
      hOne.innerHTML = `<div class="jsdiv">
        <h1> you didn't follow the instruction</h2>
        <label for="tarea">play around</label> <textarea col="10" row="20"></textarea>
      </div>`
      document.body.appendChild(hOne);
   }
})

