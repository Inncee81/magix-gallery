define("examples/leave-dlg",["magix"],(a,e,t)=>{var l=a("magix");t.exports=l.View.extend({tmpl:function(a,e,t,l,n,i,c,r){if(t||(t=a),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(a){return"&"+s[a]+";"};n=function(a){return""+(null==a?"":a)},l=function(a){return n(a).replace(o,u)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(a){return d[a]},m=/[!')(*]/g;i=function(a){return encodeURIComponent(n(a)).replace(m,v)}}if(!r){var p=/[\\'"]/g;r=function(a){return n(a).replace(p,"\\$&")}}var f="",g=a.title,b=a.content;return f+='<div mxa="_zs_galleryk:_" class="dialog-header"><span mxa="_zs_galleryk:a" class="fontsize-16">'+l(g)+'</span></div><div mxa="_zs_galleryk:b" class="dialog-body"><div mxa="_zs_galleryk:c" class="pt20 pb20">'+l(b)+'</div></div><div mxs="_zs_galleryk:_" class="dialog-footer"><a href="javascript:;" class="btn btn-brand btn-small mr10" mx-click="'+e+'submit({save:true})">保存并离开</a><a href="javascript:;" class="btn btn-small mr10" mx-click="'+e+'submit()">离开不保存</a><a href="javascript:;" class="btn btn-small mr10" mx-click="'+e+'cancel()">取消</a></div>'},init:function(a){this.viewOptions=a,this.updater.set(a)},render:function(){this.updater.digest()},"submit<click>":function(a){a.preventDefault();var e=this.viewOptions;e.enterCallback&&e.enterCallback(a.params.save),e.dialog&&e.dialog.close()},"cancel<click>":function(a){a.preventDefault();var e=this.viewOptions;e.cancelCallback&&e.cancelCallback(),e.dialog&&e.dialog.close()}})});