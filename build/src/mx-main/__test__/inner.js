define("mx-main/__test__/inner",["magix","$"],(e,r,a)=>{var l=e("magix"),n=e("$");l.applyStyle("_zs_galleryad","._zs_galleryho{position:relative;height:46px;padding:0 20px;line-height:44px;background-color:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_galleryho ._zs_galleryhp{float:left;height:44px;line-height:44px}._zs_galleryho ._zs_galleryhp>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryho ._zs_galleryhq{float:left;font-size:16px}._zs_galleryhr{padding:20px 20px 0}"),a.exports=l.View.extend({tmpl:function(e,r,a,l,n,i,t,o){if(a||(a=e),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(e){return"&"+s[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(_,g)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return p[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(d,c)}}if(!o){var h=/[\\'"]/g;o=function(e){return n(e).replace(h,"\\$&")}}var f="",u=e.info;return f+='<div mxa="_zs_galleryc%:_" class="_zs_galleryho clearfix">',u.icon&&(f+='<span mxa="_zs_galleryc%:a" class="_zs_galleryhp">'+n(u.icon)+"</span>"),f+='<span mxa="_zs_galleryc%:b" class="_zs_galleryhq">'+l(u.label)+'</span></div><div mxs="_zs_galleryc%:_" class="_zs_galleryhr" style="min-height: 200px;">自定义内容</div>'},init:function(e){this.updater.set({info:e.info||{},data:n.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),r={};return r["test_"+e.index]=e.label,new Promise(function(a){a({ok:!0,msg:e.label,remain:r})})}})});