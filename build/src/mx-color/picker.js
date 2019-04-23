define("mx-color/picker",["magix","$","../mx-util/monitor","./index"],(r,t,i)=>{var e=r("magix"),o=r("$"),l=r("../mx-util/monitor");r("./index"),e.applyStyle("_zs_galleryA",':root{--mx-color-width:224px;--mx-color-slider-width:18px;--mx-color-picker-width:calc(var(--mx-color-width) - var(--mx-color-slider-width) - 10px)}._zs_gallerydl,._zs_gallerydm,._zs_gallerydn{width:var(--mx-color-width)}._zs_gallerydl{margin:10px 0}._zs_gallerydo{position:relative;float:left;width:15px;height:15px;margin:-1px 0 0 -1px;border:1px solid #333;cursor:pointer}._zs_gallerydo._zs_gallerydp:after,._zs_gallerydo._zs_gallerydp:before{content:" ";position:absolute;left:0;top:0;width:100%;height:100%}._zs_gallerydo._zs_gallerydp:before{z-index:2;border:1px solid #fff}._zs_gallerydo._zs_gallerydp:after{z-index:1;border:2px solid #333}._zs_gallerydq{float:left;position:relative;width:var(--mx-color-picker-width);height:var(--mx-color-picker-width);cursor:pointer}._zs_gallerydq ._zs_gallerydr{position:absolute;width:8px;height:8px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%}._zs_galleryds{float:right;position:relative;width:var(--mx-color-slider-width);height:var(--mx-color-picker-width);cursor:pointer}._zs_galleryds ._zs_gallerydt{position:absolute;right:-6px;top:-6px;width:0;height:0;background-color:none;border:6px solid transparent;border-right-color:#333;border-left:none}._zs_gallerydu{width:calc(var(--mx-color-width) - 120px)}._zs_gallerydv,._zs_gallerydw{width:50px}._zs_gallerydv{height:var(--input-height);margin-right:10px;border-radius:var(--border-radius);border:1px solid var(--color-border)}._zs_gallerydx{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);width:var(--mx-color-width);height:12px;margin-bottom:10px}._zs_gallerydy{position:relative;height:100%;cursor:pointer}._zs_gallerydz{position:absolute;left:-2px;top:2px;height:8px;width:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);background:#fff}._zs_gallerydA{display:inline-block;width:var(--input-height);height:var(--input-height);border-radius:50%;vertical-align:middle}[mx-view*="mx-color/index"]{width:calc(var(--mx-color-width) + 22px);min-width:calc(var(--mx-color-width) + 22px);padding:10px;background-color:#fff}[mx-view*="mx-color/picker"][mx-view*="dot=true"]{min-width:var(--input-height)}[mx-view*="mx-color/picker"][mx-view*="dot=true"] ._zs_gallerydB{max-width:none}'),i.exports=e.View.extend({tmpl:function(r,t,i,e,o,l,a,d){if(i||(i=r),!o){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,h=function(r){return"&"+n[r]+";"};o=function(r){return""+(null==r?"":r)},e=function(r){return o(r).replace(s,h)}}if(!l){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(r){return p[r]},g=/[!')(*]/g;l=function(r){return encodeURIComponent(o(r)).replace(g,_)}}if(!d){var c=/[\\'"]/g;d=function(r){return o(r).replace(c,"\\$&")}}a||(a=function(r,t,i,e){for(e=r[x];--e;)if(r[i=x+e]===t)return i;return r[i=x+r[x]++]=t,i});var x="",u="",f=r.dot,m=r.viewId,v=r.info,w=r.show,y=r.left,z=r.top;return u+=f?'<div class="_zs_gallerydA" id="trigger_'+e(m)+'" style="background: '+e(v.color)+';" mx-click="'+t+'__p()" mx-change="'+t+'__m()"></div>':'<div class="mx-trigger" id="trigger_'+e(m)+'" mx-click="'+t+'__p()" mx-change="'+t+'__m()">'+e(v.color)+"</div>",u+='<div mxv="info" class="_zs_gallerydB mx-output mx-output-bottom ',w&&(u+=" mx-output-open "),u+='" id="cpcnt_'+e(m)+'" style="left:'+e(y)+"px;top:"+e(z)+'px;" mx-view="mx-color/index?data='+a(i,v)+'" mx-change="'+t+'__ax()"></div>'},init:function(r){var t=this;l.__h(),t.on("destroy",function(){l.__i(t),l.__j()}),t.updater.snapshot(),t.assign(r)},assign:function(r){var t=this.updater.altered(),i=r.color||"";return this.updater.set({viewId:this.id,align:r.align,show:!1,dot:r.dot+""=="true",info:{showBtns:!0,showAlpha:r.showAlpha,color:i}}),this.__a=o("#"+this.id),this.__a.val(i),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest({})},"__m<change>":function(r){r.stopPropagation()},"__p<click>":function(r){r.preventDefault(),this.updater.get("show")?this.__n():this.__o()},__o:function(){var r=this.updater;if(!r.get("show")){r.digest({show:!0});var t=o("#trigger_"+this.id),i=o("#cpcnt_"+this.id),e=0,a=t.outerHeight();"right"==r.get("align")&&(e=t.outerWidth()-i.outerWidth()),r.digest({top:a,left:e}),l.__q(this)}},__n:function(){if(this.updater.get("show")){var r=this.updater.get("info"),t=this.__a.val();r.color=t,this.updater.digest({show:!1,info:r}),l.__i(this)}},__l:function(r){var t=e.inside(r,this.id)||e.inside(r,this.__a[0]);if(!t)for(var i=this.owner.children(),o=i.length-1;o>=0;o--){var l=e.Vframe.get(i[o]);if(l&&(t=l.invoke("__l",[r])),t)break}return t},"__ax<change>":function(r){r.stopPropagation();this.__a.val(r.color).trigger({type:"change",color:r.color}),this.__n()}})});