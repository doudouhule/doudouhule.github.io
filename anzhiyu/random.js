var posts=["2026/05/05/hello-world/","2026/05/05/网页设计/如何部署自己的hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };