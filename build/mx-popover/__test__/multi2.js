define("mx-popover/__test__/multi2",["magix","mx-popover/index"],(e,t,r)=>{var i=e("magix"),n=e("mx-popover/index");r.exports=i.View.extend({tmpl:function(e,t,r,i,n,a,o,s){if(r||(r=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(c,d)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return p[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(m,v)}}if(!s){var u=/[\\'"]/g;s=function(e){return n(e).replace(u,"\\$&")}}o||(o=function(e,t,r,i){for(i=e[g];--i;)if(e[r=g+i]===t)return r;return e[r=g+e[g]++]=t,r});var x,_,f,g="",w="",y=e.viewId,h=e.custom;try{w+='<div mxs="_zs_gallerydC:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div mxv class="dialog-body" style="height: 200px; overflow-y: scroll;" id="',f=5,_="=viewId",w+=(x="<%=viewId%>",i(y)+'_wrapper"><div mxs="_zs_gallerydC:a" class="mb20">滚动区域</div><div mxv mxa="_zs_gallerydC:_" style="height: 400px; padding: 20px; border: 1px solid #e6e6e6;"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&scrollWrapper='),f=10,_="=viewId",w+=(x="<%!$eu(viewId)%>",a(y)+"_wrapper&view=mx-popover%2F__test__%2Fcustom&data="),f=12,_="@custom",w+=(x="<%@custom%>",o(r,h)+'">提示内容为自定义view</span></div></div><div mxs="_zs_gallerydC:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+t+'cancel()">取消</a></div>')}catch(e){var b="render view error:"+(e.message||e);throw _&&(b+="\r\n\tsrc art:{{"+_+"}}\r\n\tat line:"+f),b+="\r\n\t"+(_?"translate to:":"expr:"),b+=x+"\r\n\tat file:mx-popover/__test__/multi2.html"}return w},mixins:[n],init:function(e){this.viewOptions=e},render:function(){this.updater.digest({viewId:this.id,custom:{list:[{name:"消耗",key:"charge",type:"double"},{name:"展现量",key:"adPv",type:"integer"},{name:"点击量",key:"click",type:"integer"},{name:"点击率",key:"ctr",type:"percent"}]}})},"cancel<click>":function(e){e.preventDefault();var t=this.viewOptions;t.dialog&&t.dialog.close()}})});