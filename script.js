// Animate bar fills when page loads
window.addEventListener('load', function () {

  // Get all bar fill elements
  var bars = document.querySelectorAll('.bar-fill');

  bars.forEach(function (bar) {
    // Read the target width from the data-width attribute
    var targetWidth = bar.getAttribute('data-width') + '%';

    // Start from 0
    bar.style.width = '0%';

    // After a short delay, animate to the real width
    setTimeout(function () {
      bar.style.width = targetWidth;
    }, 300);
  });

});