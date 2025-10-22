import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';

const appRoundImageCss = ":host{display:block}img{border:white 5px solid;width:54rem;height:54rem;border-radius:540px;box-shadow:11px 10px 19px #00000029}@media screen and (max-width: 984px){img{display:none}}";

const AppRoundImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("img", { src: `${this.src}`, alt: "" })));
  }
};
AppRoundImage.style = appRoundImageCss;

export { AppRoundImage as app_round_image };
