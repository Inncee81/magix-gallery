define("mx-tree/branch",["magix","$"],(e,n,t)=>{var r=e("magix"),i=e("$"),l=r.Vframe;r.applyStyle("_zs_galleryaJ",'._zs_gallerynl{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerynm{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerynm ._zs_gallerynn{float:left;height:20px;margin-right:5px;line-height:20px;color:#ccc;transition:color .25s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerynm ._zs_galleryno{cursor:pointer;font-size:14px}._zs_gallerynm ._zs_galleryno:hover{color:#666}._zs_gallerynp ._zs_gallerynm{height:0;padding-bottom:0}._zs_gallerynq{position:relative}._zs_gallerynr{padding-left:20px}._zs_galleryns,._zs_galleryns ._zs_gallerynq{position:relative}._zs_galleryns ._zs_gallerynq:after{content:"";position:absolute;top:22px;left:7px;bottom:2px;width:1px;background-color:#e6e6e6}._zs_galleryns ._zs_gallerynq:last-child:after{content:none}'),t.exports=r.View.extend({tmpl:function(e,n,t,r,i,l,a,s){if(t||(t=e),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(_,c)}}if(!l){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return g[e]},h=/[!')(*]/g;l=function(e){return encodeURIComponent(i(e)).replace(h,d)}}if(!s){var p=/[\\'"]/g;s=function(e){return i(e).replace(p,"\\$&")}}a||(a=function(e,n,t,r){for(r=e[f];--r;)if(e[t=f+r]===n)return t;return e[t=f+e[f]++]=n,t});for(var f="",u="",m=e.list,x=e.needExpand,v=e.readOnly,y=e.viewId,z=e.valueKey,b=e.textKey,k=e.fromTop,w=0,q=m.length;w<q;w++){var E=m[w];u+='<div mxv mxa="_zs_galleryen:_" class="_zs_gallerynq"><div mxv mxa="_zs_galleryen:a" class="_zs_gallerynm clearfix">',x&&(u+=" ",E.children&&E.children.length>0?(u+='<i class="mc-iconfont _zs_gallerynn _zs_galleryno" mx-click="'+n+"__o({index:"+r(w)+'})">',E.close?u+=" &#xe65b; ":u+=" &#xe65a; ",u+="</i>"):(u+=" ",v&&(u+='<i mxs="_zs_galleryen:_" class="mc-iconfont _zs_gallerynn empty">&#xe732;</i>'),u+=" "),u+=" "),u+='<label mxv mxa="_zs_galleryen:b" class="fl">',v||(u+='<input class="checkbox" type="checkbox" id="cb_'+r(y)+"_"+r(w)+'" value="'+r(E[z])+'" name="'+r(y)+'" mx-change="'+n+"__ca({index:"+r(w)+'})"/>'),u+=" "+r(E[b])+"</label></div>",E.children&&E.children.length>0&&(u+='<div mxv="readOnly,needExpand,list" id="'+r(y)+"_"+r(w)+'" class="',E.close&&(u+=" _zs_gallerynp "),u+=" ",E.isAll||(u+=" _zs_gallerynr "),u+=" ",k&&(u+=" top "),u+='" mx-view="mx-tree/branch?textKey='+l(b)+"&valueKey="+l(z)+"&readOnly="+a(t,v)+"&needExpand="+a(t,x)+"&list="+a(t,E.children)+'"></div>'),u+="</div>"}return u},init:function(e){this.updater.set(e)},render:function(){this.updater.digest({viewId:this.id})},__ff:function(){var e,n,t=this.id;return i("#"+t+' input[name="'+t+'"]').each(function(t,r){r.indeterminate?e=n=!0:r.checked?e=!0:n=!0}),e&&n?3:e?2:1},__fg:function(e){var n=this.owner.parent(),t=0;if(n){for(var r=n.children(),a=0;a<r.length;a++)if(r[a]==e){var s=l.get(r[a]);s&&(t|=s.invoke("__ff"));break}var o=i("#cb_"+e);3===t?o.prop("indeterminate",!0):(o.prop("indeterminate",!1),o.prop("checked",2==t)),n.invoke("__fg",[n.id])}},__bS:function(e){var n=this.id;i("#"+n+' input[name="'+n+'"]').prop("indeterminate",!1).prop("checked",e);for(var t=0,r=this.owner.children();t<r.length;t++){var a=r[t],s=l.get(a);s&&s.invoke("__bS",[e])}},"__ca<change>":function(e){var n=l.get(this.id+"_"+e.params.index);n&&n.invoke("__bS",[e.eventTarget.checked]),this.__fg(this.id)},"__o<click>":function(e){e.stopPropagation();var n=i(e.eventTarget),t=e.params.index,r=i("#"+this.id+"_"+t);r.toggleClass("_zs_gallerynp"),r.hasClass("_zs_gallerynp")?n.html("&#xe65b;"):n.html("&#xe65a;")},setValues:function(e){e=e.map(function(e){return e+""});var n=this.id;i("#"+n+' input[name="'+n+'"]').each(function(n,t){e.indexOf(t.value+"")>-1&&(t.checked=!0)}),this.__fg(this.id)},getValues:function(){return this.get("value")},getItems:function(){return this.get("item")},get:function(e){var n=this.id,t=[];return this.updater.get("list").forEach(function(r,l){if(0==(r.children||[]).length){var a=i("#cb_"+n+"_"+l);a[0].checked&&("item"==e?t.push(r):t.push(a[0].value))}}),t}})});