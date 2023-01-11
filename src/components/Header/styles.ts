import styled from 'styled-components'

export const HeaderContainer = styled.header`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_1};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
  }

  img {
    width: 150px;
    margin-left: 10px;
  }

  @media (min-width: 1024px) {
    .content {
      width: 90%;
      max-width: 1300px;
      padding: 1px 16px;
    }
    img {
      margin-left: 0;
    }
  }
`

export const InputContainer = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`

export const InputStyle = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND3};
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    padding: 12px 0 12px 16px;
    height: 45px;

    input {
      border: none;
      caret-color: ${({ theme }) => theme.COLORS.TEXT_2};
      color:${({ theme }) => theme.COLORS.TEXT_1};
      outline: none;
      background-color: transparent;
      width: 270px;
    }

    .separator {
      background-color: ${({ theme }) => theme.COLORS.BORDER_1};
      height: 100%;
      width: 1px;
    }
  }
`

export const IconContainer = styled.button`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    cursor: pointer;
    background-color: transparent;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BORDER_1};
    padding: 12px 16px 12px 12px;
    height: 45px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;

    &:hover {
      background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_HOVER5};
    }
  }
`

export const Buttons = styled.div`
  display: none;

  @media (min-width: 460px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`

export const MenuContainer = styled.div`
  padding: 0 10px;

  .ballA {
    width: 5px;
    height: 5px;
    background-color:  ${({ theme }) => theme.COLORS.TEXT_3};
    border-radius: 50%;
    margin: 2px 0;
  }
`