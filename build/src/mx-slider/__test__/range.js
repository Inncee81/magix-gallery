/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/range",["magix","$","mx-title/second","./8","./7","./6","./9","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./8");
require("./7");
require("./6");
require("./9");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryb8:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb8:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-slider/__test__/8"></div><div mx-view="mx-slider/__test__/7"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-slider/__test__/6"></div><div mx-view="mx-slider/__test__/9"></div></div></div><div mxs="_zs_galleryb8:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 14;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/__test__/range.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'min',
                desc: '区间最小值，保留小数位同step',
                type: 'number',
                def: 0
            }, {
                key: 'max',
                desc: '区间最大值，保留小数位同step',
                type: 'number',
                def: 100
            }, {
                key: 'step',
                desc: '步长，滑动时变化的刻度',
                type: 'number',
                def: 1
            }, {
                key: 'value',
                desc: '逗号分隔最小值和最大值',
                type: 'string',
                def: '取0,50%'
            }, {
                key: 'need-input',
                desc: '是否需要输入框，横向时才有，width不包含输入框宽度',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'width',
                desc: '滑块宽度',
                type: 'number',
                def: 280
            }, {
                key: 'vertical',
                desc: '是否垂直',
                type: 'boolean',
                def: 'border'
            }, {
                key: 'height',
                desc: '滑块高度，vertical=true时可设置',
                type: 'number',
                def: 280
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-slider mx-disabled/&gt;',
                type: '',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});