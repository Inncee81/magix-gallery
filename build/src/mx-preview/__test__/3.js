define("mx-preview/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var r=e("magix"),l=e("__test__/example");e("$");r.applyStyle("_zs_galleryar","._zs_galleryiU{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiV{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),a.exports=l.extend({tmpl:function(e,i,a,r,l,t,n,d){if(a||(a=e),!l){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,_=function(e){return"&"+m[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(s,_)}}if(!t){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(l(e)).replace(x,c)}}if(!d){var h=/[\\'"]/g;d=function(e){return l(e).replace(h,"\\$&")}}var g="",v=e.viewId,p=e.text1;return g+='<div mxa="_zs_gallerydj:_" class="_zs_galleryg"><div mxs="_zs_gallerydj:_" class="_zs_galleryj"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正，<span class="color-brand">预览width，height必配</span></div><div class="_zs_galleryiU" mx-view="mx-preview/index?format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryiU" mx-view="mx-preview/index?format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryiU" mx-view="mx-preview/index?format=10&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydj:a" class="_zs_galleryk"><div mxs="_zs_gallerydj:a" class="_zs_galleryi">html 预览</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerydj:b" class="_zs_galleryn">'+l(p)+'</span><i mxs="_zs_gallerydj:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(v)+'_text_1">\n&lt;mx-preview class="demo"\n    format="10"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;mx-preview class="demo"\n    format="10"\n    url="//kb-render.alicdn.com/html/10167/2018/05/08/2ae9a14d-ba8eb686-14928142.html"\n    width="586"\n    height="325"\n    max-width="100"\n    max-height="100"/&gt;\n    \n&lt;mx-preview class="demo"\n    format="10"\n    url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="300"\n    height="250"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});