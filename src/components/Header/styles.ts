import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #FFFFFF1F;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 0;
    width: 100%;
  }

  img {
    width: 150px;
    margin-left: 10px;
  }

  @media (min-width: 900px) {
    .content {
      width: 90%;
    }
    img {
      margin-left: 0;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    display: none;
  }
`

export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF1F;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  padding: 12px 0 12px 16px;
  height: 45px;

  input {
    border: none;
    caret-color: #FF3B5C;
    color: #FFF;
    outline: none;
    background-color: transparent;
    width: 270px;
  }

  .separator {
    background-color: #767676;
    height: 100%;
    width: 1px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`

export const IconContainer = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  background-color: #FFFFFF1F;
  padding: 12px;
  height: 45px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  &:hover {
    background-color: #FFFFFF4f;
  }

  @media (max-width: 800px) {
    display: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 450px) {
    display: none;
  }
`

export const MenuContainer = styled.div`
  padding: 0 10px;

  .ballA {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    margin: 2px 0;
  }
`

export const ContentContainer = styled.div`
  background-color: #252525;
  border-radius: 10px;
  padding: 10px 0;

  ul {
    .listContent{
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: gray;
      }
    }
  }
`