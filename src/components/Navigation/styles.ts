import styled from 'styled-components'

export const NavContainer = styled.nav`
  align-self: flex-start;
  z-index: 2;
  position: fixed;
  top: 70px;
  border-right: 1px solid ${({ theme}) => theme.COLORS.BORDER_1};
  width: 70px;
  height: calc(100vh - 70px);
  padding: 12px 8px;
  overflow-y: scroll;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND};

  &::-webkit-scrollbar-thumb {
    display: none;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      display: block;
    }
  }
  @media (min-width: 1024px) {
    width: 30%;
    max-width: 340px;
    margin-left: 5%;
    border: none;
  }
`

export const IconContainer = styled.div`
  border-bottom: 1px solid ${({ theme}) => theme.COLORS.BORDER_1};
  padding-bottom: 8px;

  .listOfItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .navItems {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    &:hover {
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_HOVER5};
    }
    .screen {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .navItems {
      .screen {
        display: block;
        font-size: 1.6rem;
        font-weight: 600;
        color: ${({ theme}) => theme.COLORS.TEXT_3};
      }
    }
  }
`

export const TopUsersContainer = styled.div`
  padding-block: 8px;

  .userSuggestion,
  .contentUser {
    display: none;
  }

  .userList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .userItem {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    &:hover {
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_HOVER5};
    }
  }
  .userImg {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1024px) {
    .userSuggestion {
      width: 100%;
      display: block;
      color: ${({ theme}) => theme.COLORS.TEXT_4};
      margin-block: 8px;
      padding-left: 8px;
      font-weight: 600;
    }
    .contentUser {
      display: flex;
      flex-direction: column;
    }
    .nameUser {
      color: ${({ theme}) => theme.COLORS.TEXT_3};
      font-weight: 600;
      font-size: 1.6rem;
      margin-right: 5px;
    }
    .descUser {
      color: ${({ theme}) => theme.COLORS.TEXT_4};
    }
  }
`

export const Login = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 20px 8px;

    .alert {
      font-size: 1.6rem;
      color: ${({ theme}) => theme.COLORS.TEXT_5};
      margin-bottom: 20px;
    }
  }
`

export const ExplorerContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-top: 1px solid ${({ theme}) => theme.COLORS.BORDER_1};

    .explorer {
      width: 100%;
      display: block;
      color: ${({ theme}) => theme.COLORS.TEXT_4};
      margin-block: 8px;
      font-weight: 600;
    }
    .explorerList {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;
    }
    .explorerItem {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 3px 10px;
      margin: 0 8px 12px 0;
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND4};
      border-radius: 500px;
      border: 1px solid ${({ theme}) => theme.COLORS.BORDER_3};
      cursor: pointer;

      &:hover {
        background-color: ${({ theme}) => theme.COLORS.BACKGROUND_HOVER6};
        border: 1px solid ${({ theme}) => theme.COLORS.BORDER_HOVER};
      }
    }
    .explorerName {
      color: ${({ theme}) => theme.COLORS.TEXT_4};
    }
  }
`

export const AboutContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-top: 1px solid ${({ theme}) => theme.COLORS.BORDER_1};
    gap: 10px;
    align-items: flex-start;

    .about {
      display: flex;
      flex-wrap: wrap;

      .aboutLink {
        color: ${({ theme}) => theme.COLORS.TEXT_5};
        margin: 5px 6px 0 0;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }

        &.disabled {
          text-decoration: none
        }
      }
    }
  }
`