define("mx-editor/index",["magix","mx-form/index","mx-form/validator"],(e,t,i)=>{var l=e("magix"),r=e("mx-form/index"),n=e("mx-form/validator");l.applyStyle("_zs_galleryJ","._zs_galleryey ._zs_galleryez{display:none}._zs_galleryey ._zs_galleryeA{display:inline-block;word-break:break-all}._zs_galleryey ._zs_galleryeA ._zs_galleryeB{opacity:0;position:relative;top:2px;left:2px;color:#ccc;cursor:pointer}._zs_galleryey ._zs_galleryeA:hover ._zs_galleryeB{opacity:1}._zs_galleryey._zs_galleryeC ._zs_galleryez{display:inline-block}._zs_galleryey._zs_galleryeC ._zs_galleryeA{display:none}");i.exports=l.View.extend({tmpl:function(e,t,i,l,r,n,a,s){if(i||(i=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(_,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return d[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(p,u)}}if(!s){var g=/[\\'"]/g;s=function(e){return r(e).replace(g,"\\$&")}}a||(a=function(e,t,i,l){for(l=e[y];--l;)if(e[i=y+l]===t)return i;return e[i=y+e[y]++]=t,i});var y="",m="",f=e.editing,z=e.small,x=e.width,h=e.viewId,v=e.content,k=e.rules,w=e.dis;return m+='<div mxv class="_zs_galleryey ',f&&(m+=" _zs_galleryeC "),m+='"><input mxe="'+t+"_0\" mxc=\"[{p:'content',f:'"+a(i,k)+'\'}]" class="input ',z&&(m+=" input-small "),m+=' _zs_galleryez" style="width: '+l(x)+'px;" id="'+l(h)+'_input" value="'+l(v)+'" mx-keyup="'+t+'__cm()" mx-focusout="'+t+'__cm()"/><div mxa="_zs_gallerybi:_" class="_zs_galleryeA">'+r(w)+'<i mxs="_zs_gallerybi:_" class="mc-iconfont operations _zs_galleryeB" mx-click="'+t+'__o()">&#xe698;</i></div></div>'},mixins:[r,n],init:function(e){var t=this;t.updater.snapshot(),t.assign(e),t.on("destroy",function(){clearTimeout(t.__ck)})},assign:function(e){var t=this.updater.altered(),i=e.rules||{},l=e.content,r=/^true$/i.test(e.small),n=e.tmpl||"${content}";return this.__cl=l,this.updater.set({viewId:this.id,tmpl:n,dis:n.replace("${content}",l),content:l,rules:i,small:r,width:e.width||140,editing:!1}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__o<click>":function(e){e.preventDefault(),this.updater.digest({editing:!0}),$("#"+this.id+"_input").focus()},"__cm<keyup>":function(e){var t=this.isValid();if(13==e.keyCode&&t){var i=e.target.value,l=this.updater.get("tmpl");this.updater.digest({editing:!1,dis:l.replace("${content}",i),content:i})}},"__cm<focusout>":function(e){e.stopPropagation();if(this.isValid()){var t=e.target.value,i=this.updater.get(),l=i.tmpl,r=i.content;this.updater.digest({editing:!1,dis:l.replace("${content}",t),content:t}),this.__cl!=r&&$("#"+this.id).trigger({type:"edit",editText:r})}}})});