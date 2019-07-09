define("mx-area/index",["magix","mx-area/data"],(e,a,i)=>{var r=e("magix"),n=e("mx-area/data");r.applyStyle("_zs_gallery_mx-area_index_",'._zs_gallery_mx-area_index_-area-search-box,\n._zs_gallery_mx-area_index_-tab-search-box {\n  display: block;\n  width: 300px;\n  margin-bottom: 12px;\n}\n._zs_gallery_mx-area_index_-tab-search-box {\n  margin-left: 20px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province {\n  position: relative;\n  float: left;\n  width: 16%;\n  height: 46px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-name {\n  padding: 5px 0;\n  border-radius: var(--border-radius);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-name._zs_gallery_mx-area_index_-highlight {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-label {\n  float: left;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-count {\n  float: left;\n  font-size: 12px;\n  font-weight: bold;\n  font-family: "Tahoma";\n  line-height: 44px;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-arrow {\n  position: absolute;\n  top: 0;\n  left: calc(var(--font-size) * 4 + 28px);\n  width: 20px;\n  height: 46px;\n  line-height: 46px;\n  text-align: center;\n  font-size: 22px;\n  color: #ccc;\n  cursor: pointer;\n  transition: all var(--duration);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-province-arrow._zs_gallery_mx-area_index_-province-expand {\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-cities {\n  position: absolute;\n  top: 46px;\n  left: -72px;\n  z-index: 99;\n  width: 240px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n}\n._zs_gallery_mx-area_index_-provinces ._zs_gallery_mx-area_index_-province ._zs_gallery_mx-area_index_-cities ._zs_gallery_mx-area_index_-city {\n  float: left;\n  width: 48%;\n  height: 32px;\n  margin-right: 2%;\n  line-height: 32px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n._zs_gallery_mx-area_index_-all {\n  height: 46px;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-area {\n  position: relative;\n  padding-left: 25px;\n}\n._zs_gallery_mx-area_index_-area ._zs_gallery_mx-area_index_-area-name {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 100%;\n  line-height: 46px;\n  font-size: 14px;\n  color: #999;\n  font-weight: bold;\n  font-family: "Tahoma";\n}\n._zs_gallery_mx-area_index_-area-half {\n  float: left;\n  width: 50%;\n}\n._zs_gallery_mx-area_index_-area-half ._zs_gallery_mx-area_index_-province {\n  width: 33%;\n  min-width: calc(var(--font-size) * 6 + 28px);\n}\n._zs_gallery_mx-area_index_-tabs {\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab {\n  float: left;\n  margin-bottom: -1px;\n  padding-left: 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-check,\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-text {\n  float: left;\n  height: 46px;\n  line-height: 46px;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab ._zs_gallery_mx-area_index_-tab-text {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab:hover {\n  color: var(--color-brand);\n  transition: color var(--duration);\n}\n._zs_gallery_mx-area_index_-tabs ._zs_gallery_mx-area_index_-tab._zs_gallery_mx-area_index_-cur {\n  color: var(--color-brand);\n  border-bottom: 1px solid var(--color-brand);\n}\n'),i.exports=r.View.extend({tmpl:function(e,a,i,r,n,t,_,c){if(i||(i=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(o,d)}}if(!t){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return s[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(x,p)}}if(!c){var h=/[\\'"]/g;c=function(e){return n(e).replace(h,"\\$&")}}var v,g,y,f="",m=e.isTab,u=e.placeholder,b=e.types,z=e.curTab,k=e.viewId,$=e.showProvinceId;try{if(f+='<div mxv class="search-box _zs_gallery_mx-area_index_-area-search-box ',y=1,g="if isTab",v="<%if (isTab) {%>",m&&(f+=" _zs_gallery_mx-area_index_-tab-search-box ",y=1,g="/if",v="<%}%>"),f+='"><i mxs="_zs_galleryW:_" class="mc-iconfont search-icon">&#xe651;</i><input mx-keyup="'+a+'@{search}()" class="input search-input" placeholder="',y=3,g="=placeholder",f+=(v="<%=placeholder%>",r(u)+'"/></div>'),y=5,g="if isTab",v="<%if (isTab) {%>",m){f+='<div mxv mxa="_zs_galleryW:_" class="_zs_gallery_mx-area_index_-tabs clearfix">',y=7,g="each types as type typeIndex",v="<%for (var typeIndex = 0, $art_cddawxjjr$art_c = types.length; typeIndex < $art_cddawxjjr$art_c; typeIndex++) {        var type = types[typeIndex]%>";for(var w=0,I=b.length;w<I;w++){var j=b[w];f+='<div mxv class="_zs_gallery_mx-area_index_-tab ',y=8,g="if (type.id == curTab)",v="<%if (type.id == curTab) {%>",j.id==z&&(f+=" _zs_gallery_mx-area_index_-cur ",y=8,g="/if",v="<%}%>"),f+=' clearfix"><div mxv mxa="_zs_galleryW:a" class="_zs_gallery_mx-area_index_-tab-check"><input type="checkbox" mx-change="'+a+"@{changeAll}({typeIndex:",y=11,g="=typeIndex",f+=(v="<%=typeIndex%>",r(w)+'})" '),y=12,g="if type.checked",v="<%if (type.checked) {%>",j.checked&&(f+=' checked="true" ',y=12,g="/if",v="<%}%>"),f+='/></div><div class="_zs_gallery_mx-area_index_-tab-text" mx-click="'+a+"@{changeTab}({curTab:'",y=14,g="=type.id",f+=(v="<%=$eq(type.id)%>",r(c(j.id))+"'})\">"),y=15,g="=type.name",f+=(v="<%=type.name%>",r(j.name)+"</div></div>"),y=18,g="/each",v="<%}%>"}f+="</div>",y=20,g="/if",v="<%}%>"}f+=" ",y=21,g="each types as type typeIndex",v="<%for (var typeIndex = 0, $art_cejrgstove$art_c = types.length; typeIndex < $art_cejrgstove$art_c; typeIndex++) {    var type = types[typeIndex]%>";w=0;for(var T=b.length;w<T;w++){j=b[w];f+='<div mxv class="',y=22,g="if isTab",v="<%if (isTab) {%>",m?(f+=" pl20 ",y=22,g="if (type.id != curTab)",v="<%if (type.id != curTab) {%>",j.id!=z&&(f+=" hide ",y=22,g="/if",v="<%}%>"),f+=" ",y=22,g="else",v="<%}    else {%>"):(f+=" mb15 ",y=22,g="/if",v="<%}%>"),f+='">',y=23,g="if !isTab",v="<%if (!isTab) {%>",m||(f+='<div mxv mxa="_zs_galleryW:b" class="_zs_gallery_mx-area_index_-all"><label mxv for="',y=25,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_"),y=25,g="=type.id",f+=(v="<%=type.id%>",r(j.id)+'_all"><input mx-change="'+a+"@{changeAll}({typeIndex:"),y=26,g="=typeIndex",f+=(v="<%=typeIndex%>",r(w)+'})" id="'),y=26,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_"),y=26,g="=type.id",f+=(v="<%=type.id%>",r(j.id)+'_all" type="checkbox" '),y=26,g="if type.checked",v="<%if (type.checked) {%>",j.checked&&(f+=' checked="true" ',y=26,g="/if",v="<%}%>"),f+='/><span mxa="_zs_galleryW:c" class="ml5">全选 - ',y=27,g="=type.name",f+=(v="<%=type.name%>",r(j.name)+"</span></label></div>"),y=30,g="/if",v="<%}%>"),f+='<div mxv mxa="_zs_galleryW:d" class="clearfix">',y=32,g="each type.groups as group groupIndex",v="<%for (var groupIndex = 0, $art_objlvapbgboat$art_obj = type.groups, $art_cyjdsqqdc$art_c = $art_objlvapbgboat$art_obj.length; groupIndex < $art_cyjdsqqdc$art_c; groupIndex++) {        var group = $art_objlvapbgboat$art_obj[groupIndex]%>";for(var E=0,C=j.groups,P=C.length;E<P;E++){var W=C[E];f+="<div mxv ",y=33,g="if type.half",v="<%if (type.half) {%>",j.half&&(f+=' class="_zs_gallery_mx-area_index_-area-half" ',y=33,g="/if",v="<%}%>"),f+=">",y=34,g="each group as area areaIndex",v="<%for (var areaIndex = 0, $art_cyrlxwors$art_c = group.length; areaIndex < $art_cyrlxwors$art_c; areaIndex++) {            var area = group[areaIndex]%>";for(var q=0,A=W.length;q<A;q++){var V=W[q];f+=" ",y=35,g="if area.name",v="<%if (area.name) {%>",V.name&&(f+='<div mxv mxa="_zs_galleryW:e" class="_zs_gallery_mx-area_index_-area"><div mxa="_zs_galleryW:f" class="_zs_gallery_mx-area_index_-area-name">',y=37,g="=area.name",f+=(v="<%=area.name%>",r(V.name)+"</div>"),y=38,g="/if",v="<%}%>"),f+='<div mxv mxa="_zs_galleryW:g" class="_zs_gallery_mx-area_index_-provinces clearfix">',y=40,g="each area.provinces as province",v="<%for (var $art_iimkqvyxe$art_i = 0, $art_objrlzysanwi$art_obj = area.provinces, $art_cwxtticfk$art_c = $art_objrlzysanwi$art_obj.length; $art_iimkqvyxe$art_i < $art_cwxtticfk$art_c; $art_iimkqvyxe$art_i++) {                var province = $art_objrlzysanwi$art_obj[$art_iimkqvyxe$art_i]%>";for(var O=0,S=V.provinces,D=S.length;O<D;O++){var R=S[O];f+='<div mxv class="_zs_gallery_mx-area_index_-province clearfix" id="',y=41,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_province_wrapper_"),y=41,g="=province.id",f+=(v="<%=province.id%>",r(R.id)+'"><label mxv class="_zs_gallery_mx-area_index_-province-label" for="'),y=42,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_province_"),y=42,g="=province.id",f+=(v="<%=province.id%>",r(R.id)+'"><input mx-change="'+a+"@{changeOne}({typeIndex:"),y=43,g="=typeIndex",f+=(v="<%=typeIndex%>",r(w)+",province:"),y=43,g="=province.id",f+=(v="<%=province.id%>",r(R.id)+'})" type="checkbox" id="'),y=43,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_province_"),y=43,g="=province.id",f+=(v="<%=province.id%>",r(R.id)+'" '),y=43,g="if province.checked",v="<%if (province.checked) {%>",R.checked&&(f+=' checked="true" ',y=43,g="/if",v="<%}%>"),f+='/><span class="_zs_gallery_mx-area_index_-name ',y=44,g="if province.highlight",v="<%if (province.highlight) {%>",R.highlight&&(f+=" _zs_gallery_mx-area_index_-highlight ",y=44,g="/if",v="<%}%>"),f+='">',y=44,g="=province.name",f+=(v="<%=province.name%>",r(R.name)+"</span></label>"),y=46,g="if province.hasCity && (province.count > 0)",v="<%if (province.hasCity && (province.count > 0)) {%>",R.hasCity&&R.count>0&&(f+='<span mxa="_zs_galleryW:h" class="_zs_gallery_mx-area_index_-province-count">(',y=47,g="=province.count",f+=(v="<%=province.count%>",r(R.count)+")</span>"),y=48,g="/if",v="<%}%>"),f+=" ",y=49,g="if province.hasCity",v="<%if (province.hasCity) {%>",R.hasCity&&(f+='<i class="mc-iconfont _zs_gallery_mx-area_index_-province-arrow ',y=50,g="if (province.hasCity && (province.id == showProvinceId))",v="<%if (province.hasCity && (province.id == showProvinceId)) {%>",R.hasCity&&R.id==$&&(f+=" _zs_gallery_mx-area_index_-province-expand ",y=50,g="/if",v="<%}%>"),f+='" mx-click="'+a+"@{toggleCity}({province:",y=50,g="=province.id",f+=(v="<%=province.id%>",r(R.id)+'})">&#xe692;</i>'),y=51,g="/if",v="<%}%>"),f+='<div mxv style="display: ',y=52,g="=(province.hasCity && (province.id == showProvinceId)) ? 'block' : 'none'",f+=(v="<%=(province.hasCity && (province.id == showProvinceId)) ? 'block' : 'none'%>",r(R.hasCity&&R.id==$?"block":"none")+';" class="_zs_gallery_mx-area_index_-cities mx-shadow clearfix">'),y=53,g="each province.cities as city",v="<%for (var $art_iipguajl$art_i = 0, $art_objvwpzmhvbpp$art_obj = province.cities, $art_cbfkrwb$art_c = $art_objvwpzmhvbpp$art_obj.length; $art_iipguajl$art_i < $art_cbfkrwb$art_c; $art_iipguajl$art_i++) {                    var city = $art_objvwpzmhvbpp$art_obj[$art_iipguajl$art_i]%>";for(var U=0,B=R.cities,F=B.length;U<F;U++){var G=B[U];f+='<label mxv for="',y=54,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_city_"),y=54,g="=city.id",f+=(v="<%=city.id%>",r(G.id)+'" class="_zs_gallery_mx-area_index_-city"><input mx-change="'+a+"@{changeOne}({typeIndex:"),y=55,g="=typeIndex",f+=(v="<%=typeIndex%>",r(w)+",province:"),y=55,g="=province.id",f+=(v="<%=province.id%>",r(R.id)+",city:"),y=55,g="=city.id",f+=(v="<%=city.id%>",r(G.id)+'})" id="'),y=55,g="=viewId",f+=(v="<%=viewId%>",r(k)+"_city_"),y=55,g="=city.id",f+=(v="<%=city.id%>",r(G.id)+'" type="checkbox" '),y=55,g="if city.checked",v="<%if (city.checked) {%>",G.checked&&(f+=' checked="true" ',y=55,g="/if",v="<%}%>"),f+='/><span class="_zs_gallery_mx-area_index_-name ',y=56,g="if city.highlight",v="<%if (city.highlight) {%>",G.highlight&&(f+=" _zs_gallery_mx-area_index_-highlight ",y=56,g="/if",v="<%}%>"),f+='">',y=56,g="=city.name",f+=(v="<%=city.name%>",r(G.name)+"</span></label>"),y=58,g="/each",v="<%}%>"}f+="</div></div>",y=61,g="/each",v="<%}%>"}f+="</div>",y=63,g="if area.name",v="<%if (area.name) {%>",V.name&&(f+="</div>",y=65,g="/if",v="<%}%>"),f+=" ",y=66,g="/each",v="<%}%>"}f+="</div>",y=68,g="/each",v="<%}%>"}f+="</div></div>",y=71,g="/each",v="<%}%>"}}catch(e){var H="render view error:"+(e.message||e);throw g&&(H+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),H+="\r\n\t"+(g?"translate to:":"expr:"),H+=v+"\r\n\tat file:mx-area/index.html"}return f},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var a=this,i=a.updater.altered(),r=(e.selected||[]).map(function(e){return+e}),t=/^true$/i.test(e.city),_="tab"==e.type,c=$.extend(!0,[],e.data||[]),l=[];if(0==c.length){var o=$.extend(!0,[],n.commonAreas),d=!0,s=$.extend(!0,[],n.lastProvinces),p=!0;o.forEach(function(e){e.provinces.forEach(function(e){a["@{init.province}"](e,r,t),d=d&&e.checked})}),s.forEach(function(e){a["@{init.province}"](e,r,t),p=p&&e.checked}),l=[{name:"常用地域",id:"more",half:!0,checked:d,groups:[o.splice(0,7),o]},{name:"非常用地域",id:"less",checked:p,groups:[[{provinces:s}]]}]}else l=c.map(function(e,i){var n=!0;return e.provinces.forEach(function(e){a["@{init.province}"](e,r,t),n=n&&e.checked}),{name:e.name,id:i,checked:n,groups:[[{provinces:e.provinces}]]}});return a.updater.set({viewId:a.id,showProvinceId:-1,cityVisible:t,placeholder:"省份"+(t?"/城市":""),types:l,selected:r,isTab:_,curTab:l[0].id}),i||(i=a.updater.altered()),!!i&&(a.updater.snapshot(),!0)},render:function(){this.updater.digest({})},"@{toggleCity}<click>":function(e){e.preventDefault();var a=e.params.province;a==this.updater.get("showProvinceId")?this.updater.digest({showProvinceId:-1}):this.updater.digest({showProvinceId:a})},"@{changeTab}<click>":function(e){this.updater.digest({curTab:e.params.curTab})},"@{changeAll}<change>":function(e){var a=e.target.checked,i=this.updater.get("types"),r=i[e.params.typeIndex];r.checked=a,r.groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){var i=e.cities;e.checked=a,i.forEach(function(e){e.checked=a}),e.count=a?i.length:0})})});var n={types:i};this.updater.get("isTab")&&(n.curTab=r.id),this.updater.digest(n)},"@{changeOne}<change>":function(e){var a=e.target.checked,i=e.params,r=i.typeIndex,n=i.province,t=i.city,_=this.updater.get("types"),c=!0;_[r].groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){if(e.id==n){var i=e.cities;if(t){var r=0;i.forEach(function(e){e.id==t&&(e.checked=a),e.checked&&r++}),e.checked=r>0&&r==i.length,e.count=r}else e.checked=a,e.count=a?i.length:0,i.forEach(function(e){e.checked=a})}c=c&&e.checked})})}),_[r].checked=c,this.updater.digest({types:_})},"@{init.province}":function(e,a,i){e.checked=$.inArray(+e.id,a)>-1;var r=0;e.cities=e.cities||[],e.cities.forEach(function(i){e.checked?i.checked=!0:i.checked=$.inArray(+i.id,a)>-1,i.checked&&r++}),e.count=r,e.hasCity=e.cities.length>0&&i},"@{search}<keyup>":function(e){if(13===e.keyCode){var a,i=e.target.value,r=this.updater,n=r.get("types"),t=r.get("cityVisible"),_=!1,c=r.get("curTab");n.forEach(function(e){e.groups.forEach(function(r){r.forEach(function(r){r.provinces.forEach(function(r){(r.highlight=!1,r.name==i&&(a=r.id,r.highlight=!0,c=e.id),t)&&r.cities.forEach(function(n){n.highlight=!1,n.name==i&&(a=r.id,_=!0,n.highlight=!0,c=e.id)})})})})}),r.digest({curTab:c,types:n,showProvinceId:_?a:-1})}},"$doc<click>":function(e){var a=this.updater.get("showProvinceId");if(a>0){var i=$("#"+this.id+"_province_wrapper_"+a),n=i.find("._zs_gallery_mx-area_index_-province-label"),t=i.find("._zs_gallery_mx-area_index_-province-arrow"),_=i.find("._zs_gallery_mx-area_index_-cities"),c=e.target;r.inside(c,n[0])||r.inside(c,t[0])||r.inside(c,_[0])||this.updater.digest({showProvinceId:-1})}},val:function(e){var a=this.updater.get(),i=a.types,r=a.cityVisible,n=[],t=[];return i.forEach(function(e){e.groups.forEach(function(e){e.forEach(function(e){e.provinces.forEach(function(e){e.checked?(n.push(e.id),t.push(e)):r&&e.cities.forEach(function(e){e.checked&&(n.push(e.id),t.push(e))})})})})}),e?$.extend(!0,[],t):n},getSelected:function(){return this.val(!0)}})});