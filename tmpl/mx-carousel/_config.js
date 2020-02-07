//#gallery-config
module.exports = {
    'mx-carousel'(tag) {
        let ctrl = tag.seprateAttrs('div');
        return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>
            <div data-carousel="true">
                <div data-carousel-inner="true">${tag.content}</div>
            </div>
        </${ctrl.tag}>`;
    },
    'mx-carousel.panel'(tag) {
        return `<div ${tag.attrs} data-carousel-panel="true">${tag.content}</div>`;
    }
}