let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'fd-id',
            desc: '反馈表单id',
            type: 'number',
            def: ''
        }, {
            key: 'fd-frequency',
            desc: '频率控制，all（每次弹出），one（只弹出一次）',
            type: 'string',
            def: 'one'
        }, {
            key: 'fd-style',
            desc: '附加到外层容器的样式，驼峰传入<br/>默认相对当前节点下居中定位',
            type: 'object',
            def: '{}'
        }, {
            key: 'trigger-type',
            desc: '浮层反馈浮层的方式，可选点击（click），默认展开（auto）',
            type: 'string',
            def: 'click'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});