import { f as getRenderingRef, i as forceUpdate, r as registerInstance, h, e as Host } from './index-6cbc93cc.js';
import { t as translate } from './translate-00415bcc.js';
import { H as Helmet } from './stencil-helmet-01cab5d9.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

const ENV = {
  'dev': {
    PRODUCTION: false,
    API_URL: 'https://sn-api-dev.socrate.education/'
  },
  'staging': {
    PRODUCTION: false,
    API_URL: 'https://sn-api-staging.socrate.education/'
  },
  'production': {
    PRODUCTION: true,
    API_URL: 'https://sn-api-prod.socrate.education/'
  }
};

const { state } = createStore({
  environment: ENV.hasOwnProperty("development") ? ENV["development"] : ENV['dev'],
});

const pageLandingCss = ":host{display:block;font-size:10px}#hero{background-image:url(\"assets/images/bg_header_ordi.png\");background-repeat:no-repeat;background-position:bottom;background-size:cover;background-color:transparent;padding:80px 28px 64px}.blur-bg{background-image:url(\"assets/images/blur_bg.png\");background-repeat:no-repeat;background-position:top;background-size:cover;background-color:transparent}.phone-img-blur{position:absolute;width:800px;top:-40px;left:-250px;height:800px;z-index:-1}.desktop-img-blur{position:absolute;width:800px;top:-60%;left:-100px;height:800px;z-index:-1}#hero>.container{text-align:center}#hero{margin-block-start:0;margin-block-end:0}#hero img{width:180px;margin-bottom:48px}#hero p{margin:32px 0;max-width:50%;color:#FFF}.video{border-radius:8px;margin-bottom:32px;width:560px;height:315px}#hero .button{font-size:18px;width:auto;background-color:#fff;color:#1D91FE;border:none;border-radius:8px;font-family:'SF-Pro-Bold', sans-serif;padding:12px 24px;text-decoration:none}@supports not (-webkit-touch-callout: none){#hero .button{font-family:'Helvetica-Now-Bold', sans-serif}}#share{padding:64px;position:relative;overflow:hidden}.share-flex{display:flex;position:relative}.img-phone{max-width:250px;width:250px;height:580px}.img-phone.mobile{display:none}.p-one{margin-top:16px;margin-bottom:16px;max-width:70%}.p-two{max-width:650px}.share-paragraph{display:flex;flex-direction:column;justify-content:center;margin-right:64px}.share-paragraph h2{max-width:60%;margin-bottom:64px}.share-items{height:200px;display:flex;flex-direction:row;justify-content:space-between;max-width:95%;margin-top:64px}.share-item{max-width:150px;width:100%}.share-item-ctn-1{display:flex;align-items:flex-end}.share-item-ctn-2{display:flex;align-items:start}.share-item-ctn-3{display:flex;align-items:center}.share-paragraph .round.blue{left:600px;top:455px}#discovery{background-image:url(\"assets/images/bg_discovery_ordi.png\");background-repeat:no-repeat;background-position:top;background-size:cover;background-color:transparent;padding-bottom:100px}.card-container{display:grid;grid-template-columns:1fr 1fr;grid-gap:24px;grid-auto-rows:minmax(100px, auto)}#cloud{height:3.8rem;width:3.8rem;font-size:3.8rem;bottom:0.4rem;right:calc(0.4rem - 2px);position:relative}.discovery-container{display:flex;padding:100px 64px}.discovery-image{display:flex;align-items:center;margin-right:64px}.discovery-paragraph{flex-grow:1}.image-woman.mobile{display:none}.discovery-paragraph h3{color:#FFF;font-size:34px;margin-bottom:64px;text-align:center}.card-flex-general{display:flex}.card-flex.one{padding:0 32px}.card{display:grid;grid-template-columns:30px auto;grid-template-rows:30px auto;grid-gap:10px 20px;grid-template-areas:\"image title\"\n        \". paragraph\";background-color:#FFF;border-radius:16px;width:100%;height:auto;max-width:336px;padding:24px;text-align:left}.card.two,.card.four{position:relative;top:36px}.card .icon{grid-area:image}.card h4{grid-area:title;font-size:18px;margin-block-start:0;margin-block-end:0;white-space:nowrap}.card p{grid-area:paragraph;margin-block-start:0;margin-block-end:0;font-size:16px}#advantage{padding:152px 64px 268px;position:relative;overflow:hidden}.advantage-flex{display:flex;margin-right:48px;align-items:center;justify-content:center}.img-mockup.mobile{display:none}.advantage-paragraph{flex:0.5;margin-right:48px}.advantage-img{flex:0.5}.advantage-paragraph h2{margin-block-start:0;margin-block-end:0;margin-bottom:68px}.img-mockup.desktop{width:100%;max-width:800px;margin:auto;z-index:2}.advantage-paragraph ul{list-style-type:disclosure-closed;line-height:50px;padding-inline-start:16px}.advantage-paragraph li{font-size:20px;line-height:32px}.advantage-paragraph li:not(:last-child){margin-bottom:32px}#beta{background-image:url(\"assets/images/bg_beta_ordi.png\");background-repeat:no-repeat;background-size:cover;background-position:top}#beta #bg-image{position:absolute;max-width:780px;width:100%}#beta #man-image{max-width:632px;position:absolute;width:100%;z-index:1;top:-15%;left:-20%}#beta #beta-container{position:relative;margin:auto;padding:100px 0;text-align:center;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px 20px;grid-template-rows:auto repeat(2, auto);grid-template-areas:\"spantext spantext\"\n  \"card_first card_two\"\n  \"card_three card_four\";max-width:680px;width:100%}#beta #beta-container span{grid-area:spantext;padding:12px 24px;background:#FFF;color:#1D91FE;border:none;border-radius:5px;text-transform:uppercase;font-size:24px;margin:auto auto 32px auto;font-family:'SF-Pro-Bold', sans-serif;z-index:999;box-shadow:10px 10px 45px 1px #21436391}@supports not (-webkit-touch-callout: none){#beta #beta-container span{font-family:'Helvetica-Now-Bold', sans-serif}}#beta #beta-container #card_first{grid-area:card_first;z-index:999}#beta #beta-container #card_two{grid-area:card_two;z-index:999}#beta #beta-container #card_three{grid-area:card_three;z-index:999}#beta #beta-container #card_four{grid-area:card_four;z-index:999}#beta #beta-container div{border-radius:16px;background-color:#FFF;position:relative;text-align:left;width:100%;max-width:336px}#beta #beta-container div.round-number{position:absolute;border-radius:50%;background-color:#1D91FE;top:-5px;right:5px;height:38px;width:38px}#beta #beta-container div.round-number>p{color:white}#beta #beta-container .text-in-beta-ctn{padding:32px;background-color:transparent}#beta #beta-container p{margin-block-start:0;margin-block-end:0;font-size:20px}#beta #beta-container p:first-child{font-family:'SF-Pro-Bold', sans-serif}@supports not (-webkit-touch-callout: none){#beta #beta-container p:first-child{font-family:'Helvetica-Now-Bold', sans-serif}}.relative-pos-fix-under-form{position:absolute;bottom:-50px;height:100px;background:#F2F4F8;z-index:-1;width:100%}#form{background-color:white;background-position:top;background-size:cover;background-repeat:no-repeat;position:relative;overflow:hidden}.form-container{padding:100px 24px;display:flex;flex-direction:column;align-items:center}form{max-width:508px;width:100%;z-index:3}.form-blur{background-image:url(\"assets/images/blur_bg.png\");background-repeat:no-repeat;background-position:center;background-color:transparent;position:absolute;width:1000px;z-index:1;height:1000px}form h5{font-family:'SF-Pro-Bold', sans-serif;max-width:432px;background-color:#4d577a;border-radius:16px 16px 0 0;text-align:center;padding:8px 48px;margin-block-start:0;margin-block-end:0;margin:auto;width:fit-content;width:-moz-fit-content;color:#FFF;font-size:3rem}@supports not (-webkit-touch-callout: none){form h5{font-family:'Helvetica-Now-Bold', sans-serif}}.form-floating-item{position:absolute;width:100px;height:auto;z-index:2;opacity:0.66}#floating-1{top:163px;left:178px}#floating-2{top:-30px;left:125px}#floating-3{top:400px;left:-40px}#floating-4{top:200px}#floating-5{top:730px;left:166px}#floating-6{top:0;left:840px}#floating-7{top:230px;left:788px}#floating-8{top:650px;left:850px}#floating-9{top:500px;left:950px}form label{padding-left:14px;font-size:16px;color:#4A577D}form input{padding-left:12px}.input-ctn{margin-bottom:16px}form input,select{display:block;height:56px;border-radius:8px;border:1px solid #8493C8;width:100%;padding-left:12px}.error-p{font-size:16px;color:#e62800;margin:8px 0 0 0}.request-error{margin-top:12px;text-align:center}select{font-size:14px !important}form section{background-color:#FFF;border-radius:16px;padding:32px;border:1px solid #666666}form .btn-ctn{padding:0 36px}form .button{font-family:'SF-Pro-Bold', sans-serif;height:auto;width:100%;padding:12px 24px;background:linear-gradient(to right, #FF5F00, #FDA50D);color:#FFF;margin:auto;border:none;font-size:18px;text-align:center;border-radius:8px}@supports not (-webkit-touch-callout: none){form .button{font-family:'Helvetica-Now-Bold', sans-serif}}form .button[disabled]{background:#999;pointer-events:none}@media screen and (max-width: 1024px){.share-items{display:none}}@media screen and (max-width: 768px){#share{margin:52px 0;padding:0 32px}.blur-bg{}#hero{background-image:url(\"assets/images/bg_header_tel.png\");padding:24px}#hero img{margin-bottom:92px;margin-top:24px}#container-hero{width:75%;margin:auto;text-align:center}#discovery{background-image:url('assets/images/bg_discovery_tel.png');padding-bottom:0}.card-container{grid-template-columns:1fr}.mobile-phone-img-blur{position:absolute;width:120vw;top:-20vw;left:-20vw;height:120vw;z-index:-1}.phone-img-blur{display:none}.mobile-desktop-img-blur{position:absolute;top:-19vw;left:-5vw;z-index:-3;height:90vw;width:90vw}.desktop-img-blur{display:none}#hero h1{margin-block-start:0;margin-block-end:0;margin-bottom:16px}#hero p{margin-top:0;margin-bottom:72px;max-width:100%;color:#FFF}.video{margin-bottom:64px;position:relative;overflow:hidden;width:324px;height:178px;box-shadow:0 0 1px 0 #00000091}#hero a{margin:0 0 72px 0}.img-phone.desktop{display:none}.share-flex{justify-content:center;align-content:center;text-align:center}.p-one{max-width:100%}.img-phone.mobile{display:block;width:75%}.share-paragraph{margin:0;align-items:center}.share-paragraph h2{max-width:100%;margin-bottom:32px}.share-paragraph .round{visibility:hidden}.discovery-container{padding:24px 32px 76px}.image-woman.mobile{display:block;margin-bottom:52px;width:75%;max-width:300px;height:auto}.discovery-paragraph h3{margin-top:24px;margin-bottom:36px;font-size:24px}.discovery-image{display:none}.discovery-paragraph{flex:1;display:flex;flex-direction:column;align-items:center}.card{grid-gap:8px 16px}.card.two,.card.four{top:0}.card-flex-general{display:block}.card-flex.one{padding:0}#advantage{margin:64px 0 96px 0;padding:0}.advantage-paragraph{margin:0;padding:0 32px}.advantage-paragraph h2{text-align:center;margin-bottom:32px}.advantage-img{display:none}.img-mockup.mobile{display:block;margin-bottom:32px}.advantage-paragraph{flex:1}#beta{background-image:url(\"assets/images/bg_beta_tel.png\");background-repeat:no-repeat;background-position:top;padding:24px}#beta #bg-image{position:absolute;width:100%;max-width:280px}#beta #man-image{position:absolute;left:-50px;top:-10%}#beta #beta-container{position:relative;width:80%;margin:auto;padding:50px 0 30px;text-align:center;display:grid;grid-template-columns:1fr;grid-gap:20px 0;grid-template-rows:auto repeat(4, auto);grid-template-areas:\"spantext\"\n  \"card_first\"\n  \"card_two\"\n  \"card_three\"\n  \"card_four\"}#beta #beta-container span{font-size:16px;margin-bottom:16px}#beta #beta-container #card_first{grid-area:card_first;justify-self:center}#beta #beta-container #card_two{grid-area:card_two;justify-self:center}#beta #beta-container #card_three{grid-area:card_three;justify-self:center}#beta #beta-container #card_four{grid-area:card_four;justify-self:center}#beta #beta-container div{border-radius:16px;background-color:#FFF;position:relative;text-align:left}#beta #beta-container div img{position:absolute;top:-5px;right:5px;height:38px;width:auto}#beta #beta-container .text-in-beta-ctn{padding:28px;background-color:transparent}#beta #beta-container p{margin-block-start:0;margin-block-end:0;font-size:18px}#beta #beta-container p:first-child{font-family:'SF-Pro-Bold', sans-serif}@supports not (-webkit-touch-callout: none){#beta #beta-container p:first-child{font-family:'Helvetica-Now-Bold', sans-serif}}#form{background-position:top;margin-bottom:0}form{max-width:364px;width:100%}.form-blur{top:-2vw}form h5{font-size:2rem;padding-bottom:16px;margin-bottom:-10px}form label{padding-left:14px;font-size:16px;color:#4A577D}form input,select{display:block;height:56px;border-radius:8px;border:1px solid #8493C8;width:100%}form section{padding:32px 20px}form .button{height:auto;padding:8px 16px;background:linear-gradient(to right, #FF5F00, #FDA50D);color:#FFF;font-family:'SF-Pro-Bold', sans-serif;margin:auto;border:none}@supports not (-webkit-touch-callout: none){form .button{font-family:'Helvetica-Now-Bold', sans-serif}}.mobile-hidden{display:none}}@media screen and (max-width: 500px){.mobile-phone-img-blur{top:0}}@media screen and (max-width: 321px){.video{width:300px;height:164px}}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.justify-center{justify-content:center}.items-center{align-items:center}.image-woman{margin-bottom:24px;max-height:300px}.hidden{display:none}.checkbox-ctn{display:flex;flex-direction:row;margin-bottom:24px}#actu-socrate{width:114px;height:16px}.checkbox-label{font-size:12px}.cursor-pointer{cursor:pointer;transition:box-shadow 0.3s ease}.button:hover{box-shadow:#00468033 0 2px 3px, #00468033 0 2px 3px}.relative{position:relative}.w-full{width:100%}.loader,.loader:after{border-radius:50%;width:10em;height:10em}.loader{margin-left:16px;font-size:3px;text-indent:-9999em;border-top:1.1em solid rgba(255, 255, 255, 0.7);border-bottom:1.1em solid rgba(255, 255, 255, 0.7);border-right:1.1em solid rgba(255, 255, 255, 0.7);border-left:1.1em solid transparent;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear;flex-shrink:0}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

