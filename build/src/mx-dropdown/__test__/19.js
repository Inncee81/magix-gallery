define("mx-dropdown/__test__/19",["magix","__test__/example","$","../bd","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../bd"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");t.exports=a.extend({tmpl:function(e,n,t,a,s,l,r,_){if(t||(t=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(d,x)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},g=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(g,o)}}if(!_){var v=/[\\'"]/g;_=function(e){return s(e).replace(v,"\\$&")}}r||(r=function(e,n,t,a){for(a=e[m];--a;)if(e[t=m+a]===n)return t;return e[t=m+e[m]++]=n,t});var m="",u="",p=e.viewId,y=e.text1,z=e.text2;return u+='<div mxa="_zs_gallerya1:_" class="_zs_galleryh"><div mxa="_zs_gallerya1:a" class="_zs_galleryk"><div mxs="_zs_gallerya1:_" class="mb20"><span class="color-9">以下示例：</span>单选，支持搜索，搜索不区分大小写</div><div class="w200" mx-change="'+n+'change()" mx-view="mx-dropdown/bd?searchbox=true&selected=2&list='+r(t,[{value:1,text:"test"},{value:2,text:"TestABC"},{value:3,text:"Another"}])+'"></div></div><div mxa="_zs_gallerya1:b" class="_zs_galleryl"><div mxs="_zs_gallerya1:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(p)+'_text_1"><span mxa="_zs_gallerya1:c" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_gallerya1:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;mx-dropdown.bd class="w200" \n    searchbox="true"\n    selected="2"\n    list="&#123;&#123;@[&#123;\n        value:1,\n        text:\'test\'\n    &#125;,&#123;\n        value:2,\n        text:\'TestABC\'\n    &#125;,&#123;\n        value:3,\n        text:\'Another\'\n    &#125;]&#125;&#125;"\n    mx-change="change()"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div><div mxa="_zs_gallerya1:d" class="_zs_galleryl"><div mxs="_zs_gallerya1:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(p)+'_text_2"><span mxa="_zs_gallerya1:e" class="_zs_galleryo">'+s(z)+'</span><i mxs="_zs_gallerya1:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'change&lt;change&gt;'(event)&#123;\n        // event.value：string\n        // event.text：string\n        // event.values：array\n        // event.texts：array\n        // event.selected：string|array\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest()},"change<change>":function(e){}})});