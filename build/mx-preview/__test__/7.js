define("mx-preview/__test__/7",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var r=e("magix"),a=e("__test__/example");e("$");r.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n"),t.exports=a.extend({tmpl:function(e,_,t,r,a,l,i,n){if(t||(t=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},r=function(e){return a(e).replace(d,o)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(m,c)}}if(!n){var p=/[\\'"]/g;n=function(e){return a(e).replace(p,"\\$&")}}var g,v,u,y="",w=e.viewId,f=e.text1;try{y+='<div mxa="_zs_gallerydN:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerydN:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10"><span class="color-9">以下示例：</span>只有缩略图没有预览</div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?preview=false&type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydN:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydN:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',u=16,v="=viewId",y+=(g="<%!$eu(viewId)%>",l(w)+'_text_1"><span mxa="_zs_gallerydN:b" class="_zs_gallery___test___layout_-desc-tip">'),u=18,v="!text1",y+=(g="<%!text1%>",a(f)+'</span><i mxs="_zs_gallerydN:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=21,v="=viewId",y+=(g="<%=viewId%>",r(w)+'_text_1">\n&lt;mx-preview class="demo"\n    preview="false"\n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n        </pre></div></div>')}catch(e){var z="render view error:"+(e.message||e);throw v&&(z+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+u),z+="\r\n\t"+(v?"translate to:":"expr:"),z+=g+"\r\n\tat file:mx-preview/__test__/7.html"}return y},render:function(){this.updater.digest()}})});