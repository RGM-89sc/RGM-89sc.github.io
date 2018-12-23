(function () {
  // 预加载图片
  var avatar = document.getElementsByClassName('avatar')[0],
    isSupportWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

    avatar.src = isSupportWebp ? '/img/avatar.webp' : '/img/avatar.jpg';

  // 开闭 about-me 板块
  var aboutMe = document.getElementsByClassName('about-me')[0],
    main = document.getElementsByClassName('main')[0],
    me = document.getElementsByClassName('me')[0],
    me_avatar = me.getElementsByClassName('avatar')[0],
    me_p = me.getElementsByTagName('p')[0],
    me_links = me.getElementsByClassName('links')[0],
    all_tags = me.getElementsByClassName('all-tags')[0];
    aboutOpen = false;

  aboutMe.onclick = function () {
    if (aboutOpen) {
      aboutMe.className = "about-me";
      main.className = "main full-width";
      me.className = "me close-me";
      me_avatar.className = "avatar";
      me_p.className = "me-p";
      me_links.className = "links";
      all_tags.className = 'all-tags';
      aboutOpen = false;
    } else {
      aboutMe.className = "about-me about-me-open";
      main.className = "main eighty-width";
      me.className = "me open-me";
      setTimeout(function () {
        me_avatar.className = "avatar avatar-come";
      }, 400);
      setTimeout(function () {
        me_p.className = "me-p p-come";
      }, 650);
      setTimeout(function () {
        me_links.className = "links links-come";
      }, 900);
      setTimeout(function () {
        all_tags.className = 'all-tags all-tags-come';
      }, 1400);
      aboutOpen = true;
    }
  };
})();
