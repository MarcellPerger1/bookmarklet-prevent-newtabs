/* eslint-env browser, es2021 */
(function() {
  for(const e of document.querySelectorAll('[target="_blank"],[formtarget="_blank"]')) {
    if(e.getAttribute("target") == "_blank") e.setAttribute("target", "_self")
    if(e.getAttribute("formtarget") == "_blank") e.setAttribute("formtarget", "_self")
  }
  // this will only work if the function doesn't keep the ref to the old window.open
  // but there is no better way to do it as far as I can tell
  var origOpen = window._origOpen = window.open;
  window.open = function open(url, target, features) {
    if(target === '_blank') {
      target = '_self'
    }
    return origOpen(url, target, features);
  }
  console.log("Hello world");
})()
