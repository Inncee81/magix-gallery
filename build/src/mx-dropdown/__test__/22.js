define("mx-dropdown/__test__/22",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,i)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");i.exports=n.extend({tmpl:function(e,l,i,n,s,a,t,_){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(d,c)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},u=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(u,o)}}if(!_){var x=/[\\'"]/g;_=function(e){return s(e).replace(x,"\\$&")}}t||(t=function(e,l,i,n){for(n=e[v];--n;)if(e[i=v+n]===l)return i;return e[i=v+e[v]++]=l,i});var v="",p="",g=e.viewId,f=e.text1;return p+='<div mxa="_zs_gallerya]:_" class="_zs_galleryg"><div mxa="_zs_gallerya]:a" class="_zs_galleryj"><div mxs="_zs_gallerya]:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl">要求连续选择 + 至少选择一个</div></div><div class="w280" mx-view="mx-dropdown/multiple?min=1&continuous=true&name=%E6%95%B0%E5%AD%97&list='+t(i,[1,2,3,4,5,6])+'"></div></div><div mxa="_zs_gallerya]:b" class="_zs_galleryk"><div mxs="_zs_gallerya]:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(g)+'_text_1"><span mxa="_zs_gallerya]:c" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_gallerya]:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w280"  \n    min="1"\n    continuous="true"\n    name="数字"\n    list="&#123;&#123;@[1,2,3,4,5,6]&#125;&#125;"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});