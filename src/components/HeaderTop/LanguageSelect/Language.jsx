import React from 'react';
import { useState } from 'react';
import LanguageImg from '../../../images/icon-united.png';
import UkrainianImg from '../../../images/icon-ukraine.png';

import {
  LanguageContainer,
  LanguageIcon,
  LanguageList,
  LanguageItem,
  LanguageLink,
  ArrowDownIcon,
} from './Language.styled';

const Language = () => {
  const [showLanguageList, setShowLanguageList] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Ukraine');

  const handleShowLanguageList = () => {
    setShowLanguageList(!showLanguageList);
    console.log(showLanguageList);
  };
  const handleHideLanguageList = () => {
    setShowLanguageList(false);
  };

  const handleLanguageChange = language => {
    setSelectedLanguage(language);
    setShowLanguageList(false);
    // Тут буде логіка для зміни мови на сайті..треба бібліотеку напевне підключати
  };

  const getLanguageIcon = language => {
    if (language === 'English') {
      return LanguageImg;
    } else {
      return UkrainianImg;
    }
  };

  return (
    <>
      <LanguageContainer onClick={handleShowLanguageList}>
        <LanguageIcon src={getLanguageIcon(selectedLanguage)} alt="Language" />
        <div>{selectedLanguage}</div>
        <ArrowDownIcon  />
        {showLanguageList && (
          <LanguageList onMouseLeave={handleHideLanguageList}>
            <LanguageItem>
              <LanguageLink onClick={() => handleLanguageChange('Ukraine')}>
                Ukraine
              </LanguageLink>
            </LanguageItem>
            <LanguageItem>
              <LanguageLink onClick={() => handleLanguageChange('English')}>
                English
              </LanguageLink>
            </LanguageItem>
          </LanguageList>
        )}
      </LanguageContainer>
    </>
  );
};

export default Language;
