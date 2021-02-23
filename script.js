let first = document.querySelector(".first");
let iframe = document.querySelector("iframe");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

let timeout = null;
first.addEventListener("keyup", (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  }, 600);
});

const message =
  "Thank you for submitting your message to the Argo ship. Jason and his crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
