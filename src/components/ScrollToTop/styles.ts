import styled from 'styled-components'

export const Container = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND5};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER2};
  }

  @media (min-width: 1024px) {
    bottom: 20px;
    right: 20px;
  }
`