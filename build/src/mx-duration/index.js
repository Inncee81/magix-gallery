define("mx-duration/index",["magix","mx-form/index","mx-form/validator","mx-duration/data"],(e,t,r)=>{var a=e("magix"),o=e("mx-form/index"),s=e("mx-form/validator"),l=e("mx-duration/data");a.applyStyle("_zs_galleryH","._zs_galleryeg{display:inline-block;width:10px;height:10px;margin-right:3px;border-radius:50%}._zs_galleryeh{box-sizing:border-box;border-radius:var(--border-radius);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;background-color:var(--color-bg)}._zs_galleryeh ._zs_galleryei{border-top:1px solid var(--color-border);border-right:1px solid var(--color-border);border-left:1px solid var(--color-border);border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_galleryeh ._zs_galleryei ._zs_galleryej{font-size:12px;color:#999;text-align:center;border-bottom:1px solid var(--color-border)}._zs_galleryeh ._zs_galleryei ._zs_galleryej:first-child{border-top-left-radius:var(--border-radius)}._zs_galleryeh ._zs_galleryei ._zs_galleryej:last-child{border-bottom-left-radius:var(--border-radius)}._zs_galleryeh ._zs_galleryek ._zs_galleryel{background-color:var(--color-bg);border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border);border-top-right-radius:var(--border-radius);text-align:center;color:#999}._zs_galleryeh ._zs_galleryek ._zs_galleryel ._zs_galleryem{float:left;font-size:12px;border-right:1px solid var(--color-border)}._zs_galleryeh ._zs_galleryek ._zs_galleryel ._zs_galleryem:last-child{border-top-right-radius:var(--border-radius)}._zs_galleryeh ._zs_galleryek ._zs_galleryen{background-color:var(--color-bg);text-align:center;color:#999}._zs_galleryeh ._zs_galleryek ._zs_galleryen ._zs_galleryeo{float:left;font-size:12px}._zs_galleryeh ._zs_galleryek ._zs_galleryep ._zs_galleryeq,._zs_galleryeh ._zs_galleryek ._zs_galleryen ._zs_galleryeo{border-right:1px solid var(--color-border);border-bottom:1px solid var(--color-border)}._zs_galleryeh ._zs_galleryek ._zs_galleryep ._zs_galleryeq{background:#fff}._zs_galleryeh ._zs_galleryek ._zs_galleryep ._zs_galleryeq:last-child{border-bottom-right-radius:var(--border-radius)}._zs_galleryer{position:relative}._zs_galleryer ._zs_galleryes{position:absolute;z-index:100;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;border:1px solid var(--color-brand);background:rgba(75,138,251,.2)}._zs_galleryer ._zs_galleryet{width:140px;padding:20px;filter:alpha(opacity=80);opacity:.8}._zs_galleryer ._zs_galleryet,._zs_galleryer ._zs_galleryeu{position:absolute;z-index:100;border-radius:var(--border-radius);background:#fff}._zs_galleryer ._zs_galleryeu{width:calc(var(--font-size)*16 + 40px)}._zs_galleryer ._zs_galleryeu ._zs_galleryev{padding:10px 10px 0;border-bottom:1px solid var(--color-border)}._zs_galleryer ._zs_galleryeu ._zs_galleryew{padding:10px}"),r.exports=a.View.extend({tmpl:function(e,t,r,a,o,s,l,i){if(r||(r=e),!o){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(e){return"&"+n[e]+";"};o=function(e){return""+(null==e?"":e)},a=function(e){return o(e).replace(d,g)}}if(!s){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return u[e]},h=/[!')(*]/g;s=function(e){return encodeURIComponent(o(e)).replace(h,c)}}if(!i){var p=/[\\'"]/g;i=function(e){return o(e).replace(p,"\\$&")}}var m="",f=e.maxWidth,_=e.hoverInfo,b=e.maskInfo,v=e.settingInfo,x=e.viewId,y=e.boxWidth,z=e.multiple,w=e.headerHeight,k=e.weeks,I=e.boxHeight,T=e.rowNum,D=e.ranges,M=e.boxZones;m+='<div mxv style="width: '+a(f)+'px;" class="_zs_galleryer">',_.show&&(m+='<div style="top: '+a(_.top)+"px; left: "+a(_.left)+'px;" class="_zs_galleryet mx-shadow"><div mxa="_zs_gallerybc:_" class="mb5">'+a(_.week)+'</div><div mxa="_zs_gallerybc:a" class="mb5"><strong>'+a(_.time)+"</strong></div><div><strong>"+a(_.discount)+"</strong>%折扣</div></div>"),m+=" ",b.show&&(m+='<div style="top: '+a(b.top)+"px; left: "+a(b.left)+"px; height: "+a(b.height)+"px; width: "+a(b.width)+'px;" class="_zs_galleryes"></div>'),m+=" ",v.show&&(m+='<div mxv style="top: '+a(v.top)+"px; left: "+a(v.left)+'px;" class="_zs_galleryeu mx-shadow"><div mxv mxa="_zs_gallerybc:b" class="_zs_galleryev"><div mxa="_zs_gallerybc:c" class="mb10"><span>'+a(v.week)+'</span>：<strong mxa="_zs_gallerybc:d" class="ml5">'+a(v.time)+'</strong></div><div mxv mxa="_zs_gallerybc:e" class="mb5"><label mxv><input type="radio" class="radio" name="settingType" value="1" mx-change="'+t+'changeSettingType({type:1})" ',1==v.type&&(m+=' checked="true" '),m+="/>自定义：</label>",1==v.type?m+='<input mxe="'+t+"_0\" mxc=\"[{p:'settingInfo.discount',f:{required:true,posint:[true,'范围:30-250的整数'],min:[30,'范围:30-250的整数'],max:[250,'范围:30-250的整数']}}]\" class=\"input w100\" value=\""+a(v.discount)+'"/>':m+='<input class="input w100" disabled="true" value="'+a(v.discount)+'"/>',m+='<span mxs="_zs_gallerybc:_" class="ml5">%</span></div><div mxv mxa="_zs_gallerybc:f" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="2" mx-change="'+t+'changeSettingType({type:2})" ',2==v.type&&(m+=' checked="true" '),m+='/>无折扣</label></div><div mxv mxa="_zs_gallerybc:g" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="3" mx-change="'+t+'changeSettingType({type:3})" ',3==v.type&&(m+=' checked="true" '),m+='/>不投放</label></div></div><div mxs="_zs_gallerybc:a" class="_zs_galleryew"><a class="btn btn-small btn-brand mr10 w60" href="javascript:;" mx-click="'+t+'submitSetting()">确定</a><a class="btn btn-small w60" href="javascript:;" mx-click="'+t+'cancelSetting()">取消</a></div></div>'),m+='<div class="_zs_galleryeh clearfix" id="'+a(x)+'_duration" style="width: '+a(f)+'px;"><ul class="_zs_galleryei fl" style="width: '+a(y*z)+'px;"><li class="_zs_galleryej" style="height: '+a(w+1)+"px; line-height: "+a(w)+'px;">星期</li>';for(var N=0,Z=k.length;N<Z;N++){var j=k[N];m+='<li class="_zs_galleryej" style="height: '+a(I)+"px; line-height: "+a(I)+'px;">'+a(j)+"</li>"}m+='</ul><div class="_zs_galleryek fl" style="width: '+a(y*T)+'px;"><ul mxa="_zs_gallerybc:h" class="_zs_galleryel clearfix">';for(var H=0,S=D.length;H<S;H++){var $=D[H];m+='<li class="_zs_galleryem" style="width: '+a(y*(T/4))+"px; height: "+a(w/2)+"px; line-height: "+a(w/2)+'px;">'+a($)+"</li>"}m+='</ul><ul mxa="_zs_gallerybc:i" class="_zs_galleryen clearfix">';for(var C=0;C<24;C+=1)m+='<li class="_zs_galleryeo" style="width: '+a(y*z)+"px; height: "+a(w/2)+"px; line-height: "+a(w/2)+'px;">'+a(C)+"</li>";m+='</ul><ul mxa="_zs_gallerybc:j" class="_zs_galleryep clearfix">';for(var R=0,W=M.length;R<W;R++){var B=M[R];m+='<li class="_zs_galleryeq fl" style="width: '+a(y)+"px; height: "+a(I)+"px; background-color: "+a(B.bg)+'" mx-click="'+t+"clickOutside({index:"+a(B.index)+'})" mx-mousedown="'+t+'select()" mx-mouseover="'+t+"showTip({index:"+a(B.index)+'})" mx-mouseout="'+t+"hideTip({index:"+a(B.index)+'})"></li>'}return m+='</ul></div></div><div mxs="_zs_gallerybc:b" class="pt10 pb10 clearfix"><a class="btn btn-small mr10 fl" href="javascript:;" mx-click="'+t+'clear()">清空</a><a class="btn btn-small mr10 fl" href="javascript:;" mx-click="'+t+'reset()">重置</a><span class="fr lh28 color-c"><span class="_zs_galleryeg" style="background-color: rgba(97,199,242,0.7)"></span><span class="font-tahoma bold color-c mr15">30-100%</span><span class="_zs_galleryeg" style="background-color: rgba(77,166,255,0.7)"></span><span class="font-tahoma bold color-c mr15">100-200%</span><span class="_zs_galleryeg" style="background-color: rgba(134,115,230,0.7)"></span><span class="font-tahoma bold color-c mr15">200-250%</span><i class="mc-iconfont displacement-2">&#xe705;</i><span class="mr10">可以拖拽鼠标选择投放时段</span></span></div></div>'},mixins:[o,s],init:function(e){var t=this,r=/^true$/i.test(e.half),a=e.width||780,o=e.selected||l.none,s=r?2:1;a&&+a<780&&(a=780);var i=24*s,n=a/(25*s),d=7*i;t.updater.set({viewId:t.id,timeDiscount:o,weeks:["一","二","三","四","五","六","日"],ranges:["00:00 - 06:00","06:00 - 12:00","12:00 - 18:00","18:00 - 24:00"],multiple:s,maxWidth:a,rowNum:i,columnNum:7,headerHeight:60,boxWidth:n,boxHeight:40,boxLength:d,boxZones:t.getBoxzone(d),valid:"",maskInfo:{show:!1,left:0,top:0,width:0,height:0,startRow:0,endRow:0,startColumn:0,endColumn:0,selectedZones:[]},settingInfo:{show:!1,week:"",time:"",discount:"",type:1},hoverInfo:{show:!1,left:0,top:0,week:"",time:"",discount:""}}),t.discountColorMap=t.getColorMap(),t.on("destroy",function(){$(document.body).off("mousemove.duration"),$(document.body).off("mouseup.duration"),clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout)})},render:function(){for(var e=this.updater,t=e.get("timeDiscount"),r=e.get("boxLength"),a=this.report2Array(t),o=0;o<r;o++)this.setBoxDiscount(o,a[o]);this.updater.digest(),this.wrapper=$("#"+this.id+"_duration")},report2Array:function(e){for(var t=[],r=this.updater,a=r.get("rowNum"),o=r.get("multiple"),s=e.split(";"),l=0,i=s.length;l<i;l++)for(var n=s[l].split(","),d=0,g=n.length;d<g;d++)if("0"!=n[d]){var u=n[d].match(/(\d{2}):(\d{2})-(\d{2}):(\d{2}):(\d+)/),c=parseInt(u[1])*o+a*l;"30"==u[2]&&c++;var h=parseInt(u[3])*o+a*l;"30"==u[4]&&h++;for(var p=parseInt(u[5]),m=c;m<=h-1;m++)t[m]=p}return t},setBoxDiscount:function(e,t){t=parseInt(t)||0;var r=this.discountColorMap[t],a=this.updater.get("boxZones");a[e].bg=r,a[e].discount=t,this.updater.set({boxZones:a})},"select<mousedown>":function(e){e.preventDefault();var t=this,r=t.updater,a=r.get("hoverInfo"),o=r.get("settingInfo"),s=r.get("maskInfo"),l=r.get("boxWidth"),i=r.get("multiple"),n=r.get("headerHeight");a.show=!1,o.show=!1;var d=t.wrapper,g=d.offset().left,u=d.offset().top,c=e.pageX-g,h=e.pageY-u;$(document.body).off("mousemove.duration").on("mousemove.duration",function(e){e.preventDefault();var r=e.pageX-g,p=e.pageY-u,m=Math.min(r,d.outerWidth()),f=Math.min(p,d.outerHeight()),_=Math.max(l*i,Math.min(c,m)),b=Math.max(n,Math.min(h,f));s.left=_,s.top=b+1,s.width=Math.max(c,m)-_,s.height=Math.max(h,f)-b,s.show=!0,t.updater.digest({hoverInfo:a,settingInfo:o,maskInfo:s})}),$(document.body).off("mouseup.duration").on("mouseup.duration",function(e){s.show&&(e.preventDefault(),$(document.body).off("mousemove.duration"),t.selectEnd(),$(document.body).off("mouseup.duration"))})},selectEnd:function(e){for(var t=this.updater,r=t.get("maskInfo"),a=t.get("headerHeight"),o=t.get("boxHeight"),s=t.get("boxWidth"),l=t.get("multiple"),i=t.get("columnNum"),n=t.get("rowNum"),d=parseInt((r.top-a)/o),g=parseInt((r.height+r.top-a)/o),u=parseInt((r.left-s*l)/s),c=parseInt((r.width+r.left-s*l)/s),h=Math.max(0,d),p=Math.min(i-1,g),m=Math.max(0,u),f=Math.min(n-1,c),_=[],b=h;b<=p;b++)for(var v=m;v<=f;v++)_.push(b*n+v);r.selectedZones=_,r.startRow=h,r.endRow=p,r.startColumn=m,r.endColumn=f,r.left=s*l+m*s,r.top=a+h*o+1,r.width=(f-m+1)*s,r.height=(p-h+1)*o,r.show=!0,this.showSetting()},"clickOutside<click>":function(e){var t=+e.params.index,r=this.updater.get("maskInfo");!r.show||r.show&&r.selectedZones.indexOf(t)>-1||(e.preventDefault(),$(document.body).off("mousemove.duration"),$(document.body).off("mouseup.duration"),$(document.body).off("click.duration"),this["cancelSetting<click>"]())},"changeSettingType<change>":function(e){var t=this.updater,r=t.get("settingInfo");r.type=e.params.type,t.digest({settingInfo:r})},"submitSetting<click>":function(){var e=this.updater.get(),t=e.settingInfo,r=e.maskInfo,a=0,o=!0;switch(+t.type){case 1:o=this.isValid(),a=this.fromKeys(e,"settingInfo").settingInfo.discount;break;case 2:a=100;break;case 3:a=0}if(o){t.show=!1,t.type=1,r.show=!1;for(var s=0;s<r.selectedZones.length;s++)this.setBoxDiscount(r.selectedZones[s],a);this.updater.digest({settingInfo:t,maskInfo:r})}},"cancelSetting<click>":function(){var e=this.updater,t=e.get("settingInfo"),r=e.get("maskInfo");r.show=!1,t.show=!1,t.type=1,this.updater.digest({settingInfo:t,maskInfo:r})},showSetting:function(){var e,t=this.updater,r=t.get("settingInfo"),a=t.get("maskInfo"),o=t.get("boxZones"),s=a.startRow+1,l=a.endRow+1;e=s!=l?this.formatweek(s)+" - "+this.formatweek(l):this.formatweek(s),r.week=e,r.time=this.getDuration(a.startColumn,a.endColumn+1,"%s - %s");for(var i,n=a.selectedZones,d=!0,g=0;g<n.length;g++){var u=o[n[g]].discount;if(!u||i&&u!=i){d=!1;break}i=u}r.discount=d?i:"";var c=this.wrapper.outerWidth(),h=this.wrapper.outerHeight(),p=a.left+a.width/2;p+260>c&&(p-=260);var m=a.top+a.height/2;m+238>h+100&&(m-=238),r.left=p,r.top=m,r.show=!0,this.updater.digest({boxZones:o,settingInfo:r,maskInfo:a})},"showTip<mouseover>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var t=this;clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout);var r=t.updater,o=r.get("settingInfo");if(!r.get("maskInfo").show&&!o.show){var s=r.get("boxWidth"),l=r.get("boxHeight"),i=r.get("headerHeight"),n=r.get("rowNum"),d=r.get("hoverInfo"),g=r.get("boxZones");t.hoverTimeout=setTimeout(function(){var a=parseInt(e.params.index),o=s+(a%n+1)*s,u=i+(parseInt(a/n)+1)*l,c=t.formatweek(parseInt(a/n)+1),h=t.getDuration(a,a+1,"%s - %s"),p=g[a].discount;d.left=o,d.top=u,d.week=c,d.time=h,d.discount=p,d.show=!0,r.digest({hoverInfo:d})},200)}}},"hideTip<mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var t=this;clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout);var r=t.updater;t.hideTimeout=setTimeout(function(){var e=r.get("hoverInfo");e.show=!1,t.updater.digest({hoverInfo:e})},200)}},"reset<click>":function(e){for(var t=this.updater.get("boxLength"),r=0;r<t;r++)this.setBoxDiscount(r,100);this.updater.digest()},"clear<click>":function(e){for(var t=this.updater.get("boxLength"),r=0;r<t;r++)this.setBoxDiscount(r,0);this.updater.digest()},array2Report:function(e){for(var t=this,r=t.updater,a=r.get("columnNum"),o=r.get("rowNum"),s=(r.get("multiple"),[]),l=0;l<a;l++){s[l]=0;for(var i=[],n=0;n<o;n++){var d=e[l*o+n];if(d){var g=i[i.length-1];g&&g.discount==d&&g.end==n?g.end=n+1:i.push({start:n,end:n+1,discount:d})}}var u=i.map(function(e){return t.getDuration(e.start,e.end)+":"+e.discount});u&&u.length>0&&(s[l]=u.join(","))}return s.join(";")},submit:function(){var e=this.updater.get("boxZones").map(function(e){return e.discount}),t=this.array2Report(e);return t==l.none?{ok:!1}:{ok:!0,val:t}},update:function(e){for(var t=this.updater.get(),r=(e=t.timeDiscount,t.boxLength),a=this.report2Array(e),o=0;o<r;o++)this.setBoxDiscount(o,a[o])},formatweek:function(e){return"星期"+["日","一","二","三","四","五","六"][e%7]},getDuration:function(e,t,r){var a=this.updater.get("rowNum"),o=this.getTimeFromNum(e),s="",l=o+"-"+(s=t%a==0?"24:00":this.getTimeFromNum(t));return r&&(l=r.replace("%s",o).replace("%s",s)),l},getTimeFromNum:function(e){var t=this.updater.get(),r=t.rowNum,a=t.multiple,o=Math.floor(e%r/a);return 1==(o+"").length&&(o="0"+o),o+":"+(e%r%a==1?"30":"00")},getBoxzone:function(e){for(var t=[],r=0;r<e;r++)t.push({index:r,bg:"#ffffff",discount:0});return t},getColorMap:function(e){for(var t={"[0,1)":"#ffffff","[30,40)":"rgba(97,199,242,0.05)","[40,50)":"rgba(97,199,242,0.1)","[50,60)":"rgba(97,199,242,0.15)","[60,70)":"rgba(97,199,242,0.2)","[70,80)":"rgba(97,199,242,0.25)","[80,90)":"rgba(97,199,242,0.3)","[90,100)":"rgba(97,199,242,0.35)","[100,101)":"rgba(97,199,242,0.4)","[101,110)":"rgba(77,166,255,0.15)","[110,120)":"rgba(77,166,255,0.2)","[120,130)":"rgba(77,166,255,0.25)","[130,140)":"rgba(77,166,255,0.3)","[140,150)":"rgba(77,166,255,0.35)","[150,160)":"rgba(77,166,255,0.4)","[160,170)":"rgba(77,166,255,0.45)","[170,180)":"rgba(77,166,255,0.5)","[180,190)":"rgba(77,166,255,0.55)","[190,200)":"rgba(77,166,255,0.6)","[200,210)":"rgba(134,115,230,0.3)","[210,220)":"rgba(134,115,230,0.35)","[220,230)":"rgba(134,115,230,0.4)","[230,240)":"rgba(134,115,230,0.45)","[240,250)":"rgba(134,115,230,0.5)","[250,251)":"rgba(134,115,230,0.55)"},r={},a=0;a<=250;a++)for(var o in r[a]="#ffffff",t){var s=o.substring(1,o.length-1).split(","),l=s[0],i=s[1];if(a>=l&&a<i){r[a]=t[o];break}}return r}})});