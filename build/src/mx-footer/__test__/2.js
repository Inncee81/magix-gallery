define("mx-footer/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,_,l,t,s,i,r,n){if(l||(l=e),!s){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+a[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(d,x)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(c,m)}}if(!n){var g=/[\\'"]/g;n=function(e){return s(e).replace(g,"\\$&")}}var v="",p=e.viewId,u=e.text1;return v+='<div mxa="_zs_gallerybh:_" class="_zs_galleryh"><div mxs="_zs_gallerybh:_" class="_zs_galleryk"><div mx-view="mx-footer/index?mode=simple"></div></div><div mxa="_zs_gallerybh:a" class="_zs_galleryl"><div mxs="_zs_gallerybh:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_1"><span mxa="_zs_gallerybh:b" class="_zs_galleryo">'+s(u)+'</span><i mxs="_zs_gallerybh:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-footer mode="simple"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});