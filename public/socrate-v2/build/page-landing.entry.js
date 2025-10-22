import { r as registerInstance, h, e as Host } from './index-d056c7a9.js';
import { t as translate } from './translate-d4f62c1a.js';

const isObject = (val) => !Array.isArray(val) && val !== null && typeof val === 'object';
const hasChildren = ({ vchildren }) => Array.isArray(vchildren);
const hasAttributes = ({ vattrs }, requiredAttrs = []) => isObject(vattrs) && requiredAttrs.every(vattrs.hasOwnProperty.bind(vattrs));
const isTextNode = ({ vtext }) => typeof vtext === 'string';
// Can't use instanceof HTMLElement because MockHTMLElement during pre-rendering isn't
const isElement = (val) => typeof val === 'object' && val.nodeType === 1 && typeof val.ownerDocument === 'object';
const isElementArray = (val) => Array.isArray(val) && val.every(isElement);
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});

const createElement = ({ vtag, vattrs, vchildren, vtext }) => {
    if (vtext != null) {
        return document.createTextNode(vtext);
    }
    const element = document.createElement(vtag);
    if (vattrs != null) {
        for (const key in vattrs) {
            element.setAttribute(key, vattrs[key]);
        }
    }
    if (vchildren != null) {
        for (const child of vchildren) {
            element.appendChild(createElement(convertToPublic(child)));
        }
    }
    return element;
};
const shouldApplyToHead = (val) => isElement(val) || (isElementArray(val) && val.length === 2);
const applyToHead = (element) => {
    if (Array.isArray(element)) {
        return document.head.replaceChild(element[0], element[1]);
    }
    return document.head.appendChild(element);
};

function title(node, head) {
    const firstChild = (node.vchildren || [])[0];
    if (hasChildren(node) && isTextNode(convertToPublic(firstChild))) {
        return [createElement(node), head.querySelector('title')];
    }
}
function meta(node, head) {
    var _a, _b, _c;
    const namePropKey = ((_a = node.vattrs) === null || _a === void 0 ? void 0 : _a.property) ? 'property' : 'name';
    const namePropValue = ((_b = node.vattrs) === null || _b === void 0 ? void 0 : _b.property) || ((_c = node.vattrs) === null || _c === void 0 ? void 0 : _c.name);
    const existingElement = head.querySelector(`meta[${namePropKey}="${namePropValue}"]`);
    if (existingElement !== null) {
        return [createElement(node), existingElement];
    }
    else {
        return createElement(node);
    }
}
function link(node) {
    if (!hasChildren(node)) {
        return createElement(node);
    }
}
function style(node) {
    const firstChild = (node.vchildren || [])[0];
    if (hasChildren(node) && isTextNode(convertToPublic(firstChild))) {
        return createElement(node);
    }
}
function script(node) {
    if (hasChildren(node) || hasAttributes(node)) {
        return createElement(node);
    }
}
function base(node) {
    if (!hasChildren(node) && hasAttributes(node)) {
        return createElement(node);
    }
}
const template = createElement;
const noscript = createElement; // SSR only
const types = {
    title,
    meta,
    link,
    style,
    script,
    base,
    template,
    noscript,
};

const headExists = document && document.head;
const validTagNames = Object.keys(types);
const isValidNode = (node) => validTagNames.indexOf(node.$tag$) > -1;
const renderNode = (node) => types[node.vtag](node, document.head);
const Helmet = (_props, children, utils) => {
    if (!headExists) {
        return null;
    }
    const validChildren = children.filter(isValidNode);
    // Build an HTMLElement for each provided virtual child
    const rendered = [];
    utils.forEach(validChildren, (n) => {
        rendered.push(renderNode(n));
    });
    rendered
        .filter(shouldApplyToHead)
        .forEach(applyToHead);
    return null;
};

