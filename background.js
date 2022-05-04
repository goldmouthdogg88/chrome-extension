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
    console.log("I am a background script");
  }
  console.log("I am a background script v2");
});

console.log("I am a background script v3");
