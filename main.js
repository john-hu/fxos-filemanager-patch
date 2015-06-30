(function() {
  function preventContextMenu(e) {
    e.preventDefault();
  }

  function check() {
    if (document.querySelectorAll('*[contextmenu]').length === 0) {
      if (!window.oncontextmenu) {
        window.oncontextmenu = preventContextMenu;
      }
    } else {
      if (window.oncontextmenu === preventContextMenu) {
        window.oncontextmenu = null;
      }
    }
  }
  var mo = new MutationObserver(function() {
    check();
  });
  mo.observe(document.documentElement, {
    childList: true,
  });

  check();
})();
