define("mx-tabs/__test__/7",["magix","__test__/example","$","../box","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../box"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,t,l,n,_,s,a,i){if(l||(l=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(x,o)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return c[e]},u=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(u,d)}}if(!i){var v=/[\\'"]/g;i=function(e){return _(e).replace(v,"\\$&")}}a||(a=function(e,t,l,n){for(n=e[m];--n;)if(e[l=m+n]===t)return l;return e[l=m+e[m]++]=t,l});var m="",y="",p=e.viewId,g=e.text1;return y+='<div mxa="_zs_galleryey:_" class="_zs_galleryg"><div mxa="_zs_galleryey:a" class="_zs_galleryj"><div mx-view="mx-tabs/box?mode=hollow&list='+a(l,[{text:"模块1",value:1,tips:"提示信息"},{text:"模块2",value:2},{text:"模块3",value:3}])+'"></div></div><div mxa="_zs_galleryey:b" class="_zs_galleryk"><div mxs="_zs_galleryey:_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_galleryey:c" class="_zs_galleryn">'+_(g)+'</span><i mxs="_zs_galleryey:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(p)+"_text_1\">\n&lt;mx-tabs.box\n    mode=\"hollow\"\n    list=\"&#123;&#123;@[&#123;\n        text: '模块1',\n        value: 1,\n        tips: '提示信息'\n    &#125;,&#123;\n        text: '模块2',\n        value: 2\n    &#125;,&#123;\n        text: '模块3',\n        value: 3\n    &#125;]&#125;&#125;\" /&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});