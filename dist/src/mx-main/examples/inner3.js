define("mx-main/examples/inner3",["magix","$"],(n,e,i)=>{var t=n("magix"),l=n("$");i.exports=t.View.extend({tmpl:function(n,e,i,t,l,r,s,a){if(i||(i=n),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,f=function(n){return"&"+c[n]+";"};l=function(n){return""+(null==n?"":n)},function(n){return l(n).replace(o,f)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(n){return g[n]},d=/[!')(*]/g;r=function(n){return encodeURIComponent(l(n)).replace(d,u)}}if(!a){var m=/[\\'"]/g;a=function(n){return l(n).replace(m,"\\$&")}}return"<div mxs=\"_zs_gallerydr:_\" class=\"lh22 mb10\"><div>当前步骤三个子步骤，对应的页面配置信息如下：</div></div><pre mxs=\"_zs_gallerydr:a\" class=\"tip-content\">\n&#123;\n    label: '添加创意',\n    subs: [&#123;\n        label: '创意内容1',\n        icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe705;&lt;/i&gt;',\n        view: '@./inner3'\n    &#125;, &#123;\n        label: '创意内容2',\n        icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe664;&lt;/i&gt;',\n        view: '@./inner'\n    &#125;, &#123;\n        label: '创意内容3',\n        icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n        view: '@./inner'\n    &#125;],\n    nextTip: '下一步，完成'\n&#125;\n</pre>","<div mxs=\"_zs_gallerydr:_\" class=\"lh22 mb10\"><div>当前步骤三个子步骤，对应的页面配置信息如下：</div></div><pre mxs=\"_zs_gallerydr:a\" class=\"tip-content\">\n&#123;\n    label: '添加创意',\n    subs: [&#123;\n        label: '创意内容1',\n        icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe705;&lt;/i&gt;',\n        view: '@./inner3'\n    &#125;, &#123;\n        label: '创意内容2',\n        icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe664;&lt;/i&gt;',\n        view: '@./inner'\n    &#125;, &#123;\n        label: '创意内容3',\n        icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n        view: '@./inner'\n    &#125;],\n    nextTip: '下一步，完成'\n&#125;\n</pre>"},init:function(n){this.updater.set({info:n.info||{},data:l.extend(!0,{},n.data||{})})},render:function(){this.updater.digest()},check:function(){var n=this.updater.get("info"),e={};return e["test_"+n.index]=n.label,new Promise(function(i){i({ok:!0,msg:n.label,remain:e})})}})});