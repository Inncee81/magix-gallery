define("mx-dropdown/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,r,s,i,t){if(n||(n=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(d,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(o,c)}}if(!t){var p=/[\\'"]/g;t=function(e){return r(e).replace(p,"\\$&")}}i||(i=function(e,l,n,a){for(a=e[g];--a;)if(e[n=g+a]===l)return n;return e[n=g+e[g]++]=l,n});var g="",u="",v=e.viewId,y=e.text1;return u+='<div mxa="_zs_gallerybj:_" class="_zs_galleryg"><div mxa="_zs_gallerybj:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/index?list='+i(n,[1,2,3])+'"></div></div><div mxa="_zs_gallerybj:b" class="_zs_galleryk"><div mxs="_zs_gallerybj:_" class="_zs_galleryi">显示文案和前后端传递值一致</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerybj:c" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_gallerybj:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-dropdown class="w200" \n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});