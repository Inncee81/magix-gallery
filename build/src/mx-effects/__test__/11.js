define("mx-effects/__test__/11",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../star"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");s.exports=i.extend({tmpl:function(e,t,s,i,n,a,l,_){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(m,d)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return c[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(x,v)}}if(!_){var f=/[\\'"]/g;_=function(e){return n(e).replace(f,"\\$&")}}var u="",g=e.viewId,o=e.text1;return u+='<div mxa="_zs_gallerybw:_" class="_zs_galleryg"><div mxs="_zs_gallerybw:_" class="_zs_galleryj"><div class="mb10"><div mx-view="mx-effects/star?num=-1"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=1.4"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=2.5"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=4"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=5.5"></div></div></div><div mxa="_zs_gallerybw:a" class="_zs_galleryk"><div mxs="_zs_gallerybw:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(g)+'_text_1"><span mxa="_zs_gallerybw:b" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_gallerybw:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(g)+'_text_1">\n&lt;!-- 默认使用品牌色高亮 --&gt;\n&lt;mx-effects.star num="-1"/&gt;\n\n&lt;mx-effects.star num="1.4"/&gt;\n\n&lt;mx-effects.star num="2.5"/&gt;\n\n&lt;mx-effects.star num="4"/&gt;\n\n&lt;mx-effects.star num="5.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest({test:!0})}})});