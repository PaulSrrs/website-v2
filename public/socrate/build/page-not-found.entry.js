import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageNotFoundCss = ":host{display:block}";

const PageNotFound = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("p", null, translate.META.NOT_FOUND.TEXT)));
  }
};
PageNotFound.style = pageNotFoundCss;

export { PageNotFound as page_not_found };
