define("mx-form/examples/10",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example"),i=e("mx-form/index"),n=e("mx-form/validator");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,i,n,c,t){if(a||(a=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,s=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(u,s)}}if(!n){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(o,x)}}if(!t){var d=/[\\'"]/g;t=function(e){return i(e).replace(d,"\\$&")}}var g="",_=e.url,v=e.english,h=e.chinese,f=e.mobile,y=e.currency,z=e.email,b=e.viewId,w=e.text1;return g+='<div mxv mxa="_zs_gallerycg:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycg:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycg:b" class="clearfix"><input mxe="'+l+'_0" mxc="[{p:\'url\',f:{url:true}}]" class="input w200 mr20 mb20" placeholder="url链接" value="'+r(_)+'"/> <input mxe="'+l+'_1" mxc="[{p:\'english\',f:{english:true}}]" class="input w200 mr20 mb20" placeholder="只英文" value="'+r(v)+'"/> <input mxe="'+l+'_2" mxc="[{p:\'chinese\',f:{chinese:true}}]" class="input w200 mr20 mb20" placeholder="只中文" value="'+r(h)+'"/> <input mxe="'+l+'_3" mxc="[{p:\'mobile\',f:{mobile:true}}]" class="input w200 mr20 mb20" placeholder="电话号码" value="'+r(f)+'"/> <input mxe="'+l+'_4" mxc="[{p:\'currency\',f:{currency:true}}]" class="input w200 mr20 mb20" placeholder="金额" value="'+r(y)+'"/> <input mxe="'+l+'_5" mxc="[{p:\'email\',f:{email:true}}]" class="input w200 mr20 mb20" placeholder="邮箱" value="'+r(z)+'"/> <input mxe="'+l+'_6" mxc="[{p:\'email\',f:{email:[true, \'只支持qq邮箱\', [\'qq.com\']]}}]" class="input w200 mr20 mb20" placeholder="指定邮箱校验" value="'+r(z)+'"/></div></div><div mxa="_zs_gallerycg:c" class="_zs_galleryk"><div mxs="_zs_gallerycg:_" class="_zs_galleryi">常用校验</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(b)+'_text_1"><span mxa="_zs_gallerycg:d" class="_zs_galleryn">'+i(w)+'</span><i mxs="_zs_gallerycg:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(b)+'_text_1">\n&lt;input class="input" placeholder="url链接" value="&#123;&#123;:url&#123;url:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只英文" value="&#123;&#123;:english&#123;english:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只中文" value="&#123;&#123;:chinese&#123;chinese:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="电话号码" value="&#123;&#123;:mobile&#123;mobile:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="金额" value="&#123;&#123;:currency&#123;currency:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="邮箱" value="&#123;&#123;:email&#123;email:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="指定邮箱校验" value="&#123;&#123;:email&#123;email:[true, \'只支持qq邮箱\', [\'qq.com\']]&#125;&#125;&#125;"/&gt;\n        </pre></div></div>'},mixins:[i,n],render:function(){this.updater.digest()}})});