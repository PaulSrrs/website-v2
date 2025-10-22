import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';
import { H as Helmet } from './stencil-helmet-01cab5d9.js';

const pageRegisteredCss = ":host{display:block;font-size:10px}#header{background-image:url(\"assets/images/bg_header_ordi.png\");background-repeat:no-repeat;background-position:center;background-size:cover}#section_header{text-align:center;display:flex;flex-direction:column;align-items:center}#section_header img:first-child{display:none}#section_header #img_mentor_customer{width:100%;max-width:300px;margin-top:106px;margin-bottom:24px}#section_header h1{margin-bottom:32px;text-transform:uppercase}#section_header p{color:#FFF;padding-bottom:138px}@media screen and (max-width: 767px){#header{background-image:url(\"assets/images/bg_header_ordi.png\");background-size:cover;background-repeat:no-repeat;background-position:center}#section_header{text-align:center;display:flex;flex-direction:column;justify-self:center;padding:0 32px}#section_header img:first-child{display:block;margin-top:40px;margin-bottom:40px;width:180px}#section_header #img_mentor_customer{max-width:50vw}#section_header h1{margin-bottom:16px}#section_header p{color:#FFF}}";

const PageRegistered = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h(Helmet, null, h("title", null, translate.META.REGISTERED.TITLE), h("meta", { name: 'description', content: translate.META.DESCRIPTION }), h("meta", { name: 'twitter:title', content: translate.META.TWITTER_TITLE }), h("meta", { name: 'twitter:description', content: translate.META.TWITTER_DESCRIPTION }), h("meta", { property: 'og:title', content: translate.META.OG_TITLE }), h("meta", { property: 'og:description', content: translate.META.OG_DESCRIPTION })), h("section", { id: "header" }, h("div", { class: "container", id: "section_header" }, h("img", { alt: "Socrate beta logo white", src: "./assets/images/logo-socrate-white-beta.svg" }), h("img", { alt: "Mentor and customer", src: "./assets/images/mentor_and_customer.png", id: "img_mentor_customer" }), h("h1", null, translate.REGISTERED.TITLE), h("p", null, translate.REGISTERED.DESCRIPTION))), h("app-footer", { displaySocialNetworks: true })));
  }
};
PageRegistered.style = pageRegisteredCss;

export { PageRegistered as page_registered };
