define("mx-editor/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");n.exports=t.extend({tmpl:function(e,i,n,t,l,s,r,_){if(n||(n=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(d,c)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!_){var v=/[\\'"]/g;_=function(e){return l(e).replace(v,"\\$&")}}r||(r=function(e,i,n,t){for(t=e[p];--t;)if(e[n=p+t]===i)return n;return e[n=p+e[p]++]=i,n});var p="",u="",g=e.content,y=e.viewId,f=e.text1;return u+='<div mxa="_zs_gallerybp:_" class="_zs_galleryg"><div mxa="_zs_gallerybp:a" class="_zs_galleryj"><div mxs="_zs_gallerybp:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>纯文案编辑</div><div>输入框小尺寸 + 自定义宽度</div></div></div><div mxa="_zs_gallerybp:b" class="mb20"><span mxs="_zs_gallerybp:a" class="color-9">当前内容：</span><span>'+t(g)+'（要求必填且不小于200）</span></div><div mxa="_zs_gallerybp:c" class="mb20"><div mx-view="mx-editor/index?width=200&small=true&content='+s(g)+"&rules="+r(n,{required:!0,min:[200,"不小于200"]})+'"></div></div></div><div mxa="_zs_gallerybp:d" class="_zs_galleryk"><div mxs="_zs_gallerybp:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_gallerybp:e" class="_zs_galleryn">'+l(f)+'</span><i mxs="_zs_gallerybp:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({content:2e3})},"change<edit>":function(e){this.updater.digest({content:e.editText})}})});