import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pagePrivacyCss = ":host{display:block}";

const PagePrivacy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.PRIVACY.TEXT), h("app-footer", null)));
  }
};
PagePrivacy.style = pagePrivacyCss;

export { PagePrivacy as page_privacy };
