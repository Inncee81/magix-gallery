define("mx-effects/__test__/31",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../notice"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,l,a,i,n){if(_||(_=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(c,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(o,g)}}if(!n){var m=/[\\'"]/g;n=function(e){return l(e).replace(m,"\\$&")}}var p,y,v,u="",f=e.index,h=e.viewId,z=e.text1,b=e.text2;try{u+='<div mxa="_zs_gallerybS:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybS:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallerybS:b" class="mb20" mx-view="mx-effects/notice?type=highlight"><span>提示内容',v=6,y="=index",u+=(p="<%=index%>",s(f)+'，</span><a mxs="_zs_gallerybS:_" class="color-brand" href="javascript:;" mx-click="'+t+'change()">点此切换内容</a></div></div><div mxa="_zs_gallerybS:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybS:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=12,y="=viewId",u+=(p="<%!$eu(viewId)%>",a(h)+'_text_1"><span mxa="_zs_gallerybS:d" class="_zs_gallery___test___layout_-desc-tip">'),v=14,y="!text1",u+=(p="<%!text1%>",l(z)+'</span><i mxs="_zs_gallerybS:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=17,y="=viewId",u+=(p="<%=viewId%>",s(h)+'_text_1">\n&lt;mx-effects.notice \n    type="highlight" \n    class="mb20"&gt;\n    &lt;span&gt;提示内容&#123;&#123;=index&#125;&#125;，&lt;/span&gt;\n    &lt;a class="color-brand" href="javascript:;" mx-click="change()"&gt;点此切换内容&lt;/a&gt;\n&lt;/mx-effects.notice&gt;\n        </pre></div><div mxa="_zs_gallerybS:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybS:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),v=28,y="=viewId",u+=(p="<%!$eu(viewId)%>",a(h)+'_text_2"><span mxa="_zs_gallerybS:f" class="_zs_gallery___test___layout_-desc-tip">'),v=30,y="!text2",u+=(p="<%!text2%>",l(b)+'</span><i mxs="_zs_gallerybS:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=33,y="=viewId",u+=(p="<%=viewId%>",s(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            index: 1\n        &#125;);\n    &#125;,\n    'change&lt;click&gt;'(event) &#123;\n        let &#123; index &#125; = this.updater.get();\n        this.updater.digest(&#123;\n            index: index + 1\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>")}catch(e){var w="render view error:"+(e.message||e);throw y&&(w+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+v),w+="\r\n\t"+(y?"translate to:":"expr:"),w+=p+"\r\n\tat file:mx-effects/__test__/31.html"}return u},render:function(){this.updater.digest({index:1})},"change<click>":function(e){var t=this.updater.get().index;this.updater.digest({index:t+1})}})});