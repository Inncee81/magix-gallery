define("mx-error/index",["magix"],(a,e,r)=>{var l=a("magix");l.applyStyle("_zs_galleryQ","._zs_galleryfw{padding-top:80px;padding-bottom:120px;text-align:center}._zs_galleryfw,._zs_galleryfw ._zs_galleryfx{width:400px;margin:auto}._zs_galleryfw ._zs_galleryfx{display:block}._zs_galleryfw ._zs_galleryfy{font-size:16px;color:#999}._zs_galleryfw ._zs_galleryfz,._zs_galleryfw ._zs_galleryfA{width:calc(var(--font-size)*7)}._zs_galleryfw ._zs_galleryfz{margin-left:20px}"),r.exports=l.View.extend({tmpl:function(a,e,r,l,t,s,n,i){if(r||(r=a),!t){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,f=function(a){return"&"+_[a]+";"};t=function(a){return""+(null==a?"":a)},l=function(a){return t(a).replace(c,f)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(a){return g[a]},o=/[!')(*]/g;s=function(a){return encodeURIComponent(t(a)).replace(o,y)}}if(!i){var p=/[\\'"]/g;i=function(a){return t(a).replace(p,"\\$&")}}var z="",d=a.src,m=a.tip,u=a.btns;return z+='<div mxa="_zs_galleryb\\:_" class="_zs_galleryfw"><img class="_zs_galleryfx" src="'+l(d)+'"/><div mxa="_zs_galleryb\\:a" class="_zs_galleryfy mt40">'+l(m)+"</div>",u&&(z+='<div mxs="_zs_galleryb\\:_" class="mt20"><a href="#!" class="btn btn-brand _zs_galleryfA">回到首页</a><a href="javascript:;" class="btn _zs_galleryfz" mx-click="'+e+'back()">返回上一页</a></div>'),z+="</div>"},init:function(a){var e="",r="";switch(+(a.type||404)){case 404:e="//img.alicdn.com/tfs/TB1tAmuRCzqK1RjSZFpXXakSXXa-1262-668.png",r="抱歉，您查看的页面不存在或无权限查看当前页面";break;case 500:e="//img.alicdn.com/tfs/TB1yZ5sRAvoK1RjSZPfXXXPKFXa-1182-792.png",r="500 Internal Server Error";break;case 502:e="//img.alicdn.com/tfs/TB1yZ5sRAvoK1RjSZPfXXXPKFXa-1182-792.png",r="502 Bad Gateway"}this.updater.set({src:e,tip:a.tip||r,btns:a.btns+""!="false"})},render:function(){this.updater.digest()},"back<click>":function(a){a.preventDefault(),history.back()}})});