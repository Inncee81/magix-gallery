define("mx-effects/star",["magix","$"],(e,t,r)=>{var l=e("magix");e("$");l.applyStyle("_zs_galleryQ",'[mx-view*="mx-effects/star"]{position:relative;display:inline-block}[mx-view*="mx-effects/star"] ._zs_galleryfu>*{display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;font-size:20px;color:inherit}[mx-view*="mx-effects/star"] ._zs_galleryfv{color:var(--color-border)}[mx-view*="mx-effects/star"] ._zs_galleryfw{position:absolute;top:0;left:0;height:24px;overflow:hidden}[mx-view*="mx-effects/star"] ._zs_galleryfw ._zs_galleryfx{width:120px;height:24px}[mx-view*="mx-effects/star"] ._zs_galleryfw ._zs_galleryfx._zs_galleryfy{color:var(--color-brand)}'),r.exports=l.View.extend({tmpl:function(e,t,r,l,s,i,a,n){if(r||(r=e),!s){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(f,c)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return _[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(g,x)}}if(!n){var p=/[\\'"]/g;n=function(e){return s(e).replace(p,"\\$&")}}var d="",u=e.icon,y=e.width,h=e.color;d+='<div mxa="_zs_galleryb&:_" class="_zs_galleryfv">';for(var m=0;m<5;m+=1)d+='<span mxa="_zs_galleryb&:a" class="_zs_galleryfu">',d+=u?" "+s(u)+" ":'<i mxs="_zs_galleryb&:_" class="mc-iconfont">&#xe60f;</i>',d+="</span>";d+='</div><div class="_zs_galleryfw" style="width: '+l(y)+';"><div class="_zs_galleryfx ',h||(d+=" _zs_galleryfy "),d+='">';for(m=0;m<5;m+=1)d+='<span class="_zs_galleryfu" ',h&&(d+=' style="color: '+l(h)+';" '),d+=">",d+=u?" "+s(u)+" ":'<i mxs="_zs_galleryb&:_" class="mc-iconfont">&#xe60f;</i>',d+="</span>";return d+="</div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t=this.updater.altered(),r=e.color||"",l=+e.num||0,s=l+"",i=s.indexOf(".");return(i=i>=0?s.slice(i+1).length:0)>0&&(l=Math.floor(l)+.5),l<0&&(l=0),l>5&&(l=5),this.updater.set({width:l/5*100+"%",color:r,icon:e.icon}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()}})});