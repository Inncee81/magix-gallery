define("mx-indics/dialog",["magix","mx-popover/index","mx-dragsort/index"],(e,l,a)=>{e("mx-popover/index"),e("mx-dragsort/index");var r=e("magix");r.applyStyle("_zs_galleryX",'._zs_galleryhq{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-indics/index"]{display:inline-block;vertical-align:middle}._zs_galleryhr{position:relative;height:100%}._zs_galleryhr ._zs_galleryhs{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid #e6e6e6}._zs_galleryhr ._zs_galleryht{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_galleryhr ._zs_galleryht ._zs_galleryhu{padding:16px 24px}._zs_galleryhr ._zs_galleryht ._zs_galleryhu:nth-of-type(2n){background-color:#fafafa}._zs_galleryhr ._zs_galleryht ._zs_galleryhv{float:left;padding:8px 0;color:#999}._zs_galleryhr ._zs_galleryht ._zs_galleryhw{float:left;width:100%}._zs_galleryhr ._zs_galleryht ._zs_galleryhw ._zs_galleryhx{float:left;width:20%;padding:8px 0}._zs_galleryhr ._zs_galleryht ._zs_galleryhw ._zs_galleryhx ._zs_galleryhy{position:relative;top:1px;left:4px;font-size:14px;color:#ccc}._zs_galleryhr._zs_galleryhz ._zs_galleryhv{width:15%}._zs_galleryhr._zs_galleryhz ._zs_galleryhw{width:85%}._zs_galleryhr._zs_galleryhz ._zs_galleryhw ._zs_galleryhx{width:25%}._zs_galleryhr._zs_galleryhA ._zs_galleryhw{width:100%}._zs_galleryhr._zs_galleryhA ._zs_galleryhw ._zs_galleryhx{width:25%}._zs_galleryhr._zs_galleryhz._zs_galleryhA ._zs_galleryhv{width:20%}._zs_galleryhr._zs_galleryhz._zs_galleryhA ._zs_galleryhw{width:80%}._zs_galleryhr._zs_galleryhz._zs_galleryhA ._zs_galleryhw ._zs_galleryhx{width:33%}._zs_galleryhr._zs_galleryhA{padding-right:32%}._zs_galleryhr._zs_galleryhA ._zs_galleryht{right:32%;border-right:1px solid #e6e6e6}._zs_galleryhr._zs_galleryhA ._zs_galleryhB{position:absolute;top:0;right:0;width:32%;height:98px}._zs_galleryhr._zs_galleryhA ._zs_galleryhB ._zs_galleryhC{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid #e6e6e6}._zs_galleryhr._zs_galleryhA ._zs_galleryhB ._zs_galleryhD{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:#fafafa}._zs_galleryhr._zs_galleryhA ._zs_galleryhE{position:absolute;top:98px;right:0;bottom:0;width:32%;padding:0 24px 16px;overflow-y:scroll;background-color:#fafafa}._zs_galleryhr._zs_galleryhA ._zs_galleryhE ._zs_galleryhF{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:move}._zs_galleryhr._zs_galleryhA ._zs_galleryhE ._zs_galleryhF:last-child{margin-bottom:0}._zs_galleryhG{position:relative;color:#333}._zs_galleryhG:hover{color:#333;border-color:#ccc}._zs_galleryhG:focus{border-color:#ccc}._zs_galleryhH{margin-right:10px}._zs_galleryhH ._zs_galleryhI{position:relative;top:2px}._zs_galleryhJ{padding-right:20px}._zs_galleryhJ ._zs_galleryhK{position:absolute;top:0;right:0;width:20px;height:32px;line-height:32px;text-align:center;font-size:18px}'),a.exports=r.View.extend({tmpl:function(e,l,a,r,s,t,_,i){if(a||(a=e),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},h=/[&<>"'`]/g,o=function(e){return"&"+g[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(h,o)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(e){return d[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(c,n)}}if(!i){var z=/[\\'"]/g;i=function(e){return s(e).replace(z,"\\$&")}}var y="",p=e.sortable,x=e.hasParent,f=e.limit,v=e.selectedItems,u=e.groups;y+='<div mxv class="_zs_galleryhr ',p&&(y+="_zs_galleryhA"),y+=" ",x&&(y+="_zs_galleryhz"),y+='"><div mxa="_zs_galleryb^:_" class="_zs_galleryhs"><div mxa="_zs_galleryb^:a" class="left"><span mxs="_zs_galleryb^:_" class="fontsize-16">选择数据字段</span>',f>0&&(y+='<span mxa="_zs_galleryb^:b" class="color-9 font-tahoma bold ml10">'+r(v.length)+" / "+r(f)+"</span>"),y+=" ",p||(y+='<a mxs="_zs_galleryb^:a" href="javascript:;" class="link-brand fr" mx-click="'+l+'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a>'),y+='</div></div><div mxv mxa="_zs_galleryb^:c" class="_zs_galleryht">';for(var m=0,b=u.length;m<b;m++){var w=u[m];y+='<div mxv mxa="_zs_galleryb^:d" class="_zs_galleryhu clearfix">',w.text&&(y+='<div mxa="_zs_galleryb^:e" class="_zs_galleryhv">'+r(w.text)+"</div>"),y+='<div mxv mxa="_zs_galleryb^:f" class="_zs_galleryhw clearfix">';for(var k=0,A=w.fields,I=A.length;k<I;k++){var E=A[k];y+='<div mxv mxa="_zs_galleryb^:g" class="_zs_galleryhx"><label mxv ',f>0&&v.length>=f&&!E.checked&&(y+=' class="cursor-not-allow" '),y+='><input type="checkbox" name="field" value="'+r(E.value)+'" class="checkbox" ',E.checked&&(y+=' checked="true" '),y+=" ",f>0&&v.length>=f&&!E.checked&&(y+=' disabled="true" '),y+=' mx-change="'+l+"toggle({value:'"+r(i(E.value))+"',text:'"+r(i(E.text))+"'})\"/>"+r(E.text)+"</label>",E.tip&&(y+='<i class="mc-iconfont _zs_galleryhy" mx-view="mx-popover/index?content='+t(E.tip)+'">&#xe629;</i>'),y+="</div>"}y+="</div></div>"}if(y+="</div>",p){y+='<div mxs="_zs_galleryb^:b" class="_zs_galleryhB"><div class="_zs_galleryhC">自定义字段</div><div class="_zs_galleryhD"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="'+l+'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div></div><div mxa="_zs_galleryb^:h" class="_zs_galleryhE" mx-view="mx-dragsort/index" mx-dragfinish="'+l+'drag()">';for(var B=0,F=v.length;B<F;B++){var C=v[B];y+='<div class="_zs_galleryhF" data-value="'+r(C.value)+'" data-text="'+r(C.text)+'">'+r(C.text)+"</div>"}y+="</div>"}return y+="</div>"},init:function(e){var l=e.selected||[],a=e.fields||[],r=e.parents||[];selectedItems=[],l.forEach(function(e){for(var l=0;l<a.length;l++){var r=a[l];if(r.value==e){r.checked=!0,selectedItems.push({value:r.value,text:r.text});break}}});var s,t=e.sortable,_=[];if(r.length>0)_=r.map(function(e){var l=[];return a.forEach(function(a){a.pValue==e.value&&l.push(a)}),{text:e.text,fields:l}}),s=!0;else{for(var i=t?4:5,g=Math.ceil(a.length/i),h=0;h<g;h++){var o={fields:a.slice(h*i,(h+1)*i)};_.push(o)}s=!1}this.updater.set({hasParent:s,sortable:t,fields:a,groups:_,selectedItems:selectedItems,limit:e.limit}),this.viewOptions=e},render:function(){this.updater.digest({})},"toggle<change>":function(e){for(var l=e.target.checked,a=e.params.value,r=e.params.text,s=this.updater,t=s.get("fields"),_=0;_<t.length;_++)if(t[_].value==a){t[_].checked=l;break}var i=s.get("selectedItems"),g=s.get("sortable");if(l)g?i.push({value:a,text:r}):i=t.filter(function(e){return e.checked});else for(_=0;_<i.length;_++)if(i[_].value==a){i.splice(_,1);break}s.digest({fields:t,selectedItems:i})},"drag<dragfinish>":function(e){for(var l=[],a=$("#"+this.id+" ._zs_galleryhF"),r=0,s=a.length;r<s;r++){var t=$(a[r]);l.push({value:t.data("value"),text:t.data("text")})}this.updater.digest({selectedItems:l})},"clear<click>":function(){var e=this.updater,l=e.get("fields");l.forEach(function(e){e.checked=!1}),e.digest({fields:l,selectedItems:[]})},check:function(){event.preventDefault();var e=this.updater.get("selectedItems").map(function(e){return e.value});return new Promise(function(l){l({ok:e.length>0,msg:"请至少选择一个指标",data:{selected:e}})})}})});