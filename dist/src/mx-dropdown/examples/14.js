define("mx-dropdown/examples/14",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,r,s,i,t){if(a||(a=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(d,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(o,c)}}if(!t){var p=/[\\'"]/g;t=function(e){return r(e).replace(p,"\\$&")}}i||(i=function(e,l,a,n){for(n=e[g];--n;)if(e[a=g+n]===l)return a;return e[a=g+e[g]++]=l,a});var g="",u="",v=e.viewId,y=e.text1;return u+='<div mxa="_zs_gallerya{:_" class="_zs_galleryg"><div mxa="_zs_gallerya{:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&list='+i(a,[1,2,3])+'"></div></div><div mxa="_zs_gallerya{:b" class="_zs_galleryk"><div mxs="_zs_gallerya{:_" class="_zs_galleryi">选择为空时的提示文案定制</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerya{:c" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_gallerya{:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;mx-dropdown class="w200" \n    empty-text="请选择"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});