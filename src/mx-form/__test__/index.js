define("mx-form/__test__/index",["magix","../index","mx-color/picker","mx-taginput/index","mx-dropdown/index","mx-time/picker","mx-calendar/datepicker","mx-calendar/rangepicker","mx-slider/index","mx-number/index","mx-slider/range","mx-progress/index","mx-uploader/index","./sub","__test__/hl"],(t,l,a)=>{t("mx-color/picker"),t("mx-taginput/index"),t("mx-dropdown/index"),t("mx-time/picker"),t("mx-calendar/datepicker"),t("mx-calendar/rangepicker"),t("mx-slider/index"),t("mx-number/index"),t("mx-slider/range"),t("mx-progress/index"),t("mx-uploader/index"),t("./sub"),t("__test__/hl");var e=t("magix"),c=t("../index");a.exports=e.View.extend({tmpl:function(t){var l="",a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},e=/[&<>"'`]/g,c=function(t){return null==t?"":""+t},s=function(t){return"&"+a[t]+";"},i=function(t){return c(t).replace(e,s)},n=function(l,a,e){for(e=t[""];--e;)if(t[a=""+e]===l)return a;return t[a=""+t[""]++]=l,a};return l+='<h2>mx-form</h2><h3>示例表单</h3><div class="_B _ai"><div style="width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;"><div class="_av _ai"><label class="_aw _ax">活动名称：</label><div class="_ay"><input mx-ssid="0" class="_ap" placeholder="请填写活动名称" value="'+i(t.name)+'" mx-change="__c({c:[{p:\'name\',f:{required:true,blength:[20,50]}}]})" mx-focusout="__c()" mx-focusin="__c({m:\'__a\',a:{}})"/></div></div><div class="_av _ai"><label class="_aw">色彩：</label><div class="_ay"><input class="_ap"/><div mx-view="mx-color/picker" class="_af _ah"></div></div></div><div class="_av"><label class="_aw _ax">标签：</label><div class="_ay"><div mx-ssid="1" mx-change="__c({c:[{p:\'tags\',f:{required:true}}]})" mx-focusout="__c()" mx-focusin="__c()" mx-view="mx-taginput/index?list=',l+=n(t.list),l+="&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=",l+=n(t.tags),l+='"></div></div></div><div class="_av"><label class="_aw _ax">活动时间：</label><div class="_ay"><div mx-ssid="2" mx-change="__c({c:[{p:\'day\',f:{required:true}}]})" mx-focusout="__c()" mx-focusin="__c()" style="width:180px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=',l+=n(t.day),l+='"><i value="mon" class="_ah">周一</i><i value="wed" class="_ah">周三</i><i value="thu" class="_ah">周四</i><i value="fri" class="_ah">周五</i><i value="sat" class="_ah">周六</i></div><span class="_ac _s _g">-</span><input mx-ssid="3" class="_ap" style="width:145px" placeholder="请选择时间" value="'+i(t.time)+'" mx-change="__c({c:[{p:\'time\',f:{required:true}}]})" mx-focusout="__c()" mx-focusin="__c()"/><div mx-view="mx-time/picker" class="_af _ah"></div></div></div><div class="_av"><label class="_aw">checkbox：</label><div class="_ay"><label class="_h _am"><input type="checkbox" name="cb" value="c1" class="_as" mx-change="__c({c:[{p:\'checkbox\'}]})" mx-focusout="__c()" mx-focusin="__c()" disabled="disabled" ',t.checkbox.indexOf("c1")>-1&&(l+="checked"),l+='/>c1</label><label class="_h"><input type="checkbox" name="cb" value="c2" class="_as" mx-change="__c({c:[{p:\'checkbox\'}]})" mx-focusout="__c()" mx-focusin="__c()" ',t.checkbox.indexOf("c2")>-1&&(l+="checked"),l+='/>c2</label><label class="_h"><input type="checkbox" mx-change="__c({c:[{p:\'checkbox\'}]})" mx-focusout="__c()" mx-focusin="__c()" name="cb" value="c3" class="_au" disabled="disabled"/>c3</label><label class="_h"><input type="checkbox" mx-change="__c({c:[{p:\'checkbox\'}]})" mx-focusout="__c()" mx-focusin="__c()" name="cb" value="c4" class="_au" ',t.checkbox.indexOf("c4")>-1&&(l+="checked"),l+='/>c4</label></div></div><div class="_av"><label class="_aw">radio：</label><div class="_ay"><label class="_h _am"><input checked="checked" disabled="disabled" type="radio" mx-change="__c({c:[{p:\'radio\'}]})" mx-focusout="__c()" mx-focusin="__c()" value="r1" class="_at" name="magix"/>r1</label><label class="_h"><input type="radio" mx-change="__c({c:[{p:\'radio\'}]})" mx-focusout="__c()" mx-focusin="__c()" value="r2" class="_at" name="magix"/>r2</label><label class="_h"><input type="radio" mx-change="__c({c:[{p:\'radio\'}]})" mx-focusout="__c()" mx-focusin="__c()" value="r3" class="_at" name="magix"/>r3</label></div></div><div class="_av"><label class="_aw">日期：</label><div class="_ay"><input class="_ap" placeholder="请选择开始日期" value="'+i(t.dateStart)+'" mx-change="__c({c:[{p:\'dateStart\'}]})" mx-focusout="__c()" mx-focusin="__c()" style="width:162px;"/><div mx-view="mx-calendar/datepicker" class="_af _ah"></div><span class="_ac _s _g">-</span><input class="_ap" placeholder="请选择结束日期" value="'+i(t.dateEnd)+'" mx-change="__c({c:[{p:\'dateEnd\'}]})" mx-focusout="__c()" mx-focusin="__c()" style="width:162px;"/><div mx-view="mx-calendar/datepicker" class="_af _ah"></div></div></div><div class="_av"><label class="_aw">范围日期：</label><div class="_ay"><input class="_ap" placeholder="请选择开始日期" value="'+i(t.dates)+'" mx-change="__c({c:[{p:\'dates\'}]})" mx-focusout="__c()" mx-focusin="__c()" style="width:340px;"/><div mx-view="mx-calendar/rangepicker" class="_af _ah"></div></div></div><div class="_av"><label class="_aw">范围：</label><div class="_ay"><div mx-change="__c({c:[{p:\'range\'}]})" mx-focusout="__c()" mx-focusin="__c()" mx-view="mx-slider/index?max=200&min=20&value=',l+=n(t.range),l+='&step=0.2"></div></div></div><div class="_av"><label class="_aw">数字：</label><div class="_ay"><div mx-change="__c({c:[{p:\'number\'}]})" mx-focusout="__c()" mx-focusin="__c()" class="_ap _ag" mx-view="mx-number/index?value=',l+=n(t.number),l+='"></div></div></div><div class="_av"><label class="_aw">范围：</label><div class="_ay"><div mx-change="__c({c:[{p:\'range1\'}]})" mx-focusout="__c()" mx-focusin="__c()" mx-view="mx-slider/range?max=500&min=200&value=',l+=n(t.range1),l+='&step=10"></div></div></div><div class="_av"><label class="_aw">进度条：</label><div class="_ay"><div mx-view="mx-progress/index?value=0.35"></div></div></div><div class="_av"><label class="_aw">封面：</label><div class="_ay"><button class="_an _ao" mx-view="mx-uploader/index?action=.%2F&name=file1&multiple=true">上传文件</button></div></div><div class="_av"><label class="_aw">备注：</label><div class="_ay"><textarea mx-ssid="4" class="_aq" rows="8" mx-change="__c({c:[{p:\'mark\',f:{maxLength:10}}]})" mx-focusout="__c()" mx-focusin="__c()">'+i(t.mark)+'</textarea></div></div><div mx-ssid="5" mx-view="mx-form/__test__/sub?nameX1=',l+=n(t.name_x1),l+='" mx-change="__c({c:[{p:\'name_x1\',f:{from:\'nameX1\'}},{p:\'de\',f:{from:\'name_sub1\'}}]})" mx-focusout="__c()" mx-focusin="__c()"></div><div class="_az"><button class="_an _ao" mx-click="isValid()">isValid</button><button class="_an _ao _t" mx-click="getData()">getData</button></div></div></div><div class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;div style="width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;">\n    &lt;div class="form-item clearfix"&gt;\n        &lt;label class="form-label form-required"&gt;活动名称：&lt;/label&gt;\n        &lt;div class="form-content"&gt;&lt;input class="input" placeholder="请填写活动名称" value="&lt;%:name{required:true,blength:[20,50]}%&gt;" mx-focusin="__a()" /&gt;&lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class="form-item clearfix"&gt;\n        &lt;label class="form-label"&gt;色彩：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-color.picker class="input"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label form-required"&gt;标签：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-taginput\n                list="&lt;%@list%&gt;"\n                placeholder="请选择标签"\n                selected="&lt;%:tags{required:true}%&gt;"\n            /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label form-required"&gt;活动时间：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown\n                searchbox="true"\n                empty-text="请选择日期"\n                selected="&lt;%:day{required:true}%&gt;" style="width:180px;"&gt;\n                &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n            &lt;/mx-dropdown&gt;\n            &lt;span class="ib ml5 mr5"&gt;\n            -&lt;/span&gt;\n            &lt;mx-time.picker class="input" style="width:145px" placeholder="请选择时间" value="&lt;%:time{required:true}%&gt;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;checkbox：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;label class="mr10 disabled"&gt;\n                &lt;native.input type="checkbox" name="cb" value="c1" class="checkbox" &lt;%:checkbox%&gt; disabled checked="&lt;%=checkbox.indexOf(\'c1\')&gt;-1%&gt;" /&gt;c1\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;native.input type="checkbox" name="cb" value="c2" class="checkbox" &lt;%:checkbox%&gt;  checked="&lt;%=checkbox.indexOf(\'c2\')&gt;-1%&gt;" /&gt;c2\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c3" class="switch" disabled /&gt;c3\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;native.input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c4" class="switch" checked="&lt;%=checkbox.indexOf(\'c4\')&gt;-1%&gt;"  /&gt;c4\n            &lt;/label&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;radio：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;label class="mr10 disabled"&gt;\n                &lt;native.input checked disabled type="radio" &lt;%:radio%&gt; value="r1" class="radio" name="magix" /&gt;r1\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;input type="radio" &lt;%:radio%&gt; value="r2" class="radio" name="magix" /&gt;r2\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;input type="radio" &lt;%:radio%&gt; value="r3" class="radio" name="magix" /&gt;r3\n            &lt;/label&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;日期：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.datepicker class="input" placeholder="请选择开始日期" value="&lt;%:dateStart%&gt;" style="width:162px;"/&gt;\n            &lt;span class="ib ml5 mr5"&gt;\n            -&lt;/span&gt;\n            &lt;mx-calendar.datepicker class="input" placeholder="请选择结束日期" value="&lt;%:dateEnd%&gt;" style="width:162px;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;范围日期：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.rangepicker class="input" placeholder="请选择开始日期" value="&lt;%:dates%&gt;" style="width:340px;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;范围：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-slider\n                max="200"\n                min="20"\n                value="&lt;%:range%&gt;"\n                step="0.2"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;数字：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-number value="&lt;%:number%&gt;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;范围：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-slider.range\n                max="500"\n                min="200"\n                value="&lt;%:range1%&gt;"\n                step="10"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;进度条：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-progress value="0.35"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;封面：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;button\n                class="btn btn-brand"\n                mx-view="mx-uploader/index"\n                view-action="./"\n                view-name="file1"\n                view-multiple="true"\n            &gt;上传文件&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;备注：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;textarea class="textarea" rows="8"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;mx-vframe src="@./sub" name-x1="&lt;%:name_x1{from:\'nameX1\'}%&gt;" &lt;%:de{from:\'name_sub1\'}%&gt;&gt;&lt;/mx-vframe&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;button class="btn btn-brand" mx-click="isValid()"&gt;isValid&lt;/button&gt;\n        &lt;button class="btn btn-brand ml10" mx-click="getData()"&gt;getData&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Form = require(\'app/gallery/mx-form/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    \'isValid&lt;click&gt;\' () {\n        console.log(this.isValid());\n    },\n    \'getData&lt;click&gt;\' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, \'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark\');\n        console.log(data);\n    }\n});</pre></div>'},mixins:[c],render:function(){this.updater.digest({keys:["aa","bb","cc"],name_x1:"----",user:[{name:"a"},{name:"b"},{name:"c"},{name:"d"},{name:"e"}],checkbox:["c1"],range:2,range1:[230,300],list:[0x650e124ef1c7,0xca1c249de38e,333333333333,44444444444444]})},"isValid<click>":function(){},"getData<click>":function(){var t=this.updater.get();this.fromKeys(t,"name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark,name_x1,de")},"__a<focusin>":function(t){},"delete<click>":function(t){var l=this.updater.get("user");l.splice(t.params.key,1),this.updater.digest({user:l})}})});