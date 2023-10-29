import React from 'react'
import styled from 'styled-components'
import SocialBar from '../SocialBar'

const Header = () => {
  return(
    <Content>
      <a href='https://data.larepublica.pe/' target='_self'>
        <WrapperImg>
          <Logo src='https://origin.cronosmedia.glr.pe/large/2023/05/26/lg_64711a35ffc75124c21b2b02.jpg' />
        </WrapperImg>
      </a>
      <SocialBar/>  
    </Content>
  )
}

export default Header

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 1440px; */
  width: 100%;
  /* margin: 0 auto; */
  height: 74px;
  background-color: #D3D3D3;
  border-bottom: red solid 4px;
`
const WrapperImg = styled.div`
  height: auto;
  width: 190px;
  margin-left: 20px;

  @media (max-width: 470px){
    width: 210px;
    margin-left: 10px;
  }
`
const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`