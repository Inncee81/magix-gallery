define("__test__/pro/init",["magix","$","mx-effects/notice","../subs","mx-title/second","./init-steps","./init-dir"],(e,t,i)=>{e("mx-effects/notice"),e("../subs"),e("mx-title/second"),e("./init-steps"),e("./init-dir");var r=e("magix");e("$");i.exports=r.View.extend({tmpl:function(e,t,i,r,n,o,s,a){if(i||(i=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(c,d)}}if(!o){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return m[e]},x=/[!')(*]/g;o=function(e){return encodeURIComponent(n(e)).replace(x,p)}}if(!a){var _=/[\\'"]/g;a=function(e){return n(e).replace(_,"\\$&")}}s||(s=function(e,t,i,r){for(r=e[f];--r;)if(e[i=f+r]===t)return i;return e[i=f+e[f]++]=t,i});var f="",u="",E=e.contents,g=e.viewId;return u+='<div class="mb20 mr20" mx-view="mx-effects/notice?border=true&icon=false&type=highlight&content='+o(E)+'"></div><div mxa="_zs_gallerym:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"创建步骤",key:g+"_steps"},{name:"目录结构说明",key:g+"_dir"}])+'"></div><div id="'+r(g)+'_steps" mx-view="mx-title/second?content=%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4&tip=magix-cli%E5%B7%A5%E5%85%B7%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%3C%2Fa%3E"></div><div mxs="_zs_gallerym:_" mx-view="__test__/pro/init-steps" class="pr20"></div><div id="'+r(g)+'_dir" mx-view="mx-title/second?content=%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E&tip=%E4%BA%91%E9%9B%80%E6%96%87%E6%A1%A3%E5%9C%B0%E5%9D%80%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%3C%2Fa%3E"></div><div mxs="_zs_gallerym:a" mx-view="__test__/pro/init-dir"></div></div>'},render:function(){this.updater.digest({viewId:this.id,contents:['1. 依赖 <a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a> 命令行工具快速创建magix项目',"2. 脚手架中的通用吊底数据配置在alp，Lego2渲染层对jsonp进行referer校验，本地测试的时候需要绑个类似于 xxx.taobao.com 的host，否则不会正常返回。"].join("<br />")})}})});