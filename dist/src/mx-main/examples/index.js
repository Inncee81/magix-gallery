define("mx-main/examples/index",["magix","$","examples/example","examples/subs","mx-title/second","mx-copy/index","examples/hl","examples/api"],(e,n,i)=>{e("examples/subs"),e("mx-title/second"),e("mx-copy/index"),e("examples/hl"),e("examples/api");e("magix"),e("$");var s=e("examples/example");i.exports=s.extend({tmpl:function(e,n,i,s,a,l,t,d){if(i||(i=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(c,o)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return m[e]},v=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(v,p)}}if(!d){var x=/[\\'"]/g;d=function(e){return a(e).replace(x,"\\$&")}}t||(t=function(e,n,i,s){for(s=e[_];--s;)if(e[i=_+s]===n)return i;return e[i=_+e[_]++]=n,i});var _="",g="",y=e.viewId,f=e.text1,u=e.text2,b=e.options;return g+='<div mxv mxa="_zs_gallerydi:_" class="pr pr120"><div mx-view="examples/subs?list='+t(i,[{name:"使用示例",key:y+"_demo"},{name:"API",key:y+"_api"},{name:"step-infos配置",key:y+"_step",subs:[{name:"可配参数",key:y+"_step1"},{name:"check",key:y+"_step2"}]}])+'"></div><div id="'+s(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydi:a" class="clearfix"><div mxa="_zs_gallerydi:b" class="_zs_galleryg"><div mxs="_zs_gallerydi:_" class="_zs_galleryj"><div class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>每步跳转完成会在路由上<span class="color-brand">保留参数stepIndex（一级步骤） 和 subStepIndex（二级子步骤）</span></div><div>当前已到达步骤取路由地址上stepIndex，1 和 用户配置的already-step的最大值</div><div>点击左侧导航可以快速跳转；未到步骤不可点击；</div><div>点击二级子步骤当前模块滚动到最顶部</div><div>右侧提醒信息可有可无</div></div></div><div class="color-9 lh22">点击以下链接新页面查看示例：</div><div class="lh22"><span class="color-9">从第一步开始：</span><a href="#!/main/demo" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/demo</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第二步上：</span><a href="#!/main/demo?campaignId=1&stepIndex=2" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/demo?campaignId=1&stepIndex=2</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第一步上：</span><a href="#!/main/demo?campaignId=1&stepIndex=1" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/demo?campaignId=1&stepIndex=1</a></div></div><div mxa="_zs_gallerydi:c" class="clearfix"><div mxa="_zs_gallerydi:d" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_gallerydi:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_1"><span mxa="_zs_gallerydi:e" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;mx-main \n    right-width="220"\n    left-width="140"\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n                    </pre></div><div mxa="_zs_gallerydi:f" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerydi:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_2"><span mxa="_zs_gallerydi:g" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            sideView: '@./tip',\n            subs: [&#123;\n                label: '基本信息',\n                icon: '&lt;i class=\"mc-iconfont fontsize-22\"&gt;&#38;&#35;xe612;&lt;/i&gt;',\n                view: '@./inner1'\n            &#125;],\n            nextTip: '下一步，设置计划',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            sideTitle: '单元说明',\n            sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n        &lt;div&gt;1、条件1&lt;/div&gt;\n        &lt;div&gt;2、条件2&lt;/div&gt;\n        &lt;div&gt;3、条件3&lt;/div&gt;`,\n            subs: [&#123;\n                label: '推广宝贝',\n                icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe613;&lt;/i&gt;',\n                view: '@./inner2'\n            &#125;, &#123;\n                label: '出价方式',\n                icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe731;&lt;/i&gt;',\n                view: '@./inner'\n            &#125;],\n            prevTip: '返回计划设置',\n            nextTip: '下一步，完成',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '完成创建',\n            subs: [&#123;\n                label: '完成标题',\n                icon: '&lt;i class=\"mc-iconfont fontsize-20\"&gt;&#38;&#35;xe7be;&lt;/i&gt;',\n                view: '@./inner3'\n            &#125;]\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if (locParams.campaignId) &#123;\n            alreadyStep = 2;\n            if (locParams.adgroupId) &#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n                    </pre></div></div></div></div><div mxv mxa=\"_zs_gallerydi:h\" class=\"pr20\"><div id=\""+s(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+t(i,b)+'" class="mb40"></div><div id="'+s(y)+'_step" mx-view="mx-title/second?content=step-infos%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_gallerydi:i" class="mb40"><div class="mb10" id="'+s(y)+"_step1\">1. step-infos数组所有可配参数说明</div><div mxs=\"_zs_gallerydi:d\" class=\"pl15 mb20\"><pre class=\"tip-content\">\n[{\n    label: '必填，一级标题文案',\n    prevTip: '可选，自定义返回上一步文案，默认返回上一步'\n    nextTip: '可选，自定义下一步文案，默认返回下一步',\n    sideTip: '可选，所有子view公用一个侧边提示，使用默认样式的提示内容',\n    sideTitle: '可选，所有子view公用一个侧边提示，使用默认样式的提示标题',\n    sideView: '可选，所有子view公用一个侧边提示，自定义view',\n    subs: [{\n        label: '必填，二级标题文案，当只有一个二级标题时，不显示二级标题',\n        icon: '可选，二级标题icon',\n        view: '必填，二级标题对应的view，该view必须实现check方法'\n    }, {\n        label: '必填，二级标题文案',\n        icon: '可选，二级标题icon',\n        view: '必填，二级标题对应的view，该view必须实现check方法'\n    }],\n    nextFn: (remains, next) => {\n        // remains 当前所有子步骤保留的信息交集，便于提交接口处理等\n        // next(remainParams:object) 保存在路由上的参数\n        next({\n            example: 1\n        })\n    }\n}]\n                </pre></div><div class=\"mb10\" id=\""+s(y)+'_step2">2. 子view必须实现的check方法说明，返回一个Promise</div><div mxs="_zs_gallerydi:e" class="pl15"><pre class="tip-content">\ncheck() {\n    let ok = true,\n        remain = {};\n\n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok,  // 是否校验通过，false的时候不提交\n            msg: \'错误信息提示\',\n            remain: {} // 当前步骤保留的参数，所有子view交集\n        })\n    })\n}\n                </pre></div></div></div></div>'},render:function(){var e=[{key:"step-infos",desc:'步骤信息，<a href="javascript:;" mx-click="to({id:\''+this.id+'_step\'})" class="color-brand">查看详细说明</a>',type:"array",def:"[]"},{key:"already-step",desc:"当前已经到达第几步，从1开始",type:"number",def:"取路由地址上stepIndex，1 和 alreadyStep的最大值"},{key:"left-width",desc:"左侧导航区域宽度",type:"number",def:"160"},{key:"right-width",desc:"右侧提示区域宽度",type:"number",def:"260"}];this.updater.digest({options:e})}})});