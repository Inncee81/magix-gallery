define("mx-effects/icon",["magix","$","mx-util/css-var","mx-popover/index"],(e,t,r)=>{e("mx-popover/index");var n=e("magix"),a=(e("$"),e("mx-util/css-var"));r.exports=n.View.extend({tmpl:function(e,t,r,n,a,o,s,c){if(r||(r=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,p=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(l,p)}}if(!o){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return f[e]},d=/[!')(*]/g;o=function(e){return encodeURIComponent(a(e)).replace(d,u)}}if(!c){var m=/[\\'"]/g;c=function(e){return a(e).replace(m,"\\$&")}}var x="",g=e.tip,h=e.styles,v=e.content;return x+=g?'<span class="mx-tag" style="'+n(h)+'" mx-view="mx-popover/index?content='+o(g)+'"><span mxa="_zs_galleryb):_" class="mx-tag-name">'+a(v)+"</span></span>":'<span class="mx-tag" style="'+n(h)+'"><span mxa="_zs_galleryb):a" class="mx-tag-name">'+a(v)+"</span></span>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t,r=this.updater.altered(),n=e.color,o=e.mode||"solid",s=e.type||"common";if(!n){var c=void 0;switch(s){case"common":switch(o){case"solid":n="#cccccc",t="#ffffff";break;case"hollow":n="#cccccc",t="#999999"}break;case"highlight":c="--color-brand";break;case"error":c="--color-red";break;case"warn":c="--color-warn"}c&&(n=a.get(c,"#4d7fff"))}var i=[];switch(o){case"solid":i.push("background-color: "+n,"border: 1px solid "+n,"color: "+(t||e.colorText||"#ffffff"));break;case"hollow":i.push("background-color: transparent","border: 1px solid "+n,"color: "+(t||e.colorText||n))}return this.updater.set({content:e.content||"打标",styles:i.join(";"),tip:e.tip||""}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()}})});