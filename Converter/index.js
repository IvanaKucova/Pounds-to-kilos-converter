let btnEl = document.getElementById("btn");
let resultValue = document.getElementById("result");


btnEl.addEventListener("click", function() {
    let inputEl = document.getElementById("input").value;
    let kilosValue = inputEl * 0.45359237;
    resultValue.innerText = Math.round(kilosValue) + " kg";
});

