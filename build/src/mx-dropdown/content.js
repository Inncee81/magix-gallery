define("mx-dropdown/content",["magix","../mx-medusa/util"],(e,t,a)=>{var l=e("magix"),s=e("../mx-medusa/util");l.applyStyle("_zs_galleryG","._zs_galleryea{min-width:600px}._zs_galleryea ._zs_galleryeb{float:left;width:25%}._zs_galleryea ._zs_galleryec{margin-bottom:10px}._zs_galleryed{padding-top:10px;padding-left:18px;padding-right:18px;line-height:16px}._zs_galleryed ._zs_galleryee{float:left;padding-right:20px;color:#999}._zs_galleryed ._zs_galleryee:hover{color:var(--color-brand)}._zs_galleryed._zs_galleryef{padding-left:12px;padding-right:12px}"),a.exports=l.View.extend({tmpl:function(e,t,a,l,s,i,r,c){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(o,d)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return u[e]},_=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(_,p)}}if(!c){var m=/[\\'"]/g;c=function(e){return s(e).replace(m,"\\$&")}}r||(r=function(e,t,a,l){for(l=e[h];--l;)if(e[a=h+l]===t)return a;return e[a=h+e[h]++]=t,a});var h="",x="",f=e.searchbox,g=e.text,v=e.keyword,b=e.multiple,y=e.spm,k=e.allHide,z=e.height,w=e.parents,E=e.hasGroups;if(f&&(x+='<div mxv mxa="_zs_gallerya::_" class="mx-output-search"><div mxv mxa="_zs_gallerya::a" class="search-box" style="width: 100%;"><i mxs="_zs_gallerya::_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+l(g.search)+'" mx-keyup="'+t+'__g()" mx-paste="'+t+'__g()" mx-change="'+t+'__m()" mx-focusin="'+t+'__m()" mx-focusout="'+t+'__m()" value="'+l(v)+'"/></div></div>'),x+=" ",b&&(x+='<div mxa="_zs_gallerya::b" class="_zs_galleryed _zs_galleryef clearfix"><a class="_zs_galleryee" href="javascript:;" mx-click="'+t+'__bV({checked:true})" data-spm-click="'+l(y)+'a">'+l(g.select)+'</a><a class="_zs_galleryee" href="javascript:;" mx-click="'+t+'__bV({checked:false})" data-spm-click="'+l(y)+'ua">'+l(g.unselect)+"</a></div>"),x+=" ",k)x+='<div mxa="_zs_gallerya::c" class="text-center color-9 pt20 pb20">'+l(g.empty)+"</div>";else{x+='<ul mxv class="mx-output-list" style="max-height:'+l(z)+'px;">';for(var I=0,O=w.length;I<O;I++){var T=w[I];if(x+=" ",!T.hide){x+=" ",E&&(x+='<li class="mx-output-header" title="'+l(T.text)+'">'+l(T.text)+"</li>"),x+=" ";for(var j=0,G=T.list,L=G.length;j<L;j++){var U=G[j];x+=" ",U.hide||(x+='<li mxv class="mx-output-item" title="'+l(U.text)+'">',b?(x+='<label mxv class="mx-output-link ',U.disabled&&(x+=" mx-output-link-disabled "),x+='"><input type="checkbox" class="checkbox" ',U.selected&&(x+=' checked="true" '),x+=" ",U.disabled&&(x+=' disabled="true" '),x+=' mx-focusout="'+t+'__m()" mx-change="'+t+"__bW({parentIndex:'"+l(c(I))+"',itemIndex:'"+l(c(j))+'\'})" data-spm-click="'+l(y)+'"/>'+l(U.text)+"</label>"):(x+='<span class="mx-output-link ',U.selected&&(x+=" mx-output-link-active "),x+=" ",U.disabled&&(x+=" mx-output-link-disabled "),x+='" ',U.disabled||(x+=' mx-click="'+t+"__ac({item:'"+r(a,U)+'\'})" data-spm-click="'+l(y)+'" '),x+=">"+l(U.text)+"</span>"),x+="</li>"),x+=" "}x+=" "}x+=" "}x+="</ul>"}return x+=" ",b&&(x+='<div mxa="_zs_gallerya::d" class="mx-output-footer"><a mxa="_zs_gallerya::e" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="'+t+'__aK()">'+l(g.submit)+'</a><a mxa="_zs_gallerya::f" href="javascript:;" class="btn btn-small" mx-click="'+t+'__M()">'+l(g.cancel)+"</a></div>"),x},init:function(e){this.viewOptions=e;var t=e.data,a=$.extend(!0,[],t.parents),l=(t.selectedItems||[]).map(function(e){return e.value+""});a.forEach(function(e){e.list.forEach(function(e){e.selected=l.indexOf(e.value+"")>-1})}),this.updater.set({parents:a,hasGroups:t.hasGroups,searchbox:t.searchbox,multiple:t.multiple,spm:t.spm,height:t.height,keyword:t.keyword||"",text:{search:s["dropdown.search"],select:s["select.all"],unselect:s["unselect.all"],submit:s["dialog.submit"],cancel:s["dialog.cancel"],empty:s["empty.text"]}})},render:function(){var e=this,t=e.updater.get("keyword");e.__bT(e.__bU=t,function(t){e.updater.digest(t)})},"__ac<click>":function(e){var t=this.viewOptions;t.submit&&t.submit({keyword:this.updater.get("keyword"),selectedItems:[e.params.item]})},"__bV<click>":function(e){var t=e.params.checked,a=this.updater.get("parents");a.forEach(function(e){e.list.forEach(function(e){e.disabled||(e.selected=t)})}),this.updater.digest({parents:a})},"__bW<change>":function(e){var t=e.params.parentIndex,a=e.params.itemIndex,l=this.updater.get("parents");l[t].list[a].selected=!l[t].list[a].selected,this.updater.digest({parents:l})},"__aK<click>":function(e){var t=this.viewOptions,a=this.updater.get(),l=a.parents,s=a.keyword,i=[];l.forEach(function(e){e.list.forEach(function(e){e.selected&&i.push(e)})}),t.submit&&t.submit({keyword:s,selectedItems:i})},"__M<click>":function(e){var t=this.viewOptions;t.cancel&&t.cancel()},__bT:function(e,t){var a,l=this.updater.get().parents;if(e){a=!0;var s=(e+"").toLocaleLowerCase();l.forEach(function(e){var t=!0;e.list.forEach(function(e){var a=(e.text+"").toLocaleLowerCase();e.hide=a.indexOf(s)<0,t=t&&e.hide}),e.hide=t,a=a&&t})}else a=!1,l.forEach(function(e){e.hide=!1,e.list.forEach(function(e){e.hide=!1})});t({parents:l,allHide:a})},"__g<keyup,paste>":function(e){var t=this;clearTimeout(t.__bX);var a=$.trim(e.eventTarget.value);t.updater.set({keyword:a}),t.__bX=setTimeout(t.wrapAsync(function(){a!=t.__bU&&t.__bT(t.__bU=a,function(e){t.updater.digest(e)})}),250)},"__m<change,focusin,focusout>":function(e){e.stopPropagation()}})});