define("mx-hour/index",["magix","$"],(e,l,r)=>{var a=e("magix"),s=e("$");a.applyStyle("_zs_galleryac",'._zs_galleryhg ._zs_galleryhh{padding-top:40px;padding-bottom:10px;border-bottom:1px solid var(--color-border)}._zs_galleryhg ._zs_galleryhh ._zs_galleryhi,._zs_galleryhg ._zs_galleryhh ._zs_galleryhj{float:left;height:36px;text-align:center;vertical-align:middle;cursor:pointer}._zs_galleryhg ._zs_galleryhh ._zs_galleryhi{position:relative;width:10%;margin-right:1.8%;border-radius:4px;color:#333;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}._zs_galleryhg ._zs_galleryhh ._zs_galleryhi ._zs_galleryhk{position:absolute;top:-18px;width:100%;height:18px;line-height:18px;right:0;text-align:center;color:#999}._zs_galleryhg ._zs_galleryhh ._zs_galleryhi ._zs_galleryhl{width:100%;margin-top:8px;padding:0;font-size:12px}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj{position:relative;width:3.6%;color:#999;line-height:20px;font-weight:700;font-family:Tahoma}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj._zs_galleryhm{width:1.8%}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryhn{position:relative;height:36px}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryhn:before{content:"";position:absolute;top:-16px;left:0;width:100%;height:16px;background-color:transparent}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryho{position:absolute;top:13px;left:0;width:0;height:10px;border-left:1px solid var(--color-border)}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryho ._zs_galleryhp{position:absolute;top:-31px;left:50%;width:40px;margin-left:-20px;color:#ccc}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj._zs_galleryhq ._zs_galleryho{height:16px}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj._zs_galleryhr ._zs_galleryhn{background-color:var(--color-brand-opacity)}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj._zs_galleryhr ._zs_galleryhn:before{background-color:var(--color-brand)}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj._zs_galleryhr ._zs_galleryho ._zs_galleryhp{color:#fff}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryhs,._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryht{position:absolute;top:0;width:0;height:36px;border-left:1px solid var(--color-brand)}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryhs:before,._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryht:before{content:"";position:absolute;top:0;right:-3px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid var(--color-brand)}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryhs ._zs_galleryhu,._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryht ._zs_galleryhu{position:absolute;top:-16px;left:-10px;width:20px;height:16px;background-color:var(--color-brand);color:#fff;text-align:center;line-height:16px;border-radius:2px}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryht{left:0}._zs_galleryhg ._zs_galleryhh ._zs_galleryhj ._zs_galleryhs{right:-1px}._zs_galleryhv{padding:10px 0;color:#999}._zs_galleryhv ._zs_galleryhw{font-size:12px;width:10%}._zs_galleryhv ._zs_galleryhx{line-height:var(--input-small-height);margin-right:1.8%}'),r.exports=a.View.extend({tmpl:function(e,l,r,a,s,t,_,h){if(r||(r=e),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,n=function(e){return"&"+g[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(i,n)}}if(!t){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(d,c)}}if(!h){var y=/[\\'"]/g;h=function(e){return s(e).replace(y,"\\$&")}}var p="",z=e.simple,u=e.types,f=e.viewId,x=e.type,m=e.periods,v=e.tip;if(p+='<div mxv mxa="_zs_galleryc1:_" class="_zs_galleryhg">',!z){p+='<div mxv><span mxs="_zs_galleryc1:_" class="color-9 mr10">快捷操作：</span>';for(var b=0,w=u.length;b<w;b++){var k=u[b];p+='<label mxv mxa="_zs_galleryc1:a" class="mr40"><input type="radio" name="'+a(f)+'_opers" value="'+a(k.value)+'" mx-change="'+l+"changeType({type:'"+a(h(k.value))+"'})\" ",k.value==x&&(p+=' checked="true" '),p+="/>"+a(k.text)+"</label>"}p+="</div>"}p+=" ";for(var j=0,E=m.length;j<E;j++){var I=m[j];p+='<ul mxa="_zs_galleryc1:b" class="_zs_galleryhh clearfix"><li mxa="_zs_galleryc1:c" class="_zs_galleryhi"><span mxs="_zs_galleryc1:a" class="_zs_galleryhk">时间段</span><a href="javascript:;" class="btn btn-small _zs_galleryhl ',I.selected&&(p+=" btn-brand "),p+='" mx-click="'+l+"toggleAll({pIndex:"+a(j)+'})">'+a(I.name)+"</a></li>";for(var S=0,A=I.hours,$=A.length;S<$;S++){var T=A[S];p+='<li mx-mousedown="'+l+'drag()" class="_zs_galleryhj ',T.milestone&&(p+=" _zs_galleryhq "),p+=" ",T.selected&&(p+=" _zs_galleryhr "),p+='" data-period="'+a(j)+'" data-hour="'+a(T.index)+'"><div mxs="_zs_galleryc1:b" class="_zs_galleryhn"></div><div class="_zs_galleryht ',T.firstSelected||(p+=" hide "),p+='" style="z-index: '+a(T.zIndex)+';"><span mxa="_zs_galleryc1:d" class="_zs_galleryhu">'+a(T.index)+'</span></div><div class="_zs_galleryhs ',T.endSelected||(p+=" hide "),p+='" style="z-index: '+a(T.zIndex)+'"><span mxa="_zs_galleryc1:e" class="_zs_galleryhu">'+a(T.indexNext)+'</span></div><div mxa="_zs_galleryc1:f" class="_zs_galleryho"><span mxa="_zs_galleryc1:g" class="_zs_galleryhp">'+a(T.index)+"</span></div></li>"}p+='<li mxs="_zs_galleryc1:c" class="_zs_galleryhj _zs_galleryhq _zs_galleryhm"><span class="_zs_galleryho"><span class="_zs_galleryhp">24</span></span></li></ul>'}return p+='</div><div mxa="_zs_galleryc1:h" class="clearfix _zs_galleryhv"><a mxs="_zs_galleryc1:d" mx-click="'+l+'clearAll()" href="javascript:;" class="btn btn-small _zs_galleryhw"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_galleryc1:i" class="fr _zs_galleryhx">'+a(v)+"</span></div>"},init:function(e){var l=this,r=e.tip||"",a=e.simple+""!="false",s=e.selected||[],t={};s.forEach(function(e){t[e.week]=e.times||[]});var _;_=a?[{name:"周一至周五",week:"12345"},{name:"周六至周日",week:"67"}]:[{name:"周一",week:1},{name:"周二",week:2},{name:"周三",week:3,times:[0]},{name:"周四",week:4},{name:"周五",week:5},{name:"周六",week:6},{name:"周日",week:7}],l.$selected={},_.forEach(function(e,r){var a=(t[e.week]||[]).map(function(e){return e+""}),s=function(){for(var e=[],l=0;l<24;l++)e.push({index:l,indexNext:l+1,milestone:l%6==0,zIndex:l+10});return e}();s.forEach(function(e){e.selected=a.indexOf(e.index+"")>-1,e.selected&&(l.$selected[r+"_"+e.index]=!0)}),e.hours=s}),l.updater.set({viewId:l.id,tip:r,periods:l.sync(_),simple:a,type:"",types:[{text:"全日程",value:1},{text:"工作日",value:2},{text:"双休日",value:3}]})},render:function(){this.updater.digest()},sync:function(e){return e.forEach(function(e){for(var l=e.hours,r=!0,a=0;a<l.length;a++){var s=l[a],t=l[a-1],_=l[a+1];s.firstSelected=!1,s.endSelected=!1,s.selected&&((t&&!t.selected||!t)&&(s.firstSelected=!0),(_&&!_.selected||!_)&&(s.endSelected=!0)),r=r&&s.selected}e.selected=r}),e},"clearAll<click>":function(e){var l=this.updater.get("periods");l.forEach(function(e){e.hours.forEach(function(e){e.selected=!1})}),this.updater.digest({periods:this.sync(l)})},"toggleAll<click>":function(e){var l=this.updater.get("periods"),r=l[e.params.pIndex],a=!r.selected;r.hours.forEach(function(e){e.selected=a}),this.updater.digest({periods:this.sync(l)})},"drag<mousedown>":function(e){var l=this,r=l.updater.get("periods"),a=s(e.eventTarget),t=a.data("period"),_=a.data("hour"),h=!r[t].hours[_].selected;l.toggle(t,_,h);var g=a.parent("._zs_galleryhh").find("[data-hour]");return g.on("mouseenter.drag",function(e){e.preventDefault();var r=s(this);l.toggle(r.data("period"),r.data("hour"),h)}),s(document.body).off("mouseup.drag").on("mouseup.drag",function(e){g.off("mouseenter.drag")}),e.preventDefault(),!1},toggle:function(e,l,r){var a=this.updater.get("periods");a[e].hours[l].selected=r,this.updater.digest({periods:this.sync(a)})},"changeType<change>":function(e){var l=e.params.type,r=this.updater.get("periods"),a=[];switch(+l){case 2:a=[6,7];break;case 3:a=[1,2,3,4,5]}r.forEach(function(e){e.hours.forEach(function(l){l.selected=a.indexOf(e.week)<0})}),this.updater.digest({type:l,periods:this.sync(r)})},val:function(){var e=this.updater.get("periods"),l=[];return e.forEach(function(e){var r=[];e.hours.forEach(function(e){e.selected&&r.push(e.index)}),l.push({week:e.week,name:e.name,times:r})}),l}})});