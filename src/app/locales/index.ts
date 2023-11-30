import i18next from 'i18next';

interface ILocales {
  key: string;
  value: string;
  locale: string;
}

const getLocales = (locales: ILocales[], lang: string) => {
  if (!locales) return {};

  return locales.reduce((acc, locale: ILocales) => {
    if (locale.locale === lang) acc[locale.key] = locale.value;
    return acc;
  }, {} as { [key: string]: string });
};

export const i18n = (lang = 'en', locales: ILocales[]) => {
  i18next.init({
    lng: lang,
    resources: {
      en: { translation: {} },
      ru: { translation: getLocales(locales, 'ru') },
    }
  });

  return i18next;
}
