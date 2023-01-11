import styled from 'styled-components'

export const Container = styled.div`
  width: 280px;
  padding: 20px;
  z-index: 4;
  background-color: #252525;
  border-radius: 10px;

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