define("mx-form/__test__/error-inner",["magix","$","mx-form/index","mx-form/validator"],(e,r,t)=>{var i=e("magix"),a=(e("$"),e("mx-form/index")),n=e("mx-form/validator");t.exports=i.View.extend({tmpl:function(e,r,t,i,a,n,l,o){if(t||(t=e),!a){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,u=function(e){return"&"+v[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(m,u)}}if(!n){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return f[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(_,c)}}if(!o){var s=/[\\'"]/g;o=function(e){return a(e).replace(s,"\\$&")}}var x,d,p,$="",g=e.list,w=e.viewId;e.info;try{p=1,d="each list as item",x="<%for (var $art_ilwvlnvpn$art_i = 0, $art_csiezeleje$art_c = list.length; $art_ilwvlnvpn$art_i < $art_csiezeleje$art_c; $art_ilwvlnvpn$art_i++) {    var item = list[$art_ilwvlnvpn$art_i]%>";for(var h=0,I=g.length;h<I;h++){var y=g[h];$+='<label mxv mxa="_zs_gallerych:_" class="mr30"><input mxe="'+r+'_0" mxc="[',p=6,d=":info.age{required:[true,'必选']}",$+='{p:\'info.age\',f:{required:[true,\'必选\']}}]" type="radio" class="radio" name="',p=4,d="=viewId",$+=(x="<%=viewId%>",i(w)+'_radio" value="'),p=5,d="=item.value",$+=(x="<%=item.value%>",i(y.value)+'"/>'),p=7,d="=item.text",$+=(x="<%=item.text%>",i(y.text)+"</label>"),p=9,d="/each",x="<%}%>"}}catch(e){var z="render view error:"+(e.message||e);throw d&&(z+="\r\n\tsrc art:{{"+d+"}}\r\n\tat line:"+p),z+="\r\n\t"+(d?"translate to:":"expr:"),z+=x+"\r\n\tat file:mx-form/__test__/error-inner.html"}return $},mixins:[a,n],render:function(){this.updater.digest({viewId:this.id,list:[{text:"10~20岁",value:1},{text:"20~30岁",value:2},{text:"30~40岁",value:3}],info:{age:2}})}})});