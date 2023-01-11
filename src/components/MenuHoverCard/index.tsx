//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
//ICONS && STYLED-COMPONENTS
import { Keyboard, Moon, Question, Translate } from 'phosphor-react'
import { ContentContainer } from './styles'
import { useTheme } from 'styled-components'

export function MenuHoverCard() {
  const { COLORS } = useTheme()

  return(
    <HoverCard.Portal>
      <HoverCard.Content sideOffset={5} asChild>
        <ContentContainer>
          <ul>
            <li className='listContent'>
              <Translate size={20} color={COLORS.TEXT_3} weight='bold' />
              <span className='listItem'>Português</span>
            </li>
            <li className='listContent'>
              <Question size={20} color={COLORS.TEXT_3} weight='bold' />
              <span className='listItem'>Ajuda</span>
            </li>
            <li className='listContent'>
              <Keyboard size={20} color={COLORS.TEXT_3} weight='bold' />
              <span className='listItem'>Atalhos do teclado</span>
            </li>
            <li className='listContent' onClick={() => []}>
              <Moon size={20} color={COLORS.TEXT_3} />
              <span className='listItem'>Modo escuro</span>
            </li>
          </ul>
          <HoverCard.Arrow style={{ zIndex: 4, fill: COLORS.BACKGROUND2 }} />
        </ContentContainer>
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}