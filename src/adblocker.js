/* eslint-env browser, es2021 */
(function() {
  for(const e of document.querySelectorAll('[target="_blank"],[formtarget="_blank"]')) {
    if(e.getAttribute("target") == "_blank") e.setAttribute("target", "_self")
    if(e.getAttribute("formtarget") == "_blank") e.setAttribute("formtarget", "_self")
  }
  console.log("Hello world");
})()