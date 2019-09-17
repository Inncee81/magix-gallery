let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: [
                '动画播放模式',
                'carousel：跑马灯切换',
                'fade：渐显渐隐'
            ].join('<br>'),
            type: 'string',
            def: 'carousel'
        }, {
            key: 'height',
            desc: '容器高度',
            type: 'number',
            def: 200
        }, {
            key: 'active',
            desc: '默认激活第几帧，第一帧为0',
            type: 'number',
            def: 0
        }, {
            key: 'autoplay',
            desc: '是否自动播放，自动播放时鼠标hover暂停播放，移出恢复播放',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'dots',
            desc: '是否显示缩略点',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'dot-type',
            desc: `<pre>内置轮播点样式
1. line-in-center：轮播内容内部线型点居中显示
2. line-in-left：轮播内容内部线型点居左显示
3. line-in-right：轮播内容内部线型点居右显示
4. line-out-center：轮播内容外部线型点居中显示
5. dot-in-center：轮播内容内部圆形点居中显示
6. dot-in-left：轮播内容内部圆形点居左显示
7. dot-in-right：轮播内容内部圆形点居右显示
8. dot-out-center：轮播内容外部圆形点居中显示
</pre>`,
            type: 'string',
            def: 'line-in-center'
        }, {
            key: 'dot-class',
            desc: '自定义轮播点样式',
            type: 'string',
            def: ''
        }, {
            key: 'triggers',
            desc: '是否显示左右切换箭头，默认不显示，配置显示时hover出现切换箭头',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'trigger-class',
            desc: '自定义切换箭头样式',
            type: 'string',
            def: ''
        }, {
            key: 'prev-trigger',
            desc: '自定义上一帧trigger的id',
            type: 'string',
            def: ''
        }, {
            key: 'next-trigger',
            desc: '自定义下一帧trigger的id',
            type: 'string',
            def: ''
        }, {
            key: 'interval',
            desc: '播放暂停间隔，单位毫秒',
            type: 'number',
            def: '3000'
        }, {
            key: 'timing',
            desc: [
                '定义同transition-timing-function',
                'linear：规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）',
                'ease：规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）',
                'ease-in：规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）',
                'ease-out：规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）',
                'ease-in-out：规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）',
                'cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值'
            ].join('<br>'),
            type: 'string',
            def: 'ease-in-out'
        }, {
            key: 'duration',
            desc: '动画持续时间',
            type: 'string',
            def: '0.5s'
        }, {
            key: 'vertical',
            desc: '是否垂直方向播放',
            type: 'boolean',
            def: 'false'
        }]
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});