define("mx-preview/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),r=e("__test__/example");e("$");i.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n"),t.exports=r.extend({tmpl:function(e,_,t,i,r,a,l,n){if(t||(t=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(s,m)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(c,x)}}if(!n){var h=/[\\'"]/g;n=function(e){return r(e).replace(h,"\\$&")}}var p,v,g,y="",u=e.viewId,w=e.text1;try{y+='<div mxa="_zs_gallerydG:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerydG:_" class="_zs_gallery___test___layout_-eg-content"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正，<span class="color-brand">预览width，height必配</span></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=iframe&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=iframe&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=iframe&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydG:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydG:a" class="_zs_gallery___test___layout_-eg-title">html 预览</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',g=41,v="=viewId",y+=(p="<%!$eu(viewId)%>",a(u)+'_text_1"><span mxa="_zs_gallerydG:b" class="_zs_gallery___test___layout_-desc-tip">'),g=43,v="!text1",y+=(p="<%!text1%>",r(w)+'</span><i mxs="_zs_gallerydG:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=46,v="=viewId",y+=(p="<%=viewId%>",i(u)+'_text_1">\n&lt;mx-preview class="demo"\n    type="iframe"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;mx-preview class="demo"\n    type="iframe"\n    url="//kb-render.alicdn.com/html/10167/2018/05/08/2ae9a14d-ba8eb686-14928142.html"\n    width="586"\n    height="325"\n    max-width="100"\n    max-height="100"/&gt;\n    \n&lt;mx-preview class="demo"\n    type="iframe"\n    url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="300"\n    height="250"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>')}catch(e){var f="render view error:"+(e.message||e);throw v&&(f+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+g),f+="\r\n\t"+(v?"translate to:":"expr:"),f+=p+"\r\n\tat file:mx-preview/__test__/3.html"}return y},render:function(){this.updater.digest()}})});