define("mx-dropdown/__test__/multiple",["magix","$","__test__/subs","mx-title/second","./7","./11","./16","./13","./8","./9","./10","./18","__test__/api"],(e,d,t)=>{e("__test__/subs"),e("mx-title/second"),e("./7"),e("./11"),e("./16"),e("./13"),e("./8"),e("./9"),e("./10"),e("./18"),e("__test__/api");var i=e("magix");e("$");t.exports=i.View.extend({tmpl:function(e,d,t,i,_,n,s,o){if(t||(t=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,a=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},i=function(e){return _(e).replace(m,a)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return v[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(x,l)}}if(!o){var y=/[\\'"]/g;o=function(e){return _(e).replace(y,"\\$&")}}s||(s=function(e,d,t,i){for(i=e[c];--i;)if(e[t=c+i]===d)return t;return e[t=c+e[c]++]=d,t});var c="",p="",u=e.viewId,f=e.options;return p+='<div mxv mxa="_zs_galleryaC:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(t,[{name:"使用示例",key:u+"_demo",subs:[{name:"分组",key:u+"_demo7"},{name:"hover展开",key:u+"_demo13"},{name:"selected",key:u+"_demo8"},{name:"禁选",key:u+"_demo11"},{name:"自定义key",key:u+"_demo9"},{name:"带搜索框",key:u+"_demo16"},{name:"向上展开",key:u+"_demo18"}]},{name:"API",key:u+"_api"}])+'"></div><div id="'+i(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaC:a" class="clearfix mb20"><div mxa="_zs_galleryaC:b" class="_zs_galleryc"><div mx-view="mx-dropdown/__test__/7" id="'+i(u)+'_demo7"></div><div mx-view="mx-dropdown/__test__/11" id="'+i(u)+'_demo11"></div><div mx-view="mx-dropdown/__test__/16" id="'+i(u)+'_demo16"></div></div><div mxa="_zs_galleryaC:c" class="_zs_galleryc"><div mx-view="mx-dropdown/__test__/13" id="'+i(u)+'_demo13"></div><div mx-view="mx-dropdown/__test__/8" id="'+i(u)+'_demo8"></div><div mx-view="mx-dropdown/__test__/9" id="'+i(u)+'_demo9"></div><div mxs="_zs_galleryaC:_" mx-view="mx-dropdown/__test__/10"></div><div mx-view="mx-dropdown/__test__/18" id="'+i(u)+'_demo18"></div></div></div><div id="'+i(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(t,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'列表数组<br/>可为简单数组或[1,2,3]<br/>或对象数组，如[{id:1,text:"a"}]',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔"},{key:"trigger-type",desc:"浮层唤起方式，可选值：<br/>点击（click）<br/>鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"need-all",desc:"多选下拉框是否需要全选功能，默认true",type:"boolean",def:"true"},{key:"height",desc:"下拉框最大高度",type:"number",def:"400"},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;",type:"",def:""},{key:"name",desc:"全选时候的提示文案，比如“全部XX”",type:"string",def:""},{key:"empty-text",desc:"没有选择时的提示文案",type:"string",def:""},{key:"placement",desc:"可选内容展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"}]})}})});