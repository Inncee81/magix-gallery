define("mx-loading/examples/3",["magix","examples/example","mx-loading/mask","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),i=e("mx-loading/mask");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,n,t,r){if(a||(a=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(x,d)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(o,_)}}if(!r){var g=/[\\'"]/g;r=function(e){return i(e).replace(g,"\\$&")}}var p="",v=e.viewId,u=e.text1,y=e.text2;return p+='<div mxa="_zs_galleryc`:_" class="_zs_galleryg"><div mxs="_zs_galleryc`:_" class="_zs_galleryj"><a href="javascript:;" class="link-brand" mx-click="'+l+'show()">全屏遮罩，2秒后自动关闭</a></div><div mxa="_zs_galleryc`:a" class="_zs_galleryk"><div mxs="_zs_galleryc`:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryc`:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryc`:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show()"&gt;全屏遮罩，2秒后自动关闭&lt;/a&gt;</pre></div><div mxa="_zs_galleryc`:c" class="_zs_galleryk"><div mxs="_zs_galleryc`:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryc`:d" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryc`:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+"_text_2\">\nlet Magix = require('magix');\nlet Loading = require('@../../mx-loading/mask');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Loading],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'show&lt;click&gt;'(e)&#123;\n        let that = this;\n        that.showLoading();\n\n        setTimeout(() =&gt; &#123;\n            that.hideLoading();\n        &#125;, 2000);\n    &#125;\n&#125;);</pre></div></div>"},mixins:[i],render:function(){this.updater.digest()},"show<click>":function(e){var l=this;l.showLoading(),setTimeout(function(){l.hideLoading()},2e3)}})});