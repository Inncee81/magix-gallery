define("mx-preview/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),r=e("__test__/example");e("$");i.applyStyle("_zs_galleryas","._zs_galleryiZ{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryj_{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),l.exports=r.extend({tmpl:function(e,t,l,i,r,a,s,d){if(l||(l=e),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,x=function(e){return"&"+_[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(n,x)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(m,c)}}if(!d){var g=/[\\'"]/g;d=function(e){return r(e).replace(g,"\\$&")}}var p="",v=e.viewId,h=e.text1;return p+='<div mxa="_zs_gallerydH:_" class="_zs_galleryg"><div mxs="_zs_gallerydH:_" class="_zs_galleryj"><div class="mb10">1. 文字预览：支持内容包含可执行脚本，以文字展示</div><div class="_zs_galleryiZ mb20 ml15" mx-view="mx-preview/index?type=text&url=%3Cscript%3Ealert%281%29%3C%2Fscript%3E&width=200&height=200&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 文字预览：可配置文字上的跳转链接click-url，<span class="color-brand">可不配width和height，不配则width=600，height=auto，根据屏幕范围修正</span></div><div class="_zs_galleryiZ ml15" mx-view="mx-preview/index?type=text&url=%E6%96%87%E5%AD%97%E9%93%BE%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA&clickUrl=%2F%2Fwww.taobao.com%2F&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydH:a" class="_zs_galleryk"><div mxs="_zs_gallerydH:a" class="_zs_galleryi">文字预览</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerydH:b" class="_zs_galleryn">'+r(h)+'</span><i mxs="_zs_gallerydH:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;!-- 内容包含可执行脚本 --&gt;\n&lt;mx-preview class="demo"\n    type="text"\n    url="&lt;script&gt;alert(1)&lt;/script&gt;"\n    width="200"\n    height="200"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- 文字上可配置跳转链接 --&gt;\n&lt;mx-preview class="demo ml15"\n    type="text"\n    url="文字链内容展示"\n    click-url="//www.taobao.com/"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});