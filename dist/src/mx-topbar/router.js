define("mx-topbar/router",["magix","$"],(t,r,a)=>{var n=t("magix"),e=t("$");n.applyStyle("_zs_galleryaF","._zs_gallerykX{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:var(--color-brand);transform:translate3d(-100%,0,0);transition:all var(--duration)}");var o,i,d=n.guid("mx_topbar_"),l=n.Vframe,_=100,f={__r:function(){clearTimeout(o),e("#"+d).length||(e("body").append('<div class="_zs_gallerykX" id="'+d+'"></div>'),i=setInterval(f.__fq,300))},__fq:function(){var t=e("#"+d);t.length&&(_>15?_-=3+5*Math.random():_>4&&(_-=1+Math.random()),t.css({transform:"translate3d(-"+_+"%,0px,0px)"}))},__q:function(){setTimeout(function(){clearInterval(i);var t=e("#"+d);t.length&&(t.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){_=100,t.remove()},400))},0)}};a.exports=n.View.extend({init:function(t){n.Router.on("changed",function(t){t.path&&f.__r()});var r=function(t){t.off("created",f.__q),t.on("created",f.__q)};l.on("add",function(a){a.vframe.id==t.id&&r(a.vframe)});var a=l.get(t.id);a&&r(a)},render:function(){f.__r()}})});