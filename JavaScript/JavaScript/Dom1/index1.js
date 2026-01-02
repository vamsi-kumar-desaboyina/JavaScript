/** @type {HTMLElement} */

let hed = document.querySelector(".one h5");
let but = document.querySelector(".one button");
let check = 0;
but.addEventListener("click", function () {
  if (check === 0) {
    but.innerHTML = "Requested";
    but.style.color = "blue";
    setTimeout(() => {
      hed.innerHTML = "Friend";
      but.innerHTML = "Remove Friend";
      hed.style.color = "green";
      check = 1;
    }, 5000);
  } else {
    hed.innerHTML = "Stranger";
    but.innerHTML = "Friend";
    hed.style.color = "red";
    check = 0;
  }
});
