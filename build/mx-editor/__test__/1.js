define("mx-editor/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,n,l,i,a){if(_||(_=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(d,c)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},p=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(p,x)}}if(!a){var m=/[\\'"]/g;a=function(e){return n(e).replace(m,"\\$&")}}i||(i=function(e,t,_,s){for(s=e[y];--s;)if(e[_=y+s]===t)return _;return e[_=y+e[y]++]=t,_});var v,g,u,y="",z="",f=e.content,b=e.rules,h=e.viewId,w=e.text1,I=e.text2;try{z+='<div mxv mxa="_zs_gallerybp:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerybp:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybp:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>部分文案可编辑，配置展示模板</div><div>hover元素显示编辑按钮</div><div>回车和失去焦点都可触发回调，只触发一次</div></div></div><div mxa="_zs_gallerybp:b" class="mb20"><span mxs="_zs_gallerybp:a" class="color-9">当前内容：</span><span>',u=13,g="=content",z+=(v="<%=content%>",s(f)+'（要求必填且不小于200）</span></div><div mxv mxa="_zs_gallerybp:c" class="mb20"><div mxv="rules" mx-edit="'+t+'change()" mx-view="mx-editor/index?tmpl=%3Cspan%3E%24%7Bcontent%7D%3C%2Fspan%3E%3Cspan%20class%3D%27grey-solid-icon%20ml5%27%3E%E6%89%93%E6%A0%87%3C%2Fspan%3E&content='),u=18,g="=content",z+=(v="<%!$eu(content)%>",l(f)+"&rules="),u=19,g="@rules",z+=(v="<%@rules%>",i(_,b)+'"></div></div></div><div mxa="_zs_gallerybp:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybp:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),u=25,g="=viewId",z+=(v="<%!$eu(viewId)%>",l(h)+'_text_1"><span mxa="_zs_gallerybp:e" class="_zs_gallery___test___layout_-desc-tip">'),u=27,g="!text1",z+=(v="<%!text1%>",n(w)+'</span><i mxs="_zs_gallerybp:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=30,g="=viewId",z+=(v="<%=viewId%>",s(h)+'_text_1">\n&lt;mx-editor\n    tmpl="&lt;span&gt;$&#123;content&#125;&lt;/span&gt;&lt;span class=\'grey-solid-icon ml5\'&gt;打标&lt;/span&gt;"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@rules&#125;&#125;"\n    mx-edit="change()"&gt;&lt;/mx-editor&gt;</pre></div><div mxa="_zs_gallerybp:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybp:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),u=39,g="=viewId",z+=(v="<%!$eu(viewId)%>",l(h)+'_text_2"><span mxa="_zs_gallerybp:g" class="_zs_gallery___test___layout_-desc-tip">'),u=41,g="!text2",z+=(v="<%!text2%>",n(I)+'</span><i mxs="_zs_gallerybp:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=44,g="=viewId",z+=(v="<%=viewId%>",s(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            content: 2000,\n            rules: &#123;\n                required: true,\n                min: [200, '不小于200']\n            &#125;\n        &#125;);\n    &#125;,\n    'change&lt;edit&gt;' (e) &#123;\n        // editText编辑后的文案\n        this.updater.digest(&#123;\n            content: e.editText\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var $="render view error:"+(e.message||e);throw g&&($+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+u),$+="\r\n\t"+(g?"translate to:":"expr:"),$+=v+"\r\n\tat file:mx-editor/__test__/1.html"}return z},render:function(){this.updater.digest({content:2e3,rules:{required:!0,min:[200,"不小于200"]}})},"change<edit>":function(e){this.updater.digest({content:e.editText})}})});