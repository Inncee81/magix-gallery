define("mx-main/hor",["magix","mx-main/steps"],(n,r,e)=>{var i=n("magix"),l=n("mx-main/steps");i.applyStyle("_zs_gallery_mx-main_hor_","._zs_gallery_mx-main_hor_-steps {\n  box-sizing: border-box;\n  display: flex;\n}\n._zs_gallery_mx-main_hor_-step {\n  position: relative;\n  display: inline-block;\n  margin-right: 10px;\n  white-space: nowrap;\n  flex: 1;\n  vertical-align: top;\n  overflow: hidden;\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-circle {\n  float: left;\n  position: relative;\n  z-index: 3;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n  text-align: center;\n  line-height: 26px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-circle ._zs_gallery_mx-main_hor_-circle-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  line-height: 26px;\n  font-size: 26px;\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-title {\n  float: left;\n  position: relative;\n  z-index: 3;\n  padding-right: 10px;\n  padding-left: 6px;\n  font-size: 14px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all var(--duration);\n  line-height: 28px;\n}\n._zs_gallery_mx-main_hor_-step:after {\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 0;\n  border-top: 1px solid var(--color-border);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_hor_-step:last-child {\n  flex: none;\n}\n._zs_gallery_mx-main_hor_-step:last-child:after {\n  display: none;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-locked ._zs_gallery_mx-main_hor_-circle {\n  border-color: var(--color-border);\n  background-color: var(--color-disabled);\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-locked ._zs_gallery_mx-main_hor_-title {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-line-on:after {\n  border-top: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-current ._zs_gallery_mx-main_hor_-circle {\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-current ._zs_gallery_mx-main_hor_-title {\n  color: var(--color-brand);\n}\n"),e.exports=l.extend({tmpl:function(n,r,e,i,l,a,t,_){if(e||(e=n),!l){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(n){return"&"+o[n]+";"};l=function(n){return""+(null==n?"":n)},i=function(n){return l(n).replace(s,c)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(n){return p[n]},m=/[!')(*]/g;a=function(n){return encodeURIComponent(l(n)).replace(m,d)}}if(!_){var x=/[\\'"]/g;_=function(n){return l(n).replace(x,"\\$&")}}t||(t=function(n,r,e,i){for(i=n[h];--i;)if(n[e=h+i]===r)return e;return n[e=h+n[h]++]=r,e});var f,g,v,h="",u="",z=n.stepInfos,y=n.curStepInfo,b=n.viewId;try{u+='<div mxa="_zs_galleryc|:_" class="_zs_gallery_mx-main_hor_-steps">',v=2,g="each stepInfos as step",f="<%for (var $art_ilvrvatazp$art_i = 0, $art_cpdirbxsq$art_c = stepInfos.length; $art_ilvrvatazp$art_i < $art_cpdirbxsq$art_c; $art_ilvrvatazp$art_i++) {    var step = stepInfos[$art_ilvrvatazp$art_i]%>";for(var I=0,w=z.length;I<w;I++){var k=z[I];u+='<div class="clearfix _zs_gallery_mx-main_hor_-step ',v=3,g="if step.current",f="<%if (step.current) {%>",k.current&&(u+=" _zs_gallery_mx-main_hor_-current ",v=3,g="/if",f="<%}%>"),u+=" ",v=3,g="if step.locked",f="<%if (step.locked) {%>",k.locked&&(u+=" _zs_gallery_mx-main_hor_-locked ",v=3,g="/if",f="<%}%>"),u+=" ",v=3,g="if step.locked",f="<%if (step.locked) {%>",k.locked&&(u+=" _zs_gallery_mx-main_hor_-locked ",v=3,g="/if",f="<%}%>"),u+=" ",v=3,g="if step.lineOn",f="<%if (step.lineOn) {%>",k.lineOn&&(u+=" _zs_gallery_mx-main_hor_-line-on ",v=3,g="/if",f="<%}%>"),u+='" ',v=4,g="if !step.locked",f="<%if (!step.locked) {%>",k.locked||(u+=' mx-click="'+r+"nav({stepIndex:",v=4,g="=step.index",u+=(f="<%=step.index%>",i(k.index)+'})" '),v=4,g="/if",f="<%}%>"),u+='><div mxa="_zs_galleryc|:a" class="_zs_gallery_mx-main_hor_-circle">',v=6,g="if step.lineOn",f="<%if (step.lineOn) {%>",k.lineOn?(u+='<i mxs="_zs_galleryc|:_" class="mc-iconfont _zs_gallery_mx-main_hor_-circle-icon">&#xe65d;</i>',v=8,g="else",f="<%}    else {%>"):(u+=" ",v=9,g="=step.index",u+=(f="<%=step.index%>",i(k.index)+" "),v=10,g="/if",f="<%}%>"),u+='</div><div mxa="_zs_galleryc|:b" class="_zs_gallery_mx-main_hor_-title">',v=12,g="=step.label",u+=(f="<%=step.label%>",i(k.label)+"</div></div>"),v=14,g="/each",f="<%}%>"}u+='</div><div mxv="curStepInfo" mx-view="',v=16,g="=curStepInfo.view",u+=(f="<%=curStepInfo.view%>",i(y.view)+"?info="),v=16,g="@curStepInfo",u+=(f="<%@curStepInfo%>",t(e,y)+'" class="pt20 pb20" id="'),v=17,g="=viewId",u+=(f="<%=viewId%>",i(b)+'_cur_content"><div mxs="_zs_galleryc|:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div>'),v=21,g="if curStepInfo.prevTip",f="<%if (curStepInfo.prevTip) {%>",y.prevTip&&(u+='<a mxa="_zs_galleryc|:c" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+r+'prev()">',v=23,g="=curStepInfo.prevTip",u+=(f="<%=curStepInfo.prevTip%>",i(y.prevTip)+"</a>"),v=24,g="/if",f="<%}%>"),u+=" ",v=26,g="if curStepInfo.nextTip",f="<%if (curStepInfo.nextTip) {%>",y.nextTip&&(u+='<a mxa="_zs_galleryc|:d" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+r+'next()">',v=28,g="=curStepInfo.nextTip",u+=(f="<%=curStepInfo.nextTip%>",i(y.nextTip)+"</a>"),v=29,g="/if",f="<%}%>"),u+='</div><div id="',v=31,g="=viewId",u+=(f="<%=viewId%>",i(b)+'_error"></div>')}catch(n){var S="render view error:"+(n.message||n);throw g&&(S+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+v),S+="\r\n\t"+(g?"translate to:":"expr:"),S+=f+"\r\n\tat file:mx-main/hor.html"}return u}})});