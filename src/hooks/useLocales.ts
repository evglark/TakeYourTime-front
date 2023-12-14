import { useContext } from 'react';

import { LocaleContext } from '@/components/Providers';
import { initI18n, ILocales } from '@/locales';

export const useLocales = (locales: ILocales[]) => {
  const { locale } = useContext(LocaleContext);
  const i18n = initI18n(locales);

  return i18n(locale);
};
