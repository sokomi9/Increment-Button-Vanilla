const incrementBtn = document.getElementById("increment-btn");
const countDisplay = document.getElementById("count-display");

let currentCount = 0;
incrementBtn.addEventListener("click", ()=>/*arrow function*/ {
    currentCount++;
    countDisplay.innerText = currentCount;
})

const incrementBtn2 = document.getElementById("increment-btn2");
const countDisplay2 = document.getElementById("count-display2");

let currentCount2 = 0;
incrementBtn2.addEventListener("click", ()=>/*arrow function*/ {
    currentCount2++;
    countDisplay2.innerText = currentCount2;
})