define("mx-header/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var r=e("magix"),i=e("examples/example");e("$");r.applyStyle("_zs_galleryY","._zs_gallerygu{height:1200px;background-color:var(--color-bg)}._zs_gallerygu ._zs_gallerygv{width:1000px;padding-top:100px;margin:auto}._zs_gallerygw{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygw ._zs_gallerygv{height:800px;padding-top:100px;text-align:center;font-size:14px}._zs_gallerygx{margin-left:15px;border:1px solid var(--color-border)}"),a.exports=i.extend({tmpl:function(e,l,a,r,i,n,s,t){if(a||(a=e),!i){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+g[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(o,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(x,v)}}if(!t){var m=/[\\'"]/g;t=function(e){return i(e).replace(m,"\\$&")}}s||(s=function(e,l,a,r){for(r=e[u];--r;)if(e[a=u+r]===l)return a;return e[a=u+e[u]++]=l,a});var u="",_="",h=e.viewId,p=e.navs,w=e.cur,y=e.rightView,b=e.text1,z=e.text2;return _+='<div mxv mxa="_zs_galleryc5:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryc5:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryc5:b" class="pt10 pb10"><div mxs="_zs_galleryc5:_" class="lh28"><span class="color-9">以下示例：</span>全屏使用header，支持二级菜单，支持外链打开</div><div mxs="_zs_galleryc5:a" class="lh28">1. 包含顶部其他产品线信息（links=true），滚动吸顶（ceiling=true），显示用户信息（login=true）</div><div mxv mxa="_zs_galleryc5:c" class="pl15"><div mxs="_zs_galleryc5:b" class="lh28">login=true时必须配置biz-code告知对应的项目bizCode（用于获取对应的登陆框逻辑），登出接口（logout-url=\'/api/member/logout.action\'），通过user有无来判断是否登录</div><div mxs="_zs_galleryc5:c" class="lh28 mb10">a. 已登录（user=\'测试账号\'），<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=true&user=测试账号&logoutUrl=/api/member/logout.action" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="'+r(h)+'_test1" class="_zs_gallerygx mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs='+s(a,p)+"&links=true&ceiling=true&login=true&user=%E6%B5%8B%E8%AF%95%E8%B4%A6%E5%8F%B7&logoutUrl=%2Fapi%2Fmember%2Flogout.action&wrapper="+n(h)+'_test1"></div></div><div mxs="_zs_galleryc5:d" class="lh28 mb10">b. 未登录（user为空），<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=true&bizCode=adStrategy&logoutUrl=/api/member/logout.action" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="'+r(h)+'_test2" class="_zs_gallerygx mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs='+s(a,p)+"&links=true&ceiling=true&login=true&bizCode=adStrategy&logoutUrl=%2Fapi%2Fmember%2Flogout.action&wrapper="+n(h)+'_test2"></div></div></div><div mxs="_zs_galleryc5:e" class="lh28 mb10">2. 不包含顶部其他产品线信息（links=false），滚动不吸顶（ceiling=false），<a rel="noopener noreferrer" href="#!/header/white?links=false&ceiling=false" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="'+r(h)+'_test3" class="_zs_gallerygx mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs='+s(a,p)+"&cur="+n(w)+"&links=false&ceiling=false&wrapper="+n(h)+'_test3"></div></div><div mxa="_zs_galleryc5:d" class="lh28 mb10">3. 包含顶部其他产品线信息（links=true），滚动吸顶（ceiling=true），不显示用户信息（login=false），右侧自定义view一直显示（right-view=\'@./right\'），<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=false&rightView='+n(y)+'" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="'+r(h)+'_test4" class="_zs_gallerygx mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs='+s(a,p)+"&cur="+n(w)+"&rightView=mx-header%2Fexamples%2Fright&links=true&ceiling=true&login=false&wrapper="+n(h)+'_test4"></div></div><div mxa="_zs_galleryc5:e" class="lh28 mb10">4. 包含顶部其他产品线信息（links=true），滚动吸顶（ceiling=true），不显示用户信息（login=false），右侧自定义view（right-view=\'@./right\'），右侧自定义view默认不显示自定时显示（right-ceiling-show=true）<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=false&rightView='+n(y)+'&rightCeilingShow=true" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="'+r(h)+'_test4" class="_zs_gallerygx mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs='+s(a,p)+"&cur="+n(w)+"&rightView=mx-header%2Fexamples%2Fright&rightCeilingShow=true&links=true&ceiling=true&login=false&wrapper="+n(h)+'_test4"></div></div></div></div><div mxa="_zs_galleryc5:f" class="clearfix"><div mxa="_zs_galleryc5:g" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryc5:f" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(h)+'_text_1"><span mxa="_zs_galleryc5:h" class="_zs_galleryn">'+i(b)+'</span><i mxs="_zs_galleryc5:g" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(h)+'_text_1">\n&lt;mx-header \n    dark="false"\n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    login="&#123;&#123;=login&#125;&#125;"\n    user="&#123;&#123;=user&#125;&#125;"\n    right-view="&#123;&#123;=rightView&#125;&#125;"\n    right-ceiling-show="&#123;&#123;=rightCeilingShow&#125;&#125;"\n    biz-code="&#123;&#123;=bizCode&#125;&#125;"\n    logout-url="&#123;&#123;=logoutUrl&#125;&#125;"\n    links="&#123;&#123;=links&#125;&#125;"\n    ceiling="&#123;&#123;=ceiling&#125;&#125;"\n    mx-navchange="change()"/&gt;\n            </pre></div><div mxa="_zs_galleryc5:i" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryc5:h" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(h)+'_text_2"><span mxa="_zs_galleryc5:j" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryc5:g" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(h)+"_text_2\">\nconst Magix = require('magix');\nconst Router = Magix.Router;\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@white.html',\n    render() &#123;\n        let navs = [&#123;\n            value: 1,\n            text: '本页打开1'\n        &#125;, &#123;\n            value: 2,\n            text: '支持二级',\n            subs: [&#123;\n                value: 21,\n                text: '本页打开'\n            &#125;, &#123;\n                value: 22,\n                text: '外链打开',\n                link: 'https://www.taobao.com/' //直接外链打开\n            &#125;]\n        &#125;, &#123;\n            value: 3,\n            text: '本页打开2',\n            tag: 'NEW'\n        &#125;, &#123;\n            value: 4,\n            text: '外链打开',\n            link: 'https://www.taobao.com/'\n        &#125;]\n\n        let map = &#123;&#125;;\n        navs.forEach(nav =&gt; &#123;\n            map[nav.value] = nav.text;\n            let subs = nav.subs || [];\n            subs.forEach(sub =&gt; &#123;\n                map[sub.value] = `$&#123;nav.text&#125;_$&#123;sub.text&#125;`;\n            &#125;)\n        &#125;)\n\n        let locParams = Router.parse().params;\n        this.updater.digest(&#123;\n            navs,\n            map,\n            cur: locParams.cur || navs[0].value,\n            login: locParams.login || '',\n            user: locParams.user || '',\n            bizCode: locParams.bizCode || '',\n            logoutUrl: locParams.logoutUrl || '',\n            rightView: locParams.rightView || '',\n            rightCeilingShow: locParams.rightCeilingShow || false,\n            links: locParams.links || true,\n            ceiling: locParams.ceiling || true\n        &#125;);\n\n        this.observeLocation(['cur']);\n    &#125;,\n    'change&lt;navchange&gt;'(event) &#123;\n        // event.nav &#123;value: , text: &#125; 当前导航\n        Router.to(&#123;\n            cur: event.nav.value\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id,loginView:"mx-header/examples/login",rightView:"mx-header/examples/right",navs:[{value:1,text:"本页打开1"},{value:2,text:"支持二级",subs:[{value:21,text:"本页打开"},{value:22,text:"外链打开",link:"https://www.taobao.com/"}]},{value:3,text:"本页打开2",tag:"NEW"},{value:4,text:"外链打开",link:"https://www.taobao.com/"}]})}})});