define("mx-dialog/examples/6",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var i=e("mx-dialog/index"),s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,i,s,n,t,r){if(a||(a=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(x,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(o,m)}}if(!r){var g=/[\\'"]/g;r=function(e){return s(e).replace(g,"\\$&")}}var p="",v=e.viewId,y=e.text3,z=e.text1,u=e.text2;return p+='<div mxa="_zs_galleryaT:_" class="_zs_galleryg"><div mxs="_zs_galleryaT:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">展示优先级：</span>外部自定义属性 > 浮层内属性 > 默认属性</div><div><a href="javascript:;" mx-click="'+l+'open1()" class="btn btn-brand mr20">使用浮层内配置的属性</a><a href="javascript:;" mx-click="'+l+'open2()" class="btn btn-brand">自定义属性</a></div></div><div mxa="_zs_galleryaT:a" class="clearfix"><div mxa="_zs_galleryaT:b" class="_zs_galleryk _zs_galleryd _zs_galleryf"><div mxs="_zs_galleryaT:a" class="_zs_galleryi">浮层本身写法</div><div class="_zs_galleryl" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_3"><span mxa="_zs_galleryaT:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryaT:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_3">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@inner.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'cancel&lt;click&gt;\'(event) &#123;\n        event.preventDefault();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;, &#123;\n    dialogOptions: &#123;\n        top: 0,\n        width: 800\n    &#125;\n&#125;);\n            </pre></div><div mxa="_zs_galleryaT:d" class="_zs_galleryd"><div mxa="_zs_galleryaT:e" class="_zs_galleryk"><div mxs="_zs_galleryaT:c" class="_zs_galleryi">使用浮层内配置的属性</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryaT:f" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_galleryaT:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n\'open&lt;click&gt;\'(e) &#123;\n    this.mxDialog(\'@./inner\');\n&#125;\n                </pre></div><div mxa="_zs_galleryaT:g" class="_zs_galleryk"><div mxs="_zs_galleryaT:d" class="_zs_galleryi">自定义属性</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryaT:h" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryaT:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+"_text_2\">\n'open&lt;click&gt;'(e) &#123;\n    this.mxDialog('@./inner', &#123;&#125;, &#123;\n        top: 100,\n        width: 400\n    &#125;);\n&#125;\n                </pre></div></div></div></div>"},mixins:[i],render:function(){this.updater.digest()},"open1<click>":function(e){this.mxDialog("mx-dialog/examples/inner")},"open2<click>":function(e){this.mxDialog("mx-dialog/examples/inner",{},{top:100,width:400})}})});