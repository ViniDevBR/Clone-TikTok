//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
//COMPONENTS
import { Button } from '../Button'
import { Text } from '../Text'
//STYLED-COMPONENTS
import { Container } from './styles'
import { useTheme } from 'styled-components'
//TYPES
import { IUsers } from '../../@types/Users'


interface IProps {
  user: IUsers
}

export function UserHoverCard({ user }: IProps) {
  const { COLORS } = useTheme()

  return(
    <HoverCard.Portal>
      <HoverCard.Content sideOffset={5} asChild align='start'>
        <Container>
          <div className='header'>
            <img className='avatar' src={user.avatarURL} alt="foto do usuario" />
            <Button variant='terciary'>
              <Text color={COLORS.TEXT_2} weight='600'>
                Seguir
              </Text>
            </Button>
          </div>

          <Text color={COLORS.TEXT_3} size={1.8} weight='600'>{user.name}</Text>
          <Text color={COLORS.TEXT_4} size={1.4}>{user.description}</Text>

          <div className='userDetails'>
            <div className='gap'>
              <Text size={1.7} color={COLORS.TEXT_3} weight='600'>{user.followers}</Text>
              <Text size={1.7} color={COLORS.TEXT_4}>Seguidores</Text>
            </div>

            <div className='gap'>
              <Text size={1.7} color={COLORS.TEXT_3} weight='600'>{user.likes}</Text>
              <Text size={1.7} color={COLORS.TEXT_4}>Curtidas</Text>
            </div>
          </div>
          <HoverCard.Arrow style={{ zIndex: 4, fill: COLORS.BACKGROUND2 }} />
        </Container>
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}