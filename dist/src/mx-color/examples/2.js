define("mx-color/examples/2",["magix","examples/example","$","../picker","mx-copy/index","examples/hl"],(e,l,a)=>{e("../picker"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,r,n,c){if(a||(a=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(x,m)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},d=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(d,p)}}if(!c){var o=/[\\'"]/g;c=function(e){return i(e).replace(o,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryaC:_" class="_zs_galleryg"><div mxs="_zs_galleryaC:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">以下示例：</span>右对齐</div><div class="w300" mx-view="mx-color/picker?align=right"></div></div><div mxa="_zs_galleryaC:a" class="_zs_galleryk"><div mxs="_zs_galleryaC:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_galleryaC:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryaC:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;mx-color.picker class="w300"\n    align="right"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});