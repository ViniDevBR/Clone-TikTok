import { HeaderContainer, InputStyle, IconContainer, Buttons, MenuContainer, InputContainer, ContentContainer } from './styles'
import logoImg from '../../assets/Images/TikTok-Logo.png'
import { Keyboard, MagnifyingGlass, Question, Translate } from 'phosphor-react'
import { Button } from '../Button'
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
          <Button title='+ Carregar' />
          <Button title='Entrar' variant='secondary'/>

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
                      <Translate size={25} color='#fff' weight='bold' />
                      <p>Portugues</p>
                    </li>
                    <li className='listContent'>
                      <Question size={25} color='#fff' weight='bold' />
                      <p>Ajuda</p>
                    </li>
                    <li className='listContent'>
                      <Keyboard size={25} color='#fff' weight='bold' />
                      <p>Atalhos do teclado</p>
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