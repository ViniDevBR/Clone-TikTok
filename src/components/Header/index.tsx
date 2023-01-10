//COMPONENTS
import { Button } from '../Button'
import { Text } from '../Text'
//STYLED-COMPONENTS
import { HeaderContainer, InputStyle, IconContainer, Buttons, MenuContainer, InputContainer, ContentContainer } from './styles'
//IMG && ICONS
import logoImg from '../../assets/Images/TikTok-Logo.png'
import { Keyboard, MagnifyingGlass, Moon, Question, Translate } from 'phosphor-react'
//RADIX IU
import * as HoverCard from '@radix-ui/react-hover-card'
import './styles.css'

export function Header() {
  return (
    <HeaderContainer>
      <div className='content'>
        <a href="/">
          <img src={logoImg} alt='Logo TikTok' />
        </a>

        <InputContainer>
          <InputStyle>
            <input placeholder='Pesquisar contas e videos'/>
            <div className='separator'/>
          </InputStyle>
          <IconContainer>
            <MagnifyingGlass size={20} color='#767676' weight='bold'/>
          </IconContainer>
        </InputContainer>

        <Buttons>
          <Button>
            <Text weight='600'>
              + Carregar
            </Text>
          </Button>
          <Button variant='secondary'>
            <Text color='#FFFFFF' weight='600'>
              Entrar
            </Text>
          </Button>

          <HoverCard.Root openDelay={5}>
            <HoverCard.Trigger asChild>
              <MenuContainer>
                <div className='ballA'/>
                <div className='ballA'/>
                <div className='ballA'/>
              </MenuContainer>
            </HoverCard.Trigger>

            <HoverCard.Portal>

              <HoverCard.Content sideOffset={5}>
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
          </HoverCard.Root>
        </Buttons>
      </div>
    </HeaderContainer>
  )
}