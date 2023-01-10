import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainContainer = styled.main`
  border: 1px solid yellow;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 1300px;
  }
`