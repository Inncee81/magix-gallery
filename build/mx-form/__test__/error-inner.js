define("mx-form/__test__/error-inner",["magix","$","mx-form/index","mx-form/validator"],(t,r,e)=>{var a=t("magix"),i=(t("$"),t("mx-form/index")),n=t("mx-form/validator");e.exports=a.View.extend({tmpl:function(t,r,e,a,i,n,o,l){if(e||(e=t),!i){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,c=function(t){return"&"+v[t]+";"};i=function(t){return""+(null==t?"":t)},a=function(t){return i(t).replace(m,c)}}if(!n){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(t){return u[t]},d=/[!')(*]/g;n=function(t){return encodeURIComponent(i(t)).replace(d,f)}}if(!l){var _=/[\\'"]/g;l=function(t){return i(t).replace(_,"\\$&")}}var x,s,g,$="",p=t.list,h=t.viewId;t.info;try{g=1,s="each list as item",x="<%for (var $art_ivfdvgobc$art_i = 0, $art_cqczwtpu$art_c = list.length; $art_ivfdvgobc$art_i < $art_cqczwtpu$art_c; $art_ivfdvgobc$art_i++) {    var item = list[$art_ivfdvgobc$art_i]%>";for(var w=0,b=p.length;w<b;w++){var I=p[w];$+='<label mxv mxa="_zs_gallerych:_" class="mr30"><input mxe="'+r+'_0" mxc="[',g=6,s=":info.age{required:[true,'必选']}",$+='{p:\'info.age\',f:{required:[true,\'必选\']}}]" type="radio" class="radio" name="',g=4,s="=viewId",$+=(x="<%=viewId%>",a(h)+'_radio" value="'),g=5,s="=item.value",$+=(x="<%=item.value%>",a(I.value)+'"/>'),g=7,s="=item.text",$+=(x="<%=item.text%>",a(I.text)+"</label>"),g=9,s="/each",x="<%}%>"}}catch(t){var q="render view error:"+(t.message||t);throw s&&(q+="\r\n\tsrc art:{{"+s+"}}\r\n\tat line:"+g),q+="\r\n\t"+(s?"translate to:":"expr:"),q+=x+"\r\n\tat file:mx-form/__test__/error-inner.html"}return $},mixins:[i,n],render:function(){this.updater.digest({viewId:this.id,list:[{text:"10~20岁",value:1},{text:"20~30岁",value:2},{text:"30~40岁",value:3}],info:{age:2}})}})});