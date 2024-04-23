// Wait for the SVG to be loaded before styling
document.querySelector('.footer__logo').addEventListener('load', function () {
  const svgEl = this.contentDocument;

  const pathElements = svgEl.getElementsByTagName('path');
  for (let i = 0; i < pathElements.length; i++) {
    pathElements[i].style.fill = '#fff';
  }
});