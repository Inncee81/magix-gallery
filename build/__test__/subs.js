define("__test__/subs",["magix","$"],(t,_,s)=>{var e=t("magix"),a=t("$"),r=e.Router;e.applyStyle("_zs_gallery___test___subs_","._zs_gallery___test___subs_-content-subs {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 120px;\n  padding: 10px 0 10px 10px;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery___test___subs_-content-subs ._zs_gallery___test___subs_-sub-link {\n  margin-bottom: 6px;\n}\n._zs_gallery___test___subs_-content-subs ._zs_gallery___test___subs_-sub-link:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery___test___subs_-content-subs._zs_gallery___test___subs_-subs-fixed {\n  position: fixed;\n}\n"),s.exports=e.View.extend({tmpl:function(t,_,s,e,a,r,i,n){if(s||(s=t),!a){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,o=function(t){return"&"+l[t]+";"};a=function(t){return""+(null==t?"":t)},e=function(t){return a(t).replace(u,o)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},b=function(t){return c[t]},d=/[!')(*]/g;r=function(t){return encodeURIComponent(a(t)).replace(d,b)}}if(!n){var f=/[\\'"]/g;n=function(t){return a(t).replace(f,"\\$&")}}var p,g,h,m="",v=t.fixed,$=t.list;try{m+='<div class="_zs_gallery___test___subs_-content-subs ',h=1,g="if fixed",p="<%if (fixed) {%>",v&&(m+=" _zs_gallery___test___subs_-subs-fixed ",h=1,g="/if",p="<%}%>"),m+='">',h=2,g="each list as item",p="<%for (var $art_ipuwizzcp$art_i = 0, $art_cvjrhcil$art_c = list.length; $art_ipuwizzcp$art_i < $art_cvjrhcil$art_c; $art_ipuwizzcp$art_i++) {    var item = list[$art_ipuwizzcp$art_i]%>";for(var x=0,y=$.length;x<y;x++){var z=$[x];if(m+='<div mxa="_zs_galleryO:_" class="_zs_gallery___test___subs_-sub-link"><a href="javascript:;" mx-click="'+_+"to({key:'",h=4,g="=item.key",m+=(p="<%=$eq(item.key)%>",e(n(z.key))+"'})\">"),h=4,g="=item.name",m+=(p="<%=item.name%>",e(z.name)+"</a></div>"),h=6,g="if (item.subs && item.subs.length)",p="<%if (item.subs && item.subs.length) {%>",z.subs&&z.subs.length){m+=" ",h=7,g="each item.subs as sub",p="<%for (var $art_iazcbjrpq$art_i = 0, $art_objvvhdqqc$art_obj = item.subs, $art_cadaoxhcx$art_c = $art_objvvhdqqc$art_obj.length; $art_iazcbjrpq$art_i < $art_cadaoxhcx$art_c; $art_iazcbjrpq$art_i++) {            var sub = $art_objvvhdqqc$art_obj[$art_iazcbjrpq$art_i]%>";for(var k=0,j=z.subs,w=j.length;k<w;k++){var q=j[k];m+='<div mxa="_zs_galleryO:a" class="_zs_gallery___test___subs_-sub-link pl10"><a href="javascript:;" mx-click="'+_+"to({key:'",h=9,g="=sub.key",m+=(p="<%=$eq(sub.key)%>",e(n(q.key))+"'})\">"),h=9,g="=sub.name",m+=(p="<%=sub.name%>",e(q.name)+"</a></div>"),h=11,g="/each",p="<%}%>"}m+=" ",h=12,g="/if",p="<%}%>"}m+=" ",h=13,g="/each",p="<%}%>"}m+="</div>"}catch(t){var C="render view error:"+(t.message||t);throw g&&(C+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+h),C+="\r\n\t"+(g?"translate to:":"expr:"),C+=p+"\r\n\tat file:__test__/subs.html"}return m},init:function(t){var _=t.list||[];this.updater.set({list:_})},render:function(){var t=this;t.updater.digest();var _=r.parse().params;!t.$init&&_.highlightId&&(setTimeout(function(){t.to(_.highlightId)},500),t.$init=1)},"to<click>":function(t){var _=t.params.key;r.to({highlightId:_}),this.to(_)},to:function(t){var _=a("#"+t),s="_zs_gallery___test___layout_-example",e="_zs_gallery___test___layout_-example-highlight";a("."+s).removeClass(e),_.hasClass(s)?_.addClass(e):_.find("."+s).addClass(e),a(window).scrollTop(_.offset().top)},"$win<scroll>":function(t){var _=a("#"+this.id);if(a(window).scrollTop()>=_.offset().top){if(this.updater.get("fixed"))return;this.updater.digest({fixed:!0})}else{if(!this.updater.get("fixed"))return;this.updater.digest({fixed:!1})}}})});