//ICONS && STYLED-COMPONENTS
import { CheckCircle } from 'phosphor-react'
import { ListContainer } from './styles'
//TYPES
import { IUsers } from '../../@types/Users'
//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
import './styles.css'
//COMPONENTS
import { UserHoverCard } from '../UserHoverCard'

interface IUserProps {
  user: IUsers
}

export function UserList({ user}: IUserProps) {
  return(
    <HoverCard.Root>
      <HoverCard.Trigger className='fullwidth'>
        <ListContainer>
          <img className='userImg' src={user.avatarURL} alt="imagem do usuario" />

          <div className='contentUser'>
            <div>
              <span className='nameUser'>{user.name}</span>
              {user.verified && <CheckCircle size={15} color="#20D5EC" weight="fill" />}
            </div>
            <span className='descUser'>{user.description}</span>
          </div>
        </ListContainer>
      </HoverCard.Trigger>

      <UserHoverCard user={user}/>
    </HoverCard.Root>
  )
}