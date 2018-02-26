define("mx-calendar/index",["magix","$","mx-time/index"],(e,t,a)=>{e("mx-time/index");var i=e("magix");i.applyStyle("_g","._aS{background-color:#fff;display:inline-block;border:1px solid #e6e6e6;padding:0;border-radius:4px;overflow-y:hidden;z-index:10;color:#333;text-align:center;position:relative}._aT{color:#777}._aU{height:32px;line-height:32px;padding:1px}._aV,._aW{color:#ccc;display:inline-block;padding:6px 7px;line-height:100%;vertical-align:top;cursor:pointer}._aV:focus,._aV:hover,._aW:focus,._aW:hover{color:#f96447}._aX{display:inline-block;cursor:pointer;padding:5px 10px;border-radius:4px;line-height:1}._aX:hover{background-color:#eee}._aY{width:245px}._aZ{color:#333;background-color:#fafafa;padding:0 10px}._b_{padding:10px}._ba,._bb{padding:1px 0;position:absolute;top:-100%;left:0;right:0;transition:top .15s;background-color:#fff}._bc{top:0}._bd{height:59px;margin:2px;float:left;width:77px;cursor:pointer;line-height:59px;border-radius:4px;font-size:16px}._be:hover,._bd:hover{background:#f0f0f0}._be,._bf{width:28px;height:28px;line-height:28px;margin:3px 2px;float:left;border-radius:4px;cursor:pointer}._bg,._bg:hover{color:#fff;background-color:#f96447}._bh,._bh:hover{color:#eee;cursor:not-allowed;background:#fff}._bi{padding:5px}._bj,._bi{border-top:1px solid #e6e6e6}._bj{margin:10px;padding:10px 0 0;text-align:left}._bk{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");var n=e("$"),s=function(e,t){return 32-new Date(e,t-1,32).getDate()},r=["日","一","二","三","四","五","六"],_=function(e){return("0"+e).slice(-2)},o=function(e,t,a){var i,n=e.getTime();return t&&(i=n<t.getTime()),i||(i=!!a&&n>a.getTime()),i},l=function(e,t,a,i){var n,s=parseInt(e+_(t),10);return a&&(n=s<(a=parseInt(a.getFullYear()+_(a.getMonth()),10))),!n&&i&&(n=s>(i=parseInt(i.getFullYear()+_(i.getMonth()),10))),n},d=function(e,t,a){var i;return t&&(i=e<t.getFullYear()),!i&&a&&(i=e>a.getFullYear()),i},c={y:{reg:/y+/gi,fn:function(e,t){return String(t.getFullYear()).slice(-e.length)}},M:{reg:/M+/g,fn:function(e,t,a){return a=t.getMonth()+1,_(a).slice(-e.length)}},d:{reg:/d+/gi,fn:function(e,t,a){return a=t.getDate(),_(a).slice(-e.length)}},h:{reg:/h+/gi,fn:function(e,t,a){return a=t.getHours(),_(a).slice(-e.length)}},m:{reg:/m+/g,fn:function(e,t,a){return a=t.getMinutes(),_(a).slice(-e.length)}},s:{reg:/s+/g,fn:function(e,t,a){return a=t.getSeconds(),_(a).slice(-e.length)}},S:{reg:/S+/g,fn:function(e,t,a){return a=t.getMilliseconds(),String(a).substring(0,e.length)}}},h=function(e){return e instanceof Date?e:(e=new Date(Date.parse(String(e).replace(/-/g,"/"))))instanceof Date&&"Invalid Date"!=e&&!isNaN(e)?e:null},u=function(e,t){e=h(e),t=t||"YYYY-MM-dd";var a,i=function(t){return c[a].fn(t,e)};for(a in c)t=t.replace(c[a].reg,i);return t};a.exports=i.View.extend({tmpl:function(e){var t="",a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,n=function(e){return null==e?"":""+e},s=function(e){return"&"+a[e]+";"},r=function(e){return n(e).replace(i,s)},_={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return _[e]},l=/[!')(*]/g,d=function(e){return encodeURIComponent(n(e)).replace(l,o)},c=/[\\'"]/g,h=function(e){return n(e).replace(c,"\\$&")};if(t+='<div class="_aS _aj" mx-contextmenu="__G()">',e.types.day){t+='<div id="days_'+r(e.id)+'" class="_ai"><div class="_aU"><span class="__ _aV _aa" mx-click="__y()">&#xe61e;</span><h4 mx-click="',e.types.month?t+="__A":t+="__B",t+='()" class="_aX">'+r(e.year)+"-"+r(("0"+e.month).slice(-2))+'</h4><span class="__ _aW _bk _ab" mx-click="__y({next:true})">&#xe61e;</span></div><div class="_aY"><div class="_aZ _ai">';for(var u=0;u<e.weekText.length;u++)t+='<span class="_bf">'+r(e.weekText[u])+"</span>";t+='</div><div class="_b_ _ai">';for(var p=0;p<e.days.length;p++)for(var g=e.days[p],f=0;f<g.length;f++)t+='<span class="_be',g[f].otherMonth&&(t+=" _aT"),g[f].disabled&&(t+=" _bh"),g[f].selected&&(t+=" _bg"),t+='" ',g[f].disabled||(t+=' mx-click="__E({toMonth:'+r(g[f].month)+",date:'"+r(h(g[f].full))+"'})\" "),t+=' title="'+r(g[f].full)+'">'+r(g[f].day)+"</span>";t+="</div></div>",e.timeType&&(t+='<div class="_ai _bi" mx-change="__F()" mx-view="mx-time/index?time='+n(d(e.timeValue))+"&types="+n(d(e.timeType))+'"></div>',e.hasBtn&&(t+='<div class="_bj"><button type="button" class="_an _ao" mx-click="__b({enter:true})">确定</button><button type="button" class="_an _s" mx-click="__b()">取消</button></div>')),t+="</div>"}if(e.types.month){t+='<div class="_ai',e.types.day&&(t+=" _ba"),e.showMonth&&(t+=" _bc"),t+='"><div class="_aU"><span class="__ _aV _aa" mx-click="__z()">&#xe61e;</span><h4 mx-click="__B()" class="_aX">'+r(e.year)+'</h4><span class="__ _aW _ab _bk" mx-click="__z({next:true})">&#xe61e;</span></div><div class="_aY _ai">';for(var m,x=0;x<e.months.length;x++)t+='<span class="_bd',(m=e.months[x]).disabled&&(t+=" _bh"),m.selected&&(t+=" _bg"),t+='" ',m.disabled||(t+=" mx-click=\"__D({month:'"+r(h(m.month))+"'})\" "),t+=">"+r(m.month)+"</span>";t+="</div></div>"}if(e.types.year){t+='<div class="_ai',(e.types.day||e.types.month)&&(t+=" _bb"),e.showYear&&(t+=" _bc"),t+='"><div class="_aU"><span class="__ _aV _aa" mx-click="__z({range:true})">&#xe61e;</span><h4 class="_aX">'+r(e.startYear)+"-"+r(e.endYear)+'</h4><span class="__ _aW _ab _bk" mx-click="__z({range:true,next:true})">&#xe61e;</span></div><div class="_aY _ai">';for(var b,v=0;v<e.years.length;v++)t+='<span class="_bd',(b=e.years[v]).selected&&(t+=" _bg"),b.disabled&&(t+=" _bh"),v&&v!=e.years.length-1||(t+=" _aT"),t+='" ',b.disabled||(t+=" mx-click=\"__C({year:'"+r(h(b.year))+"'})\" "),t+=">"+r(b.year)+"</span>";t+="</div></div>"}return t+="</div>"},init:function(e){this.__e=e},render:function(){this.update(this.__e)},__p:function(){var e=this.updater;e.set({showYear:0,showMonth:0});e.get().timeType&&(this.__r&&(this.__s(this.__r),this.__t(),this.__u(),this.__v(),delete this.__r),this.__w&&(e.set({timeValue:this.__w}),delete this.__w)),e.digest()},update:function(e){(e=e||{}).selected||(e.selected=new Date);var t=function(e){e||(e="all");var t={year:!0,month:!0,day:!0};if("all"!=e)for(var a in t)-1===e.indexOf(a)&&delete t[a];return t}(e.dateType),a=0|e.weekStart,i=h(e.selected),n=this.updater,s=h(e.max),_=h(e.min),o=e.timeType,l=u(i,"hh:mm:ss");n.set({types:t,showYear:0,showMonth:0,timeType:o,timeValue:l,hasBtn:e.hasBtn,dateValue:u(i,e.formatter),max:s,min:_,id:this.id,weekStart:a,weekText:function(e){for(var t=[],a=0;a<7;a++)t[a]=r[(a+e)%7];return t}(a)}),this.__s(i),this.__t(),this.__u(),this.__v(!0)},__s:function(e){var t=this.updater;(e=h(e))&&t.set({year:e.getFullYear(),month:e.getMonth()+1,selectedYear:e.getFullYear(),selectedMonth:e.getMonth()+1,selected:u(e)})},__t:function(e){for(var t=this.updater,a=t.get(),i=a.year,n=a.min,s=a.max,r=i-i%10-1,_=r+11,o=[],l=r;l<=_;l++)o.push({year:l,selected:l==a.selectedYear,disabled:d(l,n,s)});t.set({startYear:r,endYear:_,years:o}),e&&t.digest()},__u:function(e){for(var t=[],a=this.updater,i=a.get(),n=i.year,s=i.min,r=i.max,_=1;_<=12;_++)t.push({month:_,selected:n==i.selectedYear&&_==i.selectedMonth,disabled:l(n,_-1,s,r)});a.set({months:t}),e&&a.digest()},__v:function(e){var t,a,i,n,r=[],_=this.updater,l=_.get("weekStart"),d=_.get("year"),c=_.get("month"),h=(7-l+new Date(d,c-1,1).getDay())%7,p=[],g=s(d,c),f=s(d,c-1),m=_.get("max"),x=_.get("min"),b=_.get("selected");for(t=1;t<=h;t++)a=f-(h-t),i=new Date(d,c-2,a),p.push({month:c-1,full:u(i),day:a,otherMonth:!0,disabled:o(i,x,m)});for(t=1;t<=g;t++)i=new Date(d,c-1,t),n=u(i),p.push({selected:n==b,day:t,month:c,full:n,disabled:o(i,x,m)}),(t+h)%7==0&&(r.push(p),p=[]);var v=p.length;for(t=v;t<14&&(a=t-v+1,i=new Date(d,c,a),p.push({month:c+1,day:a,otherMonth:!0,full:u(i),disabled:o(i,x,m)}),(t+1)%7!=0||(r.push(p),p=[],6!=r.length));t++);_.set({days:r}),e&&_.digest()},__x:function(e){var t=this.updater.get();t.types.day?t.timeType&&t.hasBtn?e&&n("#"+this.id).trigger({type:"change",date:t.dateValue,time:t.timeType?t.timeValue:null}):n("#"+this.id).trigger({type:"change",date:t.dateValue,time:t.timeType?t.timeValue:null}):n("#"+this.id).trigger({type:"change",date:t.selectedYear+(t.types.month?"-"+("0"+t.selectedMonth).slice(-2):"")})},"__y<click>":function(e){var t=this.updater,a=t.get("month"),i=t.get("year");e.params.next?(a+=1)>12&&(a=1,i++):(a-=1)<1&&(a=12,i--),t.set({year:i,month:a}),this.__v(!0)},"__z<click>":function(e){var t=e.params,a=this.updater,i=a.get("year");t.range?i+=t.next?10:-10:i+=t.next?1:-1,a.set({year:i}),t.range?this.__t(!0):this.__u(!0)},"__A<click>":function(){this.updater.set({showMonth:1}),this.__u(!0)},"__B<click>":function(){this.updater.set({showYear:1}),this.__t(!0)},"__C<click>":function(e){var t=e.params.year,a=this.updater.get().types;a.day||a.month?(this.updater.set({showYear:0,year:+t}),a.month?this.__u(!0):this.__v(!0)):(this.__s(t+"-01-01"),this.__t(!0),this.__x())},"__D<click>":function(e){var t=e.params.month,a=this.updater,i=a.get();i.types.day?(a.set({showMonth:0,month:+t}),this.__v(!0)):(this.__s(i.year+"-"+t+"-01"),this.__u(!0),this.__x())},"__E<click>":function(e){var t=this.updater,a=t.get("month"),i=e.params.toMonth!=a;this.__s(e.params.date),this.__r||(this.__r=t.get("dateValue")),i&&(this.__t(),this.__u()),t.set({dateValue:e.params.date}),this.__v(!0),this.__x()},"__F<change>":function(e){e.stopPropagation();this.__w||(this.__w=this.updater.get("timeValue")),this.updater.set({timeValue:e.time}),this.__v(!0),this.__x()},"__b<click>":function(e){if(e.params.enter)return delete this.__r,delete this.__w,void this.__x(!0);n("#"+this.id).trigger("cancel")},"__G<contextmenu>":function(e){e.preventDefault()}},{parse:h,format:u,dateDisabled:o})});