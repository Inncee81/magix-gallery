define("mx-indics/index",["magix","$","mx-dialog/index"],(e,l,t)=>{var r=e("magix"),a=e("$"),i=e("mx-dialog/index");r.applyStyle("_zs_galleryab",'._zs_galleryht{position:relative;height:100%}._zs_galleryht ._zs_galleryhu{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid var(--color-border)}._zs_galleryht ._zs_galleryhv{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_galleryht ._zs_galleryhv ._zs_galleryhw{position:relative;padding:16px 24px}._zs_galleryht ._zs_galleryhv ._zs_galleryhw:nth-of-type(2n){background-color:var(--color-bg)}._zs_galleryht ._zs_galleryhv ._zs_galleryhx{position:absolute;top:16px;left:24px;width:90px;padding:8px 0;color:#999}._zs_galleryht ._zs_galleryhv ._zs_galleryhy{float:left;padding:8px 0;white-space:nowrap}._zs_galleryht ._zs_galleryhv ._zs_galleryhy ._zs_galleryhz{position:relative;top:1px;left:1px;font-size:14px;color:#ccc}._zs_galleryht._zs_galleryhA ._zs_galleryhw{padding-left:122px}._zs_galleryht._zs_galleryhB{padding-right:240px}._zs_galleryht._zs_galleryhB ._zs_galleryhv{right:240px;border-right:1px solid var(--color-border)}._zs_galleryht._zs_galleryhB ._zs_galleryhC{position:absolute;top:0;right:0;width:240px;height:98px}._zs_galleryht._zs_galleryhB ._zs_galleryhC ._zs_galleryhD{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid var(--color-border)}._zs_galleryht._zs_galleryhB ._zs_galleryhC ._zs_galleryhE{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:var(--color-bg)}._zs_galleryht._zs_galleryhB ._zs_galleryhF{position:absolute;top:98px;right:0;bottom:0;width:240px;padding:0 24px 16px;overflow-y:auto;background-color:var(--color-bg)}._zs_galleryht._zs_galleryhB ._zs_galleryhF ._zs_galleryhG{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid var(--color-border);border-radius:var(--border-radius);cursor:move}._zs_galleryht._zs_galleryhB ._zs_galleryhF ._zs_galleryhG:last-child{margin-bottom:0}._zs_galleryhH{display:inline-block;width:40px;padding-right:10px;margin-right:10px;text-align:center}._zs_galleryhH ._zs_galleryhI{position:relative;top:2px;font-size:18px}._zs_galleryhJ{display:inline-block;width:auto}[mx-view*="mx-indics/index"]{display:inline-block;vertical-align:middle}[mx-view*="mx-indics/index"]:hover ._zs_galleryhH,[mx-view*="mx-indics/index"]:hover ._zs_galleryhJ{border-color:var(--border-highlight-hover);color:#333}[mx-view*="mx-indics/index"]:hover ._zs_galleryhJ ._zs_galleryhK{color:var(--border-highlight-hover)}'),t.exports=r.View.extend({tmpl:function(e,l,t,r,a,i,s,o){if(t||(t=e),!a){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,h=function(e){return"&"+g[e]+";"};a=function(e){return""+(null==e?"":e)},r=function(e){return a(e).replace(_,h)}}if(!i){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return n[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(d,p)}}if(!o){var c=/[\\'"]/g;o=function(e){return a(e).replace(c,"\\$&")}}var y="",x=e.data;return y+='<a mxs="_zs_galleryc^:_" href="javascript:;" class="mx-trigger _zs_galleryhH" mx-click="'+l+'show()"><i class="mc-iconfont _zs_galleryhI">&#xe731;</i></a><a mxa="_zs_galleryc^:_" href="javascript:;" class="mx-trigger _zs_galleryhJ" mx-click="'+l+'toggleDefault()">'+r(x.map[x.type].label)+'<i mxs="_zs_galleryc^:a" class="mc-iconfont mx-trigger-arrow _zs_galleryhK">&#xe692;</i></a>'},mixins:[i],init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),t=e.textKey||"text",r=e.valueKey||"value",a=e.parentKey||"pValue",i=[];(e.fields||[]).forEach(function(e){i.push({text:e[t],value:e[r],pValue:e[a],tip:e.tip||""})});var s=[];(e.parents||[]).forEach(function(e){s.push({text:e[t],value:e[r]})});var o=(e.customs||[]).map(function(e){return""+e}),g=(e.defaults||[]).map(function(e){return""+e});0==o.length&&(o=g);var _=+e.limit||0,h=e.sortable+""=="true",n=e.lineNumber||(h?4:5),p=e.custom+""=="true"?2:1,d={1:{label:"默认数据",list:g},2:{label:"自定义数据",list:o}};return this.updater.set({data:{parents:s,fields:i,sortable:h,lineNumber:n,limit:_,map:d,type:p}}),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"toggleDefault<click>":function(e){var l=this.updater.get("data");1==l.type?l.type=2:l.type=1,this.updater.digest({data:l}),this.__af("btn-switch")},__af:function(e){var l=this.updater.get("data"),t=l.type,r=l.map;a("#"+this.id).trigger({type:"change",triggerType:e,defaults:r[1].list,custom:2==t,customs:r[2].list})},"show<click>":function(e){e.preventDefault();var l=this,t=l.updater.get("data"),r=a.extend(!0,{},t);r.selected=r.map[r.type].list,r.callback=function(e){t.type=2,t.map[t.type].list=e.selected,l.updater.digest({data:t}),l.__af("dialog-setting")},l.mxModal("mx-indics/dialog",r,{width:1e3,closable:!1,card:!1})}})});