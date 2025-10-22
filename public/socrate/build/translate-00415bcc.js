let translate;
const loadTranslation = async (locale = 'en-US') => {
  translate = await fetch(`./assets/i18n/${locale}.json`).then(res => res.json());
};
function setTranslations(translations) {
  translate = translations;
}

export { loadTranslation as l, translate as t };
