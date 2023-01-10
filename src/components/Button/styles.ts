import styled, { css } from 'styled-components'

interface IProps {
  variant?: 'secondary' | 'terciary' | 'follow'
  width?: string
  height?: string
}

export const ButtonContainer = styled.button<IProps>`
  background-color: #252525;
  height: ${({ height }) => height || '35px'};
  width: ${({ width }) => width || '120px'};
  border: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #25252590;
  }

  ${({variant}) => variant === 'secondary' && css`
    background-color: #FF3B5C;

    &:hover {
      background-color: #B91010;
    }
  `}

  ${({variant}) => variant === 'terciary' && css`
    background-color: #FFFFFF14;
    color: #FF3B5C;
    border: 1px solid #FF3B5C;

    &:hover {
      background-color: #FF3B5C14;
    }
  `}
`