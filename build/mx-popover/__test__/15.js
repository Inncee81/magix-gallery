define("mx-popover/__test__/15",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),s=e("__test__/example"),l=e("$");_.exports=s.extend({tmpl:function(e,t,_,n,s,l,a,r){if(_||(_=e),!s){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,d=function(e){return"&"+o[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(i,d)}}if(!l){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},u=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(u,x)}}if(!r){var c=/[\\'"]/g;r=function(e){return s(e).replace(c,"\\$&")}}var v,g,m,f="",y=e.top,z=e.left,w=e.auto,h=e.viewId,$=e.text1,I=e.text2;try{f+='<div mxa="_zs_gallerydt:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydt:a" class="_zs_gallery___test___layout_-eg-content"><span class="btn" mx-mouseover="'+t+'enter()" mx-view="mx-popover/index?content=%E8%87%AA%E5%AE%9A%E4%B9%89left%20%2B%20top&top=',m=5,g="=top",f+=(v="<%!$eu(top)%>",l(y)+"&left="),m=6,g="=left",f+=(v="<%!$eu(left)%>",l(z)+"&auto="),m=7,g="=auto",f+=(v="<%!$eu(auto)%>",l(w)+'">鼠标hover节点自定义更新left + top</span></div><div mxa="_zs_gallerydt:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydt:_" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),m=12,g="=viewId",f+=(v="<%!$eu(viewId)%>",l(h)+'_text_1"><span mxa="_zs_gallerydt:c" class="_zs_gallery___test___layout_-desc-tip">'),m=14,g="!text1",f+=(v="<%!text1%>",s($)+'</span><i mxs="_zs_gallerydt:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),m=17,g="=viewId",f+=(v="<%=viewId%>",n(h)+'_text_1">\n&lt;mx-popover class="btn"\n    content="自定义left + top"\n    top="&#123;&#123;=top&#125;&#125;"\n    left="&#123;&#123;=left&#125;&#125;"\n    auto="&#123;&#123;=auto&#125;&#125;"\n    mx-mouseover="enter()"&gt;鼠标hover节点自定义更新left + top&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydt:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydt:b" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),m=27,g="=viewId",f+=(v="<%!$eu(viewId)%>",l(h)+'_text_2"><span mxa="_zs_gallerydt:e" class="_zs_gallery___test___layout_-desc-tip">'),m=29,g="!text2",f+=(v="<%!text2%>",s(I)+'</span><i mxs="_zs_gallerydt:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),m=32,g="=viewId",f+=(v="<%=viewId%>",n(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            auto: false, //控制节点展开\n            top: '',\n            left: ''\n        &#125;);\n    &#125;,\n    'enter&lt;mouseover&gt;' (event) &#123;\n        if (Magix.inside(event.relatedTarget, event.eventTarget)) &#123;\n            return;\n        &#125;\n\n        let node = $(event.eventTarget);\n        let offset = node.offset();\n\n        this.updater.digest(&#123;\n            auto: true,\n            top: offset.top,\n            left: offset.left + 220\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var T="render view error:"+(e.message||e);throw g&&(T+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+m),T+="\r\n\t"+(g?"translate to:":"expr:"),T+=v+"\r\n\tat file:mx-popover/__test__/15.html"}return f},render:function(){this.updater.digest({auto:!1,top:"",left:""})},"enter<mouseover>":function(e){if(!n.inside(e.relatedTarget,e.eventTarget)){var t=l(e.eventTarget).offset();this.updater.digest({auto:!0,top:t.top,left:t.left+220})}}})});