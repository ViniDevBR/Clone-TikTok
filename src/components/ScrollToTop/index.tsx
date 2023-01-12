//ICONS && STYLED-COMPONENTS
import { ArrowLineUp } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { Container } from './styles'
//SCROLL
import * as Scroll from 'react-scroll'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { COLORS } = useTheme()

  function handleScrollToTop() {
    const scrollToTop = Scroll.animateScroll
    scrollToTop.scrollToTop()
  }

  useEffect(() => {
    const pixelForButtonBeVisible = 500
    const toggleVisibility = () => {
      if (window.pageYOffset > pixelForButtonBeVisible) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return(
    <div>
      {isVisible && (
        <Container onClick={handleScrollToTop}>
          <ArrowLineUp size={25} color={COLORS.TEXT_1} weight="fill" />
        </Container>
      )}
    </div>
  )
}