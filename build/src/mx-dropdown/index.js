define("mx-dropdown/index",["magix","$","../mx-util/monitor","../mx-medusa/util"],(e,t,a)=>{var _=e("magix"),i=e("$"),r=e("../mx-util/monitor"),c=e("../mx-medusa/util");a.exports=_.View.extend({tmpl:function(e,t,a,_,i,r,c,n){if(a||(a=e),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,l=function(e){return"&"+s[e]+";"};i=function(e){return""+(null==e?"":e)},_=function(e){return i(e).replace(o,l)}}if(!r){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return u[e]},d=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(d,p)}}if(!n){var m=/[\\'"]/g;n=function(e){return i(e).replace(m,"\\$&")}}c||(c=function(e,t,a,_){for(_=e[v];--_;)if(e[a=v+_]===t)return a;return e[a=v+e[v]++]=t,a});var v="",x="",f=e.viewId,g=e.expand,h=e.name,b=e.selectedText,y=e.placementClass,k=e.rList,w=e.searchbox,T=e.text,z=e.keyword,L=e.list,O=e.height,K=e.textKey,A=e.valueKey,C=e.selected,I=e.spm;if(x+='<div id="toggle_'+_(f)+'" class="mx-trigger ',g&&(x+=" mx-trigger-open "),x+='"><span mxa="_zs_galleryb_:_" class="mx-trigger-label">',h&&(x+='<span mxa="_zs_galleryb_:a" class="color-9">'+_(h)+"：</span>"),x+=" "+i(b)+'</span><span mxs="_zs_galleryb_:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div mxv id="menu_'+_(f)+'" class="mx-output '+_(y)+" ",g&&(x+=" mx-output-open "),x+='">',k){if(x+=" ",w&&(x+='<div mxv mxa="_zs_galleryb_:b" class="mx-output-search"><div mxv mxa="_zs_galleryb_:c" class="search-box" style="width: 100%;"><i mxs="_zs_galleryb_:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+_(T.search)+'" mx-keyup="'+t+'__g()" mx-paste="'+t+'__g()" mx-change="'+t+'__m()" mx-focusin="'+t+'__m()" mx-focusout="'+t+'__m()" value="'+_(z)+'"/></div></div>'),x+=" ",L.length){x+='<ul class="mx-output-list" id="list_'+_(f)+'" style="max-height:'+_(O)+'px;">';T=void 0;var P=void 0;x+=" ";for(var V=0,Q=L;V<Q.length;V++){var $=Q[V];if(x+=" ",T=$[K],P=$[A],x+=" ",$&&$.group)x+='<li class="mx-output-header" title="'+_($[K])+'">'+_($[K])+"</li>";else{x+='<li class="mx-output-item" title="'+_($.tip?$.tip:T)+'">';var j=P+""==C+"";x+='<span class="mx-output-link ',j&&(x+=" mx-output-link-active "),x+='" data-active="'+_(j)+'" mx-click="'+t+"__ac({item:'"+c(a,$)+"'})\" ",I&&(x+=' data-spm-click="'+_(I)+'" '),x+=">"+i(T)+"</span></li>"}x+=" "}x+="</ul>"}else x+='<div mxa="_zs_galleryb_:d" class="text-center color-9 pt20 pb20">'+i(T.empty)+"</div>";x+=" "}return x+="</div>"},init:function(e){var t=this;r.__h(),t.on("destroy",function(){r.__i(t),r.__j()}),t.__a=i("#"+t.id),t.__k=e.disabled+""=="true"||i("#"+t.id)[0].hasAttribute("mx-disabled"),t.__c_=!1;var a="mx-output-"+(e.placement||"bottom");t.__bP=e.triggerType||"click";var n=t.__ca=e.selected,s=t.__cb=e.textKey||"text",o=t.__cc=e.valueKey||"value",l=t.__cd=e.emptyText||"",u=[];if(e.list){try{u=JSON.parse(e.list)}catch(t){u=e.list}"object"==typeof u[0]||(u=u.map(function(e){var t={};return t[s]=e,t[o]=e,t}))}else{var p;t.__a.children().each(function(e,t){t=i(t),p="true"==t.attr("group"),u.push({group:p,text:t.text(),value:p?_.guid():t.attr("value")})}),s=t.__cb="text",o=t.__cc="value"}t.__ce=u;var d=_.toMap(u,o);if(l&&!d[""]){var m={};m[s]=l,m[o]="",u.unshift(m),d[""]=m}if(!n||!d[n]){for(var v={},x=0;x<u.length;x++)if(!u[x].group){v=u[x];break}n=d[n]||v,s&&o&&(n=n[o])}t.updater.set({viewId:t.id,textKey:t.__cb,valueKey:t.__cc,selected:t.__ca=n,searchbox:e.searchbox+""=="true",selectedText:t.__cf=d[n][s],keyword:t.__cg=e.keyword||"",expand:t.__c_,height:e.height||250,spm:t.__a.attr("data-spm-click")||"",name:e.name||"",placementClass:a,text:{search:c["dropdown.search"],empty:c["empty.text"]}}),t.__a.val(n)},render:function(){var e,t=this,a=t.updater.get("searchbox"),_=function(){t.updater.digest({list:e});var a=t.__bP,_=i("#toggle_"+t.id);switch(a){case"click":_.on("click",function(){t.__c_?t.__n():t.__k||t.__o()});break;case"hover":_.hover(function(){clearTimeout(t.__bO),t.__k||t.__o()},function(){t.__bQ()}),i("#menu_"+t.id).hover(function(){clearTimeout(t.__bO)},function(){t.__bQ()})}};a?t.__bV(t.__cg,function(t){e=t,_()}):(e=t.__ce,_())},__l:function(e){return _.inside(e,this.id)},__bQ:function(){var e=this;clearTimeout(e.__bO),e.__bO=setTimeout(e.wrapAsync(function(){e.__n()}),250)},__n:function(){var e=this;e.__c_&&(e.updater.digest({expand:e.__c_=!1}),e.__a.trigger("focusout"),r.__i(e))},__o:function(){var e=this;if(!e.__c_){var t={expand:e.__c_=!0};e.updater.get("rList")||(t.rList=!0),e.updater.digest(t),e.__a.trigger("focusin");var a=i("#list_"+e.id),_=a.find('[data-active="true"]').position(),c=a.height(),n=a.prop("scrollTop");if(_&&(_.top<0||_.top>c)){var s=_.top-c+n+c/2;a.prop("scrollTop",s)}r.__q(e)}},__bV:function(e,t){var a=this;clearTimeout(a.__aI);var _=a.__ce,i=[],r=0,c=_.length,n=a.__cb,s=a.__cc;if(e){var o=function(){if(r<c){for(var l=Math.min(r+400,c),u=r,p=void 0,d=void 0,m=void 0;u<l;u++){d=p=_[u],m=p,n&&s&&(d=p[n],m=p[s]);var v=(e+"").toLocaleLowerCase();((d+"").toLocaleLowerCase().indexOf(v)>=0||(m+"").indexOf(e)>=0)&&i.push(p)}r=l,a.__aI=setTimeout(a.wrapAsync(o),20)}else t(i)};o()}else t(_)},"__g<keyup,paste>":function(e){var t=this;e.stopPropagation(),clearTimeout(t.__bZ);var a=i.trim(e.eventTarget.value);t.updater.set({keyword:a}),t.__bZ=setTimeout(t.wrapAsync(function(){a!=t.__cg&&t.__bV(t.__cg=a,function(e){t.updater.digest({list:e})})}),250)},"__ac<click>":function(e){var t=this,a=e.params.item,_=t.updater,r=t.__cc,c=t.__cb,n=t.__ca,s=t.__cg,o=a[r],l=a[c];if(n!==o){_.set({selected:t.__ca=o});var u=i.Event("change",{item:a,keyword:s,keys:{text:c,value:r},value:a[r],text:a[c],selected:a[r]});u.isDefaultPrevented()?_.set({selected:n}):_.digest({selected:o,selectedText:l}),t.__a.val(r?a[r]:a).trigger(u)}t.__n()},"__m<change,focusin,focusout>":function(e){e.stopPropagation()}})});