define("mx-slider/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,_,l,n,i,s,t,a){if(l||(l=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(d,x)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(v,m)}}if(!a){var u=/[\\'"]/g;a=function(e){return i(e).replace(u,"\\$&")}}var p="",g=e.viewId,o=e.text1;return p+='<div mxa="_zs_galleryc]:_" class="_zs_galleryh"><div mxs="_zs_galleryc]:_" class="_zs_galleryk"><div class="pt20 pb20"><div mx-disabled mx-view="mx-slider/index?max=200&min=100&value=120&needInput=true"></div></div></div><div mxa="_zs_galleryc]:a" class="_zs_galleryl"><div mxs="_zs_galleryc]:a" class="_zs_galleryj">禁止选择</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryc]:b" class="_zs_galleryo">'+i(o)+'</span><i mxs="_zs_galleryc]:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="120"\n    need-input="true"\n    mx-disabled/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});