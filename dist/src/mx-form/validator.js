define("mx-form/validator",["$","magix","mx-form/rule","./util"],(e,r,l)=>{var t=e("$"),a=e("magix"),o=e("mx-form/rule"),i=e("./util");a.applyStyle("_zs_galleryV","body ._zs_gallerygi,body ._zs_gallerygi:focus,body ._zs_gallerygi:focus .mx-trigger,body ._zs_gallerygi:hover,body ._zs_gallerygi:hover .mx-trigger,body ._zs_gallerygi .mx-trigger,html ._zs_gallerygi,html ._zs_gallerygi:focus,html ._zs_gallerygi:focus .mx-trigger,html ._zs_gallerygi:hover,html ._zs_gallerygi:hover .mx-trigger,html ._zs_gallerygi .mx-trigger{border-color:var(--color-red)!important}body ._zs_gallerygj,body ._zs_gallerygj:focus,body ._zs_gallerygj:focus .mx-trigger,body ._zs_gallerygj:hover,body ._zs_gallerygj:hover .mx-trigger,body ._zs_gallerygj .mx-trigger,html ._zs_gallerygj,html ._zs_gallerygj:focus,html ._zs_gallerygj:focus .mx-trigger,html ._zs_gallerygj:hover,html ._zs_gallerygj:hover .mx-trigger,html ._zs_gallerygj .mx-trigger{border-color:var(--color-warn)!important}body ._zs_gallerygk,body ._zs_gallerygl,html ._zs_gallerygk,html ._zs_gallerygl{display:none;position:absolute;white-space:nowrap;word-wrap:normal;font-size:var(--font-size)}body ._zs_gallerygk,html ._zs_gallerygk{color:var(--color-red)}body ._zs_gallerygl,html ._zs_gallerygl{color:var(--color-warn)}");var s=function(e,r,l){var t,i,s,g=!0;for(var n in r)if(a.has(r,n)){if(o[n]){var _=o[n](l,i=r[n]);g=_.valid,s=_.tip}else g=!0,s="过滤掉不在校验规则内的";if(!g){t=n;break}}return{type:e,placement:r.placement,valid:g,action:t,rule:i,val:l,tip:s}},g=function(e){var r=t('[mxe="'+e+'"]');r.removeClass("_zs_gallerygj _zs_gallerygi"),r.each(function(e,r){var l=(r=t(r)).attr("id")+"_msg";t("#"+l).hide()})},n=function(e,r,l){var o=t('[mxe="'+r+'"]');if(o.length){switch(e){case"warn":o.addClass("_zs_gallerygj").removeClass("_zs_gallerygi");break;case"error":o.addClass("_zs_gallerygi").removeClass("_zs_gallerygj")}return"checkbox"!=o.prop("type")&&"radio"!=o.prop("type")||(o=t(o[0])),o.each(function(r,o){var i=(o=t(o)).parent(),s=o.attr("id");s||(s=a.guid(),o.attr("id",s));var g=s+"_msg",n=t("#"+g);n.length||("static"==i.css("position")&&i.css({position:"relative"}),o.after('<div id="'+g+'"/>'),n=t("#"+g));switch(e){case"warn":n[0].className="_zs_gallerygl";break;case"error":n[0].className="_zs_gallerygk"}n.html(l.tip).show();var _=l.placement||"bottom",c=o.outerWidth(),m=o.outerHeight(),f=o.offset(),d=i.offset();switch(_){case"right":n.css({lineHeight:"var(--input-height)",top:f.top-d.top,left:f.left-d.left+c+10});break;case"bottom":n.css({lineHeight:"18px",top:f.top-d.top+m,left:f.left-d.left+10})}}),!0}};l.exports={isValid:function(e,r){e=a.mix({element:null,scrollIntoView:!0,checkSubs:!0},e||{});var l,o=this,i=!0,s=o.owner.children(),g=!1;if(r||(r=[],g=!0),e.checkSubs)for(var n=0;n<s.length;n++){!1===a.Vframe.get(s[n]).invoke("isValid",[r])&&(i=!1)}e.element?(l="string"!=typeof e.element||/^#/.test(e.element)||/^\./.test(e.element)?t(e.element):t("#"+e.element)).attr("mxe")||(l=l.find('[mxe^="'+o.id+'"]')):l=t("#"+o.id+' [mxe^="'+o.id+'"]');var _=[];l.each(function(e,r){o.__cc(t(r)),_.push(t(r).attr("mxe"))});var c=o.updater.$form;if(c)for(var m=0;m<_.length;m++){var f=_[m];if(c[f]&&"error"==c[f].type){r.push(f),i=!1;break}}if(g&&e.scrollIntoView){for(var d=1e20,h=void 0,y=r.length,p=void 0,v=void 0;y--;)(p=t('[mxe="'+r[y]+'"]')).length&&(v=p.offset()).top<d&&(h=p[0],d=v.top);h&&(h.scrollIntoViewIfNeeded?h.scrollIntoViewIfNeeded():h.scrollIntoView&&h.scrollIntoView())}return i},"$[mxc]<keyup,change,focusout>":function(e){var r=t(e.eventTarget),l=r.attr("mxe");l&&l.startsWith(this.id)&&this.__cc(r)},__cc:function(e){for(var r=this.updater,l=r.$form||(r.$form={}),o=e.attr("mxc"),_=!0,c=0,m=r.parse(o);c<m.length;c++){for(var f=m[c],d=f.f||{},h=f.p.split("."),y=h.pop(),p=void 0,v=r.get();v&&h.length;)v=v[h.shift()];if("checkbox"==e.prop("type")){var u=v[y],z=e.prop("checked");if(!0===u||!1===u)p=z;else if(p=e.val(),t.isArray(u)){var x=e.prop("name");if(x)u=[],i.addCheckbox(x,u,d);else{var b=i.indexOf(u,p);z?-1===b&&u.push(p):b>-1&&u.splice(b,1)}p=u}else t.isPlainObject(u)?(z?u[p]=p:delete u[p],p=u):p=z?p:""}else if("radio"==e.prop("type")){var w=e.prop("name");p=t("input[name="+w+"]:checked").val()}else p=e.val();if(_){var k=s("error",d,p),j=e.attr("mxe");if(k.valid){if(delete l[j],g(j),a.has(d,"warn")){var V=s("warn",d.warn,p);V.valid?(delete l[j],g(j)):(l[j]=V,n("warn",j,V))}}else l[j]=k,_=!1,n("error",j,k)}}},clearValid:function(){var e=this.updater.$form;if(e)for(var r in e)g(r);this.updater.$form={}},"$doc<htmlchanged>":function(e){var r=this.updater.$form;if(e.vId==this.id&&r)for(var l in r){var t=r[l];n(t.type,l,t)||delete r[l]}}}});