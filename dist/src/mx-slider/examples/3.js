define("mx-slider/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,n,s,r,d){if(a||(a=e),!n){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+t[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(x,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(p,c)}}if(!d){var u=/[\\'"]/g;d=function(e){return n(e).replace(u,"\\$&")}}var v="",g=e.viewId,o=e.text1;return v+='<div mxa="_zs_galleryd7:_" class="_zs_galleryg"><div mxs="_zs_galleryd7:_" class="_zs_galleryj"><div class="pt20 pb20"><div mx-view="mx-slider/index?max=200&min=100&value=120&needInput=true&disabled=true"></div></div></div><div mxa="_zs_galleryd7:a" class="_zs_galleryk"><div mxs="_zs_galleryd7:a" class="_zs_galleryi">禁止选择</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryd7:b" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_galleryd7:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(g)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="120"\n    need-input="true"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});