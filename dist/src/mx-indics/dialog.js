define("mx-indics/dialog",["magix","mx-popover/index","mx-dragsort/index"],(e,l,r)=>{e("mx-popover/index"),e("mx-dragsort/index");var a=e("magix");a.applyStyle("_zs_galleryac",'._zs_galleryhr{position:relative;height:100%}._zs_galleryhr ._zs_galleryhs{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid var(--color-border)}._zs_galleryhr ._zs_galleryht{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_galleryhr ._zs_galleryht ._zs_galleryhu{position:relative;padding:16px 24px}._zs_galleryhr ._zs_galleryht ._zs_galleryhu:nth-of-type(2n){background-color:var(--color-bg)}._zs_galleryhr ._zs_galleryht ._zs_galleryhv{position:absolute;top:16px;left:24px;width:90px;padding:8px 0;color:#999}._zs_galleryhr ._zs_galleryht ._zs_galleryhw{float:left;padding:8px 0;white-space:nowrap}._zs_galleryhr ._zs_galleryht ._zs_galleryhw ._zs_galleryhx{position:relative;top:1px;left:1px;font-size:14px;color:#ccc}._zs_galleryhr._zs_galleryhy ._zs_galleryhu{padding-left:122px}._zs_galleryhr._zs_galleryhz{padding-right:240px}._zs_galleryhr._zs_galleryhz ._zs_galleryht{right:240px;border-right:1px solid var(--color-border)}._zs_galleryhr._zs_galleryhz ._zs_galleryhA{position:absolute;top:0;right:0;width:240px;height:98px}._zs_galleryhr._zs_galleryhz ._zs_galleryhA ._zs_galleryhB{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid var(--color-border)}._zs_galleryhr._zs_galleryhz ._zs_galleryhA ._zs_galleryhC{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:var(--color-bg)}._zs_galleryhr._zs_galleryhz ._zs_galleryhD{position:absolute;top:98px;right:0;bottom:0;width:240px;padding:0 24px 16px;overflow-y:scroll;background-color:var(--color-bg)}._zs_galleryhr._zs_galleryhz ._zs_galleryhD ._zs_galleryhE{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid var(--color-border);border-radius:var(--border-radius);cursor:move}._zs_galleryhr._zs_galleryhz ._zs_galleryhD ._zs_galleryhE:last-child{margin-bottom:0}._zs_galleryhF{display:inline-block;width:40px;padding-right:10px;margin-right:10px;text-align:center}._zs_galleryhF ._zs_galleryhG{position:relative;top:2px;font-size:18px}._zs_galleryhH{display:inline-block;width:auto}[mx-view*="mx-indics/index"]{display:inline-block;vertical-align:middle}[mx-view*="mx-indics/index"]:hover ._zs_galleryhF,[mx-view*="mx-indics/index"]:hover ._zs_galleryhH{border-color:var(--border-highlight-hover);color:#333}[mx-view*="mx-indics/index"]:hover ._zs_galleryhH ._zs_galleryhI{color:var(--border-highlight-hover)}'),r.exports=a.View.extend({tmpl:function(e,l,r,a,t,s,i,o){if(r||(r=e),!t){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},h=/[&<>"'`]/g,_=function(e){return"&"+g[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(h,_)}}if(!s){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return n[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(c,d)}}if(!o){var p=/[\\'"]/g;o=function(e){return t(e).replace(p,"\\$&")}}var x="",v=e.sortable,z=e.hasParent,y=e.limit,u=e.selectedItems,f=e.groups,m=e.width;x+='<div mxv class="_zs_galleryhr ',v&&(x+="_zs_galleryhz"),x+=" ",z&&(x+="_zs_galleryhy"),x+='"><div mxa="_zs_gallerycX:_" class="_zs_galleryhs"><span mxs="_zs_gallerycX:_" class="fontsize-16">选择数据字段</span>',y>0&&(x+='<span mxa="_zs_gallerycX:a" class="color-9 font-tahoma bold ml10">'+a(u.length)+" / "+a(y)+"</span>"),x+=" ",v||(x+='<a mxs="_zs_gallerycX:a" href="javascript:;" class="link-brand fr" mx-click="'+l+'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a>'),x+='</div><div mxv mxa="_zs_gallerycX:b" class="_zs_galleryht">';for(var b=0,k=f.length;b<k;b++){var w=f[b];x+='<div mxv mxa="_zs_gallerycX:c" class="_zs_galleryhu clearfix">',w.text&&(x+='<div mxa="_zs_gallerycX:d" class="_zs_galleryhv">'+a(w.text)+"</div>"),x+='<div mxv mxa="_zs_gallerycX:e" class="clearfix">';for(var I=0,X=w.fields,E=X.length;I<E;I++){var A=X[I];x+='<div mxv class="_zs_galleryhw" style="width: '+a(m)+';"><label mxv ',y>0&&u.length>=y&&!A.checked&&(x+=' class="cursor-not-allow" '),x+='><input type="checkbox" name="field" value="'+a(A.value)+'" class="checkbox" ',A.checked&&(x+=' checked="true" '),x+=" ",y>0&&u.length>=y&&!A.checked&&(x+=' disabled="true" '),x+=' mx-change="'+l+"toggle({value:'"+a(o(A.value))+"',text:'"+a(o(A.text))+"'})\"/>"+a(A.text)+"</label>",A.tip&&(x+='<i class="mc-iconfont _zs_galleryhx" mx-view="mx-popover/index?width=240&content='+s(A.tip)+'">&#xe7aa;</i>'),x+="</div>"}x+="</div></div>"}if(x+="</div>",v){x+='<div mxs="_zs_gallerycX:b" class="_zs_galleryhA"><div class="_zs_galleryhB">自定义字段</div><div class="_zs_galleryhC"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="'+l+'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div></div><div mxa="_zs_gallerycX:f" class="_zs_galleryhD" mx-view="mx-dragsort/index" mx-dragfinish="'+l+'drag()">';for(var D=0,C=u.length;D<C;D++){var F=u[D];x+='<div class="_zs_galleryhE" data-value="'+a(F.value)+'" data-text="'+a(F.text)+'">'+a(F.text)+"</div>"}x+="</div>"}return x+="</div>"},init:function(e){var l=e.selected||[],r=e.fields||[],a=e.parents||[];selectedItems=[],l.forEach(function(e){for(var l=0;l<r.length;l++){var a=r[l];if(a.value==e){a.checked=!0,selectedItems.push({value:a.value,text:a.text});break}}});var t,s=e.lineNumber,i=[];if(a.length>0)i=a.map(function(e){var l=[];return r.forEach(function(r){r.pValue==e.value&&l.push(r)}),{text:e.text,fields:l}}),t=!0;else{for(var o=Math.ceil(r.length/s),g=0;g<o;g++){var h={fields:r.slice(g*s,(g+1)*s)};i.push(h)}t=!1}this.updater.set({width:Math.floor(100/s)+"%",hasParent:t,sortable:e.sortable,fields:r,groups:i,selectedItems:selectedItems,limit:e.limit}),this.viewOptions=e},render:function(){this.updater.digest({})},"toggle<change>":function(e){for(var l=e.target.checked,r=e.params.value,a=e.params.text,t=this.updater,s=t.get("fields"),i=0;i<s.length;i++)if(s[i].value==r){s[i].checked=l;break}var o=t.get("selectedItems"),g=t.get("sortable");if(l)g?o.push({value:r,text:a}):o=s.filter(function(e){return e.checked});else for(i=0;i<o.length;i++)if(o[i].value==r){o.splice(i,1);break}t.digest({fields:s,selectedItems:o})},"drag<dragfinish>":function(e){for(var l=[],r=$("#"+this.id+" ._zs_galleryhE"),a=0,t=r.length;a<t;a++){var s=$(r[a]);l.push({value:s.attr("data-value"),text:s.attr("data-text")})}this.updater.digest({selectedItems:l})},"clear<click>":function(){var e=this.updater,l=e.get("fields");l.forEach(function(e){e.checked=!1}),e.digest({fields:l,selectedItems:[]})},check:function(){event.preventDefault();var e=this.updater.get("selectedItems").map(function(e){return e.value});return new Promise(function(l){l({ok:e.length>0,msg:"请至少选择一个指标",data:{selected:e}})})}})});