define("mx-grid/__test__/2",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(_,t,r)=>{_("mx-copy/index"),_("__test__/hl");var e=_("magix"),l=_("__test__/example");_("$");e.applyStyle("_zs_gallery_mx-grid___test___index_","._zs_gallery_mx-grid___test___index_-grid1 {\n  background-color: var(--color-brand);\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid___test___index_-grid2 {\n  background-color: var(--color-brand);\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid___test___index_-grid3 {\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid___test___index_-grid4 {\n  background-color: var(--color-brand);\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid___test___index_-container {\n  padding: 16px;\n  background-color: var(--app-bg);\n}\n"),r.exports=l.extend({tmpl:function(_,t,r,e,l,i,a,n){if(r||(r=_),!l){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,s=function(_){return"&"+g[_]+";"};l=function(_){return""+(null==_?"":_)},e=function(_){return l(_).replace(d,s)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(_){return c[_]},o=/[!')(*]/g;i=function(_){return encodeURIComponent(l(_)).replace(o,x)}}if(!n){var m=/[\\'"]/g;n=function(_){return l(_).replace(m,"\\$&")}}var v,y,p,u="",f=_.viewId,z=_.text1;try{u+='<div mxa="_zs_gallerycn:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerycn:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10">某一个固定宽度，最右侧固定为100px，剩余部分自适应</div><div style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_gallery_mx-grid___test___index_-grid1" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div flex="1" class="_zs_gallery_mx-grid___test___index_-grid2" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid3" style="flex: 0 0 100px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_gallerycn:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycn:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',p=12,y="=viewId",u+=(v="<%!$eu(viewId)%>",i(f)+'_text_1"><span mxa="_zs_gallerycn:b" class="_zs_gallery___test___layout_-desc-tip">'),p=14,y="!text1",u+=(v="<%!text1%>",l(z)+'</span><i mxs="_zs_gallerycn:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=17,y="=viewId",u+=(v="<%=viewId%>",e(f)+'_text_1">\n&lt;!-- 某一个固定宽度 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="100px" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>')}catch(_){var h="render view error:"+(_.message||_);throw y&&(h+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+p),h+="\r\n\t"+(y?"translate to:":"expr:"),h+=v+"\r\n\tat file:mx-grid/__test__/2.html"}return u},render:function(){this.updater.digest()}})});