import React, { useState } from "react";
import ReactLogo from '../assets/react.svg';
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import './index.css';
const Layout = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation("translations", { keyPrefix: "home" });
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt-BR" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <>
    <img src={ReactLogo} alt="React logo"  />
      <h3>Current Language: {currentLanguage}</h3>
      <button type="button" onClick={handleChangeLanguage}>
        Change Language
      </button>
      <Outlet />
    </>
  );
};

export default Layout;
