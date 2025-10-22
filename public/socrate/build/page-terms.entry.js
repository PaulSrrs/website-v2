import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageTermsCss = ":host{display:block}";

const PageTerms = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.TERMS.TEXT), h("app-footer", null)));
  }
};
PageTerms.style = pageTermsCss;

export { PageTerms as page_terms };
