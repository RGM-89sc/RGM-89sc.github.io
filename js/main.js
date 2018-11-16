(function () {
  // 渐入动画
  var posts = document.getElementsByClassName('post');
  var pageNav = document.getElementsByClassName('page-nav')[0];

  Array.prototype.forEach.call(posts, function (post, index) {
    setTimeout(function () {
      post.className = "post post-come";

      if (index >= posts.length - 1) {
        setTimeout(function () {
          pageNav.className = "page-nav page-nav-come";
        }, 500);
      }
    }, index === 0 ? 0 : index * 200);
  });


  // 开闭 about-me 板块
  var aboutMe = document.getElementsByClassName('about-me')[0];
  var main = document.getElementsByClassName('main')[0];
  var me = document.getElementsByClassName('me')[0];
  var me_avatar = me.getElementsByClassName('avatar')[0];
  var me_p = me.getElementsByTagName('p')[0];
  var me_links = me.getElementsByClassName('links')[0];
  var aboutOpen = false;

  aboutMe.onclick = function (event) {
    if (aboutOpen) {
      aboutMe.className = "about-me";
      main.className = "main full-width";
      me.className = "me close-me";
      me_avatar.className = "avatar";
      me_p.className = "me-p";
      me_links.className = "links";
      aboutOpen = false;
    } else {
      aboutMe.className = "about-me about-me-open";
      main.className = "main eighty-width";
      me.className = "me open-me";
      setTimeout(function(){
        me_avatar.className = "avatar avatar-come";
      }, 400);
      setTimeout(function(){
        me_p.className = "me-p p-come";
      }, 650);
      setTimeout(function(){
        me_links.className = "links links-come";  
      }, 900);
      aboutOpen = true;  
    }
  };
})();