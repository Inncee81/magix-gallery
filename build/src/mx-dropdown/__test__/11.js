define("mx-dropdown/__test__/11",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,l,t,_,s,a,i,n){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},_=function(e){return s(e).replace(d,c)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(o,x)}}if(!n){var p=/[\\'"]/g;n=function(e){return s(e).replace(p,"\\$&")}}i||(i=function(e,l,t,_){for(_=e[u];--_;)if(e[t=u+_]===l)return t;return e[t=u+e[u]++]=l,t});var u="",g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_galleryaT:_" class="_zs_galleryh"><div mxa="_zs_galleryaT:a" class="_zs_galleryk"><div class="w200" mx-disabled mx-view="mx-dropdown/multiple?list='+i(t,[1,2,3])+'&selected=1"></div></div><div mxa="_zs_galleryaT:b" class="_zs_galleryl"><div mxs="_zs_galleryaT:_" class="_zs_galleryj">禁用单选框</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryaT:c" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_galleryaT:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    mx-disabled\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"\n    selected="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});