// Parallax animation
function offsetTop(element, acc = 0) {
  if (!element.offsetParent) {
    return offsetTop(element.offsetParent, acc + element.offsetTop);
  }
  return acc + element.offsetTop;
}
class Parallax {
  //
  //   @param{HTMLElement} element
  //
  constructor(element) {
    this.element = element;
    this.ratio = parseFloat(element.dataset.parallax);
    this.onScroll = this.onScroll.bind(this);
    this.onIntersection = this.onIntersection.bind(this);
    this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
    const observer = new IntersectionObserver(this.onIntersection);
    observer.observe(element);
    this.onScroll();
  }
  //
  static bind() {
    const elements = Array.from(document.querySelectorAll('[data-parallax]'));
    return elements
      .filter(el => !!el.offsetParent)
      .map(element => new Parallax(element));
  }
  onIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', this.onScroll);
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
      }
      else {
        document.removeEventListener('scroll', this.onScroll);
      }
    }
  }
  //
  //  @returns {Parallax[]}
  onScroll() {
    window.requestAnimationFrame(() => {
      const screenY = window.scrollY + window.innerHeight / 2;
      const diffY = this.elementY - screenY;
      this.element.style.setProperty('transform', `${this.element.style.transform.split(' ')[0]} translateY(${diffY * -1 * this.ratio}px)`);
    });
  }
}
const PageLanding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isChecked = false;
    this.isSubmit = false;
    this.isLoading = false;
    this.phoneRegex = new RegExp('^[+0-9 ]+$');
    this.emailRegex = new RegExp('^[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+$');
    this.displayError = false;
  }
  componentWillLoad() {
    this.options = [
      {
        value: 'customer',
        display: translate.LANDING.FORM.PROFILE_TYPE.CUSTOMER,
      }, {
        value: 'mentor',
        display: translate.LANDING.FORM.PROFILE_TYPE.MENTOR,
      }, {
        value: 'company',
        display: translate.LANDING.FORM.PROFILE_TYPE.COMPANY,
      },
    ];
  }
  componentDidLoad() {
    Parallax.bind();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.isSubmit = true;
    if (this.firstname &&
      this.lastname &&
      this.email &&
      this.emailRegex.test(this.email) &&
      (this.selectedOption && (this.selectedOption !== 'company' || (this.selectedOption === 'company' && this.companyName)))) {
      this.isLoading = true;
      this.displayError = false;
      fetch(state.environment.API_URL + 'beta-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          phone: this.phone && this.phoneRegex.test(this.phone) ? this.phone : '',
          applicationType: this.selectedOption,
          companyName: this.companyName,
          industry: 'retail',
          about: 'Nothing',
          newsletter: this.isChecked,
        }),
      }).then((res) => {
        if (res.ok) {
          this.history.push('/accepted');
          this.isLoading = false;
        }
        else {
          this.isLoading = false;
          this.displayError = true;
          this.errorType = (res.status === 409 ? 'already-exists' : 'unknown');
          throw Error(res.statusText);
        }
      }).catch(err => {
        console.log(err);
        this.isLoading = false;
      });
    }
  }
  handleFirstnameChange(event) {
    this.firstname = event.target.value;
  }
  handleLastnameChange(event) {
    this.lastname = event.target.value;
  }
  handleEmailChange(event) {
    this.email = event.target.value;
  }
  handlePhoneChange(event) {
    this.phone = event.target.value;
  }
  handleCompanyNameChange(event) {
    this.companyName = event.target.value;
  }
  handleCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
  render() {
    return (h(Host, null, h(Helmet, null, h("title", null, translate.META.TITLE), h("meta", { name: 'description', content: translate.META.DESCRIPTION }), h("meta", { name: 'twitter:title', content: translate.META.TWITTER_TITLE }), h("meta", { name: 'twitter:description', content: translate.META.TWITTER_DESCRIPTION }), h("meta", { property: 'og:title', content: translate.META.OG_TITLE }), h("meta", { property: 'og:description', content: translate.META.OG_DESCRIPTION })), h("section", { id: 'hero' }, h("div", { class: 'container flex flex-col items-center' }, h("img", { alt: 'Socrate beta logo white', src: '/assets/images/logo-socrate-white-beta.svg' }), h("h1", null, translate.LANDING.HERO.TITLE), h("p", null, translate.LANDING.HERO.DESCRIPTION), h("iframe", { class: 'video', width: '560', height: '315', src: 'https://www.youtube.com/embed/CYgMM9JUVGw?loop=1&modestbranding=1&showinfo=0&rel=0', title: 'YouTube video player', frameborder: '0', allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullScreen: true }), h("a", { href: '#form', class: 'cursor-pointer button' }, translate.LANDING.HERO.BUTTON))), h("section", { id: 'share' }, h("div", { class: 'container share-flex' }, h("div", { class: 'share-paragraph' }, h("h2", null, translate.LANDING.SHARE.TITLE), h("div", { class: 'relative w-full flex justify-center' }, h("div", { class: 'blur-bg mobile-phone-img-blur' }), h("img", { alt: 'Phone', src: '/assets/images/mockupiphone.png', class: 'img-phone mobile' })), h("p", { class: 'p-one' }, translate.LANDING.SHARE.PARAGRAPH_ONE), h("p", { class: 'p-two' }, translate.LANDING.SHARE.PARAGRAPH_TWO), h("div", { class: 'share-items' }, h("div", { class: 'share-item-ctn-1' }, h("img", { alt: 'Round orange item', src: '/assets/images/half-round-orange.png', "data-parallax": '0.05', class: 'share-item' })), h("div", { class: 'share-item-ctn-2' }, h("img", { alt: 'Round violet item', src: '/assets/images/half-round-violet.png', "data-parallax": '0.02', class: 'share-item' })), h("div", { class: 'share-item-ctn-3' }, h("img", { alt: 'Round blue item', src: '/assets/images/half-round-blue.png', "data-parallax": '0.06', class: 'share-item' })))), h("div", { class: 'relative' }, h("div", { class: 'blur-bg phone-img-blur' }), h("img", { alt: 'Phone', src: '/assets/images/mockupiphone.png', class: 'img-phone desktop' })))), h("section", { id: 'discovery' }, h("div", { class: 'container discovery-container' }, h("div", { class: 'discovery-image' }, h("img", { alt: 'Woman', src: '/assets/images/image_woman.png', class: 'image-woman dekstop' })), h("div", { class: 'discovery-paragraph' }, h("h3", null, translate.LANDING.DISCOVERY.TITLE), h("img", { alt: 'Woman', src: '/assets/images/image_woman.png', class: 'image-woman mobile' }), h("div", { class: 'card-container' }, h("div", { class: 'card first' }, h("div", { class: 'icon md' }, "\uE11B"), h("h4", null, translate.LANDING.DISCOVERY.CARD_ONE.TITLE), h("p", null, translate.LANDING.DISCOVERY.CARD_ONE.DESCRIPTION)), h("div", { class: 'card two' }, h("div", { class: 'icon md' }, "\uE146"), h("h4", null, translate.LANDING.DISCOVERY.CARD_TWO.TITLE), h("p", null, translate.LANDING.DISCOVERY.CARD_TWO.DESCRIPTION)), h("div", { class: 'card three' }, h("div", { id: 'cloud', class: 'icon md' }, "\uE905"), h("h4", null, translate.LANDING.DISCOVERY.CARD_THREE.TITLE), h("p", null, translate.LANDING.DISCOVERY.CARD_THREE.DESCRIPTION)), h("div", { class: 'card four' }, h("div", { class: 'icon md' }, "\uE171"), h("h4", null, translate.LANDING.DISCOVERY.CARD_FOUR.TITLE), h("p", null, translate.LANDING.DISCOVERY.CARD_FOUR.DESCRIPTION)))))), h("section", { id: 'advantage' }, h("div", { class: 'container advantage-flex' }, h("div", { class: 'advantage-paragraph' }, h("h2", null, translate.LANDING.ADVANTAGE.TITLE), h("div", { class: 'relative' }, h("div", { class: 'blur-bg mobile-desktop-img-blur' }), h("img", { alt: 'Phone', src: '/assets/images/Mockup.png', class: 'img-mockup mobile' })), h("ul", null, h("li", null, h("b", null, translate.LANDING.ADVANTAGE.FIRST), " ", translate.LANDING.ADVANTAGE.FIRST_AFTER), h("li", null, h("b", null, translate.LANDING.ADVANTAGE.SECOND), " ", translate.LANDING.ADVANTAGE.SECOND_AFTER), h("li", null, translate.LANDING.ADVANTAGE.THIRD, h("b", null, " ", translate.LANDING.ADVANTAGE.THIRD_AFTER)), h("li", null, h("b", null, translate.LANDING.ADVANTAGE.FOURTH), " ", translate.LANDING.ADVANTAGE.FOURTH_AFTER))), h("div", { class: 'advantage-img relative' }, h("div", { class: 'blur-bg desktop-img-blur' }), h("img", { alt: 'Phone', src: '/assets/images/Mockup.png', class: 'img-mockup desktop' })))), h("section", { id: 'beta' }, h("div", { class: 'container' }, h("img", { alt: 'Gradient', src: '/assets/images/degrade_beta.png', id: 'bg-image' }), h("div", { id: 'beta-container' }, h("img", { alt: 'Man', src: '/assets/images/Homme.png', id: 'man-image' }), h("span", null, translate.LANDING.BETA.TITLE), h("div", { class: 'relative', id: 'card_first' }, h("div", { class: 'round-number flex justify-center items-center' }, h("p", null, "1")), h("div", { class: 'text-in-beta-ctn' }, h("p", null, translate.LANDING.BETA.CARD_ONE.TITLE), h("p", null, translate.LANDING.BETA.CARD_ONE.DESCRIPTION))), h("div", { class: 'relative', id: 'card_two' }, h("div", { class: 'round-number flex justify-center items-center' }, h("p", null, "2")), h("div", { class: 'text-in-beta-ctn' }, h("p", null, translate.LANDING.BETA.CARD_TWO.TITLE), h("p", null, translate.LANDING.BETA.CARD_TWO.DESCRIPTION))), h("div", { class: 'relative', id: 'card_three' }, h("div", { class: 'round-number flex justify-center items-center' }, h("p", null, "3")), h("div", { class: 'text-in-beta-ctn' }, h("p", null, translate.LANDING.BETA.CARD_THREE.TITLE), h("p", null, translate.LANDING.BETA.CARD_THREE.DESCRIPTION))), h("div", { class: 'relative', id: 'card_four' }, h("div", { class: 'round-number flex justify-center items-center' }, h("p", null, "4")), h("div", { class: 'text-in-beta-ctn' }, h("p", null, translate.LANDING.BETA.CARD_FOUR.TITLE), h("p", null, translate.LANDING.BETA.CARD_FOUR.DESCRIPTION)))))), h("section", { id: 'form' }, h("div", { class: 'container' }, h("div", { class: 'form-container' }, h("div", { class: 'form-blur' }, h("img", { alt: 'Round orange item', id: 'floating-1', src: '/assets/images/half-round-orange.png', "data-parallax": '0.05', class: 'form-floating-item', style: { transform: 'rotate(30deg)' } }), h("img", { alt: 'Round violet item', id: 'floating-2', src: '/assets/images/half-round-violet.png', "data-parallax": '0.02', class: 'form-floating-item', style: { transform: 'rotate(-30deg)' } }), h("img", { alt: 'Round blue item', id: 'floating-3', src: '/assets/images/half-round-blue.png', "data-parallax": '0.03', class: 'form-floating-item', style: { transform: 'rotate(-30deg)' } }), h("img", { alt: 'Round orange item', id: 'floating-4', src: '/assets/images/half-round-orange.png', "data-parallax": '0.01', class: 'form-floating-item', style: { transform: 'rotate(160deg)' } }), h("img", { alt: 'Round violet item', id: 'floating-5', src: '/assets/images/half-round-violet.png', "data-parallax": '0.02', class: 'form-floating-item', style: { transform: 'rotate(45deg)' } }), h("img", { alt: 'Round blue item', id: 'floating-6', src: '/assets/images/half-round-blue.png', "data-parallax": '0.03', class: 'form-floating-item', style: { transform: 'rotate(-30deg)' } }), h("img", { alt: 'Round orange item', id: 'floating-7', src: '/assets/images/half-round-orange.png', "data-parallax": '0.02', class: 'form-floating-item', style: { transform: 'rotate(-8deg)' } }), h("img", { alt: 'Round violet item', id: 'floating-8', src: '/assets/images/half-round-violet.png', "data-parallax": '0.045', class: 'form-floating-item', style: { transform: 'rotate(-45deg)' } }), h("img", { alt: 'Round orange item', id: 'floating-9', src: '/assets/images/half-round-orange.png', "data-parallax": '0.02', class: 'form-floating-item', style: { transform: 'rotate(73deg)' } })), h("form", { onSubmit: (e) => this.handleSubmit(e) }, h("h5", null, translate.LANDING.FORM.TITLE), h("section", null, h("div", { class: 'flex flex-col input-ctn' }, h("label", null, translate.LANDING.FORM.NAME), h("input", { type: 'text', value: this.lastname, onInput: (e) => this.handleLastnameChange(e), id: 'lastname' }), this.isSubmit && !this.lastname ?
      h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.REQUIRED) : null), h("div", { class: 'flex flex-col input-ctn' }, h("label", null, translate.LANDING.FORM.FIRST_NAME), h("input", { type: 'text', value: this.firstname, onInput: (e) => this.handleFirstnameChange(e), id: 'firstname' }), this.isSubmit && !this.firstname ?
      h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.REQUIRED) : null), h("div", { class: 'flex flex-col input-ctn' }, h("label", null, translate.LANDING.FORM.EMAIL), h("input", { type: 'email', value: this.email, onInput: (e) => this.handleEmailChange(e), id: 'email' }), this.isSubmit && !this.email ?
      h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.REQUIRED) : null, this.isSubmit && this.email && !this.emailRegex.test(this.email) ?
      h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.EMAIL) : null), h("div", { class: 'flex flex-col input-ctn' }, h("label", null, translate.LANDING.FORM.MOBILE), h("input", { type: 'tel', value: this.phone, onInput: (e) => this.handlePhoneChange(e), id: 'phone' }), this.isSubmit && this.phone && !this.phoneRegex.test(this.phone) ?
      h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.PHONE) : null), h("div", { class: 'flex flex-col input-ctn' }, h("label", null, translate.LANDING.FORM.PROFILE_TYPE.TITLE), h("so-select-input", { id: 'test', options: this.options, onChangeValue: e => {
        this.selectedOption = e.detail;
      } }), this.isSubmit && !this.selectedOption ?
      h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.REQUIRED) : null), this.selectedOption === 'company' ?
      h("div", { class: 'flex flex-col input-ctn' }, h("label", null, "Nom de l'entreprise"), h("input", { type: 'text', value: this.companyName, onInput: (e) => this.handleCompanyNameChange(e) }), this.isSubmit && !this.companyName ?
        h("p", { class: 'error-p' }, translate.LANDING.FORM.ERRORS.REQUIRED) : null) : null, h("div", { class: 'checkbox-ctn' }, h("input", { type: 'checkbox', onInput: () => this.handleCheckboxChange(), id: 'actu-socrate', name: 'actu-socrate' }), h("p", { class: 'checkbox-label' }, translate.LANDING.FORM.CHECKBOX_TEXT)), h("div", { class: 'btn-ctn' }, h("button", { disabled: this.isLoading, class: 'cursor-pointer button flex justify-center items-center', onClick: (e) => this.handleSubmit(e) }, translate.LANDING.FORM.BUTTON, this.isLoading ? h("div", { class: 'loader' }) : null)), this.displayError ?
      h("p", { class: 'error-p request-error' }, this.errorType === 'already-exists' ? translate.LANDING.FORM.ERRORS.ALREADY_EXISTS : translate.LANDING.FORM.ERRORS.UNEXPECTED_ERROR) : null))))), h("app-footer", { displaySocialNetworks: false })));
  }
};
PageLanding.style = pageLandingCss;

export { PageLanding as page_landing };
