/*! frontend-nanodegree-mobile-portfolio - v0.1.0 - 2015-11-16
* https://github.com/udacity/frontend-nanodegree-mobile-portfolio
* Copyright (c) 2015 Brian Coe; Licensed MIT */
// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});
