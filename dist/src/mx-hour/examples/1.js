define("mx-hour/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,i)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var s=e("magix"),a=e("examples/example"),r=s.Vframe;e("$");s.applyStyle("_zs_gallerya_","._zs_gallerygy{padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border)}._zs_gallerygz{width:760px}._zs_gallerygA{width:800px}"),i.exports=a.extend({tmpl:function(e,l,i,s,a,r,d,t){if(i||(i=e),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+n[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(c,_)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(g,v)}}if(!t){var m=/[\\'"]/g;t=function(e){return a(e).replace(m,"\\$&")}}d||(d=function(e,l,i,s){for(s=e[o];--s;)if(e[i=o+s]===l)return i;return e[i=o+e[o]++]=l,i});var o="",p="",y=e.selected,u=e.viewId,z=e.text1,f=e.text2;p+='<div mxv mxa="_zs_gallerycI:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycI:a" class="_zs_galleryj"><div mxs="_zs_gallerycI:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>极简模式（只区分工作日和双休日）</div><div>时间段btn快捷全选或反选</div><div>拖动连续选择</div><div>宽度随容器自适应，可配置提示信息</div></div></div><div mxa="_zs_gallerycI:b" class="mb20 clearfix"><div mxs="_zs_gallerycI:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="'+l+'get()">获取选中值</a></div><div mxa="_zs_gallerycI:c" class="fl">';for(var h=0,I=y.length;h<I;h++){var w=y[h];p+="<div>"+s(w.name)+"："+s(w.times)+"</div>"}return p+='</div></div><div mxv="selected" class="_zs_gallerygy _zs_gallerygz" id="'+s(u)+'_hour" mx-view="mx-hour/index?selected='+d(i,y)+'&tip=%E8%93%9D%E8%89%B2%E4%B8%BA%E5%B7%B2%E9%80%89%E6%8A%95%E6%94%BE%E6%97%B6%E6%AE%B5"></div></div><div mxa="_zs_gallerycI:d" class="clearfix"><div mxa="_zs_gallerycI:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycI:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallerycI:f" class="_zs_galleryn">'+a(z)+'</span><i mxs="_zs_gallerycI:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;div&gt;\n    &lt;a href="javascript:;" class="btn btn-brand"\n        mx-click="get()"&gt;获取选中值&lt;/a&gt;\n&lt;/div&gt;\n\n&lt;mx-hour id="&#123;&#123;=viewId&#125;&#125;_hour"\n    selected="&#123;&#123;@selected&#125;&#125;" \n    tip="蓝色为已选投放时段"/&gt;</pre></div><div mxa="_zs_gallerycI:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycI:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_2"><span mxa="_zs_gallerycI:h" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_gallerycI:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [&#123;\n                week: '12345',\n                times: [2, 3, 4]\n            &#125;, &#123;\n                week: '67',\n                times: [10, 11, 12]\n            &#125;]\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'() &#123;\n        let vf = Vframe.get(this.id + '_hour');\n        let selected = vf.invoke('val');\n        this.updater.digest(&#123;\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id,selected:[{week:"12345",name:"周一至周五",times:[2,3,4]},{week:"67",name:"周六至周日",times:[10,11,12]}]})},"get<click>":function(){var e=r.get(this.id+"_hour").invoke("val");this.updater.digest({selected:e})}})});