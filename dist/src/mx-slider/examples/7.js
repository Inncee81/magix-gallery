define("mx-slider/examples/7",["magix","examples/example","$","../range","mx-copy/index","examples/hl"],(e,l,a)=>{e("../range"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,n,r,d){if(a||(a=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(t,m)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(g,c)}}if(!d){var p=/[\\'"]/g;d=function(e){return i(e).replace(p,"\\$&")}}var v="",u=e.viewId,o=e.text1;return v+='<div mxa="_zs_galleryd|:_" class="_zs_galleryg"><div mxs="_zs_galleryd|:_" class="_zs_galleryj"><div class="pt20 pb20"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&disabled=true"></div></div></div><div mxa="_zs_galleryd|:a" class="_zs_galleryk"><div mxs="_zs_galleryd|:a" class="_zs_galleryi">禁止选择</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_galleryd|:b" class="_zs_galleryn">'+i(o)+'</span><i mxs="_zs_galleryd|:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});