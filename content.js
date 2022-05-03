// content.js

window.onload = function () {
  var xhr = new XMLHttpRequest();
  const url = window.location.href;
  const date = new Date();
  xhr.open("POST", `https://localhost:9000/web_history`, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
  };
  xhr.send(`title=${document.title}&url=${url}&date=${date.toJSON()}`);
};

function url() {
  if (window.location.href == "data:text/html,chromewebdata") {
    return document.title.match(/([^ ]*)/).pop();
  } else {
    return document.location.href;
  }
}
