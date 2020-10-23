function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  console.log("DEBUG: iframe resize has been run");
}