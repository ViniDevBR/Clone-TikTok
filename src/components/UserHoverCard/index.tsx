//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
import { Button } from '../Button'
import { Container } from './styles'
import { Text } from '../Text'
import { IUsers } from '../../@types/Users'

interface IProps {
  user: IUsers
}

export function UserHoverCard({ user }: IProps) {
  return(
    <HoverCard.Portal>
      <HoverCard.Content sideOffset={5} asChild align='start'>
        <Container>
          <div className='header'>
            <img className='avatar' src={user.avatarURL} alt="foto do usuario" />
            <Button variant='terciary'>
              <Text color='#FF3B5C' weight='600'>
                Seguir
              </Text>
            </Button>
          </div>

          <Text color='#FFFFFFE6' size={1.8} weight='600'>{user.name}</Text>
          <Text color='#FFFFFFE6' size={1.4}>{user.description}</Text>

          <div className='userDetails'>
            <div className='gap'>
              <Text size={1.7} color='#FFFFFFE6' weight='600'>{user.followers}</Text>
              <Text size={1.7} color='#FFFFFFBF'>Seguidores</Text>
            </div>

            <div className='gap'>
              <Text size={1.7} color='#FFFFFFE6' weight='600'>{user.likes}</Text>
              <Text size={1.7} color='#FFFFFFBF'>Curtidas</Text>
            </div>
          </div>
          <HoverCard.Arrow className='HoverCardArrow' />
        </Container>
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}