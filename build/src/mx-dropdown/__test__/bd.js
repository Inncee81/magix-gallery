/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/bd",["magix","$","__test__/subs","mx-title/second","./19","./23","./24","./25","./27","./28","./29","./26","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./19");
require("./23");
require("./24");
require("./25");
require("./27");
require("./28");
require("./29");
require("./26");
require("__test__/api");
require("__test__/event");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, events = $$.events; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya{:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'单选搜索\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'单选分组\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'单选选项禁用\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'多选搜索\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'多选分组\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'多选选项禁用\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'hover展开\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'整体禁用\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }, {\n        name: \'问题小计\',\n        key: viewId + \'_bug\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'单选搜索\',                    key: viewId + \'_demo1\'                }, {                    name: \'单选分组\',                    key: viewId + \'_demo2\'                }, {                    name: \'单选选项禁用\',                    key: viewId + \'_demo5\'                }, {                    name: \'多选搜索\',                    key: viewId + \'_demo6\'                }, {                    name: \'多选分组\',                    key: viewId + \'_demo7\'                }, {                    name: \'多选选项禁用\',                    key: viewId + \'_demo8\'                }, {                    name: \'hover展开\',                    key: viewId + \'_demo3\'                }, {                    name: \'整体禁用\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }, {            name: \'问题小计\',            key: viewId + \'_bug\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '单选搜索', key: viewId + '_demo1' }, { name: '单选分组', key: viewId + '_demo2' }, { name: '单选选项禁用', key: viewId + '_demo5' }, { name: '多选搜索', key: viewId + '_demo6' }, { name: '多选分组', key: viewId + '_demo7' }, { name: '多选选项禁用', key: viewId + '_demo8' }, { name: 'hover展开', key: viewId + '_demo3' }, { name: '整体禁用', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }, { name: '问题小计', key: viewId + '_bug' }])) + '"></div><div id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_bd" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya{:a" class="clearfix mb20"><div mxa="_zs_gallerya{:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dropdown/__test__/19" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-dropdown/__test__/23" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-dropdown/__test__/24" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-dropdown/__test__/25" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div mxa="_zs_gallerya{:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dropdown/__test__/27" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-dropdown/__test__/28" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-dropdown/__test__/29" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-dropdown/__test__/26" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 58;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 61;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '" class="mb40"></div><div id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_bug" mx-view="mx-title/second?content=%E9%97%AE%E9%A2%98%E5%B0%8F%E8%AE%A1"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/bd.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "<pre>\u5217\u8868\u6570\u7EC4\n1. \u7B80\u5355\u6570\u7EC4[1,2,3]\n2. \u5BF9\u8C61\u6570\u7EC4\uFF0C\u5982[{\n    value:1,\n    text:\"a\"\n}]</pre>",
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string|array',
                def: '单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
            }, {
                key: 'trigger-type',
                desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
                type: 'string',
                def: 'click'
            }, {
                key: 'text-key',
                desc: '渲染text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'parents',
                desc: "<pre>\n\u5206\u7EC4\u6570\u7EC4\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A\n[{\n    text: '\u7EC4\u6587\u6848',\n    value: '\u5206\u7EC4\u503C\uFF0C\u5BF9\u5E94list\u7684pValue'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'parent-key',
                desc: '表示父节点value的字段',
                type: 'string',
                def: 'pValue'
            }, {
                key: 'searchbox',
                desc: '是否开启搜索框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'keyword',
                desc: '搜索关键词',
                type: 'string',
                def: ''
            }, {
                key: 'height',
                desc: '下拉框最大高度',
                type: 'number',
                def: '250'
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
                type: '',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '',
                params: [{
                        key: 'value',
                        desc: '当前选中value',
                        type: 'string'
                    }, {
                        key: 'text',
                        desc: '当前选中text',
                        type: 'string'
                    }, {
                        key: 'item',
                        desc: '当前选中完整对象',
                        type: 'object'
                    }, {
                        key: 'selected',
                        desc: '当前选中value，同value',
                        type: 'string'
                    }, {
                        key: 'keyword',
                        desc: '当前搜索关键词',
                        type: 'string'
                    }]
            }];
        this.updater.digest({
            viewId: this.id,
            options: options,
            events: events
        });
    }
});

});