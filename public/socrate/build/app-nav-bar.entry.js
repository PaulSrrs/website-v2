import { r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';

const appNavBarCss = ":host{display:block;position:fixed;top:0;left:0;width:100%;margin:0;padding:0;z-index:1}nav{box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;height:64px;transition:height 0.2s ease, background-color 0.2s ease;padding:10px 40px 0 40px}#navbar-container{display:flex}ul{display:flex;flex-direction:row;align-items:center}li{margin-right:39px}a{list-style-type:none;color:white;font-size:1.8rem;font-family:Roboto, sans-serif}a:link{text-decoration:none}button{background-color:white;color:#F1862E;box-shadow:#5C5C5C29 11px 10px 19px;width:158px;height:50px;text-align:center;border-radius:106px;outline:none;border:none;font-size:1.5rem}.logo_socrate{display:block;width:116px;height:64px;background-color:white}.mobile-menu{display:none;cursor:pointer}@media screen and (max-width: 984px){#navbar-container{flex-direction:column}ul{display:none;flex:1;padding-inline-start:0}.mobile-menu{display:flex;flex-direction:column;justify-content:center;align-items:center;width:6.8rem;height:5.2rem;background:rgba(255, 255, 255, 0.25);border-radius:70px}.mobile-menu span{margin:4px;display:block;width:3.2rem;height:0.4rem;background:rgba(255, 255, 255, 1);border-radius:61px;transition:transform 0.3s ease, opacity 0.15s ease}nav.opened ul{visibility:visible;display:flex;flex-direction:column;justify-content:space-between;align-content:center;position:absolute;width:100%;top:35%;left:0;height:52%}nav.opened li{line-height:26px;margin-bottom:32px}nav.opened li:active{border:none;border-bottom:1px solid white}nav.opened{display:flex;flex-direction:row;height:100vh;background-image:url('./assets/images/menu_background.png');margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;background-position-y:20%;background-position-x:40%}nav.opened .mobile-menu span:first-child{transform:translateY(1.4em) rotateZ(45deg)}nav.opened .mobile-menu span:nth-child(2){opacity:0}nav.opened .mobile-menu span:last-child{transform:translateY(-1em) rotateZ(-45deg)}}";

const AppNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = false;
  }
  onMobileMenuClicked() {
    this.opened = !this.opened;
  }
  render() {
    return (h(Host, null, h("header", null, h("nav", { class: { 'opened': this.opened } }, h("stencil-route-link", { url: "/" }, h("img", { src: "./assets/images/LOG-FONT-WHITE.png", class: "logo_socrate" })), h("ul", null, h("div", { id: "navbar-container" }, h("stencil-route-link", { url: "/how-it-works" }, h("li", null, translate.NAVBAR.HOW_IT_WORKS)), h("stencil-route-link", { url: "/about-us" }, h("li", null, translate.NAVBAR.ABOUT)), h("stencil-route-link", { url: "/socrate" }, h("li", null, translate.NAVBAR.SOCRATE)), h("stencil-route-link", { url: "/contact" }, h("li", null, translate.NAVBAR.CONTACT))), h("stencil-route-link", { url: "/", class: "button-modification" }, h("button", null, translate.NAVBAR.REGISTRATION))), h("div", { class: "mobile-menu", onClick: () => this.onMobileMenuClicked() }, h("span", null), h("span", null), h("span", null))))));
  }
};
AppNavBar.style = appNavBarCss;

export { AppNavBar as app_nav_bar };
