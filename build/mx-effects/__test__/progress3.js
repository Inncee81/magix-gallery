define("mx-effects/__test__/progress3",["magix","$","__test__/subs","mx-title/second","./25","./26","./19","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./25"),e("./26"),e("./19"),e("__test__/api");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,d,s,r){if(i||(i=e),!_){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(e){return"&"+m[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(a,o)}}if(!d){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},l=/[!')(*]/g;d=function(e){return encodeURIComponent(_(e)).replace(l,c)}}if(!r){var f=/[\\'"]/g;r=function(e){return _(e).replace(f,"\\$&")}}s||(s=function(e,t,i,n){for(n=e[p];--n;)if(e[i=p+n]===t)return i;return e[i=p+e[p]++]=t,i});var y,w,u,p="",x="",I=e.viewId,k=e.options;try{x+='<div mxv mxa="_zs_galleryb5:_" class="pr pr120"><div mx-view="__test__/subs?list=',u=2,w="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '自定义宽度',\n            key: viewId + '_demo25'\n        },{\n            name: '无文案',\n            key: viewId + '_demo26'\n        },{\n            name: '精度',\n            key: viewId + '_demo19'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }]",x+=(y="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '自定义宽度',                    key: viewId + '_demo25'                }, {                    name: '无文案',                    key: viewId + '_demo26'                }, {                    name: '精度',                    key: viewId + '_demo19'                }]        }, {            name: 'API',            key: viewId + '_api'        }]%>",s(i,[{name:"使用示例",key:I+"_demo",subs:[{name:"自定义宽度",key:I+"_demo25"},{name:"无文案",key:I+"_demo26"},{name:"精度",key:I+"_demo19"}]},{name:"API",key:I+"_api"}])+'"></div><div id="'),u=19,w="=viewId",x+=(y="<%=viewId%>",n(I)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb5:a" class="clearfix mb20"><div mxa="_zs_galleryb5:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/25" id="'),u=22,w="=viewId",x+=(y="<%=viewId%>",n(I)+'_demo25"></div><div mx-view="mx-effects/__test__/26" id="'),u=23,w="=viewId",x+=(y="<%=viewId%>",n(I)+'_demo26"></div></div><div mxa="_zs_galleryb5:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/19" id="'),u=26,w="=viewId",x+=(y="<%=viewId%>",n(I)+'_demo19"></div></div></div><div id="'),u=30,w="=viewId",x+=(y="<%=viewId%>",n(I)+'_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="__test__/api?options='),u=31,w="@options",x+=(y="<%@options%>",s(i,k)+'"></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw w&&(b+="\r\n\tsrc art:{{"+w+"}}\r\n\tat line:"+u),b+="\r\n\t"+(w?"translate to:":"expr:"),b+=y+"\r\n\tat file:mx-effects/__test__/progress3.html"}return x},render:function(){this.updater.digest({viewId:this.id,options:[{key:"num",desc:"当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数",type:"number",def:""},{key:"color",desc:"自定义颜色，#4d7fff 或者 rgb(77, 127, 255)",type:"string",def:"品牌色"},{key:"text",desc:"是否显示比例文案",type:"boolean",def:!0},{key:"width",desc:"圆形直径",type:"number",def:"120"},{key:"border",desc:"圆形边宽",type:"number",def:"8"}]})}})});