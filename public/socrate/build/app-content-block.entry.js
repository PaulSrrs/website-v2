import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';

const appContentBlockCss = ":host{display:block;height:101vh;background-position:bottom;background-position-x:10%;background-size:cover;background-repeat:no-repeat;font-size:10px}.group{position:absolute;top:32vh;left:14vw;width:612px}img{margin-bottom:12px}h2{font-family:SF-Pro, sans-serif;font-size:4.8rem;text-align:left;line-height:5.6rem;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;margin-bottom:42px;color:orange}p{font-family:SF-Pro, sans-serif;font-size:2rem;text-align:left;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;margin-bottom:42px;color:gray}button{background-color:transparent;border:1px solid orange;color:orange;width:215px;height:52px;border-radius:33px;text-align:center;font-family:Roboto, sans-serif;outline:none}h2.purple{color:purple}button.purple{color:purple;border:1px solid purple}h2.blue{color:blue}button.blue{color:blue;border:1px solid blue}.right.group{left:50vw}@media screen and (max-width: 1440px){.group{left:10vw}}@media screen and (max-width: 1024px){.group{top:28vh}h2{font-size:4.5rem}p{font-size:1.5rem}}@media screen and (max-width: 768px){.group{text-align:center;max-width:76%;margin:0 40px;left:0}h2{text-align:inherit;font-size:2.8rem;line-height:3.2rem}p{font-size:16px}}@media screen and (max-height: 740px){:host{min-height:740px}.group{top:18vh}}";

const AppContentBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = 'left';
    this.color = 'primary';
  }
  render() {
    return (h(Host, null, h("div", { class: `${this.position} group` }, h("img", { src: `${this.url}` }), h("h2", { class: `${this.color}` }, this.contentTitle), h("p", null, this.paragraph), h("a", { href: this.buttonURL }, h("button", { class: `${this.color}` }, this.buttonText)))));
  }
};
AppContentBlock.style = appContentBlockCss;

export { AppContentBlock as app_content_block };
