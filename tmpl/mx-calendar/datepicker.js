let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-util/monitor');
let Util = require('@./util');
let I18n = require('../mx-medusa/util');
let GetDefaultDate = Util.getDefaultDate;
Magix.applyStyle('@rangepicker.less');

module.exports = Magix.View.extend({
    tmpl: '@datepicker.html',
    init(extra) {
        let that = this;

        Monitor['@{setup}']();
        that.on('destroy', () => {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });

        let dateInfo = $.extend(true, {}, extra);
        dateInfo.placeholder = dateInfo.placeholder || I18n['choose'];
        that.updater.set({
            viewId: that.id,
            dateInfo
        })

        // 支持mx-disabled或者disabled
        that['@{ui.disabled}'] = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
    },

    render() {
        // 没有selected默认不填充
        // if (!dateInfo.selected) {
        //     dateInfo.selected = GetDefaultDate(dateInfo.min, dateInfo.max, dateInfo.formatter);
        // }
        let that = this;
        that.updater.digest();
        that['@{owner.node}'] = $('#' + that.id);
    },
    '@{inside}'(node) {
        let that = this;
        return Magix.inside(node, that.id) || Magix.inside(node, that['@{owner.node}'][0]);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },

    '@{toggle}<click>'(e) {
        if (this['@{ui.disabled}']) {
            return;
        }

        e.preventDefault();
        let show = this.updater.get('show');
        if (show) {
            this['@{hide}']();
        } else {
            this['@{show}']();
        }
    },

    '@{show}'() {
        let that = this;
        let show = that.updater.get('show');
        if (!show) {
            that.updater.digest({
                show: true
            })

            let inputNode = $('#trigger_' + that.id),
                calNode = $('#dpcnt_' + that.id);
            let dateInfo = that.updater.get('dateInfo');
            let left = 0,
                top = inputNode.outerHeight();
            if (dateInfo.align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }

            that.updater.digest({
                top,
                left
            })

            Monitor['@{add}'](that);
        }
    },
    '@{hide}'() {
        let that = this;
        let show = that.updater.get('show');
        if (show) {
            that.updater.digest({
                show: false
            })

            Monitor['@{remove}'](that);
        }
    },

    '@{date.picked}<change>'(e) {
        let that = this;
        e.stopPropagation();
        let dateInfo = that.updater.get('dateInfo');
        dateInfo.selected = e.date + (e.time ? ' ' + e.time : '');
        that.updater.digest({
            dateInfo: dateInfo
        })
        that['@{hide}']();

        // 通知外层数据更新
        that['@{owner.node}'].val(dateInfo.selected).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
    },
    '@{hide}<cancel>'() {
        this['@{hide}']();
    }
});