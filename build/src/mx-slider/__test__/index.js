define("mx-slider/__test__/index",["magix","$","mx-title/second","./1","./5","./2","./3","./4","__test__/api"],(e,t,i)=>{e("mx-title/second"),e("./1"),e("./5"),e("./2"),e("./3"),e("./4"),e("__test__/api");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,s,n,r,_){if(i||(i=e),!s){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,c=function(e){return"&"+l[e]+";"};s=function(e){return""+(null==e?"":e)},function(e){return s(e).replace(v,c)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},a=function(e){return m[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(x,a)}}if(!_){var o=/[\\'"]/g;_=function(e){return s(e).replace(o,"\\$&")}}r||(r=function(e,t,i,d){for(d=e[p];--d;)if(e[i=p+d]===t)return i;return e[i=p+e[p]++]=t,i});var p="",f="";return f+='<div mxs="_zs_gallerycv:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycv:a" class="clearfix mb20"><div class="_zs_galleryc"><div mx-view="mx-slider/__test__/1"></div><div mx-view="mx-slider/__test__/5"></div></div><div class="_zs_galleryc"><div mx-view="mx-slider/__test__/2"></div><div mx-view="mx-slider/__test__/3"></div><div mx-view="mx-slider/__test__/4"></div></div></div><div mxs="_zs_gallerycv:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+r(i,e.options)+'"></div>'},render:function(){this.updater.digest({options:[{key:"min",desc:"区间最小值，保留小数位同step",type:"number",def:0},{key:"max",desc:"区间最大值，保留小数位同step",type:"number",def:100},{key:"step",desc:"步长，滑动时变化的刻度",type:"number",def:1},{key:"value",desc:"滑块当前值，超过可选范围会根据可选范围进行修正",type:"string",def:"默认取中间值"},{key:"need-input",desc:"是否需要输入框，横向时才有，width不包含输入框宽度",type:"boolean",def:"false"},{key:"width",desc:"滑块宽度，横向时可设置",type:"number",def:280},{key:"vertical",desc:"是否垂直",type:"boolean",def:"false"},{key:"height",desc:"滑块高度，纵向时（vertical=true）可设置",type:"number",def:280},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-slider mx-disabled/&gt;",type:"",def:""},{key:"tip",desc:"提示文案",type:"",def:""}]})}})});