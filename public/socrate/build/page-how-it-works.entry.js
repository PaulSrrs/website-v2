import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageHowItWorksCss = ":host{display:block}";

const PageHowItWorks = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.HOW_IT_WORKS.TEXT), h("app-footer", null)));
  }
};
PageHowItWorks.style = pageHowItWorksCss;

export { PageHowItWorks as page_how_it_works };
