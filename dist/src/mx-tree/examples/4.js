define("mx-tree/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,x,r,i,n){if(t||(t=e),!x){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,p=function(e){return"&"+u[e]+";"};x=function(e){return""+(null==e?"":e)},a=function(e){return x(e).replace(s,p)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return v[e]},d=/[!')(*]/g;r=function(e){return encodeURIComponent(x(e)).replace(d,_)}}if(!n){var m=/[\\'"]/g;n=function(e){return x(e).replace(m,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[c];--a;)if(e[t=c+a]===l)return t;return e[t=c+e[c]++]=l,t});var c="",o="",g=e.viewId,f=e.list,y=e.text1;return o+='<div mxv mxa="_zs_galleryf_:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryf_:a" class="_zs_galleryj"><div mxv="list" id="'+a(g)+'_tree" mx-view="mx-tree/index?needExpand=true&hasLine=true&close=true&list='+i(t,f)+'"></div></div><div mxa="_zs_galleryf_:b" class="_zs_galleryk"><div mxs="_zs_galleryf_:_" class="_zs_galleryi">可展开收起 + 默认收起</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_galleryf_:c" class="_zs_galleryn">'+x(y)+'</span><i mxs="_zs_galleryf_:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    has-line="true"\n    close="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:11,pValue:1,text:"1-1"},{value:111,pValue:11,text:"1-1-1"},{value:1111,pValue:111,text:"1-1-1-1"},{value:1112,pValue:111,text:"1-1-1-2"},{value:12,pValue:1,text:"1-2"},{value:121,pValue:12,text:"1-2-1"},{value:122,pValue:12,text:"1-2-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:221,pValue:22,text:"2-2-1"},{value:222,pValue:22,text:"2-2-2"}]})}})});