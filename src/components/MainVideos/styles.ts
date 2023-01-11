import styled from 'styled-components'

export const MainVideoContainer = styled.main`
  padding: 20px 10px;
  width: calc(100% - 70px);
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_1};

  @media (min-width: 1024px) {
    margin: 20px 26px;
    padding: 0;
    width: calc(70% - 70px);
    max-width: 1140px;
  }
`

export const VideoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    .userName {
      text-decoration: underline;
    }
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .detailsUser {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 10px;
    width: 70%;
  }
  .userName{
    cursor: pointer;
    color: ${({ theme}) => theme.COLORS.TEXT_3};
    font-size: 1.8rem;
    margin-right: 5px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .userDesc {
    color: ${({ theme}) => theme.COLORS.TEXT_3};
    font-size: 1.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;

    img {
      width: 60px;
      height: 60px;
    }
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
    color: ${({ theme}) => theme.COLORS.TEXT_3};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .descMusic {
    cursor: pointer;
    color: ${({ theme}) => theme.COLORS.TEXT_3};
    margin-left: 5px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 460px) {
    margin: 5px 0 0 50px;
    width: calc(100% - 130px);
  }
  @media (min-width: 1024px) {
    margin: 0 0 0 70px;
    width: calc(100% - 150px);
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

  .videoInfosPlus {}

  @media (min-width: 460px) {
    margin-left: 50px;
    margin-bottom: 20px;
    justify-content: flex-start;

    .videoInfosPlus {
      margin-left: 20px;
    }
  }
  @media (min-width: 1024px) {
    margin-left: 70px;
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
    width: 35px;
    height: 35px;
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND3};
    margin: 8px 0 6px;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER7};
    }
  }
  .videoInfosNumber {
    color: ${({ theme}) => theme.COLORS.TEXT_4};
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    .iconBg {
      width: 50px;
      height: 50px;
    }
  }
`