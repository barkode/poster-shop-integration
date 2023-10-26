import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaUser,
  FaViber,
} from 'react-icons/fa';
import LanguageImg from '../../images/language.png';

import {
  TopHeader,
  Container,
  TopHeaderLeft,
  TopHeaderRight,
  TopHeaderLeftItem,
  TopHeaderRightItem,
  LanguageIcon,
  LanguageList,
  LanguageItem,
  LanguageLink,
  ArrowDownIcon,
} from './HeaderTop.styled';

function HeaderTop() {
  const [showLanguageList, setShowLanguageList] = useState(false);

  const handleShowLanguageList = () => {
    setShowLanguageList(!showLanguageList);
    console.log(showLanguageList);
  };

  return (
    <TopHeader>
      <Container>
        <TopHeaderLeft>
          <TopHeaderLeftItem>
            <FaEnvelope />
            hello@colorlib.com
          </TopHeaderLeftItem>
          <TopHeaderLeftItem>
            Free Shipping for all Order of $99
          </TopHeaderLeftItem>
        </TopHeaderLeft>
        <TopHeaderRight>
          <TopHeaderRightItem>
            <Link>
              {' '}
              <FaFacebook />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <Link>
              {' '}
              <FaTwitter />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <Link>
              <FaLinkedin />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <Link>
              <FaViber />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <div onClick={handleShowLanguageList}>
              <LanguageIcon src={LanguageImg} alt="Language" />
              <div>English</div>
              <ArrowDownIcon />
            </div>
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
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <FaUser />
            <Link to="#">Login</Link>/<Link to="#">Register</Link>
          </TopHeaderRightItem>
        </TopHeaderRight>
      </Container>
    </TopHeader>
  );
}

export default HeaderTop;
