define("mx-popover/__test__/8",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,l,s,t,_,n,a,r){if(s||(s=e),!_){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(i,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(p,o)}}if(!r){var g=/[\\'"]/g;r=function(e){return _(e).replace(g,"\\$&")}}var d="",v=e.viewId,y=e.text1,z=e.text2,u=e.text3;return d+='<div mxa="_zs_galleryc}:_" class="_zs_galleryh"><div mxs="_zs_galleryc}:_" class="_zs_galleryk"><span class="btn mr20" mx-view="mx-popover/index?content=%E5%8F%B3%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=right">右中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E5%8F%B3%E4%B8%8A%E5%AF%B9%E9%BD%90&placement=right&align=top">右上对齐</span><span class="btn" mx-view="mx-popover/index?content=%E5%8F%B3%E4%B8%8B%E5%AF%B9%E9%BD%90&placement=right&align=bottom">右下对齐</span></div><div mxa="_zs_galleryc}:a" class="_zs_galleryl"><div mxs="_zs_galleryc}:a" class="_zs_galleryj">右中对齐</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryc}:b" class="_zs_galleryo">'+_(y)+'</span><i mxs="_zs_galleryc}:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;mx-popover class="btn mr20"\n    content="右中对齐"\n    placement="right"&gt;右中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryc}:c" class="_zs_galleryl"><div mxs="_zs_galleryc}:c" class="_zs_galleryj">右上对齐</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryc}:d" class="_zs_galleryo">'+_(z)+'</span><i mxs="_zs_galleryc}:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_2">\n&lt;mx-popover class="btn mr20"\n    content="右上对齐"\n    placement="right"\n    align="top"&gt;右上对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryc}:e" class="_zs_galleryl"><div mxs="_zs_galleryc}:d" class="_zs_galleryj">右下对齐</div><div class="_zs_gallerym" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_3"><span mxa="_zs_galleryc}:f" class="_zs_galleryo">'+_(u)+'</span><i mxs="_zs_galleryc}:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_3">\n&lt;mx-popover class="btn mr20"\n    content="右下对齐"\n    placement="right"\n    align="bottom"&gt;右下对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});