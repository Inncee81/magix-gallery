define("mx-color/__test__/1",["magix","__test__/example","$","../picker","mx-copy/index","__test__/hl"],(e,l,a)=>{e("../picker"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");a.exports=_.extend({tmpl:function(e,l,a,_,r,s,n,i){if(a||(a=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},_=function(e){return r(e).replace(t,o)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(g,x)}}if(!i){var m=/[\\'"]/g;i=function(e){return r(e).replace(m,"\\$&")}}var p="",y=e.color,v=e.viewId,z=e.text1,u=e.text2;return p+='<div mxa="_zs_galleryaj:_" class="_zs_galleryh"><div mxa="_zs_galleryaj:a" class="_zs_galleryk"><div mxa="_zs_galleryaj:b" class="mb20"><span mxa="_zs_galleryaj:c" class="color-9">当前选中颜色：'+_(y)+'</span></div><div mx-change="'+l+'changeColor()" mx-view="mx-color/picker?color='+s(y)+'"></div></div><div mxa="_zs_galleryaj:d" class="clearfix"><div mxa="_zs_galleryaj:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryaj:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryaj:f" class="_zs_galleryo">'+r(z)+'</span><i mxs="_zs_galleryaj:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;mx-color.picker\n    color="&#123;&#123;=color&#125;&#125;"\n    mx-change="changeColor()"/&gt;\n            </pre></div><div mxa="_zs_galleryaj:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryaj:b" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_2"><span mxa="_zs_galleryaj:h" class="_zs_galleryo">'+r(u)+'</span><i mxs="_zs_galleryaj:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            color: '#9a3c3c'\n        &#125;);\n    &#125;,\n    'changeColor&lt;change&gt;'(e)&#123;\n        this.updater.digest(&#123;\n            color: e.color\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({color:"#9a3c3c"})},"changeColor<change>":function(e){this.updater.digest({color:e.color})}})});