define("mx-main/examples/ver-inner",["magix","$"],(e,i,n)=>{var r=e("magix"),t=e("$");r.applyStyle("_zs_galleryae","._zs_galleryie{height:20px;margin-top:10px;background-color:var(--color-border)}"),n.exports=r.View.extend({tmpl:function(e,i,n,r,t,a,l,s){if(n||(n=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(o,c)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return _[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(g,u)}}if(!s){var f=/[\\'"]/g;s=function(e){return t(e).replace(f,"\\$&")}}var p="",x=e.info;return p+='<div mxa="_zs_gallerydw:_" class="fontsize-16">第'+r(x.index)+"步："+r(x.label)+'</div><div mxs="_zs_gallerydw:_" class="_zs_galleryie" style="width: 200px;"></div><div mxs="_zs_gallerydw:a" class="_zs_galleryie" style="width: 400px;"></div><div mxs="_zs_gallerydw:a" class="_zs_galleryie" style="width: 400px;"></div><div mxs="_zs_gallerydw:a" class="_zs_galleryie" style="width: 400px;"></div>'},init:function(e){this.updater.set({info:e.info||{},data:t.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),i={};return i["test_"+e.index]=e.label,new Promise(function(n){n({ok:!0,msg:e.label,remain:i})})}})});