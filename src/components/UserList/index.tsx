import { CheckCircle } from 'phosphor-react'
import { IUsers } from '../../@types/Users'
import { ListContainer } from './styles'

interface IUserProps {
  user: IUsers
}

export function UserList({ user}: IUserProps) {
  return(
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
  )
}