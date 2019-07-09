define("mx-effects/notice",["magix","$","mx-color/util"],(e,t,o)=>{var n=e("magix"),r=e("$"),c=e("mx-color/util");n.applyStyle("_zs_gallery_mx-effects_notice_","._zs_gallery_mx-effects_notice_-notice {\n  position: relative;\n  padding: 8px 24px;\n  line-height: 20px;\n  border-radius: inherit;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner {\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  word-break: break-all;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner ._zs_gallery_mx-effects_notice_-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  line-height: 20px;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-close {\n  position: absolute;\n  top: 8px;\n  right: 24px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  cursor: pointer;\n  color: #999;\n  font-weight: bold;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-close:hover {\n  color: #666;\n}\n"),o.exports=n.View.extend({tmpl:function(e,t,o,n,r,c,l,i){if(o||(o=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,_=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(a,_)}}if(!c){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return f[e]},g=/[!')(*]/g;c=function(e){return encodeURIComponent(r(e)).replace(g,d)}}if(!i){var u=/[\\'"]/g;i=function(e){return r(e).replace(u,"\\$&")}}var m,p,y,x="",b=e.show,h=e.styles,v=e.icon,z=e.colorIcon,w=e.content,k=e.closable;try{y=1,p="if show",m="<%if (show) {%>",b&&(x+='<div class="_zs_gallery_mx-effects_notice_-notice" style="',y=2,p="=styles",x+=(m="<%=styles%>",n(h)+'">'),y=3,p="if icon",m="<%if (icon) {%>",v?(x+='<div mxa="_zs_galleryb9:_" class="_zs_gallery_mx-effects_notice_-inner"><i class="mc-iconfont _zs_gallery_mx-effects_notice_-icon" style="color: ',y=5,p="=colorIcon",x+=(m="<%=colorIcon%>",n(z)+';">&#xe6ad;</i>'),y=6,p="!content",x+=(m="<%!content%>",r(w)+"</div>"),y=8,p="else",m="<%}    else {%>"):(x+=" ",y=9,p="!content",x+=(m="<%!content%>",r(w)+" "),y=10,p="/if",m="<%}%>"),x+=" ",y=12,p="if closable",m="<%if (closable) {%>",k&&(x+='<i mxs="_zs_galleryb9:_" class="mc-iconfont _zs_gallery_mx-effects_notice_-close" mx-click="'+t+'close()">&#xe603;</i>',y=14,p="/if",m="<%}%>"),x+="</div>",y=16,p="/if",m="<%}%>")}catch(e){var V="render view error:"+(e.message||e);throw p&&(V+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+y),V+="\r\n\t"+(p?"translate to:":"expr:"),V+=m+"\r\n\tat file:mx-effects/notice.html"}return x},init:function(e){var t=getComputedStyle(document.documentElement),o=e.color,n=[],l=e.border+""=="true",i=e.radius+""=="true",s=!(e.icon+""=="false"),a=e.closable+""=="true",_=e.type||"common";if(l&&(i=!0,n.push("border-width: 1px","border-style: solid")),i){var f=document.body.style.getPropertyValue("--border-radius")||t.getPropertyValue("--border-radius");f=f.trim(),n.push("border-radius: "+f)}var d,g,u,m,p=e.textAlign||"left";if(!o){var y=void 0;switch(_){case"common":d=(d=document.body.style.getPropertyValue("--color-bg")||t.getPropertyValue("--color-bg")).trim(),g=(g=document.body.style.getPropertyValue("--color-border")||t.getPropertyValue("--color-border")).trim(),u="#cccccc";break;case"highlight":y="--color-brand";break;case"error":y="--color-red";break;case"warn":y="--color-warn"}y&&(o=(o=document.body.style.getPropertyValue(y)||t.getPropertyValue(y)).trim())}if(o){var x=c.toRgb(o);d="rgba("+x.r+", "+x.g+", "+x.b+", 0.1)",g=o,u=o}d=e.colorBg||d,g=e.colorBorder||g,u=e.colorIcon||u,m=e.colorText||"#666",n.push("background-color:"+d,"border-color:"+g,"color:"+m,"text-align:"+p),this.updater.set({show:!0,content:e.content||r("#"+this.id).html()||"提示内容",styles:n.join(";"),colorIcon:u,icon:s,closable:a})},render:function(){this.updater.digest()},"close<click>":function(e){this.updater.digest({show:!1})}})});