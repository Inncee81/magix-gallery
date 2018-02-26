define("mx-dropdown/multiple",["magix","$","../mx-monitor/index"],(t,e,i)=>{var s=t("magix"),_=t("$"),c=t("../mx-monitor/index");s.applyStyle("_q",'._cI{outline:0;position:relative;width:340px;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;display:inline-block;vertical-align:middle;height:32px}._cI:hover{border-color:#ccc}._cJ{color:#333;position:relative;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 30px 0 12px;border-radius:3px}._cK{cursor:not-allowed;background-color:#fbfbfb}._cK:hover{border-color:#e6e6e6}._cK ._cJ{cursor:not-allowed}._cL{position:absolute;right:0;top:2px;font-size:28px;color:#ccc;transition:top .3s,-webkit-transform .3s;transition:transform .3s,top .3s;transition:transform .3s,top .3s,-webkit-transform .3s}._cM ._cL{-webkit-transform:rotate(180deg);transform:rotate(180deg);top:0}._cI[tabindex="0"]:focus,._cM,._cM:hover{border-color:#f96447}._cN{height:30px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}._cO{color:#999}._cP{position:absolute;top:100%;left:-1px;width:350px;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._cM ._cP{display:block}._cQ{overflow:auto;max-height:192px;padding:4px 0}._cR{display:block;width:100%;padding:9px 9px 4px}._cS{padding:0;width:100%}._cT{color:#ccc;position:absolute;left:15px;top:18px}._cU{padding-left:28px;width:100%;height:28px;line-height:28px}._cV{padding:5px;color:#999;display:block;cursor:default}._cW{padding:3px 4px}._cX{cursor:pointer;color:#666;display:block;width:100%;padding:0 6px;height:26px;line-height:26px;border-radius:4px}._cY{width:32%;float:left;margin-left:2px;margin-bottom:2px}._cZ{cursor:pointer;color:#666;display:block;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._cX:hover,._cZ:hover{color:#333;background-color:#f0f0f0}._d_,._d_:active,._d_:focus,._d_:hover{color:#fff;background-color:#f96447}._da{border-top:1px solid #e6e6e6;margin:0 10px;padding:10px 0}._db{border-left:1px solid #e6e6e6}'),i.exports=s.View.extend({tmpl:function(t){var e="",i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,_=function(t){return null==t?"":""+t},c=function(t){return"&"+i[t]+";"},r=function(t){return _(t).replace(s,c)},o=function(e,i,s){for(s=t[""];--s;)if(t[i=""+s]===e)return i;return t[i=""+t[""]++]=e,i};if(e+='<div class="_cJ" mx-click="__aY()" title="'+r(t.selectedText)+'"><span class="_cN',t.phLabel&&(e+=" _cO"),e+='">'+r(t.selectedText)+'</span><span class="__ _cL">&#xe692;</span></div><div class="_cP">',t.rList){t.searchbox&&(e+='<div class="_cR"><label class="_cS"><span class="__ _cT">&#xe608;</span><input mx-keyup="__cv()" mx-paste="__cv()" mx-change="__au()" mx-focusin="__au()" mx-focusout="__au()" placeholder="搜索关键词" class="_ap _cU" value="'+r(t.keyword)+'"/></label></div>'),e+='<ul class="_cQ" id="list_'+r(t.viewId)+'">';for(var a=t.selected.split(","),l=void 0,n=void 0,d=0;d<t.list.length;d++){var p=t.list[d];if(p&&p.group)e+='<li class="_cV _al" title="'+r(p[t.textKey])+'">'+r(p[t.textKey])+"</li>";else{t.textKey&&t.valueKey?(l=p[t.textKey],n=p[t.valueKey]):(l=p,n=p),t.emptyText===n&&0===d&&(n="",p="");var h=t.inArray(n+"",a)>-1;if(""===n)e+='<li title="'+r(l)+'" class="_cW"><span class="_cX _al ',h&&(e+=" _d_"),e+='" mx-click="__cw({item:\'',e+=o(p),e+="'})\">"+r(l)+"</span></li>";else{for(e+='<li class="_cW _ai"><ul>';d<t.list.length;d++){if((p=t.list[d])&&p.group){d--;break}t.textKey&&t.valueKey?(l=p[t.textKey],n=p[t.valueKey]):(l=p,n=p);e+='<li class="_cY"><span class="_cZ _al',t.inArray(n+"",a)>-1&&(e+=" _d_"),e+='" mx-click="__cw({item:\'',e+=o(p),e+="'})\">"+r(l)+"</span></li>"}e+="</ul></li>"}}}e+='</ul><div class="_da _ai"><div class="_aa"><button type="button" class="_an _ao" mx-click="__b({enter:true})">确定</button><button type="button" class="_an _s" mx-click="__b()">取消</button></div><div class="_aa _t _db _R"><button type="button" class="_an" mx-click="__cD()">全选/不选</button><button type="button" class="_an _s" mx-click="__cE()">反选</button></div></div>'}return e+="</div>"},init:function(t){var e=this;c.__f();var i=_("#"+e.id);e.__k=i,i.on("keydown",function(t){13==t.keyCode&&e["__aY<click>"]()}),e.on("destroy",function(){i.off("keydown"),c.__i(e),c.__j()}),e.updater.set({viewId:e.id,inArray:_.inArray}),e.__ci=!t.list,e.assign(t,{node:i})},assign:function(t,e){var i=e.node,c=e.inner;this.__cj=t.list;var r=this.__bb=t.selected,o=this.__ck=t.textKey||"",a=this.__cl=t.valueKey||"",l=this.__cm=t.emptyText||"";if(this.__cn=t.searchbox+""=="true",this.__cx=t.disabled+""=="true",this.__ci){var n,d=[];(i=c?_(c):_(i).children()).each(function(t,e){e=_(e),n="true"==e.attr("group"),d.push({group:n,text:e.text(),value:n?s.guid():e.attr("value")})}),o=this.__ck="text",a=this.__cl="value",this.__cj=d}var p=this.__cj,h=s.toMap(p,a);if(l)if(o&&a){if(!h[""]){var u={};u[o]=l,u[a]="",p.unshift(u),h[""]=u}}else h[l]||(p.unshift(l),h[""]=l);return this.__bb=r,this.__cy=h,this.updater.set({list:p}),!0},__l:function(t){return s.inside(t,this.id)},render:function(){var t=this.__k;t.addClass("_cI"),t[this.__cx?"addClass":"removeClass"]("_cK").prop("tabindex",this.__co?-1:0),this.__cz(this.__bb)},__b:function(t){if(this.__k.hasClass("_cM")){var e=this.updater.get();if(this.__k.removeClass("_cM").trigger("focusout"),c.__i(this),s.has(this,"__cA")){var i=t&&e.selected!==this.__cA;t?this.__cz(e.selected):this.__cz(this.__cA),delete this.__cA,i&&this.__k.val(e.selected).trigger({type:"change",keys:{text:e.textKey,value:e.valueKey},values:(e.selected+"").split(",")})}}},__h:function(){if(!this.__k.hasClass("_cM")){this.updater.get("rList")||this.updater.digest({rList:!0}),this.__k.addClass("_cM").trigger("focusin");var t=_("#list_"+this.id),e=t.find("._d_").position();if(e){var i=t.height(),s=t.prop("scrollTop");if(e.top<0||e.top>i){var r=e.top-i+s+i/2;t.prop("scrollTop",r)}}c.__n(this)}},__cB:function(t,e){for(var i=this.__cy,s=[],_=0,c=t;_<c.length;_++){var r=c[_],o=i[r]||{};e?s.push(o[e]):s.push(r||o)}return s},__cz:function(t){t=t||"",t+="";var e=this.__ck||"",i=this.__cl||"",s=t.split(","),_="",c=this.__cj;s.length?_=this.__cB(s,e):(t=c[0],_=c[0],e&&i&&(_=(t=t[i])[e])),this.updater.digest({textKey:e,valueKey:i,emptyText:this.__cm,searchbox:this.__cn,phLabel:""===t,selected:this.__bb=t,selectedText:_}),this.__k.val(t)},__cs:function(t,e){var i=this;clearTimeout(i.__cr);var s=i.__cj,_=[],c=0,r=s.length,o=i.__ck,a=i.__cl;if(t){var l=function(){if(c<r){for(var n=Math.min(c+400,r),d=c,p=void 0,h=void 0,u=void 0;d<n;d++)h=p=s[d],u=p,o&&a&&(h=p[o],u=p[a]),((h+"").indexOf(t)>=0||(u+"").indexOf(t)>=0)&&_.push(p);c=n,i.__cr=setTimeout(i.wrapAsync(l),20)}else e(_)};l()}else e(s)},"__aY<click>":function(){var t=this.__k;t.hasClass("_cM")?this.__b():t.hasClass("_cK")||this.__h()},"__cv<keyup,paste>":function(t){var e=this;clearTimeout(e.__ct);var i=_.trim(t.eventTarget.value);e.updater.set({keyword:i}),e.__ct=setTimeout(e.wrapAsync(function(){i!=e.__cC&&e.__cs(e.__cC=i,function(t){e.updater.digest({list:t})})}),300)},"__cw<click>":function(t){var e=t.params.item,i=this.updater,c=i.get();s.has(this,"__cA")||(this.__cA=c.selected);var r=this.__cl,o=this.__ck,a=e;o&&r&&(e[o],a=e[r]);var l=[""];a&&(l=c.selected.split(","));var n=_.inArray("",l);n>-1&&l.splice(n,1),-1==(n=_.inArray(a+"",l))?l.push(a):l.splice(n,1),l.length||c.emptyText&&(l=[""]),a=l.join(","),i.digest({selected:this.__bb=a})},"__au<change,focusin,focusout>":function(t){t.stopPropagation()},"__b<click>":function(t){this.__b(t.params.enter)},"__cD<click>":function(){var t=this.__bb,e=this.__cj,i=this.__cl,_=this.updater;if(s.has(this,"__cA")||(this.__cA=t),t)t="";else{t="";for(var c=this.__cm?1:0,r=void 0;c<e.length;c++)r=e[c],i?r.group||(t+=r[i]+","):t+=r+",";t=t.slice(0,-1)}_.digest({selected:this.__bb=t})},"__cE<click>":function(){var t=this.__bb,e=this.__cj,i=this.__cl,c=this.updater;s.has(this,"__cA")||(this.__cA=t);var r=t.split(",");t="";for(var o=this.__cm?1:0,a=void 0;o<e.length;o++)a=e[o],i?a.group||-1!=_.inArray(a[i]+"",r)||(t+=a[i]+","):-1==_.inArray(a+"",r)&&(t+=a+",");t=t.slice(0,-1),c.digest({selected:this.__bb=t})}})});