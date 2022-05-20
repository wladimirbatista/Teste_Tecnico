import { 
  Container, 
  ContainerConversor,
  ContainerText,
  FormContainer,
  InputContainer,
  BoxInput,
  BtnContainer
} from "./styles";
import Button from '../Button'
import { useState } from "react";

const Converter = () => {

  const [miles, setMiles] = useState(1)
  const [newMiles, setNewMiles] = useState(1.60934)

  const [kilometers, setKilometers] = useState(1)
  const [newKilometers, setNewKilometers] = useState(0.621371)

  const factor = 0.621371

  const handleConvertMilesToKm = (event) => {
    event.preventDefault()
    const km = miles / factor
    setNewMiles(km.toFixed(5))
  }

  const handleConvertKmToMiles = (event) => {
    event.preventDefault()
    const milha = kilometers * factor
    setNewKilometers(milha.toFixed(5))
  }

  return (
    <Container id="conversor">
      <ContainerText>
        <h3>Conversor</h3>
        <p>
          Para saber a distância da sua trilha, utilize nosso sistema para
          converter de milhas para quilômetros e quilômetros para milhas.
        </p>
      </ContainerText>
      <ContainerConversor>
        <FormContainer onSubmit={handleConvertMilesToKm}>
          <InputContainer>
            <BoxInput>
              <input value={miles} onChange={(event) => setMiles(event.target.value)}/>
              <p>Milha</p>
            </BoxInput>
            <span>=</span>
            <BoxInput>
              <input type='text' value={newMiles}/>
              <p>Quilômetro</p>
            </BoxInput>
          </InputContainer>
          <BtnContainer>
            <Button text={"Converter"} type="submit"/>
          </BtnContainer>
        </FormContainer>
        <div className="border"></div>
        <FormContainer onSubmit={handleConvertKmToMiles}>
          <InputContainer >
            <BoxInput>
              <input value={kilometers} onChange={(event) => setKilometers(event.target.value)}/>
              <p>Quilômetro</p>
            </BoxInput>
            <span>=</span>
            <BoxInput>
              <input type='text' value={newKilometers}/>
              <p>Milha</p>
            </BoxInput>
          </InputContainer>
          <BtnContainer>
            <Button text={"Converter"} type="submit"/>
          </BtnContainer>
        </FormContainer>
      </ContainerConversor>
    </Container>
  );
};

export default Converter;
