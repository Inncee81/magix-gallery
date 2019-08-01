define("mx-hour/index",["magix","$"],(e,_,r)=>{var n=e("magix"),l=e("$");n.applyStyle("_zs_gallery_mx-hour_index_","._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours {\n  padding-top: 40px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour {\n  float: left;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all {\n  position: relative;\n  width: 10%;\n  margin-right: 1.8%;\n  border-radius: 4px;\n  color: #333;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all ._zs_gallery_mx-hour_index_-all-tip {\n  position: absolute;\n  top: -18px;\n  width: 100%;\n  height: 18px;\n  line-height: 18px;\n  right: 0;\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all ._zs_gallery_mx-hour_index_-all-btn {\n  width: 100%;\n  margin-top: 8px;\n  padding: 0;\n  font-size: 12px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour {\n  position: relative;\n  width: 3.6%;\n  color: #999;\n  line-height: 20px;\n  font-weight: bold;\n  font-family: \"Tahoma\";\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-hour-last {\n  width: 1.8%;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-inner {\n  position: relative;\n  height: 36px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-inner:before {\n  content: '';\n  position: absolute;\n  top: -16px;\n  left: 0;\n  width: 100%;\n  height: 16px;\n  background-color: transparent;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-line {\n  position: absolute;\n  top: 13px;\n  left: 0;\n  width: 0;\n  height: 10px;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-line ._zs_gallery_mx-hour_index_-hour-info {\n  position: absolute;\n  top: -31px;\n  left: 50%;\n  width: 40px;\n  margin-left: -20px;\n  color: #ccc;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-milestone ._zs_gallery_mx-hour_index_-hour-line {\n  height: 16px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-inner {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-inner:before {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-line ._zs_gallery_mx-hour_index_-hour-info {\n  color: #fff;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end {\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: 36px;\n  border-left: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start:before,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -3px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start ._zs_gallery_mx-hour_index_-line-info,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end ._zs_gallery_mx-hour_index_-line-info {\n  position: absolute;\n  top: -16px;\n  left: -10px;\n  width: 20px;\n  height: 16px;\n  background-color: var(--color-brand);\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 2px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start {\n  left: 0;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end {\n  right: -1px;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper {\n  padding: 10px 0;\n  color: #999;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper ._zs_gallery_mx-hour_index_-clear-btn {\n  font-size: 12px;\n  width: 10%;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper ._zs_gallery_mx-hour_index_-oper-tip {\n  line-height: var(--input-small-height);\n  margin-right: 1.8%;\n}\n"),r.exports=n.View.extend({tmpl:function(e,_,r,n,l,i,o,a){if(r||(r=e),!l){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};l=function(e){return""+(null==e?"":e)},n=function(e){return l(e).replace(t,x)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(e){return d[e]},u=/[!')(*]/g;i=function(e){return encodeURIComponent(l(e)).replace(u,h)}}if(!a){var p=/[\\'"]/g;a=function(e){return l(e).replace(p,"\\$&")}}var m,g,c,y="",z=e.simple,f=e.types,v=e.viewId,b=e.type,w=e.periods,$=e.tip;try{if(y+='<div mxv mxa="_zs_gallerycL:_" class="_zs_gallery_mx-hour_index_-period">',c=2,g="if !simple",m="<%if (!simple) {%>",!z){y+='<div mxv><span mxs="_zs_gallerycL:_" class="color-9 mr10">快捷操作：</span>',c=5,g="each types as t",m="<%for (var $art_iyhmysm$art_i = 0, $art_caglaabp$art_c = types.length; $art_iyhmysm$art_i < $art_caglaabp$art_c; $art_iyhmysm$art_i++) {        var t = types[$art_iyhmysm$art_i]%>";for(var k=0,I=f.length;k<I;k++){var L=f[k];y+='<label mxv mxa="_zs_gallerycL:a" class="mr40"><input type="radio" name="',c=7,g="=viewId",y+=(m="<%=viewId%>",n(v)+'_opers" value="'),c=7,g="=t.value",y+=(m="<%=t.value%>",n(L.value)+'" mx-change="'+_+"changeType({type:'"),c=8,g="=t.value",y+=(m="<%=$eq(t.value)%>",n(a(L.value))+"'})\" "),c=9,g="if (t.value == type)",m="<%if (t.value == type) {%>",L.value==b&&(y+=' checked="true" ',c=9,g="/if",m="<%}%>"),y+="/>",c=9,g="=t.text",y+=(m="<%=t.text%>",n(L.text)+"</label>"),c=11,g="/each",m="<%}%>"}y+="</div>",c=13,g="/if",m="<%}%>"}y+=" ",c=15,g="each periods as p pIndex",m="<%for (var pIndex = 0, $art_cbehhpe$art_c = periods.length; pIndex < $art_cbehhpe$art_c; pIndex++) {    var p = periods[pIndex]%>";for(var E=0,S=w.length;E<S;E++){var j=w[E];y+='<ul mxa="_zs_gallerycL:b" class="_zs_gallery_mx-hour_index_-hours clearfix"><li mxa="_zs_gallerycL:c" class="_zs_gallery_mx-hour_index_-all"><span mxs="_zs_gallerycL:a" class="_zs_gallery_mx-hour_index_-all-tip">时间段</span><a href="javascript:;" class="btn btn-small _zs_gallery_mx-hour_index_-all-btn ',c=19,g="if p.selected",m="<%if (p.selected) {%>",j.selected&&(y+=" btn-brand ",c=19,g="/if",m="<%}%>"),y+='" mx-click="'+_+"toggleAll({pIndex:",c=20,g="=pIndex",y+=(m="<%=pIndex%>",n(E)+'})">'),c=20,g="=p.name",y+=(m="<%=p.name%>",n(j.name)+"</a></li>"),c=22,g="each p.hours as h",m="<%for (var $art_irafmupnui$art_i = 0, $art_objelevzyec$art_obj = p.hours, $art_crkfhr$art_c = $art_objelevzyec$art_obj.length; $art_irafmupnui$art_i < $art_crkfhr$art_c; $art_irafmupnui$art_i++) {        var h = $art_objelevzyec$art_obj[$art_irafmupnui$art_i]%>";for(var A=0,N=j.hours,T=N.length;A<T;A++){var D=N[A];y+='<li mx-mousedown="'+_+'drag()" class="_zs_gallery_mx-hour_index_-hour ',c=23,g="if h.milestone",m="<%if (h.milestone) {%>",D.milestone&&(y+=" _zs_gallery_mx-hour_index_-milestone ",c=23,g="/if",m="<%}%>"),y+=" ",c=23,g="if h.selected",m="<%if (h.selected) {%>",D.selected&&(y+=" _zs_gallery_mx-hour_index_-selected ",c=23,g="/if",m="<%}%>"),y+='" data-period="',c=24,g="=pIndex",y+=(m="<%=pIndex%>",n(E)+'" data-hour="'),c=25,g="=h.index",y+=(m="<%=h.index%>",n(D.index)+'"><div mxs="_zs_gallerycL:b" class="_zs_gallery_mx-hour_index_-hour-inner"></div><div class="_zs_gallery_mx-hour_index_-line-start '),c=27,g="if !h.firstSelected",m="<%if (!h.firstSelected) {%>",D.firstSelected||(y+=" hide ",c=27,g="/if",m="<%}%>"),y+='" style="z-index: ',c=27,g="=h.zIndex",y+=(m="<%=h.zIndex%>",n(D.zIndex)+';"><span mxa="_zs_gallerycL:d" class="_zs_gallery_mx-hour_index_-line-info">'),c=28,g="=h.index",y+=(m="<%=h.index%>",n(D.index)+'</span></div><div class="_zs_gallery_mx-hour_index_-line-end '),c=30,g="if !h.endSelected",m="<%if (!h.endSelected) {%>",D.endSelected||(y+=" hide ",c=30,g="/if",m="<%}%>"),y+='" style="z-index: ',c=30,g="=h.zIndex",y+=(m="<%=h.zIndex%>",n(D.zIndex)+'"><span mxa="_zs_gallerycL:e" class="_zs_gallery_mx-hour_index_-line-info">'),c=31,g="=h.indexNext",y+=(m="<%=h.indexNext%>",n(D.indexNext)+'</span></div><div mxa="_zs_gallerycL:f" class="_zs_gallery_mx-hour_index_-hour-line"><span mxa="_zs_gallerycL:g" class="_zs_gallery_mx-hour_index_-hour-info">'),c=34,g="=h.index",y+=(m="<%=h.index%>",n(D.index)+"</span></div></li>"),c=37,g="/each",m="<%}%>"}y+='<li mxs="_zs_gallerycL:c" class="_zs_gallery_mx-hour_index_-hour _zs_gallery_mx-hour_index_-milestone _zs_gallery_mx-hour_index_-hour-last"><span class="_zs_gallery_mx-hour_index_-hour-line"><span class="_zs_gallery_mx-hour_index_-hour-info">24</span></span></li></ul>',c=44,g="/each",m="<%}%>"}y+='</div><div mxa="_zs_gallerycL:h" class="clearfix _zs_gallery_mx-hour_index_-opers-wrapper"><a mxs="_zs_gallerycL:d" mx-click="'+_+'clearAll()" href="javascript:;" class="btn btn-small _zs_gallery_mx-hour_index_-clear-btn"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_gallerycL:i" class="fr _zs_gallery_mx-hour_index_-oper-tip">',c=50,g="=tip",y+=(m="<%=tip%>",n($)+"</span></div>")}catch(e){var O="render view error:"+(e.message||e);throw g&&(O+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+c),O+="\r\n\t"+(g?"translate to:":"expr:"),O+=m+"\r\n\tat file:mx-hour/index.html"}return y},init:function(e){var _=this,r=e.tip||"",n=e.simple+""!="false",l=e.selected||[],i={};l.forEach(function(e){i[e.week]=e.times||[]});var o;o=n?[{name:"周一至周五",week:"12345"},{name:"周六至周日",week:"67"}]:[{name:"周一",week:1},{name:"周二",week:2},{name:"周三",week:3,times:[0]},{name:"周四",week:4},{name:"周五",week:5},{name:"周六",week:6},{name:"周日",week:7}],_.$selected={},o.forEach(function(e,r){var n=(i[e.week]||[]).map(function(e){return e+""}),l=function(){for(var e=[],_=0;_<24;_++)e.push({index:_,indexNext:_+1,milestone:_%6==0,zIndex:_+10});return e}();l.forEach(function(e){e.selected=n.indexOf(e.index+"")>-1,e.selected&&(_.$selected[r+"_"+e.index]=!0)}),e.hours=l}),_.updater.set({viewId:_.id,tip:r,periods:_.sync(o),simple:n,type:"",types:[{text:"全日程",value:1},{text:"工作日",value:2},{text:"双休日",value:3}]})},render:function(){this.updater.digest()},sync:function(e){return e.forEach(function(e){for(var _=e.hours,r=!0,n=0;n<_.length;n++){var l=_[n],i=_[n-1],o=_[n+1];l.firstSelected=!1,l.endSelected=!1,l.selected&&((i&&!i.selected||!i)&&(l.firstSelected=!0),(o&&!o.selected||!o)&&(l.endSelected=!0)),r=r&&l.selected}e.selected=r}),e},"clearAll<click>":function(e){var _=this.updater.get("periods");_.forEach(function(e){e.hours.forEach(function(e){e.selected=!1})}),this.updater.digest({periods:this.sync(_)})},"toggleAll<click>":function(e){var _=this.updater.get("periods"),r=_[e.params.pIndex],n=!r.selected;r.hours.forEach(function(e){e.selected=n}),this.updater.digest({periods:this.sync(_)})},"drag<mousedown>":function(e){var _=this,r=_.updater.get("periods"),n=l(e.eventTarget),i=n.data("period"),o=n.data("hour"),a=!r[i].hours[o].selected;_.toggle(i,o,a);var s=n.parent("._zs_gallery_mx-hour_index_-hours").find("[data-hour]");return s.on("mouseenter.drag",function(e){e.preventDefault();var r=l(this);_.toggle(r.data("period"),r.data("hour"),a)}),l(document.body).off("mouseup.drag").on("mouseup.drag",function(e){s.off("mouseenter.drag")}),e.preventDefault(),!1},toggle:function(e,_,r){var n=this.updater.get("periods");n[e].hours[_].selected=r,this.updater.digest({periods:this.sync(n)})},"changeType<change>":function(e){var _=e.params.type,r=this.updater.get("periods"),n=[];switch(+_){case 2:n=[6,7];break;case 3:n=[1,2,3,4,5]}r.forEach(function(e){e.hours.forEach(function(_){_.selected=n.indexOf(e.week)<0})}),this.updater.digest({type:_,periods:this.sync(r)})},val:function(){var e=this.updater.get("periods"),_=[];return e.forEach(function(e){var r=[];e.hours.forEach(function(e){e.selected&&r.push(e.index)}),_.push({week:e.week,name:e.name,times:r})}),_}})});