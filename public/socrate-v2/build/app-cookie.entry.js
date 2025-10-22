import { r as registerInstance, h, e as Host } from './index-d056c7a9.js';
import { t as translate } from './translate-d4f62c1a.js';

const appCookieCss = ":host{background-color:#F4F5F5;position:absolute;bottom:0;width:100vw}.cookies-ctn{display:flex;justify-content:space-between;align-items:center;flex-direction:column;max-width:1200px;width:100%;padding:1rem 0;margin:0 auto}.cookies-text{font-size:1rem}.btn-ctn{display:flex;flex-direction:column}.btn-ctn .accept{outline:none;border:none;background-color:#008BF4;color:#FCFDFD;border-radius:0.5rem;padding:0.75rem 1.25rem;cursor:pointer;transition:background-color 0.3s ease;margin:0.5rem 0}.btn-ctn .accept:hover{background-color:#0065B1}.btn-ctn .accept:active{background-color:#63C2F8}.btn-ctn .refuse{outline:none;border:none;background-color:#FCFDFD;color:#262433;border-radius:0.5rem;padding:0.75rem 1.25rem;cursor:pointer;transition:background-color 0.3s ease}.btn-ctn .refuse:hover{background-color:#F4F5F5}.btn-ctn .refuse:active{background-color:#FCFDFD}@media (min-width: 768px){.cookies-ctn{flex-direction:row}.cookies-text{font-size:1.25rem}.btn-ctn{flex-direction:row}.btn-ctn .accept{margin:0 1rem 0 0}}";

const AppCookie = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "cookies-ctn" }, h("p", { class: "cookies-text" }, translate.V2.COOKIES.DISCLAIMER), h("div", { class: "btn-ctn" }, h("button", { class: "accept" }, translate.V2.COOKIES.ACCEPT), h("button", { class: "refuse" }, translate.V2.COOKIES.REFUSE)))));
  }
};
AppCookie.style = appCookieCss;

export { AppCookie as app_cookie };
