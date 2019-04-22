define("mx-form/__test__/mixins",["magix","mx-effects/notice","__test__/subs","mx-title/second","./2","./11","./12","./13","./9","./14","./3","./5","./6","./4","./7","./16","./8","./15","./10"],(t,d,e)=>{t("mx-effects/notice"),t("__test__/subs"),t("mx-title/second"),t("./2"),t("./11"),t("./12"),t("./13"),t("./9"),t("./14"),t("./3"),t("./5"),t("./6"),t("./4"),t("./7"),t("./16"),t("./8"),t("./15"),t("./10");var r=t("magix");e.exports=r.View.extend({tmpl:function(t,d,e,r,i,m,n,_){if(e||(e=t),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,a=function(t){return"&"+o[t]+";"};i=function(t){return""+(null==t?"":t)},r=function(t){return i(t).replace(v,a)}}if(!m){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(t){return s[t]},l=/[!')(*]/g;m=function(t){return encodeURIComponent(i(t)).replace(l,u)}}if(!_){var b=/[\\'"]/g;_=function(t){return i(t).replace(b,"\\$&")}}n||(n=function(t,d,e,r){for(r=t[x];--r;)if(t[e=x+r]===d)return e;return t[e=x+t[x]++]=d,e});var x="",c="",f=t.viewId;return c+='<div mxs="_zs_galleryb{:_" class="mb20 mr20" mx-view="mx-effects/notice?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E9%BB%98%E8%AE%A4%E8%AE%BE%E7%BD%AE%20pointer-events%3A%20none%3B%20%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E4%B8%AD%E5%8C%85%E5%90%AB%E5%8F%AF%E7%82%B9%E5%87%BB%E5%86%85%E5%AE%B9%E6%97%B6%EF%BC%8C%E8%AF%B7%E8%87%AA%E8%A1%8C%E6%8C%87%E5%AE%9A%20pointer-events%3A%20auto%3B"></div><div mxa="_zs_galleryb{:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(e,[{name:"使用示例",key:f+"_demo",subs:[{name:"必填",key:f+"_demo2"},{name:"checkbox",key:f+"_demo11"},{name:"radio",key:f+"_demo12"},{name:"dropdown必选",key:f+"_demo13"},{name:"refresh",key:f+"_demo9"},{name:"动态添加",key:f+"_demo14"},{name:"正则",key:f+"_demo3"},{name:"字个数",key:f+"_demo5"},{name:"字符个数",key:f+"_demo6"},{name:"数字",key:f+"_demo4"},{name:"数字范围",key:f+"_demo7"},{name:"节点不重复",key:f+"_demo16"},{name:"节点一致",key:f+"_demo8"},{name:"taginput",key:f+"_demo15"},{name:"url",key:f+"_demo10"},{name:"中英文",key:f+"_demo10"},{name:"电话号码",key:f+"_demo10"},{name:"email",key:f+"_demo10"},{name:"金额",key:f+"_demo10"}]},{name:"API",key:f+"_api"}])+'"></div><div id="'+r(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb{:a" class="clearfix mb20"><div mx-view="mx-form/__test__/2" id="'+r(f)+'_demo2"></div><div mx-view="mx-form/__test__/11" id="'+r(f)+'_demo11"></div><div mx-view="mx-form/__test__/12" id="'+r(f)+'_demo12"></div><div mx-view="mx-form/__test__/13" id="'+r(f)+'_demo13"></div><div mx-view="mx-form/__test__/9" id="'+r(f)+'_demo9"></div><div mx-view="mx-form/__test__/14" id="'+r(f)+'_demo14"></div><div mx-view="mx-form/__test__/3" id="'+r(f)+'_demo3"></div><div mx-view="mx-form/__test__/5" id="'+r(f)+'_demo5"></div><div mx-view="mx-form/__test__/6" id="'+r(f)+'_demo6"></div><div mx-view="mx-form/__test__/4" id="'+r(f)+'_demo4"></div><div mx-view="mx-form/__test__/7" id="'+r(f)+'_demo7"></div><div mx-view="mx-form/__test__/16" id="'+r(f)+'_demo16"></div><div mx-view="mx-form/__test__/8" id="'+r(f)+'_demo8"></div><div mx-view="mx-form/__test__/15" id="'+r(f)+'_demo15"></div><div mx-view="mx-form/__test__/10" id="'+r(f)+'_demo10"></div></div><div id="'+r(f)+"_api\" mx-view=\"mx-title/second?content=API\"></div><div mxs=\"_zs_galleryb{:a\" class=\"pr20 mb40\"><table class=\"table _zs_galleryq\"><thead><tr><th width=\"100\">可配参数</th><th width=\"200\">说明</th><th width=\"100\">类型</th><th width=\"120\">默认值</th></tr></thead><tbody><tr><td>refresh</td><td>数据变化是否需要更新view，调用view.digest</td><td>boolean</td><td>false</td></tr><tr><td>placement</td><td>错误信息展示位置，可配置right，bottom</td><td>string</td><td>bottom</td></tr><tr><td>currency</td><td>金额<br/>currency: true<br/>currency: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>url</td><td>合法链接<br/>url: true<br/>url: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>english</td><td>英文<br/>english: true<br/>english: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>email</td><td>邮箱校验<br/>email: true<br/>email: [true, '自定义提示（可选）', 'domains[array]（指定邮箱，可选）']</td><td></td><td></td></tr><tr><td>chinese</td><td>中文<br/>chinese: true<br/>chinese: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>mobile</td><td>手机号码<br/>mobile: true<br/>mobile: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>number</td><td>是否为数字<br/>number: true</td><td></td><td></td></tr><tr><td>pattern</td><td>正则<br/>pattern: ^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$<br/>pattern: ['^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$', '自定义错误提示']</td><td></td><td></td></tr><tr><td>required</td><td>必填<br/>required: true<br/>required: [true, '必选']</td><td></td><td></td></tr><tr><td>trim</td><td>不能有空格<br/>trim: true<br/>trim: [true, '不能包含空格']</td><td></td><td></td></tr><tr><td>int</td><td>整数<br/>int: true</td><td></td><td></td></tr><tr><td>posint</td><td>正整数<br/>posint: true<br/>posint: [true, '自定义提示']</td><td></td><td></td></tr><tr><td>negint</td><td>负整数<br/>negint: true<br/>negint: [true, '自定义提示']</td><td></td><td></td></tr><tr><td>length</td><td>字个数范围<br/>length: [2, 8]</td><td></td><td></td></tr><tr><td>minlength</td><td><div>最少多少个字</div><div>minlength: 2</div><div>minlength: [2, 自定义提示文案]</div></td><td></td><td></td></tr><tr><td>maxlength</td><td><div>最多多少个字</div><div>maxlength: 8</div><div>maxlength: [8, 自定义提示文案]</div></td><td></td><td></td></tr><tr><td>blength</td><td>字符个数范围，一个汉字两个字符<br/>blength: [2, 8]</td><td></td><td></td></tr><tr><td>bminlength</td><td>最少多少个字符，一个汉字两个字符<br/>bminlength: 2<br/>bminlength: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>bmaxlength</td><td>最多多少个字符，一个汉字两个字符<br/>bmaxlength: 8<br/>bmaxlength: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>unequalto</td><td><div>与某些节点内容不一致</div><div>unequalto: 'id1,id2'</div><div>unequalto: ['id1,id2', 自定义提示]</div></td><td></td><td></td></tr><tr><td>equalto</td><td>与某个节点内容一致<br/>equalto: id<br/>equalto: [id, 自定义提示]</td><td></td><td></td></tr><tr><td>range</td><td>数字范围<br/>range: [2, 8, 自定义提示文案（可选）]</td><td></td><td></td></tr><tr><td>min</td><td>不能小于某个数字<br/>min: 2<br/>min: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>max</td><td>不能大于某个数字<br/>max: 8<br/>max: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>warn</td><td><div>警告类信息，对象</div><div>必然是在valid=true的前提下才会有</div><div><pre>warn: {\n    min: [2, 自定义提示文案]\n}</pre></div></td><td></td><td></td></tr></tbody></table></div></div>"},render:function(){this.updater.digest({viewId:this.id})}})});