define("mx-indics/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,s,n,i,_){if(t||(t=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,u=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(v,u)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return d[e]},r=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(r,c)}}if(!_){var p=/[\\'"]/g;_=function(e){return s(e).replace(p,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[m];--a;)if(e[t=m+a]===l)return t;return e[t=m+e[m]++]=l,t});var m="",g="",y=e.viewId,f=e.text1,o=e.text2;return g+='<div mxa="_zs_gallerycE:_" class="_zs_galleryg"><div mxa="_zs_gallerycE:a" class="_zs_galleryj"><div mxa="_zs_gallerycE:b" class="clearfix mb20"><div mxa="_zs_gallerycE:c" class="_zs_galleryd"><div mxs="_zs_gallerycE:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 指标不需排序 + 无分组</div></div><div mx-view="mx-indics/index?fields='+i(t,[{value:1,text:"消耗",tip:"消耗提示文案"},{value:2,text:"展现量"},{value:3,text:"点击量"},{value:4,text:"点击率"},{value:5,text:"平均点击单价",tip:"平均点击单价提示文案"},{value:6,text:"点击转化率"},{value:7,text:"成交笔数"},{value:8,text:"千次展现成本"},{value:9,text:"投资回报率"},{value:10,text:"访问页面数"}])+"&defaults="+i(t,[1,2,3])+'"></div></div><div mxa="_zs_gallerycE:d" class="_zs_galleryd"><div mxs="_zs_gallerycE:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 指标不需排序 + 有分组</div></div><div mx-view="mx-indics/index?parents='+i(t,[{value:1,text:"组1"},{value:2,text:"组2"}])+"&fields="+i(t,[{value:1,text:"消耗",pValue:1,tip:"消耗提示文案"},{value:2,text:"展现量",pValue:1},{value:3,text:"点击量",pValue:1},{value:4,text:"点击率",pValue:1},{value:5,text:"平均点击单价",pValue:1,tip:"平均点击单价提示文案"},{value:6,text:"点击转化率",pValue:2},{value:7,text:"成交笔数",pValue:2},{value:8,text:"千次展现成本",pValue:2},{value:9,text:"投资回报率",pValue:2},{value:10,text:"访问页面数",pValue:2}])+"&defaults="+i(t,[1,2,3])+'"></div></div></div></div><div mxa="_zs_gallerycE:e" class="clearfix"><div mxa="_zs_gallerycE:f" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycE:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_gallerycE:g" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_gallerycE:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+"_text_1\">\n&lt;mx-indics \n    fields=\"&#123;&#123;@[&#123;\n        value: 1, text: '消耗', tip: '消耗提示文案'\n    &#125;, &#123;\n        value: 2, text: '展现量'\n    &#125;, &#123;\n        value: 3, text: '点击量'\n    &#125;, &#123;\n        value: 4, text: '点击率'\n    &#125;, &#123;\n        value: 5, text: '平均点击单价', tip: '平均点击单价提示文案'\n    &#125;, &#123;\n        value: 6, text: '点击转化率'\n    &#125;, &#123;\n        value: 7, text: '成交笔数'\n    &#125;, &#123;\n        value: 8, text: '千次展现成本'\n    &#125;, &#123;\n        value: 9, text: '投资回报率'\n    &#125;, &#123;\n        value: 10, text: '访问页面数'\n    &#125;]&#125;&#125;\" \n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"/&gt;\n            </pre></div><div mxa=\"_zs_gallerycE:h\" class=\"_zs_galleryk _zs_galleryd _zs_gallerye\"><div mxs=\"_zs_gallerycE:b\" class=\"_zs_galleryi\">HTML Code</div><div class=\"_zs_galleryl\" mx-success=\""+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_2"><span mxa="_zs_gallerycE:i" class="_zs_galleryn">'+s(o)+'</span><i mxs="_zs_gallerycE:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+"_text_2\">\n&lt;mx-indics \n    parents=\"&#123;&#123;@[&#123;\n        value: 1, text: '组1'\n    &#125;, &#123;\n        value: 2, text: '组2'\n    &#125;]&#125;&#125;\"\n    fields=\"&#123;&#123;@[&#123;\n        value: 1, text: '消耗', pValue: 1, tip: '消耗提示文案'\n    &#125;, &#123;\n        value: 2, text: '展现量', pValue: 1\n    &#125;, &#123;\n        value: 3, text: '点击量', pValue: 1\n    &#125;, &#123;\n        value: 4, text: '点击率', pValue: 1\n    &#125;, &#123;\n        value: 5, text: '平均点击单价', pValue: 1, tip: '平均点击单价提示文案'\n    &#125;, &#123;\n        value: 6, text: '点击转化率', pValue: 2\n    &#125;, &#123;\n        value: 7, text: '成交笔数', pValue: 2\n    &#125;, &#123;\n        value: 8, text: '千次展现成本', pValue: 2\n    &#125;, &#123;\n        value: 9, text: '投资回报率', pValue: 2\n    &#125;, &#123;\n        value: 10, text: '访问页面数', pValue: 2\n    &#125;]&#125;&#125;\" \n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"/&gt;\n            </pre></div></div></div>"},render:function(){this.updater.digest({})}})});