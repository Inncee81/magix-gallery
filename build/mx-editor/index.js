define("mx-editor/index",["magix","mx-form/index","mx-form/validator"],(e,t,i)=>{var n=e("magix"),r=e("mx-form/index"),o=e("mx-form/validator");n.applyStyle("_zs_gallery_mx-editor_index_","._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-input {\n  display: none;\n}\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-content {\n  display: inline-block;\n  word-break: break-all;\n}\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-content ._zs_gallery_mx-editor_index_-editor-oper {\n  opacity: 0;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  color: #ccc;\n  cursor: pointer;\n}\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-content:hover ._zs_gallery_mx-editor_index_-editor-oper {\n  opacity: 1;\n}\n._zs_gallery_mx-editor_index_-editor._zs_gallery_mx-editor_index_-editor-on ._zs_gallery_mx-editor_index_-editor-input {\n  display: inline-block;\n}\n._zs_gallery_mx-editor_index_-editor._zs_gallery_mx-editor_index_-editor-on ._zs_gallery_mx-editor_index_-editor-content {\n  display: none;\n}\n");i.exports=n.View.extend({tmpl:function(e,t,i,n,r,o,d,_){if(i||(i=e),!r){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,s=function(e){return"&"+l[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(a,s)}}if(!o){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},c=/[!')(*]/g;o=function(e){return encodeURIComponent(r(e)).replace(c,u)}}if(!_){var m=/[\\'"]/g;_=function(e){return r(e).replace(m,"\\$&")}}d||(d=function(e,t,i,n){for(n=e[y];--n;)if(e[i=y+n]===t)return i;return e[i=y+e[y]++]=t,i});var p,g,f,y="",h="",v=e.editing,z=e.small,w=e.width,k=e.viewId,$=e.content,b=e.rules,I=e.dis;try{h+='<div mxv class="_zs_gallery_mx-editor_index_-editor ',f=1,g="if editing",p="<%if (editing) {%>",v&&(h+=" _zs_gallery_mx-editor_index_-editor-on ",f=1,g="/if",p="<%}%>"),h+='"><input mxe="'+t+'_0" mxc="[',f=7,g=":content&rules",h+="{p:'content',f:'"+(p="<%@ rules%>",d(i,b))+'\'}]" class="input ',f=3,g="if small",p="<%if (small) {%>",z&&(h+=" input-small ",f=3,g="/if",p="<%}%>"),h+=' _zs_gallery_mx-editor_index_-editor-input" style="width: ',f=4,g="=width",h+=(p="<%=width%>",n(w)+'px;" id="'),f=5,g="=viewId",h+=(p="<%=viewId%>",n(k)+'_input" value="'),f=6,g="=content",h+=(p="<%=content%>",n($)+'" mx-keyup="'+t+'@{out}()" mx-focusout="'+t+'@{out}()"/><div mxa="_zs_gallerybu:_" class="_zs_gallery_mx-editor_index_-editor-content">'),f=11,g="!dis",h+=(p="<%!dis%>",r(I)+'<i mxs="_zs_gallerybu:_" class="mc-iconfont operations _zs_gallery_mx-editor_index_-editor-oper" mx-click="'+t+'@{show}()">&#xe698;</i></div></div>')}catch(e){var V="render view error:"+(e.message||e);throw g&&(V+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+f),V+="\r\n\t"+(g?"translate to:":"expr:"),V+=p+"\r\n\tat file:mx-editor/index.html"}return h},mixins:[r,o],init:function(e){var t=this;t.updater.snapshot(),t.assign(e),t.on("destroy",function(){clearTimeout(t["@{out.timer}"])})},assign:function(e){var t=this.updater.altered(),i=e.rules||{},n=e.content,r=/^true$/i.test(e.small),o=e.tmpl||"${content}";return this["@{old.content}"]=n,this.updater.set({viewId:this.id,tmpl:o,dis:o.replace("${content}",n),content:n,rules:i,small:r,width:e.width||140,editing:!1}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"@{show}<click>":function(e){e.preventDefault(),this.updater.digest({editing:!0}),$("#"+this.id+"_input").focus()},"@{out}<keyup>":function(e){var t=this.isValid();if(13==e.keyCode&&t){var i=e.target.value,n=this.updater.get("tmpl");this.updater.digest({editing:!1,dis:n.replace("${content}",i),content:i})}},"@{out}<focusout>":function(e){e.stopPropagation();if(this.isValid()){var t=e.target.value,i=this.updater.get(),n=i.tmpl,r=i.content;this.updater.digest({editing:!1,dis:n.replace("${content}",t),content:t}),this["@{old.content}"]!=r&&$("#"+this.id).trigger({type:"edit",editText:r})}}})});