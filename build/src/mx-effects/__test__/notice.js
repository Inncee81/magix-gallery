/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/notice",["magix","$","__test__/subs","mx-title/second","./7","./3","./30","./5","./4","./6","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./7");
require("./3");
require("./30");
require("./5");
require("./4");
require("./6");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybP:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'品牌色强调\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'带关闭按钮\',\n            key: viewId + \'_demo30\'\n        },{\n            name: \'黄色警告类\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'红色错误类\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'自定义颜色\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'默认灰底\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'品牌色强调\',                    key: viewId + \'_demo7\'                }, {                    name: \'带关闭按钮\',                    key: viewId + \'_demo30\'                }, {                    name: \'黄色警告类\',                    key: viewId + \'_demo5\'                }, {                    name: \'红色错误类\',                    key: viewId + \'_demo4\'                }, {                    name: \'自定义颜色\',                    key: viewId + \'_demo6\'                }, {                    name: \'默认灰底\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '品牌色强调', key: viewId + '_demo7' }, { name: '带关闭按钮', key: viewId + '_demo30' }, { name: '黄色警告类', key: viewId + '_demo5' }, { name: '红色错误类', key: viewId + '_demo4' }, { name: '自定义颜色', key: viewId + '_demo6' }, { name: '默认灰底', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybP:a" class="clearfix mb20"><div mxa="_zs_gallerybP:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/7" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-effects/__test__/3" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_gallerybP:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/30" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo30"></div><div mx-view="mx-effects/__test__/5" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-effects/__test__/4" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-effects/__test__/6" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div></div><div id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 44;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/notice.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'type',
                desc: [
                    '展示类型',
                    'error：红色错误类型提示，color = #a40100',
                    'warn：黄色警告类型提示，color = #ffb400',
                    'highlight：强调提示，color = 品牌色',
                    'common：灰色提示，color = #ccc'
                ].join('<br>'),
                type: 'string',
                def: '默认灰色提示'
            }, {
                key: 'color',
                desc: '自定义颜色，配置了color的时候忽略type的配置，其他颜色基于此色值计算',
                type: 'string',
                def: ''
            }, {
                key: 'color-bg',
                desc: '背景颜色，默认为color * 0.1',
                type: 'string',
                def: ''
            }, {
                key: 'border',
                desc: '是否带边框，默认情况下带边框则border-radius=4',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'closable',
                desc: '是否带关闭',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'radius',
                desc: '是否带圆角',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'color-border',
                desc: '边框颜色，默认=color',
                type: 'string',
                def: ''
            }, {
                key: 'icon',
                desc: '是否有警告icon',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'color-icon',
                desc: 'icon颜色，默认=color',
                type: 'string',
                def: ''
            }, {
                key: 'color-text',
                desc: '文字颜色，默认#666',
                type: 'string',
                def: ''
            }, {
                key: 'text-align',
                desc: '文字对齐方式，left，center，right',
                type: 'string',
                def: 'left'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});