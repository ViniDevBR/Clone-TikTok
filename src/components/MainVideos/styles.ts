import styled from 'styled-components'

export const MainVideoContainer = styled.main`

  padding: 20px 10px;
  width: calc(100% - 70px);
  border-bottom: 1px solid #FFFFFF1F;

  @media (min-width: 1024px) {

    padding: 20px 26px;
  }
`

export const VideoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .detailsUser {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 10px;
    width: 70%;
  }
  .userName{
    color: #FFFFFFE6;
    font-size: 1.8rem;
    margin-right: 5px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .userDesc {
    color: #FFFFFFE6;
    font-size: 1.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const VideoInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;

  .musicNote{
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .descVideo {
    color: #FFFFFFE6;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .descMusic {
    color: #FFFFFFE6;
    margin-left: 5px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const VideoPlay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  video {
    margin-top: 20px;
    width: 80%;
    max-width: 250px;
    border-radius: 12px;
  }

  .videoInfosPlus {

  }
`

export const VideoPlayLikes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .iconBg {
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #FFFFFF1F;
    margin: 8px 0 6px;
  }
  .videoInfosNumber {
    color: #FFFFFFBF;
    font-weight: 600;
  }
`