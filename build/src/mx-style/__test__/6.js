define("mx-style/__test__/6",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(s,n,l)=>{s("mx-copy/index"),s("__test__/hl");s("magix");var a=s("__test__/example");s("$");l.exports=a.extend({tmpl:function(s,n,l,a,e,t,_,i){if(l||(l=s),!e){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(s){return"&"+r[s]+";"};e=function(s){return""+(null==s?"":s)},a=function(s){return e(s).replace(c,o)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(s){return d[s]},g=/[!')(*]/g;t=function(s){return encodeURIComponent(e(s)).replace(g,p)}}if(!i){var x=/[\\'"]/g;i=function(s){return e(s).replace(x,"\\$&")}}var m="",y=s.viewId,u=s.text1;return m+='<div mxa="_zs_gallerydn:_" class="_zs_galleryh"><div mxs="_zs_gallerydn:_" class="_zs_galleryk"><span class="brand-solid-icon">品牌色实心打标</span><span class="grey-solid-icon">灰色实心打标</span><span class="brand-hollow-icon">品牌色空心打标</span><span class="grey-hollow-icon">灰色空心打标</span></div><div mxa="_zs_gallerydn:a" class="_zs_galleryl"><div mxs="_zs_gallerydn:a" class="_zs_galleryj">打标</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(y)+'_text_1"><span mxa="_zs_gallerydn:b" class="_zs_galleryo">'+e(u)+'</span><i mxs="_zs_gallerydn:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;span class="brand-solid-icon"&gt;品牌色实心打标&lt;/span&gt;\n\n&lt;span class="grey-solid-icon"&gt;灰色实心打标&lt;/span&gt;\n\n&lt;span class="brand-hollow-icon"&gt;品牌色空心打标&lt;/span&gt;\n\n&lt;span class="grey-hollow-icon"&gt;灰色空心打标&lt;/span&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});