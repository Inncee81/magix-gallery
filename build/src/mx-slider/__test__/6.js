define("mx-slider/__test__/6",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,n,s)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,n,s,t,i,_,l,a){if(s||(s=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(d,m)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},g=/[!')(*]/g;_=function(e){return encodeURIComponent(i(e)).replace(g,c)}}if(!a){var v=/[\\'"]/g;a=function(e){return i(e).replace(v,"\\$&")}}var p="",o=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerydt:_" class="_zs_galleryh"><div mxs="_zs_gallerydt:_" class="_zs_galleryk"><div class="mb40"><div mx-view="mx-slider/range?max=200&min=100&step=1"></div></div><div class="mb20"><div mx-view="mx-slider/range?max=200&min=100&step=0.5"></div></div></div><div mxa="_zs_gallerydt:a" class="_zs_galleryl"><div mxs="_zs_gallerydt:a" class="_zs_galleryj">step决定滑轴刻度</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(o)+'_text_1"><span mxa="_zs_gallerydt:b" class="_zs_galleryo">'+i(u)+'</span><i mxs="_zs_gallerydt:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(o)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="1"/&gt;\n\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});