define("mx-slider/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");l.exports=i.extend({tmpl:function(e,_,l,i,s,n,t,a){if(l||(l=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(d,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(v,c)}}if(!a){var g=/[\\'"]/g;a=function(e){return s(e).replace(g,"\\$&")}}var p="",u=e.viewId,o=e.text1;return p+='<div mxa="_zs_gallerydU:_" class="_zs_galleryg"><div mxs="_zs_gallerydU:_" class="_zs_galleryj"><div class="pt20 pb20"><div mx-view="mx-slider/index?max=200&min=100&value=50&step=0.5"></div></div></div><div mxa="_zs_gallerydU:a" class="_zs_galleryk"><div mxs="_zs_gallerydU:a" class="_zs_galleryi">根据可选范围对value进行修正</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_gallerydU:b" class="_zs_galleryn">'+s(o)+'</span><i mxs="_zs_gallerydU:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(u)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="50"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});