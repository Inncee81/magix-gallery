define("mx-tree/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,u,x,r,n){if(t||(t=e),!u){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,p=function(e){return"&"+i[e]+";"};u=function(e){return""+(null==e?"":e)},a=function(e){return u(e).replace(s,p)}}if(!x){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return v[e]},m=/[!')(*]/g;x=function(e){return encodeURIComponent(u(e)).replace(m,d)}}if(!n){var _=/[\\'"]/g;n=function(e){return u(e).replace(_,"\\$&")}}r||(r=function(e,l,t,a){for(a=e[c];--a;)if(e[t=c+a]===l)return t;return e[t=c+e[c]++]=l,t});var c="",g="",o=e.viewId,f=e.list,y=e.text1;return g+='<div mxv mxa="_zs_galleryfs:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfs:a" class="_zs_galleryj"><div mxv="list" id="'+a(o)+'_tree" mx-view="mx-tree/index?needExpand=true&readOnly=true&hasLine=true&list='+r(t,f)+'"></div></div><div mxa="_zs_galleryfs:b" class="_zs_galleryk"><div mxs="_zs_galleryfs:_" class="_zs_galleryi">只读 + 可展开收起 + 默认展开 + 有连接线</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+x(o)+'_text_1"><span mxa="_zs_galleryfs:c" class="_zs_galleryn">'+u(y)+'</span><i mxs="_zs_galleryfs:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(o)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    read-only="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:3,pValue:"",text:"3"},{value:11,pValue:1,text:"1-1"},{value:111,pValue:11,text:"1-1-1"},{value:1111,pValue:111,text:"1-1-1-1"},{value:1112,pValue:111,text:"1-1-1-2"},{value:112,pValue:11,text:"1-1-2"},{value:1121,pValue:112,text:"1-1-2-1"},{value:1122,pValue:112,text:"1-1-2-2"},{value:12,pValue:1,text:"1-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:23,pValue:2,text:"2-3"},{value:231,pValue:23,text:"2-3-1"},{value:232,pValue:23,text:"2-3-2"}]})}})});