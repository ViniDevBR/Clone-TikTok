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
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER6};
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
      color: ${({ theme }) => theme.COLORS.TEXT_3};
      font-weight: 600;
      font-size: 1.6rem;
      margin-right: 5px;
    }
    .descUser {
      color: ${({ theme }) => theme.COLORS.TEXT_4};
    }
  }
`