const pageLandingCss = ".main-content{display:flex;flex-direction:column-reverse;padding:2.5rem 1rem;max-width:75rem;width:100%;margin:0 auto;background:#FCFDFD}.slides{display:flex;flex-direction:column-reverse;align-items:center;justify-content:center;margin-top:2rem}.slides .pagination{display:flex;margin:1rem 0 0 0}.slides .pagination>.pagination-dot{border-radius:50%;width:1rem;height:1rem;background:#D5D9DD;transition:background 0.7s ease;cursor:pointer}.slides .pagination>.pagination-dot:not(:last-child){margin:0 1rem 0 0}.slides .pagination>.pagination-dot.active{background:#008BF4}.slides .phones{position:relative;height:38.75rem;width:19.375rem;aspect-ratio:2 / 1}.slides .phones img{position:absolute;width:100%;height:100%;top:0;left:0;transition:opacity 0.7s ease;opacity:0}.slides .phones img.active{opacity:1}.slides-description{flex-direction:column}.slides-description>div:not(:last-child){margin-bottom:2rem}.slides-description img{width:1.25rem;height:1.25rem;margin-bottom:0.375rem}.slides-description h2{font-size:1rem;font-weight:bold;margin:0 0 1rem 0;line-height:1.5}.slides-description h2>span.blue{color:#008BF4}.slides-description p{font-size:0.875rem;margin:0;color:#556677;line-height:1.5;white-space:pre-wrap}.apple-store-badge{margin-left:-0.3125rem}.play-store-badge{margin-right:-0.875rem}.pre-footer{background-position:left;background-size:cover;background-repeat:no-repeat;background-image:url('../../assets/images/backgrounds/people-bg.png');background-color:#26243399;padding:1rem}.pre-footer-ctn{display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:2.5rem 0;max-width:75rem;width:100%;margin:0 auto}.pre-footer-ctn .pre-footer-left-ctn>h3{font-size:1.25rem;font-weight:bold;line-height:1.5;margin:0;color:#FCFDFD}.pre-footer-ctn .pre-footer-left-ctn>p{font-size:1rem;font-style:italic;margin:1rem 0 0 0;line-height:1.5;color:#FCFDFD;font-weight:400}.pre-footer-ctn .pre-footer-right-ctn{display:flex;align-items:center}.pre-footer-ctn div.btn-badges-ctn{margin-left:auto;margin-right:auto;display:table}.pre-footer-ctn button.socrate-on-browser{display:flex;width:100%;align-items:center;justify-content:center;flex-direction:row;outline:none;border:none;background-color:#FCFDFD;color:#262433;font-weight:bold;border-radius:0.5rem;padding:1rem 1.25rem;cursor:pointer;margin-top:2rem;transition:background-color 0.3s ease}.pre-footer-ctn button.socrate-on-browser:hover{background-color:#F4F5F5}.pre-footer-ctn button.socrate-on-browser:active{background-color:#FCFDFD}.pre-footer-ctn button.socrate-on-browser>p{font-size:0.875rem;margin:0 0.875rem 0 0;color:#262433;font-weight:bold}.pre-footer-ctn button.socrate-on-browser>img{width:1rem;height:1rem}.pre-footer-ctn div.badges-ctn{display:flex;align-items:center;flex-wrap:wrap;justify-content:center}.pre-footer-ctn div.badges-ctn img{width:8rem;height:2.3rem;margin-top:0.75rem}@media (min-width: 375px){.pre-footer-ctn div.badges-ctn img{width:10rem;height:2.875rem;margin-top:1rem}}.pre-footer-ctn div.badges-ctn>a:first-child{margin-right:1rem}@media (min-width: 768px){.main-content{padding:6rem 1rem}.main-content>div{display:flex;flex:1}.slides-description img{width:2rem;height:2rem;margin-bottom:1rem}.slides-description h2{font-size:1.5rem;margin:0 0 1.25rem 0}.slides-description p{font-size:1.25rem;margin:0}}@media (min-width: 1200px){.main-content{flex-direction:row}.slides{flex-direction:row;margin-top:0}.slides .phones{position:relative;height:80vh;width:40vh;max-height:56.25rem;max-width:28.125rem;aspect-ratio:2 / 1;margin-right:auto}.slides .pagination{flex-direction:column;margin:0 1rem 0 0}.slides .pagination>.pagination-dot:not(:last-child){margin:0 0 1rem 0}.slides-description>div:not(:last-child){margin-bottom:2.5rem}.pre-footer-ctn{flex-direction:row;padding:6rem 0}.pre-footer-ctn>.pre-footer-left-ctn>h3{font-size:2.5rem;white-space:pre-wrap}.pre-footer-ctn>.pre-footer-left-ctn>p{font-size:1.75rem;margin:2rem 0 0 0;white-space:pre-wrap}.pre-footer-ctn button.socrate-on-browser{padding:1.25rem 1.75rem;margin-top:0}.pre-footer-ctn button.socrate-on-browser>p{font-size:1.25rem}}a{text-decoration:none}";

