import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6vh;
  background: var(--navy);
  color: white;

  @media screen and (max-width: 1440px){
    font-size: 16px;
    padding: 30px 0;
  }

  @media screen and (max-width: 1280px){
    font-size: 16px;
    padding: 30px 0;
  }

  @media screen and (max-width: 375px){
    font-size: 12px;
    padding: 30px 0;
  }
`