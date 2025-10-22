import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageMentorsCss = ":host{display:block}";

const PageMentors = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("p", null, translate.META.MENTORS.TEXT), h("app-footer", null)));
  }
};
PageMentors.style = pageMentorsCss;

export { PageMentors as page_mentors };
