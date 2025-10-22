import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const appDownloadCss = ":host{display:block;font-size:10px}.inner-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto;max-width:50rem;width:100%}h3{color:#F1862E;font-size:5.2rem;line-height:5.9rem;margin-block-start:0;margin-block-end:0;text-align:center;margin-bottom:5.2rem}p{color:#B7B7B7;font-size:2rem;text-align:center;line-height:2.3rem;margin-bottom:5.2rem}button{background-color:transparent;border:1px solid #F1862E;color:#F1862E;font-size:1.5rem;border-radius:96px;padding:16px;margin-bottom:5.2rem}";

const DownloadApp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "inner-container" }, h("h3", null, translate.DOWNLOAD.TITLE), h("p", null, translate.DOWNLOAD.DESCRIPTION), h("a", { href: "" }, h("button", null, translate.DOWNLOAD.BUTTON_TEXT)))));
  }
};
DownloadApp.style = appDownloadCss;

export { DownloadApp as app_download };
