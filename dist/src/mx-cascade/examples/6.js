define("mx-cascade/examples/6",["magix","examples/example","$","../card","mx-copy/index","examples/hl"],(e,a,l)=>{e("../card"),e("mx-copy/index"),e("examples/hl");e("magix").Vframe;var t=e("examples/example");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,n,i,s,u){if(l||(l=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(x,c)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return p[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(d,r)}}if(!u){var g=/[\\'"]/g;u=function(e){return n(e).replace(g,"\\$&")}}s||(s=function(e,a,l,t){for(t=e[v];--t;)if(e[l=v+t]===a)return l;return e[l=v+e[v]++]=a,l});var v="",_="",o=e.items,V=e.selected,f=e.list,y=e.viewId,X=e.text1,z=e.text2;return _+='<div mxv mxa="_zs_galleryaq:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryaq:a" class="_zs_galleryj"><div mxa="_zs_galleryaq:b" class="mb20 clearfix"><div mxs="_zs_galleryaq:_" class="fl color-9">当前选中：</div><div mxa="_zs_galleryaq:c" class="fl">'+n(o)+'</div></div><div mxv="list" mx-change="'+a+'select()" mx-view="mx-cascade/card?headerTitle=%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB&headerTip=%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF&selected='+i(V)+"&list="+s(l,f)+'"></div></div><div mxa="_zs_galleryaq:d" class="clearfix"><div mxa="_zs_galleryaq:e" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryaq:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryaq:f" class="_zs_galleryn">'+n(X)+'</span><i mxs="_zs_galleryaq:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(y)+'_text_1">\n&lt;div class="mb20"&gt;当前选中：&#123;&#123;!items&#125;&#125;&lt;/div&gt;\n&lt;mx-cascade.card \n    header-title="精选分类"\n    header-tip="提示信息"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;" \n    mx-change="select()"/&gt;\n            </pre></div><div mxa="_zs_galleryaq:g" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryaq:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_2"><span mxa="_zs_galleryaq:h" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryaq:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(y)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 11,\n            pValue: '',\n            text: '直通车',\n            img: '//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png',\n            tip: '关键词搜索推广营销工具'\n        &#125;, &#123;\n            value: 12,\n            pValue: '',\n            text: '超级推荐',\n            img: '//img.alicdn.com/tfs/TB1a3dUkeL2gK0jSZFmXXc7iXXa-92-92.png',\n            tip: '关键词搜索推广营销工具'\n        &#125;, &#123;\n            value: 13,\n            pValue: '',\n            text: '智钻',\n            img: '//img.alicdn.com/tfs/TB1hYNTki_1gK0jSZFqXXcpaXXa-92-92.png',\n            tip: '关键词搜索推广营销工具'\n        &#125;, &#123;\n            value: 14,\n            pValue: '',\n            text: '淘宝客',\n            img: '//img.alicdn.com/tfs/TB1JbtSkmf2gK0jSZFPXXXsopXa-92-92.png',\n            tip: '关键词搜索推广营销工具'\n        &#125;, &#123;\n            value: 111,\n            pValue: 11,\n            text: '新手入门'\n        &#125;, &#123;\n            value: 112,\n            pValue: 11,\n            text: '提升流量'\n        &#125;, &#123;\n            value: 113,\n            pValue: 11,\n            text: '提升转化'\n        &#125;, &#123;\n            value: 114,\n            pValue: 11,\n            text: '提升店铺成交'\n        &#125;, &#123;\n            value: 115,\n            pValue: 11,\n            text: '推广规则'\n        &#125;, &#123;\n            value: 1151,\n            pValue: 115,\n            text: '标准推广'\n        &#125;, &#123;\n            value: 1152,\n            pValue: 115,\n            text: '智能推广'\n        &#125;, &#123;\n            value: 121,\n            pValue: 12,\n            text: '新手入门'\n        &#125;, &#123;\n            value: 122,\n            pValue: 12,\n            text: '提升流量'\n        &#125;, &#123;\n            value: 123,\n            pValue: 12,\n            text: '提升转化'\n        &#125;, &#123;\n            value: 124,\n            pValue: 12,\n            text: '提升店铺成交'\n        &#125;, &#123;\n            value: 131,\n            pValue: 13,\n            text: '产品新功能'\n        &#125;, &#123;\n            value: 132,\n            pValue: 13,\n            text: '数据分析'\n        &#125;, &#123;\n            value: 133,\n            pValue: 13,\n            text: '其他'\n        &#125;]\n\n        this.updater.digest(&#123;\n            list,\n            selected: '',\n            items: ''\n        &#125;);\n    &#125;,\n    'select&lt;change&gt;'(event)&#123;\n        // 选中的叶子节点数据\n        // event.selected：value值\n        // event.item：当前选中叶子节点完整对象\n        // event.items：当前选中项完整的父子关系，数组顺序为父子关系\n        let items = event.items;\n        this.updater.digest(&#123;\n            selected: event.selected,\n            items: items.map(item =&gt; &#123;\n                return `$&#123;item.text&#125;（$&#123;item.value&#125;）`;\n            &#125;).join('=&gt; ')\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({list:[{value:11,pValue:"",text:"直通车",img:"//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png",tip:"关键词搜索推广营销工具"},{value:12,pValue:"",text:"超级推荐",img:"//img.alicdn.com/tfs/TB1a3dUkeL2gK0jSZFmXXc7iXXa-92-92.png",tip:"关键词搜索推广营销工具"},{value:13,pValue:"",text:"智钻",img:"//img.alicdn.com/tfs/TB1hYNTki_1gK0jSZFqXXcpaXXa-92-92.png",tip:"关键词搜索推广营销工具"},{value:14,pValue:"",text:"淘宝客",img:"//img.alicdn.com/tfs/TB1JbtSkmf2gK0jSZFPXXXsopXa-92-92.png",tip:"关键词搜索推广营销工具"},{value:111,pValue:11,text:"新手入门"},{value:112,pValue:11,text:"提升流量"},{value:113,pValue:11,text:"提升转化"},{value:114,pValue:11,text:"提升店铺成交"},{value:115,pValue:11,text:"推广规则"},{value:1151,pValue:115,text:"标准推广"},{value:1152,pValue:115,text:"智能推广"},{value:121,pValue:12,text:"新手入门"},{value:122,pValue:12,text:"提升流量"},{value:123,pValue:12,text:"提升转化"},{value:124,pValue:12,text:"提升店铺成交"},{value:131,pValue:13,text:"产品新功能"},{value:132,pValue:13,text:"数据分析"},{value:133,pValue:13,text:"其他"}],selected:"",items:""})},"select<change>":function(e){var a=e.items;this.updater.digest({selected:e.selected,items:a.map(function(e){return e.text+"（"+e.value+"）"}).join("=&gt; ")})}})});