// Mother Touch Cleaning Services
// Buildless script: menu, FAQ pre-fill, form -> WhatsApp, privacy dialog,
// 3D scroll reveals. No tracking, no network calls.

(function () {
  'use strict';

  var WHATSAPP = '27630168929';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Hero typewriter. Text pre-rendered in HTML as fallback; JS clears and types.
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lines = document.querySelectorAll('[data-typewrite] .type-line');
  var compactLayout = window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
  if (lines.length && !reducedMotion && !compactLayout) {
    // Clear text first so caret shows cleanly
    Array.prototype.forEach.call(lines, function (el) { el.textContent = ''; });
    Array.prototype.forEach.call(lines, function (el) {
      var text = el.getAttribute('data-type') || '';
      var delay = parseInt(el.getAttribute('data-type-delay') || '0', 10);
      var speed = 55;
      setTimeout(function () {
        var i = 0;
        var tick = setInterval(function () {
          if (i >= text.length) {
            clearInterval(tick);
            el.classList.add('typed');
            return;
          }
          el.textContent = text.slice(0, ++i);
        }, speed);
      }, delay);
    });
  } else if (lines.length) {
    Array.prototype.forEach.call(lines, function (el) {
      el.classList.add('typed');
    });
  }

  // Mobile menu
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    var mobileMenuQuery = window.matchMedia('(max-width: 920px)');
    var pageRegions = document.querySelectorAll('main, body > footer');
    function setMenu(open, restoreFocus) {
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', open);
      Array.prototype.forEach.call(pageRegions, function (region) { region.inert = open; });
      if (restoreFocus) menuBtn.focus();
    }
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      setMenu(!open, false);
    });
    document.querySelector('.site-header').addEventListener('click', function (e) {
      if (e.target.closest('a') && document.body.classList.contains('menu-open')) {
        setMenu(false, true);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (!document.body.classList.contains('menu-open')) return;
      if (e.key === 'Escape') { setMenu(false, true); return; }
      if (e.key === 'Tab') {
        var controls = Array.prototype.filter.call(document.querySelectorAll('.site-header a, .site-header button'), function (el) { return el.getClientRects().length > 0; });
        var first = controls[0];
        var last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    function resetDesktopMenu(e) { if (!e.matches) setMenu(false, false); }
    if (mobileMenuQuery.addEventListener) mobileMenuQuery.addEventListener('change', resetDesktopMenu);
    else mobileMenuQuery.addListener(resetDesktopMenu);
  }

  // Service pre-fill from service card
  var svcSelect = document.querySelector('#enquiry select[name="service"]');
  Array.prototype.forEach.call(document.querySelectorAll('[data-service]'), function (link) {
    link.addEventListener('click', function () {
      if (svcSelect) svcSelect.value = link.getAttribute('data-service') || '';
    });
  });

  // Form -> WhatsApp
  var form = document.getElementById('enquiry');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hp = form.querySelector('input[name="website"]');
      if (hp && hp.value) {
        if (status) { status.textContent = 'Opening WhatsApp...'; status.className = 'success'; }
        return;
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) { status.textContent = 'Please fill the required fields.'; status.className = 'error'; }
        return;
      }
      var data = {};
      Array.prototype.forEach.call(form.elements, function (el) {
        if (el.name && el.name !== 'website') data[el.name] = el.value;
      });
      var lines = [
        'Hi Mother Touch,',
        '',
        "I'd like a cleaning quote.",
        'Name: ' + (data.name || ''),
        'Suburb: ' + (data.suburb || ''),
        'Service: ' + (data.service || ''),
        'Property size: ' + (data.size || '')
      ];
      if (data.date) lines.push('Preferred date: ' + data.date);
      if (data.notes) { lines.push(''); lines.push('Notes: ' + data.notes); }
      var text = encodeURIComponent(lines.join('\n'));
      var url = 'https://wa.me/' + WHATSAPP + '?text=' + text;
      if (status) { status.textContent = 'Opening WhatsApp...'; status.className = 'success'; }
      window.open(url, '_blank', 'noopener');
    });
  }

  // Privacy dialog
  var dialog = document.getElementById('privacy');
  var openBtn = document.getElementById('privacy-open');
  var closeBtn = document.getElementById('privacy-close');
  if (dialog && openBtn && typeof dialog.showModal === 'function') {
    openBtn.addEventListener('click', function () { dialog.showModal(); });
  }
  if (dialog && closeBtn) {
    closeBtn.addEventListener('click', function () { dialog.close(); });
  }
  if (dialog) {
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  }

  // Scroll reveal
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && !compactLayout && 'IntersectionObserver' in window) {
    var fadeSelectors = [
      '.hero-copy', '.hero-figure',
      '.section-head',
      '.svc-feature',
      '.about-figure', '.about-copy',
      '.steps li',
      '.area-copy', '.area-suburb',
      '.faq-list details',
      '.contact-copy', '.enquiry',
      '.footer-cta', '.footer-grid',
      '.svc-detail-head', '.svc-detail-body',
      '.story-aside', '.story-body h2', '.story-body p',
      '.value',
      '.principle',
      '.stat',
      '.voice',
      '.page-hero'
    ].join(',');
    var reveals = document.querySelectorAll(fadeSelectors);
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('reveal'); });

    var tiltSelectors = ['.svc:not(.svc-feature):not(.svc-wide)', '.svc-wide', '.voice'].join(',');
    var tilts = document.querySelectorAll(tiltSelectors);
    Array.prototype.forEach.call(tilts, function (el) {
      el.classList.remove('reveal');
      el.classList.add('reveal-tilt');
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    Array.prototype.forEach.call(document.querySelectorAll('.reveal, .reveal-tilt, .reveal-scale, .reveal-stagger, .reveal-left, .reveal-right, .reveal-blur'), function (el) {
      io.observe(el);
    });

    var groups = [
      { items: document.querySelectorAll('.svc:not(.svc-feature):not(.svc-wide)'), step: 90 },
      { items: document.querySelectorAll('.principle'), step: 110 },
      { items: document.querySelectorAll('.voice'), step: 140 },
      { items: document.querySelectorAll('.stat'), step: 100 },
      { items: document.querySelectorAll('.area-suburb'), step: 40 },
      { items: document.querySelectorAll('.value'), step: 120 },
      { items: document.querySelectorAll('.steps li'), step: 120 }
    ];
    groups.forEach(function (g) {
      Array.prototype.forEach.call(g.items, function (el, i) {
        el.style.transitionDelay = (i * g.step) + 'ms';
      });
    });
  }
})();
