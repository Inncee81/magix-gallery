define("mx-loading/__test__/3",["magix","__test__/example","mx-loading/mask","$","mx-copy/index","__test__/hl"],(e,s,i)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),a=e("mx-loading/mask");e("$");i.exports=l.extend({tmpl:function(e,s,i,l,a,n,t,_){if(i||(i=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(c,d)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(g,o)}}if(!_){var m=/[\\'"]/g;_=function(e){return a(e).replace(m,"\\$&")}}var p="",v=e.viewId,u=e.text1,y=e.text2;return p+='<div mxa="_zs_gallerycJ:_" class="_zs_galleryg"><div mxs="_zs_gallerycJ:_" class="_zs_galleryj"><a href="javascript:;" class="link-brand" mx-click="'+s+'show()">全屏遮罩，2秒后自动关闭</a></div><div mxa="_zs_gallerycJ:a" class="_zs_galleryk"><div mxs="_zs_gallerycJ:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_gallerycJ:b" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show()"&gt;全屏遮罩，2秒后自动关闭&lt;/a&gt;</pre></div><div mxa="_zs_gallerycJ:c" class="_zs_galleryk"><div mxs="_zs_gallerycJ:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_gallerycJ:d" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+"_text_2\">\nlet Magix = require('magix');\nlet Loading = require('@../../mx-loading/mask');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Loading],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'show&lt;click&gt;'(e)&#123;\n        let that = this;\n        that.showLoading();\n\n        setTimeout(() =&gt; &#123;\n            that.hideLoading();\n        &#125;, 2000);\n    &#125;\n&#125;);</pre></div></div>"},mixins:[a],render:function(){this.updater.digest()},"show<click>":function(e){var s=this;s.showLoading(),setTimeout(function(){s.hideLoading()},2e3)}})});