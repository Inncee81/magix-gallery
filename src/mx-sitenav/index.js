define("mx-sitenav/index",["magix","../mx-mustache/index","$"],(e,n,t)=>{var a=e("magix"),i=e("../mx-mustache/index"),s=e("$");t.exports=a.View.extend({init:function(e){this.assign(e),this.on("destroy",function(){window.MMSiteNav&&window.MMSiteNav.destroy()})},assign:function(e){this.__cR="simple"===e.mode},render:function(){var e=this,n=e.__cR;s.ajax({url:"//mos.m.taobao.com/union/jsonp/sitenav",dataType:"jsonp",cache:!0,success:e.wrapAsync(function(t){var a=s("#"+e.id);a.html(i.render(t.html,{simple:n}));var c=(a=a.find(".alimama-site-nav")).attr("data-cdn");e.__eA(c)})})},__eA:function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.src=e,n.appendChild(t)}})});