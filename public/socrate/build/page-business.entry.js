import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageBusinessCss = ":host{display:block}";

const PageBusiness = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.BUSINESS.TEXT), h("app-footer", null)));
  }
};
PageBusiness.style = pageBusinessCss;

export { PageBusiness as page_business };
