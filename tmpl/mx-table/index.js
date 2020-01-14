/**
 * 功能：只左侧滚动（外部固定左侧的宽度） + hover展示操作项目
 */
const Magix = require('magix');
const $ = require('$');
const WidthReg = /width\s*:\s*([\d\.]+)px/;
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        // 默认展示第一行
        me['@{hover.index}'] = 0;

        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        me['@{need.sticky}'] = (extra.sticky + '') === 'true';
        me['@{sticky.end}'] = (extra.stickyEnd + '') === 'true'; //滚动时隐藏吸顶，结束滚动吸顶
        me['@{sticky.interval}'] = extra.stickyInterval || 0;
        me['@{hover.class}'] = extra.rowHoverClass || 'hover-tr';

        // 自定义滚动节点
        if (extra.scrollWrapper) {
            me['@{scroll.wrapper}'] = $('#' + extra.scrollWrapper);
        }

        me.assign();
    },
    /**
     * 每次都重新计算
     */
    assign() {
        return true;
    },
    render() {
        let me = this;
        let node = me['@{owner.node}'];
        let leftTable = node.find('table[left="true"]');
        if (leftTable && leftTable.length > 0) {
            me['@{table.left}'] = leftTable;
            me['@{table.left.wrapper}'] = me['@{wrapper.get}'](leftTable, 'left');
            me['@{table.left.thead}'] = leftTable.find('thead');
            me['@{table.main}'] = node.find('table[center="true"]');
        } else {
            me['@{table.main}'] = node.find('table');
        }
        me['@{table.main.wrapper}'] = me['@{wrapper.get}'](me['@{table.main}'], 'main');
        me['@{table.main.thead}'] = me['@{table.main}'].find('thead');

        // 初始化
        me['@{table.init}']();
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'add');
        if (Magix.task) {
            Magix.task(me['@{table.init}'], [], me);
        }
    },

    '@{wrapper.get}'(table, id) {
        id = this.id + '_' + id;
        table.attr('id', id + '_table');
        let wrapper = table.parent('div');
        wrapper.attr('id', id);
        return wrapper;
    },

    '@{table.init}'() {
        let me = this;

        // 左侧固定表格
        let leftTable = me['@{table.left}'],
            mainTable = me['@{table.main}'];
        if (leftTable) {
            // 左右分栏

            // 计算左侧固定表格宽度
            me['@{left.table.sync.width}']();

            // 滚动表格跨度
            let wrapper = me['@{table.main.wrapper}'];
            wrapper.addClass('@index.less:wrapper');
            // outerWidth包含padding
            // width不包含padding
            wrapper.css('left', leftTable.outerWidth());
            me['@{main.table.sync.width}']();

            // 表格分栏时同步两边表格的内容的高度
            me['@{table.sync.height}']();
        }
        // 同步宽度
        me['@{table.sync.th.width}']();

        // 分栏时模拟滚动条
        // windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
        me['@{scroll.init}']();

        // 表头吸顶
        me['@{sticky.init}']();
    },

    /**
     * 分栏时模拟滚动条
     * windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
     */
    '@{scroll.init}'() {
        let me = this;
        let viewId = me.id;
        let leftWrapper = me['@{table.left.wrapper}'];

        let inmain, watchInmainScroll;
        if (me['@{scroll.wrapper}']) {
            inmain = me['@{scroll.wrapper}'];
            watchInmainScroll = () => {
                me['@{sync.scroll.pos.custom}'](inmain);
            };
        } else {
            inmain = $(window);
            watchInmainScroll = () => {
                me['@{sync.scroll.pos.win}'](inmain);
            };
        }
        if (leftWrapper && (leftWrapper.length > 0) && (leftWrapper.hasClass('@index.less:left-shadow'))) {
            me['@{need.scroll}'] = true;
            let mainWrapper = me['@{table.main.wrapper}'],
                mainTable = me['@{table.main}'];

            let outerWidth = mainWrapper.width(),
                innerWidth = mainTable.width();

            let scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.css({
                    width: outerWidth
                });
                scrollbar.find('.@index.less:bar').width(innerWidth);
            } else {
                let tmpl = `<div id="${viewId}_scrollbar" class="@index.less:scrollbar" style="width:${outerWidth}px;"><div class="@index.less:bar" style="width:${innerWidth}px;"><div><div>`
                mainWrapper.after($(tmpl));
                scrollbar = $('#' + viewId + '_scrollbar');
            }

            let syncToMain = () => {
                mainWrapper[0].scrollLeft = scrollbar[0].scrollLeft;
            }
            let syncToLeft = () => {
                let sl = mainWrapper[0].scrollLeft;
                scrollbar[0].scrollLeft = sl;
                // 缓存滚动位置，下次刷新时候恢复
                me['@{scroll.left.back}'] = sl;
            }
            scrollbar.off('scroll', syncToMain).on('scroll', syncToMain);
            mainWrapper.off('scroll', syncToLeft).on('scroll', syncToLeft);
            me.on('destroy', () => {
                inmain.off('scroll.custombar', watchInmainScroll);
            });
            inmain.off('scroll.custombar', watchInmainScroll).on('scroll.custombar', watchInmainScroll);

            watchInmainScroll();
            if (me['@{scroll.left.back}']) {
                mainWrapper[0].scrollLeft = me['@{scroll.left.back}'];
                scrollbar[0].scrollLeft = me['@{scroll.left.back}'];
            }
        } else {
            me['@{need.scroll}'] = false;
            let scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.remove();
            }
        }
    },

    /**
     * 吸顶
     */
    '@{sticky.init}'() {
        let me = this;
        let owner = me['@{owner.node}'];
        let mainHeader = me['@{table.main.thead}'],
            leftHeader = me['@{table.left.thead}'];

        if (me['@{need.sticky}']) {
            if (me['@{scroll.wrapper}']) {
                // 自定义滚动节点
                let inmain = me['@{scroll.wrapper}'];
                let watchInmainScroll = () => {
                    let top = inmain.scrollTop();
                    let max = owner.height() - inmain.height();
                    if (top >= 0 && top <= max) {
                        me['@{sync.sticky.pos}'](inmain, top);
                    } else {
                        me['@{sync.sticky.pos.recover}'](inmain);
                    }
                };
                me.on('destroy', () => {
                    inmain.off('scroll.customsticky', watchInmainScroll);
                });
                inmain.on('scroll.customsticky', watchInmainScroll);
                watchInmainScroll();
            } else {
                // 相对于window滚动
                let inmain = $(window);
                let headerHeight = me['@{table.main.thead}'].height();

                // 预留顶部间隔
                let interval = +me['@{sticky.interval}'];

                let watchInmainScroll = () => {
                    let top = inmain.scrollTop();
                    let ownerOffset = owner.offset();

                    let min = ownerOffset.top - interval;
                    let max = min + owner.height() - headerHeight;
                    if (top >= min && top <= max) {
                        me['@{sync.sticky.pos}'](inmain, top - min);
                    } else {
                        me['@{sync.sticky.pos.recover}'](inmain);
                    }
                };
                me.on('destroy', () => {
                    inmain.off('scroll.sticky');
                });

                if (me['@{sticky.end}']) {
                    // 滚动时隐藏，滚动结束显示
                    inmain.on('scroll.sticky', () => {
                        me['@{sync.sticky.pos.recover}'](inmain);

                        clearTimeout(me['@{sticky.end.timer}']);
                        me['@{sticky.end.timer}'] = setTimeout(me.wrapAsync(() => {
                            let top = inmain.scrollTop();
                            let ownerOffset = owner.offset();

                            let min = ownerOffset.top - interval;
                            let max = min + owner.height() - headerHeight;
                            if (top >= min && top <= max) {
                                me['@{sync.sticky.pos}'](inmain, top - min - headerHeight);
                                let duration = 200;
                                mainHeader.animate({
                                    top: top - min
                                }, duration);
                                if (leftHeader) {
                                    leftHeader.animate({
                                        top: top - min
                                    }, duration);
                                }
                            } else {
                                me['@{sync.sticky.pos.recover}'](inmain);
                            }
                        }), 250);
                    });
                } else {
                    inmain.on('scroll.sticky', watchInmainScroll);
                }
                watchInmainScroll();
            }
        }
    },

    '@{table.sync.th.width}'(table) {
        let me = this;
        let wrapFn = (table) => {
            // 宽度设置在th上
            let widthArr = [], sum = 0;
            let firstThs = table.find('thead>tr:first-child>th');
            for (let i = 0; i < firstThs.length; i++) {
                let th = firstThs.eq(i);
                let colspan = +th.attr('colspan') || 1;

                let width = 0;
                let style = th.attr('style');
                if (style) {
                    let m = style.match(WidthReg);
                    if (m) {
                        width = +m[1];
                    }
                }
                width = width || +th.attr('width') || th.outerWidth();

                for (let j = 0; j < colspan; j++) {
                    let colWidth = width / colspan;
                    sum += colWidth;
                    widthArr.push(colWidth);
                }
            }

            // 按比例修正，宽度都是整数
            let tableWidth = table.width();
            let arrLen = widthArr.length,
                amendSum = 0;
            for (let i = 0; i < (arrLen - 1); i++) {
                let amendWidth = parseInt(tableWidth * widthArr[i] / sum);
                amendSum += amendWidth;
                widthArr[i] = amendWidth;
            }
            widthArr[arrLen - 1] = tableWidth - amendSum;

            let setItems = (lines) => {
                // 同步宽度到表头
                // 二维数组
                let rows = [];

                // 计算同一行的x位置
                for (let i = 0; i < lines.length; i++) {
                    let items = $(lines[i]).children();
                    let gap = 0, row = [];
                    for (let j = 0; j < items.length; j++) {
                        let item = items.eq(j);
                        let colspan = +item.attr('colspan') || 1,
                            rowspan = +item.attr('rowspan') || 1;
                        row.push({
                            x: gap,
                            y: i,
                            colspan,
                            rowspan,
                            left: item.offset().left  //用于判断位置
                        })
                        gap = gap + colspan;
                    }
                    rows.push(row);
                }

                //计算 rowspan对后边行的影响
                rows.forEach((row, rowIndex) => {
                    row.forEach((cell, cellIndex) => {
                        if (cell.rowspan > 1) {
                            // 后面行，left<当前cell的位置进行移动
                            for (let nextRowIndex = rowIndex + 1; (nextRowIndex < rows.length) && (cell.rowspan > nextRowIndex - rowIndex); nextRowIndex++) {
                                let nextRow = rows[nextRowIndex];
                                nextRow.forEach((nextCell, nextCellIndex) => {
                                    if (nextCell.left > cell.left) {
                                        nextCell.x += cell.colspan;
                                    }
                                })
                            }
                        }
                    })
                })

                let len = lines.length;
                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        if ($(lines[i]).css('display') === 'none') {
                            // 不计算隐藏行的，避免计算错位
                            continue;
                        }
                        let items = $(lines[i]).children();
                        for (let j = 0; j < items.length; j++) {
                            let width = 0;
                            let cell = rows[i][j];
                            for (let k = 0; k < cell.colspan; k++) {
                                width += widthArr[cell.x + k];
                            }
                            // 包括padding
                            items.eq(j).attr('width', width);
                        }
                    }
                }
            }

            setItems(table.find('tbody>tr'));
            setItems(table.find('thead>tr'));
            table.find('thead').width(table.width());
        }
        wrapFn(me['@{table.main}']);
        if (me['@{table.left}']) {
            wrapFn(me['@{table.left}']);
        }
    },

    '@{add.placeholder}'() {
        let mainTable = this['@{table.main}'],
            leftTable = this['@{table.left}'];

        let add = (table) => {
            let g = table.find('colgroup[mx-table-placeholder]');
            if (!g.length) {
                let ths = table.find('thead tr:first-child th');
                let str = '<colgroup mx-table-placeholder>';
                for (let i = 0; i < ths.length; i++) {
                    let th = ths[i];
                    let span = +th.colSpan || 1;
                    let width = +th.width / span;
                    for (let j = 0; j < span; j++) {
                        str += `<col span="1" width="${width}" />`;
                    }
                }
                str += '</colgroup>';
                table.prepend($(str));
            }
        }
        add(mainTable);
        if (leftTable) {
            add(leftTable);
        }
    },

    '@{sync.sticky.pos}'(node, top) {
        let me = this;
        me['@{add.placeholder}']();

        let mainWrapper = me['@{table.main.wrapper}'],
            mainHeader = me['@{table.main.thead}'],
            leftWrapper = me['@{table.left.wrapper}'],
            leftHeader = me['@{table.left.thead}'];
        let headerHeight = mainHeader.height();
        mainWrapper.css({
            paddingTop: headerHeight
        })
        mainHeader.css({
            position: 'absolute',
            zIndex: 80,
            top
        });
        if (leftHeader) {
            leftWrapper.css({
                paddingTop: headerHeight
            })
            leftHeader.css({
                position: 'absolute',
                zIndex: 80,
                top
            });
        }
    },

    '@{sync.sticky.pos.recover}'(node) {
        let me = this;
        let mainWrapper = me['@{table.main.wrapper}'],
            mainHeader = me['@{table.main.thead}'],
            leftWrapper = me['@{table.left.wrapper}'],
            leftHeader = me['@{table.left.thead}'];
        mainWrapper.css({
            paddingTop: 0
        })
        mainHeader.css({
            position: 'initial',
            zIndex: 'auto',
            top: 'auto'
        });
        if (leftHeader) {
            leftWrapper.css({
                paddingTop: 0
            })
            leftHeader.css({
                position: 'initial',
                zIndex: 'auto',
                top: 'auto'
            });
        }
    },

    /**
     * 优先级 style.width > width
     */
    '@{table.width.get}'(table) {
        let width = 0;
        let tableStyle = table.attr('style');
        if (tableStyle) {
            let tm = tableStyle.match(WidthReg);
            if (tm) {
                width = +tm[1];
            }
        }
        width = width || +table.attr('width') || 0;
        if (!width) {
            let ths = table.find('thead>tr:first-child>th');
            for (let i = ths.length; i--;) {
                let th = ths.eq(i);
                let thWidth = 0;
                let thStyle = th.attr('style');
                if (thStyle) {
                    let m = thStyle.match(WidthReg);
                    if (m) {
                        thWidth = +m[1];
                    }
                }

                thWidth = thWidth || +th.attr('width') || th.outerWidth();
                width += thWidth;
            }
        }
        return width;
    },

    '@{left.table.sync.width}'() {
        let me = this;
        let table = me['@{table.left}'];
        let wrapper = me['@{table.left.wrapper}'];
        let width = me['@{table.width.get}'](table);
        table.css('width', width);
        wrapper.css('width', table.outerWidth());
    },

    '@{main.table.sync.width}'() {
        let me = this;
        let node = me['@{owner.node}'];
        let table = me['@{table.main}'];
        let leftTable = me['@{table.left}'];
        let layoutWidth = node.width() - leftTable.width();
        let width = me['@{table.width.get}'](table);
        let leftWrapper = me['@{table.left.wrapper}'];
        if (width > layoutWidth) {
            table.css('width', width);
            leftWrapper.css({
                'position': 'relative',
                'z-index': 2
            })
            leftWrapper.addClass('@index.less:left-shadow');
        } else {
            table.css('width', layoutWidth);
            leftWrapper.removeClass('@index.less:left-shadow');
        }
    },

    /**
     * 表格分栏时同步两边表格的高度
     */
    '@{table.sync.height}'() {
        let me = this;
        let table = me['@{table.main}'],
            leftTable = me['@{table.left}'];

        let trs = table.find('tbody>tr'),
            leftTrs = leftTable.find('tbody>tr');

        for (var i = 0; i < leftTrs.length; i++) {
            let maxHeight = Math.max(
                $(leftTrs[i]).height(),
                $(trs[i]).height()
            )
            $(leftTrs[i]).height(maxHeight);
            $(trs[i]).height(maxHeight);
        }

        // thead > tr（可能分组分行，最多两行）
        let mainHeadTrs = table.find('thead>tr'),
            leftHeadTrs = leftTable.find('thead>tr');
        let getHeight = (headTrs) => {
            let headHeight = 0;
            for (var i = 0; i < headTrs.length; i++) {
                headHeight += $(headTrs[i]).height();
            }
            return headHeight;
        }
        let maxHeaderHeight = Math.max(
            getHeight(mainHeadTrs),
            getHeight(leftHeadTrs)
        )
        if (mainHeadTrs.length == 1) {
            mainHeadTrs.height(maxHeaderHeight);
        }
        if (leftHeadTrs.length == 1) {
            leftHeadTrs.height(maxHeaderHeight);
        }
    },

    '$doc<htmlchanged>'(e) {
        let me = this;
        if (me.owner && (me.owner.pId == e.vId)) {
            me['@{trigger.rechange}']();
        }
    },

    '$doc<navslidend,tableresize>'(e) {
        this['@{trigger.rechange}']();
    },

    '$win<resize>'(e) {
        this['@{trigger.rechange}']();
    },

    '@{trigger.rechange}'() {
        let me = this;
        me['@{rechange}']();
        if (Magix.task) {
            Magix.task(me['@{rechange}'], [], me);
        }
    },

    '@{rechange}'() {
        let me = this;
        let leftTable = me['@{table.left}'];
        if (leftTable) {
            // 重新计算主体表格的宽度
            me['@{main.table.sync.width}']();

            // 重新同步内容高度
            me['@{table.sync.height}']();

            // 重新初始化模拟的滚动条
            me['@{scroll.init}']();
        }

        // 重新同步宽度
        me['@{table.sync.th.width}']();
    },

    '@{toggle.hover.state}'(index, action) {
        let me = this;
        let hoverClass = me['@{hover.class}'];
        let trs = me['@{table.main}'].find('tbody>tr');
        if (trs.length == 0) {
            // 表格被清空了
            return;
        }

        action = action + 'Class';
        let operationTrClass = 'operation-tr',
            operationTrOpenClass = 'operation-tr-open';

        let tr = trs.eq(index);
        if (!tr || !tr.length || (tr.css('display') == 'none')) {
            // 1. 数据变化可能导致hover行不存在了
            // 2. hover的这一行外部有样式控制隐藏了
            // 不存在则更新到第一行
            index = 0;
            me['@{hover.index}'] = index;
            me['@{owner.node}'].attr('data-hover', index);
            tr = trs.eq(index);
        }
        tr[action](hoverClass);

        let next = tr.next('.' + operationTrClass);
        let hasNext = next && next.length;
        if (hasNext) {
            next[action](operationTrOpenClass);
        }

        let leftTable = me['@{table.left}'];
        if (leftTable) {
            let leftTrs = leftTable.find('tbody>tr');
            let leftTr = leftTrs.eq(index);
            leftTr[action](hoverClass);
            if (hasNext) {
                let leftNext = leftTr.next('.' + operationTrClass);
                leftNext[action](operationTrOpenClass);
            }
        }
    },

    '$tbody>tr<mouseover>'(e) {
        let me = this;
        let hoverClass = me['@{hover.class}'];
        let target = e.eventTarget;
        let flag = !Magix.inside(e.relatedTarget, target);
        if (!flag || $(target).hasClass('operation-tr')) {
            // 操作行hover忽略
            return;
        }

        // 取消当前选中
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'remove');

        // 更新选中项
        let trs = $(target).parents('tbody').find('tr');
        let index = trs.index(target);
        me['@{hover.index}'] = index;
        me['@{toggle.hover.state}'](index, 'add');
    },

    '@{sync.scroll.pos.custom}'(node) {
        let me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        let top = node.scrollTop();

        let leftWrapper = me['@{table.left.wrapper}'],
            mainTable = me['@{table.main}'];
        let scrollbar = $('#' + me.id + '_scrollbar');
        let bar = scrollbar.find('.@index.less:bar');
        let scrollbarHeight = scrollbar.height(),
            barHeight = bar.height(),
            left = leftWrapper.width();

        let targetTop;;
        if (mainTable.height() > node.height()) {
            targetTop = node.height() - scrollbarHeight + top;
        } else {
            targetTop = node.height() - scrollbarHeight;
        }

        scrollbar.css({
            display: 'block',
            position: 'absolute',
            left: left,
            top: targetTop
        })
    },

    '@{sync.scroll.pos.win}'(node) {
        let me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        let top = node.scrollTop(),
            maxHeight = node.height();

        let leftWrapper = me['@{table.left.wrapper}'],
            mainTable = me['@{table.main}'];
        let tbody = mainTable.find('tbody');

        let between = (value) => {
            let min = top,
                max = top + maxHeight;
            return (min <= value) && (value <= max);
        }

        let scrollbar = $('#' + me.id + '_scrollbar');
        let bar = scrollbar.find('.@index.less:bar');
        let scrollbarHeight = scrollbar.height(),
            barHeight = bar.height();

        let tbodyTop = tbody.offset().top;
        let tbodyHeight = tbody.height();
        let tbodyBottom = tbodyTop + tbodyHeight + scrollbarHeight - barHeight;

        // table在视线范围之内
        if (tbodyBottom < top || tbodyTop > top + maxHeight) {
            scrollbar.css({
                display: 'none'
            })
        } else {
            if (between(tbodyBottom)) {
                // 底部可见
                let left = leftWrapper.width();
                scrollbar.css({
                    display: 'block',
                    position: 'absolute',
                    left: left,
                    bottom: barHeight - scrollbarHeight
                })
            } else {
                let left = leftWrapper.offset().left + leftWrapper.width();
                scrollbar.css({
                    display: 'block',
                    position: 'fixed',
                    left: left,
                    bottom: 0
                })
            }
        }

    }

});