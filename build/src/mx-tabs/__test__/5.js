define("mx-tabs/__test__/5",["magix","__test__/example","$","../box","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../box"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,n,t,_,a,i,s,l){if(t||(t=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},_=function(e){return a(e).replace(x,d)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(o,c)}}if(!l){var u=/[\\'"]/g;l=function(e){return a(e).replace(u,"\\$&")}}s||(s=function(e,n,t,_){for(_=e[v];--_;)if(e[t=v+_]===n)return t;return e[t=v+e[v]++]=n,t});var v="",p="",y=e.viewId,g=e.text1;return p+='<div mxa="_zs_galleryeH:_" class="_zs_galleryg"><div mxa="_zs_galleryeH:a" class="_zs_galleryj"><div mx-view="mx-tabs/box?list='+s(t,[{name:"模块1",id:1,tips:"提示信息"},{name:"模块2",id:2}])+'&valueKey=id&textKey=name"></div></div><div mxa="_zs_galleryeH:b" class="_zs_galleryk"><div mxs="_zs_galleryeH:_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryeH:c" class="_zs_galleryn">'+a(g)+'</span><i mxs="_zs_galleryeH:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(y)+'_text_1">\n&lt;mx-tabs.box\n    list="&#123;&#123;@[&#123;\n        name: \'模块1\',\n        id: 1,\n        tips: \'提示信息\'\n    &#125;,&#123;\n        name: \'模块2\',\n        id: 2\n    &#125;]&#125;&#125;"\n    value-key="id"\n    text-key="name"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});