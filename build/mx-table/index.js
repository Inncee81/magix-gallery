define("mx-table/index",["magix","$"],(e,t,l)=>{var a=e("magix"),i=e("$"),r=/width\s*:\s*(\d+)px/;a.applyStyle("_zs_gallery_mx-table_index_",'[mx-view*="mx-table/index"],\n[mx-view*="mx-table/excel"] {\n  position: relative;\n}\n[mx-view*="mx-table/index"] table,\n[mx-view*="mx-table/excel"] table {\n  table-layout: auto;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-scrollbar,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-wrapper {\n  top: 0;\n  z-index: 1;\n  -ms-overflow-style: none;\n  overflow: auto;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar {\n  display: none;\n  width: 0;\n  height: 0;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar-thumb,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-scrollbar,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-scrollbar {\n  display: none;\n  z-index: 2;\n  opacity: 0.3;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-scrollbar ._zs_gallery_mx-table_index_-bar,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-scrollbar ._zs_gallery_mx-table_index_-bar {\n  height: 1px;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar {\n  width: 14px;\n  height: 14px;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar-thumb,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--color-brand);\n  border-radius: 7px;\n}\n[mx-view*="mx-table/index"] ._zs_gallery_mx-table_index_-left-shadow,\n[mx-view*="mx-table/excel"] ._zs_gallery_mx-table_index_-left-shadow {\n  box-shadow: 3px 0 4px rgba(0, 0, 0, 0.06);\n}\n'),l.exports=a.View.extend({init:function(e){var t=this;t["@{hover.index}"]=0;var l=i("#"+t.id);t["@{owner.node}"]=l;var a=l.find('table[left="true"]');a&&a.length>0?(t["@{table.left}"]=a,t["@{table.left.wrapper}"]=t["@{wrapper.get}"](a,"left"),t["@{table.left.thead}"]=a.find("thead"),t["@{table.main}"]=l.find('table[center="true"]')):t["@{table.main}"]=l.find("table"),t["@{table.main.wrapper}"]=t["@{wrapper.get}"](t["@{table.main}"],"main"),t["@{table.main.thead}"]=t["@{table.main}"].find("thead"),t["@{need.sticky}"]=e.sticky+""=="true",t["@{sticky.end}"]=e.stickyEnd+""=="true",t["@{sticky.interval}"]=e.stickyInterval||0,t["@{hover.class}"]=e.rowHoverClass||"hover-tr",e.scrollWrapper&&(t["@{scroll.wrapper}"]=i("#"+e.scrollWrapper)),t.assign()},assign:function(){return!0},render:function(){var e=this;e["@{table.init}"](),e["@{toggle.hover.state}"](e["@{hover.index}"],"add"),a.task&&a.task(e["@{table.init}"],[],e)},"@{wrapper.get}":function(e,t){t=this.id+"_"+t,e.attr("id",t+"_table");var l=e.parent("div");return l.attr(t,t),l},"@{table.init}":function(){var e=this,t=e["@{table.left}"];e["@{table.main}"];if(t){e["@{left.table.sync.width}"]();var l=e["@{table.main.wrapper}"];l.addClass("_zs_gallery_mx-table_index_-wrapper"),l.css("left",t.outerWidth()),e["@{main.table.sync.width}"](),e["@{table.sync.height}"]()}e["@{table.sync.th.width}"](),e["@{scroll.init}"](),e["@{sticky.init}"]()},"@{scroll.init}":function(){var e,t,l=this,a=l.id,r=l["@{table.left.wrapper}"];if(l["@{scroll.wrapper}"]?(e=l["@{scroll.wrapper}"],t=function(){l["@{sync.scroll.pos.custom}"](e)}):(e=i(window),t=function(){l["@{sync.scroll.pos.win}"](e)}),r&&r.length>0&&r.hasClass("_zs_gallery_mx-table_index_-left-shadow")){l["@{need.scroll}"]=!0;var n=l["@{table.main.wrapper}"],s=l["@{table.main}"],o=n.width(),c=s.width(),d=i("#"+a+"_scrollbar");if(d&&d.length)d.css({width:o}),d.find("._zs_gallery_mx-table_index_-bar").width(c);else{var h='<div id="'+a+'_scrollbar" class="_zs_gallery_mx-table_index_-scrollbar" style="width:'+o+'px;"><div class="_zs_gallery_mx-table_index_-bar" style="width:'+c+'px;"><div><div>';n.after(i(h)),d=i("#"+a+"_scrollbar")}var b=function(){n[0].scrollLeft=d[0].scrollLeft},f=function(){var e=n[0].scrollLeft;d[0].scrollLeft=e,l["@{scroll.left.back}"]=e};d.off("scroll",b).on("scroll",b),n.off("scroll",f).on("scroll",f),l.on("destroy",function(){e.off("scroll.custombar",t)}),e.off("scroll.custombar",t).on("scroll.custombar",t),t(),l["@{scroll.left.back}"]&&(n[0].scrollLeft=l["@{scroll.left.back}"],d[0].scrollLeft=l["@{scroll.left.back}"])}else{l["@{need.scroll}"]=!1;var x=i("#"+a+"_scrollbar");x&&x.length&&x.remove()}},"@{sticky.init}":function(){var e=this,t=e["@{owner.node}"],l=e["@{table.main.thead}"],a=e["@{table.left.thead}"];if(e["@{need.sticky}"])if(e["@{scroll.wrapper}"]){var r=e["@{scroll.wrapper}"],n=function(){var l=r.scrollTop(),a=t.height()-r.height();l>=0&&l<=a?e["@{sync.sticky.pos}"](r,l):e["@{sync.sticky.pos.recover}"](r)};e.on("destroy",function(){r.off("scroll.customsticky",n)}),r.on("scroll.customsticky",n),n()}else{var s=i(window),o=e["@{table.main.thead}"].height(),c=+e["@{sticky.interval}"],d=function(){var l=s.scrollTop(),a=t.offset().top-c,i=a+t.height()-o;l>=a&&l<=i?e["@{sync.sticky.pos}"](s,l-a):e["@{sync.sticky.pos.recover}"](s)};e.on("destroy",function(){s.off("scroll.sticky")}),e["@{sticky.end}"]?s.on("scroll.sticky",function(){e["@{sync.sticky.pos.recover}"](s),clearTimeout(e["@{sticky.end.timer}"]),e["@{sticky.end.timer}"]=setTimeout(e.wrapAsync(function(){var i=s.scrollTop(),r=t.offset().top-c,n=r+t.height()-o;if(i>=r&&i<=n){e["@{sync.sticky.pos}"](s,i-r-o);l.animate({top:i-r},200),a&&a.animate({top:i-r},200)}else e["@{sync.sticky.pos.recover}"](s)}),250)}):s.on("scroll.sticky",d),d()}},"@{sync.sticky.pos}":function(e,t){var l=this["@{table.main.wrapper}"],a=this["@{table.main.thead}"],i=this["@{table.left.wrapper}"],r=this["@{table.left.thead}"],n=a.height();l.css({paddingTop:n}),a.css({position:"absolute",zIndex:80,top:t}),r&&(i.css({paddingTop:n}),r.css({position:"absolute",zIndex:80,top:t}))},"@{sync.sticky.pos.recover}":function(e){var t=this["@{table.main.wrapper}"],l=this["@{table.main.thead}"],a=this["@{table.left.wrapper}"],i=this["@{table.left.thead}"];t.css({paddingTop:0}),l.css({position:"initial",zIndex:"auto",top:"auto"}),i&&(a.css({paddingTop:0}),i.css({position:"initial",zIndex:"auto",top:"auto"}))},"@{table.sync.th.width}":function(){var e=function(e){var t=e.find("tbody>tr"),l=t.length,a=e.find("thead>tr"),r=[];if(l>0){for(var n=e.find("tbody>tr:first-child>td"),s=0;s<n.length;s++)for(var o=+(v=n.eq(s)).attr("colspan")||1,c=v.outerWidth(),d=0;d<o;d++)r.push(c/o);for(s=0;s<l;s++){var h=i(t[s]).find("td"),b=0;for(d=0;d<h.length;d++){o=+(v=h.eq(d)).attr("colspan")||1,c=0;for(var f=0;f<o;f++)c+=r[f+b];v.css("width",c),b+=o}}}else{var x=e.find("thead>tr:first-child>th");for(s=0;s<x.length;s++){var _=x.eq(s);for(o=+_.attr("colspan")||1,c=_.outerWidth(),d=0;d<o;d++)r.push(c/o)}}var p=[];for(s=0;s<a.length;s++){var m=i(a[s]).find("th"),g=(b=0,[]);for(d=0;d<m.length;d++){o=+(v=m.eq(d)).attr("colspan")||1;var v,w=+v.attr("rowspan")||1;g.push({x:b,y:s,colspan:o,rowspan:w,left:v.offset().left}),b+=o}p.push(g)}for(var y=0;y<p.length-1;y++){g=p[y];for(var u=0;u<g.length;u++){var k=g[u];if(k.rowspan>1)for(var z=y+1;z<p.length&&k.rowspan>z-y;z++)for(var T=p[z],q=0;q<T.length;q++){var I=T[q];I.left>k.left&&(I.x+=k.colspan)}}}for(s=0;s<a.length;s++){for(m=i(a[s]).find("th"),d=0;d<m.length;d++){c=0;var W=p[s][d];for(f=0;f<W.colspan;f++)c+=r[W.x+f];m.eq(d).css("width",c)}p.push(g)}};e(this["@{table.main}"]);var t=this["@{table.left}"];t&&e(t)},"@{table.width.get}":function(e){var t=e.find("thead>tr:first-child>th"),l=e.attr("width");if(!l){l=0;for(var a=t.length;a--;){var i,n=t.eq(a),s=120,o=n.attr("style");if(o)(i=o.match(r))&&(s=parseInt(i[1]));else s=(i=n.attr("width"))?+i:n.outerWidth();l+=s}}return+l},"@{left.table.sync.width}":function(){var e=this["@{table.left}"],t=this["@{table.left.wrapper}"],l=this["@{table.width.get}"](e);e.css("width",l),e.find("thead").css("width",l),t.css("width",e.outerWidth())},"@{main.table.sync.width}":function(){var e=this,t=e["@{owner.node}"],l=e["@{table.main}"],a=e["@{table.left}"],i=t.width()-a.outerWidth(),r=e["@{table.width.get}"](l),n=e["@{table.left.wrapper}"];r>i?(l.css("width",r),l.find("thead").css("width",r),n.css({position:"relative","z-index":2}),n.addClass("_zs_gallery_mx-table_index_-left-shadow")):(l.css("width",i),l.find("thead").css("width",i),n.removeClass("_zs_gallery_mx-table_index_-left-shadow"))},"@{table.sync.height}":function(){for(var e=this["@{table.main}"],t=this["@{table.left}"],l=e.find("tbody>tr"),a=t.find("tbody>tr"),r=0;r<a.length;r++){var n=Math.max(i(a[r]).height(),i(l[r]).height());i(a[r]).height(n),i(l[r]).height(n)}var s=e.find("thead>tr"),o=t.find("thead>tr"),c=function(e){for(var t=0,l=0;l<e.length;l++)t+=i(e[l]).height();return t},d=Math.max(c(s),c(o));1==s.length&&s.height(d),1==o.length&&o.height(d)},"$doc<htmlchanged>":function(e){this.owner&&this.owner.pId==e.vId&&this["@{trigger.rechange}"]()},"$doc<navslidend,tableresize>":function(e){this["@{trigger.rechange}"]()},"$win<resize>":function(e){this["@{trigger.rechange}"]()},"@{trigger.rechange}":function(){this["@{rechange}"](),a.task&&a.task(this["@{rechange}"],[],this)},"@{rechange}":function(){var e=this;e["@{table.left}"]&&(e["@{main.table.sync.width}"](),e["@{table.sync.height}"](),e["@{scroll.init}"]()),e["@{table.sync.th.width}"]()},"@{toggle.hover.state}":function(e,t){var l=this,a=l["@{hover.class}"],i=l["@{table.main}"].find("tbody>tr");if(0!=i.length){t=t+"Class";var r=i.eq(e);r&&r.length&&"none"!=r.css("display")||(e=0,l["@{hover.index}"]=e,l["@{owner.node}"].attr("data-hover",e),r=i.eq(e)),r[t](a);var n=r.next(".operation-tr"),s=n&&n.length;s&&n[t]("operation-tr-open");var o=l["@{table.left}"];if(o){var c=o.find("tbody>tr").eq(e);if(c[t](a),s)c.next(".operation-tr")[t]("operation-tr-open")}}},"$tbody>tr<mouseover>":function(e){var t=this,l=(t["@{hover.class}"],e.eventTarget);if(!a.inside(e.relatedTarget,l)&&!i(l).hasClass("operation-tr")){t["@{toggle.hover.state}"](t["@{hover.index}"],"remove");var r=i(l).parents("tbody").find("tr").index(l);t["@{hover.index}"]=r,t["@{toggle.hover.state}"](r,"add")}},"@{sync.scroll.pos.custom}":function(e){if(this["@{need.scroll}"]){var t,l=e.scrollTop(),a=this["@{table.left.wrapper}"],r=this["@{table.main}"],n=i("#"+this.id+"_scrollbar"),s=n.find("._zs_gallery_mx-table_index_-bar"),o=n.height(),c=(s.height(),a.width());t=r.height()>e.height()?e.height()-o+l:e.height()-o,n.css({display:"block",position:"absolute",left:c,top:t})}},"@{sync.scroll.pos.win}":function(e){if(this["@{need.scroll}"]){var t,l=e.scrollTop(),a=e.height(),r=this["@{table.left.wrapper}"],n=this["@{table.main}"].find("tbody"),s=i("#"+this.id+"_scrollbar"),o=s.find("._zs_gallery_mx-table_index_-bar"),c=s.height(),d=o.height(),h=n.offset().top,b=h+n.height()+c-d;if(b<l||h>l+a)s.css({display:"none"});else if(l<=(t=b)&&t<=l+a){var f=r.width();s.css({display:"block",position:"absolute",left:f,bottom:d-c})}else{f=r.offset().left+r.width();s.css({display:"block",position:"fixed",left:f,bottom:0})}}}})});