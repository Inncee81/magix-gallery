define("mx-main/index",["magix"],(e,i,l)=>{var a=e("magix"),r=a.Router,s=a.Vframe;a.applyStyle("_zs_galleryah",'[mx-view*="mx-main/index"]{position:relative;background-color:#e8ebf2}._zs_galleryid{position:absolute;top:0;left:0;bottom:0;padding-top:16px;background-color:var(--app-nav-bg);z-index:3}._zs_galleryid ._zs_galleryie{position:relative;font-size:14px}._zs_galleryid ._zs_galleryie:before{content:"";position:absolute;top:0;left:24px;bottom:0;width:0;border-left:1px solid #4d5873}._zs_galleryid ._zs_galleryie:first-child:before{top:23px}._zs_galleryid ._zs_galleryie:last-child:before{bottom:23px}._zs_galleryid ._zs_galleryie ._zs_galleryif{position:relative;display:block;height:46px;line-height:46px;padding-left:36px}._zs_galleryid ._zs_galleryie ._zs_galleryif ._zs_galleryig{color:#fff;opacity:.5}._zs_galleryid ._zs_galleryie ._zs_galleryif ._zs_galleryih{opacity:0;position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-image:linear-gradient(-90deg,var(--app-brand),var(--app-brand-gradient));background-color:var(--app-brand);transition:all var(--duration)}._zs_galleryid ._zs_galleryie ._zs_galleryif._zs_galleryii ._zs_galleryih,._zs_galleryid ._zs_galleryie ._zs_galleryif._zs_galleryii ._zs_galleryig,._zs_galleryid ._zs_galleryie ._zs_galleryif:hover ._zs_galleryig{opacity:1}._zs_galleryid ._zs_galleryie ._zs_galleryij ._zs_galleryik{position:absolute;top:50%;left:16px;width:16px;height:16px;margin-top:-8px;border-radius:50%;background-color:#4d5873;color:#fff;text-align:center;line-height:16px;font-size:12px;transition:all var(--duration)}._zs_galleryid ._zs_galleryie ._zs_galleryil:before{content:"";position:absolute;top:50%;left:24px;width:10px;height:0;border-top:1px solid #4d5873}._zs_galleryid ._zs_galleryie._zs_galleryim ._zs_galleryij ._zs_galleryig{opacity:1}._zs_galleryid ._zs_galleryie._zs_galleryim ._zs_galleryij ._zs_galleryih{opacity:.2}._zs_galleryid ._zs_galleryie._zs_galleryim ._zs_galleryij._zs_galleryii ._zs_galleryik{background-color:#fff;color:var(--app-brand)}._zs_galleryid ._zs_galleryie._zs_galleryim ._zs_galleryij._zs_galleryii ._zs_galleryih{opacity:1}._zs_galleryid ._zs_galleryie._zs_galleryin ._zs_galleryif{cursor:not-allowed}._zs_galleryid ._zs_galleryie._zs_galleryin ._zs_galleryif:hover ._zs_galleryig{opacity:.5}._zs_galleryid ._zs_galleryie._zs_galleryin ._zs_galleryio{position:absolute;top:50%;right:16px;margin-top:-6px;font-size:14px;font-weight:700;color:#4d5873}._zs_galleryip{position:relative;z-index:2}._zs_galleryip ._zs_galleryiq{position:relative;margin-bottom:16px;border-radius:var(--border-radius);background-color:#fff}._zs_galleryip ._zs_galleryiq ._zs_galleryir{padding:8px 24px;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid var(--color-border)}._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryis,._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryis>*,._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryit,._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryiu{display:inline-block;height:32px;line-height:32px;vertical-align:middle;overflow:hidden}._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryis{margin-right:5px;color:#999}._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryit{font-size:16px}._zs_galleryip ._zs_galleryiq ._zs_galleryir ._zs_galleryiv{margin-left:20px;color:#999}._zs_galleryip ._zs_galleryiq ._zs_galleryiw{padding:16px 24px}._zs_galleryip ._zs_galleryix{position:absolute;background-color:#fff;border-radius:var(--border-radius)}._zs_galleryip ._zs_galleryix ._zs_galleryiy{padding:8px 24px;line-height:32px;font-size:16px;border-bottom:1px solid var(--color-border)}._zs_galleryip ._zs_galleryix ._zs_galleryiz{padding:16px 24px;color:#666}._zs_galleryip ._zs_galleryiA{text-align:center;padding:40px 0}._zs_galleryip ._zs_galleryiA ._zs_galleryiB{min-width:100px;margin-right:20px}._zs_galleryip ._zs_galleryiA ._zs_galleryiB:last-child{margin-right:0}._zs_galleryiC{display:inline-block;position:relative;margin-top:10px;color:var(--color-red)}'),l.exports=a.View.extend({tmpl:function(e,i,l,a,r,s,_,t){if(l||(l=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(d,o)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return g[e]},y=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(y,p)}}if(!t){var z=/[\\'"]/g;t=function(e){return r(e).replace(z,"\\$&")}}_||(_=function(e,i,l,a){for(a=e[c];--a;)if(e[l=c+a]===i)return l;return e[l=c+e[c]++]=i,l});var c="",x="",f=e.leftWidth,u=e.stepInfos,h=e.curStepIndex,v=e.curSubStepIndex,m=e.viewHeight,b=e.gapWidth,w=e.curStepInfo,I=e.rightWidth,S=e.childInfos,k=e.viewId;x+='<div class="_zs_galleryid" style="width: '+a(f)+'px;">';for(var $=0,T=u.length;$<T;$++){var W=u[$];if(x+='<div class="_zs_galleryie ',W.index==h&&(x+=" _zs_galleryim "),x+=" ",W.locked&&(x+=" _zs_galleryin "),x+='"><a href="javascript:;" class="_zs_galleryif _zs_galleryij ',W.index==h&&-1==v&&(x+=" _zs_galleryii "),x+='" data-sub="-1" ',W.locked||(x+=' mx-click="'+i+"nav({stepIndex:"+a(W.index)+'})" '),x+=' data-spm-click="gostr=/alimama.feedflow.1;locaid=df0100677"><span mxa="_zs_gallerydh:_" class="_zs_galleryik">'+a($+1)+'</span><span mxs="_zs_gallerydh:_" class="_zs_galleryih"></span><span mxa="_zs_gallerydh:a" class="_zs_galleryig">'+a(W.label)+"</span></a>",!W.locked&&W.subs.length>1){x+=" ";for(var j=0,q=W.subs,V=q.length;j<V;j++){var A=q[j];x+='<a href="javascript:;" class="_zs_galleryif _zs_galleryil ',W.index==h&&v==A.index&&(x+=" _zs_galleryii "),x+='" data-sub="'+a(A.index)+'" mx-click="'+i+"nav({stepIndex:"+a(W.index)+",subStepIndex:"+a(A.index)+'})" data-spm-click="gostr=/alimama.feedflow.1;locaid=de313a21d"><span mxs="_zs_gallerydh:_" class="_zs_galleryih"></span><span mxa="_zs_gallerydh:b" class="_zs_galleryig">'+a(A.label)+"</span></a>"}x+=" "}x+=" ",W.locked&&(x+='<i mxs="_zs_gallerydh:a" class="mc-iconfont _zs_galleryio">&#xe759;</i>'),x+="</div>"}x+='</div><div mxv class="_zs_galleryip clearfix" style="min-height: '+a(m)+"px; padding-top: "+a(b)+"px; padding-right: "+a(b+(w.sideWrapper?I+b:0))+"px; padding-left: "+a(f+b)+'px;">';for(var C=0,H=w.subs,D=H.length;C<D;C++){x+='<div mxv mxa="_zs_gallerydh:c" class="_zs_galleryiq"><div mxa="_zs_gallerydh:d" class="_zs_galleryir clearfix">',(A=H[C]).icon&&(x+='<span mxa="_zs_gallerydh:e" class="_zs_galleryis">'+r(A.icon)+"</span>"),x+='<span mxa="_zs_gallerydh:f" class="_zs_galleryit">'+a(A.label)+"</span>",A.tip&&(x+='<span mxa="_zs_gallerydh:g" class="_zs_galleryiv">'+r(A.tip)+"</span>"),x+='</div><div mxv="curStepInfo,childInfos" class="_zs_galleryiw" id="sub_frame_'+a(A.index)+'" mx-view="'+a(A.view)+"?info="+_(l,A)+"&data="+_(l,S)+'"><div mxs="_zs_gallerydh:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div></div>'}return x+=" ",w.sideWrapper&&(x+='<div mxv="curStepInfo" class="_zs_galleryix" style="top: '+a(b)+"px; right: "+a(b)+"px; width: "+a(I)+'px;" mx-view="'+a(w.sideWrapper)+"?data="+_(l,w.sideData)+'"><div mxs="_zs_gallerydh:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div>'),x+='<div mxa="_zs_gallerydh:h" class="_zs_galleryiA"><div>',w.prevTip&&(x+='<a mxa="_zs_gallerydh:i" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+i+'prev()">'+a(w.prevTip)+"</a>"),x+=" ",w.nextTip&&(x+='<a mxa="_zs_gallerydh:j" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+i+'next()">'+a(w.nextTip)+"</a>"),x+='</div><div id="'+a(k)+'_error" class="_zs_galleryiC"></div></div></div>'},init:function(e){var i=this;i.updater.set({gapWidth:16,leftWidth:+e.leftWidth||160,rightWidth:+e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:i.id,viewHeight:$(window).height()}),i.observeLocation(["stepIndex","subStepIndex"]),i.owner.oncreated=function(){i.$init||(i.subScroll(),i.$init=1)},i.ondestroy=function(){i.owner.off("created")}},render:function(){var e=this;e.$init=null;var i=e.updater,l=+i.get("alreadyStep"),a=i.get("stepInfos"),s=r.parse().params,_=+(s.stepIndex||1);_>l&&(l=_);var t=+s.subStepIndex||-1;if(a.forEach(function(i,r){var s=r+1;i.index=s,i.subs=i.subs||[],(i=e.wrapSide(i)).locked=s>l,s==_&&(t>i.subs.length||1==i.subs.length)&&(t=-1);var n="";s>1&&!a[r-1].locked&&(n=i.prevTip||"返回上一步"),i.prevTip=n;var d="";s<a.length&&(d=i.nextTip||"下一步"),i.nextTip=d}),s.stepIndex+""==_+""&&s.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:l,curStepInfo:a[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(r.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var d=$("#"+e.id+" ._zs_galleryim");d.find("._zs_galleryif").removeClass("_zs_galleryii"),d.find('._zs_galleryif[data-sub="'+t+'"]').addClass("_zs_galleryii"),e.subScroll()}else e.$inited=1,n()}else r.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var i=+this.updater.get("rightWidth"),l=!1,a=null,r={};(e.sideView||e.sideTip)&&(a="mx-main/tip",r={view:e.sideView||"",title:e.sideTitle||"",content:e.sideTip||""},l=!0);var s=!1;return e.subs.forEach(function(e,i){e.index=i+1;var a=null,r={};if(!l){var _=!1;(e.sideView||e.sideTip)&&(a="mx-main/tip",r={view:e.sideView||"",content:e.sideTip||""},_=!0),s=s||_}e.sideWrapper=a,e.sideData=r}),l=l||s,e.hasSide=l,e.sideWrapper=a,e.sideData=r,e.rightWidth=l?i:0,e},subScroll:function(){var e,i=+this.updater.get("curSubStepIndex");i>0?e=$("#"+this.id+" #sub_frame_"+i).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),i=e.find("._zs_galleryip");if(i.length){var l=e.find("._zs_galleryid"),a=$(window).scrollTop();a>i.offset().top?l.css({position:"fixed"}):l.css({position:"absolute"});var r=e.find("._zs_galleryix");if(r.length){var s=i.offset().top,_=this.updater.get().gapWidth;a>s+_?r.css({position:"fixed",top:0}):r.css({position:"absolute",top:_+"px"})}}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find(".unfound-[main]-from-index.less").css({minHeight:e})},"prev<click>":function(e){var i=this.updater.get("curStepIndex");r.to({stepIndex:+i-1,subStepIndex:-1})},"next<click>":function(e){var i=this,l=i.updater.get("curStepInfo"),r=l.subs,_=r.map(function(e){return s.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var s=!0,_=[],t={},n=$("#"+i.id+"_error");if(e.forEach(function(e,i){s=s&&e.ok,e.ok||_.push({id:i+1,label:r[i].label,msg:e.msg||""}),a.mix(t,e.remain||{})}),s)n.html(""),l.nextFn?l.nextFn(t,function(e){i.next(e)}):i.next({});else{n.html('\n                    <i class="mc-iconfont unfound-[error-icon]-from-index.less">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var d=$("#"+i.id+" #sub_frame_"+_[0].id);$(window).scrollTop(d.offset().top)}})},"nav<click>":function(e){var i=e.params,l=i.stepIndex,a=i.subStepIndex||-1;r.to({stepIndex:l,subStepIndex:a})},next:function(e){var i=this.updater.get("curStepIndex");e.stepIndex=+i+1,r.to(e)}})});