define("mx-tabs/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,n,t,_,a,i,l,s){if(t||(t=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},_=function(e){return a(e).replace(x,d)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},u=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(u,c)}}if(!s){var v=/[\\'"]/g;s=function(e){return a(e).replace(v,"\\$&")}}l||(l=function(e,n,t,_){for(_=e[o];--_;)if(e[t=o+_]===n)return t;return e[t=o+e[o]++]=n,t});var o="",y="",f=e.viewId,g=e.text1;return y+='<div mxa="_zs_galleryef:_" class="_zs_galleryh"><div mxa="_zs_galleryef:a" class="_zs_galleryk"><div mx-view="mx-tabs/index?list='+l(t,[{id:1,name:"模块1"},{id:2,name:"模块2"}])+'&valueKey=id&textKey=name"></div></div><div mxa="_zs_galleryef:b" class="_zs_galleryl"><div mxs="_zs_galleryef:_" class="_zs_galleryj">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryef:c" class="_zs_galleryo">'+a(g)+'</span><i mxs="_zs_galleryef:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(f)+'_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@[&#123;\n        id: 1,\n        name: \'模块1\'\n    &#125;, &#123;\n        id: 2,\n        name: \'模块2\'\n    &#125;]&#125;&#125;" \n    value-key="id"\n    text-key="name"&gt;&lt;/mx-tabs&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});