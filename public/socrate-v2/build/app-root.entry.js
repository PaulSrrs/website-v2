import { r as registerInstance, h } from './index-d056c7a9.js';
import { l as loadTranslation } from './translate-d4f62c1a.js';

const appRootCss = "";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    return loadTranslation();
  }
  render() {
    return (h("main", null, h("stencil-router", null, h("stencil-route", { url: "/", component: "page-landing", exact: true }))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
