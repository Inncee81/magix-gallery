define("mx-loading/__test__/10",["magix","__test__/example","$","../anim","mx-copy/index","__test__/hl"],(e,l,n)=>{e("../anim"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,i,t,_,r){if(n||(n=e),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(m,d)}}if(!t){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(x,c)}}if(!r){var g=/[\\'"]/g;r=function(e){return i(e).replace(g,"\\$&")}}var v="",u=e.viewId,p=e.text1;return v+='<div mxa="_zs_galleryb{:_" class="_zs_galleryh"><div mxs="_zs_galleryb{:_" class="_zs_galleryk clearfix"><div class="fl ml40" mx-view="mx-loading/anim?mode=three-bounce"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=three-bounce&type=brand"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=three-bounce&size=80&color=%2351a300"></div></div><div mxa="_zs_galleryb{:a" class="_zs_galleryl"><div mxs="_zs_galleryb{:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_1"><span mxa="_zs_galleryb{:b" class="_zs_galleryo">'+i(p)+'</span><i mxs="_zs_galleryb{:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="three-bounce" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="three-bounce" type="brand" /&gt;\n\n&lt;!-- 自定义颜色 + 颜色 --&gt;\n&lt;mx-loading.anim mode="three-bounce" size="80" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});