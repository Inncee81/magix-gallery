define("mx-area/index",["magix","mx-area/data"],(e,a,i)=>{var r=e("magix"),n=e("mx-area/data");r.applyStyle("_zs_gallery_mx-area_index_",'._zs_gallery_mx-area_index_-area-search-box,\n._zs_gallery_mx-area_index_-tab-search-box {\n  display: block;\n  width: 300px;\n  margin-bottom: 12px;\n}\n._zs_gallery_mx-area_index_-tab-search-box {\n  margin-left: 20px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province {\n  position: relative;\n  float: left;\n  width: 16%;\n  height: 46px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-name {\n  padding: 5px 0;\n  border-radius: var(--border-radius);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-name._zs_gallery_mx-area_index_-highlight {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-label {\n  float: left;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-count {\n  float: left;\n  font-size: 12px;\n  font-weight: bold;\n  font-family: "Tahoma";\n  line-height: 44px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-arrow {\n  position: absolute;\n  top: 0;\n  left: calc(var(--font-size) * 4 + 28px);\n  width: 20px;\n  height: 46px;\n  line-height: 46px;\n  text-align: center;\n  font-size: 22px;\n  color: #ccc;\n  cursor: pointer;\n  transition: all var(--duration);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-arrow._zs_gallery_mx-area_index_-province-expand {\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-cities {\n  position: absolute;\n  top: 46px;\n  left: -72px;\n  z-index: 99;\n  width: 240px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-cities ._zs_gallery_mx-area_index_-city {\n  float: left;\n  width: 48%;\n  height: 32px;\n  margin-right: 2%;\n  line-height: 32px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n._zs_gallery_mx-area_index_-all {\n  height: 46px;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-area {\n  position: relative;\n  padding-left: 25px;\n}\n._zs_gallery_mx-area_index_-area ._zs_gallery_mx-area_index_-area-name {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 100%;\n  line-height: 46px;\n  font-size: 14px;\n  color: #999;\n  font-weight: bold;\n  font-family: "Tahoma";\n}\n._zs_gallery_mx-area_index_-area-half {\n  float: left;\n  width: 50%;\n}\n._zs_gallery_mx-area_index_-area-half ._zs_gallery_mx-area_index_-province {\n  width: 33%;\n  min-width: calc(var(--font-size) * 6 + 28px);\n}\n._zs_gallery_mx-area_index_-tabs {\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab {\n  float: left;\n  margin-bottom: -1px;\n  padding-left: 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-check,\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-text {\n  float: left;\n  height: 46px;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-text {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab:hover {\n  color: var(--color-brand);\n  transition: color var(--duration);\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab._zs_gallery_mx-area_index_-cur {\n  color: var(--color-brand);\n  border-bottom: 1px solid var(--color-brand);\n}\n'),i.exports=r.View.extend({tmpl:function(e,a,i,r,n,t,_,c){if(i||(i=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,l=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(d,l)}}if(!t){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return s[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(x,p)}}if(!c){var h=/[\\'"]/g;c=function(e){return n(e).replace(h,"\\$&")}}var g,v,y,f="",m=e.isTab,u=e.placeholder,b=e.types,z=e.curTab,k=e.viewId,$=e.showProvinceId;try{if(f+='<div mxv class="search-box _zs_gallery_mx-area_index_-area-search-box ',y=1,v="if isTab",g="<%if (isTab) {%>",m&&(f+=" _zs_gallery_mx-area_index_-tab-search-box ",y=1,v="/if",g="<%}%>"),f+='"><i mxs="_zs_galleryW:_" class="mc-iconfont search-icon">&#xe651;</i><input mx-keyup="'+a+'@{search}()" class="input search-input" placeholder="',y=3,v="=placeholder",f+=(g="<%=placeholder%>",r(u)+'"/></div>'),y=5,v="if isTab",g="<%if (isTab) {%>",m){f+='<div mxv mxa="_zs_galleryW:_" class="_zs_gallery_mx-area_index_-tabs clearfix">',y=7,v="each types as type typeIndex",g="<%for (var typeIndex = 0, $art_cdyusuxnq$art_c = types.length; typeIndex < $art_cdyusuxnq$art_c; typeIndex++) {        var type = types[typeIndex]%>";for(var I=0,w=b.length;I<w;I++){var T=b[I];f+='<div mxv class="_zs_gallery_mx-area_index_-tab ',y=8,v="if (type.id == curTab)",g="<%if (type.id == curTab) {%>",T.id==z&&(f+=" _zs_gallery_mx-area_index_-cur ",y=8,v="/if",g="<%}%>"),f+=' clearfix"><div mxv mxa="_zs_galleryW:a" class="_zs_gallery_mx-area_index_-tab-check"><input type="checkbox" mx-change="'+a+"@{changeAll}({typeIndex:",y=11,v="=typeIndex",f+=(g="<%=typeIndex%>",r(I)+'})" '),y=12,v="if type.checked",g="<%if (type.checked) {%>",T.checked&&(f+=' checked="true" ',y=12,v="/if",g="<%}%>"),f+='/></div><div class="_zs_gallery_mx-area_index_-tab-text" mx-click="'+a+"@{changeTab}({curTab:'",y=14,v="=type.id",f+=(g="<%=$eq(type.id)%>",r(c(T.id))+"'})\">"),y=15,v="=type.name",f+=(g="<%=type.name%>",r(T.name)+"</div></div>"),y=18,v="/each",g="<%}%>"}f+="</div>",y=20,v="/if",g="<%}%>"}f+=" ",y=21,v="each types as type typeIndex",g="<%for (var typeIndex = 0, $art_crpuooptdbq$art_c = types.length; typeIndex < $art_crpuooptdbq$art_c; typeIndex++) {    var type = types[typeIndex]%>";I=0;for(var E=b.length;I<E;I++){T=b[I];f+='<div mxv class="',y=22,v="if isTab",g="<%if (isTab) {%>",m?(f+=" pl20 ",y=22,v="if (type.id != curTab)",g="<%if (type.id != curTab) {%>",T.id!=z&&(f+=" hide ",y=22,v="/if",g="<%}%>"),f+=" ",y=22,v="else",g="<%}    else {%>"):(f+=" mb15 ",y=22,v="/if",g="<%}%>"),f+='">',y=23,v="if !isTab",g="<%if (!isTab) {%>",m||(f+='<div mxv mxa="_zs_galleryW:b" class="_zs_gallery_mx-area_index_-all"><label mxv for="',y=25,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_"),y=25,v="=type.id",f+=(g="<%=type.id%>",r(T.id)+'_all"><input mx-change="'+a+"@{changeAll}({typeIndex:"),y=26,v="=typeIndex",f+=(g="<%=typeIndex%>",r(I)+'})" id="'),y=26,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_"),y=26,v="=type.id",f+=(g="<%=type.id%>",r(T.id)+'_all" type="checkbox" '),y=26,v="if type.checked",g="<%if (type.checked) {%>",T.checked&&(f+=' checked="true" ',y=26,v="/if",g="<%}%>"),f+='/><span mxa="_zs_galleryW:c" class="ml5">全选 - ',y=27,v="=type.name",f+=(g="<%=type.name%>",r(T.name)+"</span></label></div>"),y=30,v="/if",g="<%}%>"),f+='<div mxv mxa="_zs_galleryW:d" class="clearfix">',y=32,v="each type.groups as group groupIndex",g="<%for (var groupIndex = 0, $art_objaljtzdnfqsg$art_obj = type.groups, $art_csksgrgds$art_c = $art_objaljtzdnfqsg$art_obj.length; groupIndex < $art_csksgrgds$art_c; groupIndex++) {        var group = $art_objaljtzdnfqsg$art_obj[groupIndex]%>";for(var j=0,q=T.groups,C=q.length;j<C;j++){var P=q[j];f+="<div mxv ",y=33,v="if type.half",g="<%if (type.half) {%>",T.half&&(f+=' class="_zs_gallery_mx-area_index_-area-half" ',y=33,v="/if",g="<%}%>"),f+=">",y=34,v="each group as area areaIndex",g="<%for (var areaIndex = 0, $art_ciyhernrc$art_c = group.length; areaIndex < $art_ciyhernrc$art_c; areaIndex++) {            var area = group[areaIndex]%>";for(var W=0,A=P.length;W<A;W++){var V=P[W];f+=" ",y=35,v="if area.name",g="<%if (area.name) {%>",V.name&&(f+='<div mxv mxa="_zs_galleryW:e" class="_zs_gallery_mx-area_index_-area"><div mxa="_zs_galleryW:f" class="_zs_gallery_mx-area_index_-area-name">',y=37,v="=area.name",f+=(g="<%=area.name%>",r(V.name)+"</div>"),y=38,v="/if",g="<%}%>"),f+='<div mxv mxa="_zs_galleryW:g" class="_zs_gallery_mx-area_index_-provinces clearfix">',y=40,v="each area.provinces as province",g="<%for (var $art_ikcrsyuqrya$art_i = 0, $art_objtayofbye$art_obj = area.provinces, $art_crvqjgdxm$art_c = $art_objtayofbye$art_obj.length; $art_ikcrsyuqrya$art_i < $art_crvqjgdxm$art_c; $art_ikcrsyuqrya$art_i++) {                var province = $art_objtayofbye$art_obj[$art_ikcrsyuqrya$art_i]%>";for(var O=0,S=V.provinces,D=S.length;O<D;O++){var R=S[O];f+='<div mxv class="_zs_gallery_mx-area_index_-province clearfix" id="',y=41,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_province_wrapper_"),y=41,v="=province.id",f+=(g="<%=province.id%>",r(R.id)+'"><label mxv class="_zs_gallery_mx-area_index_-province-label" for="'),y=42,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_province_"),y=42,v="=province.id",f+=(g="<%=province.id%>",r(R.id)+'"><input mx-change="'+a+"@{changeOne}({typeIndex:"),y=43,v="=typeIndex",f+=(g="<%=typeIndex%>",r(I)+",province:"),y=43,v="=province.id",f+=(g="<%=province.id%>",r(R.id)+'})" type="checkbox" id="'),y=43,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_province_"),y=43,v="=province.id",f+=(g="<%=province.id%>",r(R.id)+'" '),y=43,v="if province.checked",g="<%if (province.checked) {%>",R.checked&&(f+=' checked="true" ',y=43,v="/if",g="<%}%>"),f+='/><span class="_zs_gallery_mx-area_index_-name ',y=44,v="if province.highlight",g="<%if (province.highlight) {%>",R.highlight&&(f+=" _zs_gallery_mx-area_index_-highlight ",y=44,v="/if",g="<%}%>"),f+='">',y=44,v="=province.name",f+=(g="<%=province.name%>",r(R.name)+"</span></label>"),y=46,v="if province.hasCity && (province.count > 0)",g="<%if (province.hasCity && (province.count > 0)) {%>",R.hasCity&&R.count>0&&(f+='<span mxa="_zs_galleryW:h" class="_zs_gallery_mx-area_index_-province-count">(',y=47,v="=province.count",f+=(g="<%=province.count%>",r(R.count)+")</span>"),y=48,v="/if",g="<%}%>"),f+=" ",y=49,v="if province.hasCity",g="<%if (province.hasCity) {%>",R.hasCity&&(f+='<i class="mc-iconfont _zs_gallery_mx-area_index_-province-arrow ',y=50,v="if (province.hasCity && (province.id == showProvinceId))",g="<%if (province.hasCity && (province.id == showProvinceId)) {%>",R.hasCity&&R.id==$&&(f+=" _zs_gallery_mx-area_index_-province-expand ",y=50,v="/if",g="<%}%>"),f+='" mx-click="'+a+"@{toggleCity}({province:",y=50,v="=province.id",f+=(g="<%=province.id%>",r(R.id)+'})">&#xe692;</i>'),y=51,v="/if",g="<%}%>"),f+='<div mxv style="display: ',y=52,v="=(province.hasCity && (province.id == showProvinceId)) ? 'block' : 'none'",f+=(g="<%=(province.hasCity && (province.id == showProvinceId)) ? 'block' : 'none'%>",r(R.hasCity&&R.id==$?"block":"none")+';" class="_zs_gallery_mx-area_index_-cities mx-shadow clearfix">'),y=53,v="each province.cities as city",g="<%for (var $art_ipegvkqdh$art_i = 0, $art_objxxgzca$art_obj = province.cities, $art_cqksbiuuryf$art_c = $art_objxxgzca$art_obj.length; $art_ipegvkqdh$art_i < $art_cqksbiuuryf$art_c; $art_ipegvkqdh$art_i++) {                    var city = $art_objxxgzca$art_obj[$art_ipegvkqdh$art_i]%>";for(var U=0,B=R.cities,F=B.length;U<F;U++){var G=B[U];f+='<label mxv for="',y=54,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_city_"),y=54,v="=city.id",f+=(g="<%=city.id%>",r(G.id)+'" class="_zs_gallery_mx-area_index_-city"><input mx-change="'+a+"@{changeOne}({typeIndex:"),y=55,v="=typeIndex",f+=(g="<%=typeIndex%>",r(I)+",province:"),y=55,v="=province.id",f+=(g="<%=province.id%>",r(R.id)+",city:"),y=55,v="=city.id",f+=(g="<%=city.id%>",r(G.id)+'})" id="'),y=55,v="=viewId",f+=(g="<%=viewId%>",r(k)+"_city_"),y=55,v="=city.id",f+=(g="<%=city.id%>",r(G.id)+'" type="checkbox" '),y=55,v="if city.checked",g="<%if (city.checked) {%>",G.checked&&(f+=' checked="true" ',y=55,v="/if",g="<%}%>"),f+='/><span class="_zs_gallery_mx-area_index_-name ',y=56,v="if city.highlight",g="<%if (city.highlight) {%>",G.highlight&&(f+=" _zs_gallery_mx-area_index_-highlight ",y=56,v="/if",g="<%}%>"),f+='">',y=56,v="=city.name",f+=(g="<%=city.name%>",r(G.name)+"</span></label>"),y=58,v="/each",g="<%}%>"}f+="</div></div>",y=61,v="/each",g="<%}%>"}f+="</div>",y=63,v="if area.name",g="<%if (area.name) {%>",V.name&&(f+="</div>",y=65,v="/if",g="<%}%>"),f+=" ",y=66,v="/each",g="<%}%>"}f+="</div>",y=68,v="/each",g="<%}%>"}f+="</div></div>",y=71,v="/each",g="<%}%>"}}catch(e){var H="render view error:"+(e.message||e);throw v&&(H+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+y),H+="\r\n\t"+(v?"translate to:":"expr:"),H+=g+"\r\n\tat file:mx-area/index.html"}return f},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var a=this,i=a.updater.altered(),r=(e.selected||[]).map(function(e){return+e}),t=/^true$/i.test(e.city),_="tab"==e.type,c=$.extend(!0,[],e.data||[]),o=[];if(0==c.length){var d=$.extend(!0,[],n.commonAreas),l=!0,s=$.extend(!0,[],n.lastProvinces),p=!0;d.forEach(function(e){e.provinces.forEach(function(e){a["@{init.province}"](e,r,t),l=l&&e.checked})}),s.forEach(function(e){a["@{init.province}"](e,r,t),p=p&&e.checked}),o=[{name:"常用地域",id:"more",half:!0,checked:l,groups:[d.splice(0,7),d]},{name:"非常用地域",id:"less",checked:p,groups:[[{provinces:s}]]}]}else o=c.map(function(e,i){var n=!0;return e.provinces.forEach(function(e){a["@{init.province}"](e,r,t),n=n&&e.checked}),{name:e.name,id:i,checked:n,groups:[[{provinces:e.provinces}]]}});return a.updater.set({viewId:a.id,showProvinceId:-1,cityVisible:t,placeholder:"省份"+(t?"/城市":""),types:o,selected:r,isTab:_,curTab:o[0].id}),i||(i=a.updater.altered()),!!i&&(a.updater.snapshot(),!0)},render:function(){this.updater.digest({})},"@{toggleCity}<click>":function(e){e.preventDefault();var a=e.params.province;a==this.updater.get("showProvinceId")?this.updater.digest({showProvinceId:-1}):this.updater.digest({showProvinceId:a})},"@{changeTab}<click>":function(e){this.updater.digest({curTab:e.params.curTab})},"@{changeAll}<change>":function(e){var a=e.target.checked,i=this.updater.get("types"),r=i[e.params.typeIndex];r.checked=a,r.groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){var i=e.cities;e.checked=a,i.forEach(function(e){e.checked=a}),e.count=a?i.length:0})})});var n={types:i};this.updater.get("isTab")&&(n.curTab=r.id),this.updater.digest(n)},"@{changeOne}<change>":function(e){var a=e.target.checked,i=e.params,r=i.typeIndex,n=i.province,t=i.city,_=this.updater.get("types"),c=!0;_[r].groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){if(e.id==n){var i=e.cities;if(t){var r=0;i.forEach(function(e){e.id==t&&(e.checked=a),e.checked&&r++}),e.checked=r>0&&r==i.length,e.count=r}else e.checked=a,e.count=a?i.length:0,i.forEach(function(e){e.checked=a})}c=c&&e.checked})})}),_[r].checked=c,this.updater.digest({types:_})},"@{init.province}":function(e,a,i){e.checked=$.inArray(+e.id,a)>-1;var r=0;e.cities=e.cities||[],e.cities.forEach(function(i){e.checked?i.checked=!0:i.checked=$.inArray(+i.id,a)>-1,i.checked&&r++}),e.count=r,e.hasCity=e.cities.length>0&&i},"@{search}<keyup>":function(e){if(13===e.keyCode){var a,i=e.target.value,r=this.updater,n=r.get("types"),t=r.get("cityVisible"),_=!1,c=r.get("curTab");n.forEach(function(e){e.groups.forEach(function(r){r.forEach(function(r){r.provinces.forEach(function(r){(r.highlight=!1,r.name==i&&(a=r.id,r.highlight=!0,c=e.id),t)&&r.cities.forEach(function(n){n.highlight=!1,n.name==i&&(a=r.id,_=!0,n.highlight=!0,c=e.id)})})})})}),r.digest({curTab:c,types:n,showProvinceId:_?a:-1})}},"$doc<click>":function(e){var a=this.updater.get("showProvinceId");if(a>0){var i=$("#"+this.id+"_province_wrapper_"+a),n=i.find("._zs_gallery_mx-area_index_-province-label"),t=i.find("._zs_gallery_mx-area_index_-province-arrow"),_=i.find("._zs_gallery_mx-area_index_-cities"),c=e.target;r.inside(c,n[0])||r.inside(c,t[0])||r.inside(c,_[0])||this.updater.digest({showProvinceId:-1})}},val:function(e){var a=this.updater.get(),i=a.types,r=a.cityVisible,n=[],t=[];return i.forEach(function(e){e.groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){e.checked?(n.push(e.id),t.push(e)):r&&e.cities.forEach(function(e){e.checked&&(n.push(e.id),t.push(e))})})})})}),e?$.extend(!0,[],t):n},getSelected:function(){return this.val(!0)}})});