define("mx-main/index",["magix"],(e,l,i)=>{var a=e("magix"),s=a.Router,r=a.Vframe;a.applyStyle("_zs_galleryag",'._zs_galleryiR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiS{position:relative;background-color:#fafafa}._zs_galleryiS ._zs_galleryiT{position:absolute;top:0;left:0;bottom:0;background-color:#fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU{position:relative;padding:10px 0 10px 20px;border-bottom:1px solid #f5f5f5}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiV{color:#666}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiV:hover{color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiW{line-height:30px}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiW ._zs_galleryiX>*{position:relative;top:2px;margin-right:4px;font-size:18px;color:#999}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiW:hover ._zs_galleryiX>*{color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY{position:relative;height:30px;line-height:30px;padding-left:26px}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY:before{content:"";position:absolute;top:0;left:9px;width:0;height:30px;border-left:1px solid #adadad}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY:after{content:"";position:absolute;top:15px;left:10px;width:6px;height:0;border-top:1px solid #adadad}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY:last-child:before{height:16px}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ{background-color:#f6f9ff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_ ._zs_galleryiX>*,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_:hover,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_:hover ._zs_galleryiX>*{color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryja{position:absolute;top:50%;right:8px;margin-top:-7px;font-size:12px;font-weight:700;color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryiV,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryiV:hover{color:#666;cursor:not-allowed}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryiW:hover ._zs_galleryiX>*{color:#999}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryjc{position:absolute;top:50%;right:8px;height:18px;margin-top:-9px;font-size:14px;line-height:18px;font-weight:700;color:#eee}._zs_galleryiS ._zs_galleryjd ._zs_galleryje{height:58px;line-height:58px;text-align:center;font-size:20px;border-bottom:1px solid #e6e6e6;background-color:#fafafa}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf{position:relative;margin-left:20px;margin-right:20px;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf ._zs_galleryjg{position:relative;padding-top:20px;padding-bottom:20px;padding-left:20px}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf ._zs_galleryjg:last-child{padding-bottom:40px}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf ._zs_galleryjh{position:absolute;top:0;right:0;height:100%;padding-top:20px;padding-left:20px;border-left:1px solid #e6e6e6}._zs_galleryiS ._zs_galleryjd ._zs_galleryji{text-align:center;padding:40px 0}._zs_galleryiS ._zs_galleryjj{display:inline-block;position:relative;margin-top:10px;color:#a40100}._zs_galleryiS ._zs_galleryjj ._zs_galleryjk{position:absolute;left:-20px;top:0;color:#a40100}'),i.exports=a.View.extend({tmpl:function(e,l,i,a,s,r,_,t){if(i||(i=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(g,d)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},y=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(y,p)}}if(!t){var c=/[\\'"]/g;t=function(e){return s(e).replace(c,"\\$&")}}_||(_=function(e,l,i,a){for(a=e[z];--a;)if(e[i=z+a]===l)return i;return e[i=z+e[z]++]=l,i});var z="",x="",f=e.viewHeight,v=e.leftWidth,u=e.stepInfos,h=e.curStepIndex,m=e.curSubStepIndex,b=e.curStepInfo,S=e.viewId;x+='<div mxv class="_zs_galleryiS" style="min-height: '+a(f)+'px;"><div class="_zs_galleryiT" style="width: '+a(v)+'px;">';for(var j=0,w=u.length;j<w;j++){var T=u[j];if(x+='<div class="_zs_galleryiU ',T.index==h&&(x+=" _zs_galleryiZ "),x+=" ",T.locked&&(x+=" _zs_galleryjb "),x+='"><div mxa="_zs_gallerycO:_" class="_zs_galleryiW"><a href="javascript:;" class="_zs_galleryiV _zs_galleryiW clearfix ',T.index==h&&-1==m&&(x+=" _zs_galleryj_ "),x+='" data-sub="-1" ',T.locked||(x+=' mx-click="'+l+"nav({stepIndex:"+a(T.index)+'})" '),x+=">",T.icon&&(x+='<span mxa="_zs_gallerycO:a" class="_zs_galleryiX fl">'+s(T.icon)+"</span>"),x+='<span mxa="_zs_gallerycO:b" class="fl">'+a(T.label)+"</span></a></div>",!T.locked&&T.subs.length>1){x+="<div>";for(var I=0,k=T.subs,U=k.length;I<U;I++){var W=k[I];x+='<div mxa="_zs_gallerycO:c" class="_zs_galleryiY"><a href="javascript:;" class="_zs_galleryiV ',T.index==h&&m==W.index&&(x+=" _zs_galleryj_ "),x+='" data-sub="'+a(W.index)+'" mx-click="'+l+"nav({stepIndex:"+a(T.index)+",subStepIndex:"+a(W.index)+'})">'+a(W.label)+"</a></div>"}x+="</div>"}x+=" ",T.index==h&&(x+='<i mxs="_zs_gallerycO:_" class="mc-iconfont _zs_galleryja">&#xe602;</i>'),x+=" ",T.locked&&(x+='<i mxs="_zs_gallerycO:a" class="mc-iconfont _zs_galleryjc">&#xe759;</i>'),x+="</div>"}x+='</div><div mxv class="_zs_galleryjd" style="padding-left: '+a(v)+'px;"><div mxa="_zs_gallerycO:d" class="_zs_galleryje">'+a(b.label)+'</div><div mxv mxa="_zs_gallerycO:e" class="_zs_galleryjf"><div mxv>';for(var $=0,O=b.subs,V=O.length;$<V;$++){W=O[$];x+='<div mxv class="_zs_galleryjg" style="padding-right: '+a(b.rightWidth+20)+'px;"><div mxv="curStepInfo" mx-view="'+a(W.view)+"?info="+_(i,W)+'" id="sub_frame_'+a(W.index)+'"><div mxs="_zs_gallerycO:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',W.sideWrapper&&(x+='<div mxv="curStepInfo" mx-view="'+a(W.sideWrapper)+"?data="+_(i,W.sideData)+'" class="_zs_galleryjh" style="width: '+a(b.rightWidth)+'px;"><div mxs="_zs_gallerycO:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),x+="</div>"}return x+="</div>",b.sideWrapper&&(x+='<div mxv="curStepInfo" mx-view="'+a(b.sideWrapper)+"?data="+_(i,b.sideData)+'" class="_zs_galleryjh" style="width: '+a(b.rightWidth)+'px;"><div mxs="_zs_gallerycO:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),x+="</div>",b.customTrigger||(x+='<div mxa="_zs_gallerycO:f" class="_zs_galleryji"><div>',b.prevTip&&(x+='<a mxa="_zs_gallerycO:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+a(b.prevTip)+"</a>"),x+=" ",b.nextTip&&(x+='<a mxa="_zs_gallerycO:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+a(b.nextTip)+"</a>"),x+='</div><div id="'+a(S)+'_error" class="_zs_galleryjj"></div></div>'),x+="</div></div>"},init:function(e){var l=this;l.updater.set({leftWidth:e.leftWidth||160,rightWidth:e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater,i=+l.get("alreadyStep"),a=l.get("stepInfos"),r=s.parse().params,_=+(r.stepIndex||1);_>i&&(i=_);var t=+r.subStepIndex||-1;if(a.forEach(function(l,s){var r=s+1;l.index=r,l.subs=l.subs||[],(l=e.wrapSide(l)).locked=r>i,r==_&&(t>l.subs.length||1==l.subs.length)&&(t=-1);var n="";!l.customTrigger&&r>1&&!a[s-1].locked&&(n=l.prevTip||"返回上一步"),l.prevTip=n;var g="";!l.customTrigger&&r<a.length&&(g=l.nextTip||"下一步"),l.nextTip=g}),r.stepIndex+""==_+""&&r.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:i,curStepInfo:a[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(s.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var g=$("#"+e.id+" ._zs_galleryiZ");g.find("._zs_galleryiV").removeClass("_zs_galleryj_"),g.find('._zs_galleryiV[data-sub="'+t+'"]').addClass("_zs_galleryj_"),e.subScroll()}else e.$inited=1,n()}else s.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),i=!1,a=null,s={};(e.sideView||e.sideTip)&&(a="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},i=!0);var r=!1;return e.subs.forEach(function(e,l){e.index=l+1;var a=null,s={};if(!i){var _=!1;(e.sideView||e.sideTip)&&(a="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},_=!0),r=r||_}e.sideWrapper=a,e.sideData=s}),i=i||r,e.hasSide=i,e.sideWrapper=a,e.sideData=s,e.rightWidth=i?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryjd");if(l.length){var i=e.find("._zs_galleryiT");$(window).scrollTop()>l.offset().top?i.css({position:"fixed"}):i.css({position:"absolute"})}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find("._zs_galleryiS").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");s.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,i=l.updater.get("curStepInfo"),s=i.subs,_=s.map(function(e){return r.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var r=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){r=r&&e.ok,e.ok||_.push({id:l+1,label:s[l].label,msg:e.msg||""}),a.mix(t,e.remain||{})}),r)n.html(""),i.nextFn?i.nextFn(t,function(e){l.next(e)}):l.next({});else{n.html('\n                    <i class="mc-iconfont _zs_galleryjk">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var g=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(g.offset().top)}})},"nav<click>":function(e){var l=e.params,i=l.stepIndex,a=l.subStepIndex||-1;s.to({stepIndex:i,subStepIndex:a})},next:function(e){var l=this.updater.get("curStepIndex");e.stepIndex=+l+1,s.to(e)}})});