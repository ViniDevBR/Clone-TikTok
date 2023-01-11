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
import logoImgDark from '../../assets/Images/TikTok-Logo.png'
import logoImgLight from '../../assets/Images/tiktok-logo-2.png'
import { MagnifyingGlass } from 'phosphor-react'
//RADIX IU
import * as HoverCard from '@radix-ui/react-hover-card'
import { useToggle } from '../../hooks/useToggle'


export function Header() {
  const { COLORS } = useTheme()
  const { toggleMode } = useToggle()

  const img = toggleMode ? logoImgDark : logoImgLight

  return (
    <HeaderContainer>
      <div className='content'>
        <a href="/">
          <img src={img} alt='Logo TikTok' />
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