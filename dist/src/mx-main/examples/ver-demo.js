define("mx-main/examples/ver-demo",["magix","$","examples/example","../ver","mx-copy/index","examples/hl"],(e,n,l)=>{e("../ver"),e("mx-copy/index"),e("examples/hl");var a=e("magix"),s=(e("$"),a.Router),i=e("examples/example");l.exports=i.extend({tmpl:function(e,n,l,a,s,i,t,r){if(l||(l=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(x,m)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(o,c)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}t||(t=function(e,n,l,a){for(a=e[g];--a;)if(e[l=g+a]===n)return l;return e[l=g+e[g]++]=n,l});var g="",v="",y=e.alreadyStep,f=e.stepInfos,z=e.viewId,u=e.text1,w=e.text2,I=e.text3,h=e.text4;return v+='<div mxv mxa="_zs_gallerydd:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydd:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerydd:b" class="wrap"><div mxv="stepInfos" mx-view="mx-main/ver?alreadyStep='+i(y)+"&stepInfos="+t(l,f)+'"></div></div></div><div mxa="_zs_gallerydd:c" class="clearfix"><div mxa="_zs_gallerydd:d" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_gallerydd:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_1"><span mxa="_zs_gallerydd:e" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerydd:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(z)+'_text_1">\n&lt;mx-main.ver\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerydd:f" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerydd:b" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_2"><span mxa="_zs_gallerydd:g" class="_zs_galleryn">'+s(w)+'</span><i mxs="_zs_gallerydd:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            nextTip: '下一步，设置单元',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            prevTip: '返回计划设置',\n            nextTip: '下一步，完成',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '添加创意',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner'\n        &#125;, &#123;\n            label: '完成',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner'\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.campaignId)&#123;\n            alreadyStep = 2;\n            if(locParams.adgroupId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa=\"_zs_gallerydd:h\" class=\"clearfix\"><div mxa=\"_zs_gallerydd:i\" class=\"_zs_galleryk _zs_gallery_\"><div mxs=\"_zs_gallerydd:c\" class=\"_zs_galleryi\">steps-inner： HTML Code</div><div class=\"_zs_galleryl\" mx-success=\""+n+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_3"><span mxa="_zs_gallerydd:j" class="_zs_galleryn">'+s(I)+'</span><i mxs="_zs_gallerydd:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(z)+'_text_3">\n&lt;div class="fontsize-16"&gt;\n    第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;\n&lt;/div&gt;\n            </pre></div><div mxa="_zs_gallerydd:k" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerydd:d" class="_zs_galleryi">steps-inner： JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:4})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_4"><span mxa="_zs_gallerydd:l" class="_zs_galleryn">'+s(h)+'</span><i mxs="_zs_gallerydd:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(z)+"_text_4\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@steps-inner.html',\n    init(extra)&#123;\n        this.updater.set(&#123;\n            info: extra.info || &#123;&#125;,\n            data: $.extend(true, &#123;&#125;, extra.data || &#123;&#125;)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get('info');\n        let ok = true,\n            remain = &#123;&#125;;\n        remain['test_' + info.index] = info.label;\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: info.label,\n                remain\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){var e=s.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",icon:'<i class="mc-iconfont">&#xe767;</i>',view:"mx-main/examples/ver-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",icon:'<i class="mc-iconfont fontsize-20">&#xe664;</i>',view:"mx-main/examples/ver-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",icon:'<i class="mc-iconfont fontsize-20">&#xe7b5;</i>',view:"mx-main/examples/ver-inner"},{label:"完成",icon:'<i class="mc-iconfont fontsize-20">&#xe64c;</i>',view:"mx-main/examples/ver-inner"}],alreadyStep:n})}})});