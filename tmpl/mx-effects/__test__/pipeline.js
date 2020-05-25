let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@pipeline.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
list = [{
    title,
    subTitle,
    tip
}]
</pre>`,
            type: 'array',
            def: '数据格式'
        }, {
            key: 'selected',
            desc: '当前选中项',
            type: 'string',
            def: ''
        }, {
            key: 'mode',
            desc: `样式类型<pre>
1. mode=circle 圆形数字
2. mode=box 盒状
3. mode=tabs 
</pre>`,
            type: 'string',
            def: 'circle'
        }, {
            key: 'logo',
            desc: 'mode=box：logo地址',
            type: 'string',
            def: ''
        }, {
            key: 'color',
            desc: 'mode=box：盒子背景色',
            type: 'string',
            def: ''
        }, {
            key: 'color-gradient',
            desc: 'mode=box：盒子背景渐变色，若需要渐变，则color-gradient为深色',
            type: 'string',
            def: ''
        }]
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});