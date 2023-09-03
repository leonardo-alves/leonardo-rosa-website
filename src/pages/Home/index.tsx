import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("translations", { keyPrefix: "home" });
  return (
    <h1>{t('title')}</h1>
  )
};

export default Home;