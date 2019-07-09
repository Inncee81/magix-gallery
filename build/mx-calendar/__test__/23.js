define("mx-calendar/__test__/23",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),r=e("moment");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,r,a,n,l){if(_||(_=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(i,o)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(x,m)}}if(!l){var y=/[\\'"]/g;l=function(e){return r(e).replace(y,"\\$&")}}n||(n=function(e,t,_,s){for(s=e[p];--s;)if(e[_=p+s]===t)return _;return e[_=p+e[p]++]=t,_});var v,g,u,p="",f="",z=e.start,h=e.end,w=e.shortkeys,k=e.viewId,Y=e.text1,M=e.text2;try{f+='<div mxv mxa="_zs_gallery(:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallery(:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery(:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">至少选择3天，至多选择10天</div></div><div mxv="shortkeys" class="w240" mx-view="mx-calendar/rangepicker?start=',u=8,g="=start",f+=(v="<%!$eu(start)%>",a(z)+"&end="),u=9,g="=end",f+=(v="<%!$eu(end)%>",a(h)+"&shortkeys="),u=10,g="@shortkeys",f+=(v="<%@shortkeys%>",n(_,w)+'"></div></div><div mxa="_zs_gallery(:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery(:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),u=14,g="=viewId",f+=(v="<%!$eu(viewId)%>",a(k)+'_text_1"><span mxa="_zs_gallery(:c" class="_zs_gallery___test___layout_-desc-tip">'),u=16,g="!text1",f+=(v="<%!text1%>",r(Y)+'</span><i mxs="_zs_gallery(:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=19,g="=viewId",f+=(v="<%=viewId%>",s(k)+'_text_1">\n&lt;mx-calendar.rangepicker class="w240"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    shortkeys="&#123;&#123;@shortkeys&#125;&#125;"/&gt;\n        </pre></div><div mxa="_zs_gallery(:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery(:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),u=28,g="=viewId",f+=(v="<%!$eu(viewId)%>",a(k)+'_text_2"><span mxa="_zs_gallery(:e" class="_zs_gallery___test___layout_-desc-tip">'),u=30,g="!text2",f+=(v="<%!text2%>",r(M)+'</span><i mxs="_zs_gallery(:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=33,g="=viewId",f+=(v="<%=viewId%>",s(k)+"_text_2\">\nlet Magix = require('magix');\nlet Moment = require('moment');\nlet $ = require('$');\nlet Formater = 'YYYY-MM-DD';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let start = Moment().format(Formater),\n            end = Moment().add(5, 'days').format(Formater);\n        let shortkeys = [&#123;\n            key: 'test1',\n            text: '自定义1',\n            tip: '自定义说明1',\n            start,\n            end\n        &#125;,&#123;\n            key: 'test2',\n            text: '自定义2',\n            tip: '自定义说明2',\n            start: start,\n            end: Moment().add(10, 'days').format(Formater)\n        &#125;]\n        this.updater.digest(&#123;\n            start,\n            end,\n            shortkeys\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>")}catch(e){var I="render view error:"+(e.message||e);throw g&&(I+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+u),I+="\r\n\t"+(g?"translate to:":"expr:"),I+=v+"\r\n\tat file:mx-calendar/__test__/23.html"}return f},render:function(){var e=r().format("YYYY-MM-DD"),t=r().add(5,"days").format("YYYY-MM-DD"),_=[{key:"test1",text:"自定义1",tip:"自定义说明1",start:e,end:t},{key:"test2",text:"自定义2",tip:"自定义说明2",start:e,end:r().add(10,"days").format("YYYY-MM-DD")}];this.updater.digest({start:e,end:t,shortkeys:_})}})});