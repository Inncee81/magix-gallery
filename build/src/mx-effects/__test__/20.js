define("mx-effects/__test__/20",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,r)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");r.exports=t.extend({tmpl:function(e,s,r,t,n,i,a,l){if(r||(r=e),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(c,d)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return m[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(o,g)}}if(!l){var x=/[\\'"]/g;l=function(e){return n(e).replace(x,"\\$&")}}var v="",f=e.viewId,p=e.text1;return v+='<div mxa="_zs_gallerya1:_" class="_zs_galleryf"><div mxs="_zs_gallerya1:_" class="_zs_galleryh"><div class="mt20"><div class="mr20" mx-view="mx-effects/progress?type=gradient&num=20.22"></div></div><div class="mt20"><div class="mr20" mx-view="mx-effects/progress?type=gradient&num=60&color=%23ffb400"></div></div><div class="mt20"><div mx-view="mx-effects/progress?type=gradient&num=80&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_gallerya1:a" class="_zs_galleryi"><div mxs="_zs_gallerya1:a" class="_zs_galleryg">刻度型展示值取整</div><div class="_zs_galleryj" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerya1:b" class="_zs_galleryl">'+n(p)+'</span><i mxs="_zs_gallerya1:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+'_text_1">\n&lt;mx-effects.progress\n    type="gradient"\n    num="20.22"/&gt;\n\n&lt;mx-effects.progress\n    type="gradient"\n    num="60" \n    color="#ffb400"/&gt;\n\n&lt;mx-effects.progress\n    type="gradient"\n    num="80" \n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});