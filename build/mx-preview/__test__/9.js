define("mx-preview/__test__/9",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),a=e("__test__/example");e("$");i.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n"),_.exports=a.extend({tmpl:function(e,t,_,i,a,l,n,r){if(_||(_=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(d,c)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(x,m)}}if(!r){var g=/[\\'"]/g;r=function(e){return a(e).replace(g,"\\$&")}}n||(n=function(e,t,_,i){for(i=e[v];--i;)if(e[_=v+i]===t)return _;return e[_=v+e[v]++]=t,_});var p,h,u,v="",y="",w=e.viewId,z=e.text1,f=e.text2;try{y+='<div mxa="_zs_gallerydP:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydP:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydP:_" class="mb10"><span class="color-9">以下示例：</span>缩略图（图片）和预览图（iframe展示）不一样</div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&width=400&height=125&maxWidth=100&maxHeight=100&previewData=',u=14,h="@{\n                type: 'iframe',\n                url: '//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html',\n                width: 300,\n                height: 250\n            }",y+=(p="<%@{        type: 'iframe',        url: '//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html',        width: 300,        height: 250    }%>",n(_,{type:"iframe",url:"//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html",width:300,height:250})+'"></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&width=400&height=125&maxWidth=100&maxHeight=100&previewData='),u=28,h="@{\n                type: 'iframe',\n                url: '//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html',\n                width: 300,\n                height: 250,\n                scale: 0.5\n            }",y+=(p="<%@{        type: 'iframe',        url: '//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html',        width: 300,        height: 250,        scale: 0.5    }%>",n(_,{type:"iframe",url:"//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html",width:300,height:250,scale:.5})+'"></div></div><div mxa="_zs_gallerydP:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydP:a" class="_zs_gallery___test___layout_-eg-title">图片预览</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),u=38,h="=viewId",y+=(p="<%!$eu(viewId)%>",l(w)+'_text_1"><span mxa="_zs_gallerydP:c" class="_zs_gallery___test___layout_-desc-tip">'),u=40,h="!text1",y+=(p="<%!text1%>",a(z)+'</span><i mxs="_zs_gallerydP:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=43,h="=viewId",y+=(p="<%=viewId%>",i(w)+'_text_1">\n&lt;mx-preview \n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    width="400"\n    height="125"\n    max-width="100"\n    max-height="100"\n    preview-data="&#123;&#123;@&#123;\n        type: \'iframe\',\n        url: \'//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html\',\n        width: 300,\n        height: 250\n    &#125;&#125;&#125;"/&gt;\n\n\n&lt;mx-preview \n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    width="400"\n    height="125"\n    max-width="100"\n    max-height="100"\n    preview-data="&#123;&#123;@&#123;\n        type: \'iframe\',\n        url: \'//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html\',\n        width: 300,\n        height: 250,\n        scale: 0.5\n    &#125;&#125;&#125;"/&gt;\n        </pre></div><div mxa="_zs_gallerydP:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydP:c" class="_zs_gallery___test___layout_-eg-title">CSS</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),u=77,h="=viewId",y+=(p="<%!$eu(viewId)%>",l(w)+'_text_2"><span mxa="_zs_gallerydP:e" class="_zs_gallery___test___layout_-desc-tip">'),u=79,h="!text2",y+=(p="<%!text2%>",a(f)+'</span><i mxs="_zs_gallerydP:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=82,h="=viewId",y+=(p="<%=viewId%>",i(w)+'_text_2">\n.demo {\n    margin-right: 20px;\n    border: 1px solid #e6e6e6;\n    background-color: #fafafa;\n}</pre></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw h&&(b+="\r\n\tsrc art:{{"+h+"}}\r\n\tat line:"+u),b+="\r\n\t"+(h?"translate to:":"expr:"),b+=p+"\r\n\tat file:mx-preview/__test__/9.html"}return y},render:function(){this.updater.digest()}})});