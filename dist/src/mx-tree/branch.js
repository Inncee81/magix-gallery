define("mx-tree/branch",["magix","$"],(e,r,t)=>{var l=e("magix"),i=e("$"),n=l.Vframe;l.applyStyle("_zs_galleryaG",':root{--mx-tree-oper-size:calc(var(--font-size) + 2px)}._zs_gallerykY{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerykY ._zs_gallerykZ{float:left;width:var(--mx-tree-oper-size);height:var(--mx-tree-oper-size);margin-right:5px;line-height:var(--mx-tree-oper-size);font-size:var(--mx-tree-oper-size);color:#ccc;transition:color var(--duration);-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerykY ._zs_galleryl_{cursor:pointer}._zs_gallerykY ._zs_galleryl_:hover{color:#666}._zs_galleryla ._zs_gallerykY{height:0;padding-bottom:0}._zs_gallerylb{position:relative}._zs_gallerylc{padding-left:calc(var(--mx-tree-oper-size) + 5px)}._zs_galleryld,._zs_galleryld ._zs_gallerylb{position:relative}._zs_galleryld ._zs_gallerylb:after{content:"";position:absolute;top:22px;left:calc(var(--mx-tree-oper-size)/2);bottom:2px;width:1px;background-color:var(--color-border)}._zs_galleryld ._zs_gallerylb:last-child:after{content:none}'),t.exports=l.View.extend({tmpl:function(e,r,t,l,i,n,a,s){if(t||(t=e),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+o[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(c,_)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},h=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(h,g)}}if(!s){var p=/[\\'"]/g;s=function(e){return i(e).replace(p,"\\$&")}}a||(a=function(e,r,t,l){for(l=e[u];--l;)if(e[t=u+l]===r)return t;return e[t=u+e[u]++]=r,t});for(var u="",f="",v=e.list,m=e.needExpand,x=e.readOnly,y=e.viewId,z=e.valueKey,b=e.textKey,k=e.closeMap,w=0,Y=v.length;w<Y;w++){var E=v[w];f+='<div mxv mxa="_zs_galleryfl:_" class="_zs_gallerylb"><div mxv mxa="_zs_galleryfl:a" class="_zs_gallerykY clearfix">',m&&(f+=" ",E.children&&E.children.length>0?(f+='<i class="mc-iconfont _zs_gallerykZ _zs_galleryl_" mx-click="'+r+"__p({index:"+l(w)+'})">',E.close?f+="&#xe65b;":f+="&#xe65a;",f+="</i>"):(f+=" ",x&&(f+='<i mxs="_zs_galleryfl:_" class="mc-iconfont _zs_gallerykZ">&#xe732;</i>'),f+=" "),f+=" "),f+='<label mxv mxa="_zs_galleryfl:b" class="fl">',x||(f+='<input class="checkbox" type="checkbox" id="cb_'+l(y)+"_"+l(w)+'" value="'+l(E[z])+'" name="'+l(y)+'" mx-change="'+r+"__bY({index:"+l(w)+'})"/>'),f+=l(E[b])+"</label></div>",E.children&&E.children.length>0&&(f+='<div mxv="readOnly,needExpand,list,closeMap" id="'+l(y)+"_"+l(w)+'" class="',E.close&&(f+=" _zs_galleryla "),f+=" ",E.isAll||(f+=" _zs_gallerylc "),f+='" mx-view="mx-tree/branch?textKey='+n(b)+"&valueKey="+n(z)+"&readOnly="+a(t,x)+"&needExpand="+a(t,m)+"&list="+a(t,E.children)+"&closeMap="+a(t,k)+'"></div>'),f+="</div>"}return f},init:function(e){this.updater.set(e)},render:function(){this.updater.digest({viewId:this.id})},__fl:function(){var e,r,t=this.id;return i("#"+t+' input[name="'+t+'"]').each(function(t,l){l.indeterminate?e=r=!0:l.checked?e=!0:r=!0}),e&&r?3:e?2:1},__fm:function(e){var r=this.owner.parent(),t=0;if(r){for(var l=r.children(),a=0;a<l.length;a++)if(l[a]==e){var s=n.get(l[a]);s&&(t|=s.invoke("__fl"));break}var o=i("#cb_"+e);3===t?o.prop("indeterminate",!0):(o.prop("indeterminate",!1),o.prop("checked",2==t)),r.invoke("__fm",[r.id])}},__bX:function(e){var r=this.id;i("#"+r+' input[name="'+r+'"]').prop("indeterminate",!1).prop("checked",e);for(var t=0,l=this.owner.children();t<l.length;t++){var a=l[t],s=n.get(a);s&&s.invoke("__bX",[e])}},"__bY<change>":function(e){var r=n.get(this.id+"_"+e.params.index);r&&r.invoke("__bX",[e.eventTarget.checked]),this.__fm(this.id)},"__p<click>":function(e){e.stopPropagation();var r=i(e.eventTarget),t=e.params.index,l=i("#"+this.id+"_"+t);l.toggleClass("_zs_galleryla");var n=this.updater.get("list"),a=this.updater.get("closeMap"),s=n[t].value;l.hasClass("_zs_galleryla")?(r.html("&#xe65b;"),a[s]=!0):(r.html("&#xe65a;"),a[s]=!1)},setValues:function(e){e=e.map(function(e){return e+""});var r=this.id;i("#"+r+' input[name="'+r+'"]').each(function(r,t){e.indexOf(t.value+"")>-1&&(t.checked=!0)}),this.__fm(r)},getValues:function(){return this.get("value")},getItems:function(){return this.get("item")},get:function(e){var r=this.id,t=[];return this.updater.get("list").forEach(function(l,n){if(0==(l.children||[]).length){var a=i("#cb_"+r+"_"+n);a[0].checked&&("item"==e?t.push(l):t.push(a[0].value))}}),t}})});