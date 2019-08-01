define("__test__/edit/index",["magix","./theme","$","mx-form/index","mx-form/validator","mx-dialog/index","mx-color/picker","mx-popover/index"],(e,t,_)=>{e("mx-color/picker"),e("mx-popover/index");var i=e("magix"),r=e("./theme"),a=(e("$"),e("mx-form/index")),l=e("mx-form/validator"),o=e("mx-dialog/index");i.applyStyle("_zs_gallery___test___edit_theme_",'._zs_gallery___test___edit_theme_-dot {\n  display: inline-block;\n  width: var(--input-height);\n  height: var(--input-height);\n  border-radius: 50%;\n  vertical-align: middle;\n}\n:root {\n  --edit-theme-width: 126px;\n  --edit-nav-size: 20px;\n  --edit-group-height: 50px;\n  --edit-wrapper-height: calc(var(--edit-group-height) * 2 + 800px);\n}\n._zs_gallery___test___edit_theme_-theme {\n  float: left;\n  text-align: center;\n}\n._zs_gallery___test___edit_theme_-edit {\n  position: relative;\n  height: var(--edit-wrapper-height);\n}\n._zs_gallery___test___edit_theme_-nav {\n  position: absolute;\n  z-index: 3;\n  top: calc(0px - var(--edit-nav-size));\n  left: 0;\n  height: var(--edit-nav-size);\n  text-align: center;\n  transition: left var(--duration);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow,\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-width: 0 var(--edit-nav-size) var(--edit-nav-size);\n  border-style: solid;\n  border-color: transparent transparent var(--color-border);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow {\n  position: absolute;\n  top: 1px;\n  left: 50%;\n  margin-left: calc(0px - var(--edit-nav-size));\n  border-color: transparent transparent #fff;\n}\n._zs_gallery___test___edit_theme_-colors {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding-left: 15px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-item {\n  float: left;\n  width: 120px;\n  height: 90px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-icon {\n  position: relative;\n  top: 1px;\n  margin-left: 3px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-group {\n  height: var(--edit-group-height);\n  line-height: var(--edit-group-height);\n  font-size: calc(var(--font-size) + 2px);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper {\n  width: 100px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*="mx-color/picker"] {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*="mx-color/picker"] .mx-trigger {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-preview {\n  padding: 0 20px;\n}\n._zs_gallery___test___edit_theme_-preview ._zs_gallery___test___edit_theme_-iframe {\n  width: 100%;\n  height: var(--edit-wrapper-height);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery___test___edit_theme_-tip {\n  position: relative;\n  padding-left: calc(var(--font-size) * 15);\n}\n._zs_gallery___test___edit_theme_-tip ._zs_gallery___test___edit_theme_-tip-left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--font-size) * 15);\n}\n._zs_gallery___test___edit_theme_-name {\n  position: relative;\n  height: 36px;\n  white-space: nowrap;\n}\n._zs_gallery___test___edit_theme_-name ._zs_gallery___test___edit_theme_-name-key {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  color: #999;\n}\n._zs_gallery___test___edit_theme_-name ._zs_gallery___test___edit_theme_-name-icon {\n  font-size: 12px;\n  color: #999;\n}\n'),_.exports=r.extend({tmpl:function(e,t,_,i,r,a,l,o){if(_||(_=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(n,d)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return c[e]},h=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(h,p)}}if(!o){var m=/[\\'"]/g;o=function(e){return r(e).replace(m,"\\$&")}}l||(l=function(e,t,_,i){for(i=e[x];--i;)if(e[_=x+i]===t)return _;return e[_=x+e[x]++]=t,_});var v,g,y,x="",u="",f=e.themes,b=e.itemWidth,z=e.custom,k=e.cur,w=e.list,$=e.viewId;try{u+='<div mxs="_zs_galleryf:_" class="tip-content has-border has-highlight mb20 mr20"><div class="clearfix lh24"><div class="fl">操作说明：</div><div class="fl"><div>1. 选择预置主题（钻展/直通车/超级推荐）或者自定义一个颜色作为项目品牌色；</div><div>2. 系统根据品牌色计算出默认色值，可在此基础上进行调整；</div><div>3. 左侧编辑区域列举可设置的变量，支持修改</div><div>4. 右侧iframe嵌入脚手架列举常见场景，与左侧设置的变量实时联动，帮您真实复原应用场景；</div></div></div><div class="clearfix lh24 _zs_gallery___test___edit_theme_-tip"><div class="_zs_gallery___test___edit_theme_-tip-left">关于项目配置和组件配置的说明：</div><div>超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。</div><div>对于老项目项目品牌色 = 组件品牌色，老项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。</div><div>单个操作项说明可hover名称查看</div></div></div><div mxa="_zs_galleryf:_" class="clearfix mb30">',y=19,g="each themes as t i",v="<%for (var i = 0, $art_cydyesbgx$art_c = themes.length; i < $art_cydyesbgx$art_c; i++) {    var t = themes[i]%>";for(var W=0,j=f.length;W<j;W++){var q=f[W];u+='<div class="_zs_gallery___test___edit_theme_-theme" style="width: ',y=20,g="=itemWidth",u+=(v="<%=itemWidth%>",i(b)+'px;"><div><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot" style="'),y=21,g="=t.styles",u+=(v="<%=t.styles%>",i(q.styles)+'" mx-click="'+t+"selectTheme({cur:"),y=22,g="=i",u+=(v="<%=i%>",i(W)+'})"></a></div><div mxa="_zs_galleryf:a" class="mt10">'),y=23,g="=t.text",u+=(v="<%=t.text%>",i(q.text)+"</div></div>"),y=25,g="/each",v="<%}%>"}u+='<div class="_zs_gallery___test___edit_theme_-theme" style="width: ',y=27,g="=itemWidth",u+=(v="<%=itemWidth%>",i(b)+'px;"><div mx-change="'+t+'changeColor()" mx-view="mx-color/picker?dot=true&color='),y=30,g="=custom",u+=(v="<%!$eu(custom)%>",a(z)+'"></div><div mxs="_zs_galleryf:a" class="text-center mt10">自定义</div></div><a mxs="_zs_galleryf:b" href="javascript:;" class="fl ml20 btn btn-brand" mx-click="'+t+'copy()">复制我的定制主题</a></div><div mxv class="_zs_gallery___test___edit_theme_-edit" style="padding-left: '),y=38,g="=(itemWidth * 4)",u+=(v="<%=(itemWidth * 4)%>",i(4*b)+'px;"><div class="_zs_gallery___test___edit_theme_-nav" style="left:'),y=39,g="=(itemWidth*cur)",u+=(v="<%=(itemWidth * cur)%>",i(b*k)+"px; width: "),y=39,g="=itemWidth",u+=(v="<%=itemWidth%>",i(b)+'px;"><span mxs="_zs_galleryf:c" class="_zs_gallery___test___edit_theme_-arrow"></span><span mxs="_zs_galleryf:d" class="_zs_gallery___test___edit_theme_-white-arrow"></span></div><div mxv class="_zs_gallery___test___edit_theme_-colors" style="width: '),y=43,g="=(itemWidth * 4)",u+=(v="<%=(itemWidth * 4)%>",i(4*b)+'px;">'),y=44,g="each list as group",v="<%for (var $art_iwimakum$art_i = 0, $art_cjzyfclco$art_c = list.length; $art_iwimakum$art_i < $art_cjzyfclco$art_c; $art_iwimakum$art_i++) {    var group = list[$art_iwimakum$art_i]%>";for(var E=0,I=w.length;E<I;E++){var T=w[E];u+='<div mxa="_zs_galleryf:b" class="_zs_gallery___test___edit_theme_-group">',y=46,g="=group.text",u+=(v="<%=group.text%>",i(T.text)+'<span class="mc-iconfont color-9" mx-view="mx-popover/index?content='),y=48,g="=group.tip",u+=(v="<%!$eu(group.tip)%>",a(T.tip)+"&width=400&offset="),y=50,g="@{left:140}",u+=(v="<%@{ left: 140 }%>",l(_,{left:140})+'">&#xe629;</span></div><div mxv mxa="_zs_galleryf:c" class="clearfix">'),y=53,g="each group.subs as item",v="<%for (var $art_icsczuq$art_i = 0, $art_objporuev$art_obj = group.subs, $art_cunjem$art_c = $art_objporuev$art_obj.length; $art_icsczuq$art_i < $art_cunjem$art_c; $art_icsczuq$art_i++) {        var item = $art_objporuev$art_obj[$art_icsczuq$art_i]%>";for(var V=0,C=T.subs,F=C.length;V<F;V++){var M=C[V];u+='<div mxv mxa="_zs_galleryf:d" class="_zs_gallery___test___edit_theme_-item"><div mxa="_zs_galleryf:e" class="_zs_gallery___test___edit_theme_-name mb5"><div mxa="_zs_galleryf:f" class="color-6">',y=56,g="=item.text",u+=(v="<%=item.text%>",i(M.text)+'<span class="mc-iconfont _zs_gallery___test___edit_theme_-name-icon" mx-view="mx-popover/index?content='),y=57,g="=item.tip",u+=(v="<%!$eu(item.tip)%>",a(M.tip)+"&width=320&offset="),y=59,g="@{left: 80}",u+=(v="<%@{ left: 80 }%>",l(_,{left:80})+'">&#xe629;</span></div><div mxa="_zs_galleryf:g" class="_zs_gallery___test___edit_theme_-name-key">'),y=60,g="=item.key",u+=(v="<%=item.key%>",i(M.key)+"</div></div>"),y=62,g="if item.type == 'color'",v="<%if (item.type == 'color') {%>","color"==M.type&&(u+='<div mxv class="_zs_gallery___test___edit_theme_-color-wrapper" style="background-color: ',y=63,g="=item.value",u+=(v="<%=item.value%>",i(M.value)+';"><div mxv="list" mxe="'+t+"_0_"+(v="<%=$art_iwimakum$art_i%>",i(E))+"_"+(v="<%=$art_icsczuq$art_i%>",i(V))+'" mxc="['),y=65,g=":item.value",u+="{p:'list."+(v="<%=$art_iwimakum$art_i%>",i(E))+".subs."+(v="<%=$art_icsczuq$art_i%>",i(V))+".value',a:'color'}]\" mx-change=\""+t+"sync({key:'",y=66,g="=item.key",u+=(v="<%=$eq(item.key)%>",i(o(M.key))+'\'})" mx-view="mx-color/picker?color='),y=65,g=":item.value",u+=(v="<%@item.value%>",l(_,M.value)+'"></div></div>'),y=68,g="/if",v="<%}%>"),u+=" ",y=69,g="if item.type == 'text'",v="<%if (item.type == 'text') {%>","text"==M.type&&(u+='<div mxv><input mxe="'+t+"_1_"+(v="<%=$art_iwimakum$art_i%>",i(E))+"_"+(v="<%=$art_icsczuq$art_i%>",i(V))+'" mxc="[',y=72,g=":item.value",u+="{p:'list."+(v="<%=$art_iwimakum$art_i%>",i(E))+".subs."+(v="<%=$art_icsczuq$art_i%>",i(V))+'.value\'}]" class="w100" value="',y=72,g=":item.value",u+=(v="<%=item.value%>",i(M.value)+'" mx-change="'+t+"sync({key:'"),y=73,g="=item.key",u+=(v="<%=$eq(item.key)%>",i(o(M.key))+"'})\"/></div>"),y=75,g="/if",v="<%}%>"),u+="</div>",y=77,g="if item.gap",v="<%if (item.gap) {%>",M.gap&&(u+='<div mxs="_zs_galleryf:e" class="_zs_gallery___test___edit_theme_-item"></div>',y=79,g="/if",v="<%}%>"),u+=" ",y=80,g="/each",v="<%}%>"}u+="</div>",y=82,g="/each",v="<%}%>"}u+='</div><div mxa="_zs_galleryf:h" class="_zs_gallery___test___edit_theme_-preview"><iframe src="https://mo.m.taobao.com/page_201904221752051#!/example/second1" class="_zs_gallery___test___edit_theme_-iframe" sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts" id="frame_',y=87,g="=viewId",u+=(v="<%=viewId%>",i($)+'" width="100%" height="770" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div>')}catch(e){var B="render view error:"+(e.message||e);throw g&&(B+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),B+="\r\n\t"+(g?"translate to:":"expr:"),B+=v+"\r\n\tat file:__test__/edit/index.html"}return u},mixins:[a,l,o],init:function(e){this.initTheme();this.updater.set({viewId:this.id,custom:"#51a300",cur:2,itemWidth:126,list:[{text:"项目配置",tip:"超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。<br/>对于老项目项目品牌色 = 组件品牌色，项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。",subs:[{type:"color",key:"--app-brand",text:"项目品牌色",tip:"项目品牌色，支持渐变，主要用于项目顶部和侧边导航，自定义时默认为项目品牌色 = 组件品牌色"},{type:"color",key:"--app-brand-gradient",text:"项目品牌渐变",tip:"项目品牌色，支持渐变，主要用于项目顶部和侧边导航，自定义时默认为项目品牌色 = 组件品牌色"},{type:"color",key:"--app-nav-bg",text:"项目侧边导航背景",tip:"项目侧边导航背景色"},{type:"color",key:"--app-bg",text:"项目背景",tip:"项目采用卡片色设计，白框底部背景色"}]},{text:"组件配置",tip:"超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。<br/>对于老项目项目品牌色 = 组件品牌色，项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。",subs:[{type:"color",key:"--color-brand",text:"品牌色",tip:"组件品牌色，组件基本色值都基于品牌色产生"},{type:"color",key:"--color-brand-hover",text:"品牌色hover",tip:"组件品牌色hover色值，默认品牌色亮度减少10%"},{type:"color",key:"--color-brand-light",text:"品牌色20%",tip:"主要应用于表格单行hover操作行背景值，开关浅色，滑动轴浅色；默认组件品牌色透明20%"},{type:"color",key:"--color-brand-opacity",text:"品牌色10%",tip:"主要应用于表格单行hover显示行背景值，下拉选项选中态背景色；默认组件品牌色透明10%"},{type:"color",key:"--color-brand-vs",text:"品牌色对比色",tip:"品牌色对比色，常用与报表对比场景"},{type:"color",key:"--border-highlight",text:"组件边框色",tip:"input，dropdown，calendar等组件的边框颜色；默认#e6e6e6"},{type:"color",key:"--border-highlight-hover",text:"组件边框hover色",tip:"input，dropdown，calendar等组件的边框hover颜色；默认#ccc",gap:!0},{type:"color",key:"--btn-brand-text",text:"深底按钮文字",tip:"深底色按钮文字颜色"},{type:"color",key:"--btn-brand",text:"深底按钮",tip:"深底按钮色，支持渐变，默认等于品牌色"},{type:"color",key:"--btn-brand-gradient",text:"深底按钮渐变",tip:"深底按钮色，支持渐变，默认等于品牌色",gap:!0},{type:"color",key:"--btn-brand-text-hover",text:"深底按钮hover文字",tip:"深底色按钮hover时文字颜色"},{type:"color",key:"--btn-brand-hover",text:"深底按钮hover",tip:"深底按钮hover色值，支持渐变，默认等于品牌色hover"},{type:"color",key:"--btn-brand-gradient-hover",text:"深底按钮hover渐变",tip:"深底按钮hover色值，支持渐变，默认等于品牌色hover",gap:!0},{type:"color",key:"--btn-border",text:"浅底按钮边框",tip:"浅底色按钮边框颜色，默认为品牌色"},{type:"color",key:"--btn-bg",text:"浅底按钮背景",tip:"浅底按钮背景色，默认为品牌色10%"},{type:"color",key:"--btn-text",text:"浅底按钮文字",tip:"浅底按钮文字颜色，默认#333",gap:!0},{type:"color",key:"--btn-border-hover",text:"浅底按钮hover边框",tip:"浅底按钮hover时边框颜色，默认为品牌色"},{type:"color",key:"--btn-bg-hover",text:"浅底按钮hover背景",tip:"浅底按钮hover时背景颜色，默认为品牌色20%"},{type:"color",key:"--btn-text-hover",text:"浅底按钮hover文字",tip:"浅底按钮hover文字颜色，默认#333"},{type:"text",key:"--btn-border-radius",text:"按钮圆角",tip:"按钮圆角，默认4px"},{type:"color",key:"--color-warn",text:"黄色警告",tip:"警告场景提示颜色"},{type:"color",key:"--color-red",text:"红色错误",tip:"错误场景提示颜色"},{type:"color",key:"--color-green",text:"绿色通过",tip:"通过场景提示颜色",gap:!0},{type:"text",key:"--font-size",text:"字体",tip:'字体大小，默认12px，组件基于此参数计算节点大小，<span class="color-brand">注：修改字体联动修改正常组件行高，小号组件行高</span>'},{type:"text",key:"--line-height",text:"文本行高",tip:"文本行高，默认1.5"},{type:"text",key:"--input-height",text:"正常组件行高",tip:"input，btn，dropdown，calendar等等组件的trigger节点行高，默认 = 字体 + 20"},{type:"text",key:"--input-small-height",text:"小号组件行高",tip:"小号input，小号btn，dropdown下拉列表单个选项，默认 = 字体 + 14"}]}]})},render:function(){this.setValues()},setValues:function(e){var t=this.updater.get(),_=t.list,i=t.cur,r=t.custom,a=t.themes,l={};if(3==i)l=this["@{get.base}"]({"--color-brand":r});else{var o=a[i];l=o.colors}(_.forEach(function(e){e.subs.forEach(function(e){e.value=l[e.key]||""})}),this.updater.digest({list:_}),e)&&document.getElementById("frame_"+this.id).contentWindow.postMessage({type:"changeTheme",colors:l},"*")},"selectTheme<click>":function(e){var t=e.params.cur;this.updater.set({cur:t}),this.setValues(!0)},"changeColor<change>":function(e){this.updater.set({custom:e.color,cur:3}),this.setValues(!0)},"sync<change>":function(e){var t=this.updater.get("list"),_={};if(t.forEach(function(e){e.subs.forEach(function(e){_[e.key]=e.value})}),"--font-size"==e.params.key){var i=_["--font-size"].replace("px","");_["--input-height"]=+i+20+"px",_["--input-small-height"]=+i+14+"px"}t.forEach(function(e){e.subs.forEach(function(e){e.value=_[e.key]})}),this.updater.digest({list:t}),document.getElementById("frame_"+this.id).contentWindow.postMessage({type:"changeTheme",colors:_},"*")},"copy<click>":function(e){var t=this.updater.get("list"),_={};t.forEach(function(e){e.subs.forEach(function(e){_[e.key]=e.value})}),this.mxModal("__test__/edit/copy",{colors:_},{header:{title:"复制我的定制主题"},footer:{enter:!1},width:800})}})});