import React from 'react';
import { useSelector } from 'react-redux';
import { getColorTheme } from 'redux/theme/selector';
import { getAllProducts } from 'redux/products/selector';
import { getLanguage } from 'redux/language/selectors';

const Footer = () => {
  const colorTheme = useSelector(getColorTheme);
  console.log({ colorTheme });

  const prod = useSelector(getAllProducts);
  console.log({ products: prod });

  const lang = useSelector(getLanguage);
  console.log({ Language: lang });
  return <> Footer </>;
};

export default Footer;
