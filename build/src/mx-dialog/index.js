define("mx-dialog/index",["magix","$","../mx-medusa/util","mx-popover/index"],(e,a,t)=>{e("mx-popover/index");var r=e("magix"),l=e("$"),n=r.Vframe,i=e("../mx-medusa/util");r.applyStyle("_zs_galleryA",'._zs_gallerydy,._zs_gallerydz{position:fixed;left:0;width:100%;height:100%;transition:all var(--duration)}._zs_gallerydy{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_gallerydy._zs_gallerydA{opacity:1}._zs_gallerydB{position:absolute;border-radius:var(--border-radius);background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydB ._zs_gallerydC{position:relative;word-break:break-all}._zs_gallerydB ._zs_gallerydD{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:20;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_gallerydB ._zs_gallerydD ._zs_gallerydE{font-size:18px;font-weight:700;line-height:26px}._zs_gallerydB ._zs_gallerydD:focus,._zs_gallerydB ._zs_gallerydD:hover{background-color:#999;color:#fff}._zs_gallerydB._zs_gallerydF{border-radius:0}@-webkit-keyframes _zs_gallerya{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(2px);transform:translateY(2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes _zs_gallerya{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(2px);transform:translateY(2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}to{-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes _zs_galleryb{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes _zs_galleryb{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translate(0);transform:translate(0)}}._zs_gallerydG,._zs_gallerydG:after,._zs_gallerydG:before{display:inline-block;width:4px;height:4px;background-color:#fff;vertical-align:middle;border-radius:50%}._zs_gallerydG{position:relative;margin:0 8px}._zs_gallerydG:after{content:" ";position:absolute;left:-8px;top:0;-webkit-animation:_zs_gallerya .6s linear 0s infinite;animation:_zs_gallerya .6s linear 0s infinite}._zs_gallerydG:before{content:" ";position:absolute;left:8px;top:0;-webkit-animation:_zs_galleryb .6s linear 0s infinite;animation:_zs_galleryb .6s linear 0s infinite}._zs_gallerydH{position:relative}._zs_gallerydH ._zs_gallerydI{opacity:1;position:relative;z-index:1}._zs_gallerydH ._zs_gallerydJ{display:none;position:absolute;top:0;left:0;z-index:2;width:100%;height:100%}._zs_gallerydH._zs_gallerydK ._zs_gallerydI{opacity:0}._zs_gallerydH._zs_gallerydK ._zs_gallerydJ{display:inline}');var s=500,o=[];t.exports=r.View.extend({tmpl:function(e,a,t,r,l,n,i,s){if(t||(t=e),!l){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(d,c)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(e){return _[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(l(e)).replace(g,f)}}if(!s){var p=/[\\'"]/g;s=function(e){return l(e).replace(p,"\\$&")}}var m="",y=e.closable,u=e.cntId,x=e.full,h=e.fullHeader,b=e.fullFooter;return y&&(m+='<a mxs="_zs_galleryaN:_" href="javascript:;" mx-click="'+a+'__aJ()" class="_zs_gallerydD"><i class="mc-iconfont _zs_gallerydE">&#xe603;</i></a>'),m+='<div class="_zs_gallerydC" id="'+r(u)+'_content">',x?(m+=" ",h.title&&(m+='<div class="dialog-header" id="'+r(u)+'_header"><span mxa="_zs_galleryaN:_" class="header-name">'+l(h.title)+"</span>",h.iconTip&&(m+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?content='+n(h.iconTip)+'">&#xe7aa;</i>'),m+=" ",h.tip&&(m+='<span mxa="_zs_galleryaN:a" class="color-9 ml10">'+l(h.tip)+"</span>"),m+="</div>"),m+='<div id="'+r(u)+'"><div mxs="_zs_galleryaN:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',(b.enter||b.cancel)&&(m+='<div class="dialog-footer clearfix" id="'+r(u)+'_footer">',b.enter&&(m+='<a mxa="_zs_galleryaN:b" href="javascript:;" class="fl btn btn-brand min-width-60 mr10 _zs_gallerydH" mx-click="'+a+'__aK()"><span mxa="_zs_galleryaN:c" class="_zs_gallerydI">'+l(b.enterText)+"</span></a>"),m+=" ",b.cancel&&(m+='<a mxa="_zs_galleryaN:d" href="javascript:;" class="fl btn min-width-60 mr10" mx-click="'+a+'__aJ()">'+l(b.cancelText)+"</a>"),m+=" ",b.enter&&(m+='<span id="'+r(u)+'_footer_error" class="fl lh32 color-red"></span>'),m+="</div>"),m+=" "):m+='<div id="'+r(u)+'"><div mxs="_zs_galleryaN:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',m+="</div>"},init:function(e){var a=this;a.on("destroy",function(){!function(e){for(var a=o.length-1;a>=0;a--)if(o[a].id==e.id){o.splice(a,1);break}}(a),s-=2,l("#"+a.id).trigger("dlg_close")}),s+=2,o.push(a),r.has(e,"closable")||(e.closable=!0),a.updater.set(r.mix({cntId:"cnt_"+a.id},e))},render:function(){var e=this,a=e.updater,t=a.get();a.digest(),setTimeout(e.wrapAsync(function(){var a=l("#wrapper_"+e.id);a.css(t.posTo);var n=t.cntId;if(t.full){var i=window.innerHeight,s=l("#"+n+"_header"),o=l("#"+n+"_footer");s&&s.length&&(i-=s.outerHeight()),o&&o.length&&(i-=o.outerHeight());var d={height:i-2,overflowY:"auto"};t.card&&(d.backgroundColor="#e8ebf2",d.padding="16px 24px"),l("#"+n).css(d)}var c=l("#mask_"+e.id);c.length>0?c.addClass("_zs_gallerydA"):a.on("click",function(a){r.inside(a.target,n+"_content")||l("#"+e.id).trigger("dlg_close")}),e.owner.mountVframe(n,t.view,t),a.on("scroll",function(){l(document).trigger("dialogScolll")})}),250)},__aI:function(e){var a=n.get("cnt_"+this.id);a&&a.invoke("fire",["unload",e])},"__aK<click>":function(e){var a=l(e.eventTarget),t="_zs_gallerydK";if(!a.hasClass(t)){a.addClass(t),a.append('<span class="_zs_gallerydJ">\n            <span class="_zs_gallerydG"></span>\n        </span>');var r=this,i=r.updater.get(),s=i.cntId;n.get(s).invoke("check").then(function(e){a.find("._zs_gallerydJ").remove(),a.removeClass(t);var n=l("#"+s+"_footer_error");e.ok?(n.html(""),r["__aJ<click>"](),i.callback&&i.callback(e.data||{})):e.msg?n.html('<i class="mc-iconfont displacement-2">&#xe6ad;</i>'+e.msg):n.html("")})}},"__aJ<click>":function(){l("#"+this.id).trigger("dlg_close")},"$doc<keyup>":function(e){if(27==e.keyCode){var a=o[o.length-1];if(a==this&&a.updater.get("closable"))l("#"+a.id).trigger("dlg_close")}}},{__aL:function(e,a){var t=r.guid("dlg_");if(a.mask){var n=l('<div class="_zs_gallerydy" id="mask_'+t+'" />');n.css({zIndex:s-1}),l(document.body).append(n)}var i="wrapper_"+t,d=s,c=a.width,_=a.left,f=a.top,g=l('<div class="_zs_gallerydz" id="'+i+'"\nstyle="z-index:'+d+'">\n<div class="_zs_gallerydB '+(a.full?"_zs_gallerydF":"")+'" id="'+t+'"\n    style="top:'+f+"px; left:"+_+"px; width:"+c+'px;"></div>\n</div>');g.css(a.posFrom),l(document.body).append(g),window.innerWidth-document.body.clientWidth>0&&(document.body.style.paddingRight=window.innerWidth-document.body.clientWidth+"px"),document.body.style.overflowY="hidden",g.css({overflowY:a.modal?"hidden":"auto"});var p,m=e.owner.mountVframe(t,"mx-dialog/index",a),y=l("#"+t);return y.on("dlg_close",function(){y.data("closed")||y.trigger({type:"beforeClose",closeFn:function(){if(!y.data("closing")&&!p){var r=function(){y.data("closing",1),l("#wrapper_"+t).css(a.posFrom),l("#mask_"+t).removeClass("_zs_gallerydA"),setTimeout(function(){y.trigger("close"),y.data("closed",1),e.owner&&e.owner.unmountVframe(t),l("#wrapper_"+t).remove(),l("#mask_"+t).remove(),0==o.length&&(document.body.style.paddingRight="",document.body.style.overflowY="")},250)},n={prevent:function(){p=1},resolve:function(){n.p=1,p=0,r()},reject:function(){n.p=1,p=0}};m.invoke("__aI",[n]),p||n.p||r()}}})})},alert:function(e,a,t,l){var n=(l=l||{}).btns+""!="false";return this.mxDialog("mx-dialog/alert",{title:e,content:a,enterCallback:t,hasBtns:n},r.mix({width:320,closable:!1,mask:!1},l))},confirm:function(e,a){return this.mxDialog("mx-dialog/confirm",e,r.mix({width:320,closable:!1,mask:!1},a||{}))},mxModal:function(e,a,t){return t=t||{},this.mxDialog(e,a,r.mix({closable:!0,mask:!0},r.mix(t,{full:!0,fullHeader:r.mix({title:"",tip:"",iconTip:""},t.header||{}),fullFooter:r.mix({enter:!0,enterText:i["dialog.submit"],cancel:!0,cancelText:i["dialog.cancel"]},t.footer||{}),modal:!1,height:window.innerHeight,placement:"right",card:t.card+""!="false"})))},mxDialog:function(e,a,t){var n,i,s,o=this,d={beforeClose:function(e){i=e},close:function(){n&&n.trigger("dlg_close")},afterClose:function(e){s=e}},c={view:e};return seajs.use(e,o.wrapAsync(function(_){var f="$dlg_"+e;if(!o[f]){o[f]=1;var g,p,m,y,u=_.dialogOptions||{},x=(t=t||{}).placement||u.placement||"center",h=t.width||u.width||400,b=t.height||u.height||260,v=window.innerWidth,z=window.innerHeight,w=t.target||u.target;if(w){var k=void 0;k="string"!=typeof w||/^#/.test(w)||/^\./.test(w)?l(w):l("#"+w);var Y=t.offset||u.offset||{};Y.top=+Y.top||0,Y.left=+Y.left||0;var C=k.offset();p=C.top+k.outerHeight()+10-l(window).scrollTop()+Y.top,g=C.left-(h-k.outerWidth())/2+Y.left,m={opacity:0,top:"-50px"},y={opacity:1,top:0}}else switch(x){case"center":g=(v-h)/2,p=Math.max((z-b)/2,0),m={opacity:0,top:"-50px"},y={opacity:1,top:0};break;case"right":g=v-h,p=0,m={opacity:0,top:0,left:v},y={opacity:1,top:0,left:0}}r.mix(c,{mask:!0,modal:!1,width:h,closable:!0,left:g,top:p,posFrom:m,posTo:y},u,t),r.mix(c,a),c.dialog=d,(n=o.__aL(o,c)).on("beforeClose",function(e){(!i||i&&i())&&e.closeFn()}),n.on("close",function(){delete o[f],s&&s()})}})),d},mxCloseAllDialogs:function(){o.forEach(function(e){var a=l("#"+e.id);a&&a.trigger("dlg_close")})}})});