define("mx-day/__test__/index",["magix","../index","__test__/hl"],(e,t,i)=>{e("../index"),e("__test__/hl");var s=e("magix");i.exports=s.View.extend({tmpl:function(e){var t="",i=function(t,i,s){for(s=e[""];--s;)if(e[i=""+s]===t)return i;return e[i=""+e[""]++]=t,i};return t+='<h2>mx-day</h2><h3>展示</h3><div class="_B _ai"><div style="width:800px" mx-change="showDays()" mx-view="mx-day/index?years=',t+=i(e.years),t+="&selectedYear=2002&selectedDays=",t+=i({2012:"0011,,0011,1100"}),t+='"></div></div><div class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-day\n    years="&lt;%@years%&gt;"\n    selected-year="2002"\n    selected-days="&lt;%@{\'2012\':\'0011,,0011,1100\'}%&gt;"\n    style="width:800px"/&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>'},render:function(){for(var e=[],t=1996;t<2020;t++)e.push(t);this.updater.digest({days:{2012:"0011,,0011,1100"},years:e})},"showDays<change>":function(e){}})});