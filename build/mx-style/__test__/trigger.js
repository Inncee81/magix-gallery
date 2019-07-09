define("mx-style/__test__/trigger",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,_)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,t,_,l,i,s,a,r){if(_||(_=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(d,o)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return g[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!r){var x=/[\\'"]/g;r=function(e){return i(e).replace(x,"\\$&")}}var m,u,v,y="",f=e.open,z=e.viewId,h=e.text1,w=e.text2;try{y+='<div mxa="_zs_galleryd/:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryd/:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd/:_" class="mb20">组件内所有的展开项使用通用的样式，mx-trigger，mx-trigger-open，mx-output，mx-output-bottom（向下展开），mx-output-open，可借助这些class自定义一个类似于dropdown的组件</div><a mxa="_zs_galleryd/:b" href="javascript:;" mx-click="'+t+'toggle()" class="btn btn-brand mr20">',v=4,u="=(open ? '点击收起' : '点击展开')",y+=(m="<%=(open ? '点击收起' : '点击展开')%>",l(f?"点击收起":"点击展开")+'</a><div mxa="_zs_galleryd/:c" style="position: relative; display: inline-block; width: 200px;"><div class="mx-trigger '),v=6,u="if open",m="<%if (open) {%>",f&&(y+=" mx-trigger-open ",v=6,u="/if",m="<%}%>"),y+='">trigger<i mxs="_zs_galleryd/:a" class="mc-iconfont mx-trigger-arrow">&#xe692;</i></div><div class="mx-output mx-output-bottom ',v=9,u="if open",m="<%if (open) {%>",f&&(y+=" mx-output-open ",v=9,u="/if",m="<%}%>"),y+='"><div mxs="_zs_galleryd/:b" style="padding: 20px;">自定义区域</div></div></div></div><div mxa="_zs_galleryd/:d" class="clearfix"><div mxa="_zs_galleryd/:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryd/:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',v=17,u="=viewId",y+=(m="<%!$eu(viewId)%>",s(z)+'_text_1"><span mxa="_zs_galleryd/:f" class="_zs_gallery___test___layout_-desc-tip">'),v=19,u="!text1",y+=(m="<%!text1%>",i(h)+'</span><i mxs="_zs_galleryd/:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=22,u="=viewId",y+=(m="<%=viewId%>",l(z)+'_text_1">\n&lt;a class="btn btn-brand mr20" href="javascript:;" \n    mx-click="toggle()"&gt;\n    &#123;&#123;=(open ? \'点击收起\' : \'点击展开\')&#125;&#125;\n&lt;/a&gt;\n\n&lt;div style="position: relative; display: inline-block; width: 200px;"&gt;\n    &lt;div class="mx-trigger &#123;&#123;if open&#125;&#125; mx-trigger-open &#123;&#123;/if&#125;&#125;"&gt;\n        trigger\n        &lt;i class="mc-iconfont mx-trigger-arrow"&gt;&#xe692;&lt;/i&gt;\n    &lt;/div&gt;\n    &lt;div class="mx-output mx-output-bottom &#123;&#123;if open&#125;&#125; mx-output-open &#123;&#123;/if&#125;&#125;"&gt;\n        &lt;div style="padding: 20px;"&gt;自定义区域&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryd/:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryd/:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),v=40,u="=viewId",y+=(m="<%!$eu(viewId)%>",s(z)+'_text_2"><span mxa="_zs_galleryd/:h" class="_zs_gallery___test___layout_-desc-tip">'),v=42,u="!text2",y+=(m="<%!text2%>",i(w)+'</span><i mxs="_zs_galleryd/:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=45,u="=viewId",y+=(m="<%=viewId%>",l(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@trigger.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            open: false\n        &#125;);\n    &#125;,\n    'toggle&lt;click&gt;'()&#123;\n        let open = this.updater.get('open');\n        this.updater.digest(&#123;\n            open: !open\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>")}catch(e){var b="render view error:"+(e.message||e);throw u&&(b+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+v),b+="\r\n\t"+(u?"translate to:":"expr:"),b+=m+"\r\n\tat file:mx-style/__test__/trigger.html"}return y},render:function(){this.updater.digest({open:!1})},"toggle<click>":function(){var e=this.updater.get("open");this.updater.digest({open:!e})}})});