/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/12",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', radioes = $$.radioes, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_gallerybo:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerybo:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerybo:b" class="mb20"><span mxs="_zs_gallerybo:_" class="color-9 mr20">radio：</span>'; for (var $art_ioyxxyzkor$art_i = 0, $art_ctrmvnvho$art_c = radioes.length; $art_ioyxxyzkor$art_i < $art_ctrmvnvho$art_c; $art_ioyxxyzkor$art_i++) {
    var r = radioes[$art_ioyxxyzkor$art_i];
    $p += '<label mxv mxa="_zs_gallerybo:c" class="mr30"><input mxe="' + $viewId + '_0" mxc="[{p:\'selected\'}]" type="radio" value="' + $e(r) + '" class="radio" name="magix"/>' + $e(r) + '</label>';
} ; $p += '</div></div><div mxa="_zs_gallerybo:d" class="clearfix"><div mxa="_zs_gallerybo:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerybo:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybo:f" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybo:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each radioes as r&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="radio" class="radio" \n            name="magix" \n            value="&#123;&#123;=r&#125;&#125;" \n            &#123;&#123;:selected&#125;&#125; /&gt;\n        &#123;&#123;=r&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerybo:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerybo:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerybo:h" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerybo:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: \'radio2\',\n            radioes: [\'radio1\', \'radio2\', \'radio3\']\n        });\n    }\n});</pre></div></div></div>'; return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            selected: 'radio2',
            radioes: ['radio1', 'radio2', 'radio3']
        });
    }
});

});