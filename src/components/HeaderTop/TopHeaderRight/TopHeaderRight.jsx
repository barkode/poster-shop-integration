import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaViber, FaTelegram, FaInstagram } from 'react-icons/fa'
import { TopHeaderRightContainer, TopHeaderRightItem } from './TopHeaderRight.styled'

const TopHeaderRight = () => {
  return (
    <TopHeaderRightContainer>
          <TopHeaderRightItem>
            <Link>
              {' '}
              <FaFacebook />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <Link>
              {' '}
              <FaTelegram />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <Link>
              <FaInstagram />
            </Link>
          </TopHeaderRightItem>
          <TopHeaderRightItem>
            <Link>
              <FaViber />
            </Link>
          </TopHeaderRightItem>
        </TopHeaderRightContainer>
    )
            
}

export default TopHeaderRight