import { r as registerInstance, h } from './index-6cbc93cc.js';
import { l as loadTranslation } from './translate-00415bcc.js';

const appRootCss = "";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    return loadTranslation();
  }
  render() {
    return (h("main", null, h("stencil-router", null, h("stencil-route", { url: "/", component: "page-landing", exact: true }), h("stencil-route", { url: "/accepted", component: "page-registered" }), h("stencil-route", { component: "page-not-found" }))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
