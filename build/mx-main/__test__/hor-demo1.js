define("mx-main/__test__/hor-demo1",["magix","$","__test__/example","../hor","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../hor"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),s=(e("$"),n.Router),a=e("__test__/example");t.exports=a.extend({tmpl:function(e,_,t,n,s,a,l,i){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(d,o)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(m,x)}}if(!i){var y=/[\\'"]/g;i=function(e){return s(e).replace(y,"\\$&")}}l||(l=function(e,_,t,n){for(n=e[u];--n;)if(e[t=u+n]===_)return t;return e[t=u+e[u]++]=_,t});var p,g,v,u="",z="",f=e.alreadyStep,h=e.stepInfos,w=e.viewId,I=e.text1,b=e.text2,$=e.text3,S=e.text4;try{z+='<div mxv mxa="_zs_galleryc9:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryc9:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryc9:_" class="mb20"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep=',v=7,g="=alreadyStep",z+=(p="<%!$eu(alreadyStep)%>",a(f)+"&stepInfos="),v=8,g="@stepInfos",z+=(p="<%@stepInfos%>",l(t,h)+'"></div></div><div mxa="_zs_galleryc9:b" class="clearfix"><div mxa="_zs_galleryc9:c" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryc9:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=13,g="=viewId",z+=(p="<%!$eu(viewId)%>",a(w)+'_text_1"><span mxa="_zs_galleryc9:d" class="_zs_gallery___test___layout_-desc-tip">'),v=15,g="!text1",z+=(p="<%!text1%>",s(I)+'</span><i mxs="_zs_galleryc9:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=18,g="=viewId",z+=(p="<%=viewId%>",n(w)+'_text_1">\n&lt;mx-main.hor\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_galleryc9:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryc9:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode='),v=26,g="=viewId",z+=(p="<%!$eu(viewId)%>",a(w)+'_text_2"><span mxa="_zs_galleryc9:f" class="_zs_gallery___test___layout_-desc-tip">'),v=28,g="!text2",z+=(p="<%!text2%>",s(b)+'</span><i mxs="_zs_galleryc9:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=31,g="=viewId",z+=(p="<%=viewId%>",n(w)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            nextTip: '下一步，设置单元',\n            view: '@./hor-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            prevTip: '返回计划设置',\n            nextTip: '下一步，完成',\n            view: '@./hor-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '添加创意',\n            view: '@./hor-inner'\n        &#125;, &#123;\n            label: '完成',\n            view: '@./hor-inner'\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.campaignId)&#123;\n            alreadyStep = 2;\n            if(locParams.adgroupId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa=\"_zs_galleryc9:g\" class=\"clearfix\"><div mxa=\"_zs_galleryc9:h\" class=\"_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1\"><div mxs=\"_zs_galleryc9:d\" class=\"_zs_gallery___test___layout_-eg-title\">hor-inner： HTML Code</div><div class=\"_zs_gallery___test___layout_-desc-oper\" mx-success=\""+_+'done({id:3})" mx-view="mx-copy/index?copyNode='),v=89,g="=viewId",z+=(p="<%!$eu(viewId)%>",a(w)+'_text_3"><span mxa="_zs_galleryc9:i" class="_zs_gallery___test___layout_-desc-tip">'),v=91,g="!text3",z+=(p="<%!text3%>",s($)+'</span><i mxs="_zs_galleryc9:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=94,g="=viewId",z+=(p="<%=viewId%>",n(w)+'_text_3">\n&lt;div class="fontsize-16"&gt;第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;&lt;/div&gt;\n            </pre></div><div mxa="_zs_galleryc9:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryc9:e" class="_zs_gallery___test___layout_-eg-title">hor-inner： JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:4})" mx-view="mx-copy/index?copyNode='),v=100,g="=viewId",z+=(p="<%!$eu(viewId)%>",a(w)+'_text_4"><span mxa="_zs_galleryc9:k" class="_zs_gallery___test___layout_-desc-tip">'),v=102,g="!text4",z+=(p="<%!text4%>",s(S)+'</span><i mxs="_zs_galleryc9:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=105,g="=viewId",z+=(p="<%=viewId%>",n(w)+"_text_4\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@hor-inner.html',\n    init(extra)&#123;\n        this.updater.set(&#123;\n            info: extra.info || &#123;&#125;,\n            data: $.extend(true, &#123;&#125;, extra.data || &#123;&#125;)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get('info');\n        let ok = true,\n            remain = &#123;&#125;;\n        remain['test_' + info.index] = info.label;\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: info.label,\n                remain\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>")}catch(e){var T="render view error:"+(e.message||e);throw g&&(T+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+v),T+="\r\n\t"+(g?"translate to:":"expr:"),T+=p+"\r\n\tat file:mx-main/__test__/hor-demo1.html"}return z},render:function(){var e=s.parse().params,_=1;e.campaignId&&(_=2,e.adgroupId&&(_=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",view:"mx-main/__test__/hor-inner",nextFn:function(e,_){_({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",view:"mx-main/__test__/hor-inner",nextFn:function(e,_){_({adgroupId:1})}},{label:"添加创意",view:"mx-main/__test__/hor-inner"},{label:"完成",view:"mx-main/__test__/hor-inner"}],alreadyStep:_})}})});