define("mx-error/__test__/index",["magix","__test__/example","$","mx-title/second","../index","mx-copy/index","__test__/hl","__test__/api"],(e,s,_)=>{e("mx-title/second"),e("../index"),e("mx-copy/index"),e("__test__/hl"),e("__test__/api");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,s,_,l,i,a,r,t){if(_||(_=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,n=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(x,n)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return c[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(m,v)}}if(!t){var y=/[\\'"]/g;t=function(e){return i(e).replace(y,"\\$&")}}r||(r=function(e,s,_,l){for(l=e[g];--l;)if(e[_=g+l]===s)return _;return e[_=g+e[g]++]=s,_});var g="",o="",z=e.viewId,p=e.text1,E=e.text3,b=e.text2,f=e.text5,u=e.text4,w=e.options;return o+='<div mxs="_zs_gallerybE:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybE:_" class="clearfix"><div mxa="_zs_gallerybE:a" class="_zs_gallerye"><div mxa="_zs_gallerybE:b" class="_zs_galleryh"><div mxs="_zs_gallerybE:a" class="_zs_galleryk"><div mx-view="mx-error/index"></div></div><div mxa="_zs_gallerybE:c" class="_zs_galleryl"><div mxs="_zs_gallerybE:b" class="_zs_galleryj">默认404</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_1"><span mxa="_zs_gallerybE:d" class="_zs_galleryo">'+i(p)+'</span><i mxs="_zs_gallerybE:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_1">\n&lt;mx-error/&gt;</pre></div></div><div mxa="_zs_gallerybE:e" class="_zs_galleryh"><div mxs="_zs_gallerybE:d" class="_zs_galleryk"><div mx-view="mx-error/index?tip=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></div></div><div mxa="_zs_gallerybE:f" class="_zs_galleryl"><div mxs="_zs_gallerybE:e" class="_zs_galleryj">404自定义提示</div><div class="_zs_gallerym" mx-success="'+s+'done({id:3})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_3"><span mxa="_zs_gallerybE:g" class="_zs_galleryo">'+i(E)+'</span><i mxs="_zs_gallerybE:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_3">\n&lt;mx-error tip="自定义提示信息"/&gt;</pre></div></div></div><div mxa="_zs_gallerybE:h" class="_zs_gallerye"><div mxa="_zs_gallerybE:i" class="_zs_galleryh"><div mxs="_zs_gallerybE:f" class="_zs_galleryk"><div mx-view="mx-error/index?type=502"></div></div><div mxa="_zs_gallerybE:j" class="_zs_galleryl"><div mxs="_zs_gallerybE:g" class="_zs_galleryj">502提示</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_2"><span mxa="_zs_gallerybE:k" class="_zs_galleryo">'+i(b)+'</span><i mxs="_zs_gallerybE:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_2">\n&lt;mx-error type="502"/&gt;</pre></div></div><div mxa="_zs_gallerybE:l" class="_zs_galleryh"><div mxs="_zs_gallerybE:h" class="_zs_galleryk"><div mx-view="mx-error/index?type=500"></div></div><div mxa="_zs_gallerybE:m" class="_zs_galleryl"><div mxs="_zs_gallerybE:i" class="_zs_galleryj">500提示</div><div class="_zs_gallerym" mx-success="'+s+'done({id:5})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_5"><span mxa="_zs_gallerybE:n" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_gallerybE:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_5">\n&lt;mx-error type="500"/&gt;</pre></div></div><div mxa="_zs_gallerybE:o" class="_zs_galleryh"><div mxs="_zs_gallerybE:j" class="_zs_galleryk"><div mx-view="mx-error/index?type=502&tip=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA&btns=false"></div></div><div mxa="_zs_gallerybE:p" class="_zs_galleryl"><div mxs="_zs_gallerybE:k" class="_zs_galleryj">502自定义提示 + 不要按钮</div><div class="_zs_gallerym" mx-success="'+s+'done({id:4})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_4"><span mxa="_zs_gallerybE:q" class="_zs_galleryo">'+i(u)+'</span><i mxs="_zs_gallerybE:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_4">\n&lt;mx-error type="502" tip="自定义提示" btns="false"/&gt;</pre></div></div></div></div><div id="'+l(z)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+r(_,w)+'"></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"type",desc:"异常类型，可选404，500，502",type:"string",def:"404"},{key:"tip",desc:"自定义提示信息",type:"string",def:"404：抱歉，您查看的页面不存在或无权限查看当前页面<br/>500：Internal Server Error<br/>502：Bad Gateway"},{key:"btns",desc:"是否需要返回首页 + 返回上一页按钮",type:"boolean",def:"true"}]})}})});