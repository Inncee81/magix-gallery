define("mx-dropdown/examples/19",["magix","examples/example","$","../bd","mx-copy/index","examples/hl"],(e,a,n)=>{e("../bd"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");n.exports=l.extend({tmpl:function(e,a,n,l,s,t,r,i){if(n||(n=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,c)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(g,m)}}if(!i){var o=/[\\'"]/g;i=function(e){return s(e).replace(o,"\\$&")}}r||(r=function(e,a,n,l){for(l=e[v];--l;)if(e[n=v+l]===a)return n;return e[n=v+e[v]++]=a,n});var v="",p="",u=e.viewId,y=e.text1,z=e.text2;return p+='<div mxa="_zs_gallerya}:_" class="_zs_galleryg"><div mxa="_zs_gallerya}:a" class="_zs_galleryj"><div mxs="_zs_gallerya}:_" class="mb20"><span class="color-9">以下示例：</span>单选，支持搜索，搜索不区分大小写</div><div class="w200" mx-change="'+a+'change()" mx-view="mx-dropdown/bd?searchbox=true&selected=2&list='+r(n,[{value:1,text:"test"},{value:2,text:"TestABC"},{value:3,text:"Another"}])+'"></div></div><div mxa="_zs_gallerya}:b" class="_zs_galleryk"><div mxs="_zs_gallerya}:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_1"><span mxa="_zs_gallerya}:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerya}:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+'_text_1">\n&lt;mx-dropdown.bd class="w200" \n    searchbox="true"\n    selected="2"\n    list="&#123;&#123;@[&#123;\n        value:1,\n        text:\'test\'\n    &#125;,&#123;\n        value:2,\n        text:\'TestABC\'\n    &#125;,&#123;\n        value:3,\n        text:\'Another\'\n    &#125;]&#125;&#125;"\n    mx-change="change()"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div><div mxa="_zs_gallerya}:d" class="_zs_galleryk"><div mxs="_zs_gallerya}:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_2"><span mxa="_zs_gallerya}:e" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_gallerya}:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'change&lt;change&gt;'(event)&#123;\n        // event.value：string\n        // event.text：string\n        // event.values：array\n        // event.texts：array\n        // event.selected：string|array\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest()},"change<change>":function(e){}})});