import styled from 'styled-components'

interface IProps {
  variant?: 'secondary'
}

export const ButtonContainer = styled.button<IProps>`
  background-color: ${({variant}) => variant === 'secondary' ? '#FF3B5C' : '#252525'};
  outline: 0;
  font-weight: 600;
  padding: 0 10px;
  height: 35px;
  width: 120px;
  color: #FFF;
  border: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;


  &:hover {
    background-color: ${({variant}) => variant === 'secondary' ? '#B91010' : '#25252590'};
  }
`