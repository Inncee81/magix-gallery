define("mx-duration/index",["magix","mx-form/index","mx-form/validator","mx-duration/data"],(e,t,n)=>{var r=e("magix"),o=e("mx-form/index"),i=e("mx-form/validator"),a=e("mx-duration/data");r.applyStyle("_zs_gallery_mx-duration_index_","._zs_gallery_mx-duration_index_-circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n  border-radius: 50%;\n}\n._zs_gallery_mx-duration_index_-duration {\n  box-sizing: border-box;\n  border-radius: var(--border-radius);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week {\n  border-top: 1px solid var(--color-border);\n  border-right: 1px solid var(--color-border);\n  border-left: 1px solid var(--color-border);\n  border-top-left-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week ._zs_gallery_mx-duration_index_-week-item {\n  font-size: 12px;\n  color: #999;\n  text-align: center;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week ._zs_gallery_mx-duration_index_-week-item:first-child {\n  border-top-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-week ._zs_gallery_mx-duration_index_-week-item:last-child {\n  border-bottom-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-range {\n  background-color: var(--color-bg);\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  border-top-right-radius: var(--border-radius);\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-range ._zs_gallery_mx-duration_index_-range-item {\n  float: left;\n  font-size: 12px;\n  border-right: 1px solid var(--color-border);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-range ._zs_gallery_mx-duration_index_-range-item:last-child {\n  border-top-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-time {\n  background-color: var(--color-bg);\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-time ._zs_gallery_mx-duration_index_-time-item {\n  float: left;\n  font-size: 12px;\n  border-right: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-boxzone ._zs_gallery_mx-duration_index_-box {\n  background: #fff;\n  border-right: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-duration_index_-duration ._zs_gallery_mx-duration_index_-content ._zs_gallery_mx-duration_index_-boxzone ._zs_gallery_mx-duration_index_-box:last-child {\n  border-bottom-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-duration_index_-duration-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-mask {\n  position: absolute;\n  z-index: 100;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n  border: 1px solid var(--color-brand);\n  background: rgba(75, 138, 251, 0.2);\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-hover {\n  position: absolute;\n  z-index: 100;\n  width: 140px;\n  padding: 20px;\n  border-radius: var(--border-radius);\n  background: #fff;\n  filter: alpha(opacity=80);\n  opacity: 0.8;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-setting {\n  position: absolute;\n  z-index: 100;\n  width: calc(var(--font-size) * 16 + 40px);\n  border-radius: var(--border-radius);\n  background: #fff;\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-setting ._zs_gallery_mx-duration_index_-setting-content {\n  padding: 10px 10px 0 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-duration_index_-duration-wrapper ._zs_gallery_mx-duration_index_-discount-setting ._zs_gallery_mx-duration_index_-setting-footer {\n  padding: 10px;\n}\n"),n.exports=r.View.extend({tmpl:function(e,t,n,r,o,i,a,s){if(n||(n=e),!o){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,_=function(e){return"&"+d[e]+";"};o=function(e){return""+(null==e?"":e)},r=function(e){return o(e).replace(l,_)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return u[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(o(e)).replace(x,g)}}if(!s){var m=/[\\'"]/g;s=function(e){return o(e).replace(m,"\\$&")}}var c,h,f,p="",b=e.maxWidth,v=e.hoverInfo,y=e.maskInfo,w=e.settingInfo,z=e.viewId,k=e.boxWidth,I=e.multiple,$=e.headerHeight,T=e.weeks,H=e.boxHeight,W=e.rowNum,N=e.ranges,D=e.boxZones;try{p+='<div mxv style="width: ',f=1,h="=maxWidth",p+=(c="<%=maxWidth%>",r(b)+'px;" class="_zs_gallery_mx-duration_index_-duration-wrapper">'),f=3,h="if hoverInfo.show",c="<%if (hoverInfo.show) {%>",v.show&&(p+='<div style="top: ',f=4,h="=hoverInfo.top",p+=(c="<%=hoverInfo.top%>",r(v.top)+"px; left: "),f=4,h="=hoverInfo.left",p+=(c="<%=hoverInfo.left%>",r(v.left)+'px;" class="_zs_gallery_mx-duration_index_-discount-hover mx-shadow"><div mxa="_zs_gallerybn:_" class="mb5">'),f=6,h="=hoverInfo.week",p+=(c="<%=hoverInfo.week%>",r(v.week)+'</div><div mxa="_zs_gallerybn:a" class="mb5"><strong>'),f=7,h="=hoverInfo.time",p+=(c="<%=hoverInfo.time%>",r(v.time)+"</strong></div><div><strong>"),f=8,h="=hoverInfo.discount",p+=(c="<%=hoverInfo.discount%>",r(v.discount)+"</strong>%折扣</div></div>"),f=10,h="/if",c="<%}%>"),p+=" ",f=13,h="if maskInfo.show",c="<%if (maskInfo.show) {%>",y.show&&(p+='<div style="top: ',f=14,h="=maskInfo.top",p+=(c="<%=maskInfo.top%>",r(y.top)+"px; left: "),f=14,h="=maskInfo.left",p+=(c="<%=maskInfo.left%>",r(y.left)+"px; height: "),f=14,h="=maskInfo.height",p+=(c="<%=maskInfo.height%>",r(y.height)+"px; width: "),f=14,h="=maskInfo.width",p+=(c="<%=maskInfo.width%>",r(y.width)+'px;" class="_zs_gallery_mx-duration_index_-discount-mask"></div>'),f=16,h="/if",c="<%}%>"),p+=" ",f=19,h="if settingInfo.show",c="<%if (settingInfo.show) {%>",w.show&&(p+='<div mxv style="top: ',f=20,h="=settingInfo.top",p+=(c="<%=settingInfo.top%>",r(w.top)+"px; left: "),f=20,h="=settingInfo.left",p+=(c="<%=settingInfo.left%>",r(w.left)+'px;" class="_zs_gallery_mx-duration_index_-discount-setting mx-shadow"><div mxv mxa="_zs_gallerybn:b" class="_zs_gallery_mx-duration_index_-setting-content"><div mxa="_zs_gallerybn:c" class="mb10"><span>'),f=24,h="=settingInfo.week",p+=(c="<%=settingInfo.week%>",r(w.week)+'</span>：<strong mxa="_zs_gallerybn:d" class="ml5">'),f=25,h="=settingInfo.time",p+=(c="<%=settingInfo.time%>",r(w.time)+'</strong></div><div mxv mxa="_zs_gallerybn:e" class="mb5"><label mxv><input type="radio" class="radio" name="settingType" value="1" mx-change="'+t+'changeSettingType({type:1})" '),f=31,h="if settingInfo.type == 1",c="<%if (settingInfo.type == 1) {%>",1==w.type&&(p+=' checked="true" ',f=31,h="/if",c="<%}%>"),p+="/>自定义：</label>",f=33,h="if settingInfo.type == 1",c="<%if (settingInfo.type == 1) {%>",1==w.type?(p+='<input mxe="'+t+'_0" mxc="[',f=36,h=":settingInfo.discount{required:true,posint:[true,'范围:30-250的整数'],min:[30,'范围:30-250的整数'],max:[250,'范围:30-250的整数']}",p+="{p:'settingInfo.discount',f:{required:true,posint:[true,'范围:30-250的整数'],min:[30,'范围:30-250的整数'],max:[250,'范围:30-250的整数']}}]\" class=\"input w100\" value=\"",f=35,h="=settingInfo.discount",p+=(c="<%=settingInfo.discount%>",r(w.discount)+'"/>'),f=37,h="else",c="<%}    else {%>"):(p+='<input class="input w100" disabled="true" value="',f=40,h="=settingInfo.discount",p+=(c="<%=settingInfo.discount%>",r(w.discount)+'"/>'),f=41,h="/if",c="<%}%>"),p+='<span mxs="_zs_gallerybn:_" class="ml5">%</span></div><div mxv mxa="_zs_gallerybn:f" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="2" mx-change="'+t+'changeSettingType({type:2})" ',f=48,h="if settingInfo.type == 2",c="<%if (settingInfo.type == 2) {%>",2==w.type&&(p+=' checked="true" ',f=48,h="/if",c="<%}%>"),p+='/>无折扣</label></div><div mxv mxa="_zs_gallerybn:g" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="3" mx-change="'+t+'changeSettingType({type:3})" ',f=55,h="if settingInfo.type == 3",c="<%if (settingInfo.type == 3) {%>",3==w.type&&(p+=' checked="true" ',f=55,h="/if",c="<%}%>"),p+='/>不投放</label></div></div><div mxs="_zs_gallerybn:a" class="_zs_gallery_mx-duration_index_-setting-footer"><a class="btn btn-small btn-brand mr10 w60" href="javascript:;" mx-click="'+t+'submitSetting()">确定</a><a class="btn btn-small w60" href="javascript:;" mx-click="'+t+'cancelSetting()">取消</a></div></div>',f=64,h="/if",c="<%}%>"),p+='<div class="_zs_gallery_mx-duration_index_-duration clearfix" id="',f=66,h="=viewId",p+=(c="<%=viewId%>",r(z)+'_duration" style="width: '),f=67,h="=(maxWidth)",p+=(c="<%=(maxWidth)%>",r(b)+'px;"><ul class="_zs_gallery_mx-duration_index_-week fl" style="width: '),f=68,h="=(boxWidth*multiple)",p+=(c="<%=(boxWidth * multiple)%>",r(k*I)+'px;"><li class="_zs_gallery_mx-duration_index_-week-item" style="height: '),f=69,h="=headerHeight+1",p+=(c="<%=headerHeight + 1%>",r($+1)+"px; line-height: "),f=69,h="=headerHeight",p+=(c="<%=headerHeight%>",r($)+'px;">星期</li>'),f=70,h="each weeks as week",c="<%for (var $art_ibpoykevg$art_i = 0, $art_cvoyon$art_c = weeks.length; $art_ibpoykevg$art_i < $art_cvoyon$art_c; $art_ibpoykevg$art_i++) {    var week = weeks[$art_ibpoykevg$art_i]%>";for(var M=0,Z=T.length;M<Z;M++){var S=T[M];p+='<li class="_zs_gallery_mx-duration_index_-week-item" style="height: ',f=71,h="=boxHeight",p+=(c="<%=boxHeight%>",r(H)+"px; line-height: "),f=71,h="=boxHeight",p+=(c="<%=boxHeight%>",r(H)+'px;">'),f=71,h="=week",p+=(c="<%=week%>",r(S)+"</li>"),f=72,h="/each",c="<%}%>"}p+='</ul><div class="_zs_gallery_mx-duration_index_-content fl" style="width: ',f=74,h="=boxWidth*rowNum",p+=(c="<%=boxWidth * rowNum%>",r(k*W)+'px;"><ul mxa="_zs_gallerybn:h" class="_zs_gallery_mx-duration_index_-range clearfix">'),f=76,h="each ranges as range",c="<%for (var $art_imxnjxoac$art_i = 0, $art_cdngbruooha$art_c = ranges.length; $art_imxnjxoac$art_i < $art_cdngbruooha$art_c; $art_imxnjxoac$art_i++) {    var range = ranges[$art_imxnjxoac$art_i]%>";for(var j=0,C=N.length;j<C;j++){var R=N[j];p+='<li class="_zs_gallery_mx-duration_index_-range-item" style="width: ',f=77,h="=(boxWidth*(rowNum/4))",p+=(c="<%=(boxWidth * (rowNum / 4))%>",r(k*(W/4))+"px; height: "),f=77,h="=headerHeight/2",p+=(c="<%=headerHeight / 2%>",r($/2)+"px; line-height: "),f=77,h="=headerHeight/2",p+=(c="<%=headerHeight / 2%>",r($/2)+'px;">'),f=77,h="=range",p+=(c="<%=range%>",r(R)+"</li>"),f=78,h="/each",c="<%}%>"}p+='</ul><ul mxa="_zs_gallerybn:i" class="_zs_gallery_mx-duration_index_-time clearfix">',f=81,h="for (let i=0;i<24;i+=1)",c="<%for (var i = 0; i < 24; i += 1) {%>";for(var q=0;q<24;q+=1)p+='<li class="_zs_gallery_mx-duration_index_-time-item" style="width: ',f=82,h="=(boxWidth*multiple)",p+=(c="<%=(boxWidth * multiple)%>",r(k*I)+"px; height: "),f=82,h="=headerHeight/2",p+=(c="<%=headerHeight / 2%>",r($/2)+"px; line-height: "),f=82,h="=headerHeight/2",p+=(c="<%=headerHeight / 2%>",r($/2)+'px;">'),f=82,h="=i",p+=(c="<%=i%>",r(q)+"</li>"),f=83,h="/for",c="<%}%>";p+='</ul><ul mxa="_zs_gallerybn:j" class="_zs_gallery_mx-duration_index_-boxzone clearfix">',f=86,h="each boxZones as zone",c="<%for (var $art_iqborrh$art_i = 0, $art_cyahactckeq$art_c = boxZones.length; $art_iqborrh$art_i < $art_cyahactckeq$art_c; $art_iqborrh$art_i++) {    var zone = boxZones[$art_iqborrh$art_i]%>";for(var B=0,L=D.length;B<L;B++){var A=D[B];p+='<li class="_zs_gallery_mx-duration_index_-box fl" style="width: ',f=88,h="=boxWidth",p+=(c="<%=boxWidth%>",r(k)+"px; height: "),f=88,h="=boxHeight",p+=(c="<%=boxHeight%>",r(H)+"px; background-color: "),f=88,h="=zone.bg",p+=(c="<%=zone.bg%>",r(A.bg)+'" mx-click="'+t+"clickOutside({index:"),f=89,h="=zone.index",p+=(c="<%=zone.index%>",r(A.index)+'})" mx-mousedown="'+t+'select()" mx-mouseover="'+t+"showTip({index:"),f=91,h="=zone.index",p+=(c="<%=zone.index%>",r(A.index)+'})" mx-mouseout="'+t+"hideTip({index:"),f=92,h="=zone.index",p+=(c="<%=zone.index%>",r(A.index)+'})"></li>'),f=93,h="/each",c="<%}%>"}p+='</ul></div></div><div mxs="_zs_gallerybn:b" class="pt10 pb10 clearfix"><a class="btn btn-small mr10 fl" href="javascript:;" mx-click="'+t+'clear()">清空</a><a class="btn btn-small mr10 fl" href="javascript:;" mx-click="'+t+'reset()">重置</a><span class="fr lh28 color-c"><span class="_zs_gallery_mx-duration_index_-circle" style="background-color: rgba(97,199,242,0.7)"></span><span class="font-tahoma bold color-c mr15">30-100%</span><span class="_zs_gallery_mx-duration_index_-circle" style="background-color: rgba(77,166,255,0.7)"></span><span class="font-tahoma bold color-c mr15">100-200%</span><span class="_zs_gallery_mx-duration_index_-circle" style="background-color: rgba(134,115,230,0.7)"></span><span class="font-tahoma bold color-c mr15">200-250%</span><i class="mc-iconfont displacement-2">&#xe705;</i><span class="mr10">可以拖拽鼠标选择投放时段</span></span></div></div>'}catch(e){var F="render view error:"+(e.message||e);throw h&&(F+="\r\n\tsrc art:{{"+h+"}}\r\n\tat line:"+f),F+="\r\n\t"+(h?"translate to:":"expr:"),F+=c+"\r\n\tat file:mx-duration/index.html"}return p},mixins:[o,i],init:function(e){var t=this,n=/^true$/i.test(e.half),r=e.width||780,o=e.selected||a.none,i=n?2:1;r&&+r<780&&(r=780);var s=24*i,d=r/(25*i),l=7*s;t.updater.set({viewId:t.id,timeDiscount:o,weeks:["一","二","三","四","五","六","日"],ranges:["00:00 - 06:00","06:00 - 12:00","12:00 - 18:00","18:00 - 24:00"],multiple:i,maxWidth:r,rowNum:s,columnNum:7,headerHeight:60,boxWidth:d,boxHeight:40,boxLength:l,boxZones:t.getBoxzone(l),valid:"",maskInfo:{show:!1,left:0,top:0,width:0,height:0,startRow:0,endRow:0,startColumn:0,endColumn:0,selectedZones:[]},settingInfo:{show:!1,week:"",time:"",discount:"",type:1},hoverInfo:{show:!1,left:0,top:0,week:"",time:"",discount:""}}),t.discountColorMap=t.getColorMap(),t.on("destroy",function(){$(document.body).off("mousemove.duration"),$(document.body).off("mouseup.duration"),clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout)})},render:function(){for(var e=this.updater,t=e.get("timeDiscount"),n=e.get("boxLength"),r=this.report2Array(t),o=0;o<n;o++)this.setBoxDiscount(o,r[o]);this.updater.digest(),this.wrapper=$("#"+this.id+"_duration")},report2Array:function(e){for(var t=[],n=this.updater,r=n.get("rowNum"),o=n.get("multiple"),i=e.split(";"),a=0,s=i.length;a<s;a++)for(var d=i[a].split(","),l=0,_=d.length;l<_;l++)if("0"!=d[l]){var u=d[l].match(/(\d{2}):(\d{2})-(\d{2}):(\d{2}):(\d+)/),g=parseInt(u[1])*o+r*a;"30"==u[2]&&g++;var x=parseInt(u[3])*o+r*a;"30"==u[4]&&x++;for(var m=parseInt(u[5]),c=g;c<=x-1;c++)t[c]=m}return t},setBoxDiscount:function(e,t){t=parseInt(t)||0;var n=this.discountColorMap[t],r=this.updater.get("boxZones");r[e].bg=n,r[e].discount=t,this.updater.set({boxZones:r})},"select<mousedown>":function(e){e.preventDefault();var t=this,n=t.updater,r=n.get("hoverInfo"),o=n.get("settingInfo"),i=n.get("maskInfo"),a=n.get("boxWidth"),s=n.get("multiple"),d=n.get("headerHeight");r.show=!1,o.show=!1;var l=t.wrapper,_=l.offset().left,u=l.offset().top,g=e.pageX-_,x=e.pageY-u;$(document.body).off("mousemove.duration").on("mousemove.duration",function(e){e.preventDefault();var n=e.pageX-_,m=e.pageY-u,c=Math.min(n,l.outerWidth()),h=Math.min(m,l.outerHeight()),f=Math.max(a*s,Math.min(g,c)),p=Math.max(d,Math.min(x,h));i.left=f,i.top=p+1,i.width=Math.max(g,c)-f,i.height=Math.max(x,h)-p,i.show=!0,t.updater.digest({hoverInfo:r,settingInfo:o,maskInfo:i})}),$(document.body).off("mouseup.duration").on("mouseup.duration",function(e){i.show&&(e.preventDefault(),$(document.body).off("mousemove.duration"),t.selectEnd(),$(document.body).off("mouseup.duration"))})},selectEnd:function(e){for(var t=this.updater,n=t.get("maskInfo"),r=t.get("headerHeight"),o=t.get("boxHeight"),i=t.get("boxWidth"),a=t.get("multiple"),s=t.get("columnNum"),d=t.get("rowNum"),l=parseInt((n.top-r)/o),_=parseInt((n.height+n.top-r)/o),u=parseInt((n.left-i*a)/i),g=parseInt((n.width+n.left-i*a)/i),x=Math.max(0,l),m=Math.min(s-1,_),c=Math.max(0,u),h=Math.min(d-1,g),f=[],p=x;p<=m;p++)for(var b=c;b<=h;b++)f.push(p*d+b);n.selectedZones=f,n.startRow=x,n.endRow=m,n.startColumn=c,n.endColumn=h,n.left=i*a+c*i,n.top=r+x*o+1,n.width=(h-c+1)*i,n.height=(m-x+1)*o,n.show=!0,this.showSetting()},"clickOutside<click>":function(e){var t=+e.params.index,n=this.updater.get("maskInfo");!n.show||n.show&&n.selectedZones.indexOf(t)>-1||(e.preventDefault(),$(document.body).off("mousemove.duration"),$(document.body).off("mouseup.duration"),$(document.body).off("click.duration"),this["cancelSetting<click>"]())},"changeSettingType<change>":function(e){var t=this.updater,n=t.get("settingInfo");n.type=e.params.type,t.digest({settingInfo:n})},"submitSetting<click>":function(){var e=this.updater.get(),t=e.settingInfo,n=e.maskInfo,r=0,o=!0;switch(+t.type){case 1:o=this.isValid(),r=this.fromKeys(e,"settingInfo").settingInfo.discount;break;case 2:r=100;break;case 3:r=0}if(o){t.show=!1,t.type=1,n.show=!1;for(var i=0;i<n.selectedZones.length;i++)this.setBoxDiscount(n.selectedZones[i],r);this.updater.digest({settingInfo:t,maskInfo:n})}},"cancelSetting<click>":function(){var e=this.updater,t=e.get("settingInfo"),n=e.get("maskInfo");n.show=!1,t.show=!1,t.type=1,this.updater.digest({settingInfo:t,maskInfo:n})},showSetting:function(){var e,t=this.updater,n=t.get("settingInfo"),r=t.get("maskInfo"),o=t.get("boxZones"),i=r.startRow+1,a=r.endRow+1;e=i!=a?this.formatweek(i)+" - "+this.formatweek(a):this.formatweek(i),n.week=e,n.time=this.getDuration(r.startColumn,r.endColumn+1,"%s - %s");for(var s,d=r.selectedZones,l=!0,_=0;_<d.length;_++){var u=o[d[_]].discount;if(!u||s&&u!=s){l=!1;break}s=u}n.discount=l?s:"";var g=this.wrapper.outerWidth(),x=this.wrapper.outerHeight(),m=r.left+r.width/2;m+260>g&&(m-=260);var c=r.top+r.height/2;c+238>x+100&&(c-=238),n.left=m,n.top=c,n.show=!0,this.updater.digest({boxZones:o,settingInfo:n,maskInfo:r})},"showTip<mouseover>":function(e){if(!r.inside(e.relatedTarget,e.eventTarget)){var t=this;clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout);var n=t.updater,o=n.get("settingInfo");if(!n.get("maskInfo").show&&!o.show){var i=n.get("boxWidth"),a=n.get("boxHeight"),s=n.get("headerHeight"),d=n.get("rowNum"),l=n.get("hoverInfo"),_=n.get("boxZones");t.hoverTimeout=setTimeout(function(){var r=parseInt(e.params.index),o=i+(r%d+1)*i,u=s+(parseInt(r/d)+1)*a,g=t.formatweek(parseInt(r/d)+1),x=t.getDuration(r,r+1,"%s - %s"),m=_[r].discount;l.left=o,l.top=u,l.week=g,l.time=x,l.discount=m,l.show=!0,n.digest({hoverInfo:l})},200)}}},"hideTip<mouseout>":function(e){if(!r.inside(e.relatedTarget,e.eventTarget)){var t=this;clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout);var n=t.updater;t.hideTimeout=setTimeout(function(){var e=n.get("hoverInfo");e.show=!1,t.updater.digest({hoverInfo:e})},200)}},"reset<click>":function(e){for(var t=this.updater.get("boxLength"),n=0;n<t;n++)this.setBoxDiscount(n,100);this.updater.digest()},"clear<click>":function(e){for(var t=this.updater.get("boxLength"),n=0;n<t;n++)this.setBoxDiscount(n,0);this.updater.digest()},array2Report:function(e){for(var t=this,n=t.updater,r=n.get("columnNum"),o=n.get("rowNum"),i=(n.get("multiple"),[]),a=0;a<r;a++){i[a]=0;for(var s=[],d=0;d<o;d++){var l=e[a*o+d];if(l){var _=s[s.length-1];_&&_.discount==l&&_.end==d?_.end=d+1:s.push({start:d,end:d+1,discount:l})}}var u=s.map(function(e){return t.getDuration(e.start,e.end)+":"+e.discount});u&&u.length>0&&(i[a]=u.join(","))}return i.join(";")},submit:function(){var e=this.updater.get("boxZones").map(function(e){return e.discount}),t=this.array2Report(e);return t==a.none?{ok:!1}:{ok:!0,val:t}},update:function(e){for(var t=this.updater.get(),n=(e=t.timeDiscount,t.boxLength),r=this.report2Array(e),o=0;o<n;o++)this.setBoxDiscount(o,r[o])},formatweek:function(e){return"星期"+["日","一","二","三","四","五","六"][e%7]},getDuration:function(e,t,n){var r=this.updater.get("rowNum"),o=this.getTimeFromNum(e),i="",a=o+"-"+(i=t%r==0?"24:00":this.getTimeFromNum(t));return n&&(a=n.replace("%s",o).replace("%s",i)),a},getTimeFromNum:function(e){var t=this.updater.get(),n=t.rowNum,r=t.multiple,o=Math.floor(e%n/r);return 1==(o+"").length&&(o="0"+o),o+":"+(e%n%r==1?"30":"00")},getBoxzone:function(e){for(var t=[],n=0;n<e;n++)t.push({index:n,bg:"#ffffff",discount:0});return t},getColorMap:function(e){for(var t={"[0,1)":"#ffffff","[30,40)":"rgba(97,199,242,0.05)","[40,50)":"rgba(97,199,242,0.1)","[50,60)":"rgba(97,199,242,0.15)","[60,70)":"rgba(97,199,242,0.2)","[70,80)":"rgba(97,199,242,0.25)","[80,90)":"rgba(97,199,242,0.3)","[90,100)":"rgba(97,199,242,0.35)","[100,101)":"rgba(97,199,242,0.4)","[101,110)":"rgba(77,166,255,0.15)","[110,120)":"rgba(77,166,255,0.2)","[120,130)":"rgba(77,166,255,0.25)","[130,140)":"rgba(77,166,255,0.3)","[140,150)":"rgba(77,166,255,0.35)","[150,160)":"rgba(77,166,255,0.4)","[160,170)":"rgba(77,166,255,0.45)","[170,180)":"rgba(77,166,255,0.5)","[180,190)":"rgba(77,166,255,0.55)","[190,200)":"rgba(77,166,255,0.6)","[200,210)":"rgba(134,115,230,0.3)","[210,220)":"rgba(134,115,230,0.35)","[220,230)":"rgba(134,115,230,0.4)","[230,240)":"rgba(134,115,230,0.45)","[240,250)":"rgba(134,115,230,0.5)","[250,251)":"rgba(134,115,230,0.55)"},n={},r=0;r<=250;r++)for(var o in n[r]="#ffffff",t){var i=o.substring(1,o.length-1).split(","),a=i[0],s=i[1];if(r>=a&&r<s){n[r]=t[o];break}}return n}})});