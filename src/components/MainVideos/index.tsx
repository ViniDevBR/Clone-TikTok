import { ChatCircleDots, Heart, MusicNotesSimple, ShareNetwork } from 'phosphor-react'
import { IVideo } from '../../@types/Video'
import { Button } from '../Button'
import { Text } from '../Text'
import {
  MainVideoContainer,
  VideoHeader,
  UserInfo,
  VideoInfos,
  VideoPlay,
  VideoPlayLikes
} from './styles'


interface IProps {
  video: IVideo
}

export function MainVideo({ video }: IProps) {

  return(
    <MainVideoContainer>
      <VideoHeader>
        <UserInfo>
          <img src={video.user.avatarURL} alt='foto do usuario' />
          <div className='detailsUser'>
            <span className='userName'>{video.user.name}</span>
            <span className='userDesc'>{video.user.description}</span>
          </div>
        </UserInfo>

        <Button width='100px' height='30px' variant='terciary'>
          <Text color='#FF3B5C' weight='600'>
            Seguir
          </Text>
        </Button>
      </VideoHeader>

      <VideoInfos>
        {video.descriptionVideo && <span className='descVideo'>{video.descriptionVideo}</span>}
        {video.music && (
          <div className='musicNote'>
            <MusicNotesSimple size={15} color="#FFF" weight="regular" />
            <span className='descMusic'>{video.music}</span>
          </div>
        )}
      </VideoInfos>

      <VideoPlay>
        <video muted controls loop>
          <source src={video.videoURL}/>
        </video>

        <div className='videoInfosPlus'>
          <VideoPlayLikes>
            <div className='iconBg'>
              <Heart size={25} color='#ffffff' weight='fill' />
            </div>
            <span className='videoInfosNumber'>{video.likes}</span>
          </VideoPlayLikes>

          <VideoPlayLikes>
            <div className='iconBg'>
              <ChatCircleDots size={25} color='#ffffff' weight='fill' />
            </div>
            <span className='videoInfosNumber'>{video.comments}</span>
          </VideoPlayLikes>

          <VideoPlayLikes>
            <div className='iconBg'>
              <ShareNetwork size={25} color='#ffffff' weight='fill' />
            </div>
            <span className='videoInfosNumber'>{video.shared}</span>
          </VideoPlayLikes>
        </div>
      </VideoPlay>
    </MainVideoContainer>
  )
}