define("mx-grid/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(t,r,i)=>{t("mx-copy/index"),t("__test__/hl");var g=t("magix"),l=t("__test__/example");t("$");g.applyStyle("_zs_gallery_mx-grid___test___index_","._zs_gallery_mx-grid___test___index_-grid1 {\n  background-color: var(--color-brand);\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid___test___index_-grid2 {\n  background-color: var(--color-brand);\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid___test___index_-grid3 {\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid___test___index_-grid4 {\n  background-color: var(--color-brand);\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid___test___index_-container {\n  padding: 16px;\n  background-color: var(--app-bg);\n}\n"),i.exports=l.extend({tmpl:function(t,r,i,g,l,e,_,d){if(i||(i=t),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(t){return"&"+a[t]+";"};l=function(t){return""+(null==t?"":t)},g=function(t){return l(t).replace(s,c)}}if(!e){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(t){return x[t]},m=/[!')(*]/g;e=function(t){return encodeURIComponent(l(t)).replace(m,n)}}if(!d){var o=/[\\'"]/g;d=function(t){return l(t).replace(o,"\\$&")}}var v,u,y,f="",p=t.viewId,h=t.text1;try{f+='<div mxa="_zs_gallerycr:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerycr:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10">justify（主轴对齐方式）</div><div class="mb10">1. left（默认值）：左对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid___test___index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">2. right：右对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-end;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid___test___index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">3. center：居中</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: center;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid___test___index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: space-between;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid___test___index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。</div><div style="display: flex;height: 60px;flex-direction: row;justify-content: space-around;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid___test___index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid___test___index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_gallerycr:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycr:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=42,u="=viewId",f+=(v="<%!$eu(viewId)%>",e(p)+'_text_1"><span mxa="_zs_gallerycr:b" class="_zs_gallery___test___layout_-desc-tip">'),y=44,u="!text1",f+=(v="<%!text1%>",l(h)+'</span><i mxs="_zs_gallerycr:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=47,u="=viewId",f+=(v="<%=viewId%>",g(p)+'_text_1">\n&lt;!-- 1. left（默认值）：左对齐 --&gt;\n&lt;mx-grid.row justify="left" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 2. right：右对齐 --&gt;\n&lt;mx-grid.row justify="right" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 3. center：居中 --&gt;\n&lt;mx-grid.row justify="center" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。 --&gt;\n&lt;mx-grid.row justify="space-between" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。 --&gt;\n&lt;mx-grid.row justify="space-around" height="60px" gutter="10px"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>')}catch(t){var w="render view error:"+(t.message||t);throw u&&(w+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+y),w+="\r\n\t"+(u?"translate to:":"expr:"),w+=v+"\r\n\tat file:mx-grid/__test__/3.html"}return f},render:function(){this.updater.digest()}})});