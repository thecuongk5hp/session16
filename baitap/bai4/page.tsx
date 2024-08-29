import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    router.push(asPath, asPath, { locale: lang });
  };

  useEffect(() => {
    console.log("Current locale:", locale);
  }, [locale]);

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>

      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={locale}
      >
        {locales?.map((lang) => (
          <option key={lang} value={lang}>
            {lang === 'en' ? 'English' : 'Tiếng Việt'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HomePage;