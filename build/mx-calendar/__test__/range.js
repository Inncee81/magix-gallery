define("mx-calendar/__test__/range",["magix","$","mx-medusa/util","__test__/subs","mx-title/second","./6","./23","./12","./7","./8","./9","./11","./15","./22","./13","./10","./18","./20","__test__/api","__test__/event","./implement"],(e,t,n)=>{e("__test__/subs"),e("mx-title/second"),e("./6"),e("./23"),e("./12"),e("./7"),e("./8"),e("./9"),e("./11"),e("./15"),e("./22"),e("./13"),e("./10"),e("./18"),e("./20"),e("__test__/api"),e("__test__/event"),e("./implement");var d=e("magix"),a=(e("$"),e("mx-medusa/util"));n.exports=d.View.extend({tmpl:function(e,t,n,d,a,i,r,s){if(n||(n=e),!a){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,y=function(e){return"&"+m[e]+";"};a=function(e){return""+(null==e?"":e)},d=function(e){return a(e).replace(_,y)}}if(!i){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return v[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(o,l)}}if(!s){var c=/[\\'"]/g;s=function(e){return a(e).replace(c,"\\$&")}}r||(r=function(e,t,n,d){for(d=e[x];--d;)if(e[n=x+d]===t)return n;return e[n=x+e[x]++]=t,n});var p,k,w,x="",I="",u=e.viewId,h=e.options,f=e.events,g=e.supportQuickDates;try{I+='<div mxv mxa="_zs_gallery`:_" class="pr pr120"><div mx-view="__test__/subs?list=',w=2,k="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '对比+时间段',\n            key: viewId + '_demo6'\n        },{\n            name: '对比+单天',\n            key: viewId + '_demo7'\n        },{\n            name: '选择时分秒',\n            key: viewId + '_demo8'\n        },{\n            name: '自定义trigger',\n            key: viewId + '_demo12'\n        },{\n            name: '动态快捷日期',\n            key: viewId + '_demo9'\n        },{\n            name: '自定义快捷日期',\n            key: viewId + '_demo23'\n        },{\n            name: '禁选开始或结束',\n            key: viewId + '_demo11'\n        },{\n            name: '至少至多n天',\n            key: viewId + '_demo22'\n        },{\n            name: '部分不可选',\n            key: viewId + '_demo15'\n        },{\n            name: '历史选中修正',\n            key: viewId + '_demo13'\n        },{\n            name: '范围修正',\n            key: viewId + '_demo10'\n        },{\n            name: '自定义formatter',\n            key: viewId + '_demo18'\n        },{\n            name: '禁选',\n            key: viewId + '_demo20'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }, {\n        name: 'Event',\n        key: viewId + '_event'\n    }, {\n        name: '快捷日期备选项',\n        key: viewId + '_quick'\n    }, {\n        name: '关于实现方案',\n        key: viewId + '_implement'\n    }]",I+=(p="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '对比+时间段',                    key: viewId + '_demo6'                }, {                    name: '对比+单天',                    key: viewId + '_demo7'                }, {                    name: '选择时分秒',                    key: viewId + '_demo8'                }, {                    name: '自定义trigger',                    key: viewId + '_demo12'                }, {                    name: '动态快捷日期',                    key: viewId + '_demo9'                }, {                    name: '自定义快捷日期',                    key: viewId + '_demo23'                }, {                    name: '禁选开始或结束',                    key: viewId + '_demo11'                }, {                    name: '至少至多n天',                    key: viewId + '_demo22'                }, {                    name: '部分不可选',                    key: viewId + '_demo15'                }, {                    name: '历史选中修正',                    key: viewId + '_demo13'                }, {                    name: '范围修正',                    key: viewId + '_demo10'                }, {                    name: '自定义formatter',                    key: viewId + '_demo18'                }, {                    name: '禁选',                    key: viewId + '_demo20'                }]        }, {            name: 'API',            key: viewId + '_api'        }, {            name: 'Event',            key: viewId + '_event'        }, {            name: '快捷日期备选项',            key: viewId + '_quick'        }, {            name: '关于实现方案',            key: viewId + '_implement'        }]%>",r(n,[{name:"使用示例",key:u+"_demo",subs:[{name:"对比+时间段",key:u+"_demo6"},{name:"对比+单天",key:u+"_demo7"},{name:"选择时分秒",key:u+"_demo8"},{name:"自定义trigger",key:u+"_demo12"},{name:"动态快捷日期",key:u+"_demo9"},{name:"自定义快捷日期",key:u+"_demo23"},{name:"禁选开始或结束",key:u+"_demo11"},{name:"至少至多n天",key:u+"_demo22"},{name:"部分不可选",key:u+"_demo15"},{name:"历史选中修正",key:u+"_demo13"},{name:"范围修正",key:u+"_demo10"},{name:"自定义formatter",key:u+"_demo18"},{name:"禁选",key:u+"_demo20"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"},{name:"快捷日期备选项",key:u+"_quick"},{name:"关于实现方案",key:u+"_implement"}])+'"></div><div id="'),w=59,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery`:a" class="clearfix mb20"><div mxa="_zs_gallery`:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-calendar/__test__/6" id="'),w=62,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo6"></div><div mx-view="mx-calendar/__test__/23" id="'),w=63,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo23"></div><div mx-view="mx-calendar/__test__/12" id="'),w=64,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo12"></div></div><div mxa="_zs_gallery`:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-calendar/__test__/7" id="'),w=67,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo7"></div><div mx-view="mx-calendar/__test__/8" id="'),w=68,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo8"></div><div mx-view="mx-calendar/__test__/9" id="'),w=69,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo9"></div><div mx-view="mx-calendar/__test__/11" id="'),w=70,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo11"></div><div mx-view="mx-calendar/__test__/15" id="'),w=71,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo15"></div><div mx-view="mx-calendar/__test__/22" id="'),w=72,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo22"></div><div mx-view="mx-calendar/__test__/13" id="'),w=73,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo13"></div><div mx-view="mx-calendar/__test__/10" id="'),w=74,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo10"></div><div mx-view="mx-calendar/__test__/18" id="'),w=75,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo18"></div><div mx-view="mx-calendar/__test__/20" id="'),w=76,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_demo20"></div></div></div><div id="'),w=80,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),w=81,k="@options",I+=(p="<%@options%>",r(n,h)+'" class="mb40"></div><div id="'),w=83,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='),w=84,k="@events",I+=(p="<%@events%>",r(n,f)+'" class="mb40"></div><div id="'),w=86,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_quick" mx-view="mx-title/second?content=%E5%BF%AB%E6%8D%B7%E6%97%A5%E6%9C%9F%E5%A4%87%E9%80%89%E9%A1%B9"></div><div mxa="_zs_gallery`:d" class="pr20 mb40"><table mxa="_zs_gallery`:e" class="table _zs_gallery___test___layout_-desc-table"><thead mxs="_zs_gallery`:_"><tr><th width="100">配置key值</th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody>'),w=97,k="each supportQuickDates as item",p="<%for (var $art_igznpzzyp$art_i = 0, $art_cpjccmq$art_c = supportQuickDates.length; $art_igznpzzyp$art_i < $art_cpjccmq$art_c; $art_igznpzzyp$art_i++) {    var item = supportQuickDates[$art_igznpzzyp$art_i]%>";for(var b=0,z=g.length;b<z;b++){var E=g[b];I+="<tr><td>",w=99,k="=item.key",I+=(p="<%=item.key%>",d(E.key)+"</td><td>"),w=100,k="=item.text",I+=(p="<%=item.text%>",d(E.text)+"</td><td>"),w=101,k="=item.tip",I+=(p="<%=item.tip%>",d(E.tip)+"</td></tr>"),w=103,k="/each",p="<%}%>"}I+='</tbody></table></div><div mx-view="mx-calendar/__test__/implement" id="',w=108,k="=viewId",I+=(p="<%=viewId%>",d(u)+'_implement"></div></div>')}catch(e){var $="render view error:"+(e.message||e);throw k&&($+="\r\n\tsrc art:{{"+k+"}}\r\n\tat line:"+w),$+="\r\n\t"+(k?"translate to:":"expr:"),$+=p+"\r\n\tat file:mx-calendar/__test__/range.html"}return I},render:function(){var e=this.id,t=[{key:"start",desc:"默认选中开始日期",type:"string",def:"根据max和min进行修正"},{key:"end",desc:"默认选中结束日期，不限的情况下end=不限即可",type:"string",def:"根据max和min进行修正"},{key:"start-disabled",desc:"是否禁止选择开始日期<br>开始日期禁止使用的时候，只允许使用动态计算的快捷日期<br>动态计算的都是依据开始日期计算的",type:"string",def:"false"},{key:"end-disabled",desc:"是否禁止选中结束日期<br>结束日期禁止使用的时候，禁止快捷操作，开始日期最大可选为结束日期",type:"string",def:"false"},{key:"vsenable",desc:"是否可对比",type:"boolean",def:"false"},{key:"vs",desc:"对比初始值",type:"boolean",def:"false"},{key:"single",desc:"vsenable=true时可生效，关闭对比的时候选择单天还是连续的时间段",type:"boolean",def:"false"},{key:"shortcuts",desc:"是否有快捷方式",type:"boolean",def:"true"},{key:"shortkeys",desc:'shortcuts=true时生效，支持以下两个形式：<br/>\n1.配置备选快捷方式key值，如["today","yesterday"]，<a href="javascript:;" mx-click="to({id:\''+e+"_quick'})\" class=\"color-brand\">点击查看所有备选值</a><br/>\n2.自定义快捷方式，格式如下<pre>[{\n    key: '', //唯一key\n    text: '', //显示文案\n    tip: '', //快捷方式说明，没有为空即可\n    start: '2019-06-21', //对应的开始时间\n    end: '2019-06-24' //对应的结束时间\n}]</pre>",type:"array",def:'<pre>[\n    "today",\n    "yesterday",\n    "passed7",\n    "preWeekMon",\n    "passed15",\n    "lastestThisMonth",\n    "passed30",\n    "preMonth"\n]</pre>'},{key:"max",desc:"最大可选的日期",type:"string"},{key:"min",desc:"最小可选的日期",type:"string"},{key:"max-gap",desc:"可选择的最大天数间隔",type:"number",def:""},{key:"min-gap",desc:"可选择的最小天数间隔",type:"number",def:""},{key:"date-type",desc:'<pre>\n年月日选择类型：\n可选择"year,month,day"中的一个或者多个\n此外"all" = "year,month,day" = ""，不设置的时候默认年月日都显示\n</pre>',type:"string",def:""},{key:"time-type",desc:'<pre>\n时分秒选择类型：\n1.设置该值后会出现时间选择组件\n  可选择"hour,minute,second"中的一个或者多个\n  此外提供快捷的配置"all" = "hour,minute,second"\n2.不设置无时分秒选择            \n            </pre>',type:"string",def:""},{key:"formatter",desc:"date格式",type:"string",def:"YYYY-MM-dd"},{key:"align",desc:"日历选择面板与目标的对齐方式，可选left和right",type:"string",def:"left"},{key:"text-align",desc:"选中结果文案对齐方式，可选left，right和center，默认居中对齐",type:"string",def:"center"},{key:"disabled-weeks",desc:"限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集",type:"array",def:"[]"},{key:"week-start",desc:"从周几开，0-6，0表示周日",type:"number",def:"0"},{key:"disabled",desc:"是否禁用",type:"",def:"false"}],n=[{key:"today",text:a["calendar.today"],tip:a["calendar.today"]},{key:"yesterday",text:a["calendar.yesterday"],tip:a["calendar.yesterday"]},{key:"beforeYesterday",text:a["calendar.before.yesterday"],tip:a["calendar.before.yesterday"]},{key:"preMonth",text:a["calendar.last.month"],tip:a["calendar.last.month"]},{key:"preWeekSun",text:a["calendar.last.week"],tip:a["calendar.last.week.sunday"]},{key:"preWeekMon",text:a["calendar.last.week"],tip:a["calendar.last.week.monday"]},{key:"lastestWeekSun",text:a["calendar.this.week"],tip:a["calendar.this.week.sunday"]},{key:"lastestWeekMon",text:a["calendar.this.week"],tip:a["calendar.this.week.monday"]},{key:"passedThisMonth",text:a["calendar.this.month"],tip:a["calendar.this.month.yestarday"]},{key:"lastestThisMonth",text:a["calendar.this.month"],tip:a["calendar.this.month.today"]},{key:"passed{n}",text:a["calendar.passed"]+" n "+a["calendar.unit"],tip:a["calendar.passed"]+" n "+a["calendar.unit.yesterday"]+"，"+a["calendar.n.arbitrary"]+"，passed1，passed15..."},{key:"lastest{n}",text:a["calendar.lastest"]+" n "+a["calendar.unit"],tip:a["calendar.lastest"]+" n "+a["calendar.unit.today"]+"，"+a["calendar.n.arbitrary"]+"，lastest1，lastest15..."},{key:"dynamicStart{n}",text:a["calendar.dynamic.end"].replace("${day}","n"),tip:a["calendar.dynamic.end.tip"].replace("${day}","n")+"，"+a["calendar.n.arbitrary"]+"，dynamicStart1，dynamicStart15..."},{key:"dynamicEndThisMonth",text:a["calendar.natural.month"],tip:a["calendar.natural.month.tip"]},{key:"dynamicEndNextMonth",text:a["calendar.next.month"],tip:a["calendar.next.month.tip"]},{key:"forever",text:a["calendar.forever"],tip:a["calendar.forever.tip"]}];this.updater.digest({viewId:e,options:t,events:[{type:"change",desc:"切换日期，切换对比时会触发",params:[{key:"start",desc:"开始时间，包含时分秒",type:"string"},{key:"end",desc:"结束时间，包含时分秒",type:"string"},{key:"vs",desc:"是否对比",type:"boolean"},{key:"dates",desc:"<pre>当前状态完整对象\n{\n    start: 'Date，开始时间',\n    startStr: 'string，dates.startStr == start',\n    end: 'Date，结束时间',\n    endStr: 'string，dates.endStr == end',\n    quickDateKey: 'string，当前匹配的快捷日期key',\n    quickDateText: 'string，当前匹配的快捷日期文案'\n}\n</pre>",type:"object"}]}],supportQuickDates:n})}})});