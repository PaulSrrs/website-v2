import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageContactCss = ":host{display:block}";

const PageContact = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.CONTACT.TEXT), h("app-footer", null)));
  }
};
PageContact.style = pageContactCss;

export { PageContact as page_contact };
