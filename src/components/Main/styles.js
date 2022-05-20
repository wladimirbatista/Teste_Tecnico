import styled from 'styled-components'

export const BackgroundImage = styled.main`
  margin-top: 4.9rem;
  width: 100%;
  position: relative;

  img{
    width: 100%;
    height: 90vh;
  }

  @media screen and (max-width: 1440px){
    margin-top: 4.5rem;
  }

  @media screen and (max-width: 1280px){
    margin-top: 4rem;
  }

  @media screen and (max-width: 360px){
    margin-top: 3rem;
  }

`

export const OpacityContainer = styled.div`
  position: absolute;
  top: 25%;
  right: 0;
  left: 25%; 
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 32vh;
  background: rgba(117,135,155,0.72) none no-repeat scroll 0 0;
  border-radius: 35px;

  @media screen and (max-width: 1440px) {
    height: 37vh;
    width: 60%;
    top: 25%;
    left: 20%;
  }

  @media screen and (max-width: 1280px){
    width: 60%;
    top: 27%;
    left: 20%;
  }

  @media screen and (max-width: 768px){
    width: 70%;
    top: 30%;
    left: 15%;
    height: 27vh;
  }

  @media screen and (max-width: 360px){
    width: 90%;
    top: 30%;
    left: 5%;
  }
`

export const BtnLink = styled.a`
  width: auto;
  padding: 0.8rem 1.5rem 0 1.5rem;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background: var(--redButton);
  color: white;
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 360px){
    font-size: 14px;
    height: 40px;
  }
`

export const ParagrafContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 2rem;
  
  h1{
    font-size: 65px;
    color: white;
    text-shadow: 3px 5px 2px #474747;
    margin-bottom: 1rem;
  }

  p{
    font-size: 25px;
    line-height: 1.5;
    font-weight: 600;
    color: white;
    text-align: center;
    text-shadow: 3px 5px 2px #474747;
  }

  @media screen and (max-width: 1280px){
    h1{
      font-size: 55px;
    }

    p{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px){
    h1{
      font-size: 35px;
    }

    p{
      font-size: 15px;
    }
  }

  @media screen and (max-width: 360px){
    margin-bottom: 1rem;
    h1{
      font-size: 22px;
    }

    p{
      font-size: 10px;
    }
  }
`

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35vh;
  flex-wrap: wrap;

  @media screen and (max-width: 360px) {
    height: 110vh;
  }
`

export const Container = styled.div`
  width: 24%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    width: 25%;
  }

  @media screen and (max-width: 1280px){
    width: 27%;
  }

  @media screen and (max-width: 360px){
    width: 100%;
    flex-wrap: wrap;
  }

`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    margin-bottom: 1rem;
  }

  h3{
    margin-bottom: 1rem;
  }

  p {
    width: 420px;
    text-align: center;
  }

  @media screen and (max-width: 1440px){
    p{
      width: 330px;
    }
  }

  @media screen and (max-width: 1280px){
    p{
      width: 280px;
    }
  }

  @media screen and (max-width: 768px){
    p {
      width: 170px;
    }
  }

  @media screen and (max-width: 360px){
    p{
      width: 290px;
    }
  }
`
export const SecondSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  background: var(--grey0);
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: 30vh;
  }

  @media screen and (max-width: 360px) {
    height: 90vh;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 1.5rem;

  h2 {
    font-size: 35px;
    margin-bottom: 2rem;
  }

  p {
    font-size: 16px;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1440px){
    h2{
      font-size: 30px;
      margin-top: 1.5rem;
    }
  }

  @media screen and (max-width: 1280px) {
    h2{
      font-size: 25px;
      margin-top: 2rem;
    }

    p{
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    h2{
      font-size: 15px;
      margin-top: 3rem;
    }

    p{
      font-size: 10px;
    }
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    height: 90vh;

    h2{
      font-size: 20px;
      margin-top: 1rem;
    }

    p{
      font-size: 16px;
    }
  }
`

export const ImageContainer = styled.div`

  img {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 1440px) {
    img{
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 1.5rem;
    img{
      width: 280px;
      height: 280px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    img{
      width: 220px;
      height: 220px;
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`

