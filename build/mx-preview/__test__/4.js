define("mx-preview/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var r=e("magix"),i=e("__test__/example");e("$");r.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n"),t.exports=i.extend({tmpl:function(e,_,t,r,i,l,a,s){if(t||(t=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(d,o)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(i(e)).replace(m,c)}}if(!s){var p=/[\\'"]/g;s=function(e){return i(e).replace(p,"\\$&")}}var g,v,u,y="",w=e.viewId,h=e.text1;try{y+='<div mxa="_zs_gallerydK:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerydK:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10">1. 文字预览：支持内容包含可执行脚本，以文字展示</div><div class="_zs_gallery_mx-preview___test___index_-demo mb20 ml15" mx-view="mx-preview/index?type=text&url=%3Cscript%3Ealert%281%29%3C%2Fscript%3E&width=200&height=200&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 文字预览：可配置文字上的跳转链接click-url，<span class="color-brand">可不配width和height，不配则width=600，height=auto，根据屏幕范围修正</span></div><div class="_zs_gallery_mx-preview___test___index_-demo ml15" mx-view="mx-preview/index?type=text&url=%E6%96%87%E5%AD%97%E9%93%BE%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA&clickUrl=%2F%2Fwww.taobao.com%2F&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydK:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydK:a" class="_zs_gallery___test___layout_-eg-title">文字预览</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',u=22,v="=viewId",y+=(g="<%!$eu(viewId)%>",l(w)+'_text_1"><span mxa="_zs_gallerydK:b" class="_zs_gallery___test___layout_-desc-tip">'),u=24,v="!text1",y+=(g="<%!text1%>",i(h)+'</span><i mxs="_zs_gallerydK:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=27,v="=viewId",y+=(g="<%=viewId%>",r(w)+'_text_1">\n&lt;!-- 内容包含可执行脚本 --&gt;\n&lt;mx-preview class="demo"\n    type="text"\n    url="&lt;script&gt;alert(1)&lt;/script&gt;"\n    width="200"\n    height="200"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- 文字上可配置跳转链接 --&gt;\n&lt;mx-preview class="demo ml15"\n    type="text"\n    url="文字链内容展示"\n    click-url="//www.taobao.com/"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>')}catch(e){var z="render view error:"+(e.message||e);throw v&&(z+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+u),z+="\r\n\t"+(v?"translate to:":"expr:"),z+=g+"\r\n\tat file:mx-preview/__test__/4.html"}return y},render:function(){this.updater.digest()}})});