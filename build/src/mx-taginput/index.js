define("mx-taginput/index",["magix","$","../mx-medusa/util","../mx-monitor/index"],(t,a,r)=>{var e=t("magix"),s=t("$"),n=t("../mx-medusa/util"),l=t("../mx-monitor/index");e.applyStyle("_zs_galleryaD",'._zs_gallerymF{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-taginput/index"] ._zs_gallerymG{position:relative;height:auto;border:1px solid #e6e6e6;border-radius:4px;padding:2px 6px;cursor:text;transition:border-color .25s}[mx-view*="mx-taginput/index"] ._zs_gallerymG:hover{border-color:#ccc}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymH,[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymI,[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymJ{height:22px;line-height:22px}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymI{position:absolute;left:10px;top:50%;margin-top:-11px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymH,[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymJ{float:left;margin-top:2px;margin-bottom:2px}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymH{float:left;position:relative;max-width:220px;padding-right:26px;padding-left:6px;margin-right:4px;background-color:#eee;border-radius:4px;cursor:pointer;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymH ._zs_gallerymK{position:absolute;top:0;right:0;height:100%;width:20px;line-height:22px;text-align:center;font-size:12px;font-weight:700;color:#ccc;transition:color .25s;border-left:1px solid #fff}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymH ._zs_gallerymK:hover{color:#999}[mx-view*="mx-taginput/index"] ._zs_gallerymG ._zs_gallerymJ{padding:0;border:none;outline:none;background:transparent}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerymG{cursor:not-allowed;background-color:#fafafa;border-color:#e6e6e6}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerymG:hover{border-color:#e6e6e6}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerymH{cursor:not-allowed}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerymH ._zs_gallerymK:hover{color:#ccc}'),e.applyStyle("_zs_galleryax","._zs_gallerylO{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerylP{display:none;position:absolute;top:100%;z-index:99;min-width:100%;max-height:300px;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-y:auto;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylP ._zs_gallerylQ{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerylP ._zs_gallerylQ._zs_gallerylR,._zs_gallerylP ._zs_gallerylQ:hover{background-color:#f0f0f0}._zs_gallerylP ._zs_gallerylQ._zs_gallerylS,._zs_gallerylP ._zs_gallerylQ._zs_gallerylS:active,._zs_gallerylP ._zs_gallerylQ._zs_gallerylS:focus,._zs_gallerylP ._zs_gallerylQ._zs_gallerylS:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerylP._zs_gallerylT{display:block;-webkit-animation:_zs_galleryF .25s ease-out;animation:_zs_galleryF .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}");r.exports=e.View.extend({tmpl:function(t,a,r,e,s,n,l,o){if(r||(r=t),!s){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,_=function(t){return"&"+m[t]+";"};s=function(t){return""+(null==t?"":t)},e=function(t){return s(t).replace(i,_)}}if(!n){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return f[t]},g=/[!')(*]/g;n=function(t){return encodeURIComponent(s(t)).replace(g,p)}}if(!o){var d=/[\\'"]/g;o=function(t){return s(t).replace(d,"\\$&")}}l||(l=function(t,a,r,e){for(e=t[x];--e;)if(t[r=x+e]===a)return r;return t[r=x+t[x]++]=a,r});var x="",u="",c=t.viewId,y=t.items,z=t.placeholder,h=t.inputWidth,b=t.iv,v=t.disabled,w=t.suggestLeft,k=t.show,Y=t.loading,K=t.suggest,P=t.emptyText;if(u+='<div mxv class="_zs_gallerymG unselectable clearfix" mx-click="'+a+'__eL()" id="ipt_'+e(c)+'">',y.length||(u+='<span mxa="_zs_galleryd`:_" class="_zs_gallerymI">'+e(z)+"</span>"),u+=" ",y.length){u+=" ";for(var G=0,I=y.length;G<I;G++){u+='<span mxa="_zs_galleryd`:a" class="_zs_gallerymH clearfix" mx-contextmenu="'+a+'prevent()">'+e(y[G].text)+'<i class="mc-iconfont _zs_gallerymK" mx-click="'+a+"__eO({idx:"+e(G)+'})">&#xe603;</i></span>'}u+=" "}if(u+='<input class="_zs_gallerymJ" autocomplete="off" style="width: '+e(h)+'px;" value="'+e(b)+'" mx-keydown="'+a+'__ca()" mx-keyup="'+a+'__ca()" mx-paste="'+a+'__ca()" mx-focusin="'+a+'__ca()" mx-focusout="'+a+'__l()" mx-change="'+a+'__l()" ',v&&(u+=' disabled="true" '),u+="/>",!v){if(u+='<ul id="ul_'+e(c)+'" style="left: '+e(w)+'px;" class="_zs_gallerylP ',k&&(u+=" _zs_gallerylT "),u+='" mx-mouseout="'+a+'__bV()" mx-mousemove="'+a+'__eS()" mx-contextmenu="'+a+'__H()">',Y)u+='<li mxs="_zs_galleryd`:_"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';else{if(u+=" ",K&&K.length){u+=" ";G=0;for(var R=K.length;G<R;G++){var H=K[G];u+='<li class="_zs_gallerylQ" mx-click="'+a+"__p({item:'"+l(r,H)+'\'})" data-idx="'+e(G)+'" id="sg_'+e(c)+"_"+e(G)+'">'+s(H.text)+"</li>"}u+=" "}else u+='<li mxa="_zs_galleryd`:b" class="text-center color-9">'+e(P)+"</li>";u+=" "}u+="</ul>"}return u+="</div>"},init:function(t){var a=this,r=t.textKey||"text",o=t.valueKey||"value",m=0|t.max;a.__eI=t.dynamicList+""=="true",a.updater.set({textKey:r,valueKey:o});var i=a.rebuildList(t.list||[]),_=t.selected||"";_=(_+"").split(",");var f=[],p=t.items||[];if(p&&p.length)f=p;else{var g=e.toMap(i,"value");_.forEach(function(t){g[t]&&f.push(g[t])})}a.__cR=a.__eI?[]:i,a.__j=s("#"+a.id);var d=s("#"+a.id+"[mx-disabled]");a.updater.set({viewId:a.id,disabled:d&&d.length>0,placeholder:t.placeholder||n.choose,emptyText:n["empty.text"],inputWidth:10,items:f,max:m}),l.__f(),a.on("destroy",function(){l.__g(a),l.__h()})},rebuildList:function(t){var a=this.updater,r=a.get("textKey"),e=a.get("valueKey");return t="object"==typeof t[0]?t.map(function(t){return{text:t[r],value:t[e]}}):t.map(function(t){return{text:t,value:t}})},render:function(){this.updater.digest(),this.__eJ(),this.__bO()},__bO:function(){var t=this.updater.get("items").map(function(t){return t.value});this.__j.val(t.join(","))},__eJ:function(){var t=this;t.__eK=-1;var a=t.__cR,r=t.updater.get("items"),e=t.__bP||"",n=[];if(t.__eI)n=a;else for(var l=r.map(function(t){return t.value+""}),o=0,m=void 0;o<a.length;o++)m=a[o],l.indexOf(m.value+"")<0&&((m.value+"").indexOf(e)>-1||(m.text+"").indexOf(e)>-1)&&n.push(m);var i=t.__j.find("input");i.width(10);var _=i.position(),f=s("#ipt_"+t.id).width()-_.left;t.updater.digest({iv:e,suggest:n,inputWidth:f>=10?f:10,suggestLeft:_.left-6})},"__eL<click>":function(){this.updater.get("disabled")||this.__j.find("input").focus()},"__H<contextmenu>":function(t){t.preventDefault()},"__l<change,focusout>":function(t){t.stopPropagation()},"__ca<focusin,paste,keyup,keydown>":function(t){t.stopPropagation();var a=this;a.__dq&&clearTimeout(a.__dq);var r=t.eventTarget.value;if(a.__bP!==r){a.__bP=r;var e=a.__j.find("._zs_gallerymI");r?e.hide():e.show()}if("keydown"!=t.type){var s=a.updater.get("suggest");if(40==t.keyCode)a.__eM(),a.__eK++,a.__eK>=s.length&&(a.__eK=0),a.__eN();else if(38==t.keyCode)a.__eM(),a.__eK--,a.__eK<0&&(a.__eK=s.length-1),a.__eN();else if(13==t.keyCode){if(a.__eK>-1&&a.__eK<s.length){var n=s[a.__eK];a.__eM(),a.__p(n)}}else a.__dq=setTimeout(a.wrapAsync(function(){var t=a.updater.get("items"),r=a.updater.get("max");(r<=0||t.length<r)&&(a.__eJ(),a.__n())}),300)}if(!r&&"keydown"==t.type&&8==t.keyCode){var l=a.updater.get("items").length-1;l>-1&&(a["__eO<click>"]({params:{idx:l}}),a.__eI&&a.__m())}},__y:function(){for(var t=this.updater,a=[],r=t.get("items"),e=t.get("valueKey"),s=0,n=void 0;s<r.length;s++)n=r[s],a.push(e?n[e]:n);a=a.join(","),this.__j.val(a).trigger({type:"change",selected:a,items:r})},"__p<click>":function(t){t.stopPropagation&&t.stopPropagation(),this.__p(t.params.item)},__p:function(t){var a=this,r=a.updater;(s=r.get("items")).push(t),r.digest({items:s}),a.__bP="",a.__bO(),a.__eJ(),a.__y();var e=a.updater.get("max"),s=a.updater.get("items");e>0&&s.length>=e?a.__m():(a.__eP(),a.__eI&&a.__m())},"__eO<click>":function(t){var a=this,r=a.updater.get();if(!r.disabled){var e=r.items,s=t.params.idx;e.splice(s,1),a.updater.digest({items:e}),a.__bP="",a.__bO(),a.__eJ(),a.__y(),a.__eP()}},__eP:function(){var t=this;if(t.__eI)t.__j.find("input").focus();else{var a=t.updater.get("suggest");a&&a.length?t.__j.find("input").focus():t.__m()}},__eM:function(){s("#sg_"+this.id+"_"+this.__eK).removeClass("_zs_gallerylR")},__eN:function(t){var a=this,r=s("#sg_"+a.id+"_"+a.__eK);if(r.addClass("_zs_gallerylR"),!t&&r.length){a.__eQ=1;var e=r.outerHeight(),n=(a.__eK+1)*e,l=s("#ul_"+a.id),o=l.height(),m=l.prop("scrollTop"),i=Math.ceil(o/e);n<m+e?l.prop("scrollTop",n-e):n>m+o&&l.prop("scrollTop",(a.__eK+2-i)*e)}},__m:function(){var t=this;t.__eR&&(t.__eR=!1,t.updater.digest({show:!1}),l.__g(t),t.__eI&&(t.__cR=[]))},__n:function(){var t=this;t.__j.trigger({type:"show",keyword:t.__bP});var a=t.updater.get("suggest");!t.__eR&&a&&a.length&&(t.__eR=!0,t.updater.digest({show:!0}),l.__p(t))},__k:function(t){return e.inside(t,this.id)},"__bV<mouseout>":function(t){if(!e.inside(t.relateTarget,t.eventTarget)){this.__eM(),this.__eK=-1}},"__eS<mousemove>":function(t){var a=this;if(a.__eQ)delete a.__eQ;else{var r=s(t.target);if(r.hasClass("_zs_gallerylQ")){var e=r.data("idx");e!=a.__eK&&(a.__eM(),a.__eK=e,a.__eN(!0))}}},showLoading:function(){var t=this;t.__eR||(t.__eR=!0,t.updater.digest({show:!0,loading:!0,iv:t.__bP}),l.__p(t))},hideLoading:function(){this.updater.digest({loading:!1})},update:function(t){t=this.rebuildList(t),this.__cR=t,this.updater.digest({iv:this.__bP,suggest:t})}})});