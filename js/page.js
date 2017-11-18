let input = document.querySelector("#input");
let output = document.querySelector("#output");
let send = document.querySelector("#send");

send.addEventListener("click", function () {
  let answer = high(input.value);
  output.innerHTML = answer.word + " has the biggest value which is " + answer.value ;
});
