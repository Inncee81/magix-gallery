define("mx-footer/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,r,s,n,x){if(a||(a=e),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+t[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(_,m)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return d[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(o,c)}}if(!x){var p=/[\\'"]/g;x=function(e){return r(e).replace(p,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryb}:_" class="_zs_galleryg"><div mxs="_zs_galleryb}:_" class="_zs_galleryj"><div mx-view="mx-footer/index"></div></div><div mxa="_zs_galleryb}:a" class="_zs_galleryk"><div mxs="_zs_galleryb}:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryb}:b" class="_zs_galleryn">'+r(u)+'</span><i mxs="_zs_galleryb}:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;mx-footer/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});