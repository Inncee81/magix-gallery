define("mx-area/index",["magix","mx-area/data"],(e,a,r)=>{var l=e("magix"),i=e("mx-area/data");l.applyStyle("_zs_galleryn","._zs_gallerybj,._zs_gallerybk{display:block;width:300px;margin-bottom:12px}._zs_gallerybk{margin-left:20px}._zs_gallerybl ._zs_gallerybm{position:relative;float:left;width:16%;height:46px}._zs_gallerybl ._zs_gallerybm ._zs_gallerybn{padding:5px 0;border-radius:var(--border-radius);transition:all var(--duration)}._zs_gallerybl ._zs_gallerybm ._zs_gallerybn._zs_gallerybo{background-color:var(--color-brand-opacity)}._zs_gallerybl ._zs_gallerybm ._zs_gallerybp{float:left;line-height:46px}._zs_gallerybl ._zs_gallerybm ._zs_gallerybq{float:left;font-size:12px;font-weight:700;font-family:Tahoma;line-height:44px}._zs_gallerybl ._zs_gallerybm ._zs_gallerybr{position:absolute;top:0;left:calc(var(--font-size)*4 + 28px);width:20px;height:46px;line-height:46px;text-align:center;font-size:22px;color:#ccc;cursor:pointer;transition:all var(--duration);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._zs_gallerybl ._zs_gallerybm ._zs_gallerybr._zs_gallerybs{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerybl ._zs_gallerybm ._zs_gallerybt{position:absolute;top:46px;left:-72px;z-index:99;width:240px;padding:10px;border-radius:var(--border-radius);background-color:#fff}._zs_gallerybl ._zs_gallerybm ._zs_gallerybt ._zs_gallerybu{float:left;width:48%;height:32px;margin-right:2%;line-height:32px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}._zs_gallerybv{height:46px;line-height:46px}._zs_gallerybw{position:relative;padding-left:25px}._zs_gallerybw ._zs_gallerybx{position:absolute;top:0;left:0;width:25px;height:100%;line-height:46px;font-size:14px;color:#999;font-weight:700;font-family:Tahoma}._zs_galleryby{float:left;width:50%}._zs_galleryby ._zs_gallerybm{width:33%;min-width:calc(var(--font-size)*6 + 28px)}._zs_gallerybz{border-bottom:1px solid var(--color-border)}._zs_gallerybz ._zs_gallerybA{float:left;margin-bottom:-1px;padding-left:20px;border-bottom:1px solid transparent;cursor:pointer}._zs_gallerybz ._zs_gallerybA ._zs_gallerybB,._zs_gallerybz ._zs_gallerybA ._zs_gallerybC{float:left;height:46px;line-height:46px}._zs_gallerybz ._zs_gallerybA ._zs_gallerybC{padding-left:5px;padding-right:25px}._zs_gallerybz ._zs_gallerybA:hover{color:var(--color-brand);transition:color var(--duration)}._zs_gallerybz ._zs_gallerybA._zs_gallerybD{color:var(--color-brand);border-bottom:1px solid var(--color-brand)}"),r.exports=l.View.extend({tmpl:function(e,a,r,l,i,t,s,c){if(r||(r=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,_=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(o,_)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},h=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(h,g)}}if(!c){var p=/[\\'"]/g;c=function(e){return i(e).replace(p,"\\$&")}}var f="",y=e.isTab,b=e.placeholder,u=e.types,v=e.curTab,z=e.viewId,x=e.showProvinceId;if(f+='<div mxv class="search-box _zs_gallerybj ',y&&(f+=" _zs_gallerybk "),f+='"><i mxs="_zs_galleryU:_" class="mc-iconfont search-icon">&#xe651;</i><input mx-keyup="'+a+'__g()" class="input search-input" placeholder="'+l(b)+'"/></div>',y){f+='<div mxv mxa="_zs_galleryU:_" class="_zs_gallerybz clearfix">';for(var m=0,k=u.length;m<k;m++){f+='<div mxv class="_zs_gallerybA ',(E=u[m]).id==v&&(f+=" _zs_gallerybD "),f+=' clearfix"><div mxv mxa="_zs_galleryU:a" class="_zs_gallerybB"><input type="checkbox" mx-change="'+a+"__e({typeIndex:"+l(m)+'})" ',E.checked&&(f+=' checked="true" '),f+='/></div><div class="_zs_gallerybC" mx-click="'+a+"__d({curTab:'"+l(c(E.id))+"'})\">"+l(E.name)+"</div></div>"}f+="</div>"}f+=" ";m=0;for(var w=u.length;m<w;m++){var E=u[m];f+='<div mxv class="',y?(f+=" pl20 ",E.id!=v&&(f+=" hide "),f+=" "):f+=" mb15 ",f+='">',y||(f+='<div mxv mxa="_zs_galleryU:b" class="_zs_gallerybv"><label mxv for="'+l(z)+"_"+l(E.id)+'_all"><input mx-change="'+a+"__e({typeIndex:"+l(m)+'})" id="'+l(z)+"_"+l(E.id)+'_all" type="checkbox" ',E.checked&&(f+=' checked="true" '),f+='/><span mxa="_zs_galleryU:c" class="ml5">全选 - '+l(E.name)+"</span></label></div>"),f+='<div mxv mxa="_zs_galleryU:d" class="clearfix">';for(var I=0,T=E.groups,A=T.length;I<A;I++){var U=T[I];f+="<div mxv ",E.half&&(f+=' class="_zs_galleryby" '),f+=">";for(var C=0,$=U.length;C<$;C++){var P=U[C];f+=" ",P.name&&(f+='<div mxv mxa="_zs_galleryU:e" class="_zs_gallerybw"><div mxa="_zs_galleryU:f" class="_zs_gallerybx">'+l(P.name)+"</div>"),f+='<div mxv mxa="_zs_galleryU:g" class="_zs_gallerybl clearfix">';for(var V=0,D=P.provinces,j=D.length;V<j;V++){var q=D[V];f+='<div mxv class="_zs_gallerybm clearfix" id="'+l(z)+"_province_wrapper_"+l(q.id)+'"><label mxv class="_zs_gallerybp" for="'+l(z)+"_province_"+l(q.id)+'"><input mx-change="'+a+"__f({typeIndex:"+l(m)+",province:"+l(q.id)+'})" type="checkbox" id="'+l(z)+"_province_"+l(q.id)+'" ',q.checked&&(f+=' checked="true" '),f+='/><span class="_zs_gallerybn ',q.highlight&&(f+=" _zs_gallerybo "),f+='">'+l(q.name)+"</span></label>",q.hasCity&&q.count>0&&(f+='<span mxa="_zs_galleryU:h" class="_zs_gallerybq">('+l(q.count)+")</span>"),f+=" ",q.hasCity&&(f+='<i class="mc-iconfont _zs_gallerybr ',q.hasCity&&q.id==x&&(f+=" _zs_gallerybs "),f+='" mx-click="'+a+"__c({province:"+l(q.id)+'})">&#xe692;</i>'),f+='<div mxv style="display: '+l(q.hasCity&&q.id==x?"block":"none")+';" class="_zs_gallerybt mx-shadow clearfix">';for(var B=0,S=q.cities,R=S.length;B<R;B++){var F=S[B];f+='<label mxv for="'+l(z)+"_city_"+l(F.id)+'" class="_zs_gallerybu"><input mx-change="'+a+"__f({typeIndex:"+l(m)+",province:"+l(q.id)+",city:"+l(F.id)+'})" id="'+l(z)+"_city_"+l(F.id)+'" type="checkbox" ',F.checked&&(f+=' checked="true" '),f+='/><span class="_zs_gallerybn ',F.highlight&&(f+=" _zs_gallerybo "),f+='">'+l(F.name)+"</span></label>"}f+="</div></div>"}f+="</div>",P.name&&(f+="</div>"),f+=" "}f+="</div>"}f+="</div></div>"}return f},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var a=this,r=a.updater.altered(),l=(e.selected||[]).map(function(e){return+e}),t=/^true$/i.test(e.city),s="tab"==e.type,c=$.extend(!0,[],e.data||[]),n=[];if(0==c.length){var o=$.extend(!0,[],i.commonAreas),_=!0,d=$.extend(!0,[],i.lastProvinces),g=!0;o.forEach(function(e){e.provinces.forEach(function(e){a.__b(e,l,t),_=_&&e.checked})}),d.forEach(function(e){a.__b(e,l,t),g=g&&e.checked}),n=[{name:"常用地域",id:"more",half:!0,checked:_,groups:[o.splice(0,7),o]},{name:"非常用地域",id:"less",checked:g,groups:[[{provinces:d}]]}]}else n=c.map(function(e,r){var i=!0;return e.provinces.forEach(function(e){a.__b(e,l,t),i=i&&e.checked}),{name:e.name,id:r,checked:i,groups:[[{provinces:e.provinces}]]}});return a.updater.set({viewId:a.id,showProvinceId:-1,cityVisible:t,placeholder:"省份"+(t?"/城市":""),types:n,selected:l,isTab:s,curTab:n[0].id}),r||(r=a.updater.altered()),!!r&&(a.updater.snapshot(),!0)},render:function(){this.updater.digest({})},"__c<click>":function(e){e.preventDefault();var a=e.params.province;a==this.updater.get("showProvinceId")?this.updater.digest({showProvinceId:-1}):this.updater.digest({showProvinceId:a})},"__d<click>":function(e){this.updater.digest({curTab:e.params.curTab})},"__e<change>":function(e){var a=e.target.checked,r=this.updater.get("types"),l=r[e.params.typeIndex];l.checked=a,l.groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){var r=e.cities;e.checked=a,r.forEach(function(e){e.checked=a}),e.count=a?r.length:0})})});var i={types:r};this.updater.get("isTab")&&(i.curTab=l.id),this.updater.digest(i)},"__f<change>":function(e){var a=e.target.checked,r=e.params,l=r.typeIndex,i=r.province,t=r.city,s=this.updater.get("types"),c=!0;s[l].groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){if(e.id==i){var r=e.cities;if(t){var l=0;r.forEach(function(e){e.id==t&&(e.checked=a),e.checked&&l++}),e.checked=l>0&&l==r.length,e.count=l}else e.checked=a,e.count=a?r.length:0,r.forEach(function(e){e.checked=a})}c=c&&e.checked})})}),s[l].checked=c,this.updater.digest({types:s})},__b:function(e,a,r){e.checked=$.inArray(+e.id,a)>-1;var l=0;e.cities=e.cities||[],e.cities.forEach(function(r){e.checked?r.checked=!0:r.checked=$.inArray(+r.id,a)>-1,r.checked&&l++}),e.count=l,e.hasCity=e.cities.length>0&&r},"__g<keyup>":function(e){if(13===e.keyCode){var a,r=e.target.value,l=this.updater,i=l.get("types"),t=l.get("cityVisible"),s=!1,c=l.get("curTab");i.forEach(function(e){e.groups.forEach(function(l){l.forEach(function(l){l.provinces.forEach(function(l){(l.highlight=!1,l.name==r&&(a=l.id,l.highlight=!0,c=e.id),t)&&l.cities.forEach(function(i){i.highlight=!1,i.name==r&&(a=l.id,s=!0,i.highlight=!0,c=e.id)})})})})}),l.digest({curTab:c,types:i,showProvinceId:s?a:-1})}},"$doc<click>":function(e){var a=this.updater.get("showProvinceId");if(a>0){var r=$("#"+this.id+"_province_wrapper_"+a),i=r.find("._zs_gallerybp"),t=r.find("._zs_gallerybr"),s=r.find("._zs_gallerybt"),c=e.target;l.inside(c,i[0])||l.inside(c,t[0])||l.inside(c,s[0])||this.updater.digest({showProvinceId:-1})}},val:function(e){var a=this.updater.get(),r=a.types,l=a.cityVisible,i=[],t=[];return r.forEach(function(e){e.groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){e.checked?(i.push(e.id),t.push(e)):l&&e.cities.forEach(function(e){e.checked&&(i.push(e.id),t.push(e))})})})})}),e?$.extend(!0,[],t):i},getSelected:function(){return this.val(!0)}})});