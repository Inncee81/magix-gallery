define("mx-effects/star",["magix","../mx-util/view","$"],(e,t,a)=>{"use strict";t.__esModule=!0;var r=e("magix"),i=e("../mx-util/view"),s=e("$");r.default.applyStyle("_zs_galleryP",'[mx-view*="mx-effects/star"]{position:relative;display:inline-block}[mx-view*="mx-effects/star"] ._zs_galleryfp,[mx-view*="mx-effects/star"] ._zs_galleryfp>*{display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;font-size:20px;color:inherit}[mx-view*="mx-effects/star"] ._zs_galleryfp{float:left}[mx-view*="mx-effects/star"] ._zs_galleryfq{color:var(--color-border)}[mx-view*="mx-effects/star"] ._zs_galleryfs{position:absolute;top:0;left:0;height:24px;overflow:hidden}[mx-view*="mx-effects/star"] ._zs_galleryfs ._zs_galleryft{height:24px}[mx-view*="mx-effects/star"][mx-view*="operational=true"] ._zs_galleryfp{cursor:pointer;transition:all var(--duration)}[mx-view*="mx-effects/star"][mx-view*="operational=true"] ._zs_galleryfp._zs_galleryfu{transform:scale(1.2)}'),t.default=i.extend({tmpl:function(e,t,a,r,i,s,n,l){if(a||(a=e),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,f=function(e){return"&"+o[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(c,f)}}if(!s){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return u[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(d,_)}}if(!l){var p=/[\\'"]/g;l=function(e){return i(e).replace(p,"\\$&")}}var x="",m=e.count,v=e.hoverIndex,g=e.operational,h=e.spm,y=e.icon,z=e.num,w=e.starWidth,k=e.color;x+='<div mxa="_zs_galleryb?:_" class="_zs_galleryfq clearfix">';for(var b=0;b<m;b+=1)x+='<span class="_zs_galleryfp ',v==b&&(x+=" _zs_galleryfu "),x+='" ',g&&(x+=' mx-click="'+t+"__af({index:"+r(b)+'})" mx-mouseover="'+t+"__cs({index:"+r(b)+'})" mx-mouseout="'+t+'__cq()" ',h&&(x+=' data-spm-click="'+r(h)+r(b)+'" '),x+=" "),x+=">"+i(y)+"</span>";x+='</div><div class="_zs_galleryfs" style="width: '+r(z*w)+'px;"><div class="_zs_galleryft clearfix" style="width:'+r(m*w)+'px;">';for(b=0;b<m;b+=1)x+='<span class="_zs_galleryfp ',v==b&&(x+=" _zs_galleryfu "),x+='" style="color: '+r(k)+';" ',g&&(x+=' mx-click="'+t+"__af({index:"+r(b)+'})" mx-mouseover="'+t+"__cs({index:"+r(b)+'})" mx-mouseout="'+t+'__cq()" ',h&&(x+=' data-spm-click="'+r(h)+r(b)+'" '),x+=" "),x+=">"+i(y)+"</span>";return x+="</div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t=this.updater.altered(),a=+e.num||0,r=+e.count||5;return a<0&&(a=0),a>r&&(a=r),this.updater.set({starWidth:24,num:a,count:r,operational:e.operational+""=="true",color:e.color||"var(--color-brand)",icon:e.icon||'<i class="mc-iconfont">&#xe60f;</i>'}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest({hoverIndex:-1}),this.__a=s("#"+this.id);var e=this.updater.get().num;this.__a.val(e)},"__af<click>":function(e){e.preventDefault(),e.stopPropagation();var t=+e.params.index+1;this.updater.digest({num:t}),this.__a.val(t).trigger({type:"change",num:t})},"__cq<mouseout>":function(e){r.default.inside(event.relatedTarget,event.eventTarget)||this.updater.digest({hoverIndex:-1})},"__cs<mouseover>":function(e){r.default.inside(event.relatedTarget,event.eventTarget)||this.updater.digest({hoverIndex:e.params.index})}})});