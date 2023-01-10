import styled from 'styled-components'

interface TextProps {
  weight?: '500' | '600'
  color?: string
  size?: number
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) => color || '#FFFFFFE6'};
  font-size: ${({ size }) => size ? `${size}rem` : '1.6rem'};
  font-weight: ${({ weight }) => weight || '500'};
`