//ICONS && STYLED-COMPONENTS
import { ChatCircleDots, Heart, MusicNotesSimple, ShareNetwork } from 'phosphor-react'
import {
  MainVideoContainer,
  VideoHeader,
  UserInfo,
  VideoInfos,
  VideoPlay,
  VideoPlayLikes
} from './styles'
//TYPES
import { IVideo } from '../../@types/Video'
//COMPONENTS
import { Button } from '../Button'
import { Text } from '../Text'
//RADIX UI
import * as HoverCard from '@radix-ui/react-hover-card'
import { UserHoverCard } from '../UserHoverCard'
import { useTheme } from 'styled-components'


interface IProps {
  video: IVideo
}

export function MainVideo({ video }: IProps) {
  const { COLORS } = useTheme()

  return(
    <MainVideoContainer>
      <VideoHeader>
        <UserInfo>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <img src={video.user.avatarURL} alt='foto do usuario' />
            </HoverCard.Trigger>

            <UserHoverCard user={video.user} />
          </HoverCard.Root>

          <div className='detailsUser'>
            <span className='userName'>{video.user.name}</span>
            <span className='userDesc'>{video.user.description}</span>
          </div>
        </UserInfo>

        <Button width='100px' height='30px' variant='terciary'>
          <Text color={COLORS.TEXT_2} weight='600'>
            Seguir
          </Text>
        </Button>
      </VideoHeader>

      <VideoInfos>
        {video.descriptionVideo && <span className='descVideo'>{video.descriptionVideo}</span>}
        {video.music && (
          <div className='musicNote'>
            <MusicNotesSimple size={15} color={COLORS.TEXT_1} weight="regular" />
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
              <Heart size={25} color={COLORS.TEXT_1} weight='fill' />
            </div>
            <span className='videoInfosNumber'>{video.likes}</span>
          </VideoPlayLikes>

          <VideoPlayLikes>
            <div className='iconBg'>
              <ChatCircleDots size={25} color={COLORS.TEXT_1} weight='fill' />
            </div>
            <span className='videoInfosNumber'>{video.comments}</span>
          </VideoPlayLikes>

          <VideoPlayLikes>
            <div className='iconBg'>
              <ShareNetwork size={25} color={COLORS.TEXT_1} weight='fill' />
            </div>
            <span className='videoInfosNumber'>{video.shared}</span>
          </VideoPlayLikes>
        </div>
      </VideoPlay>
    </MainVideoContainer>
  )
}