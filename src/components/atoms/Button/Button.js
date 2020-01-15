import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.pink};
  width: 67px;
  height: 67px;
  border-radius: 50px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.pink100};
      width: 220px;
      height: 47px;
      font-size: 10px;
      font-size: 16px;
    `}
`;

export default Button;
