define("mx-dialog/confirm",["magix","../mx-medusa/util"],(a,t,e)=>{var i=a("magix"),l=a("../mx-medusa/util");i.applyStyle("_zs_galleryz","._zs_gallerycS{font-size:16px;margin-bottom:20px}"),e.exports=i.View.extend({tmpl:function(a,t,e,i,l,n,_,c){if(e||(e=a),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,o=function(a){return"&"+r[a]+";"};l=function(a){return""+(null==a?"":a)},i=function(a){return l(a).replace(s,o)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(a){return g[a]},m=/[!')(*]/g;n=function(a){return encodeURIComponent(l(a)).replace(m,d)}}if(!c){var u=/[\\'"]/g;c=function(a){return l(a).replace(u,"\\$&")}}var x="",f=a.title,v=a.content,p=a.enterText,y=a.cancelText;return x+='<div mxa="_zs_galleryag:_" class="dialog-body"><div mxa="_zs_galleryag:a" class="_zs_gallerycS">'+i(f)+'</div><div mxa="_zs_galleryag:b" class="word-break">'+l(v)+'</div></div><div mxa="_zs_galleryag:c" class="dialog-footer"><a mxa="_zs_galleryag:d" href="javascript:;" class="btn btn-small btn-brand min-width-50 mr10" mx-click="'+t+'__ai();">'+i(p)+'</a><a mxa="_zs_galleryag:e" href="javascript:;" class="btn btn-small min-width-50" mx-click="'+t+'__K()">'+i(y)+"</a></div>"},init:function(a){var t=this;t.__ac=a.dialog,t.__ad=a.content,t.__ae=a.title||l["dialog.tip"],t.__af=a.enterText||l["dialog.submit"],t.__aj=a.cancelText||l["dialog.cancel"],t.__ag=a.enterCallback,t.__ak=a.cancelCallback},render:function(){var a=this;a.updater.digest({content:a.__ad,title:a.__ae,enterText:a.__af,cancelText:a.__aj})},"__ai<click>":function(){this.__ac.close(),this.__ag&&i.toTry(this.__ag)},"__K<click>":function(){this.__ac.close(),this.__ak&&i.toTry(this.__ak)}})});