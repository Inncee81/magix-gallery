define("mx-taginput/index",["magix","$","../mx-medusa/util","../mx-util/monitor"],(e,t,i)=>{var n=e("magix"),a=e("$"),r=e("../mx-medusa/util"),l=e("../mx-util/monitor");n.applyStyle("_zs_gallery_mx-taginput_index_",'[mx-view*="mx-taginput/index"] {\n  --tag-left-padding: 10px;\n  --tag-gap: 2px;\n  --tag-height: calc(var(--input-height) - (var(--tag-gap) * 4) - 2px);\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt {\n  position: relative;\n  height: auto;\n  border-style: solid;\n  border-width: 1px;\n  border-color: var(--border-highlight);\n  border-radius: var(--border-radius);\n  padding-top: var(--tag-gap);\n  padding-bottom: var(--tag-gap);\n  padding-left: calc(var(--tag-left-padding) - 4px);\n  padding-right: calc(var(--tag-left-padding) - 4px);\n  cursor: text;\n  transition: border-color var(--duration);\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt:hover {\n  border-color: var(--border-highlight-hover);\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder,\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger,\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  height: var(--tag-height);\n  line-height: var(--tag-height);\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder {\n  position: absolute;\n  top: calc(var(--tag-gap) * 2);\n  left: var(--tag-left-padding);\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item,\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  float: left;\n  margin-top: var(--tag-gap);\n  margin-bottom: var(--tag-gap);\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  float: left;\n  position: relative;\n  max-width: 220px;\n  padding-right: 26px;\n  padding-left: 6px;\n  margin-right: calc(var(--tag-gap) * 2);\n  background-color: var(--color-bg-hover);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 20px;\n  line-height: var(--tag-height);\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: #ccc;\n  transition: color var(--duration);\n  border-left: 1px solid #fff;\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #999;\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallery_mx-taginput_index_-ipt,\n[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt {\n  cursor: not-allowed;\n  background-color: var(--color-bg);\n  border-color: var(--color-border);\n}\n[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallery_mx-taginput_index_-ipt:hover,\n[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt:hover {\n  border-color: var(--color-border);\n}\n[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallery_mx-taginput_index_-item,\n[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallery_mx-taginput_index_-item {\n  cursor: not-allowed;\n  color: #999;\n}\n[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover,\n[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #ccc;\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-tag-item {\n  margin: 2px 0;\n  padding: 0 10px;\n  cursor: pointer;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  white-space: nowrap;\n  word-break: break-all;\n}\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-tag-item:hover,\n[mx-view*="mx-taginput/index"] ._zs_gallery_mx-taginput_index_-tag-item._zs_gallery_mx-taginput_index_-item-hover {\n  background-color: var(--color-bg-hover);\n}\n');i.exports=n.View.extend({tmpl:function(e,t,i,n,a,r,l,d){if(i||(i=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(g,o)}}if(!r){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return u[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(p,x)}}if(!d){var _=/[\\'"]/g;d=function(e){return a(e).replace(_,"\\$&")}}l||(l=function(e,t,i,n){for(n=e[v];--n;)if(e[i=v+n]===t)return i;return e[i=v+e[v]++]=t,i});var m,c,h,v="",f="",y=e.viewId,w=e.items,b=e.placeholder,z=e.inputWidth,k=e.iv,T=e.disabled,$=e.suggestLeft,L=e.show,I=e.loading,C=e.suggest,K=e.emptyText;try{if(f+='<div mxv class="_zs_gallery_mx-taginput_index_-ipt unselectable clearfix" mx-click="'+t+'@{focus}()" id="ipt_',h=3,c="=viewId",f+=(m="<%=viewId%>",n(y)+'">'),h=5,c="if (!items.length)",m="<%if (!items.length) {%>",w.length||(f+='<span mxa="_zs_gallerye^:_" class="_zs_gallery_mx-taginput_index_-placeholder">',h=6,c="=placeholder",f+=(m="<%=placeholder%>",n(b)+"</span>"),h=7,c="/if",m="<%}%>"),f+=" ",h=9,c="if (items.length)",m="<%if (items.length) {%>",w.length){f+=" ",h=10,c="each items as one idx",m="<%for (var idx = 0, $art_cmktvmhcwz$art_c = items.length; idx < $art_cmktvmhcwz$art_c; idx++) {        var one = items[idx]%>";for(var W=0,P=w.length;W<P;W++){var j=w[W];f+='<span mxa="_zs_gallerye^:a" class="_zs_gallery_mx-taginput_index_-item clearfix" mx-contextmenu="'+t+'prevent()">',h=12,c="=one.text",f+=(m="<%=one.text%>",n(j.text)+'<i class="mc-iconfont _zs_gallery_mx-taginput_index_-item-delete" mx-click="'+t+"@{delete}({idx:"),h=13,c="=idx",f+=(m="<%=idx%>",n(W)+'})">&#xe603;</i></span>'),h=15,c="/each",m="<%}%>"}f+=" ",h=16,c="/if",m="<%}%>"}if(f+='<input class="_zs_gallery_mx-taginput_index_-trigger" autocomplete="off" style="width: ',h=19,c="=inputWidth",f+=(m="<%=inputWidth%>",n(z)+'px;" value="'),h=20,c="=iv",f+=(m="<%=iv%>",n(k)+'" mx-keydown="'+t+'@{check}()" mx-keyup="'+t+'@{check}()" mx-paste="'+t+'@{check}()" mx-focusin="'+t+'@{check}()" mx-focusout="'+t+'@{stop}()" mx-change="'+t+'@{stop}()" '),h=27,c="if disabled",m="<%if (disabled) {%>",T&&(f+=' disabled="true" ',h=27,c="/if",m="<%}%>"),f+="/>",h=29,c="if (!disabled)",m="<%if (!disabled) {%>",!T){if(f+='<div id="ul_',h=30,c="=viewId",f+=(m="<%=viewId%>",n(y)+'" style="left: '),h=31,c="=suggestLeft",f+=(m="<%=suggestLeft%>",n($)+'px;" class="mx-output mx-output-bottom '),h=32,c="if show",m="<%if (show) {%>",L&&(f+=" mx-output-open ",h=32,c="/if",m="<%}%>"),f+='" mx-mouseout="'+t+'@{out}()" mx-contextmenu="'+t+'@{prevent}()"><ul mxa="_zs_gallerye^:b" class="mx-output-list">',h=36,c="if loading",m="<%if (loading) {%>",I)f+='<li mxs="_zs_gallerye^:_"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>',h=40,c="else",m="<%}    else {%>";else{if(f+=" ",h=41,c="if (suggest && suggest.length)",m="<%if (suggest && suggest.length) {%>",C&&C.length){f+=" ",h=42,c="each suggest as item idx",m="<%for (var idx = 0, $art_cfxmhvpm$art_c = suggest.length; idx < $art_cfxmhvpm$art_c; idx++) {                var item = suggest[idx]%>";W=0;for(var A=C.length;W<A;W++){var O=C[W];f+='<li class="_zs_gallery_mx-taginput_index_-tag-item" mx-click="'+t+"@{add}({item:'",h=44,c="@item",f+=(m="<%@item%>",l(i,O)+'\'})" data-idx="'),h=45,c="=idx",f+=(m="<%=idx%>",n(W)+'" id="sg_'),h=46,c="=viewId",f+=(m="<%=viewId%>",n(y)+"_"),h=46,c="=idx",f+=(m="<%=idx%>",n(W)+'">'),h=47,c="!item.text",f+=(m="<%!item.text%>",a(O.text)+"</li>"),h=49,c="/each",m="<%}%>"}f+=" ",h=50,c="else",m="<%}        else {%>"}else f+='<li mxa="_zs_gallerye^:c" class="text-center color-9 pt20 pb20">',h=51,c="=emptyText",f+=(m="<%=emptyText%>",n(K)+"</li>"),h=52,c="/if",m="<%}%>";f+=" ",h=53,c="/if",m="<%}%>"}f+="</ul></div>",h=56,c="/if",m="<%}%>"}f+="</div>"}catch(e){var M="render view error:"+(e.message||e);throw c&&(M+="\r\n\tsrc art:{{"+c+"}}\r\n\tat line:"+h),M+="\r\n\t"+(c?"translate to:":"expr:"),M+=m+"\r\n\tat file:mx-taginput/index.html"}return f},init:function(e){var t=this,i=e.textKey||"text",d=e.valueKey||"value",s=0|e.max;t["@{dynamic.list}"]=e.dynamicList+""=="true",t.updater.set({textKey:i,valueKey:d});var g=t.rebuildList(e.list||[]),o=e.selected||"";o=(o+"").split(",");var u=[],x=e.items||[];if(x&&x.length)u=x;else{var p=n.toMap(g,"value");o.forEach(function(e){p[e]&&u.push(p[e])})}t["@{data.list}"]=t["@{dynamic.list}"]?[]:g,t["@{owner.node}"]=a("#"+t.id);var _=e.disabled+""=="true"||a("#"+t.id)[0].hasAttribute("mx-disabled");t.updater.set({viewId:t.id,disabled:_,placeholder:e.placeholder||r.choose,emptyText:r["empty.text"],inputWidth:10,items:u,max:s}),l["@{setup}"](),t.on("destroy",function(){l["@{remove}"](t),l["@{teardown}"]()})},rebuildList:function(e){var t=this.updater,i=t.get("textKey"),n=t.get("valueKey");return e="object"==typeof e[0]?e.map(function(e){return{text:e[i],value:e[n]}}):e.map(function(e){return{text:e,value:e}})},render:function(){this.updater.digest(),this["@{ui.update}"](),this["@{val}"]()},"@{val}":function(){var e=this.updater.get("items").map(function(e){return e.value});this["@{owner.node}"].val(e.join(","))},"@{ui.update}":function(){var e=this;e["@{ui.index}"]=-1;var t=e["@{data.list}"],i=e.updater.get("items"),n=e["@{last.value}"]||"",r=[];if(e["@{dynamic.list}"])r=t;else for(var l=i.map(function(e){return e.value+""}),d=0,s=void 0;d<t.length;d++)s=t[d],l.indexOf(s.value+"")<0&&((s.value+"").indexOf(n)>-1||(s.text+"").indexOf(n)>-1)&&r.push(s);var g=e["@{owner.node}"].find("input");g.width(10);var o=g.position(),u=a("#ipt_"+e.id).width()-o.left;e.updater.digest({iv:n,suggest:r,inputWidth:u>=10?u:10,suggestLeft:o.left-6})},"@{focus}<click>":function(){this.updater.get("disabled")||this["@{owner.node}"].find("input").focus()},"@{prevent}<contextmenu>":function(e){e.preventDefault()},"@{stop}<change,focusout>":function(e){e.stopPropagation()},"@{check}<focusin,paste,keyup,keydown>":function(e){e.stopPropagation();var t=this;t["@{suggest.delay.timer}"]&&clearTimeout(t["@{suggest.delay.timer}"]);var i=e.eventTarget.value;if(t["@{last.value}"]!==i){t["@{last.value}"]=i;var n=t["@{owner.node}"].find("._zs_gallery_mx-taginput_index_-placeholder");i?n.hide():n.show()}if("keydown"!=e.type){var a=t.updater.get("suggest");if(40==e.keyCode)t["@{normal}"](),t["@{ui.index}"]++,t["@{ui.index}"]>=a.length&&(t["@{ui.index}"]=0),t["@{highlight}"]();else if(38==e.keyCode)t["@{normal}"](),t["@{ui.index}"]--,t["@{ui.index}"]<0&&(t["@{ui.index}"]=a.length-1),t["@{highlight}"]();else if(13==e.keyCode){if(t["@{ui.index}"]>-1&&t["@{ui.index}"]<a.length){var r=a[t["@{ui.index}"]];t["@{normal}"](),t["@{add}"](r)}}else t["@{suggest.delay.timer}"]=setTimeout(t.wrapAsync(function(){var e=t.updater.get("items"),i=t.updater.get("max");(i<=0||e.length<i)&&(t["@{ui.update}"](),t["@{show}"]())}),250)}if(!i&&"keydown"==e.type&&8==e.keyCode){var l=t.updater.get("items").length-1;l>-1&&(t["@{delete}<click>"]({params:{idx:l}}),t["@{dynamic.list}"]&&t["@{hide}"]())}},"@{fire.event}":function(){for(var e=this.updater,t=[],i=e.get("items"),n=e.get("valueKey"),a=0,r=void 0;a<i.length;a++)r=i[a],t.push(n?r[n]:r);t=t.join(","),this["@{owner.node}"].val(t).trigger({type:"change",selected:t,items:i})},"@{add}<click>":function(e){e.stopPropagation&&e.stopPropagation(),this["@{add}"](e.params.item)},"@{add}":function(e){var t=this,i=t.updater;(a=i.get("items")).push(e),i.digest({items:a}),t["@{last.value}"]="",t["@{val}"](),t["@{ui.update}"](),t["@{fire.event}"]();var n=t.updater.get("max"),a=t.updater.get("items");n>0&&a.length>=n?t["@{hide}"]():(t["@{ui.focus}"](),t["@{dynamic.list}"]&&t["@{hide}"]())},"@{delete}<click>":function(e){var t=this,i=t.updater.get();if(!i.disabled){var n=i.items,a=e.params.idx;n.splice(a,1),t.updater.digest({items:n}),t["@{last.value}"]="",t["@{val}"](),t["@{ui.update}"](),t["@{fire.event}"](),t["@{ui.focus}"]()}},"@{ui.focus}":function(){var e=this;if(e["@{dynamic.list}"])e["@{owner.node}"].find("input").focus();else{var t=e.updater.get("suggest");t&&t.length?e["@{owner.node}"].find("input").focus():e["@{hide}"]()}},"@{normal}":function(){a("#sg_"+this.id+"_"+this["@{ui.index}"]).removeClass("_zs_gallery_mx-taginput_index_-item-hover")},"@{highlight}":function(){var e=this,t=a("#sg_"+e.id+"_"+e["@{ui.index}"]);if(t.addClass("_zs_gallery_mx-taginput_index_-item-hover"),t.length){e["@{temp.ignore}"]=1;var i=t.outerHeight(),n=(e["@{ui.index}"]+1)*i,r=a("#ul_"+e.id),l=r.height(),d=r.prop("scrollTop"),s=Math.ceil(l/i);n<d+i?r.prop("scrollTop",n-i):n>d+l&&r.prop("scrollTop",(e["@{ui.index}"]+2-s)*i)}},"@{hide}":function(){var e=this;e["@{ui.show}"]&&(e["@{ui.show}"]=!1,e.updater.digest({show:!1}),l["@{remove}"](e),e["@{dynamic.list}"]&&(e["@{data.list}"]=[]))},"@{show}":function(){var e=this;e["@{owner.node}"].trigger({type:"show",keyword:e["@{last.value}"]});var t=e.updater.get("suggest");!e["@{ui.show}"]&&t&&t.length&&(e["@{ui.show}"]=!0,e.updater.digest({show:!0}),l["@{add}"](e))},"@{inside}":function(e){return n.inside(e,this.id)},"@{out}<mouseout>":function(e){if(!n.inside(e.relateTarget,e.eventTarget)){this["@{normal}"](),this["@{ui.index}"]=-1}},showLoading:function(){var e=this;e["@{ui.show}"]||(e["@{ui.show}"]=!0,e.updater.digest({show:!0,loading:!0,iv:e["@{last.value}"]}),l["@{add}"](e))},hideLoading:function(){this.updater.digest({loading:!1})},update:function(e){e=this.rebuildList(e),this["@{data.list}"]=e,this.updater.digest({iv:this["@{last.value}"],suggest:e})}})});