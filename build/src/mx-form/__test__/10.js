define("mx-form/__test__/10",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,r)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example"),t=e("mx-form/index"),i=e("mx-form/validator");e("$");r.exports=a.extend({tmpl:function(e,l,r,a,t,i,n,u){if(r||(r=e),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+s[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(c,m)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return p[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(x,_)}}if(!u){var o=/[\\'"]/g;u=function(e){return t(e).replace(o,"\\$&")}}var d="",v=e.url,g=e.english,h=e.chinese,f=e.mobile,y=e.currency,b=e.email,z=e.viewId,w=e.text1;return d+='<div mxv mxa="_zs_galleryb[:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb[:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb[:b" class="clearfix"><input mxe="'+l+'_0" mxc="[{p:\'url\',f:{url:true}}]" class="input w200 mr20 mb20" placeholder="url链接" value="'+a(v)+'"/> <input mxe="'+l+'_1" mxc="[{p:\'english\',f:{english:true}}]" class="input w200 mr20 mb20" placeholder="只英文" value="'+a(g)+'"/> <input mxe="'+l+'_2" mxc="[{p:\'chinese\',f:{chinese:true}}]" class="input w200 mr20 mb20" placeholder="只中文" value="'+a(h)+'"/> <input mxe="'+l+'_3" mxc="[{p:\'mobile\',f:{mobile:true}}]" class="input w200 mr20 mb20" placeholder="电话号码" value="'+a(f)+'"/> <input mxe="'+l+'_4" mxc="[{p:\'currency\',f:{currency:true}}]" class="input w200 mr20 mb20" placeholder="金额" value="'+a(y)+'"/> <input mxe="'+l+'_5" mxc="[{p:\'email\',f:{email:true}}]" class="input w200 mr20 mb20" placeholder="邮箱" value="'+a(b)+'"/> <input mxe="'+l+'_6" mxc="[{p:\'email\',f:{email:[true, \'只支持qq邮箱\', [\'qq.com\']]}}]" class="input w200 mr20 mb20" placeholder="指定邮箱校验" value="'+a(b)+'"/></div></div><div mxa="_zs_galleryb[:c" class="_zs_galleryk"><div mxs="_zs_galleryb[:_" class="_zs_galleryi">常用校验</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_1"><span mxa="_zs_galleryb[:d" class="_zs_galleryn">'+t(w)+'</span><i mxs="_zs_galleryb[:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+'_text_1">\n&lt;input class="input" placeholder="url链接" value="&#123;&#123;:url&#123;url:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只英文" value="&#123;&#123;:english&#123;english:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只中文" value="&#123;&#123;:chinese&#123;chinese:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="电话号码" value="&#123;&#123;:mobile&#123;mobile:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="金额" value="&#123;&#123;:currency&#123;currency:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="邮箱" value="&#123;&#123;:email&#123;email:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="指定邮箱校验" value="&#123;&#123;:email&#123;email:[true, \'只支持qq邮箱\', [\'qq.com\']]&#125;&#125;&#125;"/&gt;\n        </pre></div></div>'},mixins:[t,i],render:function(){this.updater.digest()}})});