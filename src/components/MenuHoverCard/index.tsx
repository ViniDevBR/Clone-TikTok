//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
import './styles.css'
//ICONS && STYLED-COMPONENTS
import { Keyboard, Moon, Question, Translate } from 'phosphor-react'
import { ContentContainer } from './styles'

export function MenuHoverCard() {
  return(
    <HoverCard.Portal>
      <HoverCard.Content sideOffset={5} asChild>
        <ContentContainer>
          <ul>
            <li className='listContent'>
              <Translate size={20} color='#FFFFFFE6' weight='bold' />
              <span className='listItem'>Português</span>
            </li>
            <li className='listContent'>
              <Question size={20} color='#FFFFFFE6' weight='bold' />
              <span className='listItem'>Ajuda</span>
            </li>
            <li className='listContent'>
              <Keyboard size={20} color='#FFFFFFE6' weight='bold' />
              <span className='listItem'>Atalhos do teclado</span>
            </li>
            <li className='listContent'>
              <Moon size={20} color="#FFFFFFE6" />
              <span className='listItem'>Modo escuro</span>
            </li>
          </ul>
          <HoverCard.Arrow className='HoverCardArrow' />
        </ContentContainer>
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}