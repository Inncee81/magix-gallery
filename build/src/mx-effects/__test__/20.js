define("mx-effects/__test__/20",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,r)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");r.exports=t.extend({tmpl:function(e,s,r,t,_,n,l,i){if(r||(r=e),!_){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+a[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(c,d)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(v,m)}}if(!i){var x=/[\\'"]/g;i=function(e){return _(e).replace(x,"\\$&")}}var o="",p=e.viewId,f=e.text1;return o+='<div mxa="_zs_gallerybv:_" class="_zs_galleryg"><div mxs="_zs_gallerybv:_" class="_zs_galleryj"><div class="mt20"><div class="mr20" mx-view="mx-effects/progress?type=gradient&num=20.22"></div></div><div class="mt20"><div mx-view="mx-effects/progress?type=gradient&num=80&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_gallerybv:a" class="_zs_galleryk"><div mxs="_zs_gallerybv:a" class="_zs_galleryi">渐变型，精度与传入数值保持一致</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_gallerybv:b" class="_zs_galleryn">'+_(f)+'</span><i mxs="_zs_gallerybv:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-effects.progress\n    type="gradient"\n    num="20.22"/&gt;\n\n&lt;mx-effects.progress\n    type="gradient"\n    num="80" \n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});