define("mx-header/examples/1",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,s,r,i,t){if(a||(a=e),!s){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(_,x)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(m,g)}}if(!t){var v=/[\\'"]/g;t=function(e){return s(e).replace(v,"\\$&")}}var p="",o=e.viewId,u=e.text1,y=e.text2;return p+='<div mxa="_zs_gallerycD:_" class="_zs_galleryg"><div mxs="_zs_gallerycD:_" class="_zs_galleryj"><div class="pt10 pb10"><a rel="noopener noreferrer" href="#!/header/all" class="link-brand" target="_blank">新页面打开完整示例</a></div></div><div mxa="_zs_gallerycD:a" class="clearfix"><div mxa="_zs_gallerycD:b" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycD:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(o)+'_text_1"><span mxa="_zs_gallerycD:c" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerycD:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(o)+'_text_1">\n&lt;mx-header \n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    logo="//img.alicdn.com/tfs/TB1Z0ggLPTpK1RjSZKPXXa3UpXa-534-98.png"\n    mx-navchange="change()"/&gt;</pre></div><div mxa="_zs_gallerycD:d" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycD:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(o)+'_text_2"><span mxa="_zs_gallerycD:e" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerycD:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(o)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let navs = [&#123;\n            value: 1,\n            text: '营销中台'\n        &#125;, &#123;\n            value: 2,\n            text: '创意中台'\n        &#125;]\n        // 默认不选中任何一个\n        let cur = '';\n        this.updater.digest(&#123;\n            navs,\n            cur\n        &#125;);\n    &#125;,\n    'change&lt;navchange&gt;'(event) &#123;\n        // event.nav &#123;value: , text: &#125; 当前导航\n        let nav = event.nav;\n        this.updater.digest(&#123;\n            cur: nav.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest()}})});