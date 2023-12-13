import { useContext, useEffect, useState } from 'react';

import { LocaleContext } from '@/components/Providers';
import { initI18n, ILocales } from '@/locales';

export const useLocales = (locales: ILocales[]) => {
  const { locale } = useContext(LocaleContext);
  const [i18nObject, setI18nObject] = useState({ t: (str: string) => str });

  useEffect(() => {
    const i18n = initI18n(locales);
    setI18nObject(i18n(locale));
  }, [locale]);

  return i18nObject;
};
