define("mx-tabs/examples/11",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,t,n,x){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(c,m)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return _[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(g,d)}}if(!x){var o=/[\\'"]/g;x=function(e){return a(e).replace(o,"\\$&")}}n||(n=function(e,l,s,i){for(i=e[v];--i;)if(e[s=v+i]===l)return s;return e[s=v+e[v]++]=l,s});var v="",p="",f=e.list,u=e.viewId,y=e.text1,z=e.text2;return p+='<div mxv mxa="_zs_galleryfc:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfc:a" class="_zs_galleryj"><div mxv="list" mx-view="mx-tabs/index?list='+n(s,f)+'"></div></div><div mxa="_zs_galleryfc:b" class="_zs_galleryk"><div mxs="_zs_galleryfc:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_1"><span mxa="_zs_galleryfc:c" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryfc:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+'_text_1">\n&lt;mx-tabs list="&#123;&#123;@list&#125;&#125;" &gt;&lt;/mx-tabs&gt;\n        </pre></div><div mxa="_zs_galleryfc:d" class="_zs_galleryk"><div mxs="_zs_galleryfc:b" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_2"><span mxa="_zs_galleryfc:e" class="_zs_galleryn">'+a(z)+'</span><i mxs="_zs_galleryfc:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+"_text_2\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [&#123;\n                value: 1,\n                text: '&lt;i class=\"mc-iconfont mr5\"&gt;&#38;&#35;xe60e;&lt;/i&gt;模块1'\n            &#125;, &#123;\n                value: 2,\n                text: '&lt;i class=\"mc-iconfont mr5\"&gt;&#38;&#35;xe604;&lt;/i&gt;模块2'\n            &#125;]\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({list:[{value:1,text:'<i class="mc-iconfont mr5">&#xe60e;</i>模块1'},{value:2,text:'<i class="mc-iconfont mr5">&#xe604;</i>模块2'}]})}})});