define("mx-main/__test__/inner2",["magix","$"],(n,i,e)=>{var t=n("magix"),l=n("$");t.applyStyle("_zs_galleryad","._zs_galleryhl{position:relative;height:46px;padding:0 20px;line-height:44px;background-color:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_galleryhl ._zs_galleryhm{float:left;height:44px;line-height:44px}._zs_galleryhl ._zs_galleryhm>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryhl ._zs_galleryhn{float:left;font-size:16px}._zs_galleryho{padding:20px 20px 0}"),e.exports=t.View.extend({tmpl:function(n,i,e,t,l,r,a,s){if(e||(e=n),!l){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(n){return"&"+o[n]+";"};l=function(n){return""+(null==n?"":n)},t=function(n){return l(n).replace(d,c)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(n){return g[n]},p=/[!')(*]/g;r=function(n){return encodeURIComponent(l(n)).replace(p,v)}}if(!s){var _=/[\\'"]/g;s=function(n){return l(n).replace(_,"\\$&")}}var x="",f=n.info;return x+='<div mxa="_zs_galleryc0:_" class="_zs_galleryhl clearfix">',f.icon&&(x+='<span mxa="_zs_galleryc0:a" class="_zs_galleryhm">'+l(f.icon)+"</span>"),x+='<span mxa="_zs_galleryc0:b" class="_zs_galleryhn">'+t(f.label)+'</span></div><div mxs="_zs_galleryc0:_" class="_zs_galleryho" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 测导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义下一步按钮文案（nextTip）</div><div>5. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步已完成，直接展开（nextFn）</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    nextTip: \'下一步，设置计划\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            adgroupId: 1\n        &#125;)\n    &#125;\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7b5;&lt;/i&gt;\',\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n        &lt;div&gt;1、条件1&lt;/div&gt;\n        &lt;div&gt;2、条件2&lt;/div&gt;\n        &lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./inner\'\n    &#125;]\n&#125;\n    </pre><div class="lh22 mb10"><div>JS Code：</div></div><pre class="tip-content mb40">\ninit(extra)&#123;\n    // extra.info（stepInfos[index]）：当前步骤信息\n    this.updater.set(&#123;\n        info: extra.info || &#123;&#125;\n    &#125;)\n&#125;\n/**\n* 子view实现该方法\n*/\ncheck() &#123;\n    let info = this.updater.get(\'info\');\n    let ok = true,\n        remain = &#123;&#125;;\n\n    return new Promise((resolve) =&gt; &#123;\n        // 此处返回promise，防止有接口提交校验等\n        resolve(&#123;\n            ok,\n            msg: info.label,\n            remain\n        &#125;)\n    &#125;)\n&#125;\n    </pre></div>'},init:function(n){this.updater.set({info:n.info||{},data:l.extend(!0,{},n.data||{})})},render:function(){this.updater.digest()},check:function(){var n=this.updater.get("info"),i={};return i["test_"+n.index]=n.label,new Promise(function(e){e({ok:!0,msg:n.label,remain:i})})}})});