define("mx-copy/examples/1",["magix","examples/example","$","../index","examples/hl"],(e,s,a)=>{e("../index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");a.exports=l.extend({tmpl:function(e,s,a,l,t,n,i,r){if(a||(a=e),!t){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(d,x)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(g,m)}}if(!r){var o=/[\\'"]/g;r=function(e){return t(e).replace(o,"\\$&")}}var p="",v=e.viewId,y=e.success,u=e.text2,z=e.text3;return p+='<div mxv mxa="_zs_galleryaM:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryaM:a" class="_zs_galleryj"><div mxs="_zs_galleryaM:_" class="mb20"><span class="color-9">以下示例：</span>需要复制另外一个显示节点的内容，配置 copy-node 指向需要复制的节点</div><div mxv mxa="_zs_galleryaM:b" class="mb20 clearfix"><textarea class="fl" cols="30" rows="4" id="'+l(v)+'_text_1">Magix棒棒的！</textarea><div mxa="_zs_galleryaM:c" class="fl ml10"><div class="btn btn-brand" mx-success="'+s+'done2()" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1">复制</div>',y&&(p+='<div mxs="_zs_galleryaM:a" class="color-green mt10">复制成功</div>'),p+='</div></div></div><div mxa="_zs_galleryaM:d" class="_zs_galleryk"><div mxs="_zs_galleryaM:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryaM:e" class="_zs_galleryn">'+t(u)+'</span><i mxs="_zs_galleryaM:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(v)+'_text_2">\n&lt;div class="mb20"&gt;\n    &lt;mx-copy copy-node="&#123;&#123;=viewId&#125;&#125;_text_1" class="btn btn-brand"\n        mx-success="done()"&gt;复制&lt;/mx-copy&gt;\n    &#123;&#123;if success&#125;&#125;\n    &lt;span class="color-green ml20"&gt;复制成功&lt;/span&gt;\n    &#123;&#123;/if&#125;&#125;\n&lt;/div&gt;\n&lt;textarea cols="30" rows="4" id="&#123;&#123;=viewId&#125;&#125;_text_1"&gt;Magix棒棒的！&lt;/textarea&gt;</pre></div><div mxa="_zs_galleryaM:f" class="_zs_galleryk"><div mxs="_zs_galleryaM:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:3})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_3"><span mxa="_zs_galleryaM:g" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_galleryaM:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(v)+"_text_3\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    'done&lt;success&gt;'(e) &#123;\n        this.updater.digest(&#123;\n            success: true\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest()},"done2<success>":function(e){this.updater.digest({success:!0})}})});