const PageLanding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.slideIndex = 0;
  }
  componentWillLoad() {
    this.interval = window.setInterval(() => this.updateSlide(), 5000);
  }
  updateSlide() {
    this.slideIndex++;
    this.slideIndex -= this.slideIndex > 2 ? 3 : 0;
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[this.slideIndex].classList.add('active');
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[this.slideIndex].classList.add('active');
  }
  getCookiesStatus() {
    //TODO add logic to detect if cookies already accepted
    return false;
  }
  changePagination(index) {
    this.slideIndex = index - 1;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.updateSlide(), 5000);
    this.updateSlide();
  }
  render() {
    return (h(Host, null, h(Helmet, null, h("title", null, translate.META.TITLE), h("meta", { name: 'description', content: translate.META.DESCRIPTION }), h("meta", { property: "twitter:card", content: translate.META.TWITTER_CARD }), h("meta", { property: "twitter:url", content: translate.META.TWITTER_URL }), h("meta", { name: 'twitter:title', content: translate.META.TWITTER_TITLE }), h("meta", { name: 'twitter:description', content: translate.META.TWITTER_DESCRIPTION }), h("meta", { property: 'twitter:image', content: translate.META.TWITTER_IMAGE }), h("meta", { property: 'og:type', content: translate.META.OG_TYPE }), h("meta", { property: 'og:url', content: translate.META.OG_URL }), h("meta", { property: 'og:title', content: translate.META.OG_TITLE }), h("meta", { property: 'og:description', content: translate.META.OG_DESCRIPTION }), h("meta", { property: 'og:image', content: translate.META.OG_IMAGE })), h("app-hero", null), h("section", { class: 'main-content' }, h("div", { class: 'slides' }, h("div", { class: 'pagination' }, h("div", { onClick: () => this.changePagination(0), id: 'pagination-0', class: 'pagination-dot active' }), h("div", { onClick: () => this.changePagination(1), id: 'pagination-1', class: 'pagination-dot' }), h("div", { onClick: () => this.changePagination(2), id: 'pagination-2', class: 'pagination-dot' })), h("div", { class: 'phones' }, h("img", { id: 'slide-0', class: 'slide slide-0 active', src: '../../assets/images/slides/slide-1.png', alt: 'first phone view' }), h("img", { id: 'slide-1', class: 'slide slide-1', src: '../../assets/images/slides/slide-2.png', alt: 'second phone view' }), h("img", { id: 'slide-2', class: 'slide slide-2', src: '../../assets/images/slides/slide-3.png', alt: 'third phone view' }))), h("div", { class: 'slides-description' }, h("div", { class: 'slide-1-description' }, h("img", { src: '../../assets/images/vectors/socrate-store.svg', alt: 'socrate store icon' }), h("h2", null, translate.V2.SLIDES.ONE.HEADLINE_1, h("span", { class: 'blue' }, translate.V2.SLIDES.ONE.HEADLINE_2)), h("p", null, translate.V2.SLIDES.ONE.PARAGRAPH)), h("div", { class: 'slide-2-description' }, h("img", { src: '../../assets/images/vectors/feed.svg', alt: 'feed icon' }), h("h2", null, translate.V2.SLIDES.TWO.HEADLINE_1, h("span", { class: 'blue' }, translate.V2.SLIDES.TWO.HEADLINE_2), translate.V2.SLIDES.TWO.HEADLINE_3), h("p", null, translate.V2.SLIDES.TWO.PARAGRAPH)), h("div", { class: 'slide-3-description' }, h("img", { src: '../../assets/images/vectors/credit-card.svg', alt: 'credit card icon' }), h("h2", null, translate.V2.SLIDES.THREE.HEADLINE_1, h("span", { class: 'blue' }, translate.V2.SLIDES.THREE.HEADLINE_2), translate.V2.SLIDES.THREE.HEADLINE_3), h("p", null, translate.V2.SLIDES.THREE.PARAGRAPH)))), h("section", { class: 'pre-footer' }, h("div", { class: 'pre-footer-ctn' }, h("div", { class: 'pre-footer-left-ctn' }, h("h3", null, translate.V2.PRE_FOOTER.TITLE), h("p", null, translate.V2.PRE_FOOTER.PARAGRAPH)), h("div", { class: 'pre-footer-right-ctn' }, h("div", { class: 'btn-badges-ctn' }, h("a", { href: 'https://www.socrate.education', target: '_blank', rel: 'noopener' }, h("button", { class: 'socrate-on-browser' }, h("p", null, translate.V2.HERO.SOCRATE_ON_BROWSER))), h("div", { class: 'badges-ctn' }, h("a", { href: translate.V2.BADGES.APPLE_STORE.LINK, target: '_blank', rel: 'noopener' }, h("img", { class: 'apple-store-badge', src: translate.V2.BADGES.APPLE_STORE.SRC_WHITE, alt: 'apple store badge' })), h("a", { href: translate.V2.BADGES.PLAY_STORE.LINK, target: '_blank', rel: 'noopener' }, h("img", { class: 'play-store-badge', src: translate.V2.BADGES.PLAY_STORE.SRC_WHITE, alt: 'play store badge' }))))))), h("app-footer", null), h("app-cookies-footer", { class: "disabled", cookiesAlreadyAccepted: this.getCookiesStatus() })));
  }
};
PageLanding.style = pageLandingCss;

export { PageLanding as page_landing };
