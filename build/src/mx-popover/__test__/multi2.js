define("mx-popover/__test__/multi2",["magix","mx-popover/index"],(e,i,r)=>{var t=e("magix"),n=e("mx-popover/index");r.exports=t.View.extend({tmpl:function(e,i,r,t,n,a,o,s){if(r||(r=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(c,d)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return p[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(m,v)}}if(!s){var u=/[\\'"]/g;s=function(e){return n(e).replace(u,"\\$&")}}o||(o=function(e,i,r,t){for(t=e[x];--t;)if(e[r=x+t]===i)return r;return e[r=x+e[x]++]=i,r});var x="",f="",g=e.viewId,_=e.custom;return f+='<div mxs="_zs_gallerydr:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div mxv class="dialog-body" style="height: 200px; overflow-y: scroll;" id="'+t(g)+'_wrapper"><div mxs="_zs_gallerydr:a" class="mb20">滚动区域</div><div mxv mxa="_zs_gallerydr:_" style="height: 400px; padding: 20px; border: 1px solid #e6e6e6;"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&scrollWrapper='+a(g)+"_wrapper&view=mx-popover%2F__test__%2Fcustom&data="+o(r,_)+'">提示内容为自定义view</span></div></div><div mxs="_zs_gallerydr:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+i+'cancel()">取消</a></div>'},mixins:[n],init:function(e){this.viewOptions=e},render:function(){this.updater.digest({viewId:this.id,custom:{list:[{name:"消耗",key:"charge",type:"double"},{name:"展现量",key:"adPv",type:"integer"},{name:"点击量",key:"click",type:"integer"},{name:"点击率",key:"ctr",type:"percent"}]}})},"cancel<click>":function(e){e.preventDefault();var i=this.viewOptions;i.dialog&&i.dialog.close()}})});