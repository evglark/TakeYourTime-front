import i18next from 'i18next';

export interface ILocales {
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

export const initI18n = (locales: ILocales[]) => {
  const resources = {
    en: { translation: getLocales(locales, 'en') },
    ru: { translation: getLocales(locales, 'ru') },
  }

  return (lng: string) => {
    i18next.init({ lng, resources });
    return i18next;
  };
}