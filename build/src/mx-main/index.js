define("mx-main/index",["magix"],(e,l,s)=>{var a=e("magix"),r=a.Router,i=a.Vframe;a.applyStyle("_zs_galleryY",'._zs_galleryhy{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}._zs_galleryhz{position:relative;background-color:#fafafa}._zs_galleryhz ._zs_galleryhA{position:absolute;top:0;left:0;bottom:0;background-color:#fff}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB{position:relative;padding:10px 0 10px 20px;border-bottom:1px solid #f5f5f5}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhC{color:#666}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhC:hover{color:#4d7fff}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhD{line-height:30px}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhD ._zs_galleryhE>*{position:relative;top:2px;margin-right:4px;font-size:18px;color:#999}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhD:hover ._zs_galleryhE>*{color:#4d7fff}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhF{position:relative;height:30px;line-height:30px;padding-left:26px}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhF:before{content:"";position:absolute;top:0;left:9px;width:0;height:30px;border-left:1px solid #adadad}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhF:after{content:"";position:absolute;top:15px;left:10px;width:6px;height:0;border-top:1px solid #adadad}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB ._zs_galleryhF:last-child:before{height:16px}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhG{background-color:#f6f9ff}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhG ._zs_galleryhH,._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhG ._zs_galleryhH ._zs_galleryhE>*,._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhG ._zs_galleryhH:hover,._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhG ._zs_galleryhH:hover ._zs_galleryhE>*{color:#4d7fff}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhG ._zs_galleryhI{position:absolute;top:50%;right:8px;margin-top:-7px;font-size:12px;font-weight:700;color:#4d7fff}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhJ ._zs_galleryhC,._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhJ ._zs_galleryhC:hover{color:#666;cursor:not-allowed}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhJ ._zs_galleryhD:hover ._zs_galleryhE>*{color:#999}._zs_galleryhz ._zs_galleryhA ._zs_galleryhB._zs_galleryhJ ._zs_galleryhK{position:absolute;top:50%;right:8px;margin-top:-9px;font-size:14px;font-weight:700;color:#eee}._zs_galleryhz ._zs_galleryhL ._zs_galleryhM{height:58px;line-height:58px;text-align:center;font-size:20px;border-bottom:1px solid #e6e6e6;background-color:#fafafa}._zs_galleryhz ._zs_galleryhL ._zs_galleryhN{position:relative;margin-left:20px;margin-right:20px;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}._zs_galleryhz ._zs_galleryhL ._zs_galleryhN ._zs_galleryhO{position:relative;padding-top:20px;padding-bottom:20px;padding-left:20px}._zs_galleryhz ._zs_galleryhL ._zs_galleryhN ._zs_galleryhO:last-child{padding-bottom:40px}._zs_galleryhz ._zs_galleryhL ._zs_galleryhN ._zs_galleryhP{position:absolute;top:0;right:0;height:100%;padding-top:20px;padding-left:20px;border-left:1px solid #e6e6e6}._zs_galleryhz ._zs_galleryhL ._zs_galleryhQ{text-align:center;padding:40px 0}._zs_galleryhz ._zs_galleryhR{display:inline-block;position:relative;margin-top:10px;color:#a40100}._zs_galleryhz ._zs_galleryhR ._zs_galleryhS{position:absolute;left:-20px;top:0;color:#a40100}'),s.exports=a.View.extend({tmpl:function(e,l,s,a,r,i,_,t){if(s||(s=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(g,o)}}if(!i){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return h[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(p,d)}}if(!t){var z=/[\\'"]/g;t=function(e){return r(e).replace(z,"\\$&")}}_||(_=function(e,l,s,a){for(a=e[y];--a;)if(e[s=y+a]===l)return s;return e[s=y+e[y]++]=l,s});var y="",c="",f=e.viewHeight,x=e.leftWidth,u=e.stepInfos,v=e.curStepIndex,b=e.curSubStepIndex,m=e.curStepInfo,I=e.childInfos,w=e.viewId;c+='<div mxv class="_zs_galleryhz" style="min-height: '+a(f)+'px;"><div class="_zs_galleryhA" style="width: '+a(x)+'px;">';for(var S=0,W=u.length;S<W;S++){var k=u[S];if(c+='<div class="_zs_galleryhB ',k.index==v&&(c+=" _zs_galleryhG "),c+=" ",k.locked&&(c+=" _zs_galleryhJ "),c+='"><div mxa="_zs_gallerybW:_" class="_zs_galleryhD"><a href="javascript:;" class="_zs_galleryhC _zs_galleryhD clearfix ',k.index==v&&-1==b&&(c+=" _zs_galleryhH "),c+='" data-sub="-1" ',k.locked||(c+=' mx-click="'+l+"nav({stepIndex:"+a(k.index)+'})" '),c+=">",k.icon&&(c+='<span mxa="_zs_gallerybW:a" class="_zs_galleryhE fl">'+r(k.icon)+"</span>"),c+='<span mxa="_zs_gallerybW:b" class="fl">'+a(k.label)+"</span></a></div>",!k.locked&&k.subs.length>1){c+="<div>";for(var A=0,B=k.subs,$=B.length;A<$;A++){var T=B[A];c+='<div mxa="_zs_gallerybW:c" class="_zs_galleryhF"><a href="javascript:;" class="_zs_galleryhC ',k.index==v&&b==T.index&&(c+=" _zs_galleryhH "),c+='" data-sub="'+a(T.index)+'" mx-click="'+l+"nav({stepIndex:"+a(k.index)+",subStepIndex:"+a(T.index)+'})">'+a(T.label)+"</a></div>"}c+="</div>"}c+=" ",k.index==v&&(c+='<i mxs="_zs_gallerybW:_" class="mc-iconfont _zs_galleryhI">&#xe602;</i>'),c+=" ",k.locked&&(c+='<i mxs="_zs_gallerybW:a" class="mc-iconfont _zs_galleryhK">&#xe759;</i>'),c+="</div>"}c+='</div><div mxv class="_zs_galleryhL" style="padding-left: '+a(x)+'px;"><div mxa="_zs_gallerybW:d" class="_zs_galleryhM">'+a(m.label)+'</div><div mxv mxa="_zs_gallerybW:e" class="_zs_galleryhN"><div mxv>';for(var H=0,C=m.subs,D=C.length;H<D;H++){T=C[H];c+='<div mxv class="_zs_galleryhO" style="padding-right: '+a(m.rightWidth+20)+'px;"><div mxv="curStepInfo,childInfos" mx-view="'+a(T.view)+"?info="+_(s,T)+"&data="+_(s,I)+'" id="sub_frame_'+a(T.index)+'"><div mxs="_zs_gallerybW:b" class="loading"><span class="loading-anim"></span></div></div>',T.sideWrapper&&(c+='<div mxv="curStepInfo" mx-view="'+a(T.sideWrapper)+"?data="+_(s,T.sideData)+'" class="_zs_galleryhP" style="width: '+a(m.rightWidth)+'px;"><div mxs="_zs_gallerybW:b" class="loading"><span class="loading-anim"></span></div></div>'),c+="</div>"}return c+="</div>",m.sideWrapper&&(c+='<div mxv="curStepInfo" mx-view="'+a(m.sideWrapper)+"?data="+_(s,m.sideData)+'" class="_zs_galleryhP" style="width: '+a(m.rightWidth)+'px;"><div mxs="_zs_gallerybW:b" class="loading"><span class="loading-anim"></span></div></div>'),c+="</div>",m.customTrigger||(c+='<div mxa="_zs_gallerybW:f" class="_zs_galleryhQ"><div>',m.prevTip&&(c+='<a mxa="_zs_gallerybW:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+a(m.prevTip)+"</a>"),c+=" ",m.nextTip&&(c+='<a mxa="_zs_gallerybW:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+a(m.nextTip)+"</a>"),c+='</div><div id="'+a(w)+'_error" class="_zs_galleryhR"></div></div>'),c+="</div></div>"},init:function(e){var l=this,s=e.alreadyStep||1,a=e.stepInfos||[];a.forEach(function(e,l){e.locked=l+1>s}),l.updater.set({leftWidth:e.leftWidth||160,rightWidth:e.rightWidth||260,stepInfos:a,childInfos:e.childInfos||{},viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater.get("stepInfos"),s=r.parse().params,a=+s.stepIndex||1,i=+s.subStepIndex||-1;if(l.forEach(function(s,r){var _=r+1;s.index=_,s.subs&&s.subs.length||!s.subsFn||(s.subs=s.subsFn()),s.subs=s.subs||[],s=e.wrapSide(s),_==a&&(s.locked=!1,(i>s.subs.length||1==s.subs.length)&&(i=-1));var t="";!s.customTrigger&&_>1&&!l[r-1].locked&&(t=s.prevTip||"返回上一步"),s.prevTip=t;var n="";!s.customTrigger&&_<l.length&&(n=s.nextTip||"下一步"),s.nextTip=n}),s.stepIndex+""==a+""&&s.subStepIndex+""==i+""){var _=function(){e.updater.digest({curStepInfo:l[a-1],curStepIndex:a,curSubStepIndex:i})};if(e.$inited)if(r.diff().params.stepIndex)_();else{e.updater.set({curSubStepIndex:i});var t=$("#"+e.id+" ._zs_galleryhG");t.find("._zs_galleryhC").removeClass("_zs_galleryhH"),t.find('._zs_galleryhC[data-sub="'+i+'"]').addClass("_zs_galleryhH"),e.subScroll()}else e.$inited=1,_()}else r.to({stepIndex:a,subStepIndex:i})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),s=!1,a=null,r={};(e.sideView||e.sideTip)&&(a="mx-main/tip",r={view:e.sideView||"",content:e.sideTip||""},s=!0);var i=!1;return e.subs.forEach(function(e,l){e.index=l+1;var a=null,r={};if(!s){var _=!1;(e.sideView||e.sideTip)&&(a="mx-main/tip",r={view:e.sideView||"",content:e.sideTip||""},_=!0),i=i||_}e.sideWrapper=a,e.sideData=r}),s=s||i,e.hasSide=s,e.sideWrapper=a,e.sideData=r,e.rightWidth=s?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryhL");if(l.length){var s=e.find("._zs_galleryhA");$(window).scrollTop()>l.offset().top?s.css({position:"fixed"}):s.css({position:"absolute"})}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find("._zs_galleryhz").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");r.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,s=l.updater.get("curStepInfo"),r=s.subs,_=r.map(function(e){return i.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var i=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){i=i&&e.ok,e.ok||_.push({id:l+1,label:r[l].label,msg:e.msg||""}),a.mix(t,e.remain||{})}),i)n.html(""),s.nextFn&&s.nextFn(t,function(e,s){l.next(e,s)});else{n.html('\n                    <i class="mc-iconfont _zs_galleryhS">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var g=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(g.offset().top)}})},"nav<click>":function(e){var l=e.params,s=l.stepIndex,a=l.subStepIndex||-1;r.to({stepIndex:s,subStepIndex:a})},next:function(e,l){var s=this.updater.get("curStepIndex"),i=this.updater.get("childInfos");e.stepIndex=+s+1,r.to(e),a.mix(i,l)}})});