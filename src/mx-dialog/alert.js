define("mx-dialog/alert",["magix"],(t,i,n)=>{var e=t("magix");n.exports=e.View.extend({tmpl:function(t){var i="",n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},e=/[&<>"'`]/g,_=function(t){return null==t?"":""+t},a=function(t){return"&"+n[t]+";"},l=function(t){return _(t).replace(e,a)};return i+='<div class="_aE"><h4>'+l(t.title)+'</h4></div><div class="_aF" style="word-break:break-all;">'+l(t.body)+'</div><div class="_aG"><button mx-click="__aK();" class="_an _ao" type="button">确定</button></div>'},init:function(t){this.__bh=t.dialog,this.__bi=t.body,this.__bj=t.title||"提示",this.__bk=t.enterCallback},render:function(){this.updater.digest({body:this.__bi,title:this.__bj})},"__aK<click>":function(){this.__bh.close(),this.__bk&&e.toTry(this.__bk)}})});