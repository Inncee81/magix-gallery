define("mx-pagination/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");t.exports=n.extend({tmpl:function(e,i,t,n,a,s,l,_){if(t||(t=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(x,c)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(a(e)).replace(d,m)}}if(!_){var g=/[\\'"]/g;_=function(e){return a(e).replace(g,"\\$&")}}var p="",f=e.viewId,v=e.text1;return p+='<div mxa="_zs_galleryc9:_" class="_zs_galleryg"><div mxs="_zs_galleryc9:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-pagination/index?simplify=true&total=100&size=30&offset=30"></div><div mx-view="mx-pagination/index?simplify=true&total=100&size=30&page=3&offset=30"></div></div><div mxa="_zs_galleryc9:a" class="_zs_galleryk"><div mxs="_zs_galleryc9:a" class="_zs_galleryi">优先级 page &gt; offset</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryc9:b" class="_zs_galleryn">'+a(v)+'</span><i mxs="_zs_galleryc9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(f)+'_text_1">\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="30" \n    offset="30"/&gt;\n\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="30" \n    page="3"\n    offset="30"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});