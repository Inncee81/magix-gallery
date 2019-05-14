define("mx-dropdown/multiple",["magix","$","../mx-util/monitor","../mx-medusa/util","mx-checkbox/index"],(e,t,a)=>{e("mx-checkbox/index");var l=e("magix"),i=e("$"),s=e("../mx-util/monitor"),r=e("../mx-medusa/util");l.applyStyle("_zs_galleryF","._zs_gallerydZ{min-width:600px}._zs_gallerydZ ._zs_gallerye_{float:left;width:25%}._zs_gallerydZ ._zs_galleryea{margin-bottom:10px}._zs_galleryeb{padding-top:10px;padding-left:18px;padding-right:18px;line-height:16px}._zs_galleryeb ._zs_galleryec{float:left;padding-right:20px;color:#999}._zs_galleryeb ._zs_galleryec:hover{color:var(--color-brand)}._zs_galleryeb._zs_galleryed{padding-left:12px;padding-right:12px}"),a.exports=l.View.extend({tmpl:function(e,t,a,l,i,s,r,c){if(a||(a=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,u=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(_,u)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,d)}}if(!c){var g=/[\\'"]/g;c=function(e){return i(e).replace(g,"\\$&")}}var m="",h=e.viewId,x=e.expand,v=e.selectedText,f=e.placementClass,y=e.over,b=e.menuStyles,k=e.rList,z=e.searchbox,w=e.text,T=e.keyword,j=e.max,E=e.imme,I=e.needAll,M=e.hasGroups,A=e.spm,O=e.allHide,L=e.height,P=e.groups,C=e.errMsg;if(m+='<div id="toggle_'+l(h)+'" class="mx-trigger ',x&&(m+=" mx-trigger-open "),m+='"><span mxa="_zs_gallerya`:_" class="mx-trigger-label">'+l(v)+'</span><span mxs="_zs_gallerya`:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div mxv id="menu_'+l(h)+'" class="mx-output '+l(f)+" ",x&&(m+=" mx-output-open "),m+=" ",y&&(m+=" _zs_gallerydZ "),m+='" ',b&&(m+=' style="'+l(b)+'" '),m+=">",k){if(m+=" ",z&&(m+='<div mxv mxa="_zs_gallerya`:a" class="mx-output-search"><div mxv class="search-box" style="',m+=y?" width: 200px; ":" width: 100%; ",m+='"><i mxs="_zs_gallerya`:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+l(w.search)+'" mx-keyup="'+t+'__g()" mx-paste="'+t+'__g()" mx-change="'+t+'__m()" mx-focusin="'+t+'__m()" mx-focusout="'+t+'__m()" value="'+l(T)+'"/></div>',j>0&&y&&(m+='<span mxa="_zs_gallerya`:b" class="ml10"><span mxs="_zs_gallerya`:b" class="color-9">已选：</span><span mxa="_zs_gallerya`:c" class="font-tahoma bold">'+l(E.length)+" / "+l(j)+"</span></span>"),m+="</div>"),m+=" ",(!I||j>0&&!y)&&(m+='<div class="_zs_galleryeb ',M&&(m+=" _zs_galleryed "),m+=' clearfix">',I||(m+='<a class="_zs_galleryec" href="javascript:;" mx-click="'+t+'__bV({checked:true})" data-spm-click="'+l(A)+'a">'+l(w.select)+'</a><a class="_zs_galleryec" href="javascript:;" mx-click="'+t+'__bV({checked:false})" data-spm-click="'+l(A)+'ua">'+l(w.unselect)+"</a>"),m+=" ",j>0&&!y&&(m+="<span ",I||(m+=' class="fr" '),m+='><span mxs="_zs_gallerya`:b" class="color-9">已选：</span><span mxa="_zs_gallerya`:d" class="font-tahoma bold">'+l(E.length)+" / "+l(j)+"</span></span>"),m+="</div>"),m+=" ",O)m+='<div mxa="_zs_gallerya`:h" class="text-center color-9 pt20 pb20">'+l(w.empty)+"</div>";else{m+='<div mxv class="mx-output-list" id="list_'+l(h)+'" style="max-height:'+l(L)+'px;">';for(var K=0,S=P.length;K<S;K++){var V=P[K];m+=" ",V.text&&!V.hide&&(m+=" ",V.all?m+='<div mxa="_zs_gallerya`:e" class="clearfix"><div title="'+l(V.text)+'" class="mx-output-item _zs_gallerye_"><label mxa="_zs_gallerya`:f" class="mx-output-link"><span mx-focusout="'+t+'__m()" mx-change="'+t+"__ci({groupIndex:'"+l(c(K))+'\'})" data-spm-click="'+l(A)+'" mx-view="mx-checkbox/index?disabled='+s(j>0&&E.length>=j)+"&indeterminate="+s(2==V.type)+"&checked="+s(3==V.type)+'"></span>'+l(V.text)+"</label></div></div>":m+='<div class="mx-output-header" title="'+l(V.text)+'">'+l(V.text)+"</div>",m+=" "),m+='<div mxv mxa="_zs_gallerya`:g" class="clearfix _zs_galleryea">';for(var Z=0,N=V.list,U=N.length;Z<U;Z++){var $=N[Z];m+=" ",$.hide||(m+='<div mxv class="mx-output-item _zs_gallerye_" title="'+l($.text)+'"><label mxv for="'+l(h)+"_"+l($.value)+'" class="mx-output-link"><input type="checkbox" class="checkbox" ',!$.checked&&j>0&&E.length>=j&&(m+=' disabled="true" '),m+=" ",$.checked&&(m+=' checked="true" '),m+=' id="'+l(h)+"_"+l($.value)+'" mx-focusout="'+t+'__m()" mx-change="'+t+"__cj({groupIndex:'"+l(c(K))+"',value:'"+l(c($.value))+'\'})" data-spm-click="'+l(A)+'"/>'+l($.text)+"</label></div>"),m+=" "}m+="</div>"}m+="</div>"}m+='<div mxa="_zs_gallerya`:i" class="mx-output-footer"><div><a mxa="_zs_gallerya`:j" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="'+t+'__aK({enter:true})">'+l(w.submit)+'</a><a mxa="_zs_gallerya`:k" href="javascript:;" class="btn btn-small" mx-click="'+t+'__n()">'+l(w.cancel)+"</a></div>",C&&(m+='<div mxa="_zs_gallerya`:l" class="color-red mt10"><i mxs="_zs_gallerya`:c" class="mc-iconfont displacement-2">&#xe6ad;</i>'+i(C)+"</div>"),m+="</div>"}return m+="</div>"},init:function(e){var t=this;s.__h(),t.on("destroy",function(){s.__i(t),s.__j()}),t.updater.set({viewId:t.id});var a=i("#"+t.id);t.__a=a,t.__k=e.disabled+""=="true"||i("#"+t.id)[0].hasAttribute("mx-disabled");var c=e.placement||"bottom";t.__cg="mx-output-"+c,t.__bN=e.triggerType||"click";var n=e.emptyText||r.choose,_=e.name||"",u=e.needAll+""=="false",o=e.searchbox+""=="true",d=e.textKey||"text",p=e.valueKey||"value",g=!1,m=[];if(e.list){try{list=JSON.parse(e.list)}catch(t){list=e.list||[]}"object"==typeof list[0]?list=list.map(function(e){return{text:e[d],value:e[p]}}):list=list.map(function(e){return{text:e,value:e}}),m=[{list:list}]}else{var h=t.__a.children();if("true"==i(h[0]).attr("group"))g=!0,h.each(function(e,t){if("true"==(t=i(t)).attr("group"))m.push({all:"true"==t.attr("all"),text:t.text(),value:l.guid(),list:[]});else{var a=m.length;m[a-1].list.push({text:t.text(),value:t.attr("value")})}});else{var x=[];h.each(function(e,t){t=i(t),x.push({text:t.text(),value:t.attr("value")})}),m=[{list:x}]}}var v,f=0,y={};e.selected?i.isArray(e.selected)?(t.__bI="array",v=e.selected.map(function(e){return""+e})):v=(e.selected+"").split(","):v=[],m.forEach(function(e){var t=[];e.list.forEach(function(e){f++,e.checked=v.indexOf(e.value+"")>-1,y[e.value]=e,e.checked&&t.push(e.value)}),e.type=t.length>0?t.length==e.list.length?3:2:1});var b=+e.min||0,k=+e.max||0;k>0&&b>k&&(b=k),t.updater.set({hasGroups:g,viewId:t.id,expand:!1,emptyText:n,name:_,needAll:u,searchbox:o,map:y,selected:v,imme:v,min:b,max:k,continuous:e.continuous+""=="true",over:f>20,groups:m,height:e.height||400,spm:t.__a.attr("data-spm-click")||"",placementClass:t.__cg,text:{search:r["dropdown.search"],select:r["select.all"],unselect:r["unselect.all"],submit:r["dialog.submit"],cancel:r["dialog.cancel"],empty:r["empty.text"]}})},render:function(){var e=this,t=e.updater.get("selected");e.updater.digest({selectedText:e.__ch(t)}),e.__bP();var a=e.__bN,l=i("#toggle_"+e.id),s=i("#menu_"+e.id);switch(a){case"click":l.on("click",function(){e.updater.get("expand")?e.__n():e.__k||e.__o()});break;case"hover":l.hover(function(){clearTimeout(e.__bM),e.__o()},function(){e.__bO()}),s.hover(function(){clearTimeout(e.__bM)},function(){e.__bO()})}},__l:function(e){return l.inside(e,this.id)},__bO:function(){var e=this;clearTimeout(e.__bM),e.__bM=setTimeout(e.wrapAsync(function(){e.__n()}),250)},__bP:function(){var e=this.updater.get("selected");"array"==this.__bI?this.__a.val(e):this.__a.val(e.join(","))},__n:function(){var e=this,t=e.updater.get();if(t.expand){e.updater.digest({expand:!1}),e.__a.trigger("focusout"),s.__i(e);var a=t.selected,l=t.groups;l.forEach(function(e){var t=[];e.list.forEach(function(e){e.checked=a.indexOf(e.value+"")>-1,e.checked&&t.push(e.value)}),e.type=t.length>0?t.length==e.list.length?3:2:1}),e.updater.digest({groups:l,selected:a,imme:a,selectedText:e.__ch(a)}),e.__bP()}},__o:function(){var e=this,t=e.updater.get();if(!t.expand){var a={expand:!0};t.rList||(a.rList=!0);var l=i("#menu_"+e.id),r=i(window).width(),c=e.__a.offset(),n=l.outerWidth(),_=void 0;c.left+n>r&&(_=Math.min(c.left+n-r,c.left)),_>0&&(a.menuStyles="left:"+(0-_)+"px"),e.updater.digest(a),e.__a.trigger("focusin"),s.__q(e)}},__ch:function(e){var t=this.updater.get(),a=t.emptyText;if(0==e.length)return a;for(var l=t.map,i=[],s=0,c=e;s<c.length;s++){var n=l[c[s]]||{};i.push(n.text)}var _=t.name;return i.length==Object.keys(l).length?_?r["dropdown.all.custom"]+_:r["dropdown.all.default"]:i.join(",")},__bT:function(e,t){var a,l=this.updater.get().groups;if(e){a=!0;var i=(e+"").toLocaleLowerCase();l.forEach(function(e){var t=!0;e.list.forEach(function(e){var a=(e.text+"").toLocaleLowerCase();e.hide=a.indexOf(i)<0,t=t&&e.hide}),e.hide=t,a=a&&t})}else a=!1,l.forEach(function(e){e.hide=!1,e.list.forEach(function(e){e.hide=!1})});t({groups:l,allHide:a})},"__g<keyup,paste>":function(e){var t=this;clearTimeout(t.__bX);var a=i.trim(e.eventTarget.value);t.updater.set({keyword:a}),t.__bX=setTimeout(t.wrapAsync(function(){a!=t.__bU&&t.__bT(t.__bU=a,function(e){t.updater.digest(e)})}),250)},"__cj<change>":function(e){e.stopPropagation();var t=e.params.value,a=e.params.groupIndex,l=e.target.checked;this.__ci(a,t,l)},"__bV<click>":function(e){var t=e.params.checked;this.__ci("all","all",t)},"__ci<change>":function(e){e.stopPropagation();var t=e.params.groupIndex,a=e.target.checked;this.__ci(t,"all",a)},__ci:function(e,t,a){var l=this,i=l.updater.get().groups,s=(i=l.updater.get("groups"),l.updater.get("max")),r=l.updater.get("imme"),c=0;s>0&&(c=s-r.length);var n=[];i.forEach(function(l,i){var r=[];l.list.forEach(function(l){"all"!==e&&e!=i||"all"!=t&&t!=l.value||(a?s>0?c>0&&!l.checked&&(l.checked=!0,c-=1):l.checked=!0:l.checked=!1),l.checked&&r.push(l.value)}),l.type=r.length>0?r.length==l.list.length?3:2:1,n=n.concat(r)}),l.updater.digest({groups:i,imme:n})},"__m<change,focusin,focusout>":function(e){e.stopPropagation()},"__aK<click>":function(e){var t=this,a=t.updater.get(),l=a.groups,s=[],r=[],c=0;l.forEach(function(e){e.list.forEach(function(e){if(c+=1,e.checked){s.push(e.value+"");var t=r.length;0==t?r.push(c):r[t-1]+1==c?r[t-1]=c:r.push(c)}})});var n=t.updater.get("min");if(n>0&&s.length<n)t.updater.digest({errMsg:"请至少选择"+n+"个"});else{if(t.updater.get("continuous")&&s.length>0){var _=t.updater.get("name")||"数据";if(r.length>1)return void t.updater.digest({errMsg:"请选择连续的"+_})}t.updater.set({errMsg:"",selected:s}),t.__n();var u=a.map,o=s.map(function(e){return u[e].text});t.__a.trigger({type:"change",texts:o,values:s,selected:i("#"+t.id).val()})}},"__n<click>":function(e){this.__n()}})});