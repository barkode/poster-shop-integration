import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaViber } from 'react-icons/fa'
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
        </TopHeaderRightContainer>
    )
            
}

export default TopHeaderRight