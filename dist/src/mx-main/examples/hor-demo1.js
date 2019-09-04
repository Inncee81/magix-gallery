define("mx-main/examples/hor-demo1",["magix","$","examples/example","../hor","mx-copy/index","examples/hl"],(e,n,a)=>{e("../hor"),e("mx-copy/index"),e("examples/hl");var l=e("magix"),s=(e("$"),l.Router),i=e("examples/example");a.exports=i.extend({tmpl:function(e,n,a,l,s,i,r,t){if(a||(a=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(_,m)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return d[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(c,o)}}if(!t){var p=/[\\'"]/g;t=function(e){return s(e).replace(p,"\\$&")}}r||(r=function(e,n,a,l){for(l=e[g];--l;)if(e[a=g+l]===n)return a;return e[a=g+e[g]++]=n,a});var g="",v="",y=e.alreadyStep,z=e.stepInfos,u=e.viewId,f=e.text1,h=e.text2,w=e.text3,b=e.text4;return v+='<div mxv mxa="_zs_galleryc\\:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryc\\:a" class="_zs_galleryj"><div mxs="_zs_galleryc\\:_" class="mb20"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep='+i(y)+"&stepInfos="+r(a,z)+'"></div></div><div mxa="_zs_galleryc\\:b" class="clearfix"><div mxa="_zs_galleryc\\:c" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryc\\:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryc\\:d" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_galleryc\\:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+'_text_1">\n&lt;mx-main.hor\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_galleryc\\:e" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryc\\:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_galleryc\\:f" class="_zs_galleryn">'+s(h)+'</span><i mxs="_zs_galleryc\\:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            nextTip: '下一步，设置单元',\n            view: '@./hor-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            prevTip: '返回计划设置',\n            nextTip: '下一步，完成',\n            view: '@./hor-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '添加创意',\n            view: '@./hor-inner'\n        &#125;, &#123;\n            label: '完成',\n            view: '@./hor-inner'\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.campaignId)&#123;\n            alreadyStep = 2;\n            if(locParams.adgroupId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa=\"_zs_galleryc\\:g\" class=\"clearfix\"><div mxa=\"_zs_galleryc\\:h\" class=\"_zs_galleryk _zs_gallery_\"><div mxs=\"_zs_galleryc\\:d\" class=\"_zs_galleryi\">hor-inner： HTML Code</div><div class=\"_zs_galleryl\" mx-success=\""+n+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_3"><span mxa="_zs_galleryc\\:i" class="_zs_galleryn">'+s(w)+'</span><i mxs="_zs_galleryc\\:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+'_text_3">\n&lt;div class="fontsize-16"&gt;第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;&lt;/div&gt;\n            </pre></div><div mxa="_zs_galleryc\\:j" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryc\\:e" class="_zs_galleryi">hor-inner： JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:4})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_4"><span mxa="_zs_galleryc\\:k" class="_zs_galleryn">'+s(b)+'</span><i mxs="_zs_galleryc\\:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+"_text_4\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@hor-inner.html',\n    init(extra)&#123;\n        this.updater.set(&#123;\n            info: extra.info || &#123;&#125;,\n            data: $.extend(true, &#123;&#125;, extra.data || &#123;&#125;)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get('info');\n        let ok = true,\n            remain = &#123;&#125;;\n        remain['test_' + info.index] = info.label;\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: info.label,\n                remain\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){var e=s.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",view:"mx-main/examples/hor-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",view:"mx-main/examples/hor-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",view:"mx-main/examples/hor-inner"},{label:"完成",view:"mx-main/examples/hor-inner"}],alreadyStep:n})}})});