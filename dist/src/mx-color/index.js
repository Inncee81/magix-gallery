define("mx-color/index",["magix","$","../mx-dragdrop/index"],(a,t,s)=>{var r=a("magix"),i=a("$"),e=a("../mx-dragdrop/index");r.applyStyle("_zs_galleryB",':root{--mx-color-width:224px;--mx-color-slider-width:18px;--mx-color-picker-width:calc(var(--mx-color-width) - var(--mx-color-slider-width) - 10px)}._zs_gallerydv,._zs_gallerydw,._zs_gallerydx{width:var(--mx-color-width)}._zs_gallerydv{margin:10px 0}._zs_gallerydy{position:relative;float:left;width:15px;height:15px;margin:-1px 0 0 -1px;border:1px solid #333;cursor:pointer}._zs_gallerydy._zs_gallerydz:after,._zs_gallerydy._zs_gallerydz:before{content:" ";position:absolute;left:0;top:0;width:100%;height:100%}._zs_gallerydy._zs_gallerydz:before{z-index:2;border:1px solid #fff}._zs_gallerydy._zs_gallerydz:after{z-index:1;border:2px solid #333}._zs_gallerydA{float:left;position:relative;width:var(--mx-color-picker-width);height:var(--mx-color-picker-width);cursor:pointer}._zs_gallerydA ._zs_gallerydB{position:absolute;width:8px;height:8px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%}._zs_gallerydC{float:right;position:relative;width:var(--mx-color-slider-width);height:var(--mx-color-picker-width);cursor:pointer}._zs_gallerydC ._zs_gallerydD{position:absolute;right:-6px;top:-6px;width:0;height:0;background-color:none;border:6px solid transparent;border-right-color:#333;border-left:none}._zs_gallerydE{width:calc(var(--mx-color-width) - 120px)}._zs_gallerydF,._zs_gallerydG{width:50px}._zs_gallerydF{height:var(--input-height);margin-right:10px;border-radius:var(--border-radius);border:1px solid var(--color-border)}._zs_gallerydH{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);width:var(--mx-color-width);height:12px;margin-bottom:10px}._zs_gallerydI{position:relative;height:100%;cursor:pointer}._zs_gallerydJ{position:absolute;left:-2px;top:2px;height:8px;width:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);background:#fff}._zs_gallerydK{display:inline-block;width:var(--input-height);height:var(--input-height);border-radius:50%;vertical-align:middle}[mx-view*="mx-color/index"]{width:calc(var(--mx-color-width) + 22px);min-width:calc(var(--mx-color-width) + 22px);padding:10px;background-color:#fff}[mx-view*="mx-color/picker"] ._zs_gallerydL{min-width:0}[mx-view*="mx-color/picker"][mx-view*="dot=true"]{min-width:var(--input-height)}[mx-view*="mx-color/picker"][mx-view*="dot=true"] ._zs_gallerydL{max-width:none}');var o="_zs_gallerydz",_=["d81e06","f4ea2a","1afa29","1296db","13227a","d4237a","ffffff","e6e6e6","dbdbdb","cdcdcd","bfbfbf","8a8a8a","707070","515151","2c2c2c","000000","ea986c","eeb174","f3ca7e","f9f28b","c8db8c","aad08f","87c38f","83c6c2","7dc5eb","87a7d6","8992c8","a686ba","bd8cbb","be8dbd","e89abe","e8989a","e16632","e98f36","efb336","f6ef37","afcd51","7cba59","36ab60","1baba8","17ace3","3f81c1","4f68b0","594d9c","82529d","a4579d","db649b","dd6572","d84e06","e0620d","ea9518","f4ea2a","8cbb1a","2ba515","0e932e","0c9890","1295db","0061b2","0061b0","004198","122179","88147f","d3227b","d6204b"],l=function(a,t,s){var r,i,e,o,_;a=a%360/60,r=i=e=s-(_=s*t);var l=255*(r+=[_,o=_*(1-Math.abs(a%2-1)),0,0,o,_][a=~~a]),d=255*(i+=[o,_,_,o,0,0][a]),c=255*(e+=[0,0,o,_,_,o][a]);return{r:l,g:d,b:c,hex:"#"+(16777216|c|d<<8|l<<16).toString(16).slice(1)}};s.exports=r.View.extend({mixins:[e],tmpl:function(a,t,s,r,i,e,o,_){if(s||(s=a),!i){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(a){return"&"+l[a]+";"};i=function(a){return""+(null==a?"":a)},r=function(a){return i(a).replace(d,c)}}if(!e){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(a){return n[a]},g=/[!')(*]/g;e=function(a){return encodeURIComponent(i(a)).replace(g,p)}}if(!_){var h=/[\\'"]/g;_=function(a){return i(a).replace(h,"\\$&")}}var f="",x=a.id,v=a.shortcuts,u=a.alpha,y=a.btns;f+='<div id="scs_'+r(x)+'"><ul mxa="_zs_galleryaK:_" class="_zs_gallerydx clearfix">';for(var m=0;m<v.length;m++)f+='<li class="_zs_gallerydy" id="sc_'+r(v[m])+"_"+r(x)+'" style="background:#'+r(v[m])+'" mx-click="'+t+"__aw({color:'#"+r(_(v[m]))+"'})\"></li>";return f+='</ul></div><div mxa="_zs_galleryaK:a" class="_zs_gallerydv clearfix"><div class="_zs_gallerydA" id="cz_'+r(x)+'" mx-mousedown="'+t+'__au()"><svg mxa="_zs_galleryaK:b" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"><defs><lineargradient id="gb_'+r(x)+'" x1="0%" y1="100%" x2="0%" y2="0%"><stop mxs="_zs_galleryaK:_" offset="0%" stop-color="#000000" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:a" offset="100%" stop-color="#CC9A81" stop-opacity="0"></stop></lineargradient><lineargradient id="gw_'+r(x)+'" x1="0%" y1="100%" x2="100%" y2="100%"><stop mxs="_zs_galleryaK:b" offset="0%" stop-color="#FFFFFF" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:a" offset="100%" stop-color="#CC9A81" stop-opacity="0"></stop></lineargradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#gw_'+r(x)+')"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#gb_'+r(x)+')"></rect></svg><div class="_zs_gallerydB" id="ci_'+r(x)+'"></div></div><div mxa="_zs_galleryaK:c" class="_zs_gallerydC" mx-mousedown="'+t+'__at()"><svg mxa="_zs_galleryaK:d" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"><defs><lineargradient id="ghsv_'+r(x)+'" x1="0%" y1="100%" x2="0%" y2="0%"><stop mxs="_zs_galleryaK:c" offset="0%" stop-color="#FF0000" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:d" offset="13%" stop-color="#FF00FF" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:e" offset="25%" stop-color="#8000FF" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:f" offset="38%" stop-color="#0040FF" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:g" offset="50%" stop-color="#00FFFF" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:h" offset="63%" stop-color="#00FF40" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:i" offset="75%" stop-color="#0BED00" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:j" offset="88%" stop-color="#FFFF00" stop-opacity="1"></stop><stop mxs="_zs_galleryaK:k" offset="100%" stop-color="#FF0000" stop-opacity="1"></stop></lineargradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#ghsv_'+r(x)+')"></rect></svg><div class="_zs_gallerydD" id="si_'+r(x)+'"></div></div></div>',u&&(f+='<div mxa="_zs_galleryaK:e" class="_zs_gallerydH pr"><div class="_zs_gallerydI" id="at_'+r(x)+'" mx-mousedown="'+t+'__av()"><div class="_zs_gallerydJ" id="ai_'+r(x)+'"></div></div></div>'),f+='<div mxv mxa="_zs_galleryaK:f" class="_zs_gallerydw clearfix"><span class="fl _zs_gallerydF" id="bc_'+r(x)+'"></span><input class="fl input _zs_gallerydE" id="v_'+r(x)+'" mx-keyup="'+t+'__ay()" mx-paste="'+t+'__ay()" mx-change="'+t+'__p()" mx-focusin="'+t+'__p()" mx-focusout="'+t+'__p()"/>',y&&(f+='<a mxs="_zs_galleryaK:l" href="javascript:;" class="fr btn btn-brand _zs_gallerydG" mx-click="'+t+'__az()">确定</a>'),f+="</div>"},init:function(a){var t=a.data||{};this.__aj=t.color||"#ffffff",this.__ak=t.showAlpha+""=="true",this.__al=t.showBtns+""=="true",this.__am={h:0,s:1,v:1}},render:function(){var a=this;a.updater.digest({id:a.id,alpha:a.__ak,btns:a.__al,shortcuts:_}),a.__an(a.__aj)},__aq:function(a,t){var s=this,r=s.__am;r.h=a.h%360,r.s=a.s,r.v=a.v;var e=l(a.h,a.s,a.v).hex,_=i("#cz_"+s.id),d=_.width(),c=l(a.h,1,1);if(_.css("background",c.hex),s.__ao=e,s.__ap(),!t){i("#scs_"+s.id+" li").removeClass(o);var n=i("#si_"+s.id).height()/2;n<0&&(n=0);var p=Math.round(r.h*d/360-n),g=i("#ci_"+s.id).width()/2;i("#si_"+s.id).css({top:p-6}),p=Math.round((1-r.v)*d-g);var h=Math.round(r.s*d-g);i("#ci_"+s.id).css({left:h,top:p})}i("#sc_"+e.substr(1,6)+"_"+s.id).addClass(o)},__an:function(a){var t=parseInt(a.substr(1,2),16),s=parseInt(a.substr(3,2),16),r=parseInt(a.substr(5,2),16),i=parseInt(a.substr(7,2),16);isNaN(i)&&(i=255),this.__ar=("0"+i.toString(16)).slice(-2);var e=function(a,t,s){var r,i;return a/=255,t/=255,s/=255,{h:(0==(i=(r=Math.max(a,t,s))-Math.min(a,t,s))?null:r==a?(t-s)/i+(t<s?6:0):r==t?(s-a)/i+2:(a-t)/i+4)%6*60,s:0===i?0:i/r,v:r}}(t,s,r);this.__aq(e),this.__ak&&this.__as(i)},"__at<mousedown>":function(a){var t=this,s=i(a.eventTarget),r=i("#si_"+t.id),e=a,o=i("#cz_"+t.id).width(),_=i("#si_"+t.id).height()/2,l=s.offset(),d=(a.pageY-l.top)/o*360;t.__aq({h:d,s:t.__am.s,v:t.__am.v});var c=parseInt(r.css("top"),10);t.dragdrop(a.eventTarget,function(a){var s=a.pageY-e.pageY;(s+=c)<=-_?s=-_:s>=o-_&&(s=o-_),r.css({top:s-6});var i=(s+_)/o*360;t.__aq({h:i,s:t.__am.s,v:t.__am.v},!0)},function(){t.__D()})},"__au<mousedown>":function(a){var t=this,s=i("#cz_"+t.id).width(),r=i("#ci_"+t.id).width()/2,e=i(a.eventTarget).offset(),o=a.pageX-e.left,_=a.pageY-e.top,l=o/s,d=(s-_)/s;t.__aq({h:t.__am.h,s:l,v:d});var c=i("#ci_"+t.id),n=parseInt(c.css("left"),10),p=parseInt(c.css("top"),10),g=a;t.dragdrop(a.eventTarget,function(a){var i=a.pageY-g.pageY,e=a.pageX-g.pageX;(i+=p)<=-r?i=-r:i>=s-r&&(i=s-r),(e+=n)<=-r?e=-r:e>=s-r&&(e=s-r),c.css({top:i,left:e});var o=(e+r)/s,_=(s-(i+r))/s;t.__aq({h:t.__am.h,s:o,v:_})},function(){t.__D()})},__as:function(a){a/=255,a*=i("#at_"+this.id).width(),a-=i("#si_"+this.id).height()/2,i("#ai_"+this.id).css({left:a})},__ap:function(){var a=this,t=a.__ao;i("#at_"+a.id).css({background:"linear-gradient(to right, "+t+"00 0%,"+t+" 100%)"}),a.__ak&&(t+=a.__ar),i("#bc_"+a.id).css("background",t),i("#v_"+a.id).val(t)},"__av<mousedown>":function(a){var t=i(a.eventTarget),s=a,r=this,e=i("#ai_"+r.id),o=i("#at_"+r.id).width(),_=i("#si_"+r.id).height()/2,l=t.offset(),d=(a.pageX-l.left)/o*255|0;r.__ar=("0"+d.toString(16)).slice(-2),r.__as(d),r.__ap();var c=parseInt(e.css("left"),10);r.dragdrop(a.eventTarget,function(a){var t=a.pageX-s.pageX;(t+=c)<=-_?t=-_:t>=o-_&&(t=o-_),e.css({left:t});var i=Math.round((t+_)/o*255);r.__ar=("0"+i.toString(16)).slice(-2),r.__ap()},function(){r.__D()})},"__aw<click>":function(a){this.__an(a.params.color),i(a.eventTarget).addClass(o),this.__D()},"__ay<keyup,paste>":function(a){var t=this;clearTimeout(t.__ax);var s=i.trim(a.eventTarget.value);t.__ax=setTimeout(t.wrapAsync(function(){7===s.length&&s!=t.__aj&&(t.__an(s),t.__D())}),250)},"__p<change,focusin,focusout>":function(a){a.stopPropagation()},__D:function(a){if(!this.__al||a){var t=i("#v_"+this.id).val();i("#"+this.id).trigger({type:"change",color:this.__aj=t})}},"__az<click>":function(){this.__D(!0)}})});