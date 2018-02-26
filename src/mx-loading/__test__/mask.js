define("mx-loading/__test__/mask",["magix","../mask","__test__/hl"],(t,n,e)=>{t("__test__/hl");var i=t("magix"),s=t("../mask");e.exports=i.View.extend({tmpl:function(t){var n,e="",i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,r=function(t){return null==t?"":""+t},a=function(t){return"&"+i[t]+";"};return e+='<h2>mx-loading</h2><h3>mask mixin</h3><div class="_B _ai"><p>loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p>通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p>为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p class="_b _n">第'+(n=t.count,r(n).replace(s,a))+'次渲染页面</p><button mx-click="refresh()" class="_an _ao _b">点此按钮2s后重新渲染当前view</button></div><div class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;p class="mt10 mb10"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click="refresh()" class="btn btn-brand mt10"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet MLoading = require(\'app/gallery/loading/mask\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@mask.html\',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    \'refresh&lt;click&gt;\' () {\n        this.render();\n    }\n});</pre></div>'},mixins:[s],init:function(){this.count=1},render:function(){var t=this,n=this;setTimeout(n.wrapAsync(function(){n.updater.digest({count:t.count++})}),2e3)},"refresh<click>":function(){this.render()}})});