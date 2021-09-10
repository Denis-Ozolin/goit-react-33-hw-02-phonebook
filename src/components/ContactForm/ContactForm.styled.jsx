import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & button {
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 8px 16px;
    background-color: slategrey;
    color: azure;
    font-size: 18px;
    border-color: azure;
    cursor: pointer;
  }
`;

export const Input = styled.label`
  margin-bottom: 20px;

  & input {
    width: 200px;
    margin-left: 20px;
    padding: 10px;
  }
`;
