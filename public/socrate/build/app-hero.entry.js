import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';

const appHeroCss = ":host{display:block;height:101vh;background-position:bottom;background-position-x:10%;background-size:cover;background-repeat:no-repeat;color:white;font-size:10px}.group-hero{position:absolute;top:32vh;left:14vw;width:612px}img{margin-bottom:12px}h1{font-family:SF-Pro, sans-serif;font-size:4.8rem;text-align:left;line-height:5.6rem;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;margin-bottom:42px}p{font-family:Roboto, sans-serif;font-size:2rem;text-align:left;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;margin-bottom:42px}button{background-color:transparent;border:1px solid white;color:white;width:215px;height:52px;border-radius:33px;text-align:center;font-family:Roboto, sans-serif;outline:none}@media screen and (max-width: 1440px){.group-hero{left:10vw}}@media screen and (max-width: 1024px){.group-hero{top:28vh}h1{font-size:4.5rem}p{font-size:1.5rem}}@media screen and (max-width: 768px){.group-hero{text-align:center;max-width:76%;margin:0 40px;left:0}h1{text-align:inherit;font-size:2.8rem;line-height:3.2rem}p{font-size:16px}}@media screen and (max-height: 740px){:host{min-height:740px}.group-hero{top:18vh}}";

const AppHero = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { style: { 'background-image': `url(${this.imageUrl})` } }, h("div", { class: "group-hero" }, h("img", { src: "./assets/images/trace_141.png" }), h("h1", null, this.titleHero), h("p", null, this.paragraph), h("a", { href: this.buttonURL }, h("button", null, this.buttonText)))));
  }
};
AppHero.style = appHeroCss;

export { AppHero as app_hero };
