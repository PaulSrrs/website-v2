import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageLearnCss = ":host{display:block}";

const PageLearn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.LEARN.TEXT), h("app-footer", null)));
  }
};
PageLearn.style = pageLearnCss;

export { PageLearn as page_learn };
