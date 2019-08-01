define("mx-collapse/index",["magix","$"],(e,l,i)=>{var n=e("magix"),a=e("$");n.applyStyle("_zs_gallery_mx-collapse_index_","._zs_gallery_mx-collapse_index_-collapse {\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow: hidden;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item {\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title {\n  cursor: pointer;\n  position: relative;\n  padding: 10px 24px;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-arrow > * {\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  margin-top: -10px;\n  transition: all var(--duration);\n  color: #999;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-text {\n  margin-left: 20px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content {\n  display: none;\n  border-top: 1px solid var(--color-border);\n  overflow: hidden;\n  transition: height var(--duration), opacity var(--duration);\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content ._zs_gallery_mx-collapse_index_-inner {\n  padding: 10px 24px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content ._zs_gallery_mx-collapse_index_-text {\n  line-height: 22px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item:last-child {\n  border-bottom: 0 none;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item._zs_gallery_mx-collapse_index_-item-disabled ._zs_gallery_mx-collapse_index_-title {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item._zs_gallery_mx-collapse_index_-item-expand ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-arrow > * {\n  transform: rotate(90deg);\n}\n"),i.exports=n.View.extend({tmpl:function(e,l,i,n,a,t,_,r){if(i||(i=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(o,d)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(c,p)}}if(!r){var m=/[\\'"]/g;r=function(e){return a(e).replace(m,"\\$&")}}_||(_=function(e,l,i,n){for(n=e[h];--n;)if(e[i=h+n]===l)return i;return e[i=h+e[h]++]=l,i});var g,y,f,h="",u="",v=e.list,z=e.viewId;try{u+='<div mxv mxa="_zs_galleryay:_" class="_zs_gallery_mx-collapse_index_-collapse">',f=2,y="each list as item index",g="<%for (var index = 0, $art_ciyojdtrd$art_c = list.length; index < $art_ciyojdtrd$art_c; index++) {    var item = list[index]%>";for(var b=0,w=v.length;b<w;b++){var $=v[b];u+='<div mxv class="_zs_gallery_mx-collapse_index_-item ',f=3,y="if item.expand",g="<%if (item.expand) {%>",$.expand&&(u+=" _zs_gallery_mx-collapse_index_-item-expand ",f=3,y="/if",g="<%}%>"),u+=" ",f=3,y="if item.disabled",g="<%if (item.disabled) {%>",$.disabled&&(u+=" _zs_gallery_mx-collapse_index_-item-disabled ",f=3,y="/if",g="<%}%>"),u+='"><div class="_zs_gallery_mx-collapse_index_-title" ',f=4,y="if !item.disabled",g="<%if (!item.disabled) {%>",$.disabled||(u+=' mx-click="'+l+"toggle({index: ",f=4,y="=index",u+=(g="<%=index%>",n(b)+'})" '),f=4,y="/if",g="<%}%>"),u+='><span mxa="_zs_galleryay:a" class="_zs_gallery_mx-collapse_index_-arrow">',f=5,y="!item.arrow",u+=(g="<%!item.arrow%>",a($.arrow)+'</span><span mxa="_zs_galleryay:b" class="_zs_gallery_mx-collapse_index_-text">'),f=6,y="=item.title",u+=(g="<%=item.title%>",n($.title)+"</span></div>"),f=8,y="if !item.disabled",g="<%if (!item.disabled) {%>",$.disabled||(u+='<div mxv class="_zs_gallery_mx-collapse_index_-content" id="',f=9,y="=viewId",u+=(g="<%=viewId%>",n(z)+"_content_"),f=9,y="=index",u+=(g="<%=index%>",n(b)+'" style="'),f=10,y="if item.height",g="<%if (item.height) {%>",$.height&&(u+=" \n                display: block; \n                ",f=12,y="if item.expand",g="<%if (item.expand) {%>",$.expand?(u+=" \n                    opacity: 1; height: ",f=13,y="=item.height",u+=(g="<%=item.height%>",n($.height)+"px; \n                "),f=14,y="else",g="<%}            else {%>"):(u+=" \n                    opacity: 0; height: 0; border-top: 0 none; \n                ",f=16,y="/if",g="<%}%>"),u+=" \n            ",f=17,y="/if",g="<%}%>"),u+='"><div mxv="list" class="_zs_gallery_mx-collapse_index_-inner" mx-view="',f=18,y="=item.view",u+=(g="<%=item.view%>",n($.view)+"?data="),f=18,y="@item",u+=(g="<%@item%>",_(i,$)+'"></div></div>'),f=20,y="/if",g="<%}%>"),u+="</div>",f=22,y="/each",g="<%}%>"}u+="</div>"}catch(e){var k="render view error:"+(e.message||e);throw y&&(k+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+f),k+="\r\n\t"+(y?"translate to:":"expr:"),k+=g+"\r\n\tat file:mx-collapse/index.html"}return u},init:function(e){var l=this;l["@{owner.node}"]=a("#"+l.id),l.updater.snapshot(),l.assign(e),l.owner.oncreated=function(){if(!l.$init){l.$init=1;var e=l.id,i=l.updater.get("list");i.forEach(function(l,i){var n=a("#"+e+"_content_"+i);l.height=n.outerHeight()}),l.updater.digest({list:i})}},l.ondestroy=function(){l.owner.off("created")}},assign:function(e){var l=this.updater.altered();return this.updater.set({viewId:this.id,onlyOne:e.onlyOne+""!="false",originList:e.list||[]}),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){this.$init=null;var e=this.updater.get("originList"),l=a.extend(!0,[],e),i=!1;if(l.forEach(function(e,l){e.arrow||(e.arrow='<span class="mc-iconfont" style="font-size: 14px;">&#xe602;</span>'),e.view||(e.view="mx-collapse/content"),e.expand=e.expand||!1,e.disabled&&(e.expand=!1),i=i||e.expand}),!i)for(var n=0;n<l.length;n++)if(!l[n].disabled){l[n].expand=!0;break}this.updater.digest({list:l}),i||this["@{fire}"]()},"@{fire}":function(){var e=this.updater.get("list");this["@{owner.node}"].trigger({type:"change",expands:e.map(function(e){return e.expand})})},"toggle<click>":function(e){var l=e.params.index,i=this.updater.get(),n=i.list,a=i.onlyOne;n.forEach(function(e,i){i==l?e.expand=!e.expand:a&&(e.expand=!1)}),this.updater.digest({list:n}),this["@{fire}"]()}})});