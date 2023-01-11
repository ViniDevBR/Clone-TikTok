//REACT
import { useState } from 'react'
//ICONS
import {
  Hash,
  House,
  MusicNotesSimple,
  Users,
  VideoCamera
} from 'phosphor-react'
//STYLED-COMPONENTS
import {
  NavContainer,
  IconContainer,
  TopUsersContainer,
  Login,
  ExplorerContainer,
  AboutContainer
} from './styles'
//API MOCK
import { topUsers } from '../../Mock/TopUsers'
import { explorer } from '../../Mock/Explorer'
//TYPES
import { IUsers } from '../../@types/Users'
import { IExplorer } from '../../@types/Explorer'
//COMPONENTS
import { Button } from '../Button'
import { UserList } from '../UserList'
import { Text } from '../Text'


export function Navigation() {
  const [userList] = useState<IUsers[]>(topUsers)
  const [explorerList] = useState<IExplorer[]>(explorer)

  return(
    <NavContainer>
      <IconContainer>
        <ul className='listOfItems'>
          <li className='navItems'>
            <House size={40} color="#FF3B5C" weight="duotone" />
            <p className='screen'>Para Você</p>
          </li>
          <li className='navItems'>
            <Users size={40} color="#FFFFFFE6" weight="light" />
            <p className='screen'>Seguindo</p>
          </li>
          <li className='navItems'>
            <VideoCamera size={40} color='#FFFFFFE6' weight='light' />
            <p className='screen'>LIVE</p>
          </li>
        </ul>

        <Login>
          <p className='alert'>
            Faça login para seguir criadores, curtir vídeos e ver comentários.
          </p>
          <Button width='100%' height='50px' variant='terciary'>
            <Text color='#FF3B5C' size={1.8} weight='600'>
              Entrar
            </Text>
          </Button>
        </Login>
      </IconContainer>

      <TopUsersContainer>
        <ul className='userList'>
          <p className='userSuggestion'>Contas Sugeridas</p>

          {userList.map(user => (
            <UserList
              key={user.id}
              user={user}
            />
          ))}
        </ul>
      </TopUsersContainer>

      <ExplorerContainer>
        <p className='explorer'>Descobrir</p>

        <ul className='explorerList'>
          {explorerList.map(explorer => (
            <li className='explorerItem' key={explorer.id}>
              {explorer.type === 'hashtag' && <Hash size={20} color="#FFF" weight="regular" />}
              {explorer.type === 'music' && <MusicNotesSimple size={20} color="#FFF" weight="regular" />}

              <span className='explorerName'>{explorer.name}</span>
            </li>
          ))}
        </ul>
      </ExplorerContainer>

      <AboutContainer>
        <div className='about'>
          <a className='aboutLink' href="#">Sobre</a>
          <a className='aboutLink' href="#">Sala de imprensa</a>
          <a className='aboutLink' href="#">Contato</a>
          <a className='aboutLink' href="#">Carreira</a>
          <a className='aboutLink' href="#">ByteDance</a>
        </div>

        <div className='about'>
          <a className='aboutLink' href="#">TikTok for Good</a>
          <a className='aboutLink' href="#">Anunciar</a>
          <a className='aboutLink' href="#">Developers</a>
          <a className='aboutLink' href="#">Transparency</a>
          <a className='aboutLink' href="#">Recompensas</a>
          <a className='aboutLink' href="#">TikTok</a>
          <a className='aboutLink' href="#">TikTok Browse</a>
          <a className='aboutLink' href="#">TikTok Embeds</a>
        </div>

        <div className='about'>
          <a className='aboutLink' href="#">Ajuda</a>
          <a className='aboutLink' href="#">Segurança</a>
          <a className='aboutLink' href="#">Termos</a>
          <a className='aboutLink' href="#">Privacidade</a>
          <a className='aboutLink' href="#">Creator Portal</a>
          <a className='aboutLink' href="#">Diretrizes da Comunidade</a>
          <a className='aboutLink' href="#">Direitos Autorais</a>
        </div>

        <div className='about'>
          <a className='aboutLink' href="#">Mais</a>
        </div>

        <div className='about'>
          <p className='aboutLink disabled'>© 2023 TikTok</p>
        </div>
      </AboutContainer>
    </NavContainer>
  )
}