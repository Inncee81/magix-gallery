define("mx-dropdown/examples/11",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,a)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,r,n,t){if(a||(a=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(m,x)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(p,_)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}n||(n=function(e,l,a,s){for(s=e[u];--s;)if(e[a=u+s]===l)return a;return e[a=u+e[u]++]=l,a});var u="",g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_gallerya[:_" class="_zs_galleryg"><div mxa="_zs_gallerya[:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/multiple?disabled=true&list='+n(a,[1,2,3])+'&selected=1"></div></div><div mxa="_zs_gallerya[:b" class="_zs_galleryk"><div mxs="_zs_gallerya[:_" class="_zs_galleryi">禁用单选框</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerya[:c" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_gallerya[:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    disabled="true"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"\n    selected="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});