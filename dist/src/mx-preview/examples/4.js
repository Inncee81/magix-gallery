define("mx-preview/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,r)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var a=e("magix"),i=e("examples/example");e("$");a.applyStyle("_zs_galleryaq","._zs_galleryjv{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryjw{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),r.exports=i.extend({tmpl:function(e,l,r,a,i,t,s,d){if(r||(r=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(x,m)}}if(!t){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},p=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!d){var g=/[\\'"]/g;d=function(e){return i(e).replace(g,"\\$&")}}var _="",v=e.viewId,h=e.text1;return _+='<div mxa="_zs_galleryd):_" class="_zs_galleryg"><div mxs="_zs_galleryd):_" class="_zs_galleryj"><div class="mb10">1. 文字预览：支持内容包含可执行脚本，以文字展示</div><div class="_zs_galleryjv mb20 ml15" mx-view="mx-preview/index?type=text&url=%3Cscript%3Ealert%281%29%3C%2Fscript%3E&width=200&height=200&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 文字预览：可配置文字上的跳转链接click-url，<span class="color-brand">可不配width和height，不配则width=600，height=auto，根据屏幕范围修正</span></div><div class="_zs_galleryjv ml15" mx-view="mx-preview/index?type=text&url=%E6%96%87%E5%AD%97%E9%93%BE%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA&clickUrl=%2F%2Fwww.taobao.com%2F&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryd):a" class="_zs_galleryk"><div mxs="_zs_galleryd):a" class="_zs_galleryi">文字预览</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryd):b" class="_zs_galleryn">'+i(h)+'</span><i mxs="_zs_galleryd):b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;!-- 内容包含可执行脚本 --&gt;\n&lt;mx-preview class="demo"\n    type="text"\n    url="&lt;script&gt;alert(1)&lt;/script&gt;"\n    width="200"\n    height="200"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- 文字上可配置跳转链接 --&gt;\n&lt;mx-preview class="demo ml15"\n    type="text"\n    url="文字链内容展示"\n    click-url="//www.taobao.com/"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});