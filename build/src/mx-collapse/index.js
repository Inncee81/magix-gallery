define("mx-collapse/index",["magix","$"],(e,r,a)=>{var l=e("magix"),t=e("$");l.applyStyle("_zs_galleryA","._zs_gallerydj{border-radius:var(--border-radius);border:1px solid var(--color-border);overflow:hidden}._zs_gallerydj ._zs_gallerydk{border-bottom:1px solid var(--color-border)}._zs_gallerydj ._zs_gallerydk ._zs_gallerydl{cursor:pointer;position:relative;padding:10px 24px;background-color:var(--color-bg)}._zs_gallerydj ._zs_gallerydk ._zs_gallerydl ._zs_gallerydm>*{position:absolute;top:50%;left:20px;width:20px;height:20px;text-align:center;line-height:20px;margin-top:-10px;transition:all var(--duration);color:#999}._zs_gallerydj ._zs_gallerydk ._zs_gallerydl ._zs_gallerydn{margin-left:20px}._zs_gallerydj ._zs_gallerydk ._zs_gallerydo{display:none;border-top:1px solid var(--color-border);overflow:hidden;transition:height var(--duration),opacity var(--duration)}._zs_gallerydj ._zs_gallerydk ._zs_gallerydo ._zs_gallerydp{padding:10px 24px}._zs_gallerydj ._zs_gallerydk ._zs_gallerydo ._zs_gallerydn{line-height:22px}._zs_gallerydj ._zs_gallerydk:last-child{border-bottom:0}._zs_gallerydj ._zs_gallerydk._zs_gallerydq ._zs_gallerydl{opacity:.5;cursor:not-allowed}._zs_gallerydj ._zs_gallerydk._zs_gallerydr ._zs_gallerydl ._zs_gallerydm>*{-webkit-transform:rotate(90deg);transform:rotate(90deg)}"),a.exports=l.View.extend({tmpl:function(e,r,a,l,t,i,n,d){if(a||(a=e),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,_=function(e){return"&"+s[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(o,_)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return g[e]},y=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(y,p)}}if(!d){var c=/[\\'"]/g;d=function(e){return t(e).replace(c,"\\$&")}}n||(n=function(e,r,a,l){for(l=e[u];--l;)if(e[a=u+l]===r)return a;return e[a=u+e[u]++]=r,a});var u="",z="",x=e.list,f=e.viewId;z+='<div mxv mxa="_zs_galleryay:_" class="_zs_gallerydj">';for(var h=0,v=x.length;h<v;h++){var m=x[h];z+='<div mxv class="_zs_gallerydk ',m.expand&&(z+=" _zs_gallerydr "),z+=" ",m.disabled&&(z+=" _zs_gallerydq "),z+='"><div class="_zs_gallerydl" ',m.disabled||(z+=' mx-click="'+r+"toggle({index: "+l(h)+'})" '),z+='><span mxa="_zs_galleryay:a" class="_zs_gallerydm">'+t(m.arrow)+'</span><span mxa="_zs_galleryay:b" class="_zs_gallerydn">'+l(m.title)+"</span></div>",m.disabled||(z+='<div mxv class="_zs_gallerydo" id="'+l(f)+"_content_"+l(h)+'" style="',m.height&&(z+=" \n                display: block; \n                ",m.expand?z+=" \n                    opacity: 1; height: "+l(m.height)+"px; \n                ":z+=" \n                    opacity: 0; height: 0; border-top: 0 none; \n                ",z+=" \n            "),z+='"><div mxv="list" class="_zs_gallerydp" mx-view="'+l(m.view)+"?data="+n(a,m)+'"></div></div>'),z+="</div>"}return z+="</div>"},init:function(e){var r=this;r.__a=t("#"+r.id),r.updater.snapshot(),r.assign(e),r.owner.oncreated=function(){if(!r.$init){r.$init=1;var e=r.id,a=r.updater.get("list");a.forEach(function(r,a){var l=t("#"+e+"_content_"+a);r.height=l.outerHeight()}),r.updater.digest({list:a})}},r.ondestroy=function(){r.owner.off("created")}},assign:function(e){var r=this.updater.altered();return this.updater.set({viewId:this.id,onlyOne:e.onlyOne+""!="false",originList:e.list||[]}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){this.$init=null;var e=this.updater.get("originList"),r=t.extend(!0,[],e),a=!1;if(r.forEach(function(e,r){e.arrow||(e.arrow='<span class="mc-iconfont" style="font-size: 14px;">&#xe602;</span>'),e.view||(e.view="mx-collapse/content"),e.expand=e.expand||!1,e.disabled&&(e.expand=!1),a=a||e.expand}),!a)for(var l=0;l<r.length;l++)if(!r[l].disabled){r[l].expand=!0;break}this.updater.digest({list:r}),a||this.__af()},__af:function(){var e=this.updater.get("list");this.__a.trigger({type:"change",expands:e.map(function(e){return e.expand})})},"toggle<click>":function(e){var r=e.params.index,a=this.updater.get(),l=a.list,t=a.onlyOne;l.forEach(function(e,a){a==r?e.expand=!e.expand:t&&(e.expand=!1)}),this.updater.digest({list:l}),this.__af()}})});