import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`

export const MainContainer = styled.main`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 1300px;
  }
`