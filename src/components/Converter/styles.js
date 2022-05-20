import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40vh;

  @media screen and (max-width: 768px){
    height: 33vh;
  }

  @media screen and (max-width: 375px){
    height: 70vh;
  }
`
export const ContainerText = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 68.5%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  p{
    font-size: 18px;
  }

  @media screen and (max-width: 1440px){
    width: 73%;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1280px){
    width: 74%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    h3{
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 768px){
    width: 83%;
    margin-top: 2rem;
    margin-bottom: 3rem;

    h3 {
      font-size: 25px;
    }
    p{
      font-size: 16px;
    }
  }

  @media screen and (max-width: 375px){
    margin-top: 1rem;
    height: 30%;
  }
`

export const ContainerConversor = styled.div`
  width: 68.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1280px){
    width: 47%;
  }

  @media screen and (max-width: 768px){
    width: 50%;
  }

  @media screen and (max-width: 375px){
    flex-direction: column;
    width: 100%;
    height: 80%;
  }

  .border{
    border-left: 1px solid var(--grey0);
    height: 100%; 
    margin-left: 5rem;
    margin-right: 5rem;

    @media screen and (max-width: 375px){
      display: none;
    }
  }

`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 33.5%;
  height: 15vh;

  span {
    font-size: 50px;
    font-weight: 500;
    color: grey;
  }

  @media screen and (max-width: 1280px){
    width: 60%;
  }

  @media screen and (max-width: 768px){
    width: 45%;
  }

  @media screen and (max-width: 375px){
    margin-bottom: 1rem;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 1440px){
    width: 130%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 1280px){
    width: 119%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px){
    width: 175%;
    margin-top: 0;
  }

  @media screen and (max-width: 360px){
    width: 180%;
    margin-top: 0.5rem;
    justify-content: center;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const BoxInput = styled.div`

  input {
    width: 200px;
    height: 40px;
    border: 2px solid var(--grey0);
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    text-align: left;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    height: 30px;
    font-weight: 500;
    background: var(--grey0);
    border-right: 2px solid var(--grey0);
    border-bottom: 2px solid var(--grey0);
    border-left: 2px solid var(--grey0);
  }

  @media screen and (max-width: 768px){
    input{
      width: 140px;
    }
  }

`

