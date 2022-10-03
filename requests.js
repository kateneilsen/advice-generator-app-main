//get button element by id
const advice_btn = document.getElementById("advice_btn");
//get element by id
const advice_result = document.getElementById("advice_result");

//event listener for clicking button
advice_btn.addEventListener("click", getRandomAdvice);

function getRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      advice_id.innerHTML = `Advice #${data.slip.id}`;
      advice_result.innerHTML = `"${data.slip.advice}"`;
    });
}
