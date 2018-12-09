(function () {
  // 自动点击about me
  var aboutMe = document.getElementsByClassName('about-me')[0];

  var pageWidth =
    window.innerWidth ? window.innerWidth : document.body.clientWidth;
  if (pageWidth >= 1200) {
    setTimeout(function () {
      aboutMe.click();
    }, 2000);
  }
})();