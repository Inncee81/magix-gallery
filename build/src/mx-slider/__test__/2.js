define("mx-slider/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,i,s,l,n,_,t,a){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(d,x)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},v=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(v,c)}}if(!a){var p=/[\\'"]/g;a=function(e){return n(e).replace(p,"\\$&")}}var g="",o=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryc[:_" class="_zs_galleryh"><div mxs="_zs_galleryc[:_" class="_zs_galleryk"><div class="mb40"><div mx-view="mx-slider/index?max=200&min=100&step=1"></div></div><div class="mb20"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.5"></div></div></div><div mxa="_zs_galleryc[:a" class="_zs_galleryl"><div mxs="_zs_galleryc[:a" class="_zs_galleryj">step决定滑轴刻度</div><div class="_zs_gallerym" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(o)+'_text_1"><span mxa="_zs_galleryc[:b" class="_zs_galleryo">'+n(u)+'</span><i mxs="_zs_galleryc[:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(o)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    step="1"/&gt;\n\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});