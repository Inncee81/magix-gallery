define("mx-dropdown/content",["magix","../mx-medusa/util"],(e,t,i)=>{var a=e("magix"),r=e("../mx-medusa/util");a.applyStyle("_zs_gallery_mx-dropdown_index_","._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-group-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  float: left;\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper._zs_gallery_mx-dropdown_index_-has-group {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-output ._zs_gallery_mx-dropdown_index_-dropdown-output-link {\n  height: auto;\n}\n._zs_gallery_mx-dropdown_index_-selected-text img {\n  display: none;\n}\n"),i.exports=a.View.extend({tmpl:function(e,t,i,a,r,n,s,l){if(i||(i=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(o,c)}}if(!n){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return p[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(x,m)}}if(!l){var u=/[\\'"]/g;l=function(e){return r(e).replace(u,"\\$&")}}s||(s=function(e,t,i,a){for(a=e[g];--a;)if(e[i=g+a]===t)return i;return e[i=g+e[g]++]=t,i});var _,h,f,g="",v="",b=e.searchbox,w=e.text,y=e.keyword,k=e.multiple,z=e.spm,I=e.allHide,$=e.height,j=e.parents,q=e.hasGroups;try{if(f=1,h="if searchbox",_="<%if (searchbox) {%>",b&&(v+='<div mxv mxa="_zs_gallerybi:_" class="mx-output-search"><div mxv mxa="_zs_gallerybi:a" class="search-box" style="width: 100%;"><i mxs="_zs_gallerybi:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="',f=6,h="=text.search",v+=(_="<%=text.search%>",a(w.search)+'" mx-keyup="'+t+'@{search}()" mx-paste="'+t+'@{search}()" mx-change="'+t+'@{stop}()" mx-focusin="'+t+'@{stop}()" mx-focusout="'+t+'@{stop}()" value="'),f=12,h="=keyword",v+=(_="<%=keyword%>",a(y)+'"/></div></div>'),f=15,h="/if",_="<%}%>"),v+=" ",f=16,h="if multiple",_="<%if (multiple) {%>",k&&(v+='<div mxa="_zs_gallerybi:b" class="_zs_gallery_mx-dropdown_index_-oper-wrapper _zs_gallery_mx-dropdown_index_-has-group clearfix"><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="'+t+'@{checkAll}({checked:true})" data-spm-click="',f=18,h="=spm",v+=(_="<%=spm%>",a(z)+'a">'),f=18,h="=text.select",v+=(_="<%=text.select%>",a(w.select)+'</a><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="'+t+'@{checkAll}({checked:false})" data-spm-click="'),f=19,h="=spm",v+=(_="<%=spm%>",a(z)+'ua">'),f=19,h="=text.unselect",v+=(_="<%=text.unselect%>",a(w.unselect)+"</a></div>"),f=21,h="/if",_="<%}%>"),v+=" ",f=22,h="if !allHide",_="<%if (!allHide) {%>",I)v+='<div mxa="_zs_gallerybi:c" class="text-center color-9 pt20 pb20">',f=55,h="=text.empty",v+=(_="<%=text.empty%>",a(w.empty)+"</div>"),f=56,h="/if",_="<%}%>";else{v+='<ul mxv class="mx-output-list" style="max-height:',f=23,h="=height",v+=(_="<%=height%>",a($)+'px;">'),f=24,h="each parents as parent parentIndex",_="<%for (var parentIndex = 0, $art_cjvtkvmqq$art_c = parents.length; parentIndex < $art_cjvtkvmqq$art_c; parentIndex++) {        var parent = parents[parentIndex]%>";for(var E=0,O=j.length;E<O;E++){var A=j[E];if(v+=" ",f=25,h="if !parent.hide",_="<%if (!parent.hide) {%>",!A.hide){v+=" ",f=26,h="if hasGroups",_="<%if (hasGroups) {%>",q&&(v+='<li class="mx-output-header" title="',f=27,h="=parent.text",v+=(_="<%=parent.text%>",a(A.text)+'">'),f=27,h="=parent.text",v+=(_="<%=parent.text%>",a(A.text)+"</li>"),f=28,h="/if",_="<%}%>"),v+=" ",f=29,h="each parent.list as item itemIndex",_="<%for (var itemIndex = 0, $art_objhqqecnar$art_obj = parent.list, $art_ckmjlgots$art_c = $art_objhqqecnar$art_obj.length; itemIndex < $art_ckmjlgots$art_c; itemIndex++) {                var item = $art_objhqqecnar$art_obj[itemIndex]%>";for(var G=0,H=A.list,L=H.length;G<L;G++){var C=H[G];v+=" ",f=30,h="if !item.hide",_="<%if (!item.hide) {%>",C.hide||(v+='<li mxv class="mx-output-item" title="',f=31,h="=item.text",v+=(_="<%=item.text%>",a(C.text)+'">'),f=32,h="if multiple",_="<%if (multiple) {%>",k?(v+='<label mxv class="mx-output-link ',f=33,h="if item.disabled",_="<%if (item.disabled) {%>",C.disabled&&(v+=" mx-output-link-disabled ",f=33,h="/if",_="<%}%>"),v+='"><input type="checkbox" class="checkbox" ',f=35,h="if item.selected",_="<%if (item.selected) {%>",C.selected&&(v+=' checked="true" ',f=35,h="/if",_="<%}%>"),v+=" ",f=36,h="if item.disabled",_="<%if (item.disabled) {%>",C.disabled&&(v+=' disabled="true" ',f=36,h="/if",_="<%}%>"),v+=' mx-focusout="'+t+'@{stop}()" mx-change="'+t+"@{check}({parentIndex:'",f=38,h="=parentIndex",v+=(_="<%=$eq(parentIndex)%>",a(l(E))+"',itemIndex:'"),f=38,h="=itemIndex",v+=(_="<%=$eq(itemIndex)%>",a(l(G))+'\'})" data-spm-click="'),f=39,h="=spm",v+=(_="<%=spm%>",a(z)+'"/>'),f=40,h="=item.text",v+=(_="<%=item.text%>",a(C.text)+"</label>"),f=42,h="else",_="<%}                    else {%>"):(v+='<span class="mx-output-link ',f=43,h="if item.selected",_="<%if (item.selected) {%>",C.selected&&(v+=" mx-output-link-active ",f=43,h="/if",_="<%}%>"),v+=" ",f=43,h="if item.disabled",_="<%if (item.disabled) {%>",C.disabled&&(v+=" mx-output-link-disabled ",f=43,h="/if",_="<%}%>"),v+='" ',f=44,h="if !item.disabled",_="<%if (!item.disabled) {%>",C.disabled||(v+=' mx-click="'+t+"@{select}({item:'",f=44,h="@item",v+=(_="<%@item%>",s(i,C)+'\'})" data-spm-click="'),f=44,h="=spm",v+=(_="<%=spm%>",a(z)+'" '),f=44,h="/if",_="<%}%>"),v+=">",f=45,h="=item.text",v+=(_="<%=item.text%>",a(C.text)+"</span>"),f=47,h="/if",_="<%}%>"),v+="</li>",f=49,h="/if",_="<%}%>"),v+=" ",f=50,h="/each",_="<%}%>"}v+=" ",f=51,h="/if",_="<%}%>"}v+=" ",f=52,h="/each",_="<%}%>"}v+="</ul>",f=54,h="else",_="<%}else {%>"}v+=" ",f=57,h="if multiple",_="<%if (multiple) {%>",k&&(v+='<div mxa="_zs_gallerybi:d" class="mx-output-footer"><a mxa="_zs_gallerybi:e" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="'+t+'@{submit}()">',f=59,h="=text.submit",v+=(_="<%=text.submit%>",a(w.submit)+'</a><a mxa="_zs_gallerybi:f" href="javascript:;" class="btn btn-small" mx-click="'+t+'@{cancel}()">'),f=60,h="=text.cancel",v+=(_="<%=text.cancel%>",a(w.cancel)+"</a></div>"),f=62,h="/if",_="<%}%>")}catch(e){var T="render view error:"+(e.message||e);throw h&&(T+="\r\n\tsrc art:{{"+h+"}}\r\n\tat line:"+f),T+="\r\n\t"+(h?"translate to:":"expr:"),T+=_+"\r\n\tat file:mx-dropdown/content.html"}return v},init:function(e){this.viewOptions=e;var t=e.data,i=$.extend(!0,[],t.parents),a=(t.selectedItems||[]).map(function(e){return e.value+""});i.forEach(function(e){e.list.forEach(function(e){e.selected=a.indexOf(e.value+"")>-1})}),this.updater.set({parents:i,hasGroups:t.hasGroups,searchbox:t.searchbox,multiple:t.multiple,spm:t.spm,height:t.height,keyword:t.keyword||"",text:{search:r["dropdown.search"],select:r["select.all"],unselect:r["unselect.all"],submit:r["dialog.submit"],cancel:r["dialog.cancel"],empty:r["empty.text"]}})},render:function(){var e=this,t=e.updater.get("keyword");e["@{fn.search}"](e["@{last.value}"]=t,function(t){e.updater.digest(t)})},"@{select}<click>":function(e){var t=this.viewOptions;t.submit&&t.submit({keyword:this.updater.get("keyword"),selectedItems:[e.params.item]})},"@{checkAll}<click>":function(e){var t=e.params.checked,i=this.updater.get("parents");i.forEach(function(e){e.list.forEach(function(e){e.disabled||(e.selected=t)})}),this.updater.digest({parents:i})},"@{check}<change>":function(e){var t=e.params.parentIndex,i=e.params.itemIndex,a=this.updater.get("parents");a[t].list[i].selected=!a[t].list[i].selected,this.updater.digest({parents:a})},"@{submit}<click>":function(e){var t=this.viewOptions,i=this.updater.get(),a=i.parents,r=i.keyword,n=[];a.forEach(function(e){e.list.forEach(function(e){e.selected&&n.push(e)})}),t.submit&&t.submit({keyword:r,selectedItems:n})},"@{cancel}<click>":function(e){var t=this.viewOptions;t.cancel&&t.cancel()},"@{fn.search}":function(e,t){var i,a=this.updater.get().parents;if(e){i=!0;var r=(e+"").toLocaleLowerCase();a.forEach(function(e){var t=!0;e.list.forEach(function(e){var i=(e.text+"").toLocaleLowerCase();e.hide=i.indexOf(r)<0,t=t&&e.hide}),e.hide=t,i=i&&t})}else i=!1,a.forEach(function(e){e.hide=!1,e.list.forEach(function(e){e.hide=!1})});t({parents:a,allHide:i})},"@{search}<keyup,paste>":function(e){var t=this;clearTimeout(t["@{search.delay.timer}"]);var i=$.trim(e.eventTarget.value);t.updater.set({keyword:i}),t["@{search.delay.timer}"]=setTimeout(t.wrapAsync(function(){i!=t["@{last.value}"]&&t["@{fn.search}"](t["@{last.value}"]=i,function(e){t.updater.digest(e)})}),250)},"@{stop}<change,focusin,focusout>":function(e){e.stopPropagation()}})});