define("__test__/api",["magix","$"],(t,e,r)=>{var n=t("magix"),a=t("$");r.exports=n.View.extend({tmpl:function(t,e,r,n,a,i,d,l){if(r||(r=t),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(t){return"&"+o[t]+";"};a=function(t){return""+(null==t?"":t)},n=function(t){return a(t).replace(s,c)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(t){return u[t]},f=/[!')(*]/g;i=function(t){return encodeURIComponent(a(t)).replace(f,_)}}if(!l){var h=/[\\'"]/g;l=function(t){return a(t).replace(h,"\\$&")}}var p="",g=t.options;p+='<div mxa="_zs_gallery_:_" class="pr20"><table mxa="_zs_gallery_:a" class="table _zs_galleryr"><thead mxs="_zs_gallery_:_"><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody>';for(var m=0,v=g.length;m<v;m++){var y=g[m];p+="<tr><td>"+n(y.key)+"</td><td>"+a(y.desc)+"</td><td>"+a(y.type)+'</td><td mxa="_zs_gallery_:b" class="word-break">'+a(y.def)+"</td></tr>"}return p+="</tbody></table></div>"},init:function(t){this.updater.digest(t)},render:function(){this.updater.digest()},"to<click>":function(t){var e=a("#"+t.params.id);a(window).scrollTop(e.offset().top)}})});