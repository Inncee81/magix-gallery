define("mx-dialog/index",["magix","$","../mx-medusa/util","mx-popover/index"],(e,l,t)=>{e("mx-popover/index");var a=e("magix"),i=e("$"),o=a.Vframe,n=e("../mx-medusa/util");a.applyStyle("_zs_galleryE","._zs_galleryeb,._zs_galleryec{position:fixed;left:0;width:100%;height:100%;transition:all var(--duration)}._zs_galleryeb{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_galleryeb._zs_galleryed{opacity:1}._zs_galleryee{position:absolute;border-radius:var(--border-radius);background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryee ._zs_galleryef{position:relative;word-break:break-all}._zs_galleryee ._zs_galleryeg{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:101;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_galleryee ._zs_galleryeg ._zs_galleryeh{font-size:18px;font-weight:700;line-height:26px}._zs_galleryee ._zs_galleryeg:focus,._zs_galleryee ._zs_galleryeg:hover{background-color:#999;color:#fff}._zs_galleryee._zs_galleryei{border-radius:0}._zs_galleryej{position:relative}._zs_galleryej ._zs_galleryek{opacity:1;position:relative;z-index:1}._zs_galleryej ._zs_galleryel{display:none;position:absolute;top:0;left:0;z-index:2;width:100%;height:100%}._zs_galleryej._zs_galleryem ._zs_galleryek{opacity:0}._zs_galleryej._zs_galleryem ._zs_galleryel{display:inline}._zs_galleryen{position:absolute;top:50%;left:50%;margin-left:-30px}");var r=99999,s=[];t.exports=a.View.extend({tmpl:function(e,l,t,a,i,o,n,r){if(t||(t=e),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(c,d)}}if(!o){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return g[e]},f=/[!')(*]/g;o=function(e){return encodeURIComponent(i(e)).replace(f,_)}}if(!r){var p=/[\\'"]/g;r=function(e){return i(e).replace(p,"\\$&")}}var m="",u=e.closable,h=e.cntId,v=e.full,x=e.fullHeader,y=e.fullFooter;return u&&(m+='<a mxs="_zs_gallerya&:_" href="javascript:;" mx-click="'+l+'__aR()" class="_zs_galleryeg"><i class="mc-iconfont _zs_galleryeh">&#xe603;</i></a>'),m+='<div class="_zs_galleryef" id="'+a(h)+'_content">',v?(m+=" ",x.title&&(m+='<div class="dialog-header" id="'+a(h)+'_header"><span mxa="_zs_gallerya&:_" class="header-name">'+i(x.title)+"</span>",x.iconTip&&(m+='<i class="mc-iconfont color-c displacement-2" mx-view="mx-popover/index?content='+o(x.iconTip)+'">&#xe7aa;</i>'),m+=" ",x.tip&&(m+='<span mxa="_zs_gallerya&:a" class="color-9 ml10">'+i(x.tip)+"</span>"),m+="</div>"),m+='<div id="'+a(h)+'"><div mxs="_zs_gallerya&:a" class="pr _zs_galleryen"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1" style="background-color:#ffffff"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2" style="background-color:#ffffff"></div><div class="mx-loading-three-bounce" style="background-color:#ffffff"></div></div></div></div>',(y.enter||y.cancel)&&(m+='<div class="dialog-footer clearfix" id="'+a(h)+'_footer">',y.enter&&(m+='<a mxa="_zs_gallerya&:b" href="javascript:;" class="fl btn btn-brand min-width-60 mr10 _zs_galleryej" mx-click="'+l+'__aS()"><span mxa="_zs_gallerya&:c" class="_zs_galleryek">'+i(y.enterText)+"</span></a>"),m+=" ",y.cancel&&(m+='<a mxa="_zs_gallerya&:d" href="javascript:;" class="fl btn min-width-60 mr10" mx-click="'+l+'__aR()">'+i(y.cancelText)+"</a>"),m+=" ",y.enter&&(m+='<span id="'+a(h)+'_footer_error" class="fl lh32 color-red"></span>'),m+="</div>"),m+=" "):m+='<div id="'+a(h)+'"><div mxs="_zs_gallerya&:b" class="pr pt80 pb80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1 mx-loading-bg-grey"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2 mx-loading-bg-grey"></div><div class="mx-loading-three-bounce mx-loading-bg-grey"></div></div></div></div>',m+="</div>"},init:function(e){var l=this;l.on("destroy",function(){!function(e){for(var l=s.length-1;l>=0;l--)if(s[l].id==e.id){s.splice(l,1);break}}(l),r-=2,i("#"+l.id).trigger("dlg_close"),l.__aO&&clearTimeout(l.__aO)}),r+=2,s.push(l),a.has(e,"closable")||(e.closable=!0),l.updater.set(a.mix({cntId:"cnt_"+l.id},e))},render:function(){var e=this,l=e.updater,t=l.get();l.digest(),setTimeout(e.wrapAsync(function(){var l=i("#wrapper_"+e.id);l.css(t.posTo),e.__aP();var o=t.cntId,n=i("#mask_"+e.id);n.length>0&&n.addClass("_zs_galleryed"),(t.closable||t.emptyClosable)&&l.on("click",function(l){a.inside(l.target,o+"_content")||i("#"+e.id).trigger("dlg_close")}),e.owner.mountVframe(o,t.view,t),l.on("scroll",function(){i(document).trigger("dialogScolll")})}),250)},__aP:function(){var e=this.updater.get(),l=e.cntId,t=i("#"+e.vId),a=document.documentElement.clientWidth,o=document.documentElement.clientHeight;if(e.full){var n=o,r=i("#"+l+"_header"),s=i("#"+l+"_footer");r&&r.length&&(n-=r.outerHeight()),s&&s.length&&(n-=s.outerHeight());var c={height:n-2,overflowY:"auto"};e.card&&(c.backgroundColor="#e8ebf2",c.padding="16px 24px"),i("#"+l).css(c);var d=Math.min(a,e.width);t.css({width:d,left:Math.max(0,a-d)})}},__aQ:function(e){var l=o.get("cnt_"+this.id);l&&l.invoke("fire",["unload",e])},"__aS<click>":function(e){var l=i(e.eventTarget),t="_zs_galleryem";if(!l.hasClass(t)){l.addClass(t),l.append('<span class="_zs_galleryel">\n            <span class="mx-btn-loading-dot"></span>\n        </span>');var a=this,n=a.updater.get(),r=n.cntId;o.get(r).invoke("check").then(function(e){l.find("._zs_galleryel").remove(),l.removeClass(t);var o=i("#"+r+"_footer_error");e.ok?(o.html(""),a["__aR<click>"](),n.callback&&n.callback(e.data||{})):e.msg?o.html('<i class="mc-iconfont displacement-2">&#xe6ad;</i>'+e.msg):o.html("")})}},"__aR<click>":function(){i("#"+this.id).trigger("dlg_close")},"$doc<keyup>":function(e){if(27==e.keyCode){var l=s[s.length-1];if(l==this&&l.updater.get("closable"))i("#"+l.id).trigger("dlg_close")}},"$win<resize>":function(e){var l=this;l.__aO&&clearTimeout(l.__aO),l.__aO=setTimeout(l.wrapAsync(function(){l.__aP()}),200)}},{__aT:function(e,l){var t=l.vfDialogId||a.guid("dlg_");if(l.mask){var o=i('<div class="_zs_galleryeb" id="mask_'+t+'" />');o.css({zIndex:r-1}),i(document.body).append(o)}var n="wrapper_"+t,c=r,d=l.width,g=l.left,_=l.top,f=i('<div class="_zs_galleryec" \n                id="'+n+'" style="z-index:'+c+'">\n                <div class="_zs_galleryee '+(l.full?"_zs_galleryei":"")+'" id="'+t+'" \n                    style="top:'+_+"px; left:"+g+"px; width:"+d+'px;"></div>\n            </div>');f.css(l.posFrom),i(document.body).append(f);var p=window.innerWidth-document.documentElement.clientWidth;p>0&&(document.body.style.paddingRight=p+"px"),document.body.style.overflowY="hidden",f.css({overflowY:l.modal?"hidden":"auto"});var m,u=e.owner.mountVframe(t,"mx-dialog/index",l),h=i("#"+t);return h.on("dlg_close",function(){h.data("closed")||h.trigger({type:"beforeClose",closeFn:function(){if(!h.data("closing")&&!m){var a=function(){h.data("closing",1),i("#wrapper_"+t).css(l.posFrom),i("#mask_"+t).removeClass("_zs_galleryed"),setTimeout(function(){h.trigger("close"),h.data("closed",1),e.owner&&e.owner.unmountVframe(t),i("#wrapper_"+t).remove(),i("#mask_"+t).remove(),0==s.length&&(document.body.style.paddingRight="",document.body.style.overflowY="")},250)},o={prevent:function(){m=1},resolve:function(){o.p=1,m=0,a()},reject:function(){o.p=1,m=0}};u.invoke("__aQ",[o]),m||o.p||a()}}})})},alert:function(e,l,t,i){var o=(i=i||{}).btns+""!="false";return this.mxDialog("mx-dialog/alert",{title:e,content:l,enterCallback:t,hasBtns:o},a.mix({width:320,emptyClosable:!0,closable:!1,mask:!1},i))},confirm:function(e,l){return this.mxDialog("mx-dialog/confirm",e,a.mix({width:320,emptyClosable:!0,closable:!1,mask:!1},l||{}))},mxLoginView:function(e,l){void 0===l&&(l={}),i.isPlainObject(e)&&(l=e,e="mx-dialog/login-iframe");return this.mxDialog("mx-dialog/login",{loginViewPath:e,loginViewData:l},{width:368,height:418,closable:!1})},mxModal:function(e,l,t){return t=t||{},this.mxDialog(e,l,a.mix({closable:!0,mask:!0},a.mix(t,{full:!0,fullHeader:a.mix({title:"",tip:"",iconTip:""},t.header||{}),fullFooter:a.mix({enter:!0,enterText:n["dialog.submit"],cancel:!0,cancelText:n["dialog.cancel"]},t.footer||{}),modal:!1,height:window.innerHeight,placement:"right",card:t.card+""!="false"})))},mxDialog:function(e,l,t){var o,n,r,s=this,c={beforeClose:function(e){n=e},close:function(){o&&o.trigger("dlg_close")},afterClose:function(e){r=e}},d={view:e};return seajs.use(e,s.wrapAsync(function(e){var g,_,f,p,m=e.dialogOptions||{},u=(t=t||{}).placement||m.placement||"center",h=t.width||m.width||400,v=t.height||m.height||260,x=document.documentElement.clientWidth,y=document.documentElement.clientHeight,b=t.target||m.target;if(b){var z=void 0;z="string"!=typeof b||/^#/.test(b)||/^\./.test(b)?i(b):i("#"+b);var w=t.offset||m.offset||{};w.top=+w.top||0,w.left=+w.left||0;var k=z.offset();_=k.top+z.outerHeight()+10-i(window).scrollTop()+w.top,g=k.left-(h-z.outerWidth())/2+w.left,f={opacity:0,top:"-50px"},p={opacity:1,top:0}}else switch(u){case"center":g=(x-h)/2,_=Math.max((y-v)/2,0),f={opacity:0,top:"-50px"},p={opacity:1,top:0};break;case"right":g=x-h,_=0,f={opacity:0,top:0,left:x},p={opacity:1,top:0,left:0}}a.mix(d,{mask:!0,modal:!1,width:h,closable:!0,left:g,top:_,posFrom:f,posTo:p},m,t),a.mix(d,l),d.dialog=c,(o=s.__aT(s,d)).on("beforeClose",function(e){n?n().then(function(){e.closeFn()}):e.closeFn()}),o.on("close",function(){r&&r()})})),c},mxCloseAllDialogs:function(){s.forEach(function(e){var l=i("#"+e.id);l&&l.trigger("dlg_close")})}})});