define("mx-main/__test__/inner2",["magix","$"],(n,i,e)=>{var t=n("magix"),_=n("$");t.applyStyle("_zs_gallery_mx-main___test___inner_","._zs_gallery_mx-main___test___inner_-box-title {\n  position: relative;\n  height: 46px;\n  padding: 0 20px;\n  line-height: 44px;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon {\n  float: left;\n  height: 44px;\n  line-height: 44px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  color: #999;\n  font-size: 20px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-label {\n  float: left;\n  font-size: 16px;\n}\n._zs_gallery_mx-main___test___inner_-box-inner {\n  padding: 20px 20px 0 20px;\n}\n"),e.exports=t.View.extend({tmpl:function(n,i,e,t,_,r,l,a){if(e||(e=n),!_){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(n){return"&"+s[n]+";"};_=function(n){return""+(null==n?"":n)},t=function(n){return _(n).replace(o,d)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(n){return c[n]},x=/[!')(*]/g;r=function(n){return encodeURIComponent(_(n)).replace(x,m)}}if(!a){var g=/[\\'"]/g;a=function(n){return _(n).replace(g,"\\$&")}}var v,p,f,u="",b=n.info;try{u+='<div mxa="_zs_galleryc&:_" class="_zs_gallery_mx-main___test___inner_-box-title clearfix">',f=2,p="if info.icon",v="<%if (info.icon) {%>",b.icon&&(u+='<span mxa="_zs_galleryc&:a" class="_zs_gallery_mx-main___test___inner_-title-icon">',f=3,p="!info.icon",u+=(v="<%!info.icon%>",_(b.icon)+"</span>"),f=4,p="/if",v="<%}%>"),u+='<span mxa="_zs_galleryc&:b" class="_zs_gallery_mx-main___test___inner_-title-label">',f=5,p="=info.label",u+=(v="<%=info.label%>",t(b.label)+'</span></div><div mxs="_zs_galleryc&:_" class="_zs_gallery_mx-main___test___inner_-box-inner" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 测导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义下一步按钮文案（nextTip）</div><div>5. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步已完成，直接展开（nextFn）</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    nextTip: \'下一步，设置计划\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            adgroupId: 1\n        &#125;)\n    &#125;\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7b5;&lt;/i&gt;\',\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n        &lt;div&gt;1、条件1&lt;/div&gt;\n        &lt;div&gt;2、条件2&lt;/div&gt;\n        &lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./inner\'\n    &#125;]\n&#125;\n    </pre><div class="lh22 mb10"><div>JS Code：</div></div><pre class="tip-content mb40">\ninit(extra)&#123;\n    // extra.info（stepInfos[index]）：当前步骤信息\n    this.updater.set(&#123;\n        info: extra.info || &#123;&#125;\n    &#125;)\n&#125;\n/**\n* 子view实现该方法\n*/\ncheck() &#123;\n    let info = this.updater.get(\'info\');\n    let ok = true,\n        remain = &#123;&#125;;\n\n    return new Promise((resolve) =&gt; &#123;\n        // 此处返回promise，防止有接口提交校验等\n        resolve(&#123;\n            ok,\n            msg: info.label,\n            remain\n        &#125;)\n    &#125;)\n&#125;\n    </pre></div>')}catch(n){var h="render view error:"+(n.message||n);throw p&&(h+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+f),h+="\r\n\t"+(p?"translate to:":"expr:"),h+=v+"\r\n\tat file:mx-main/__test__/inner2.html"}return u},init:function(n){this.updater.set({info:n.info||{},data:_.extend(!0,{},n.data||{})})},render:function(){this.updater.digest()},check:function(){var n=this.updater.get("info"),i={};return i["test_"+n.index]=n.label,new Promise(function(e){e({ok:!0,msg:n.label,remain:i})})}})});