define("mx-loading/mask",["$","magix","./base"],(n,i,a)=>{var r=n("$"),e=n("magix");e.applyStyle("_zs_galleryY","._zs_gallerygJ{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:var(--border-radius)}._zs_gallerygK{z-index:999998;background:transparent}._zs_gallerygL,._zs_gallerygK{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_gallerygL{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_gallerygL ._zs_gallerygM{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");var l=function(n,i,a,r,e,l,t,o){if(a||(a=n),!e){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,d=function(n){return"&"+g[n]+";"};e=function(n){return""+(null==n?"":n)},r=function(n){return e(n).replace(s,d)}}if(!l){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(n){return u[n]},p=/[!')(*]/g;l=function(n){return encodeURIComponent(e(n)).replace(p,_)}}if(!o){var c=/[\\'"]/g;o=function(n){return e(n).replace(c,"\\$&")}}var f="";return f+='<div id="'+r(n.id)+'" class="_zs_gallerygL"><div mxs="_zs_gallerycI:_" class="loading _zs_gallerygM" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'},t=n("./base");a.exports=e.mix({__cu:function(){var n=this.id+"_loading",i=r("#"+n);if(!i.length){var a=r.isFunction(l)?l({id:n},this.id):l;r(document.body).append(a),i=r("#"+n)}return i},showLoading:function(){this.__cu().show()}},t)});