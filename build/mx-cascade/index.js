define("mx-cascade/index",["magix","mx-tree/util","../mx-medusa/util","../mx-util/monitor"],(e,n,a)=>{var i=e("magix"),t=(i.Vframe,e("mx-tree/util")),r=e("../mx-medusa/util"),l=e("../mx-util/monitor");i.applyStyle("_zs_gallery_mx-cascade_index_","._zs_gallery_mx-cascade_index_-cascade-list {\n  width: auto;\n  min-width: 0;\n  max-width: none;\n  white-space: nowrap;\n}\n._zs_gallery_mx-cascade_index_-group {\n  display: inline-block;\n  min-width: 100px;\n  height: calc(var(--input-small-height) * 6);\n  overflow-y: auto;\n  vertical-align: top;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-cascade_index_-group:first-child {\n  border-left: 0 none;\n}\n._zs_gallery_mx-cascade_index_-line {\n  position: relative;\n  height: var(--input-small-height);\n  padding-right: var(--input-small-height);\n  padding-left: 10px;\n  line-height: var(--input-small-height);\n  transition: background-color var(--duration), color var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-text {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-arrow {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 24px;\n  line-height: var(--input-small-height);\n  color: #999;\n  transform: rotate(-90deg);\n}\n._zs_gallery_mx-cascade_index_-line:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur:hover {\n  background-color: var(--color-brand-opacity);\n}\n"),a.exports=i.View.extend({tmpl:function(e,n,a,i,t,r,l,d){if(a||(a=e),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+s[e]+";"};t=function(e){return""+(null==e?"":e)},i=function(e){return t(e).replace(c,o)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(g,_)}}if(!d){var u=/[\\'"]/g;d=function(e){return t(e).replace(u,"\\$&")}}var h,m,p,f="",v=e.expand,y=e.disabled,w=e.name,b=e.selectedText,z=e.groups,I=e.viewId,K=e.textKey;try{if(f+='<div class="mx-trigger ',p=1,m="if expand",h="<%if (expand) {%>",v&&(f+=" mx-trigger-open ",p=1,m="/if",h="<%}%>"),f+='" ',p=2,m="if !disabled",h="<%if (!disabled) {%>",y||(f+=' mx-click="'+n+'@{show}()" ',p=2,m="/if",h="<%}%>"),f+='><span mxa="_zs_galleryai:_" class="mx-trigger-label">',p=3,m="if name",h="<%if (name) {%>",w&&(p=3,m="=name",f+=(h="<%=name%>",i(w)+"："),p=3,m="/if",h="<%}%>"),p=3,m="=selectedText",f+=(h="<%=selectedText%>",i(b)+'</span><span mxs="_zs_galleryai:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div>'),p=6,m="if !disabled",h="<%if (!disabled) {%>",!y){f+='<div class="mx-output mx-output-bottom ',p=7,m="if expand",h="<%if (expand) {%>",v&&(f+=" mx-output-open ",p=7,m="/if",h="<%}%>"),f+=' clearfix _zs_gallery_mx-cascade_index_-cascade-list">',p=8,m="each groups as list gIndex",h="<%for (var gIndex = 0, $art_cxmdjhoaj$art_c = groups.length; gIndex < $art_cxmdjhoaj$art_c; gIndex++) {        var list = groups[gIndex]%>";for(var $=0,k=z.length;$<k;$++){var T=z[$];f+='<div class="_zs_gallery_mx-cascade_index_-group" id="',p=9,m="=viewId",f+=(h="<%=viewId%>",i(I)+"_g_"),p=9,m="=gIndex",f+=(h="<%=gIndex%>",i($)+'">'),p=10,m="each list as item iIndex",h="<%for (var iIndex = 0, $art_cjqtuuft$art_c = list.length; iIndex < $art_cjqtuuft$art_c; iIndex++) {            var item = list[iIndex]%>";for(var j=0,V=T.length;j<V;j++){var E=T[j];f+='<div class="_zs_gallery_mx-cascade_index_-line ',p=11,m="if item.cur",h="<%if (item.cur) {%>",E.cur&&(f+=" _zs_gallery_mx-cascade_index_-cur ",p=11,m="/if",h="<%}%>"),f+='" mx-click="'+n+"@{select}({gIndex:",p=11,m="=gIndex",f+=(h="<%=gIndex%>",i($)+",iIndex:"),p=11,m="=iIndex",f+=(h="<%=iIndex%>",i(j)+'})"><span mxa="_zs_galleryai:a" class="_zs_gallery_mx-cascade_index_-line-text">'),p=12,m="=item[textKey]",f+=(h="<%=item[textKey]%>",i(E[K])+"</span>"),p=13,m="if (item.children && item.children.length)",h="<%if (item.children && item.children.length) {%>",E.children&&E.children.length&&(f+='<span mxs="_zs_galleryai:a" class="mc-iconfont _zs_gallery_mx-cascade_index_-line-arrow">&#xe692;</span>',p=15,m="/if",h="<%}%>"),f+="</div>",p=17,m="/each",h="<%}%>"}f+="</div>",p=19,m="/each",h="<%}%>"}f+="</div>",p=21,m="/if",h="<%}%>"}}catch(e){var q="render view error:"+(e.message||e);throw m&&(q+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+p),q+="\r\n\t"+(m?"translate to:":"expr:"),q+=h+"\r\n\tat file:mx-cascade/index.html"}return f},init:function(e){var n=this;n["@{extra}"]=e,l["@{setup}"](),n.on("destroy",function(){l["@{remove}"](n),l["@{teardown}"]()})},render:function(){var e=this,n=e["@{extra}"],a=n.valueKey||"value",i=n.textKey||"text",l=n.parentKey||"pValue",d=n.disabled+""=="true"||$("#"+e.id)[0].hasAttribute("mx-disabled"),s=t.listToTree(n.list,a,l),c=s.map,o=s.list;e.updater.set({viewId:e.id,disabled:d,placeholder:n.placeholder||r.choose,valueKey:a,textKey:i,parentKey:l,map:c,list:o,expand:!1});var x=n.selected||"",_=e["@{get}"](x);_.selectedText=_.selectedTexts.join("/"),_.selectedValue=x,e.updater.digest(_),e["@{owner.node}"]=$("#"+e.id),e["@{owner.node}"].val(x)},"@{get}":function(e){var n=this.updater,a=n.get("valueKey"),i=n.get("textKey"),t=n.get("parentKey"),r=n.get("placeholder"),l=n.get("map"),d=n.get("list"),s=[],c=[],o=[];if(e&&l[e]){var x=function(e){var n=l[e];if(s.unshift(n[i]),c.unshift(n[a]+""),n[t]){var r=l[n[t]].children;r.forEach(function(e){e.cur=!1}),n.cur=!0,o.unshift(r),x(n[t])}else d.forEach(function(e){e.cur=!1}),n.cur=!0,o.unshift(d)};x(e)}else s=[r],o=[d];return{groups:o,selectedTexts:s,selectedValues:c}},"@{inside}":function(e){return i.inside(e,this.id)},"@{hide}":function(e){this.updater.get("expand")&&(this.updater.digest({expand:!1}),l["@{remove}"](this))},"@{show}<click>":function(e){var n=this.updater,a=n.get("expand"),i=n.get("selectedValue");if(!a){var t=this["@{get}"](i);t.expand=!0,n.digest(t),l["@{add}"](this)}},"@{select}<click>":function(e){var n=this.updater,a=n.get("selectedValues"),i=n.get("valueKey"),t=e.params.gIndex,r=e.params.iIndex,l=n.get("groups"),d=l[t],s=d[r];if(s.children=s.children||[],s.children.length>0)d.forEach(function(e){e.cur=!1}),s.cur=!0,l=l.slice(0,t+1),s.children.forEach(function(e){e.cur=a.indexOf(e[i]+"")>-1}),l.push(s.children),n.digest({groups:l});else{var c=s[i],o=this["@{get}"](c);o.selectedValue=c,o.selectedText=o.selectedTexts.join("/"),n.digest(o);var x=$.Event("change",{item:s,selected:c});this["@{owner.node}"].val(c).trigger(x),this["@{hide}"]()}}})});