define("mx-main/steps",["magix"],(e,t,n)=>{var i=e("magix"),r=i.Router,a=i.Vframe;i.applyStyle("_zs_galleryah","._zs_galleryhV{position:relative;padding-top:10px;padding-left:20px;color:var(--color-red)}._zs_galleryhV ._zs_galleryhW{position:absolute;left:0;top:10px;color:var(--color-red)}"),n.exports=i.View.extend({init:function(e){this.updater.set({alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:this.id,viewHeight:$(window).height()}),this.observeLocation(["stepIndex"])},render:function(){var e=this.updater,t=+e.get("alreadyStep"),n=e.get("stepInfos"),i=r.parse().params,a=+(i.stepIndex||1);a>t&&(t=a);n.forEach(function(e,i){var r=i+1;e.index=r,e.locked=r>t,e.lineOn=r<t,e.current=r==a,e.icon=e.icon||'<span class="fontsize-16">'+e.index+"</span>";var o="";r>1&&!n[i-1].locked&&(o=e.prevTip||"返回上一步"),e.prevTip=o;var p="";r<n.length&&(p=e.nextTip||"下一步"),e.nextTip=p}),i.stepIndex+""==a+""?this.updater.digest({alreadyStep:t,stepInfos:n,curStepInfo:n[a-1],curStepIndex:a}):r.to({stepIndex:a})},"prev<click>":function(e){var t=this.updater.get("curStepIndex");r.to({stepIndex:+t-1})},"nav<click>":function(e){var t=e.params.stepIndex;r.to({stepIndex:t})},next:function(e){var t=this.updater.get("curStepIndex");e.stepIndex=+t+1,r.to(e)},"next<click>":function(e){var t=this,n=t.updater.get("curStepInfo");a.get(t.id+"_cur_content").invoke("check").then(function(e){var i=$("#"+t.id+"_error");e.ok?(i.html(""),n.nextFn?n.nextFn(e.remain,function(e){t.next(e)}):t.next({})):i.html('<div class="_zs_galleryhV"><i class="mc-iconfont _zs_galleryhW">&#xe6ad;</i>'+e.msg+"</div>")})}})});