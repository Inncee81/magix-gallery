define("mx-popmenu/content",["magix"],(n,e,t)=>{var r=n("magix");r.applyStyle("_zs_gallery_mx-popmenu_content_","._zs_gallery_mx-popmenu_content_-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link:hover {\n  background-color: var(--color-bg-hover);\n}\n"),t.exports=r.View.extend({tmpl:function(n,e,t,r,a,i,_,m){if(t||(t=n),!a){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,p=function(n){return"&"+l[n]+";"};a=function(n){return""+(null==n?"":n)},r=function(n){return a(n).replace(o,p)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(n){return u[n]},c=/[!')(*]/g;i=function(n){return encodeURIComponent(a(n)).replace(c,s)}}if(!m){var g=/[\\'"]/g;m=function(n){return a(n).replace(g,"\\$&")}}var x,v,d,h="",y=n.menus;try{h+='<div mxa="_zs_gallerydm:_" class="_zs_gallery_mx-popmenu_content_-menu">',d=2,v="each menus as item",x="<%for (var $art_ivmnpqxxc$art_i = 0, $art_cgigboijic$art_c = menus.length; $art_ivmnpqxxc$art_i < $art_cgigboijic$art_c; $art_ivmnpqxxc$art_i++) {    var item = menus[$art_ivmnpqxxc$art_i]%>";for(var f=0,z=y.length;f<z;f++){var $=y[f];h+='<div mxa="_zs_gallerydm:a" class="_zs_gallery_mx-popmenu_content_-item"><span class="_zs_gallery_mx-popmenu_content_-item-link ellipsis" mx-click="'+e+"submit({value:'",d=5,v="=item.value",h+=(x="<%=$eq(item.value)%>",r(m($.value))+"'})\">"),d=6,v="=item.text",h+=(x="<%=item.text%>",r($.text)+"</span></div>"),d=9,v="/each",x="<%}%>"}h+="</div>"}catch(n){var b="render view error:"+(n.message||n);throw v&&(b+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+d),b+="\r\n\t"+(v?"translate to:":"expr:"),b+=x+"\r\n\tat file:mx-popmenu/content.html"}return h},init:function(n){this.viewOptions=n;var e=n.data||{};this.updater.set({menus:e.menus})},render:function(){this.updater.digest({})},"submit<click>":function(n){var e=this.viewOptions;e.submit&&e.submit(n.params.value)}})});