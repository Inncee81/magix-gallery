define("mx-effects/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,i)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");i.exports=l.extend({tmpl:function(e,t,i,l,s,n,_,a){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,c)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return v[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(x,m)}}if(!a){var o=/[\\'"]/g;a=function(e){return s(e).replace(o,"\\$&")}}var p="",g=e.viewId,y=e.text1;return p+='<div mxa="_zs_gallerybl:_" class="_zs_galleryg"><div mxs="_zs_gallerybl:_" class="_zs_galleryj"><div class="empty-area mb20"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>暂无内容</div></div></div><div content="自定义文案" class="empty-area"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>自定义文案</div></div></div></div><div mxa="_zs_gallerybl:a" class="_zs_galleryk"><div mxs="_zs_gallerybl:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_gallerybl:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerybl:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+'_text_1">\n&lt;mx-effects.empty/&gt;\n\n&lt;mx-effects.empty content="自定义文案"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});