define("mx-main/__test__/ver-demo",["magix","$","__test__/example","../ver","mx-copy/index","__test__/hl"],(e,n,i)=>{e("../ver"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),s=(e("$"),l.Router),a=e("__test__/example");l.applyStyle("_zs_galleryab","._zs_galleryiG{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiH{background-color:#fafafa;padding:20px}"),i.exports=a.extend({tmpl:function(e,n,i,l,s,a,t,r){if(i||(i=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(c,o)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(m,d)}}if(!r){var g=/[\\'"]/g;r=function(e){return s(e).replace(g,"\\$&")}}t||(t=function(e,n,i,l){for(l=e[p];--l;)if(e[i=p+l]===n)return i;return e[i=p+e[p]++]=n,i});var p="",v="",y=e.alreadyStep,f=e.stepInfos,z=e.viewId,u=e.text1,w=e.text2,b=e.text3,h=e.text4;return v+='<div mxv mxa="_zs_galleryci:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryci:a" class="_zs_galleryk"><div mxv mxa="_zs_galleryci:b" class="_zs_galleryiH"><div mxv="stepInfos" mx-view="mx-main/ver?alreadyStep='+a(y)+"&stepInfos="+t(i,f)+'"></div></div></div><div mxa="_zs_galleryci:c" class="clearfix"><div mxa="_zs_galleryci:d" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryci:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_1"><span mxa="_zs_galleryci:e" class="_zs_galleryo">'+s(u)+'</span><i mxs="_zs_galleryci:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_1">\n&lt;mx-main.ver\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_galleryci:f" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryci:b" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_2"><span mxa="_zs_galleryci:g" class="_zs_galleryo">'+s(w)+'</span><i mxs="_zs_galleryci:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            nextTip: '下一步，设置单元',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            prevTip: '返回计划设置',\n            nextTip: '下一步，完成',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '添加创意',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner'\n        &#125;, &#123;\n            label: '完成',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n            view: '@./steps-inner'\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.campaignId)&#123;\n            alreadyStep = 2;\n            if(locParams.adgroupId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa=\"_zs_galleryci:h\" class=\"clearfix\"><div mxa=\"_zs_galleryci:i\" class=\"_zs_galleryl _zs_gallerya\"><div mxs=\"_zs_galleryci:c\" class=\"_zs_galleryj\">steps-inner： HTML Code</div><div class=\"_zs_gallerym\" mx-success=\""+n+'done({id:3})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_3"><span mxa="_zs_galleryci:j" class="_zs_galleryo">'+s(b)+'</span><i mxs="_zs_galleryci:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_3">\n&lt;div class="fontsize-16"&gt;\n    第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;\n&lt;/div&gt;\n            </pre></div><div mxa="_zs_galleryci:k" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryci:d" class="_zs_galleryj">steps-inner： JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:4})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_4"><span mxa="_zs_galleryci:l" class="_zs_galleryo">'+s(h)+'</span><i mxs="_zs_galleryci:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+"_text_4\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@steps-inner.html',\n    init(extra)&#123;\n        this.updater.set(&#123;\n            info: extra.info || &#123;&#125;,\n            data: $.extend(true, &#123;&#125;, extra.data || &#123;&#125;)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get('info');\n        let ok = true,\n            remain = &#123;&#125;;\n        remain['test_' + info.index] = info.label;\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: info.label,\n                remain\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){var e=s.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",icon:'<i class="mc-iconfont">&#xe767;</i>',view:"mx-main/__test__/ver-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",icon:'<i class="mc-iconfont fontsize-20">&#xe664;</i>',view:"mx-main/__test__/ver-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",icon:'<i class="mc-iconfont fontsize-20">&#xe7b5;</i>',view:"mx-main/__test__/ver-inner"},{label:"完成",icon:'<i class="mc-iconfont fontsize-20">&#xe64c;</i>',view:"mx-main/__test__/ver-inner"}],alreadyStep:n})}})});