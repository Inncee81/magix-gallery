define("mx-table/index",["magix","$"],(t,e,i)=>{var _=t("magix"),l=t("$"),r=/width\s*:\s*(\d+)px/;_.applyStyle("_zs_galleryaA",'[mx-view*="mx-table/excel"],[mx-view*="mx-table/index"]{position:relative}[mx-view*="mx-table/excel"] table,[mx-view*="mx-table/index"] table{table-layout:auto}[mx-view*="mx-table/excel"] ._zs_gallerykg,[mx-view*="mx-table/excel"] ._zs_gallerykh,[mx-view*="mx-table/index"] ._zs_gallerykg,[mx-view*="mx-table/index"] ._zs_gallerykh{position:absolute;left:0;right:0;overflow-x:scroll;overflow-y:hidden}[mx-view*="mx-table/excel"] ._zs_gallerykh,[mx-view*="mx-table/index"] ._zs_gallerykh{top:0;z-index:1;-ms-overflow-style:none;overflow:auto}[mx-view*="mx-table/excel"] ._zs_gallerykh::-webkit-scrollbar,[mx-view*="mx-table/index"] ._zs_gallerykh::-webkit-scrollbar{display:none;width:0;height:0}[mx-view*="mx-table/excel"] ._zs_gallerykh::-webkit-scrollbar-thumb,[mx-view*="mx-table/index"] ._zs_gallerykh::-webkit-scrollbar-thumb{background-color:transparent}[mx-view*="mx-table/excel"] ._zs_gallerykg,[mx-view*="mx-table/index"] ._zs_gallerykg{display:none;z-index:2;opacity:.3}[mx-view*="mx-table/excel"] ._zs_gallerykg ._zs_galleryki,[mx-view*="mx-table/index"] ._zs_gallerykg ._zs_galleryki{height:1px}[mx-view*="mx-table/excel"] ._zs_gallerykg::-webkit-scrollbar,[mx-view*="mx-table/index"] ._zs_gallerykg::-webkit-scrollbar{width:14px;height:14px}[mx-view*="mx-table/excel"] ._zs_gallerykg::-webkit-scrollbar-thumb,[mx-view*="mx-table/index"] ._zs_gallerykg::-webkit-scrollbar-thumb{background-color:var(--color-brand);border-radius:7px}[mx-view*="mx-table/excel"] ._zs_gallerykj,[mx-view*="mx-table/index"] ._zs_gallerykj{box-shadow:3px 0 4px rgba(0,0,0,.06)}'),i.exports=_.View.extend({init:function(t){var e=this;e.__dF=0;var i=l("#"+e.id);e.__a=i;var _=i.find('table[left="true"]');_&&_.length>0?(e.__dG=_,e.__dH=e.__dI(_,"left"),e.__dJ=_.find("thead"),e.__dK=i.find('table[center="true"]')):e.__dK=i.find("table"),e.__dL=e.__dI(e.__dK,"main"),e.__dM=e.__dK.find("thead"),e.__dN=t.sticky+""=="true",e.__dO=t.stickyEnd+""=="true",e.__dP=t.stickyInterval||0,e.__dQ=t.rowHoverClass||"hover-tr",t.scrollWrapper&&(e.__bL=l("#"+t.scrollWrapper)),e.assign()},assign:function(){return!0},render:function(){var t=this;t.__dR(),t.__dS(t.__dF,"add"),_.task&&_.task(t.__dR,[],t)},__dI:function(t,e){e=this.id+"_"+e,t.attr("id",e+"_table");var i=t.parent("div");return i.attr(e,e),i},__dR:function(){var t=this,e=t.__dG;t.__dK;if(e){t.__dT();var i=t.__dL;i.addClass("_zs_gallerykh"),i.css("left",e.outerWidth()),t.__dU(),t.__dV()}t.__dW(),t.__dX(),t.__dY()},__dX:function(){var t,e,i=this,_=i.id,r=i.__dH;if(i.__bL?(t=i.__bL,e=function(){i.__dZ(t)}):(t=l(window),e=function(){i.__e_(t)}),r&&r.length>0&&r.hasClass("_zs_gallerykj")){i.__ea=!0;var s=i.__dL,a=i.__dK,o=s.width(),d=a.width(),n=l("#"+_+"_scrollbar");if(n&&n.length)n.css({width:o}),n.find("._zs_galleryki").width(d);else{var h='<div id="'+_+'_scrollbar" class="_zs_gallerykg" style="width:'+o+'px;"><div class="_zs_galleryki" style="width:'+d+'px;"><div><div>';s.after(l(h)),n=l("#"+_+"_scrollbar")}var c=function(){s[0].scrollLeft=n[0].scrollLeft},f=function(){var t=s[0].scrollLeft;n[0].scrollLeft=t,i.__eb=t};n.off("scroll",c).on("scroll",c),s.off("scroll",f).on("scroll",f),i.on("destroy",function(){t.off("scroll.custombar",e)}),t.off("scroll.custombar",e).on("scroll.custombar",e),e(),i.__eb&&(s[0].scrollLeft=i.__eb,n[0].scrollLeft=i.__eb)}else{i.__ea=!1;var g=l("#"+_+"_scrollbar");g&&g.length&&g.remove()}},__dY:function(){var t=this,e=t.__a,i=t.__dM,_=t.__dJ;if(t.__dN)if(t.__bL){var r=t.__bL,s=function(){var i=r.scrollTop(),_=e.height()-r.height();i>=0&&i<=_?t.__ec(r,i):t.__ed(r)};t.on("destroy",function(){r.off("scroll.customsticky",s)}),r.on("scroll.customsticky",s),s()}else{var a=l(window),o=t.__dM.height(),d=+t.__dP,n=function(){var i=a.scrollTop(),_=e.offset().top-d,l=_+e.height()-o;i>=_&&i<=l?t.__ec(a,i-_):t.__ed(a)};t.on("destroy",function(){a.off("scroll.sticky")}),t.__dO?a.on("scroll.sticky",function(){t.__ed(a),clearTimeout(t.__ee),t.__ee=setTimeout(t.wrapAsync(function(){var l=a.scrollTop(),r=e.offset().top-d,s=r+e.height()-o;if(l>=r&&l<=s){t.__ec(a,l-r-o);i.animate({top:l-r},200),_&&_.animate({top:l-r},200)}else t.__ed(a)}),250)}):a.on("scroll.sticky",n),n()}},__ec:function(t,e){var i=this.__dL,_=this.__dM,l=this.__dH,r=this.__dJ,s=_.height();i.css({paddingTop:s}),_.css({position:"absolute",zIndex:80,top:e}),r&&(l.css({paddingTop:s}),r.css({position:"absolute",zIndex:80,top:e}))},__ed:function(t){var e=this.__dL,i=this.__dM,_=this.__dH,l=this.__dJ;e.css({paddingTop:0}),i.css({position:"initial",zIndex:"auto",top:"auto"}),l&&(_.css({paddingTop:0}),l.css({position:"initial",zIndex:"auto",top:"auto"}))},__dW:function(){var t=function(t){var e=t.find("tbody>tr"),i=e.length,_=t.find("thead>tr"),r=[];if(i>0){for(var s=t.find("tbody>tr:first-child>td"),a=0;a<s.length;a++)for(var o=+(u=s.eq(a)).attr("colspan")||1,d=u.outerWidth(),n=0;n<o;n++)r.push(d/o);for(a=0;a<i;a++){var h=l(e[a]).find("td"),c=0;for(n=0;n<h.length;n++){o=+(u=h.eq(n)).attr("colspan")||1,d=0;for(var f=0;f<o;f++)d+=r[f+c];u.css("width",d),c+=o}}}else{var g=t.find("thead>tr:first-child>th");for(a=0;a<g.length;a++){var v=g.eq(a);for(o=+v.attr("colspan")||1,d=v.outerWidth(),n=0;n<o;n++)r.push(d/o)}}var x=[];for(a=0;a<_.length;a++){var b=l(_[a]).find("th"),p=(c=0,[]);for(n=0;n<b.length;n++){o=+(u=b.eq(n)).attr("colspan")||1;var u,m=+u.attr("rowspan")||1;p.push({x:c,y:a,colspan:o,rowspan:m,left:u.offset().left}),c+=o}x.push(p)}for(var w=0;w<x.length-1;w++){p=x[w];for(var y=0;y<p.length;y++){var k=p[y];if(k.rowspan>1)for(var z=w+1;z<x.length&&k.rowspan>z-w;z++)for(var L=x[z],T=0;T<L.length;T++){var K=L[T];K.left>k.left&&(K.x+=k.colspan)}}}for(a=0;a<_.length;a++){for(b=l(_[a]).find("th"),n=0;n<b.length;n++){d=0;var I=x[a][n];for(f=0;f<I.colspan;f++)d+=r[I.x+f];b.eq(n).css("width",d)}x.push(p)}};t(this.__dK);var e=this.__dG;e&&t(e)},__ef:function(t){var e=t.find("thead>tr:first-child>th"),i=t.attr("width");if(!i){i=0;for(var _=e.length;_--;){var l,s=e.eq(_),a=120,o=s.attr("style");if(o)(l=o.match(r))&&(a=parseInt(l[1]));else a=(l=s.attr("width"))?+l:s.outerWidth();i+=a}}return+i},__dT:function(){var t=this.__dG,e=this.__dH,i=this.__ef(t);t.css("width",i),t.find("thead").css("width",i),e.css("width",t.outerWidth())},__dU:function(){var t=this,e=t.__a,i=t.__dK,_=t.__dG,l=e.width()-_.outerWidth(),r=t.__ef(i),s=t.__dH;r>l?(i.css("width",r),i.find("thead").css("width",r),s.css({position:"relative","z-index":2}),s.addClass("_zs_gallerykj")):(i.css("width",l),i.find("thead").css("width",l),s.removeClass("_zs_gallerykj"))},__dV:function(){for(var t=this.__dK,e=this.__dG,i=t.find("tbody>tr"),_=e.find("tbody>tr"),r=0;r<_.length;r++){var s=Math.max(l(_[r]).height(),l(i[r]).height());l(_[r]).height(s),l(i[r]).height(s)}var a=t.find("thead>tr"),o=e.find("thead>tr"),d=function(t){for(var e=0,i=0;i<t.length;i++)e+=l(t[i]).height();return e},n=Math.max(d(a),d(o));1==a.length&&a.height(n),1==o.length&&o.height(n)},"$doc<htmlchanged>":function(t){this.owner&&this.owner.pId==t.vId&&this.__eg()},"$doc<navslidend,tableresize>":function(t){this.__eg()},"$win<resize>":function(t){this.__eg()},__eg:function(){this.__eh(),_.task&&_.task(this.__eh,[],this)},__eh:function(){var t=this;t.__dG&&(t.__dU(),t.__dV(),t.__dX()),t.__dW()},__dS:function(t,e){var i=this,_=i.__dQ,l=i.__dK.find("tbody>tr");if(0!=l.length){e=e+"Class";var r=l.eq(t);r&&r.length&&"none"!=r.css("display")||(t=0,i.__dF=t,i.__a.attr("data-hover",t),r=l.eq(t)),r[e](_);var s=r.next(".operation-tr"),a=s&&s.length;a&&s[e]("operation-tr-open");var o=i.__dG;if(o){var d=o.find("tbody>tr").eq(t);if(d[e](_),a)d.next(".operation-tr")[e]("operation-tr-open")}}},"$tbody>tr<mouseover>":function(t){var e=this,i=(e.__dQ,t.eventTarget);if(!_.inside(t.relatedTarget,i)&&!l(i).hasClass("operation-tr")){e.__dS(e.__dF,"remove");var r=l(i).parents("tbody").find("tr").index(i);e.__dF=r,e.__dS(r,"add")}},__dZ:function(t){if(this.__ea){var e,i=t.scrollTop(),_=this.__dH,r=this.__dK,s=l("#"+this.id+"_scrollbar"),a=s.find("._zs_galleryki"),o=s.height(),d=(a.height(),_.width());e=r.height()>t.height()?t.height()-o+i:t.height()-o,s.css({display:"block",position:"absolute",left:d,top:e})}},__e_:function(t){if(this.__ea){var e,i=t.scrollTop(),_=t.height(),r=this.__dH,s=this.__dK.find("tbody"),a=l("#"+this.id+"_scrollbar"),o=a.find("._zs_galleryki"),d=a.height(),n=o.height(),h=s.offset().top,c=h+s.height()+d-n;if(c<i||h>i+_)a.css({display:"none"});else if(i<=(e=c)&&e<=i+_){var f=r.width();a.css({display:"block",position:"absolute",left:f,bottom:n-d})}else{f=r.offset().left+r.width();a.css({display:"block",position:"fixed",left:f,bottom:0})}}}})});