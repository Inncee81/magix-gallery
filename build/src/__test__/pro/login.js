define("__test__/pro/login",["magix","$","mx-title/second","./login-email","./login-css","./login-demo"],(i,s,l)=>{i("mx-title/second"),i("./login-email"),i("./login-css"),i("./login-demo");var e=i("magix");i("$");l.exports=e.View.extend({tmpl:function(i,s,l,e,d,n,a,c){if(l||(l=i),!d){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,v=function(i){return"&"+t[i]+";"};d=function(i){return""+(null==i?"":i)},function(i){return d(i).replace(o,v)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(i){return m[i]},_=/[!')(*]/g;n=function(i){return encodeURIComponent(d(i)).replace(_,r)}}if(!c){var g=/[\\'"]/g;c=function(i){return d(i).replace(g,"\\$&")}}return'<div mxs="_zs_galleryv:_" mx-view="mx-title/second?content=%E4%B8%BB%E9%A2%98%E8%89%B2%E4%BF%AE%E6%94%B9%E7%94%B3%E8%AF%B7%E6%AD%A5%E9%AA%A4"></div><div mxs="_zs_galleryv:a" class="mb40"><div class="mb20">1. 发邮件给<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=mardcio" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>苏婳</a>，抄送<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=h02zfdj" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>水寒</a>，邮件内容如下：</div><div class="pl15" mx-view="__test__/pro/login-email"></div></div><div mxs="_zs_galleryv:b" class="mb40"><div class="mb20">2. 其中 css 文件为需要覆盖的样式，将如下示例中的色值替换为本产品线对应的品牌色（#0391f4;）和品牌hover色值（#0383dc;），发布到cdn给到链接即可：</div><div class="pl15" mx-view="__test__/pro/login-css"></div></div><div mxs="_zs_galleryv:c" class="mb40">3. 联系水寒配置登陆框，配置完成那边会邮件回复给到对应的css_style</div><div mxs="_zs_galleryv:d" class="mb40"><div class="mb20">4. 在项目中使用</div><div class="pl15" mx-view="__test__/pro/login-demo"></div></div><div mxs="_zs_galleryv:e" class="mb40">5. 绑定host 140.205.173.181 login.taobao.com 预发进行测试，测试完毕通知上线，注意只有每周二和周四可上线</div>','<div mxs="_zs_galleryv:_" mx-view="mx-title/second?content=%E4%B8%BB%E9%A2%98%E8%89%B2%E4%BF%AE%E6%94%B9%E7%94%B3%E8%AF%B7%E6%AD%A5%E9%AA%A4"></div><div mxs="_zs_galleryv:a" class="mb40"><div class="mb20">1. 发邮件给<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=mardcio" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>苏婳</a>，抄送<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=h02zfdj" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>水寒</a>，邮件内容如下：</div><div class="pl15" mx-view="__test__/pro/login-email"></div></div><div mxs="_zs_galleryv:b" class="mb40"><div class="mb20">2. 其中 css 文件为需要覆盖的样式，将如下示例中的色值替换为本产品线对应的品牌色（#0391f4;）和品牌hover色值（#0383dc;），发布到cdn给到链接即可：</div><div class="pl15" mx-view="__test__/pro/login-css"></div></div><div mxs="_zs_galleryv:c" class="mb40">3. 联系水寒配置登陆框，配置完成那边会邮件回复给到对应的css_style</div><div mxs="_zs_galleryv:d" class="mb40"><div class="mb20">4. 在项目中使用</div><div class="pl15" mx-view="__test__/pro/login-demo"></div></div><div mxs="_zs_galleryv:e" class="mb40">5. 绑定host 140.205.173.181 login.taobao.com 预发进行测试，测试完毕通知上线，注意只有每周二和周四可上线</div>'},render:function(){this.updater.digest()}})});