define("mx-dialog/__test__/12",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("mx-dialog/index"),n=e("__test__/example"),s=e("$");a.exports=n.extend({tmpl:function(e,t,a,l,n,s,_,i){if(a||(a=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(d,c)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(m,g)}}if(!i){var o=/[\\'"]/g;i=function(e){return n(e).replace(o,"\\$&")}}var p="",u=e.viewId,v=e.text1,y=e.text2;return p+='<div mxa="_zs_galleryau:_" class="_zs_galleryg"><div mxa="_zs_galleryau:a" class="_zs_galleryj"><a href="javascript:;" class="btn btn-brand mr20" id="'+l(u)+'_test" mx-click="'+t+'open1()">当前节点下居中</a><a mxs="_zs_galleryau:_" href="javascript:;" class="btn btn-brand mr20" mx-click="'+t+'open2()">当前节点下居中 + 偏移</a></div><div mxa="_zs_galleryau:b" class="clearfix"><div mxa="_zs_galleryau:c" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryau:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_galleryau:d" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_galleryau:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand mr20"\n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    mx-click="open1()"&gt;当前节点下居中&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand mr20"\n    mx-click="open2()"&gt;当前节点下居中 + 偏移&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryau:e" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryau:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_2"><span mxa="_zs_galleryau:f" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryau:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'open1&lt;click&gt;'(event) &#123;\n        this.mxDialog('@./demo', &#123;&#125;, &#123;\n            target: `#$&#123;this.id&#125;_test` \n        &#125;);\n    &#125;,\n    'open2&lt;click&gt;'(event) &#123;\n        this.mxDialog('@./demo', &#123;&#125;, &#123;\n            target: $(event.target),\n            offset: &#123;\n                left: 100,\n                top: -20\n            &#125;\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[l],render:function(){this.updater.digest()},"open1<click>":function(e){this.mxDialog("mx-dialog/__test__/demo",{},{target:"#"+this.id+"_test"})},"open2<click>":function(e){this.mxDialog("mx-dialog/__test__/demo",{},{target:s(e.target),offset:{left:100,top:-20}})}})});