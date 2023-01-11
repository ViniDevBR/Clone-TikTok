//COMPONENTS
import { Button } from '../Button'
import { Text } from '../Text'
import { MenuHoverCard } from '../MenuHoverCard'
//STYLED-COMPONENTS
import {
  HeaderContainer,
  InputStyle,
  IconContainer,
  Buttons,
  MenuContainer,
  InputContainer,
} from './styles'
import { useTheme } from 'styled-components'
//IMG && ICONS
import logoImg from '../../assets/Images/TikTok-Logo.png'
import { MagnifyingGlass } from 'phosphor-react'
//RADIX IU
import * as HoverCard from '@radix-ui/react-hover-card'


export function Header() {
  const { COLORS } = useTheme()

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
            <MagnifyingGlass size={20} color={COLORS.ICON} weight='bold'/>
          </IconContainer>
        </InputContainer>

        <Buttons>
          <Button>
            <Text weight='600'>
              + Carregar
            </Text>
          </Button>
          <Button variant='secondary'>
            <Text color={COLORS.TEXT_1} weight='600'>
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

            <MenuHoverCard />
          </HoverCard.Root>
        </Buttons>
      </div>
    </HeaderContainer>
  )
}