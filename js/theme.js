(function () {
  var KEY = 'dd-theme';

  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function syncButtons() {
    var dark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-toggle-btn').forEach(function (btn) {
      var sun  = btn.querySelector('.theme-icon-sun');
      var moon = btn.querySelector('.theme-icon-moon');
      var lbl  = btn.querySelector('.theme-toggle-label');
      if (sun)  sun.style.display  = dark ? 'block' : 'none';
      if (moon) moon.style.display = dark ? 'none'  : 'block';
      if (lbl)  lbl.textContent    = dark ? 'Light mode' : 'Dark mode';
    });
  }

  window.toggleTheme = function () {
    var dark = !document.documentElement.classList.contains('dark');
    localStorage.setItem(KEY, dark ? 'dark' : 'light');
    applyTheme(dark);
    syncButtons();
  };

  // Sync button icons once DOM is ready
  document.addEventListener('DOMContentLoaded', syncButtons);
})();
