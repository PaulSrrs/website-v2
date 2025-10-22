import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const appFooterCss = "#footer{background-color:#F2F4F8}.contain_footer{position:relative;max-width:1260px;margin-left:auto;margin-right:auto;padding:48px;display:flex;flex-direction:column}.copyright{position:absolute;margin:0;bottom:12px;left:24px}.footer-logo-container{flex-direction:column;align-items:center;flex:1}#footer img{width:100%;max-width:180px;padding:24px 0}#footer ul{list-style-type:none;margin-block-start:0;margin-block-end:0;padding-inline-start:0;margin-right:24px}#footer li{padding:8px 0;font-size:1.6rem}#footer li{padding:8px 0;font-size:1.6rem}a{text-decoration:none}#footer li>a{color:black}.round{width:176px;display:flex;justify-content:space-between;margin-bottom:24px}.round-mobile{display:none}.dot{height:36px;width:36px;background-color:#bbb;border-radius:50%;display:inline-block}.footer-logo-container{display:flex;align-items:flex-end}.contain_footer{display:flex;align-items:center;justify-content:center}.footer-lists{display:flex;flex-direction:row;width:100%;justify-content:flex-start;flex:1}@media (max-width: 768px){.contain_footer{padding:32px 64px}.footer-lists{flex-direction:column;align-items:center}.contain_footer ul{list-style-type:none;margin-block-start:0;margin-block-end:0;padding-inline-start:0;margin-bottom:22px}.footer-logo-container{display:flex;justify-content:center;align-items:center}#footer ul{margin-right:0;margin-bottom:24px}.contain_footer li{font-size:18px;padding:8px 0}.contain_footer li:first-child{font-family:'SF-Pro-Bold', sans-serif}@supports not (-webkit-touch-callout: none){.contain_footer li:first-child{font-family:'Helvetica-Now-Bold', sans-serif}}.round-mobile{display:flex;align-self:center;margin:32px 0}}.icon{font-family:'socrate-font', sans-serif}.icon.md{width:3.2rem;height:3.2rem;line-height:1;font-size:3.2rem;color:#F28922}";

const AppFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("section", { id: "footer" }, h("div", { class: "contain_footer" }, h("img", { alt: "Socrate beta logo blue", src: "./assets/images/logo-socrate-blue-beta.svg" }), this.displaySocialNetworks ?
      (h("div", { class: "round round-desktop" }, h("a", { href: translate.LINKEDIN, class: 'icon md' }, "\uE13B"), h("a", { href: translate.FACEBOOK, class: 'icon md' }, "\uE128"), h("a", { href: translate.INSTAGRAM, class: 'icon md' }, "\uE132"))) : null, h("p", { class: "copyright" }, translate.FOOTER.THIRD_COLUMNS.SECOND_LINK)))));
  }
};
AppFooter.style = appFooterCss;

export { AppFooter as app_footer };
