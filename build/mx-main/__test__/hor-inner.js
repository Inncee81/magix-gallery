define("mx-main/__test__/hor-inner",["magix","$"],(e,n,r)=>{var t=e("magix"),_=e("$");t.applyStyle("_zs_gallery_mx-main___test___hor-inner_","._zs_gallery_mx-main___test___hor-inner_-line {\n  height: 20px;\n  margin-top: 10px;\n  background-color: var(--color-border);\n}\n"),r.exports=t.View.extend({tmpl:function(e,n,r,t,_,i,a,l){if(r||(r=e),!_){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+s[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(o,c)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(x,m)}}if(!l){var f=/[\\'"]/g;l=function(e){return _(e).replace(f,"\\$&")}}var g,u,h,p="",v=e.info;try{p+='<div mxa="_zs_galleryc%:_" class="fontsize-16">第',h=1,u="=info.index",p+=(g="<%=info.index%>",t(v.index)+"步："),h=1,u="=info.label",p+=(g="<%=info.label%>",t(v.label)+'</div><div mxs="_zs_galleryc%:_" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 200px;"></div><div mxs="_zs_galleryc%:a" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 400px;"></div><div mxs="_zs_galleryc%:a" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 400px;"></div><div mxs="_zs_galleryc%:a" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 400px;"></div>')}catch(e){var y="render view error:"+(e.message||e);throw u&&(y+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+h),y+="\r\n\t"+(u?"translate to:":"expr:"),y+=g+"\r\n\tat file:mx-main/__test__/hor-inner.html"}return p},init:function(e){this.updater.set({info:e.info||{},data:_.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),n={};return n["test_"+e.index]=e.label,new Promise(function(r){r({ok:!0,msg:e.label,remain:n})})}})});