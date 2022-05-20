import {
  Container,
  LinkContainer,
  Link,
  LogoContainer,
  IconContainer
} from './styles'
import logo from './../../assets/images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {


  return(
    <Container>
      <LogoContainer>
        <img src={logo}/>
      </LogoContainer>
      <IconContainer>
        <GiHamburgerMenu fontSize={30} style={{cursor: 'pointer'}} />
      </IconContainer>
      <LinkContainer>
        <Link><a href="#dicas">Dicas</a></Link>
        <Link><a href="#informacoes">Informações</a></Link>
        <Link><a href="#conversor">Conversor</a></Link>
      </LinkContainer>
    </Container>
  )
}

export default Header;