import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageAboutUsCss = ":host{display:block}";

const PageAboutUs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.ABOUT_US.TEXT), h("app-footer", null)));
  }
};
PageAboutUs.style = pageAboutUsCss;

export { PageAboutUs as page_about_us };
