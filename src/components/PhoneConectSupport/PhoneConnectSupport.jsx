import React from 'react';
import { FaPhone } from 'react-icons/fa';
import styled from '@emotion/styled';

const HeroSearchPhone = styled.div`
  float: right;
`;

const PhoneIcon = styled.div`
  font-size: 18px;
  color: var(--primary-color);
  height: 50px;
  width: 50px;
  background: var(--background);
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  float: left;
  margin-right: 20px;
`;

const PhoneText = styled.div`
  overflow: hidden;

  h5 {
    color: var(--normal-color);
    font-weight: 700;
    margin-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: var(--para-color);
  }
`;

const SearchPhone = () => {
  return (
    <HeroSearchPhone>
      <PhoneIcon>
        <FaPhone
          style={{
            transform: 'rotate(90deg)',
          }}
        />
      </PhoneIcon>
      <PhoneText>
        <h5>+38097 777 4555</h5>
        <span>support 24/7 time</span>
      </PhoneText>
    </HeroSearchPhone>
  );
};

export default SearchPhone;
