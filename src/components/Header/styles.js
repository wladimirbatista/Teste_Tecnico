import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 8vh;
  background: var(--grey0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const LogoContainer = styled.div`
  img{
    width: auto;
    height: 60px;
  }

  @media screen and (max-width: 1280px){
    img{
      width: auto;
      height: 50px;
    }
  }

  @media screen and (max-width: 375px){
    img{
      width: auto;
      height: 40px;
    }
  }
`;

export const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 40px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
  }
`

export const Link = styled.li`
  list-style: none;
  
  a{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    :hover{
      border-bottom: 3px solid grey;
      transition: all ease 0.1s;
    }
  }
`;