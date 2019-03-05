define("mx-table/index",["magix","$"],(e,t,i)=>{var _=e("magix"),l=e("$"),r=/width\s*:\s*(\d+)px/;_.applyStyle("_zs_galleryaD",'._zs_gallerymi{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-table/excel"],[mx-view*="mx-table/index"]{position:relative}[mx-view*="mx-table/excel"] table,[mx-view*="mx-table/index"] table{table-layout:auto}[mx-view*="mx-table/excel"] ._zs_gallerymj,[mx-view*="mx-table/excel"] ._zs_gallerymk,[mx-view*="mx-table/index"] ._zs_gallerymj,[mx-view*="mx-table/index"] ._zs_gallerymk{position:absolute;left:0;right:0;overflow-x:scroll;overflow-y:hidden}[mx-view*="mx-table/excel"] ._zs_gallerymk,[mx-view*="mx-table/index"] ._zs_gallerymk{top:0;z-index:1;-ms-overflow-style:none;overflow:auto}[mx-view*="mx-table/excel"] ._zs_gallerymk::-webkit-scrollbar,[mx-view*="mx-table/index"] ._zs_gallerymk::-webkit-scrollbar{display:none;width:0;height:0}[mx-view*="mx-table/excel"] ._zs_gallerymk::-webkit-scrollbar-thumb,[mx-view*="mx-table/index"] ._zs_gallerymk::-webkit-scrollbar-thumb{background-color:transparent}[mx-view*="mx-table/excel"] ._zs_gallerymj,[mx-view*="mx-table/index"] ._zs_gallerymj{display:none;z-index:2}[mx-view*="mx-table/excel"] ._zs_gallerymj ._zs_galleryml,[mx-view*="mx-table/index"] ._zs_gallerymj ._zs_galleryml{height:10px}[mx-view*="mx-table/excel"] ._zs_gallerymj::-webkit-scrollbar,[mx-view*="mx-table/index"] ._zs_gallerymj::-webkit-scrollbar{width:14px;height:14px}[mx-view*="mx-table/excel"] ._zs_gallerymj::-webkit-scrollbar-thumb,[mx-view*="mx-table/index"] ._zs_gallerymj::-webkit-scrollbar-thumb{background-color:#d8e3ff;border-radius:7px}[mx-view*="mx-table/excel"] ._zs_gallerymm,[mx-view*="mx-table/index"] ._zs_gallerymm{position:absolute;top:0;left:0;z-index:2;background-color:#fff;width:auto}[mx-view*="mx-table/excel"] ._zs_gallerymn,[mx-view*="mx-table/index"] ._zs_gallerymn{box-shadow:3px 0 4px rgba(0,0,0,.06)}'),i.exports=_.View.extend({init:function(e){var t=this;t.__dL=0;var i=l("#"+t.id);t.__j=i;var _=i.find('table[left="true"]');_&&_.length>0?(t.__dM=_,t.__dN=t.__dO(_,"left"),t.__dP=_.find("thead"),t.__dQ=i.find('table[center="true"]')):t.__dQ=i.find("table"),t.__dR=t.__dO(t.__dQ,"main"),t.__dS=t.__dQ.find("thead"),t.__dT=e.sticky+""=="true",t.__dU=e.stickyInterval||0,t.__dV=e.rowHoverClass||"hover-tr",e.scrollWrapper&&(t.__bF=l("#"+e.scrollWrapper)),t.assign()},assign:function(){return!0},render:function(){this.__dW(),this.__dX(this.__dL,"add")},__dO:function(e,t){t=this.id+"_"+t,e.attr("id",t+"_table");var i=e.parent("div");return i.attr(t,t),i},__dW:function(){var e=this,t=e.__dM;e.__dQ;if(t){e.__dY();var i=e.__dR;i.addClass("_zs_gallerymk"),i.css("left",t.outerWidth()),e.__dZ(),e.__e_()}e.__ea(),e.__eb(),e.__ec()},__eb:function(){var e,t,i=this,_=i.id,r=i.__dN;if(i.__bF?(e=i.__bF,t=function(){i.__ed(e)}):(e=l(window),t=function(){i.__ee(e)}),r&&r.length>0&&r.hasClass("_zs_gallerymn")){i.__ef=!0;var a=i.__dR,s=i.__dQ,o=a.width(),d=s.width(),n=l("#"+_+"_scrollbar");if(n&&n.length)n.css({width:o}),n.find("._zs_galleryml").width(d);else{var h='<div id="'+_+'_scrollbar" class="_zs_gallerymj" style="width:'+o+'px;"><div class="_zs_galleryml" style="width:'+d+'px;"><div><div>';a.after(l(h)),n=l("#"+_+"_scrollbar")}var f=function(){a[0].scrollLeft=n[0].scrollLeft},c=function(){var e=a[0].scrollLeft;n[0].scrollLeft=e,i.__eg=e};n.off("scroll",f).on("scroll",f),a.off("scroll",c).on("scroll",c),i.on("destroy",function(){e.off("scroll.custombar",t)}),e.off("scroll.custombar",t).on("scroll.custombar",t),t(),i.__eg&&(a[0].scrollLeft=i.__eg,n[0].scrollLeft=i.__eg)}else{i.__ef=!1;var x=l("#"+_+"_scrollbar");x&&x.length&&x.remove()}},__ec:function(){var e,t,i=this;i.__dT&&(i.__bF?(e=i.__bF,t=function(){i.__eh(e)}):(e=l(window),t=function(){i.__ei(e)}),i.on("destroy",function(){e.off("scroll.customsticky",t)}),e.on("scroll.customsticky",t),i.__ej=i.__dS.height(),t())},__ea:function(){var e=function(e){var t=e.find("tbody>tr"),i=t.length,_=e.find("thead>tr"),r=[];if(i>0){for(var a=e.find("tbody>tr:first-child>td"),s=0;s<a.length;s++)for(var o=+(p=a.eq(s)).attr("colspan")||1,d=p.outerWidth(),n=0;n<o;n++)r.push(d/o);for(s=0;s<i;s++){var h=l(t[s]).find("td"),f=0;for(n=0;n<h.length;n++){o=+(p=h.eq(n)).attr("colspan")||1,d=0;for(var c=0;c<o;c++)d+=r[c+f];p.css("width",d),f+=o}}}else{var x=e.find("thead>tr:first-child>th");for(s=0;s<x.length;s++){var m=x.eq(s);for(o=+m.attr("colspan")||1,d=m.outerWidth(),n=0;n<o;n++)r.push(d/o)}}var v=[];for(s=0;s<_.length;s++){var g=l(_[s]).find("th"),b=(f=0,[]);for(n=0;n<g.length;n++){o=+(p=g.eq(n)).attr("colspan")||1;var p,u=+p.attr("rowspan")||1;b.push({x:f,y:s,colspan:o,rowspan:u,left:p.offset().left}),f+=o}v.push(b)}for(var w=0;w<v.length-1;w++){b=v[w];for(var y=0;y<b.length;y++){var z=b[y];if(z.rowspan>1)for(var k=w+1;k<v.length&&z.rowspan>k-w;k++)for(var j=v[k],T=0;T<j.length;T++){var Q=j[T];Q.left>z.left&&(Q.x+=z.colspan)}}}for(s=0;s<_.length;s++){for(g=l(_[s]).find("th"),n=0;n<g.length;n++){d=0;var L=v[s][n];for(c=0;c<L.colspan;c++)d+=r[L.x+c];g.eq(n).css("width",d)}v.push(b)}};e(this.__dQ);var t=this.__dM;t&&e(t)},__ek:function(e){var t=e.find("thead>tr:first-child>th"),i=e.attr("width");if(!i){i=0;for(var _=t.length;_--;){var l,a=t.eq(_),s=120,o=a.attr("style");if(o)(l=o.match(r))&&(s=parseInt(l[1]));else s=(l=a.attr("width"))?+l:a.outerWidth();i+=s}}return+i},__dY:function(){var e=this.__dM,t=this.__dN,i=this.__ek(e);e.css("width",i),e.find("thead").css("width",i),t.css("width",e.outerWidth())},__dZ:function(){var e=this,t=e.__j,i=e.__dQ,_=e.__dM,l=t.width()-_.outerWidth(),r=e.__ek(i),a=e.__dN;r>l?(i.css("width",r),i.find("thead").css("width",r),a.css({position:"relative","z-index":2}),a.addClass("_zs_gallerymn")):(i.css("width",l),i.find("thead").css("width",l),a.removeClass("_zs_gallerymn"))},__e_:function(){for(var e=this.__dQ,t=this.__dM,i=e.find("tbody>tr"),_=t.find("tbody>tr"),r=0;r<_.length;r++){var a=Math.max(l(_[r]).height(),l(i[r]).height());l(_[r]).height(a),l(i[r]).height(a)}var s=e.find("thead>tr"),o=t.find("thead>tr"),d=function(e){for(var t=0,i=0;i<e.length;i++)t+=l(e[i]).height();return t},n=Math.max(d(s),d(o));1==s.length&&s.height(n),1==o.length&&o.height(n)},"$doc<htmlchanged>":function(e){e.vId==this.owner.pId&&this.__el()},"$doc<navslidend,tableresize>":function(e){this.__el()},"$win<resize>":function(e){this.__el()},__el:function(){var e=this;e.__dM&&(e.__dZ(),e.__e_(),e.__eb()),e.__ea()},__dX:function(e,t){var i=this,_=i.__dV,l=i.__dQ.find("tbody>tr");if(0!=l.length){t=t+"Class";var r=l.eq(e);r&&r.length&&"none"!=r.css("display")||(e=0,i.__dL=e,i.__j.attr("data-hover",e),r=l.eq(e)),r[t](_);var a=r.next(".operation-tr"),s=a&&a.length;s&&(a[t]("operation-tr-open"),r[t]("next-operation-tr-open"));var o=i.__dM;if(o){var d=o.find("tbody>tr").eq(e);if(d[t](_),s)d.next(".operation-tr")[t]("operation-tr-open"),d[t]("next-operation-tr-open")}}},"$tbody>tr<mouseover>":function(e){var t=this,i=(t.__dV,e.eventTarget);if(!_.inside(e.relatedTarget,i)&&!l(i).hasClass("operation-tr")){t.__dX(t.__dL,"remove");var r=l(i).parents("tbody").find("tr").index(i);t.__dL=r,t.__dX(r,"add")}},__em:function(e,t,i){var _=this,l=_.__ej,r=_.__dR,a=_.__dS,s=_.__dN,o=_.__dP;e.height();t?(r.css({paddingTop:l}),a.css({position:"absolute",zIndex:80,top:i}),o&&(s.css({paddingTop:l}),o.css({position:"absolute",zIndex:80,top:i}))):(r.css({paddingTop:0}),a.css({position:"initial",zIndex:"auto",top:"auto"}),o&&(s.css({paddingTop:0}),o.css({position:"initial",zIndex:"auto",top:"auto"})))},__eh:function(e){var t=this;if(t.__dT){var i=e.scrollTop(),_=(t.__ej,t.__j.height()-e.height());i>=0&&i<=_?t.__em(e,!0,i):t.__em(e,!1)}},__ei:function(e){var t=this;if(t.__dT){var i=e.scrollTop(),_=t.__ej,l=t.__j,r=l.offset(),a=+t.__dU,s=r.top-a,o=s+l.height()-_;i>=s&&i<=o?t.__em(e,!0,i-s):t.__em(e,!1)}},__ed:function(e){if(this.__ef){var t,i=e.scrollTop(),_=this.__dN,r=this.__dQ,a=l("#"+this.id+"_scrollbar"),s=a.find("._zs_galleryml"),o=a.height(),d=(s.height(),_.width());t=r.height()>e.height()?e.height()-o+i:e.height()-o,a.css({display:"block",position:"absolute",left:d,top:t})}},__ee:function(e){if(this.__ef){var t,i=e.scrollTop(),_=e.height(),r=this.__dN,a=this.__dQ.find("tbody"),s=l("#"+this.id+"_scrollbar"),o=s.find("._zs_galleryml"),d=s.height(),n=o.height(),h=a.offset().top,f=h+a.height()+d-n;if(f<i||h>i+_)s.css({display:"none"});else if(i<=(t=f)&&t<=i+_){var c=r.width();s.css({display:"block",position:"absolute",left:c,bottom:n-d})}else{c=r.offset().left+r.width();s.css({display:"block",position:"fixed",left:c,bottom:0})}}}})});