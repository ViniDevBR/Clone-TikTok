//COMPONENTS
import { Header } from '../../components/Header'
import { MainVideo } from '../../components/MainVideos'
import { Navigation } from '../../components/Navigation'
import { ScrollToTop } from '../../components/ScrollToTop'
//STYLED-COMPONENTS
import { MainContainer, Container } from './styles'
//MOCKS
import { videos } from '../../Mock/Videos'

export function Home() {
  return (
    <Container>
      <Header />

      <Navigation />
      <MainContainer>
        {videos.map(video => (
          <MainVideo
            key={video.id}
            video={video}
          />
        ))}
        <ScrollToTop />
      </MainContainer>
    </Container>
  )
}