define("mx-popconfirm/content",["magix"],(i,r,a)=>{var l=i("magix");l.applyStyle("_zs_galleryam","._zs_galleryiu,._zs_galleryiv,._zs_galleryiw,._zs_galleryix,._zs_galleryiy,._zs_galleryiz,._zs_galleryiA,._zs_galleryiB,._zs_galleryiC,._zs_galleryiD,._zs_galleryiE,._zs_galleryiF{opacity:0;transition:transform .15s,opacity .15s;transform:scale(0)}._zs_galleryiv,._zs_galleryiC{transform-origin:0 0}._zs_galleryiw,._zs_galleryiz{transform-origin:100% 0}._zs_galleryiu{transform-origin:50% 0}._zs_galleryiA,._zs_galleryiE{transform-origin:0 100%}._zs_galleryix,._zs_galleryiF{transform-origin:100% 100%}._zs_galleryiD{transform-origin:50% 100%}._zs_galleryiy{transform-origin:100% 50%}._zs_galleryiB{transform-origin:0 50%}._zs_galleryiG{opacity:1;transform:scale(1)}._zs_galleryiH{display:none}._zs_galleryiI,._zs_galleryiJ{position:absolute;z-index:9999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_galleryiI{background-color:#fff;color:#333}._zs_galleryiI ._zs_galleryiK{padding:10px;word-break:break-all}._zs_galleryiJ{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryiJ ._zs_galleryiK{padding:4px 10px}"),a.exports=l.View.extend({tmpl:function(i,r,a,l,e,n,s,t){if(a||(a=i),!e){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(i){return"&"+_[i]+";"};e=function(i){return""+(null==i?"":i)},function(i){return e(i).replace(o,g)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(i){return c[i]},z=/[!')(*]/g;n=function(i){return encodeURIComponent(e(i)).replace(z,y)}}if(!t){var f=/[\\'"]/g;t=function(i){return e(i).replace(f,"\\$&")}}var p="",u=i.content;return p+='<div mxa="_zs_gallerydc:_" class="_zs_galleryiK">'+e(u)+'</div><div mxs="_zs_gallerydc:_" class="pl10 pt10 pb10"><a href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="'+r+'submit()">确定</a><a href="javascript:;" class="btn btn-small" mx-click="'+r+'cancel()">取消</a></div>'},init:function(i){this.viewOptions=i;var r=i.data||{};this.updater.set({content:r.content||""})},render:function(){this.updater.digest({})},"submit<click>":function(i){var r=this.viewOptions;r.submit&&r.submit()},"cancel<click>":function(i){var r=this.viewOptions;r.cancel&&r.cancel()}})});