define("mx-feedback/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,a,l,r,n){if(t||(t=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,i=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(c,i)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(m,x)}}if(!n){var p=/[\\'"]/g;n=function(e){return a(e).replace(p,"\\$&")}}r||(r=function(e,_,t,s){for(s=e[v];--s;)if(e[t=v+s]===_)return t;return e[t=v+e[v]++]=_,t});var f,g,u,v="",y="",b=e.viewId,z=e.text1;try{y+='<div mxa="_zs_galleryb&:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryb&:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryb&:_" class="mb20"><span class="color-9">上述“投放效果预估”功能对您是否有帮助？</span><span class="color-brand cursor-pointer" mx-view="mx-feedback/index?fdId=19">填写反馈（默认样式）</span></div><div mxa="_zs_galleryb&:b" class="mb20"><span mxs="_zs_galleryb&:a" class="color-9">上述“投放效果预估”功能对您是否有帮助？</span><span class="color-brand cursor-pointer" mx-view="mx-feedback/index?fdId=21&fdStyle=',u=12,g="@{\n                    bottom: '200px'\n                }",y+=(f="<%@{        bottom: '200px'    }%>",r(t,{bottom:"200px"})+'">填写反馈（自定义样式）</span></div></div><div mxa="_zs_galleryb&:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb&:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),u=19,g="=viewId",y+=(f="<%!$eu(viewId)%>",l(b)+'_text_1"><span mxa="_zs_galleryb&:d" class="_zs_gallery___test___layout_-desc-tip">'),u=21,g="!text1",y+=(f="<%!text1%>",a(z)+'</span><i mxs="_zs_galleryb&:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=24,g="=viewId",y+=(f="<%=viewId%>",s(b)+'_text_1">\n&lt;mx-feedback class="color-brand"\n    fd-id="19"&gt;填写反馈（默认样式）&lt;/mx-feedback&gt;\n\n&lt;mx-feedback class="color-brand"\n    fd-id="21"\n    fd-style="&#123;&#123;@&#123;\n        bottom: \'200px\'\n    &#125;&#125;&#125;"&gt;填写反馈（自定义样式）&lt;/mx-feedback&gt;\n        </pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw g&&(w+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+u),w+="\r\n\t"+(g?"translate to:":"expr:"),w+=f+"\r\n\tat file:mx-feedback/__test__/1.html"}return y},render:function(){this.updater.digest()}})});