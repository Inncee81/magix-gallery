define("mx-dropdown/examples/17",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,t,r,s,i){if(a||(a=e),!t){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+x[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(d,c)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(p,_)}}if(!i){var o=/[\\'"]/g;i=function(e){return t(e).replace(o,"\\$&")}}s||(s=function(e,l,a,n){for(n=e[u];--n;)if(e[a=u+n]===l)return a;return e[a=u+e[u]++]=l,a});var u="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerya::_" class="_zs_galleryg"><div mxa="_zs_gallerya::a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/index?placement=top&list='+s(a,[{value:1,text:"向上1"},{value:2,text:"向上2"}])+'"></div></div><div mxa="_zs_gallerya::b" class="_zs_galleryk"><div mxs="_zs_gallerya::_" class="_zs_galleryi">向上展开</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_gallerya::c" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_gallerya::a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown class="w200" \n    placement="top"\n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'向上1\'\n    &#125;,&#123;\n        value: 2,\n        text: \'向上2\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});