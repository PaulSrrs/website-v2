import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const pageHomeCss = ":host{margin:0;padding:0}section{position:relative;overflow:hidden}.img-one{position:absolute;top:13vh;left:51vw;z-index:2;height:65vh}.container-img-two{position:absolute;top:32vh;left:59vw;z-index:1;backdrop-filter:blur(33px);box-shadow:11px 10px 19px #5C5C5C29;height:60vh;overflow:hidden}.img-two{height:100%}";

const PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("app-nav-bar", null), h("section", null, h("app-hero", { "image-url": './assets/images/learning_background.png', titleHero: translate.HERO.TITLE, paragraph: translate.HERO.PARAGRAPH, buttonText: translate.HERO.BUTTON_TEXT, buttonURL: 'https://apps.apple.com/fr/app/socrate/id1449120104' }), h("app-platform-preview", { mobileImage: './assets/images/iPhone_X.png', webImage: './assets/images/Rectangle_48.png' })), h("app-platform-preview", { mobileImage: './assets/images/iPhone_X.png', webImage: './assets/images/Rectangle_48.png', position: 'left' }), h("section", null, h("app-content-block", { url: './assets/images/trace_141.png', contentTitle: translate.HERO.TITLE, paragraph: translate.HERO.PARAGRAPH, buttonText: translate.HERO.BUTTON_TEXT, buttonURL: 'https://apps.apple.com/fr/app/socrate/id1449120104', position: 'right', color: 'blue' })), h("app-download", null), h("app-footer", null)));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };
