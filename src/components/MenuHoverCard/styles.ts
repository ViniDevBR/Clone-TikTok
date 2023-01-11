import styled from 'styled-components'

export const ContentContainer = styled.div`
  z-index: 4;
  background-color: #252525;
  border-radius: 10px;
  padding: 10px 0;

  ul {
    z-index: 4;

    .listContent{
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      padding: 10px 16px;
      cursor: pointer;

      &:hover {
        background-color: gray;
      }
    }
    .listItem {
      color: #FFFFFFE6;
      font-size: 1.6rem;
      margin-left: 8px;
    }
  }
`