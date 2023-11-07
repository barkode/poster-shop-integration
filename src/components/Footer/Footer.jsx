import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getColorTheme } from 'redux/theme/selectors';
import { getLanguage } from 'redux/language/selectors';
import { getAllProducts } from 'redux/data/selectors';
import { setLanguage } from 'redux/language/slice';
import { setColorTheme } from 'redux/theme/slice';

const Footer = () => {
  const colorTheme = useSelector(getColorTheme);
  // console.log({ colorTheme });

  const prod = useSelector(getAllProducts);
  // console.log({ products: prod });

  const lang = useSelector(getLanguage);
  // console.log({ Language: lang });

  const dispatch = useDispatch();

  const handleColorSwitch = () => {
    // console.log('handleColor Switch is executed.');
    dispatch(setColorTheme(colorTheme === 'light' ? 'dark' : 'light'));
  };
  const handleLanguageSwitch = () => {
    // console.log('handleLanguage Switch is executed.');
    dispatch(setLanguage(lang === 'ua' ? 'en' : 'ua'));
  };

  return (
    <>
      <button type="button" onClick={handleColorSwitch}>
        COLOR BUTTON
      </button>
      <button type="button" onClick={handleLanguageSwitch}>
        LANGUAGE BUTTON
      </button>
    </>
  );
};

export default Footer;
