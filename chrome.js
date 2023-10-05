document.addEventListener('DOMContentLoaded', function () {
  var icons = document.querySelectorAll('.favoris a');

  icons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
      event.preventDefault();
      var url = icon.getAttribute('href');
      openNewTab(url);
    });
  });

  function openNewTab(url) {
    chrome.tabs.create({ url: url });
  }
});
