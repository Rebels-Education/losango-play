/* === COUNTER ANIMATION === */
(function () {
  var section = document.querySelector('.numbers-block');
  if (!section) return;

  var done = false;

  function runCounters() {
    if (done) return;
    done = true;
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var target   = parseInt(el.dataset.count, 10);
      var prefix   = el.dataset.prefix || '';
      var duration = 1200;
      var start    = performance.now();

      function step(t) {
        var p      = Math.min(1, (t - start) / duration);
        var eased  = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased).toLocaleString('pt-BR');
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) runCounters();
  }, { threshold: 0.3 });

  observer.observe(section);
}());
