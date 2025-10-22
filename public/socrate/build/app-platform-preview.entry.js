import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';

const appPlatformPreviewCss = ":host{display:flex;margin:0;padding:0}.img-one{position:absolute;top:13vh;left:51vw;height:65vh}div{position:absolute;top:32vh;left:59vw;backdrop-filter:blur(33px);box-shadow:11px 10px 19px #5C5C5C29;height:60vh;overflow:hidden}.img-two{height:100%}div.left{top:110vh;left:0;width:30vw}.img-one.left{left:19vw;top:130vh}@media screen and (max-width: 768px){.img-one{position:inherit;margin:auto}div{display:none}}";

const AppPlatformPreview = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = 'right';
  }
  render() {
    return (h(Host, null, h("div", { class: `${this.position}` }, h("img", { src: this.webImage, class: "img-two" })), h("img", { src: this.mobileImage, class: `${this.position} img-one` })));
  }
};
AppPlatformPreview.style = appPlatformPreviewCss;

export { AppPlatformPreview as app_platform_preview };
