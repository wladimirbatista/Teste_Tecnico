import {
  BackgroundImage,
  OpacityContainer,
  ParagrafContainer,
  FirstSection,
  SecondSection,
  Container,
  Box,
  ImageContainer,
  TextContainer,
  BtnLink
} from "./styles";
import image1 from "./../../assets/images/main-image.jpg";
import icon1 from "./../../assets/images/ico1.png";
import icon2 from "./../../assets/images/ico2.png";
import icon3 from "./../../assets/images/ico3.png";
import image2 from "./../../assets/images/section-image.jpg";

const Main = () => {

  return (
    <>
      <BackgroundImage>
        <img src={image1} />
        <OpacityContainer>
          <ParagrafContainer>
            <h1>Conversor para trilheiros</h1>
            <p>Aplicação ideial para todo aventureiro que curti um desafio.</p>
            <p>Explore seus caminhos e calcule sua distancia com nosso App.</p>
          </ParagrafContainer>
          <BtnLink href="#conversor">Usar o Conversor</BtnLink>
        </OpacityContainer>
      </BackgroundImage>
      <FirstSection id="dicas">
        <Container>
          <Box>
            <img src={icon1} />
            <h3>Planeje</h3>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit nom mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
          </Box>
        </Container>
        <Container>
          <Box>
            <img src={icon2} />
            <h3>Registre</h3>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit nom mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
          </Box>
        </Container>
        <Container>
          <Box>
            <img src={icon3} />
            <h3>Conquiste</h3>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit nom mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
          </Box>
        </Container>
      </FirstSection>
      <SecondSection id="informacoes">
        <TextContainer>
          <h2>
            Informações relevantes para você aproveitar o melhor das suas
            aventuras
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut
            adipiscing.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </TextContainer>
        <ImageContainer>
          <img src={image2} />
        </ImageContainer>
      </SecondSection>
    </>
  );
};

export default Main;
