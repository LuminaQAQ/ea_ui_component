import Base from '../Base';

const stylesheet = `
@import url('/ea_ui_component/icon/index.css');
`;

export class EaSelect extends Base {
    #wrap;
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot = shadowRoot;
        const wrap = document.createElement('div');
        wrap.className = 'ea-select_wrap';

        this.#wrap = wrap;

        this.build(shadowRoot, stylesheet);
        this.shadowRoot.appendChild(wrap);
    }

    init() {
        const that = this;
    }

    connectedCallback() {
        this.init();
    }
}

if (!window.customElements.get("ea-select")) {
    window.customElements.define("ea-select", EaSelect);
}