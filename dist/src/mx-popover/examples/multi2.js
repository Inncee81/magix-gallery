define("mx-popover/examples/multi2",["magix","mx-popover/index"],(e,i,n)=>{var r=e("magix"),t=e("mx-popover/index");n.exports=r.View.extend({tmpl:function(e,i,n,r,t,a,o,s){if(n||(n=e),!t){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,c=function(e){return"&"+l[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(p,c)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(m,v)}}if(!s){var u=/[\\'"]/g;s=function(e){return t(e).replace(u,"\\$&")}}o||(o=function(e,i,n,r){for(r=e[x];--r;)if(e[n=x+r]===i)return n;return e[n=x+e[x]++]=i,n});var x="",f="",g=e.viewId,y=e.custom;return f+='<div mxs="_zs_gallerydP:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div mxv class="dialog-body" style="height: 200px; overflow-y: scroll;" id="'+r(g)+'_wrapper"><div mxs="_zs_gallerydP:a" class="mb20">滚动区域</div><div mxv mxa="_zs_gallerydP:_" style="height: 400px; padding: 20px; border: 1px solid #e6e6e6;"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&scrollWrapper='+a(g)+"_wrapper&view=mx-popover%2Fexamples%2Fcustom&data="+o(n,y)+'">提示内容为自定义view</span></div></div><div mxs="_zs_gallerydP:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+i+'cancel()">取消</a></div>'},mixins:[t],init:function(e){this.viewOptions=e},render:function(){this.updater.digest({viewId:this.id,custom:{list:[{name:"消耗",key:"charge",type:"double"},{name:"展现量",key:"adPv",type:"integer"},{name:"点击量",key:"click",type:"integer"},{name:"点击率",key:"ctr",type:"percent"}]}})},"cancel<click>":function(e){e.preventDefault();var i=this.viewOptions;i.dialog&&i.dialog.close()}})});