define("mx-effects/notice",["magix","$","mx-color/util"],(e,r,o)=>{var l=e("magix"),t=e("$"),a=e("mx-color/util");l.applyStyle("_zs_galleryN","._zs_galleryeR{position:relative;padding:8px 24px;line-height:20px;border-radius:inherit}._zs_galleryeR ._zs_galleryeS{display:inline-block;position:relative;padding-left:18px;word-break:break-all}._zs_galleryeR ._zs_galleryeS ._zs_galleryeT{top:0;left:0}._zs_galleryeR ._zs_galleryeU,._zs_galleryeR ._zs_galleryeS ._zs_galleryeT{position:absolute;height:20px;line-height:20px}._zs_galleryeR ._zs_galleryeU{top:8px;right:24px;width:20px;text-align:center;cursor:pointer;color:#999;font-weight:700;transition:all var(--duration)}._zs_galleryeR ._zs_galleryeU:hover{color:#666}"),o.exports=l.View.extend({tmpl:function(e,r,o,l,t,a,i,c){if(o||(o=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,g=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(s,g)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return d[e]},y=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(y,u)}}if(!c){var _=/[\\'"]/g;c=function(e){return t(e).replace(_,"\\$&")}}var p="",b=e.show,m=e.styles,x=e.icon,f=e.colorIcon,h=e.content,z=e.closable;return b&&(p+='<div class="_zs_galleryeR" style="'+l(m)+'">',p+=x?'<div mxa="_zs_galleryb0:_" class="_zs_galleryeS"><i class="mc-iconfont _zs_galleryeT" style="color: '+l(f)+';">&#xe6ad;</i>'+t(h)+"</div>":" "+t(h)+" ",p+=" ",z&&(p+='<i mxs="_zs_galleryb0:_" class="mc-iconfont _zs_galleryeU" mx-click="'+r+'close()">&#xe603;</i>'),p+="</div>"),p},init:function(e){var r=getComputedStyle(document.documentElement),o=e.color,l=[],i=e.border+""=="true",c=e.radius+""=="true",n=!(e.icon+""=="false"),s=e.closable+""=="true",g=e.type||"common";if(i&&(c=!0,l.push("border-width: 1px","border-style: solid")),c){var d=document.body.style.getPropertyValue("--border-radius")||r.getPropertyValue("--border-radius");d=d.trim(),l.push("border-radius: "+d)}var u,y,_,p,b=e.textAlign||"left";if(!o){var m=void 0;switch(g){case"common":u=(u=document.body.style.getPropertyValue("--color-bg")||r.getPropertyValue("--color-bg")).trim(),y=(y=document.body.style.getPropertyValue("--color-border")||r.getPropertyValue("--color-border")).trim(),_="#cccccc";break;case"highlight":m="--color-brand";break;case"error":m="--color-red";break;case"warn":m="--color-warn"}m&&(o=(o=document.body.style.getPropertyValue(m)||r.getPropertyValue(m)).trim())}if(o){var x=a.toRgb(o);u="rgba("+x.r+", "+x.g+", "+x.b+", 0.1)",y=o,_=o}u=e.colorBg||u,y=e.colorBorder||y,_=e.colorIcon||_,p=e.colorText||"#666",l.push("background-color:"+u,"border-color:"+y,"color:"+p,"text-align:"+b),this.updater.set({show:!0,content:e.content||t("#"+this.id).html()||"提示内容",styles:l.join(";"),colorIcon:_,icon:n,closable:s})},render:function(){this.updater.digest()}})});