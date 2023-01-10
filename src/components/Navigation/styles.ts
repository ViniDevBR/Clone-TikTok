import styled from 'styled-components'

export const NavContainer = styled.nav`
  top: 70px;
  border-right: 1px solid #FFFFFF1F;
  width: 70px;
  height: calc(100vh - 70px);
  padding: 12px 8px;
  overflow-y: scroll;

  @media (min-width: 1024px) {
    width: 30%;
    max-width: 340px;
  }
`

export const IconContainer = styled.div`
  border-bottom: 1px solid #FFFFFF1F;
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
      background-color: #2E2E2E;
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
        color: #FFFFFFE6;
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
      background-color: #2E2E2E;
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
      color: #FFFFFFBF;
      margin-block: 8px;
      padding-left: 8px;
      font-weight: 600;
    }
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

export const Login = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 20px 8px;

    .alert {
      font-size: 1.6rem;
      color: #FFFFFF80;
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
    border-top: 1px solid #FFFFFF1F;

    .explorer {
      width: 100%;
      display: block;
      color: #FFFFFFBF;
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
      background-color: #FFFFFF14;
      border-radius: 500px;
      cursor: pointer;

      &:hover {
        background-color: #FFFFFF05;
      }
    }
    .explorerName {
      color: #FFFFFFBF;
    }
  }
`

export const AboutContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-top: 1px solid #FFFFFF1F;
    gap: 10px;
    align-items: flex-start;

    .about {
      display: flex;
      flex-wrap: wrap;

      .aboutLink {
        color: #FFFFFF80;
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