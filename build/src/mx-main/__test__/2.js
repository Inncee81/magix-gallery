define("mx-main/__test__/2",["magix","__test__/example","$","mx-footer/index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("mx-footer/index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,_,l,t,i,s,r,n){if(l||(l=e),!i){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+a[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(x,d)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(c,o)}}if(!n){var g=/[\\'"]/g;n=function(e){return i(e).replace(g,"\\$&")}}var v="",p=e.viewId,f=e.text1;return v+='<div mxa="_zs_gallerybR:_" class="_zs_galleryf"><div mxs="_zs_gallerybR:_" class="_zs_galleryh"><div mx-view="mx-footer/index?mode=simple"></div></div><div mxa="_zs_gallerybR:a" class="_zs_galleryi"><div mxs="_zs_gallerybR:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_gallerybR:b" class="_zs_galleryl">'+i(f)+'</span><i mxs="_zs_gallerybR:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-footer mode="simple"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});