// background.js
// cross-origin xmlhttprequest: https://developer.chrome.com/extensions/xhr
// getting started chrome extension: https://developer.chrome.com/extensions/getstarted
// make extension run every page load : https://stackoverflow.com/questions/6497548/chrome-extension-make-it-run-every-page-load
// match_patterns: https://developer.chrome.com/extensions/match_patterns
// run extensions on page load: https://stackoverflow.com/questions/43029072/run-js-script-in-chrome-extension-on-page-load/43030019
//xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
//xhr.open("GET", chrome.extension.getURL('/config_resources/config.json'), true);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    function captureTimeData(date) {
      // Accepts Date() object argument.
      _date = {
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: "",
      };

      let t = date.toLocaleTimeString().slice(0, 7).split(":");
      // I found a bug in this code.
      // Which forces the timestamp to AM in all cases
      // Just parse the AM and PM if PM add 12 hours.
      // _date.hour = t[0];
      if (date.toLocaleTimeString().split(" ")[1] == "PM") {
        _date.hour = t[0] * 1 + 12;
      }
      if (t[1] < 10) {
        _date.minute = t[1].split("")[1];
      } else {
        _date.minute = t[1];
      }
      _date.second = t[2];

      let d = date.toLocaleDateString().split("/");

      _date.month = d[0];
      _date.day = d[1];
      _date.year = d[2];

      return _date;
    }

    // do your things
    // alert('runnin XHR');
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://192.168.1.144/web_history/", true);
    // xhr.send();
    var http = new XMLHttpRequest();
    var url = "https://134.68.176.201:9000/web_history";
    info = {};
    let data = {
      uri: window.location.href,
      title: document.title,
      uri: window.location.href,
      url: window.location.hostname,
      timestamp: captureTimeData(new Date()), // incorporate captureTimeData() function
    };
    var params =
      // 'topic=' + data.topic + '&' +
      // 'note=' + data.note + '&' +
      "uri=" + data.uri + "&" + "timestamp=" + data.timestamp;

    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {
      //Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        //         alert(http.responseText);
      }
    };
    console.log(params);
    http.send(params);
  }
});
