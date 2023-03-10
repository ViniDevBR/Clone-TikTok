import styled, { css } from 'styled-components'

interface IProps {
  variant?: 'secondary' | 'terciary' | 'follow'
  width?: string
  height?: string
}

export const ButtonContainer = styled.button<IProps>`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
  height: ${({ height }) => height || '35px'};
  width: ${({ width }) => width || '120px'};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_4};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_HOVER2};
  }

  ${({variant}) => variant === 'secondary' && css`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND5};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_2};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER2};
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER_HOVER3};
    }
  `}

  ${({variant}) => variant === 'terciary' && css`
    background-color:${({ theme }) => theme.COLORS.BACKGROUND4};
    color: ${({ theme }) => theme.COLORS.TEXT_2};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_2};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER3};
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER_2};
    }
  `}
`