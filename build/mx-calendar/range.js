define("mx-calendar/range",["magix","$","mx-calendar/util","../mx-medusa/util","mx-switch/index","./datepicker"],(e,a,r)=>{e("mx-switch/index"),e("./datepicker");var n=e("magix"),_=e("$"),l=e("mx-calendar/util"),t=l.dateFormat,i=l.dateParse,s=l.getDefaultDate,g=l.getQuickInfos,d=l.foreverStr,c=e("../mx-medusa/util");n.applyStyle("_zs_gallery_mx-calendar_range_",'/* --mx-calendar-range-input-width: 100px; 的值同 [mx-view*="mx-calendar/datepicker"]的最小宽度默认保持一致 */\n._zs_gallery_mx-calendar_range_-wrapper {\n  --mx-calendar-range-input-width: 100px;\n  position: relative;\n  z-index: 1000;\n  min-width: calc(var(--mx-calendar-range-input-width) * 2 + 40px);\n  width: 100%;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-title {\n  margin-bottom: 5px;\n  color: #999;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range {\n  position: relative;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input {\n  float: left;\n  width: 50%;\n  min-width: var(--mx-calendar-range-input-width);\n  text-align: center;\n  cursor: text;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_rangepicker_-result {\n  height: var(--input-small-height);\n  padding: 0;\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  background-color: var(--color-bg-hover);\n  border: 0;\n  color: #333;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: var(--color-brand-vs);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"] {\n  width: 100%;\n  min-height: var(--input-small-height);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-view*="disabled=true"] ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-view*="disabled=true"]:hover ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-disabled] ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-disabled]:hover ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-view*="disabled=true"] ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-view*="disabled=true"]:hover ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-disabled] ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-disabled]:hover ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-view*="disabled=true"] ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-view*="disabled=true"]:hover ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-disabled] ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*="mx-calendar/datepicker"][mx-disabled]:hover ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #999;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input-left {\n  padding-right: 9px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input-right {\n  padding-left: 9px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-gap {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 18px;\n  height: var(--input-small-height);\n  margin-left: -9px;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts {\n  margin-top: 15px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st {\n  float: left;\n  width: 44%;\n  height: var(--input-small-height);\n  margin-right: 6%;\n  margin-top: 5px;\n  padding: 0 10px;\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected:hover {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts._zs_gallery_mx-calendar_range_-shortcuts-small ._zs_gallery_mx-calendar_range_-st {\n  width: 32%;\n  margin-right: 1%;\n}\n._zs_gallery_mx-calendar_range_-wrapper._zs_gallery_mx-calendar_range_-time {\n  --mx-calendar-range-input-width: calc(var(--font-size) * 11);\n}\n');var m=n.View.extend({tmpl:function(e,a,r,n,_,l,t,i){if(r||(r=e),!_){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(g,d)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(_(e)).replace(x,m)}}if(!i){var p=/[\\'"]/g;i=function(e){return _(e).replace(p,"\\$&")}}t||(t=function(e,a,r,n){for(n=e[v];--n;)if(e[r=v+n]===a)return r;return e[r=v+e[v]++]=a,r});var o,u,y,v="",z="",f=e.timeType,h=e.title,k=e.vsEnable,w=e.vs,b=e.min,T=e.endDisabled,S=e.dates,q=e.max,D=e.formatter,$=e.disabledWeeks,I=e.dateType,M=e.startDisabled,Y=e.endMinFn,W=e.align,G=e.vsSingle,K=e.quickInfos,F=e.quickGap,E=e.quickTip,P=e.submitText,j=e.cancelText,A=e.errorMsg;try{if(z+='<div mxv class="_zs_gallery_mx-calendar_range_-wrapper ',y=1,u="if timeType",o="<%if (timeType) {%>",f&&(z+=" _zs_gallery_mx-calendar_range_-time ",y=1,u="/if",o="<%}%>"),z+='" mx-contextmenu="'+a+'@{prevent}()"><div mxv mxa="_zs_gallery;:_" class="_zs_gallery_mx-calendar_range_-range"><div mxa="_zs_gallery;:a" class="_zs_gallery_mx-calendar_range_-title clearfix"><span mxa="_zs_gallery;:b" class="fl">',y=4,u="=title",z+=(o="<%=title%>",n(h)+"：</span>"),y=5,u="if vsEnable",o="<%if (vsEnable) {%>",k&&(z+='<span class="fr" mx-change="'+a+'@{vs.toggle}()" mx-view="mx-switch/index?state=',y=6,u="=vs",z+=(o="<%!$eu(vs)%>",l(w)+'"></span>'),y=7,u="/if",o="<%}%>"),z+='</div><div mxv mxa="_zs_gallery;:c" class="clearfix pr"><div mxv mxa="_zs_gallery;:d" class="_zs_gallery_mx-calendar_range_-range-input _zs_gallery_mx-calendar_range_-range-input-left"><div mxv="disabledWeeks" ',y=12,u="if vs",o="<%if (vs) {%>",w&&(z+=' class="_zs_gallery_mx-calendar_range_-vs1" ',y=12,u="/if",o="<%}%>"),z+=' mx-change="'+a+"@{sync.date}({trigger:'start'})\" mx-view=\"mx-calendar/datepicker?min=",y=13,u="=min",z+=(o="<%!$eu(min)%>",l(b)+"&max="),y=14,u="=(endDisabled?dates.endStr:max)",z+=(o="<%!$eu((endDisabled ? dates.endStr : max))%>",l(T?S.endStr:q)+"&formatter="),y=15,u="=formatter",z+=(o="<%!$eu(formatter)%>",l(D)+"&disabledWeeks="),y=16,u="@disabledWeeks",z+=(o="<%@disabledWeeks%>",t(r,$)+"&timeType="),y=17,u="=timeType",z+=(o="<%!$eu(timeType)%>",l(f)+"&dateType="),y=18,u="=dateType",z+=(o="<%!$eu(dateType)%>",l(I)+"&selected="),y=19,u="=dates.startStr",z+=(o="<%!$eu(dates.startStr)%>",l(S.startStr)+"&disabled="),y=20,u="if startDisabled",o="<%if (startDisabled) {%>",M&&(z+="true",y=20,u="/if",o="<%}%>"),z+='"></div></div><div mxs="_zs_gallery;:_" class="_zs_gallery_mx-calendar_range_-range-gap">-</div><div mxv mxa="_zs_gallery;:e" class="_zs_gallery_mx-calendar_range_-range-input _zs_gallery_mx-calendar_range_-range-input-right"><div mxv="disabledWeeks" ',y=26,u="if vs",o="<%if (vs) {%>",w&&(z+=' class="_zs_gallery_mx-calendar_range_-vs2" ',y=26,u="/if",o="<%}%>"),z+=' mx-change="'+a+"@{sync.date}({trigger:'end'})\" mx-view=\"mx-calendar/datepicker?min=",y=27,u="=(!vs?endMinFn(dates.startStr,min):min)",z+=(o="<%!$eu((!vs ? endMinFn(dates.startStr, min) : min))%>",l(w?b:Y(S.startStr,b))+"&max="),y=28,u="=max",z+=(o="<%!$eu(max)%>",l(q)+"&formatter="),y=29,u="=formatter",z+=(o="<%!$eu(formatter)%>",l(D)+"&disabledWeeks="),y=30,u="@disabledWeeks",z+=(o="<%@disabledWeeks%>",t(r,$)+"&timeType="),y=31,u="=timeType",z+=(o="<%!$eu(timeType)%>",l(f)+"&dateType="),y=32,u="=dateType",z+=(o="<%!$eu(dateType)%>",l(I)+"&align="),y=33,u="=align",z+=(o="<%!$eu(align)%>",l(W)+"&selected="),y=34,u="=dates.endStr",z+=(o="<%!$eu(dates.endStr)%>",l(S.endStr)+"&disabled="),y=35,u="if ((!vs&&vsSingle) || endDisabled)",o="<%if ((!vs && vsSingle) || endDisabled) {%>",(!w&&G||T)&&(z+="true",y=35,u="/if",o="<%}%>"),z+='"></div></div></div></div>',y=40,u="if (quickInfos.length&&!vs&&!vsSingle)",o="<%if (quickInfos.length && !vs && !vsSingle) {%>",K.length&&!w&&!G){z+='<div class="_zs_gallery_mx-calendar_range_-shortcuts ',y=41,u="if quickInfos.length > quickGap",o="<%if (quickInfos.length > quickGap) {%>",K.length>F&&(z+="_zs_gallery_mx-calendar_range_-shortcuts-small",y=41,u="/if",o="<%}%>"),z+='"><div mxa="_zs_gallery;:f" class="_zs_gallery_mx-calendar_range_-title">',y=42,u="=quickTip",z+=(o="<%=quickTip%>",n(E)+'：</div><div mxa="_zs_gallery;:g" class="clearfix">'),y=44,u="each quickInfos as info",o="<%for (var $art_iyzpnbiz$art_i = 0, $art_chgdnvrnicf$art_c = quickInfos.length; $art_iyzpnbiz$art_i < $art_chgdnvrnicf$art_c; $art_iyzpnbiz$art_i++) {        var info = quickInfos[$art_iyzpnbiz$art_i]%>";for(var C=0,Q=K.length;C<Q;C++){var R=K[C];z+='<span class="_zs_gallery_mx-calendar_range_-st ',y=45,u="if (dates.quickDateKey==info.key)",o="<%if (dates.quickDateKey == info.key) {%>",S.quickDateKey==R.key&&(z+="_zs_gallery_mx-calendar_range_-selected",y=45,u="/if",o="<%}%>"),z+='" mx-click="'+a+"@{date.picked}({quick:true,quickInfo:'",y=46,u="@info",z+=(o="<%@info%>",t(r,R)+'\'})" title="'),y=47,u="=info.text",z+=(o="<%=info.text%>",n(R.text)+'">'),y=47,u="=info.text",z+=(o="<%=info.text%>",n(R.text)+"</span>"),y=48,u="/each",o="<%}%>"}z+="</div></div>",y=51,u="/if",o="<%}%>"}z+='</div><div mxa="_zs_gallery;:h" class="mx-output-footer"><button mxa="_zs_gallery;:i" mx-click="'+a+'@{date.picked}()" type="button" class="btn btn-small btn-brand mr10">',y=54,u="=submitText",z+=(o="<%=submitText%>",n(P)+'</button><button mxa="_zs_gallery;:j" mx-click="'+a+'@{cancel}()" type="button" class="btn btn-small mr10">'),y=55,u="=cancelText",z+=(o="<%=cancelText%>",n(j)+'</button><span mxa="_zs_gallery;:k" class="color-red">'),y=56,u="=errorMsg",z+=(o="<%=errorMsg%>",n(A)+"</span></div>")}catch(e){var U="render view error:"+(e.message||e);throw u&&(U+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+y),U+="\r\n\t"+(u?"translate to:":"expr:"),U+=o+"\r\n\tat file:mx-calendar/range.html"}return z},init:function(e){var a=_.extend(!0,{},e.configs);a.dates=a.dates||{},a.formatter=a.formatter||"YYYY-MM-dd",a.title=a.title||c["calendar.range.title"];var r=a.dates,n=a.formatter,l=(a.quickDates,r.startStr),t=r.endStr,d=a.min,m=a.max;l||(r.startStr=l=s(d,m,n),r.start=i(l)),r.start||(r.start=i(r.startStr)),t||(r.endStr=t=s(d,m,n),r.end=i(t)),r.end||(r.end=i(r.endStr));var x=g(a.quickDates,l,n);if(!r.quickDateKey)for(var p=0;p<x.length;p++){var o=x[p];if(o.start==l&&o.end==t){r.quickDateKey=o.key,r.quickDateText=o.text;break}}a.quickInfos=x,a.quickGap=a.quickGap||7,a.quickTip=c["calendar.quick"],a.submitText=c["dialog.submit"],a.cancelText=c["dialog.cancel"],a.endMinFn=function(e,a){if(!a)return e;var r=new Date(e),n=new Date(a);return r.getTime()>n.getTime()?e:a},this.updater.set(a)},render:function(){this.updater.digest(),this["@{owner.node}"]=_("#"+this.id)},"@{sync.date}<change>":function(e){e.stopPropagation();var a=this.updater,r=a.get("dates"),n=a.get("vs"),_=a.get("vsSingle"),l=a.get("formatter"),i=a.get("quickDates"),s=a.get("quickInfos"),c=e.params.trigger,m=e.date+(e.time?" "+e.time:"");r[c+"Str"]=m;var x,p=r.startStr,o=r.endStr,u=new Date(t(p,l));o==d?x=d:(x=new Date(t(o,l)),!n&&!_&&x.getTime()<u.getTime()&&(o=t(x=u,l)));s=g(i,p,l);for(var y,v,z=0;z<s.length;z++){var f=s[z];if(f.start==p&&f.end==o){y=f.text,v=f.key;break}}this.updater.digest({quickInfos:s,dates:{start:u,end:x,startStr:p,endStr:o,quickDateText:y,quickDateKey:v}})},"@{vs.toggle}<change>":function(e){e.stopPropagation(),this.updater.digest({vs:e.state})},"@{date.picked}<click>":function(e){var a=this.updater,r=a.get(),_=r.dates,l=r.formatter,i=r.quickDates,s=r.vs,c=r.vsSingle,m=r.minGap,x=r.maxGap,p=e.params;if(p.quick){var o=p.quickInfo,u=new Date(t(o.start,l)),y=void 0;if(o.end==d)y=d;else{y=new Date(t(o.end,l));var v=void 0,z=void 0,f=void 0,h=void 0;r.min&&(f=(v=new Date(t(r.min,l))).getTime()),r.max&&(h=(z=new Date(t(r.max,l))).getTime());var k=u.getTime(),w=y.getTime();f&&k<f?u=v:h&&k>h&&(u=z),h&&w>h?y=z:f&&w<f&&(y=v),y.getTime()<u.getTime()&&(y=u)}for(var b=t(u,l),T=y==d?d:t(y,l),S=g(i,b,l),q=void 0,D=void 0,$=0;$<S.length;$++){var I=S[$];if(I.start==b&&I.end==T){q=I.text,D=I.key;break}}_={start:u,end:y,startStr:b,endStr:T,quickDateText:q,quickDateKey:D}}else{b=_.startStr,T=_.endStr,u=_.start,y=_.end;(T==d&&s||!s&&!c&&T!=d&&y.getTime()<u.getTime())&&(T=b,y=new Date(t(T,l))),n.mix(_,{end:y,endStr:T})}var M="";if(!s&&!c&&_.endStr!=d){var Y=new Date(t(_.startStr,"YYYY/MM/dd")),W=(new Date(t(_.endStr,"YYYY/MM/dd")).getTime()-Y.getTime())/864e5+1;m>0&&W<m&&(M="至少选择"+m+"天"),x>0&&W>x&&(M="至多选择"+x+"天")}a.digest({dates:_,errorMsg:M}),M||this["@{owner.node}"].trigger({type:"change",vs:s,dates:_})},"@{cancel}<click>":function(){this["@{owner.node}"].trigger("cancel")},"@{prevent}<contextmenu>":function(e){e.preventDefault()}});r.exports=m});