define("mx-btn/examples/index",["magix","$","examples/subs","mx-title/second","./1","./4","./3","./2","./8","./6","./7","./5","examples/api"],(e,d,i)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./4"),e("./3"),e("./2"),e("./8"),e("./6"),e("./7"),e("./5"),e("examples/api");var o=e("magix");e("$");i.exports=o.View.extend({tmpl:function(e,d,i,o,t,m,n,a){if(i||(i=e),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,r=function(e){return"&"+s[e]+";"};t=function(e){return""+(null==e?"":e)},o=function(e){return t(e).replace(l,r)}}if(!m){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},c=/[!')(*]/g;m=function(e){return encodeURIComponent(t(e)).replace(c,x)}}if(!a){var p=/[\\'"]/g;a=function(e){return t(e).replace(p,"\\$&")}}n||(n=function(e,d,i,o){for(o=e[y];--o;)if(e[i=y+o]===d)return i;return e[i=y+e[y]++]=d,i});var y="",f="",_=e.viewId,u=e.options;return f+='<div mxv mxa="_zs_gallery5:_" class="pr pr120"><div mx-view="examples/subs?list='+n(i,[{name:"使用示例",key:_+"_demo",subs:[{name:"品牌色按钮",key:_+"_demo1"},{name:"按钮loading",key:_+"_demo6"},{name:"动态切换",key:_+"_demo7"},{name:"普通按钮",key:_+"_demo2"},{name:"禁用按钮",key:_+"_demo4"},{name:"白色按钮",key:_+"_demo3"},{name:"普通+品牌",key:_+"_demo8"},{name:"自定义按钮",key:_+"_demo5"}]},{name:"API",key:_+"_api"}])+'"></div><div id="'+o(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery5:a" class="clearfix mb20"><div mxa="_zs_gallery5:b" class="_zs_galleryd"><div mx-view="mx-btn/examples/1" id="'+o(_)+'_demo1"></div><div mx-view="mx-btn/examples/4" id="'+o(_)+'_demo4"></div><div mx-view="mx-btn/examples/3" id="'+o(_)+'_demo3"></div><div mx-view="mx-btn/examples/2" id="'+o(_)+'_demo2"></div><div mx-view="mx-btn/examples/8" id="'+o(_)+'_demo8"></div></div><div mxa="_zs_gallery5:c" class="_zs_galleryd"><div mx-view="mx-btn/examples/6" id="'+o(_)+'_demo6"></div><div mx-view="mx-btn/examples/7" id="'+o(_)+'_demo7"></div><div mx-view="mx-btn/examples/5" id="'+o(_)+'_demo5"></div></div></div><div id="'+o(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+n(i,u)+'" class="mb40"></div></div>'},render:function(){var e=this.id;this.updater.digest({viewId:e,options:[{key:"content",desc:"按钮显示文案",type:"string",def:""},{key:"brand",desc:"是否为品牌色按钮",type:"boolean",def:"false"},{key:"white",desc:"是否为白色按钮",type:"boolean",def:"false"},{key:"hollow",desc:"是否为默认普通按钮，hover品牌色按钮",type:"boolean",def:"false"},{key:"disabled",desc:"是否禁用",type:"boolean",def:"false"},{key:"small",desc:"是否为小号尺寸按钮",type:"boolean",def:"false"},{key:"loading",desc:"loading状态，可选dot（三点），circle（圆形转圈）",type:"string",def:""},{key:"color",desc:"按钮背景颜色",type:"合法色值",def:""},{key:"color-hover",desc:"hover按钮背景颜色",type:"合法色值",def:"配置了color才生效，默认=color"},{key:"color-text",desc:"按钮文字颜色",type:"合法色值",def:"配置了color才生效，默认=#ffffff"},{key:"color-hover-text",desc:"hover按钮文案颜色",type:"合法色值",def:"配置了color才生效，默认=color-text"},{key:"tag-content",desc:"打标文案",type:"string",def:""},{key:"tag-color",desc:"打标颜色，品牌色按钮默认红色，禁用按钮默认灰色，其他默认品牌色",type:"合法色值",def:""}]})}})});