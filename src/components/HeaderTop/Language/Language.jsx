import React from 'react';
import { useState } from 'react';
import LanguageImg from '../../../images/language.png';
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

  const handleShowLanguageList = () => {
    setShowLanguageList(!showLanguageList);
    console.log(showLanguageList);
  };
  return (
    <>
      <LanguageContainer onClick={handleShowLanguageList}>
        <LanguageIcon src={LanguageImg} alt="Language" />
        <div>English</div>
        <ArrowDownIcon />
      </LanguageContainer>
      {showLanguageList && (
        <LanguageList>
          <LanguageItem>
            <LanguageLink href="#">Spanish</LanguageLink>
          </LanguageItem>
          <LanguageItem>
            <LanguageLink href="#">English</LanguageLink>
          </LanguageItem>
        </LanguageList>
      )}
    </>
  );
};

export default Language;
