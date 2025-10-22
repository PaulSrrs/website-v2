import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageCookiesCss = ":host{display:block}";

const PageCookies = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.COOKIES.TEXT), h("app-footer", null)));
  }
};
PageCookies.style = pageCookiesCss;

export { PageCookies as page_cookies };
