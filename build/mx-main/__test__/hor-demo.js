define("mx-main/__test__/hor-demo",["magix","$","__test__/example","../hor"],(e,n,r)=>{e("../hor");var t=e("magix"),a=(e("$"),t.Router),i=e("__test__/example");r.exports=i.extend({tmpl:function(e,n,r,t,a,i,o,s){if(r||(r=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,l=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},function(e){return a(e).replace(p,l)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(d,c)}}if(!s){var u=/[\\'"]/g;s=function(e){return a(e).replace(u,"\\$&")}}o||(o=function(e,n,r,t){for(t=e[g];--t;)if(e[r=g+t]===n)return r;return e[r=g+e[g]++]=n,r});var f,x,v,g="",h="",I=e.alreadyStep,y=e.stepInfos;try{h+='<div mxv mxa="_zs_galleryc8:_" class="pl20 pr20 pt20"><div mxs="_zs_galleryc8:_" class="mb40"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep=',v=6,x="=alreadyStep",h+=(f="<%!$eu(alreadyStep)%>",i(I)+"&stepInfos="),v=7,x="@stepInfos",h+=(f="<%@stepInfos%>",o(r,y)+'"></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw x&&(w+="\r\n\tsrc art:{{"+x+"}}\r\n\tat line:"+v),w+="\r\n\t"+(x?"translate to:":"expr:"),w+=f+"\r\n\tat file:mx-main/__test__/hor-demo.html"}return h},render:function(){var e=a.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",view:"mx-main/__test__/hor-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",view:"mx-main/__test__/hor-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",view:"mx-main/__test__/hor-inner"},{label:"完成",view:"mx-main/__test__/hor-inner"}],alreadyStep:n})}})});