define("mx-duration/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix").Vframe,s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,l,s,i,a,r){if(t||(t=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(n,o)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return c[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(v,u)}}if(!r){var x=/[\\'"]/g;r=function(e){return s(e).replace(x,"\\$&")}}var g,m,y,p="",f=e.ok,z=e.result,h=e.viewId,b=e.text1,w=e.text2;try{p+='<div mxa="_zs_gallerybl:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybl:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybl:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>可选时间间隔为1小时</div><div>宽度随容器自适应，最小780</div><div>清空时获取选中值，提示未选择内容不可提交</div></div></div><div mxa="_zs_gallerybl:b" class="mb20"><a mxs="_zs_gallerybl:a" href="javascript:;" mx-click="'+_+'get()" class="btn btn-brand mr20">获取当前选中值</a>',y=13,m="if ok",g="<%if (ok) {%>",f?(p+="<span>",y=14,m="=result",p+=(g="<%=result%>",l(z)+"</span>"),y=15,m="else",g="<%}else {%>"):(p+='<span mxs="_zs_gallerybl:b" class="color-red">请至少选择一个时段</span>',y=17,m="/if",g="<%}%>"),p+='</div><div id="',y=19,m="=viewId",p+=(g="<%=viewId%>",l(h)+'_duration" mx-view="mx-duration/index?width=800&selected='),y=21,m="=result",p+=(g="<%!$eu(result)%>",i(z)+'"></div></div><div mxa="_zs_gallerybl:c" class="clearfix"><div mxa="_zs_gallerybl:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_gallerybl:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=26,m="=viewId",p+=(g="<%!$eu(viewId)%>",i(h)+'_text_1"><span mxa="_zs_gallerybl:e" class="_zs_gallery___test___layout_-desc-tip">'),y=28,m="!text1",p+=(g="<%!text1%>",s(b)+'</span><i mxs="_zs_gallerybl:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=31,m="=viewId",p+=(g="<%=viewId%>",l(h)+'_text_1">\n&lt;mx-duration id="&#123;&#123;=viewId&#125;&#125;_duration"\n    width="800"\n    selected="&#123;&#123;=result&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerybl:f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerybl:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode='),y=38,m="=viewId",p+=(g="<%!$eu(viewId)%>",i(h)+'_text_2"><span mxa="_zs_gallerybl:g" class="_zs_gallery___test___layout_-desc-tip">'),y=40,m="!text2",p+=(g="<%!text2%>",s(w)+'</span><i mxs="_zs_gallerybl:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=43,m="=viewId",p+=(g="<%=viewId%>",l(h)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            ok: true,\n            result: '00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'(event) &#123;\n        let vf = Vframe.get(this.id + '_duration');\n        let result = vf.invoke('submit');\n\n        // ok：\n        //      false 未选择任何时段\n        //      true 已选择时段\n        // result.val 当前选中值，ok = true时\n        this.updater.digest(&#123;\n            ok: result.ok,\n            result: result.val\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>")}catch(e){var k="render view error:"+(e.message||e);throw m&&(k+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+y),k+="\r\n\t"+(m?"translate to:":"expr:"),k+=g+"\r\n\tat file:mx-duration/__test__/1.html"}return p},render:function(){this.updater.digest({viewId:this.id,ok:!0,result:"00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100"})},"get<click>":function(e){var _=l.get(this.id+"_duration").invoke("submit");this.updater.digest({ok:_.ok,result:_.val})}})});