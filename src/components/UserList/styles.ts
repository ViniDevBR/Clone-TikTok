import styled from 'styled-components'

export const ListContainer = styled.li`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  &:hover {
    background-color: #2E2E2E;
  }

  .contentUser {
    display: none;
  }

  .userImg {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1024px) {
    .contentUser {
      display: flex;
      flex-direction: column;
    }
    .nameUser {
      color: #FFFFFFE6;
      font-weight: 600;
      font-size: 1.6rem;
      margin-right: 5px;
    }
    .descUser {
      color: #FFFFFFBF;
    }
  }
`