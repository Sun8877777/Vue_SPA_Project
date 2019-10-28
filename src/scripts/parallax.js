'use strict';
// const parallax = (function () {
//   const images = document.querySelectorAll('.parallax__layer');
//   return {
//     move: function (block, windowScroll, strafeAmount) {
//       var strafe = windowScroll / -strafeAmount + '%';
//       var transformString = 'translate3d(0,' + strafe + ', 0)';
//       var style = block.style;
//       style.transform = transformString;
//     },
//     init: function (wScroll) {
//       images.forEach(function (elem) {
//         this.move(elem, wScroll, 50)
//       })
//     }
//   }
// }());
// window.onscroll = function () {
//   let wScroll = window.pageYOffset;
//   // parallax.init(wScroll);
// }
window.addEventListener('load', function () {
  const parallax = document.querySelector('.parallax');
  const layers = parallax.children;
  function moveLayersDependsOnScroll(wScroll) {
    [...layers].forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 40;
      layer.style.transform = `translateY(-${strafe}%)`;
    });
  }
  window.addEventListener('scroll', event => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  });
});