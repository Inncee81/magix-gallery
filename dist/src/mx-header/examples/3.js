define("mx-header/examples/3",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,a,l)=>{e("mx-copy/index"),e("examples/hl");var n=e("magix"),s=e("examples/example");e("$");n.applyStyle("_zs_galleryY","._zs_gallerygj{height:1200px;background-color:var(--color-bg)}._zs_gallerygj ._zs_gallerygk{width:1000px;padding-top:220px;margin:auto;font-size:20px;text-align:center}._zs_gallerygl{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygl ._zs_gallerygk{height:800px}"),l.exports=s.extend({tmpl:function(e,a,l,n,s,r,t,i){if(l||(l=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,g=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(c,g)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(v,d)}}if(!i){var o=/[\\'"]/g;i=function(e){return s(e).replace(o,"\\$&")}}var p="",m=e.viewId,u=e.text1,y=e.text2;return p+='<div mxa="_zs_gallerycH:_" class="_zs_galleryg"><div mxs="_zs_gallerycH:_" class="_zs_galleryj"><div class="pt10 pb10"><a rel="noopener noreferrer" href="#!/header/white" class="link-brand" target="_blank">新页面打开完整示例，支持二级菜单</a></div></div><div mxa="_zs_gallerycH:a" class="clearfix"><div mxa="_zs_gallerycH:b" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycH:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(m)+'_text_1"><span mxa="_zs_gallerycH:c" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerycH:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(m)+'_text_1">\n&lt;mx-header \n    dark="false"\n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    logo="//img.alicdn.com/tps/TB1GLT.LFXXXXX2aXXXXXXXXXXX-500-79.png"\n    mx-navchange="change()"/&gt;\n            </pre></div><div mxa="_zs_gallerycH:d" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycH:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(m)+'_text_2"><span mxa="_zs_gallerycH:e" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerycH:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(m)+"_text_2\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@white.html',\n    render() &#123;\n        let navs = [&#123;\n            value: 1,\n            text: '首页'\n        &#125;, &#123;\n            value: 2,\n            text: '产品介绍',\n            subs: [&#123;\n                value: 21,\n                text: '标准推广'\n            &#125;, &#123;\n                value: 22,\n                text: '智能推广'\n            &#125;]\n        &#125;, &#123;\n            value: 3,\n            text: '学习咨询'\n        &#125;]\n\n        let map = &#123;&#125;;\n        navs.forEach(nav =&gt; &#123;\n            map[nav.value] = nav.text;\n            let subs = nav.subs || [];\n            subs.forEach(sub =&gt; &#123;\n                map[sub.value] = `$&#123;nav.text&#125;_$&#123;sub.text&#125;`;\n            &#125;)\n        &#125;)\n\n        this.updater.digest(&#123;\n            navs,\n            map,\n            cur: navs[0].value\n        &#125;);\n    &#125;,\n    'change&lt;navchange&gt;'(event) &#123;\n        // event.nav &#123;value: , text: &#125; 当前导航\n        this.updater.digest(&#123;\n            cur: event.nav.value\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id})}})});