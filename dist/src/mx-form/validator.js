define("mx-form/validator",["$","magix","mx-form/rule","./util"],(e,r,t)=>{var a=e("$"),o=e("magix"),l=e("mx-form/rule"),i=e("./util");o.applyStyle("_zs_galleryU","html ._zs_galleryfU,html ._zs_galleryfU:focus,html ._zs_galleryfU:hover{border-color:var(--color-red)}._zs_galleryfV{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:var(--color-red);font-size:var(--font-size);line-height:18px}._zs_galleryfW,._zs_galleryfW:focus,._zs_galleryfW:hover{border-color:var(--color-warn)}._zs_galleryfX{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:var(--color-warn);font-size:var(--font-size)}");var s=function(e,r,t){var a,i,s,n=!0;for(var f in r)if(o.has(r,f)){if(l[f]){var c=l[f](t,i=r[f]);n=c.valid,s=c.tip}else n=!0,s="过滤掉不在校验规则内的";if(!n){a=f;break}}return{type:e,placement:r.placement,valid:n,action:a,rule:i,val:t,tip:s}},n=function(e){var r=a('[mxe="'+e+'"]');r.removeClass("_zs_galleryfW _zs_galleryfU"),r.each(function(e,r){var t=(r=a(r)).attr("id")+"_msg";a("#"+t).hide()})},f=function(e,r,t){var l=a('[mxe="'+r+'"]');if(l.length){switch(e){case"warn":l.addClass("_zs_galleryfW").removeClass("_zs_galleryfU");break;case"error":l.addClass("_zs_galleryfU").removeClass("_zs_galleryfW")}return"checkbox"!=l.prop("type")&&"radio"!=l.prop("type")||(l=a(l[0])),l.each(function(r,l){var i=(l=a(l)).parent(),s=l.attr("id");s||(s=o.guid(),l.attr("id",s));var n=s+"_msg",f=a("#"+n);f.length||("static"==i.css("position")&&i.css({position:"relative"}),l.after('<div id="'+n+'"/>'),f=a("#"+n));switch(e){case"warn":f[0].className="_zs_galleryfX";break;case"error":f[0].className="_zs_galleryfV"}f.html(t.tip).show();var c=t.placement||"bottom",p=l.outerWidth(),v=l.outerHeight(),d=l.offset(),h=i.offset();switch(c){case"right":f.css({lineHeight:"var(--input-height)",top:d.top-h.top,left:d.left-h.left+p+10});break;case"bottom":f.css({lineHeight:"18px",top:d.top-h.top+v,left:d.left-h.left+10})}}),!0}};t.exports={isValid:function(e,r){e=o.mix({element:null,scrollIntoView:!0,checkSubs:!0},e||{});var t,l=this,i=!0,s=l.owner.children(),n=!1;if(r||(r=[],n=!0),e.checkSubs)for(var f=0;f<s.length;f++){!1===o.Vframe.get(s[f]).invoke("isValid",[r])&&(i=!1)}e.element?(t="string"!=typeof e.element||/^#/.test(e.element)||/^\./.test(e.element)?a(e.element):a("#"+e.element)).attr("mxe")||(t=t.find('[mxe^="'+l.id+'"]')):t=a("#"+l.id+' [mxe^="'+l.id+'"]');var c=[];t.each(function(e,r){l.__c_(a(r)),c.push(a(r).attr("mxe"))});var p=l.updater.$form;if(p)for(var v=0;v<c.length;v++){var d=c[v];if(p[d]&&"error"==p[d].type){r.push(d),i=!1;break}}if(n&&e.scrollIntoView){for(var h=1e20,m=void 0,_=r.length,g=void 0,u=void 0;_--;)(g=a('[mxe="'+r[_]+'"]')).length&&(u=g.offset()).top<h&&(m=g[0],h=u.top);m&&(m.scrollIntoViewIfNeeded?m.scrollIntoViewIfNeeded():m.scrollIntoView&&m.scrollIntoView())}return i},"$[mxc]<keyup,change,focusout>":function(e){var r=a(e.eventTarget),t=r.attr("mxe");t&&t.startsWith(this.id)&&this.__c_(r)},__c_:function(e){for(var r=this.updater,t=r.$form||(r.$form={}),l=e.attr("mxc"),c=!0,p=0,v=r.parse(l);p<v.length;p++){for(var d=v[p],h=d.f||{},m=d.p.split("."),_=m.pop(),g=void 0,u=r.get();u&&m.length;)u=u[m.shift()];if("checkbox"==e.prop("type")){var y=u[_],w=e.prop("checked");if(!0===y||!1===y)g=w;else if(g=e.val(),a.isArray(y)){var x=e.prop("name");if(x)y=[],i.addCheckbox(x,y,h);else{var z=i.indexOf(y,g);w?-1===z&&y.push(g):z>-1&&y.splice(z,1)}g=y}else a.isPlainObject(y)?(w?y[g]=g:delete y[g],g=y):g=w?g:""}else if("radio"==e.prop("type")){var b=e.prop("name");g=a("input[name="+b+"]:checked").val()}else g=e.val();if(c){var k=s("error",h,g),V=e.attr("mxe");if(k.valid){if(delete t[V],n(V),o.has(h,"warn")){var $=s("warn",h.warn,g);$.valid?(delete t[V],n(V)):(t[V]=$,f("warn",V,$))}}else t[V]=k,c=!1,f("error",V,k)}}},clearValid:function(){var e=this.updater.$form;if(e)for(var r in e)n(r);this.updater.$form={}},"$doc<htmlchanged>":function(e){var r=this.updater.$form;if(e.vId==this.id&&r)for(var t in r){var a=r[t];f(a.type,t,a)||delete r[t]}}}});