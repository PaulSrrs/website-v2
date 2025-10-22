import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';

const appCardCss = ":host{display:block;font-size:10px;margin-block-start:0;margin-block-end:0}.container-card{display:flex;flex-direction:column;height:37.6rem;width:26.2rem;justify-content:center;align-items:center;box-shadow:10px 10px 20px #00000029;border-radius:15px}img{height:auto;width:11.8rem}h3{color:#F1862E;font-size:2.4rem;line-height:2.8rem;margin:40px 0}h3.blue{color:blue}h3.purple{color:purple}button{width:14.8rem;height:auto;border:1px solid #F1862E;background-color:transparent;color:#F1862E;border-radius:33px;padding:1.6rem}button.blue{color:blue;border:1px solid blue}button.purple{color:purple;border:1px solid purple}";

const AppCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'primary';
  }
  render() {
    return (h(Host, null, h("slot", null, h("div", { class: "container-card" }, h("img", { src: `${this.image}` }), h("h3", { class: `${this.type}` }, this.cardTitle), h("button", { class: `${this.type}` }, this.buttonLabel)))));
  }
};
AppCard.style = appCardCss;

export { AppCard as app_card };
