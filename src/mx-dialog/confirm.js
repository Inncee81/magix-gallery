define("mx-dialog/confirm",["magix"],(t,i,_)=>{var n=t("magix");_.exports=n.View.extend({tmpl:function(t){var i="",_={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,l=function(t){return null==t?"":""+t},a=function(t){return"&"+_[t]+";"},c=function(t){return l(t).replace(n,a)};return i+='<div class="_aE"><h4>'+c(t.title)+'</h4></div><div class="_aF" style="word-break:break-all;">'+c(t.body)+'</div><div class="_aG"><button type="button" mx-click="__aK()" class="_an _ao _h">确定</button><button type="button" mx-click="__T()" class="_an">取消</button></div>'},init:function(t){this.__bh=t.dialog,this.__bi=t.body,this.__bj=t.title||"提示",this.__bk=t.enterCallback,this.__bl=t.cancelCallback},render:function(){this.updater.digest({body:this.__bi,title:this.__bj})},"__aK<click>":function(){this.__bh.close(),this.__bk&&n.toTry(this.__bk)},"__T<click>":function(){this.__bh.close(),this.__bl&&n.toTry(this.__bl)}})});