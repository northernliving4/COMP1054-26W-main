

document.addEventListener('DOMContentLoaded', function () {

  var tabs   = document.querySelectorAll('[role="tablist"] [role="tab"]');
  var panels = document.querySelectorAll('[role="tabpanel"]');

  /* Deactivate all tabs and hide all panels */
  function deactivateAll() {
    tabs.forEach(function (tab) {
      tab.setAttribute('aria-selected', 'false');
    });
    panels.forEach(function (panel) {
      panel.classList.remove('active');
    });
  }


  function activateTab(tab, href) {
    deactivateAll();

    tab.setAttribute('aria-selected', 'true');

    var panelId = href.replace('#', '');
    var panel   = document.getElementById(panelId);

    if (panel) {
    
      void panel.offsetWidth;
      panel.classList.add('active');
    }
  }

  
  tabs.forEach(function (tab) {
    var anchor = tab.querySelector('a');
    if (!anchor) return;

    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      activateTab(tab, anchor.getAttribute('href'));
    });
  });

  
  if (tabs.length > 0) {
    var firstAnchor = tabs[0].querySelector('a');
    if (firstAnchor) {
      activateTab(tabs[0], firstAnchor.getAttribute('href'));
    }
  }

});