define("mx-editor/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var t=e("magix"),s=e("examples/example");e("$");t.applyStyle("_zs_galleryK","._zs_galleryeC{width:80%}"),n.exports=s.extend({tmpl:function(e,l,n,t,s,a,i,r){if(n||(n=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(c,x)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(o,m)}}if(!r){var g=/[\\'"]/g;r=function(e){return s(e).replace(g,"\\$&")}}i||(i=function(e,l,n,t){for(t=e[v];--t;)if(e[n=v+t]===l)return n;return e[n=v+e[v]++]=l,n});var v="",p="",y=e.content,u=e.tmpl,z=e.viewId,f=e.text1,h=e.text2;return p+='<div mxa="_zs_gallerybw:_" class="_zs_galleryg"><div mxa="_zs_gallerybw:a" class="_zs_galleryj"><div mxs="_zs_gallerybw:_" class="mb10 clearfix"><div class="fl lh22 color-9">以下示例：</div><div class="fl lh22">最多显示两行，超出换行</div></div><div mxa="_zs_gallerybw:b" class="mb10 clearfix"><div mxs="_zs_gallerybw:a" class="fl lh22 color-9">当前内容：</div><div mxa="_zs_gallerybw:c" class="fl lh22 _zs_galleryeC">'+t(y)+'</div></div><div mxa="_zs_gallerybw:d" class="mb20 clearfix"><div mxs="_zs_gallerybw:b" class="color-9 fl">实际显示：</div><div mxa="_zs_gallerybw:e" class="fl w140"><div mx-change="'+l+'change()" mx-view="mx-editor/index?tmpl='+a(u)+"&content="+a(y)+"&rules="+i(n,{required:!0})+'"></div></div></div></div><div mxa="_zs_gallerybw:f" class="_zs_galleryk"><div mxs="_zs_gallerybw:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_1"><span mxa="_zs_gallerybw:g" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_gallerybw:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(z)+'_text_1">\n&lt;div class="w140"&gt;\n    &lt;mx-editor\n        tmpl="&#123;&#123;=tmpl&#125;&#125;"\n        content="&#123;&#123;=content&#125;&#125;"\n        rules="&#123;&#123;@&#123;\n            required: true\n        &#125;&#125;&#125;"\n        mx-change="change()"&gt;&lt;/mx-editor&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerybw:h" class="_zs_galleryk"><div mxs="_zs_gallerybw:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_2"><span mxa="_zs_gallerybw:i" class="_zs_galleryn">'+s(h)+'</span><i mxs="_zs_gallerybw:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(z)+"_text_2\">\nlet Magix = require('magix');\nlet Base = require('examples/example');\nlet $ = require('$');\n\nmodule.exports = Base.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let content = '这是一条非常长非常长非常长的需要换行的数据';\n        this.setContent(content);\n    &#125;,\n    'change&lt;edit&gt;' (e) &#123;\n        // editText编辑后的文案\n        this.setContent(e.editText);\n    &#125;,\n    setContent(content)&#123;\n        let len = content.length,\n            max = 20;\n        this.updater.digest(&#123;\n            tmpl: (len &gt; max) ? (content.slice(0, max) + '...') : content,\n            content\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.setContent("这是一条非常长非常长非常长的需要换行的数据")},"change<change>":function(e){this.setContent(e.editText)},setContent:function(e){var l=e.length;this.updater.digest({tmpl:l>20?e.slice(0,20)+"...":e,content:e})}})});