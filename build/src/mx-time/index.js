define("mx-time/index",["magix","$","../mx-monitor/index","./content"],(t,a,r)=>{t("./content");var s=t("magix"),n=t("$"),e=t("../mx-monitor/index");s.applyStyle("_zs_galleryaG",'._zs_galleryn_{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryK{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryK{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryL{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryL{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryM{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryM{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryN{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryN{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryO{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryO{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_galleryna{position:relative;width:100%;height:32px;padding:0 25px 0 10px;border-radius:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:30px;transition:all .25s;border:1px solid #e6e6e6}._zs_galleryna ._zs_gallerynb{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._zs_galleryna ._zs_gallerync{position:absolute;right:0;top:50%;width:28px;height:28px;font-size:28px;line-height:28px;margin-top:-14px;color:#e6e6e6;transition:all .25s}._zs_galleryna._zs_gallerynd ._zs_gallerync{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryne{display:none;position:absolute;left:0;top:100%;z-index:99;min-width:220px;width:100%;margin-top:10px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryne._zs_gallerynd{display:block;-webkit-animation:_zs_galleryK .25s ease-out;animation:_zs_galleryK .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}[mx-view*="mx-time/index"]{position:relative;display:inline-block;min-width:100px;vertical-align:middle}[mx-view*="mx-time/index"]:hover ._zs_galleryna{border-color:#ccc}[mx-view*="mx-time/index"]:hover ._zs_galleryna ._zs_gallerync{color:#ccc}[mx-view*="mx-time/index"][mx-disabled] ._zs_galleryna,[mx-view*="mx-time/index"][mx-disabled]:hover ._zs_galleryna{border-color:#e6e6e6;color:#999;background-color:#eee;cursor:not-allowed}[mx-view*="mx-time/index"][mx-disabled] ._zs_galleryna ._zs_gallerync,[mx-view*="mx-time/index"][mx-disabled]:hover ._zs_galleryna ._zs_gallerync{color:#ccc}._zs_gallerynf{margin:10px;padding:10px 0 0;border-top:1px solid #e6e6e6;text-align:left}');var o=function(t){return t<10?"0"+t:t};r.exports=s.View.extend({tmpl:function(t,a,r,s,n,e,o,l){if(r||(r=t),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,i=function(t){return"&"+m[t]+";"};n=function(t){return""+(null==t?"":t)},s=function(t){return n(t).replace(f,i)}}if(!e){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return _[t]},x=/[!')(*]/g;e=function(t){return encodeURIComponent(n(t)).replace(x,p)}}if(!l){var d=/[\\'"]/g;l=function(t){return n(t).replace(d,"\\$&")}}var c="",g=t.expand,b=t.disabled,z=t.name,Y=t.time,y=t.rList,w=t.viewId,k=t.types;return c+='<div class="_zs_galleryna ',g&&(c+=" _zs_gallerynd "),c+='" ',b||(c+=' mx-click="'+a+'__n()" '),c+='><span mxa="_zs_galleryed:_" class="_zs_gallerynb">',z&&(c+='<span mxa="_zs_galleryed:a" class="color-9">'+s(z)+"：</span>"),c+=" "+s(Y)+'</span><span mxs="_zs_galleryed:_" class="mc-iconfont _zs_gallerync">&#xe692;</span></div><div class="_zs_galleryne ',g&&(c+=" _zs_gallerynd "),c+='">',y&&(c+='<div mx-view="mx-time/content?time='+e(Y)+"&types="+e(k)+'" id="'+s(w)+'_content" mx-change="'+a+'__l()"></div><div mxs="_zs_galleryed:a" class="_zs_gallerynf"><button type="button" class="btn btn-small btn-brand" mx-click="'+a+'__m({enter:true})">确定</button><button type="button" class="btn btn-small ml10" mx-click="'+a+'__m()">取消</button></div>'),c+="</div>"},init:function(t){var a=this;a.__j=n("#"+a.id);var r=n("#"+a.id+"[mx-disabled]");a.__bo=r&&r.length>0,e.__f(),a.on("destroy",function(){e.__g(a),e.__h()});var s=t.time;if(!s){var l=new Date;s=o(l.getHours())+":"+o(l.getMinutes())+":"+o(l.getSeconds())}a.updater.set({viewId:a.id,disabled:a.__bo,time:s,types:t.types,expand:!1}),a.__j.val(s)},render:function(){this.updater.digest({})},__m:function(){this.updater.get("expand")&&(this.updater.digest({expand:!1}),e.__g(this))},"__n<click>":function(t){if(!this.updater.get("expand")){var a={expand:!0};this.updater.get("rList")||(a.rList=!0),this.updater.digest(a),e.__p(this)}},__k:function(t){return s.inside(t,this.id)},"__m<click>":function(t){var a=this,r=a.updater.get("time"),n=r;t.params.enter&&(n=s.Vframe.get(a.id+"_content").invoke("val"));a.__m(),t.params.enter&&r!=n&&(a.updater.digest({time:n}),a.__j.val(n).trigger({type:"change",time:n}))},"__l<change,focusin,focusout>":function(t){t.stopPropagation()}})});