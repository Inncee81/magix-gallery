define("mx-wanxiang/examples/demo",["magix","$","mx-copy/index","examples/hl"],(a,e,i)=>{a("mx-copy/index"),a("examples/hl");var l=a("magix"),s=(a("$"),l.Router);i.exports=l.View.extend({tmpl:function(a,e,i,l,s,r,d,n){if(i||(i=a),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(a){return"&"+t[a]+";"};s=function(a){return""+(null==a?"":a)},l=function(a){return s(a).replace(c,o)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(a){return v[a]},m=/[!')(*]/g;r=function(a){return encodeURIComponent(s(a)).replace(m,x)}}if(!n){var _=/[\\'"]/g;n=function(a){return s(a).replace(_,"\\$&")}}var g="",p=a.list,f=a.cur,h=a.viewId,u=a.text1;g+='<div mxa="_zs_galleryfh:_" class="pa20"><div mxa="_zs_galleryfh:a" class="_zs_galleryg" style="width: 600px;"><div mxa="_zs_galleryfh:b" class="_zs_galleryj"><div mxs="_zs_galleryfh:_" class="clearfix mb40"><div class="fl">页面展示：</div><div class="fl"><div class="color-brand">注意只在taobao域名下可用</div><div>点击小象logo展开收起问答框</div></div></div><div mxa="_zs_galleryfh:c" class="clearfix mb40"><div mxs="_zs_galleryfh:a" class="fl">当前：</div>';for(var y=0,z=p.length;y<z;y++){g+=" ",f==(b=p[y]).path&&(g+='<div mxa="_zs_galleryfh:d" class="fl"><div>路径：'+l(b.path)+"</div><div>匹配到id："+l(b.id)+"</div><div>"+l(b.tip)+"</div></div>"),g+=" "}g+="</div>";y=0;for(var w=p.length;y<w;y++){var b=p[y];g+='<div mxa="_zs_galleryfh:e" class="mb20">'+l(y+1)+'. 跳转<a class="color-brand" href="#!'+l(b.path)+'">'+l(b.path)+"</a>，"+l(b.extra)+"</div>"}return g+='</div><div mxa="_zs_galleryfh:f" class="_zs_galleryk"><div mxs="_zs_galleryfh:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(h)+'_text_1"><span mxa="_zs_galleryfh:g" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryfh:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(h)+'_text_1">\n&lt;mx-wanxiang \n    biz-code="PCMaMaAnyWhereWindow"\n    default-source-id="432"\n    source-map="&#123;&#123;@&#123;\n        \'/wanxiang/demo1\': 496,\n        \'/wanxiang/demo2?version=1\': 502\n    &#125;&#125;&#125;"\n    bottom="50"/&gt;\n            </pre></div></div></div>'},render:function(){var a=s.parse();this.updater.digest({cur:a.srcHash,list:[{path:"/wanxiang/demo1",id:496,tip:"第一个问题：我要咨询钻展流量的问题",extra:"匹配中source-map中配置的496"},{path:"/wanxiang/demo2?version=1&mode=2",id:502,tip:"第一个问题：如何查看资源位的类目要求？",extra:"匹配中source-map中配置的502"},{path:"/wanxiang/demo3",id:432,tip:"第一个问题：我要咨询内容推广的问题",extra:"source-map中没有额外配置，使用默认的432"}]})}})});