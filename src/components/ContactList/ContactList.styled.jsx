import styled from '@emotion/styled';

export const List = styled.ul`
  width: 320px;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    margin-bottom: 10px;

    & button {
      margin-left: 20px;
      padding: 6px 8px;
      background-color: slategrey;
      border-color: azure;
      color: azure;
      font-size: 16px;
    }
  }
`;
