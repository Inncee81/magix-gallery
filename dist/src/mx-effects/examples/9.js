define("mx-effects/examples/9",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,s,l)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,s,l,a,n,r,i,t){if(l||(l=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(d,x)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(g,c)}}if(!t){var u=/[\\'"]/g;t=function(e){return n(e).replace(u,"\\$&")}}var p="",o=e.num1,v=e.viewId,y=e.text1,z=e.text2;return p+='<div mxa="_zs_galleryb^:_" class="_zs_galleryg"><div mxa="_zs_galleryb^:a" class="_zs_galleryj"><div mxa="_zs_galleryb^:b" class="mb40"><a mxs="_zs_galleryb^:_" href="javascript:;" mx-click="'+s+'add()" class="btn btn-brand mr10">进度 +10</a><div mx-view="mx-effects/progress?num='+r(o)+'"></div></div></div><div mxa="_zs_galleryb^:c" class="_zs_galleryk"><div mxs="_zs_galleryb^:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_galleryb^:d" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryb^:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-effects.progress\n    num="&#123;&#123;=num1&#125;&#125;" /&gt;</pre></div><div mxa="_zs_galleryb^:e" class="_zs_galleryk"><div mxs="_zs_galleryb^:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_2"><span mxa="_zs_galleryb^:f" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryb^:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            num1: 20\n        &#125;);\n    &#125;,\n    'add&lt;click&gt;'(e)&#123;\n        let data = this.updater.get();\n        this.updater.digest(&#123;\n            num1: data.num1 + 10\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({num1:20,num2:40.3,num3:60.89})},"add<click>":function(e){var s=this.updater.get();this.updater.digest({num1:s.num1+10,num2:s.num2+10,num3:s.num3+10})}})});