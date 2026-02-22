(function () {
  'use strict';

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('nav-toggle');
  var navbarMenu = document.getElementById('navbar-menu');
  var hero = document.getElementById('hero');

  function setNavbarSolid() {
    if (!navbar) return;
    var hasHero = hero && hero.getBoundingClientRect().height > 0;
    var scrolled = window.scrollY > 60;
    if (hasHero && !scrolled) {
      navbar.classList.remove('is-solid');
    } else {
      navbar.classList.add('is-solid');
    }
  }

  function initNavbarScroll() {
    if (!hero) {
      navbar.classList.add('is-solid');
      return;
    }
    setNavbarSolid();
    window.addEventListener('scroll', setNavbarSolid, { passive: true });
    window.addEventListener('resize', setNavbarSolid);
  }

  function initMobileMenu() {
    if (!navToggle || !navbarMenu) return;
    navToggle.addEventListener('click', function () {
      var open = navbarMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close menu when clicking a link (for in-page or same-site nav)
    navbarMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navbarMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'باز کردن منو');
        document.body.style.overflow = '';
      });
    });
  }

  function setFooterYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  initNavbarScroll();
  initMobileMenu();
  setFooterYear();
})();
