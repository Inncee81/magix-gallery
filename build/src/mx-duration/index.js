define("mx-duration/index",["magix","mx-form/index","mx-form/validator","mx-duration/data"],(e,t,a)=>{var r=e("magix"),s=e("mx-form/index"),o=e("mx-form/validator"),i=e("mx-duration/data");r.applyStyle("_zs_galleryE","._zs_galleryek{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryel{display:inline-block;width:10px;height:10px;margin-right:3px;border-radius:50%}._zs_galleryem{box-sizing:border-box;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;background-color:#fafafa}._zs_galleryem ._zs_galleryen{border-top:1px solid #e6e6e6;border-right:1px solid #e6e6e6;border-left:1px solid #e6e6e6;border-top-left-radius:4px;border-bottom-left-radius:4px}._zs_galleryem ._zs_galleryen ._zs_galleryeo{color:#999;text-align:center;border-bottom:1px solid #e6e6e6}._zs_galleryem ._zs_galleryen ._zs_galleryeo:first-child{border-top-left-radius:4px}._zs_galleryem ._zs_galleryen ._zs_galleryeo:last-child{border-bottom-left-radius:4px}._zs_galleryem ._zs_galleryep ._zs_galleryeq{background-color:#fafafa;border-top:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;border-top-right-radius:4px;text-align:center;color:#999}._zs_galleryem ._zs_galleryep ._zs_galleryeq ._zs_galleryer{float:left;border-right:1px solid #e6e6e6}._zs_galleryem ._zs_galleryep ._zs_galleryeq ._zs_galleryer:last-child{border-top-right-radius:4px}._zs_galleryem ._zs_galleryep ._zs_galleryes{background-color:#fafafa;text-align:center;color:#999}._zs_galleryem ._zs_galleryep ._zs_galleryes ._zs_galleryet{float:left;border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6}._zs_galleryem ._zs_galleryep ._zs_galleryeu ._zs_galleryev{background:#fff;border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6}._zs_galleryem ._zs_galleryep ._zs_galleryeu ._zs_galleryev:last-child{border-bottom-right-radius:4px}._zs_galleryew{position:relative}._zs_galleryew ._zs_galleryex{position:absolute;z-index:100;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;border:1px solid #4d7fff;background:rgba(75,138,251,.2)}._zs_galleryew ._zs_galleryey{width:140px;padding:20px;filter:alpha(opacity=80);opacity:.8}._zs_galleryew ._zs_galleryey,._zs_galleryew ._zs_galleryez{position:absolute;z-index:100;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6;border-radius:4px;background:#fff}._zs_galleryew ._zs_galleryez{width:260px}._zs_galleryew ._zs_galleryez ._zs_galleryeA{padding:20px 20px 10px;border-bottom:1px solid #e6e6e6}._zs_galleryew ._zs_galleryez ._zs_galleryeB{padding:10px 20px}"),a.exports=r.View.extend({tmpl:function(e,t,a,r,s,o,i,l){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(g,d)}}if(!o){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return u[e]},c=/[!')(*]/g;o=function(e){return encodeURIComponent(s(e)).replace(c,p)}}if(!l){var h=/[\\'"]/g;l=function(e){return s(e).replace(h,"\\$&")}}var m="",f=e.maxWidth,_=e.hoverInfo,x=e.maskInfo,y=e.settingInfo,b=e.viewId,v=e.boxWidth,z=e.multiple,w=e.headerHeight,k=e.weeks,I=e.boxHeight,T=e.rowNum,D=e.ranges,M=e.boxZones;m+='<div mxv style="width: '+r(f)+'px;" class="_zs_galleryew">',_.show&&(m+='<div style="top: '+r(_.top)+"px; left: "+r(_.left)+'px;" class="_zs_galleryey"><div mxa="_zs_gallerya4:_" class="mb5">'+r(_.week)+'</div><div mxa="_zs_gallerya4:a" class="mb5"><strong>'+r(_.time)+"</strong></div><div><strong>"+r(_.discount)+"</strong>%折扣</div></div>"),m+=" ",x.show&&(m+='<div style="top: '+r(x.top)+"px; left: "+r(x.left)+"px; height: "+r(x.height)+"px; width: "+r(x.width)+'px;" class="_zs_galleryex"></div>'),m+=" ",y.show&&(m+='<div mxv style="top: '+r(y.top)+"px; left: "+r(y.left)+'px;" class="_zs_galleryez"><div mxv mxa="_zs_gallerya4:b" class="_zs_galleryeA"><div mxa="_zs_gallerya4:c" class="mb20"><span>'+r(y.week)+'</span>：<strong mxa="_zs_gallerya4:d" class="ml5">'+r(y.time)+'</strong></div><div mxv mxa="_zs_gallerya4:e" class="mb5"><label mxv><input type="radio" class="radio" name="settingType" value="1" mx-change="'+t+'changeSettingType({type:1})" ',1==y.type&&(m+=' checked="true" '),m+="/>自定义：</label>",1==y.type?m+='<input mxe="'+t+"_0\" mxc=\"[{p:'settingInfo.discount',f:{required:true,posint:[true,'范围:30-250的整数'],min:[30,'范围:30-250的整数'],max:[250,'范围:30-250的整数']}}]\" class=\"input w100\" value=\""+r(y.discount)+'"/>':m+='<input class="input w100" disabled="true" value="'+r(y.discount)+'"/>',m+='<span mxs="_zs_gallerya4:_" class="ml5">%</span></div><div mxv mxa="_zs_gallerya4:f" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="2" mx-change="'+t+'changeSettingType({type:2})" ',2==y.type&&(m+=' checked="true" '),m+='/>无折扣</label></div><div mxv mxa="_zs_gallerya4:g" class="mb10"><label mxv><input type="radio" name="settingType" class="radio" value="3" mx-change="'+t+'changeSettingType({type:3})" ',3==y.type&&(m+=' checked="true" '),m+='/>不投放</label></div></div><div mxs="_zs_gallerya4:a" class="_zs_galleryeB"><a class="btn btn-brand mr10 w60" href="javascript:;" mx-click="'+t+'submitSetting()">确定</a><a class="btn w60" href="javascript:;" mx-click="'+t+'cancelSetting()">取消</a></div></div>'),m+='<div class="_zs_galleryem clearfix" id="'+r(b)+'_duration" style="width: '+r(f)+'px;"><ul class="_zs_galleryen fl" style="width: '+r(v*z)+'px;"><li class="_zs_galleryeo" style="height: '+r(w+1)+"px; line-height: "+r(w)+'px;">星期</li>';for(var N=0,Z=k.length;N<Z;N++){var S=k[N];m+='<li class="_zs_galleryeo" style="height: '+r(I)+"px; line-height: "+r(I)+'px;">'+r(S)+"</li>"}m+='</ul><div class="_zs_galleryep fl" style="width: '+r(v*T)+'px;"><ul mxa="_zs_gallerya4:h" class="_zs_galleryeq clearfix">';for(var $=0,C=D.length;$<C;$++){var H=D[$];m+='<li class="_zs_galleryer" style="width: '+r(v*(T/4))+"px; height: "+r(w/2)+"px; line-height: "+r(w/2)+'px;">'+r(H)+"</li>"}m+='</ul><ul mxa="_zs_gallerya4:i" class="_zs_galleryes clearfix">';for(var B=0;B<24;B+=1)m+='<li class="_zs_galleryet" style="width: '+r(v*z)+"px; height: "+r(w/2)+"px; line-height: "+r(w/2)+'px;">'+r(B)+"</li>";m+='</ul><ul mxa="_zs_gallerya4:j" class="_zs_galleryeu clearfix">';for(var R=0,W=M.length;R<W;R++){var j=M[R];m+='<li class="_zs_galleryev fl" style="width: '+r(v)+"px; height: "+r(I)+"px; background-color: "+r(j.bg)+'" mx-click="'+t+"clickOutside({index:"+r(j.index)+'})" mx-mousedown="'+t+'select()" mx-mouseover="'+t+"showTip({index:"+r(j.index)+'})" mx-mouseout="'+t+"hideTip({index:"+r(j.index)+'})"></li>'}return m+='</ul></div></div><div mxs="_zs_gallerya4:b" class="pt10 pb10 clearfix"><a class="btn btn-small mr10 fl" href="javascript:;" mx-click="'+t+'clear()">清空</a><a class="btn btn-small mr10 fl" href="javascript:;" mx-click="'+t+'reset()">重置</a><span class="fr lh28 color-c"><span class="_zs_galleryel" style="background-color: rgba(97,199,242,0.7)"></span><span class="font-tahoma bold color-c mr15">30-100%</span><span class="_zs_galleryel" style="background-color: rgba(77,166,255,0.7)"></span><span class="font-tahoma bold color-c mr15">100-200%</span><span class="_zs_galleryel" style="background-color: rgba(134,115,230,0.7)"></span><span class="font-tahoma bold color-c mr15">200-250%</span><i class="mc-iconfont displacement-2">&#xe705;</i><span class="mr10">可以拖拽鼠标选择投放时段</span></span></div></div>'},mixins:[s,o],init:function(e){var t=this,a=/^true$/i.test(e.half),r=e.width||780,s=e.selected||i.none,o=a?2:1;r&&+r<780&&(r=780);var l=24*o,n=r/(25*o),g=7*l;t.updater.set({viewId:t.id,timeDiscount:s,weeks:["一","二","三","四","五","六","日"],ranges:["00:00 - 06:00","06:00 - 12:00","12:00 - 18:00","18:00 - 24:00"],multiple:o,maxWidth:r,rowNum:l,columnNum:7,headerHeight:60,boxWidth:n,boxHeight:40,boxLength:g,boxZones:t.getBoxzone(g),valid:"",maskInfo:{show:!1,left:0,top:0,width:0,height:0,startRow:0,endRow:0,startColumn:0,endColumn:0,selectedZones:[]},settingInfo:{show:!1,week:"",time:"",discount:"",type:1},hoverInfo:{show:!1,left:0,top:0,week:"",time:"",discount:""}}),t.discountColorMap=t.getColorMap(),t.on("destroy",function(){$(document.body).off("mousemove.duration"),$(document.body).off("mouseup.duration"),clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout)})},render:function(){for(var e=this.updater,t=e.get("timeDiscount"),a=e.get("boxLength"),r=this.report2Array(t),s=0;s<a;s++)this.setBoxDiscount(s,r[s]);this.updater.digest(),this.wrapper=$("#"+this.id+"_duration")},report2Array:function(e){for(var t=[],a=this.updater,r=a.get("rowNum"),s=a.get("multiple"),o=e.split(";"),i=0,l=o.length;i<l;i++)for(var n=o[i].split(","),g=0,d=n.length;g<d;g++)if("0"!=n[g]){var u=n[g].match(/(\d{2}):(\d{2})-(\d{2}):(\d{2}):(\d+)/),p=parseInt(u[1])*s+r*i;"30"==u[2]&&p++;var c=parseInt(u[3])*s+r*i;"30"==u[4]&&c++;for(var h=parseInt(u[5]),m=p;m<=c-1;m++)t[m]=h}return t},setBoxDiscount:function(e,t){t=parseInt(t)||0;var a=this.discountColorMap[t],r=this.updater.get("boxZones");r[e].bg=a,r[e].discount=t,this.updater.set({boxZones:r})},"select<mousedown>":function(e){e.preventDefault();var t=this,a=t.updater,r=a.get("hoverInfo"),s=a.get("settingInfo"),o=a.get("maskInfo"),i=a.get("boxWidth"),l=a.get("multiple"),n=a.get("headerHeight");r.show=!1,s.show=!1;var g=t.wrapper,d=g.offset().left,u=g.offset().top,p=e.pageX-d,c=e.pageY-u;$(document.body).off("mousemove.duration").on("mousemove.duration",function(e){e.preventDefault();var a=e.pageX-d,h=e.pageY-u,m=Math.min(a,g.outerWidth()),f=Math.min(h,g.outerHeight()),_=Math.max(i*l,Math.min(p,m)),x=Math.max(n,Math.min(c,f));o.left=_,o.top=x+1,o.width=Math.max(p,m)-_,o.height=Math.max(c,f)-x,o.show=!0,t.updater.digest({hoverInfo:r,settingInfo:s,maskInfo:o})}),$(document.body).off("mouseup.duration").on("mouseup.duration",function(e){o.show&&(e.preventDefault(),$(document.body).off("mousemove.duration"),t.selectEnd(),$(document.body).off("mouseup.duration"))})},selectEnd:function(e){for(var t=this.updater,a=t.get("maskInfo"),r=t.get("headerHeight"),s=t.get("boxHeight"),o=t.get("boxWidth"),i=t.get("multiple"),l=t.get("columnNum"),n=t.get("rowNum"),g=parseInt((a.top-r)/s),d=parseInt((a.height+a.top-r)/s),u=parseInt((a.left-o*i)/o),p=parseInt((a.width+a.left-o*i)/o),c=Math.max(0,g),h=Math.min(l-1,d),m=Math.max(0,u),f=Math.min(n-1,p),_=[],x=c;x<=h;x++)for(var y=m;y<=f;y++)_.push(x*n+y);a.selectedZones=_,a.startRow=c,a.endRow=h,a.startColumn=m,a.endColumn=f,a.left=o*i+m*o,a.top=r+c*s+1,a.width=(f-m+1)*o,a.height=(h-c+1)*s,a.show=!0,this.showSetting()},"clickOutside<click>":function(e){var t=+e.params.index,a=this.updater.get("maskInfo");!a.show||a.show&&a.selectedZones.indexOf(t)>-1||(e.preventDefault(),$(document.body).off("mousemove.duration"),$(document.body).off("mouseup.duration"),$(document.body).off("click.duration"),this["cancelSetting<click>"]())},"changeSettingType<change>":function(e){var t=this.updater,a=t.get("settingInfo");a.type=e.params.type,t.digest({settingInfo:a})},"submitSetting<click>":function(){var e=this.updater.get(),t=e.settingInfo,a=e.maskInfo,r=0,s=!0;switch(+t.type){case 1:s=this.isValid(),r=this.fromKeys(e,"settingInfo").settingInfo.discount;break;case 2:r=100;break;case 3:r=0}if(s){t.show=!1,t.type=1,a.show=!1;for(var o=0;o<a.selectedZones.length;o++)this.setBoxDiscount(a.selectedZones[o],r);this.updater.digest({settingInfo:t,maskInfo:a})}},"cancelSetting<click>":function(){var e=this.updater,t=e.get("settingInfo"),a=e.get("maskInfo");a.show=!1,t.show=!1,t.type=1,this.updater.digest({settingInfo:t,maskInfo:a})},showSetting:function(){var e,t=this.updater,a=t.get("settingInfo"),r=t.get("maskInfo"),s=t.get("boxZones"),o=r.startRow+1,i=r.endRow+1;e=o!=i?this.formatweek(o)+" - "+this.formatweek(i):this.formatweek(o),a.week=e,a.time=this.getDuration(r.startColumn,r.endColumn+1,"%s - %s");for(var l,n=r.selectedZones,g=!0,d=0;d<n.length;d++){var u=s[n[d]].discount;if(!u||l&&u!=l){g=!1;break}l=u}a.discount=g?l:"";var p=this.wrapper.outerWidth(),c=this.wrapper.outerHeight(),h=r.left+r.width/2;h+260>p&&(h-=260);var m=r.top+r.height/2;m+238>c+100&&(m-=238),a.left=h,a.top=m,a.show=!0,this.updater.digest({boxZones:s,settingInfo:a,maskInfo:r})},"showTip<mouseover>":function(e){if(!r.inside(e.relatedTarget,e.eventTarget)){var t=this;clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout);var a=t.updater,s=a.get("settingInfo");if(!a.get("maskInfo").show&&!s.show){var o=a.get("boxWidth"),i=a.get("boxHeight"),l=a.get("headerHeight"),n=a.get("rowNum"),g=a.get("hoverInfo"),d=a.get("boxZones");t.hoverTimeout=setTimeout(function(){var r=parseInt(e.params.index),s=o+(r%n+1)*o,u=l+(parseInt(r/n)+1)*i,p=t.formatweek(parseInt(r/n)+1),c=t.getDuration(r,r+1,"%s - %s"),h=d[r].discount;g.left=s,g.top=u,g.week=p,g.time=c,g.discount=h,g.show=!0,a.digest({hoverInfo:g})},200)}}},"hideTip<mouseout>":function(e){if(!r.inside(e.relatedTarget,e.eventTarget)){var t=this;clearTimeout(t.hoverTimeout),clearTimeout(t.hideTimeout);var a=t.updater;t.hideTimeout=setTimeout(function(){var e=a.get("hoverInfo");e.show=!1,t.updater.digest({hoverInfo:e})},200)}},"reset<click>":function(e){for(var t=this.updater.get("boxLength"),a=0;a<t;a++)this.setBoxDiscount(a,100);this.updater.digest()},"clear<click>":function(e){for(var t=this.updater.get("boxLength"),a=0;a<t;a++)this.setBoxDiscount(a,0);this.updater.digest()},array2Report:function(e){for(var t=this,a=t.updater,r=a.get("columnNum"),s=a.get("rowNum"),o=(a.get("multiple"),[]),i=0;i<r;i++){o[i]=0;for(var l=[],n=0;n<s;n++){var g=e[i*s+n];if(g){var d=l[l.length-1];d&&d.discount==g&&d.end==n?d.end=n+1:l.push({start:n,end:n+1,discount:g})}}var u=l.map(function(e){return t.getDuration(e.start,e.end)+":"+e.discount});u&&u.length>0&&(o[i]=u.join(","))}return o.join(";")},submit:function(){var e=this.updater.get("boxZones").map(function(e){return e.discount}),t=this.array2Report(e);return t==i.none?{ok:!1}:{ok:!0,val:t}},update:function(e){e=this.updater.get("timeDiscount");for(var t=this.updater.get("boxLength"),a=this.report2Array(e),r=0;r<t;r++)this.setBoxDiscount(r,a[r])},formatweek:function(e){return"星期"+["日","一","二","三","四","五","六"][e%7]},getDuration:function(e,t,a){var r=this.updater.get("rowNum"),s=this.getTimeFromNum(e),o="",i=s+"-"+(o=t%r==0?"24:00":this.getTimeFromNum(t));return a&&(i=a.replace("%s",s).replace("%s",o)),i},getTimeFromNum:function(e){var t=this.updater.get("rowNum"),a=this.updater.get("multiple"),r=Math.floor(e%t/a);return 1==(r+"").length&&(r="0"+r),r+":"+(e%t%a==1?"30":"00")},getBoxzone:function(e){for(var t=[],a=0;a<e;a++)t.push({index:a,bg:"#ffffff",discount:0});return t},getColorMap:function(e){for(var t={"[0,1)":"#ffffff","[30,40)":"rgba(97,199,242,0.05)","[40,50)":"rgba(97,199,242,0.1)","[50,60)":"rgba(97,199,242,0.15)","[60,70)":"rgba(97,199,242,0.2)","[70,80)":"rgba(97,199,242,0.25)","[80,90)":"rgba(97,199,242,0.3)","[90,100)":"rgba(97,199,242,0.35)","[100,101)":"rgba(97,199,242,0.4)","[101,110)":"rgba(77,166,255,0.15)","[110,120)":"rgba(77,166,255,0.2)","[120,130)":"rgba(77,166,255,0.25)","[130,140)":"rgba(77,166,255,0.3)","[140,150)":"rgba(77,166,255,0.35)","[150,160)":"rgba(77,166,255,0.4)","[160,170)":"rgba(77,166,255,0.45)","[170,180)":"rgba(77,166,255,0.5)","[180,190)":"rgba(77,166,255,0.55)","[190,200)":"rgba(77,166,255,0.6)","[200,210)":"rgba(134,115,230,0.3)","[210,220)":"rgba(134,115,230,0.35)","[220,230)":"rgba(134,115,230,0.4)","[230,240)":"rgba(134,115,230,0.45)","[240,250)":"rgba(134,115,230,0.5)","[250,251)":"rgba(134,115,230,0.55)"},a={},r=0;r<=250;r++)for(var s in a[r]="#ffffff",t){var o=s.substring(1,s.length-1).split(","),i=o[0],l=o[1];if(r>=i&&r<l){a[r]=t[s];break}}return a}})});