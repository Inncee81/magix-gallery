define("mx-effects/ua",["magix","$"],(e,r,a)=>{var l=e("magix");e("$");l.applyStyle("_zs_galleryK","._zs_galleryeF{width:280px;background-color:var(--color-brand);background-image:linear-gradient(90deg,var(--color-brand),var(--btn-brand-gradient));padding:20px;border-radius:var(--border-radius)}._zs_galleryeF ._zs_galleryeG{font-size:20px;margin-right:5px}"),a.exports=l.View.extend({tmpl:function(e,r,a,l,n,t,i,s){if(a||(a=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,d)}}if(!t){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},_=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(_,m)}}if(!s){var f=/[\\'"]/g;s=function(e){return n(e).replace(f,"\\$&")}}var b="",u=e.show,p=e.title,h=e.tip;return u&&(b+='<div mxa="_zs_gallerybR:_" class="_zs_galleryeF"><div mxa="_zs_gallerybR:a" class="color-f mb10"><i mxs="_zs_gallerybR:_" class="mc-iconfont _zs_galleryeG">&#xe631;</i><span mxa="_zs_gallerybR:b" class="fontsize-18">'+l(p)+'</span></div><div mxa="_zs_gallerybR:c" class="mb20 color-f">'+l(h)+'</div><div mxs="_zs_gallerybR:a" class="clearfix"><a href="//www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer" class="w80 mr10 btn btn-white btn-small">立即下载</a><a href="javascript:;" class="w80 btn btn-white btn-small" mx-click="'+r+'close()">关闭</a></div></div>'),b},render:function(){var e=navigator.userAgent.toLocaleLowerCase(),r={};if(e.indexOf("chrome")>-1){r=+/(chrome)\/([\w.]+)/.exec(e)[2].slice(0,2)<73?{show:!0,title:"Chrome升级提示",tip:"系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。"}:{show:!1}}else r={show:!0,title:"浏览器检测提示",tip:"系统检测到您当前使用的是非Chrome浏览器，如果该浏览器在产品性能和体验上存在问题，请下载chrome高级版。"};this.updater.digest(r)},"close<click>":function(){this.updater.digest({show:!1})}})});