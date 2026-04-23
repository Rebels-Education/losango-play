/* === CHECKOUT MODAL === */
function openCheckout(course) {
  const modal = document.getElementById('modal-checkout');
  const select = document.getElementById('f-turma');
  const title  = document.getElementById('order-title');

  if (course && select) {
    select.value = course;
    if (title) title.textContent = 'PAS UFLA 2026 · Turma ' + course;
  }

  document.getElementById('checkout-form-wrap').style.display = '';
  document.getElementById('checkout-success-wrap').style.display = 'none';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('modal-checkout').classList.remove('open');
  document.body.style.overflow = '';
}

function handleModalClick(e) {
  if (e.target === document.getElementById('modal-checkout')) closeCheckout();
}

function submitCheckout() {
  document.getElementById('checkout-form-wrap').style.display = 'none';
  document.getElementById('checkout-success-wrap').style.display = '';
}

/* keep order summary in sync with turma select */
document.addEventListener('DOMContentLoaded', function () {
  var select = document.getElementById('f-turma');
  var title  = document.getElementById('order-title');
  if (select && title) {
    select.addEventListener('change', function () {
      title.textContent = 'PAS UFLA 2026 · Turma ' + this.value;
    });
  }
});

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

/* === COUNTDOWN === */
(function () {
  var target = new Date('2026-04-27T19:00:00-03:00').getTime();

  var dEl = document.getElementById('cd-d');
  var hEl = document.getElementById('cd-h');
  var mEl = document.getElementById('cd-m');
  var sEl = document.getElementById('cd-s');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    var diff = target - Date.now();

    if (diff <= 0) {
      var wrap = document.getElementById('cta-content');
      if (wrap) {
        wrap.innerHTML = [
          '<span class="eyebrow" style="color:#fff;background:rgba(255,255,255,.18)">As aulas já começaram</span>',
          '<h2>Próxima turma: PAS 2027</h2>',
          '<p>As inscrições para o PAS UFLA 2026 estão encerradas. Entre na lista de espera e seja o primeiro a saber quando as matrículas do PAS 2027 abrirem.</p>',
          '<button class="btn btn-lg" style="background:#fff;color:#D94A1C;font-weight:800">',
          '  Entrar na lista de espera <span class="chev">»</span>',
          '</button>',
        ].join('');
      }
      return;
    }

    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff / 3600000) % 24;
    var m = Math.floor(diff / 60000)   % 60;
    var s = Math.floor(diff / 1000)    % 60;

    if (dEl) dEl.textContent = pad(d);
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);

    setTimeout(tick, 1000);
  }

  tick();
}());
