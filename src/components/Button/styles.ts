import styled, { css } from 'styled-components'

interface IProps {
  variant?: 'secondary' | 'terciary'
}

export const ButtonContainer = styled.button<IProps>`
  background-color: #252525;
  padding: 0 10px;
  height: 35px;
  width: 120px;
  border: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #25252590;
  }

  p {
    font-weight: 600;
    font-size: 1.6rem;
    color: #FFFFFFE6;
  }

  ${({variant}) => variant === 'secondary' && css`
    background-color: #FF3B5C;

    &:hover {
      background-color: #B91010;
    }
    p {
      color: #FFFFFF;
    }
  `}

  ${({variant}) => variant === 'terciary' && css`
    background-color: #FFFFFF14;
    color: #FF3B5C;
    width: 100%;
    border: 1px solid #FF3B5C;
    height: 48px;

    p {
      font-size: 1.8rem;
      color: #FF3B5C;
    }

    &:hover {
      background-color: #FF3B5C14;
    }
  `}

`