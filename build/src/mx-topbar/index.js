define("mx-topbar/index",["magix","$"],(a,n,t)=>{var e=a("magix"),r=a("$");e.applyStyle("_zs_galleryaK","._zs_galleryng{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerynh{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:#4d7fff;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all .25s ease}");var o,i,l=e.guid("mx_topbar_"),d=e.Vframe,f=100,s={__n:function(){clearTimeout(o),r("#"+l).length||(r("body").append('<div class="_zs_gallerynh" id="'+l+'"></div>'),i=setInterval(s.__fs,300))},__ft:function(){var a=r("#"+l);a.length&&(f>15?f-=3+5*Math.random():f>4&&(f-=1+Math.random()),a.css({transform:"translate3d(-"+f+"%,0px,0px)"}))},__m:function(){clearInterval(i);var a=r("#"+l);a.length&&(a.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){f=100,a.remove()},400))}},_=e.config("rootId"),m=d.get(_),g=function(a){a.on("alter",s.__n),a.on("created",s.__m)};if(m)g(m);else{s.__n();var p=function(a){a.vframe.id==_&&(d.off("add",p),g(a.vframe))};d.on("add",p)}});