/*md5:1fe3776c98de55d18ff14e66773ffcca*/
let $ = require('$');
let Magix = require('magix');
let Router = Magix.Router;
let Map = {
    desc: '&#xe606;',
    asc: '&#xe607;',
    default: '&#xe608;'
}
module.exports = {
    ctor() {
        let me = this;
        let ready = () => {
            let locParams = Router.parse().params;
            let context = $('#' + me.id);
            let trigger = context.find('[sort-trigger]');

            trigger.each((idx, item) => {
                item = $(item)
                let field = item.attr('sort-trigger');

                // 保留在地址栏的排序字段key
                let orderFieldKey = item.attr('order-field-key') || 'orderField';
                // 当前排序字段
                let orderField = item.attr('sort-field') || locParams[orderFieldKey];

                // 保留在地址栏的排序方式key
                let orderByKey = item.attr('order-by-key') || 'orderBy';
                // 当前排序方式
                let orderBy = item.attr('sort-orderby') || locParams[orderByKey] || 'default';

                let icon;
                if (orderField == field) {
                    icon = Map[orderBy];
                } else {
                    icon = Map.default;
                }

                me['@{order.field.key}'] = orderFieldKey;
                me['@{order.field}'] = orderField;
                me['@{order.by.key}'] = orderByKey;
                me['@{order.by}'] = orderBy;

                item.html(`<i class="mc-iconfont displacement-2 cursor-pointer">${icon}</i>`);
            });
        }
        me.on('rendered', ready);
        me.on('domready', ready);
    },

    /**
     * 本地排序
     */
    sort(list, orderFieldKey, orderByKey) {
        if(DEBUG){
            console.warn('本地排序方法：如果自定义保留在地址栏的排序字段和排序方式字段，请显示的传入该值，否则默认取地址栏orderField，orderBy');
        }
        list = list || [];

        let locParams = Router.parse().params;
        orderFieldKey = orderFieldKey || 'orderField';
        orderByKey = orderByKey || 'orderBy';
        let orderField = locParams[orderFieldKey],
            orderBy = locParams[orderByKey];
        if (!orderField) {
            return list;
        }

        let emptyList = [];
        for (var i = 0; i < list.length; i++) {
            let item = list[i];
            if (!item[orderField]) {
                emptyList.push(item);
                list.splice(i--, 1);
            }
        }

        switch (orderBy) {
            case 'desc':
                list = list.sort((a, b) => {
                    return (+b[orderField]) - (+a[orderField]);
                });
                break;
            case 'asc':
                list = list.sort((a, b) => {
                    return (+a[orderField]) - (+b[orderField]);
                });
                break;
        }

        return list.concat(emptyList);
    },

    /**
     * 点击排序按钮
     */
    '$[sort-trigger]<click>'(e) {
        let me = this;
        let context = $('#' + me.id);
        let item = $(e.eventTarget);
        let trigger = item.attr('sort-trigger');

        let oldOrderField = me['@{order.field}'],
            oldOrderBy = me['@{order.by}'];

        let orderBy, orderField = trigger;
        if (oldOrderField == trigger) {
            if (oldOrderBy == 'asc') {
                orderBy = 'desc';
            } else {
                orderBy = 'asc';
            }
        } else {
            // 默认降序
            orderBy = 'desc';
        }

        Router.to({
            [me['@{order.field.key}']]: orderField,
            [me['@{order.by.key}']]: orderBy
        });
    }
};