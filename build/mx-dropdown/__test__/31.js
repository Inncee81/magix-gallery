define("mx-dropdown/__test__/31",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,_)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");_.exports=a.extend({tmpl:function(t,e,_,a,s,l,i,n){if(_||(_=t),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(t){return"&"+r[t]+";"};s=function(t){return""+(null==t?"":t)},a=function(t){return s(t).replace(d,x)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return o[t]},c=/[!')(*]/g;l=function(t){return encodeURIComponent(s(t)).replace(c,p)}}if(!n){var g=/[\\'"]/g;n=function(t){return s(t).replace(g,"\\$&")}}i||(i=function(t,e,_,a){for(a=t[y];--a;)if(t[_=y+a]===e)return _;return t[_=y+t[y]++]=e,_});var m,u,v,y="",h="",w=t.list,z=t.viewId,f=t.text1,N=t.text2;try{h+='<div mxv mxa="_zs_gallerya::_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerya::a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya::_" class="mb10"><span class="color-9">说明：</span>选项包含图片内容</div><div mxv mxa="_zs_gallerya::b" class="mb20"><div mxv="list" class="w200" mx-view="mx-dropdown/index?list=',v=9,u="@list",h+=(m="<%@list%>",i(_,w)+'"></div></div></div><div mxa="_zs_gallerya::c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya::a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=14,u="=viewId",h+=(m="<%!$eu(viewId)%>",l(z)+'_text_1"><span mxa="_zs_gallerya::d" class="_zs_gallery___test___layout_-desc-tip">'),v=16,u="!text1",h+=(m="<%!text1%>",s(f)+'</span><i mxs="_zs_gallerya::b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=19,u="=viewId",h+=(m="<%=viewId%>",a(z)+'_text_1">\n&lt;mx-dropdown class="w200" \n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-dropdown&gt;\n        </pre></div><div mxa="_zs_gallerya::e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya::c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='),v=26,u="=viewId",h+=(m="<%!$eu(viewId)%>",l(z)+'_text_2"><span mxa="_zs_gallerya::f" class="_zs_gallery___test___layout_-desc-tip">'),v=28,u="!text2",h+=(m="<%!text2%>",s(N)+'</span><i mxs="_zs_gallerya::b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=31,u="=viewId",h+=(m="<%=viewId%>",a(z)+'_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: \'&lt;img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/O1CN01yAamtY2FVNaDTQjt2_!!0-saturn_solar.jpg"/&gt;2019夏装新款韩版女装宽松打底潮上衣短袖T恤OM80147婏\'\n        &#125;, &#123;\n            value: 2,\n            text: \'&lt;img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i3/13498885/O1CN01Zo87cQ2FVNaHt6Bt2_!!0-saturn_solar.jpg"/&gt;韩都衣舍2019夏装新款女装韩版显瘦打底衫圆领套头T恤IG8397僥\'\n        &#125;, &#123;\n            value: 3,\n            text: \'&lt;img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/TB2NE.eoA9WBuNjSspeXXaz5VXa_!!0-saturn_solar.jpg"/&gt;韩都衣舍2019夏装新款女装韩版宽松打底上衣潮短袖T恤JW12746筱\'\n        &#125;];\n        this.updater.digest(&#123;\n            list: list\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>')}catch(t){var I="render view error:"+(t.message||t);throw u&&(I+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+v),I+="\r\n\t"+(u?"translate to:":"expr:"),I+=m+"\r\n\tat file:mx-dropdown/__test__/31.html"}return h},render:function(){this.updater.digest({list:[{value:1,text:'<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/O1CN01yAamtY2FVNaDTQjt2_!!0-saturn_solar.jpg"/>2019夏装新款韩版女装宽松打底潮上衣短袖T恤OM80147婏'},{value:2,text:'<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i3/13498885/O1CN01Zo87cQ2FVNaHt6Bt2_!!0-saturn_solar.jpg"/>韩都衣舍2019夏装新款女装韩版显瘦打底衫圆领套头T恤IG8397僥'},{value:3,text:'<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/TB2NE.eoA9WBuNjSspeXXaz5VXa_!!0-saturn_solar.jpg"/>韩都衣舍2019夏装新款女装韩版宽松打底上衣潮短袖T恤JW12746筱'}]})}})});