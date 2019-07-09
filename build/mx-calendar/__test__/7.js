define("mx-calendar/__test__/7",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,t,a)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),_=e("moment");e("$");a.exports=s.extend({tmpl:function(e,t,a,s,_,n,r,l){if(a||(a=e),!_){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};_=function(e){return""+(null==e?"":e)},s=function(e){return _(e).replace(i,m)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(v,o)}}if(!l){var x=/[\\'"]/g;l=function(e){return _(e).replace(x,"\\$&")}}var g,u,y,p="",f=e.vs,z=e.start,h=e.end,Y=e.max,w=e.min,M=e.viewId,b=e.text1,I=e.text2;try{p+='<div mxa="_zs_gallery]:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallery]:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery]:_" class="mb20"><span class="color-9">以下示例：</span><span>可对比，关闭对比选择单天</span></div><div mxa="_zs_gallery]:b" class="mb20"><span mxs="_zs_gallery]:a" class="color-9">当前结果：</span>',y=9,u="if vs",g="<%if (vs) {%>",f?(p+='<span mxa="_zs_gallery]:c" class="color-brand mr5">',y=10,u="=start",p+=(g="<%=start%>",s(z)+'</span><span mxs="_zs_gallery]:b" class="mr5">对比</span><span mxa="_zs_gallery]:d" class="color-brand-vs">'),y=12,u="=end",p+=(g="<%=end%>",s(h)+"</span>"),y=13,u="else",g="<%}else {%>"):(p+='<span mxa="_zs_gallery]:e" class="mr5">',y=14,u="=start",p+=(g="<%=start%>",s(z)+"</span>"),y=15,u="/if",g="<%}%>"),p+='</div><div class="w220" mx-change="'+t+'changeInfo()" mx-view="mx-calendar/rangepicker?vsenable=true&vs=',y=19,u="=vs",p+=(g="<%!$eu(vs)%>",n(f)+"&single=true&start="),y=21,u="=start",p+=(g="<%!$eu(start)%>",n(z)+"&end="),y=22,u="=end",p+=(g="<%!$eu(end)%>",n(h)+"&max="),y=23,u="=max",p+=(g="<%!$eu(max)%>",n(Y)+"&min="),y=24,u="=min",p+=(g="<%!$eu(min)%>",n(w)+'"></div></div><div mxa="_zs_gallery]:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery]:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=29,u="=viewId",p+=(g="<%!$eu(viewId)%>",n(M)+'_text_1"><span mxa="_zs_gallery]:g" class="_zs_gallery___test___layout_-desc-tip">'),y=31,u="!text1",p+=(g="<%!text1%>",_(b)+'</span><i mxs="_zs_gallery]:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=34,u="=viewId",p+=(g="<%=viewId%>",s(M)+'_text_1">\n&lt;mx-calendar.rangepicker class="w220"\n    vsenable="true"\n    vs="&#123;&#123;=vs&#125;&#125;"\n    single="true"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    max="&#123;&#123;=max&#125;&#125;"\n    min="&#123;&#123;=min&#125;&#125;"\n    mx-change="changeInfo()"/&gt;</pre></div><div mxa="_zs_gallery]:h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery]:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),y=47,u="=viewId",p+=(g="<%!$eu(viewId)%>",n(M)+'_text_2"><span mxa="_zs_gallery]:i" class="_zs_gallery___test___layout_-desc-tip">'),y=49,u="!text2",p+=(g="<%!text2%>",_(I)+'</span><i mxs="_zs_gallery]:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=52,u="=viewId",p+=(g="<%=viewId%>",s(M)+"_text_2\">\nlet Magix = require('magix');\nlet Moment = require('moment');\nlet $ = require('$');\nlet Formater = 'YYYY-MM-DD';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            vsenable: true,\n            vs: true,\n            start: Moment().subtract(1, 'days').format(Formater),\n            end: Moment().add(1, 'days').format(Formater),\n            min: Moment().subtract(12, 'days').format(Formater),\n            max: Moment().add(12, 'days').format(Formater)\n        &#125;);\n    &#125;,\n    'changeInfo&lt;change&gt;'(event) &#123;\n        let data = this.updater.get();\n        // event.dates.startStr：开始日期\n        // event.dates.endStr：结束日期，不限时未文案不限\n        // event.vs：是否对比\n        let dates = event.dates,\n            vs = event.vs;\n        this.updater.digest(&#123;\n            vs: vs,\n            start: dates.startStr,\n            end: dates.endStr\n        &#125;);\n    &#125;,\n&#125;);</pre></div></div>")}catch(e){var $="render view error:"+(e.message||e);throw u&&($+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+y),$+="\r\n\t"+(u?"translate to:":"expr:"),$+=g+"\r\n\tat file:mx-calendar/__test__/7.html"}return p},render:function(){this.updater.digest({vsenable:!0,vs:!0,start:_().subtract(1,"days").format("YYYY-MM-DD"),end:_().add(1,"days").format("YYYY-MM-DD"),min:_().subtract(12,"days").format("YYYY-MM-DD"),max:_().add(12,"days").format("YYYY-MM-DD")})},"changeInfo<change>":function(e){this.updater.get();var t=e.dates,a=e.vs;this.updater.digest({vs:a,start:t.startStr,end:t.endStr})}})});