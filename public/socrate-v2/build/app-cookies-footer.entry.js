import { r as registerInstance, h, e as Host, g as getElement } from './index-d056c7a9.js';
import { t as translate } from './translate-d4f62c1a.js';

const appCookiesFooterCss = ":host{position:fixed;bottom:0;left:0;background-color:#F4F5F5;transition:bottom 0.3s ease;width:100%}:host(.disabled){bottom:-214px !important}.cookies-ctn{display:flex;justify-content:space-between;align-items:center;flex-direction:column;max-width:1200px;padding:1rem;margin:0 auto}.cookies-text{font-size:1rem;text-align:center;margin:0}button{font-size:0.875rem;font-weight:500}.btn-ctn{display:flex;flex-direction:column}.btn-ctn .accept{outline:none;border:none;background-color:#008BF4;color:#FCFDFD;border-radius:0.5rem;padding:0.75rem 1.25rem;cursor:pointer;transition:background-color 0.3s ease;margin:1.25rem 0 0.75rem 0}.btn-ctn .accept:hover{background-color:#0065B1}.btn-ctn .accept:active{background-color:#63C2F8}.btn-ctn .necessary{border:1px solid #D5D9DD;outline:none;background-color:#FCFDFD;color:#262433;border-radius:0.5rem;padding:0.75rem 1.25rem;cursor:pointer;transition:background-color 0.3s ease}.btn-ctn .necessary:hover{background-color:#F4F5F5}.btn-ctn .necessary:active{background-color:#FCFDFD}@media (min-width: 768px){:host(.disabled){bottom:-80px !important}.cookies-text{text-align:left}.cookies-ctn{padding:1rem 0}.cookies-ctn{flex-direction:row}.btn-ctn{flex-direction:row}.btn-ctn .accept{margin:0 1rem 0 0}}";

const AppCookiesFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.cookiesAlreadyAccepted === false) {
      setTimeout(() => this.el.classList.remove('disabled'), 1000);
    }
  }
  acceptCookies() {
    //TODO deal with full cookies acceptation
    this.el.classList.add('disabled');
  }
  acceptOnlyNecessaryCookies() {
    //TODO deal with cookies acceptation ONLY FOR NECESSARY COOKIES
    this.el.classList.add('disabled');
  }
  render() {
    return (h(Host, null, h("div", { class: "cookies-ctn" }, h("p", { class: "cookies-text" }, translate.V2.COOKIES.DISCLAIMER), h("div", { class: "btn-ctn" }, h("button", { onClick: () => this.acceptCookies(), class: "accept" }, translate.V2.COOKIES.ACCEPT), h("button", { onClick: () => this.acceptOnlyNecessaryCookies(), class: "necessary" }, translate.V2.COOKIES.NECESSARY)))));
  }
  get el() { return getElement(this); }
};
AppCookiesFooter.style = appCookiesFooterCss;

export { AppCookiesFooter as app_cookies_footer };
