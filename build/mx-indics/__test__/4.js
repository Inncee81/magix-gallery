define("mx-indics/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");n.exports=a.extend({tmpl:function(e,_,n,a,d,i,t,l){if(n||(n=e),!d){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,r=function(e){return"&"+s[e]+";"};d=function(e){return""+(null==e?"":e)},a=function(e){return d(e).replace(m,r)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},y=/[!')(*]/g;i=function(e){return encodeURIComponent(d(e)).replace(y,x)}}if(!l){var v=/[\\'"]/g;l=function(e){return d(e).replace(v,"\\$&")}}t||(t=function(e,_,n,a){for(a=e[u];--a;)if(e[n=u+a]===_)return n;return e[n=u+e[u]++]=_,n});var p,o,g,u="",f="",I=e.viewId,z=e.text1,h=e.text2;try{f+='<div mxa="_zs_gallerycO:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerycO:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallerycO:b" class="clearfix mb20"><div mxa="_zs_gallerycO:c" class="_zs_gallery___test___layout_-half"><div mxs="_zs_gallerycO:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 无分组</div></div><div mx-view="mx-indics/index?fields=',g=10,o="@[{\n                        id: 1, name: '消耗'\n                    }, {\n                        id: 2, name: '展现量'\n                    }, {\n                        id: 3, name: '点击量'\n                    }, {\n                        id: 4, name: '点击率'\n                    }, {\n                        id: 5, name: '平均点击单价'\n                    }, {\n                        id: 6, name: '点击转化率'\n                    }]",f+=(p="<%@[{            id: 1, name: '消耗'        }, {            id: 2, name: '展现量'        }, {            id: 3, name: '点击量'        }, {            id: 4, name: '点击率'        }, {            id: 5, name: '平均点击单价'        }, {            id: 6, name: '点击转化率'        }]%>",t(n,[{id:1,name:"消耗"},{id:2,name:"展现量"},{id:3,name:"点击量"},{id:4,name:"点击率"},{id:5,name:"平均点击单价"},{id:6,name:"点击转化率"}])+"&valueKey=id&textKey=name&defaults="),g=25,o="@[1,2,3]",f+=(p="<%@[1, 2, 3]%>",t(n,[1,2,3])+'"></div></div><div mxa="_zs_gallerycO:d" class="_zs_gallery___test___layout_-half"><div mxs="_zs_gallerycO:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 有分组（parents的key，value跟fields保持一致）</div></div><div mx-view="mx-indics/index?parents='),g=34,o="@[{\n                        id: 1, name: '组1'\n                    }, {\n                        id: 2, name: '组2'\n                    }]",f+=(p="<%@[{            id: 1, name: '组1'        }, {            id: 2, name: '组2'        }]%>",t(n,[{id:1,name:"组1"},{id:2,name:"组2"}])+"&fields="),g=39,o="@[{\n                        id: 1, name: '消耗', pId: 1\n                    }, {\n                        id: 2, name: '展现量', pId: 1\n                    }, {\n                        id: 3, name: '点击量', pId: 1\n                    }, {\n                        id: 4, name: '点击率', pId: 1\n                    }, {\n                        id: 5, name: '平均点击单价', pId: 2\n                    }, {\n                        id: 6, name: '点击转化率', pId: 2\n                    }]",f+=(p="<%@[{            id: 1, name: '消耗', pId: 1        }, {            id: 2, name: '展现量', pId: 1        }, {            id: 3, name: '点击量', pId: 1        }, {            id: 4, name: '点击率', pId: 1        }, {            id: 5, name: '平均点击单价', pId: 2        }, {            id: 6, name: '点击转化率', pId: 2        }]%>",t(n,[{id:1,name:"消耗",pId:1},{id:2,name:"展现量",pId:1},{id:3,name:"点击量",pId:1},{id:4,name:"点击率",pId:1},{id:5,name:"平均点击单价",pId:2},{id:6,name:"点击转化率",pId:2}])+"&parentKey=pId&valueKey=id&textKey=name&defaults="),g=55,o="@[1,2,3]",f+=(p="<%@[1, 2, 3]%>",t(n,[1,2,3])+'"></div></div></div></div><div mxa="_zs_gallerycO:e" class="clearfix"><div mxa="_zs_gallerycO:f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerycO:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),g=62,o="=viewId",f+=(p="<%!$eu(viewId)%>",i(I)+'_text_1"><span mxa="_zs_gallerycO:g" class="_zs_gallery___test___layout_-desc-tip">'),g=64,o="!text1",f+=(p="<%!text1%>",d(z)+'</span><i mxs="_zs_gallerycO:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=67,o="=viewId",f+=(p="<%=viewId%>",a(I)+'_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\'\n    &#125;, &#123;\n        id: 2, name: \'展现量\'\n    &#125;, &#123;\n        id: 3, name: \'点击量\'\n    &#125;, &#123;\n        id: 4, name: \'点击率\'\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\'\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\'\n    &#125;]&#125;&#125;" \n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div><div mxa="_zs_gallerycO:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerycO:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode='),g=89,o="=viewId",f+=(p="<%!$eu(viewId)%>",i(I)+'_text_2"><span mxa="_zs_gallerycO:i" class="_zs_gallery___test___layout_-desc-tip">'),g=91,o="!text2",f+=(p="<%!text2%>",d(h)+'</span><i mxs="_zs_gallerycO:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=94,o="=viewId",f+=(p="<%=viewId%>",a(I)+"_text_2\">\n&lt;mx-indics \n    parents=\"&#123;&#123;@[&#123;\n        id: 1, name: '组1'\n    &#125;, &#123;\n        id: 2, name: '组2'\n    &#125;]&#125;&#125;\" \n    fields=\"&#123;&#123;@[&#123;\n        id: 1, name: '消耗', pId: 1\n    &#125;, &#123;\n        id: 2, name: '展现量', pId: 1\n    &#125;, &#123;\n        id: 3, name: '点击量', pId: 1\n    &#125;, &#123;\n        id: 4, name: '点击率', pId: 1\n    &#125;, &#123;\n        id: 5, name: '平均点击单价', pId: 2\n    &#125;, &#123;\n        id: 6, name: '点击转化率', pId: 2\n    &#125;]&#125;&#125;\" \n    parent-key=\"pId\"\n    value-key=\"id\"\n    text-key=\"name\"\n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"/&gt;\n            </pre></div></div></div>")}catch(e){var w="render view error:"+(e.message||e);throw o&&(w+="\r\n\tsrc art:{{"+o+"}}\r\n\tat line:"+g),w+="\r\n\t"+(o?"translate to:":"expr:"),w+=p+"\r\n\tat file:mx-indics/__test__/4.html"}return f},render:function(){this.updater.digest({})}})});