//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
//ICONS && STYLED-COMPONENTS
import { Keyboard, Moon, Question, Translate } from 'phosphor-react'
import { ContentContainer } from './styles'
import { useTheme } from 'styled-components'
//HOOKS
import { useToggle } from '../../hooks/useToggle'
//SWITCH
import ReactSwitch from 'react-switch'

export function MenuHoverCard() {
  const { COLORS } = useTheme()
  const { toggleMode, setToggleMode } = useToggle()

  function handleSwitch() {
    setToggleMode(!toggleMode)
  }

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

            <li className='listContent'>
              <Moon size={20} color={COLORS.TEXT_3} />
              <span className='listItem'>Modo escuro</span>
              <ReactSwitch
                checked={toggleMode}
                onChange={handleSwitch}
                onColor='#0BE09B'
                boxShadow="0px 1px 5px #00000099"
                activeBoxShadow="0px 0px 1px 10px #00000033"
                checkedIcon={false}
                uncheckedIcon={false}
                width={40}
                height={20}
              />
            </li>
          </ul>
          <HoverCard.Arrow style={{ zIndex: 4, fill: COLORS.BACKGROUND2 }} />
        </ContentContainer>
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}