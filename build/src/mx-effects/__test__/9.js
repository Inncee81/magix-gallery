define("mx-effects/__test__/9",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,n,s)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,n,s,t,a,l,r,m){if(s||(s=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(_,d)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},g=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(g,x)}}if(!m){var u=/[\\'"]/g;m=function(e){return a(e).replace(u,"\\$&")}}var o="",v=e.num1,p=e.num2,f=e.num3,y=e.viewId,z=e.text1,b=e.text2;return o+='<div mxa="_zs_gallerya~:_" class="_zs_galleryh"><div mxa="_zs_gallerya~:a" class="_zs_galleryk"><div mxs="_zs_gallerya~:_" class="pl40 mb20"><a href="javascript:;" mx-click="'+n+'add()" class="btn btn-brand">进度 +10</a></div><div mxa="_zs_gallerya~:b" class="ml40 mt20"><div mx-view="mx-effects/progress?num='+l(v)+'&color=%23ffb400"></div></div><div mxa="_zs_gallerya~:c" class="ml40 mt20"><div mx-view="mx-effects/progress?num='+l(p)+'&textPlacement=right&color=rgb%2881%2C%20163%2C%200%29"></div></div><div mxa="_zs_gallerya~:d" class="ml40 mt20 mb40"><div mx-view="mx-effects/progress?num='+l(f)+'&textPlacement=bottom&color=rgba%2877%2C%20127%2C%20255%2C%200.3%29"></div></div></div><div mxa="_zs_gallerya~:e" class="_zs_galleryl"><div mxs="_zs_gallerya~:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_1"><span mxa="_zs_gallerya~:f" class="_zs_galleryo">'+a(z)+'</span><i mxs="_zs_gallerya~:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_1">\n&lt;mx-effects.progress\n    num="&#123;&#123;=num1&#125;&#125;" \n    color="#ffb400"/&gt;\n\n&lt;mx-effects.progress\n    num="&#123;&#123;=num2&#125;&#125;" \n    text-placement="right"\n    color="rgb(81, 163, 0)"/&gt;\n\n&lt;mx-effects.progress\n    num="&#123;&#123;=num3&#125;&#125;" \n    text-placement="bottom"\n    color="rgba(77, 127, 255, 0.3)"/&gt;</pre></div><div mxa="_zs_gallerya~:g" class="_zs_galleryl"><div mxs="_zs_gallerya~:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_2"><span mxa="_zs_gallerya~:h" class="_zs_galleryo">'+a(b)+'</span><i mxs="_zs_gallerya~:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            num1: 20,\n            num2: 40.3,\n            num3: 60.89\n        &#125;);\n    &#125;,\n    'add&lt;click&gt;'(e)&#123;\n        let data = this.updater.get();\n        this.updater.digest(&#123;\n            num1: data.num1 + 10,\n            num2: data.num2 + 10,\n            num3: data.num3 + 10\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({num1:20,num2:40.3,num3:60.89})},"add<click>":function(e){var n=this.updater.get();this.updater.digest({num1:n.num1+10,num2:n.num2+10,num3:n.num3+10})}})});