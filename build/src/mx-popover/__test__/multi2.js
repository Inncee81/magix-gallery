define("mx-popover/__test__/multi2",["magix","mx-popover/index","../index"],(e,i,t)=>{e("../index");var n=e("magix"),r=e("mx-popover/index");t.exports=n.View.extend({tmpl:function(e,i,t,n,r,a,o,s){if(t||(t=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,p=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(l,p)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(m,v)}}if(!s){var u=/[\\'"]/g;s=function(e){return r(e).replace(u,"\\$&")}}o||(o=function(e,i,t,n){for(n=e[x];--n;)if(e[t=x+n]===i)return t;return e[t=x+e[x]++]=i,t});var x="",f="",g=e.viewId,_=e.custom;return f+='<div mxs="_zs_gallerycZ:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div mxv class="dialog-body" style="height: 200px; overflow-y: scroll;" id="'+n(g)+'_wrapper"><div mxs="_zs_gallerycZ:a" class="mb20">滚动区域</div><div mxv mxa="_zs_gallerycZ:_" style="height: 400px; padding: 20px; border: 1px solid #e6e6e6;"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&scrollWrapper='+a(g)+"_wrapper&view=mx-popover%2F__test__%2Fcustom&data="+o(t,_)+'">提示内容为自定义view</span></div></div><div mxs="_zs_gallerycZ:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+i+'cancel()">取消</a></div>'},mixins:[r],init:function(e){this.viewOptions=e},render:function(){this.updater.digest({viewId:this.id,custom:{list:[{name:"消耗",key:"charge",type:"double"},{name:"展现量",key:"adPv",type:"integer"},{name:"点击量",key:"click",type:"integer"},{name:"点击率",key:"ctr",type:"percent"}]}})},"cancel<click>":function(e){e.preventDefault();var i=this.viewOptions;i.dialog&&i.dialog.close()}})});