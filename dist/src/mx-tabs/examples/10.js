define("mx-tabs/examples/10",["magix","examples/example","$","../box","mx-copy/index","examples/hl"],(e,l,a)=>{e("../box"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,t,n,i,x){if(a||(a=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,_=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(d,_)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(v,c)}}if(!x){var o=/[\\'"]/g;x=function(e){return t(e).replace(o,"\\$&")}}var A="",g=e.icon,b=e.viewId,u=e.text1,p=e.text2;return A+='<div mxa="_zs_galleryfb:_" class="_zs_galleryg"><div mxa="_zs_galleryfb:a" class="_zs_galleryj"><div mxs="_zs_galleryfb:_" class="mb30"><span class="color-9">打标支持：</span>代码片段或者纯文字，支持自定义背景颜色，默认品牌色，禁用状态下为灰色</div><div mxa="_zs_galleryfb:b" class="mb30"><div mx-view="mx-tabs/box?list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tag%3A%20%27'+n(g)+'%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxs="_zs_galleryfb:a" class="mb30"><div mx-view="mx-tabs/box?list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tag%3A%20%27New%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27%2330ab66%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxs="_zs_galleryfb:b" mx-view="mx-tabs/box?disabled=true&list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tag%3A%20%27New%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxa="_zs_galleryfb:c" class="_zs_galleryk"><div mxs="_zs_galleryfb:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(b)+'_text_1"><span mxa="_zs_galleryfb:d" class="_zs_galleryn">'+t(u)+'</span><i mxs="_zs_galleryfb:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(b)+"_text_1\">\n&lt;mx-tabs.box    \n    list=\"[&#123;\n        text: '模块1',\n        value: 1,\n        tag: '&#123;&#123;=icon&#125;&#125;'\n    &#125;,&#123;\n        text: '模块2',\n        value: 2\n    &#125;]\"/&gt;\n\n\n&lt;mx-tabs.box    \n    list=\"[&#123;\n        text: '模块1',\n        value: 1,\n        tag: 'New',\n        color: '#4d7fff'\n    &#125;,&#123;\n        text: '模块2',\n        value: 2\n    &#125;]\"/&gt;\n\n&lt;mx-tabs.box\n    disabled=\"true\"\n    list=\"[&#123;\n        text: '模块1',\n        value: 1,\n        tag: 'New'\n    &#125;,&#123;\n        text: '模块2',\n        value: 2\n    &#125;]\"/&gt;</pre></div><div mxa=\"_zs_galleryfb:e\" class=\"_zs_galleryk\"><div mxs=\"_zs_galleryfb:e\" class=\"_zs_galleryi\">JS Code</div><div class=\"_zs_galleryl\" mx-success=\""+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(b)+'_text_2"><span mxa="_zs_galleryfb:f" class="_zs_galleryn">'+t(p)+'</span><i mxs="_zs_galleryfb:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(b)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe601;&lt;/i&gt;'\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({icon:'<i class="mc-iconfont">&#xe601;</i>'})}})});