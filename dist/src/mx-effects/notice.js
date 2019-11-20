define("mx-effects/notice",["magix","../mx-util/view"],(e,r,l)=>{"use strict";r.__esModule=!0;var o=e("magix"),t=e("../mx-util/view");o.default.applyStyle("_zs_galleryO","._zs_galleryfk{position:relative;padding:8px 24px;line-height:20px;border-radius:inherit}._zs_galleryfk ._zs_galleryfm{display:inline-block;position:relative;padding-left:18px;word-break:break-all}._zs_galleryfk ._zs_galleryfm ._zs_galleryfn{top:0;left:0}._zs_galleryfk ._zs_galleryfo,._zs_galleryfk ._zs_galleryfm ._zs_galleryfn{position:absolute;height:20px;line-height:20px}._zs_galleryfk ._zs_galleryfo{top:8px;right:10px;width:20px;text-align:center;cursor:pointer;color:#999;font-weight:700;transition:all var(--duration)}._zs_galleryfk ._zs_galleryfo:hover{color:#666}"),r.default=t.extend({tmpl:function(e,r,l,o,t,i,a,c){if(l||(l=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,_=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},o=function(e){return t(e).replace(s,_)}}if(!i){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return f[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(g,d)}}if(!c){var u=/[\\'"]/g;c=function(e){return t(e).replace(u,"\\$&")}}var p="",y=e.show,h=e.styles,b=e.icon,m=e.colorIcon,x=e.content,z=e.closable,v=e.spm;return y&&(p+='<div class="_zs_galleryfk" style="'+o(h)+'">',p+=b?'<div mxa="_zs_galleryb.:_" class="_zs_galleryfm"><i class="mc-iconfont _zs_galleryfn" style="color: '+o(m)+';">&#xe6ad;</i>'+t(x)+"</div>":" "+t(x)+" ",p+=" ",z&&(p+='<i class="mc-iconfont _zs_galleryfo" mx-click="'+r+'close()" ',v&&(p+=' data-spm-click="'+o(v)+'" '),p+=">&#xe603;</i>"),p+="</div>"),p},init:function(e){var r,l,o,t,i=e.color,a=e.border+""=="true",c=e.radius+""=="true",n=!(e.icon+""=="false"),s=e.closable+""=="true",_=e.type||"common",f=e.textAlign||"left",d=[];if(a&&(c=!0,d.push("border-width: 1px","border-style: solid")),c&&d.push("border-radius: var(--border-radius)"),!i){var g=void 0;switch(_){case"common":r=this.__cr("--color-bg","#fafafa"),l=this.__cr("--color-border","#e6e6e6"),o="#cccccc";break;case"highlight":g="--color-brand";break;case"error":g="--color-red";break;case"warn":g="--color-warn";break;case"pass":g="--color-green"}g&&(i=this.__cr(g,"#4d7fff"))}if(i){var u=this.__b(i);r="rgba("+u.r+", "+u.g+", "+u.b+", 0.1)",l=i,o=i}r=e.colorBg||r,l=e.colorBorder||l,o=e.colorIcon||o,t=e.colorText||"#666",d.push("background-color:"+r,"border-color:"+l,"color:"+t,"text-align:"+f),this.updater.set({show:!0,content:e.content||document.getElementById(this.id).innerHTML||"提示内容",styles:d.join(";"),colorIcon:o,icon:n,closable:s})},render:function(){this.updater.digest()},"close<click>":function(e){this.updater.digest({show:!1})}})});