define("mx-dropdown/bd",["magix","$","../mx-util/monitor","../mx-medusa/util"],(t,e,n)=>{var i=t("magix"),a=t("$"),r=t("../mx-util/monitor"),_=t("../mx-medusa/util");n.exports=i.View.extend({tmpl:function(t,e,n,i,a,r,_,o){if(n||(n=t),!a){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,l=function(t){return"&"+u[t]+";"};a=function(t){return""+(null==t?"":t)},i=function(t){return a(t).replace(s,l)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return d[t]},p=/[!')(*]/g;r=function(t){return encodeURIComponent(a(t)).replace(p,c)}}if(!o){var b=/[\\'"]/g;o=function(t){return a(t).replace(b,"\\$&")}}var f="",m=t.viewId,h=t.expand,x=t.selectedText;return f+='<div id="toggle_'+i(m)+'" class="mx-trigger ',h&&(f+=" mx-trigger-open "),f+='"><span mxa="_zs_gallerybg:_" class="mx-trigger-label}">'+i(x)+'</span><span mxs="_zs_gallerybg:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div>'},init:function(t){var e=this;r.__h();var n=a("#"+e.id);e.__a=n;var o=t.selected;a.isArray(o)?e.__bK="array":o=o?(o+"").split(","):[];var u,s=t.textKey||"text",l=t.valueKey||"value",d=t.list||[],c=t.parents||[],p=t.parentKey||"pValue";if("object"==typeof d[0])if(d=d.map(function(t){return i.mix(t,{text:t[s],value:t[l],pValue:t[p]}),t}),0==c.length)u=!1,c=[{text:"组",value:"all",list:d}];else{u=!0;var b={};d.forEach(function(t){var e=t.pValue;b[e]=b[e]||[],b[e].push(t)});for(var f=0;f<c.length;f++){var m=c[f],h=m.value;m.list=b[h]||[],0==m.list.length&&m.splice(f--,1)}}else u=!1,c=[{text:"组",value:"all",list:d=d.map(function(t){return{text:t,value:t}})}];var x=t.multiple+""=="true",g=i.toMap(d,l),v=[];if(o.forEach(function(t){var e=g[o];a.isEmptyObject(e)||v.push(e)}),!x&&0==v.length){v=[d[0]];for(f=0;f<d.length;f++)if(!d[f].disabled){v=[d[f]];break}}switch(e.__k=t.disabled+""=="true"||a("#"+e.id)[0].hasAttribute("mx-disabled"),e.__bL=t.scrollWrapper,e.__bM=!1,e.updater.set({viewId:e.id,searchbox:t.searchbox+""=="true",multiple:x,emptyText:t.emptyText||_.choose,hasGroups:u,parents:c,selectedItems:v,expand:!1,height:t.height||250,spm:e.__a.attr("data-spm-click")||""}),e.on("destroy",function(){e.__a.off("mouseenter mouseleave"),e.__bN&&clearTimeout(e.__bN),e.__bO&&clearTimeout(e.__bO),a("#dd_bd_"+e.id).remove(),r.__i(e),r.__j()}),e.__bP=t.triggerType||"click",e.__bP){case"click":n.on("click",function(){e.__bN=setTimeout(e.wrapAsync(function(){e.updater.get("expand")?e.__n():e.__k||e.__o()}),e.constants.showDelay)});break;case"hover":n.hover(function(){clearTimeout(e.__bO),e.__bN=setTimeout(e.wrapAsync(function(){e.__k||e.__o()}),e.constants.showDelay)},function(){e.__bQ()})}e.bindScroll()},render:function(){this.updater.digest({}),this.__bR()},__bR:function(t){var e,n=this,i=n.updater.get(),a=i.selectedItems,r=i.emptyText,_=[],o=[];a.forEach(function(t){_.push(t.text),o.push(t.value)}),n.updater.digest({selectedText:_.join(",")||r}),e="array"==n.__bK?o:o.join(","),n.__a.val(e),t&&n.__a.trigger({type:"change",selected:e,values:o,texts:_,value:o.join(","),text:_.join(",")})},__bU:function(){var t=this,e=a("#toggle_"+t.id).outerWidth(),n=t.id,i='<div class="mx-output mx-output-bottom" id="dd_bd_'+n+'"\n                style="min-width: '+e+"px; max-width: "+2*e+'px;"></div>';a(document.body).append(i);var r=t.owner.mountVframe("dd_bd_"+n,"");r.on("created",function(){var e=t.__bS();"hover"==t.__bP&&e.hover(function(){clearTimeout(t.__bO)},function(){t.__bQ()})}),t.__bT=r},__l:function(t){return i.inside(t,this.id)||i.inside(t,"dd_bd_"+this.id)},__o:function(){var t=this;clearTimeout(t.__bN),t.__bM||(t.__bM=!0,t.__bU());var e=t.updater.get();e.expand||(t.__bT.mountView("mx-dropdown/content",{data:e,submit:function(e){t.__n(),t.updater.set(e),t.__bR(!0)},cancel:function(){t.__n()}}),t.updater.digest({expand:!0}),t.__bS().addClass("mx-output-open"),r.__q(t))},__bQ:function(){var t=this;clearTimeout(t.__bN),clearTimeout(t.__bO),t.__bO=setTimeout(t.wrapAsync(function(){t.__n()}),t.constants.hideDelay),r.__i(t)},__n:function(){var t=this;(clearTimeout(t.__bO),t.updater.get("expand"))&&(t.updater.digest({expand:!1}),a("#dd_bd_"+t.id).removeClass("mx-output-open"),r.__i(t))},bindScroll:function(){var t=this,e=t.__bL;e&&("string"!=typeof e||/^#/.test(e)||/^\./.test(e)?a(e):a("#"+e)).scroll(function(){t.updater.get("expand")&&t.__bS()})},__bS:function(){var t=this.__a,e=a("#dd_bd_"+this.id);if(e&&e.length){var n=t.outerWidth(),i=t.outerHeight(),r=t.offset(),_=e.outerWidth(),o=(e.outerHeight(),r.top+i);return left=r.left-(_-n)/2,e.css({left:left,top:o}),e}},"$win<scroll>":function(t){this.updater.get("expand")&&this.__bS()},"$doc<dialogScolll>":function(t){this.updater.get("expand")&&this.__bS()},constants:{showDelay:100,hideDelay:200}})});