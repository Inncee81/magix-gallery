define("mx-color/__test__/1",["magix","__test__/example","$","../picker","mx-copy/index","__test__/hl"],(e,l,a)=>{e("../picker"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,r,_,n,i){if(a||(a=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(t,o)}}if(!_){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},g=/[!')(*]/g;_=function(e){return encodeURIComponent(r(e)).replace(g,x)}}if(!i){var m=/[\\'"]/g;i=function(e){return r(e).replace(m,"\\$&")}}var p="",v=e.color,y=e.viewId,u=e.text1,z=e.text2;return p+='<div mxa="_zs_galleryak:_" class="_zs_galleryg"><div mxa="_zs_galleryak:a" class="_zs_galleryj"><div mxa="_zs_galleryak:b" class="mb20"><span mxa="_zs_galleryak:c" class="color-9">当前选中颜色：'+s(v)+'</span></div><div class="w200" mx-change="'+l+'changeColor()" mx-view="mx-color/picker?color='+_(v)+'"></div></div><div mxa="_zs_galleryak:d" class="_zs_galleryk"><div mxs="_zs_galleryak:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_1"><span mxa="_zs_galleryak:e" class="_zs_galleryn">'+r(u)+'</span><i mxs="_zs_galleryak:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(y)+'_text_1">\n&lt;mx-color.picker class="w200"\n    color="&#123;&#123;=color&#125;&#125;"\n    mx-change="changeColor()"/&gt;\n        </pre></div><div mxa="_zs_galleryak:f" class="_zs_galleryk"><div mxs="_zs_galleryak:b" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_2"><span mxa="_zs_galleryak:g" class="_zs_galleryn">'+r(z)+'</span><i mxs="_zs_galleryak:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            color: '#9a3c3c'\n        &#125;);\n    &#125;,\n    'changeColor&lt;change&gt;'(e)&#123;\n        this.updater.digest(&#123;\n            color: e.color\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({color:"#9a3c3c"})},"changeColor<change>":function(e){this.updater.digest({color:e.color})}})});