define("mx-checkbox/index",["magix","$"],(e,t,n)=>{var a=e("magix");e("$");n.exports=a.View.extend({tmpl:function(e,t,n,a,i,r,c,d){if(n||(n=e),!i){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,h=function(e){return"&"+u[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(s,h)}}if(!r){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return l[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(p,o)}}if(!d){var m=/[\\'"]/g;d=function(e){return i(e).replace(m,"\\$&")}}var f="",g=e.indeterminate,v=e.checked,k=e.disabled,x=e.name,b=e.value;return f+='<input type="checkbox" class="',g&&(f+=" indeterminate "),f+='" ',v&&(f+=' checked="checked" '),f+=" ",k&&(f+=' disabled="disabled" '),f+=' name="'+a(x)+'" value="'+a(b)+'" mx-change="'+t+'__ac()"/>'},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t=this.updater.altered(),n=e.checked+""=="true",a=e.disabled+""=="true",i=e.indeterminate+""=="true";return this.updater.set({checked:n,disabled:a,indeterminate:i,name:e.name||"",value:e.value||""}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest({})},"__ac<change>":function(e){this.updater.digest({checked:e.target.checked,indeterminate:!1})}})});