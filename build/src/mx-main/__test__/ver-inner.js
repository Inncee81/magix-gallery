define("mx-main/__test__/ver-inner",["magix","$"],(e,i,t)=>{var n=e("magix"),r=e("$");n.applyStyle("_zs_gallerya_","._zs_galleryiw{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryix{height:20px;margin-top:10px;background-color:#e6e6e6}"),t.exports=n.View.extend({tmpl:function(e,i,t,n,r,a,l,s){if(t||(t=e),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(d,o)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(g,x)}}if(!s){var u=/[\\'"]/g;s=function(e){return r(e).replace(u,"\\$&")}}var f="",p=e.info;return f+='<div mxa="_zs_gallerycj:_" class="fontsize-16">第'+n(p.index)+"步："+n(p.label)+'</div><div mxs="_zs_gallerycj:_" class="_zs_galleryix" style="width: 200px;"></div><div mxs="_zs_gallerycj:a" class="_zs_galleryix" style="width: 400px;"></div><div mxs="_zs_gallerycj:a" class="_zs_galleryix" style="width: 400px;"></div><div mxs="_zs_gallerycj:a" class="_zs_galleryix" style="width: 400px;"></div>'},init:function(e){this.updater.set({info:e.info||{},data:r.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),i={};return i["test_"+e.index]=e.label,new Promise(function(t){t({ok:!0,msg:e.label,remain:i})})}})});