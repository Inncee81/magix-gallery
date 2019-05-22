define("mx-table/__test__/17",["magix","__test__/example","$","mx-dropdown/index","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("mx-dropdown/index"),t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");var a=t("magix"),n=t("__test__/example"),i=t("$");a.applyStyle("_zs_galleryaA","._zs_galleryjY{height:50px}._zs_galleryjZ{height:50px;padding-top:8px;background-color:#fff}._zs_galleryk_{position:fixed;z-index:100;top:0;left:280px;right:40px}"),l.exports=n.extend({tmpl:function(t,e,l,a,n,i,s,r){if(l||(l=t),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,_=function(t){return"&"+d[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(g,_)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return o[t]},x=/[!')(*]/g;i=function(t){return encodeURIComponent(n(t)).replace(x,c)}}if(!r){var p=/[\\'"]/g;r=function(t){return n(t).replace(p,"\\$&")}}s||(s=function(t,e,l,a){for(a=t[f];--a;)if(t[l=f+a]===e)return l;return t[l=f+t[f]++]=e,l});var f="",h="",v=t.viewId,m=t.interval,y=t.page,b=t.text1,z=t.text3,w=t.text2;h+='<div mxa="_zs_galleryea:_" class="_zs_galleryg"><div mxa="_zs_galleryea:a" class="_zs_galleryj"><div mxs="_zs_galleryea:_" class="mb10 lh22 clearfix"><div class="fl color-9">该示例：</div><div class="fl"><div>筛选项同表头一起吸顶</div><div>表头的吸顶逻辑是表格可见时吸顶，筛选项的吸顶逻辑同表头，筛选项吸顶时注意预留筛选项的占位符</div><div>筛选项的吸顶功能请自行控制，表格上设置&nbsp;<span class="color-brand">sticky-interval</span>&nbsp;预留吸顶空白</div><div>sticky-interval 只在 sticky == true && scroll-wrapper == window时生效</div></div></div><div id="'+a(v)+'_filters" class="_zs_galleryjY"><div id="'+a(v)+'_filters_inner" class="_zs_galleryjZ clearfix"><div class="fl mr10" mx-change="'+e+'changeFilter()" mx-view="mx-dropdown/index?list='+s(l,[1,2,3])+'"></div><div class="fl" mx-change="'+e+'changeFilter()" mx-view="mx-dropdown/index?list='+s(l,[4,5,6])+'"></div></div></div><div mx-view="mx-table/index?sticky=true&stickyInterval='+i(m)+'" id="'+a(v)+'_table"><div><table mxa="_zs_galleryea:b" class="table" left="true"><thead><tr>';for(var u=0;u<4;u++)h+='<th mxa="_zs_galleryea:c" width="120">固定字段'+a(u)+"</th>";h+="</tr></thead><tbody>";for(var j=0;j<5*y;j++){h+="<tr>";for(u=0;u<4;u++)h+="<td>固定内容"+a(u)+"</td>";h+='</tr><tr mxs="_zs_galleryea:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>'}h+='</tbody></table></div><div><table mxa="_zs_galleryea:d" class="table" center="true"><thead><tr>';for(u=0;u<10;u++)h+='<th mxa="_zs_galleryea:e" width="120">滚动'+a(u)+"</th>";h+="</tr></thead><tbody>";for(j=0;j<5*y;j++){h+="<tr>";for(u=0;u<10;u++)h+="<td>滚动内容"+a(u)+"</td>";h+='</tr><tr mxs="_zs_galleryea:b" class="operation-tr"><td colspan="10"></td></tr>'}return h+='</tbody></table></div></div><div mxs="_zs_galleryea:c" class="table-pager-wrapper" mx-change="'+e+'changePager()" mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div><div mxa="_zs_galleryea:f" class="clearfix"><div mxa="_zs_galleryea:g" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryea:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_galleryea:h" class="_zs_galleryn">'+n(b)+'</span><i mxs="_zs_galleryea:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_filters" class="filters"&gt;\n    &lt;div id="&#123;&#123;=viewId&#125;&#125;_filters_inner" class="filters-inner clearfix"&gt;\n        &lt;mx-dropdown class="fl mr10" \n            list="&#123;&#123;@[1,2,3]&#125;&#125;"\n            mx-change="changeFilter()"&gt;\n        &lt;/mx-dropdown&gt;\n        &lt;mx-dropdown class="fl" \n            list="&#123;&#123;@[4,5,6]&#125;&#125;"\n            mx-change="changeFilter()"&gt;\n        &lt;/mx-dropdown&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;mx-table id="&#123;&#123;=viewId&#125;&#125;_table" \n        sticky="true" sticky-interval="&#123;&#123;=interval&#125;&#125;"&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;(page * 5);j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;(page * 5);j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n\n&lt;mx-pagination class="table-pager-wrapper"\n    total="100" \n    size="40" \n    page="1"\n    mx-change="changePager()"/&gt;\n</pre></div><div mxa="_zs_galleryea:i" class="_zs_galleryd _zs_gallerye"><div mxa="_zs_galleryea:j" class="_zs_galleryk"><div mxs="_zs_galleryea:f" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_3"><span mxa="_zs_galleryea:k" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryea:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+"_text_3\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let that = this;\n        let total = 20,\n            page = 1;\n        that.updater.digest(&#123;\n            viewId: that.id,\n            page,\n            total,\n            interval: 50\n        &#125;);\n    &#125;,\n\n    'changeFilter&lt;change&gt;'(e) &#123;\n        this.change(&#123;\n            page: 1\n        &#125;)\n    &#125;,\n\n    'changePager&lt;change&gt;'(e) &#123;\n        let page = +e.page;\n        this.change(&#123;\n            page\n        &#125;)\n    &#125;,\n\n    change(params) &#123;\n        this.updater.digest(params);\n        \n        // 回到顶部筛选项顶部\n        let filters = $('#' + this.id + '_filters');\n        $(window).scrollTop(filters.offset().top);\n    &#125;,\n\n    '$win&lt;scroll&gt;'(e) &#123;\n        let that = this;\n        let filtersInner = $('#' + that.id + '_filters_inner');\n\n        // 筛选项的定位逻辑跟表格保持一致\n        let table = $('#' + that.id + '_table');\n        let scrollTop = $(window).scrollTop();\n        let tableOffset = table.offset();\n        let interval = that.updater.get('interval');\n        let tableHeaderHeight = table.find('thead').outerHeight();\n        let min = tableOffset.top - interval;\n        let max = min + table.height() - tableHeaderHeight;\n        if (scrollTop &gt;= min && scrollTop &lt;= max) &#123;\n            filtersInner.addClass('@index.less:filters-fixed');\n        &#125; else &#123;\n            filtersInner.removeClass('@index.less:filters-fixed');\n        &#125;\n    &#125;\n&#125;);\n                </pre></div><div mxa=\"_zs_galleryea:l\" class=\"_zs_galleryk\"><div mxs=\"_zs_galleryea:g\" class=\"_zs_galleryi\">CSS Code</div><div class=\"_zs_galleryl\" mx-success=\""+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_2"><span mxa="_zs_galleryea:m" class="_zs_galleryn">'+n(w)+'</span><i mxs="_zs_galleryea:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_2">\n.filters&#123;\n    height: 50px;\n&#125;\n\n.filters-inner&#123;\n    height: 50px;\n    padding-top: 8px;\n    background-color: #fff;\n&#125;\n\n.filters-fixed&#123;\n    position: fixed;  //自行控制筛选项的位置\n    z-index: 100;\n    top: 0;\n    left: 280px;\n    right: 40px;\n&#125;</pre></div></div></div></div>'},render:function(){this.updater.digest({page:1,total:20,interval:50})},"changeFilter<change>":function(t){this.change({page:1})},"changePager<change>":function(t){var e=+t.page;this.change({page:e})},change:function(t){this.updater.digest(t);var e=i("#"+this.id+"_filters");i(window).scrollTop(e.offset().top)},"$win<scroll>":function(t){var e=i("#"+this.id+"_filters_inner"),l=i("#"+this.id+"_table"),a=i(window).scrollTop(),n=l.offset(),s=this.updater.get("interval"),r=l.find("thead").outerHeight(),d=n.top-s,g=d+l.height()-r;a>=d&&a<=g?e.addClass("_zs_galleryk_"):e.removeClass("_zs_galleryk_")}})});