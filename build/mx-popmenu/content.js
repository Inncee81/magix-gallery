define("mx-popmenu/content",["magix"],(n,e,t)=>{var a=n("magix");a.applyStyle("_zs_gallery_mx-popmenu_content_","._zs_gallery_mx-popmenu_content_-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link:hover {\n  background-color: var(--color-bg-hover);\n}\n"),t.exports=a.View.extend({tmpl:function(n,e,t,a,r,i,_,l){if(t||(t=n),!r){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,p=function(n){return"&"+m[n]+";"};r=function(n){return""+(null==n?"":n)},a=function(n){return r(n).replace(o,p)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(n){return u[n]},c=/[!')(*]/g;i=function(n){return encodeURIComponent(r(n)).replace(c,s)}}if(!l){var g=/[\\'"]/g;l=function(n){return r(n).replace(g,"\\$&")}}var v,x,d,z="",h=n.menus;try{z+='<div mxa="_zs_gallerydj:_" class="_zs_gallery_mx-popmenu_content_-menu">',d=2,x="each menus as item",v="<%for (var $art_izptqzaa$art_i = 0, $art_caiwejsgito$art_c = menus.length; $art_izptqzaa$art_i < $art_caiwejsgito$art_c; $art_izptqzaa$art_i++) {    var item = menus[$art_izptqzaa$art_i]%>";for(var y=0,f=h.length;y<f;y++){var $=h[y];z+='<div mxa="_zs_gallerydj:a" class="_zs_gallery_mx-popmenu_content_-item"><span class="_zs_gallery_mx-popmenu_content_-item-link ellipsis" mx-click="'+e+"submit({value:'",d=5,x="=item.value",z+=(v="<%=$eq(item.value)%>",a(l($.value))+"'})\">"),d=6,x="=item.text",z+=(v="<%=item.text%>",a($.text)+"</span></div>"),d=9,x="/each",v="<%}%>"}z+="</div>"}catch(n){var b="render view error:"+(n.message||n);throw x&&(b+="\r\n\tsrc art:{{"+x+"}}\r\n\tat line:"+d),b+="\r\n\t"+(x?"translate to:":"expr:"),b+=v+"\r\n\tat file:mx-popmenu/content.html"}return z},init:function(n){this.viewOptions=n;var e=n.data||{};this.updater.set({menus:e.menus})},render:function(){this.updater.digest({})},"submit<click>":function(n){var e=this.viewOptions;e.submit&&e.submit(n.params.value)}})});