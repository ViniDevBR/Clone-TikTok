import styled from 'styled-components'

export const Container = styled.div`
  width: 280px;
  padding: 20px;
  z-index: 4;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND2};
  border-radius: 10px;
  box-shadow: -2px 2px 10px ${({ theme}) => theme.COLORS.SHADOW};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    .avatar {
      border-radius: 50%;
      width: 44px;
      height: 44px;
    }
  }
  .userDetails {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 10px;

    .gap {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`