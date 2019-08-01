define("mx-main/ver",["magix","mx-main/steps"],(e,n,r)=>{var i=e("magix"),t=e("mx-main/steps");i.applyStyle("_zs_gallery_mx-main_ver_",'[mx-view*="mx-main/ver"] {\n  padding: 16px;\n  background-color: #e8ebf2;\n}\n._zs_gallery_mx-main_ver_-step {\n  position: relative;\n  margin-bottom: 20px;\n  padding-left: 58px;\n}\n._zs_gallery_mx-main_ver_-step:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-line {\n  position: absolute;\n  top: 47px;\n  left: 21px;\n  z-index: 2;\n  width: 0;\n  height: 100%;\n  margin-left: -1px;\n  border-left: 2px solid #fff;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle {\n  position: absolute;\n  top: 5px;\n  left: 0;\n  z-index: 3;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: all var(--duration);\n  overflow: hidden;\n  cursor: pointer;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle,\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle > * {\n  display: block;\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n  text-align: center;\n  color: #ccc;\n  font-weight: bold;\n  font-size: 18px;\n}\n'),r.exports=t.extend({tmpl:function(e,n,r,i,t,a,l,s){if(r||(r=e),!t){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+p[e]+";"};t=function(e){return""+(null==e?"":e)},i=function(e){return t(e).replace(_,c)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(v,x)}}if(!s){var d=/[\\'"]/g;s=function(e){return t(e).replace(d,"\\$&")}}l||(l=function(e,n,r,i){for(i=e[u];--i;)if(e[r=u+i]===n)return r;return e[r=u+e[u]++]=n,r});var f,m,g,u="",y="",h=e.stepInfos,z=e.curStepInfo,I=e.viewId;try{g=1,m="each stepInfos as step",f="<%for (var $art_ivtvdxwafl$art_i = 0, $art_cpoogcjin$art_c = stepInfos.length; $art_ivtvdxwafl$art_i < $art_cpoogcjin$art_c; $art_ivtvdxwafl$art_i++) {    var step = stepInfos[$art_ivtvdxwafl$art_i]%>";for(var w=0,b=h.length;w<b;w++){var S=h[w];y+='<div mxv mxa="_zs_galleryc~:_" class="clearfix _zs_gallery_mx-main_ver_-step"><div mxa="_zs_galleryc~:a" class="_zs_gallery_mx-main_ver_-circle">',g=3,m="!step.icon",y+=(f="<%!step.icon%>",t(S.icon)+"</div>"),g=4,m="if (step.index < stepInfos.length)",f="<%if (step.index < stepInfos.length) {%>",S.index<h.length&&(y+='<div mxs="_zs_galleryc~:_" class="_zs_gallery_mx-main_ver_-line"></div>',g=6,m="/if",f="<%}%>"),y+='<div mxv mxa="_zs_galleryc~:b" class="grid"><div mxa="_zs_galleryc~:c" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryc~:d" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryc~:e" class="grid-title" style="margin-right: 16px;">',g=9,m="=step.label",y+=(f="<%=step.label%>",i(S.label)+"</span></div>"),g=11,m="if (!step.locked && !step.current)",f="<%if (!step.locked && !step.current) {%>",S.locked||S.current||(y+='<a class="fr lh32 color-brand" href="javascript:;" mx-click="'+n+"nav({stepIndex:",g=13,m="=step.index",y+=(f="<%=step.index%>",i(S.index)+'})">修改</a>'),g=14,m="/if",f="<%}%>"),y+="</div>",g=16,m="if step.current",f="<%if (step.current) {%>",S.current&&(y+='<div mxv mxa="_zs_galleryc~:f" class="clearfix bt-e6" style="padding: 16px 24px;"><div mxv="curStepInfo" mx-view="',g=18,m="=curStepInfo.view",y+=(f="<%=curStepInfo.view%>",i(z.view)+"?info="),g=18,m="@curStepInfo",y+=(f="<%@curStepInfo%>",l(r,z)+'" id="'),g=19,m="=viewId",y+=(f="<%=viewId%>",i(I)+'_cur_content"><div mxs="_zs_galleryc~:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryc~:g" class="pt20">'),g=23,m="if curStepInfo.prevTip",f="<%if (curStepInfo.prevTip) {%>",z.prevTip&&(y+='<a mxa="_zs_galleryc~:h" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+n+'prev()">',g=25,m="=curStepInfo.prevTip",y+=(f="<%=curStepInfo.prevTip%>",i(z.prevTip)+"</a>"),g=26,m="/if",f="<%}%>"),y+=" ",g=28,m="if curStepInfo.nextTip",f="<%if (curStepInfo.nextTip) {%>",z.nextTip&&(y+='<a mxa="_zs_galleryc~:i" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+n+'next()">',g=30,m="=curStepInfo.nextTip",y+=(f="<%=curStepInfo.nextTip%>",i(z.nextTip)+"</a>"),g=31,m="/if",f="<%}%>"),y+='</div><div id="',g=33,m="=viewId",y+=(f="<%=viewId%>",i(I)+'_error"></div></div>'),g=35,m="/if",f="<%}%>"),y+="</div></div>",g=38,m="/each",f="<%}%>"}}catch(e){var $="render view error:"+(e.message||e);throw m&&($+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+g),$+="\r\n\t"+(m?"translate to:":"expr:"),$+=f+"\r\n\tat file:mx-main/ver.html"}return y}})});