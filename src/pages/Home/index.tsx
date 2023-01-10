//COMPONENTS
import { Header } from '../../components/Header'
import { MainVideo } from '../../components/MainVideos'
import { Navigation } from '../../components/Navigation'
//STYLED-COMPONENTS
import { MainContainer, Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      
      <MainContainer>
        <Navigation />
        <MainVideo />
      </MainContainer>
    </Container>
  )
}