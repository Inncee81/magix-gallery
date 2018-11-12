define("mx-calendar/__test__/6",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,s,a)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example"),t=e("moment");e("$");a.exports=n.extend({tmpl:function(e,s,a,n,t,r,l,d){if(a||(a=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(_,c)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return v[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(g,m)}}if(!d){var o=/[\\'"]/g;d=function(e){return t(e).replace(o,"\\$&")}}l||(l=function(e,s,a,n){for(n=e[x];--n;)if(e[a=x+n]===s)return a;return e[a=x+e[x]++]=s,a});var x="",y="",p=e.vs,f=e.start,h=e.end,u=e.vsenable,z=e.keys,k=e.viewId,b=e.text1,M=e.text2;return y+='<div mxv mxa="_zs_gallery#:_" class="_zs_galleryf"><div mxv mxa="_zs_gallery#:a" class="_zs_galleryh"><div mxs="_zs_gallery#:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>日历面板右对齐（结束日期）</div><div>自定义快捷日期，快捷日期会根据可选范围进行修正</div><div>可对比，关闭对比选择时间段</div><div>事件处理</div></div></div><div mxa="_zs_gallery#:b" class="mb20"><span mxs="_zs_gallery#:a" class="color-9">当前结果：</span>',y+=p?'<span mxa="_zs_gallery#:c" class="color-brand mr5">'+n(f)+'</span><span mxs="_zs_gallery#:b" class="mr5">对比</span><span mxa="_zs_gallery#:d" class="color-brand-vs">'+n(h)+"</span>":'<span mxa="_zs_gallery#:e" class="mr5">'+n(f)+'</span><span mxs="_zs_gallery#:c" class="mr5">至</span><span>'+n(h)+"</span>",y+='</div><div mxv mxa="_zs_gallery#:f" class="clearfix"><div mxv mxa="_zs_gallery#:g" class="fl mr10"><div mxv="keys" class="w220" mx-change="'+s+'changeInfo()" mx-view="mx-calendar/rangepicker?align=right&vsenable='+r(u)+"&vs="+r(p)+"&start="+r(f)+"&end="+r(h)+"&shortkeys="+l(a,z)+'"></div></div><div mxs="_zs_gallery#:d" class="fl"><a href="javascript:;" class="btn btn-brand" mx-click="'+s+'changeShortkeys()">改变快捷方式</a></div></div></div><div mxa="_zs_gallery#:h" class="_zs_galleryi"><div mxs="_zs_gallery#:e" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(k)+'_text_1"><span mxa="_zs_gallery#:i" class="_zs_galleryl">'+t(b)+'</span><i mxs="_zs_gallery#:f" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(k)+'_text_1">\n&lt;mx-calendar.rangepicker class="w220"\n    align="right"\n    vsenable="&#123;&#123;=vsenable&#125;&#125;"\n    vs="&#123;&#123;=vs&#125;&#125;"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    shortkeys="&#123;&#123;@keys&#125;&#125;"\n    mx-change="changeInfo()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="changeShortkeys()"&gt;改变快捷方式&lt;/a&gt;</pre></div><div mxa="_zs_gallery#:j" class="_zs_galleryi"><div mxs="_zs_gallery#:g" class="_zs_galleryg">JS Code</div><div class="_zs_galleryj" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(k)+'_text_2"><span mxa="_zs_gallery#:k" class="_zs_galleryl">'+t(M)+'</span><i mxs="_zs_gallery#:f" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(k)+"_text_2\">\nlet Magix = require('magix');\nlet Moment = require('moment');\nlet $ = require('$');\nlet Formater = 'YYYY-MM-DD';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            vsenable: true,\n            vs: true,\n            start: Moment().subtract(1, 'days').format(Formater),\n            end: Moment().add(1, 'days').format(Formater),\n            keys: [\n                'today',\n                'yesterday',\n                'preWeekMon',\n                'passed12',\n                'forever'\n            ]\n        &#125;);\n    &#125;,\n    'changeInfo&lt;change&gt;'(event) &#123;\n        let data = this.updater.get();\n        // event.dates.startStr：开始日期\n        // event.dates.endStr：结束日期，不限时未文案不限\n        // event.vs：是否对比\n        let dates = event.dates,\n            vs = event.vs;\n        this.updater.digest(&#123;\n            vs: vs,\n            start: dates.startStr,\n            end: dates.endStr\n        &#125;);\n    &#125;,\n    'changeShortkeys&lt;click&gt;' (event) &#123;\n        this.updater.digest(&#123;\n            keys: [\n                'today',\n                'yesterday',\n                'passed7'\n            ]\n        &#125;);\n    &#125;,\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({vsenable:!0,vs:!0,start:t().subtract(1,"days").format("YYYY-MM-DD"),end:t().add(1,"days").format("YYYY-MM-DD"),keys:["today","yesterday","preWeekMon","passed12","forever"]})},"changeInfo<change>":function(e){this.updater.get();var s=e.dates,a=e.vs;this.updater.digest({vs:a,start:s.startStr,end:s.endStr})},"changeShortkeys<click>":function(e){this.updater.digest({keys:["today","yesterday","passed7"]})}})});