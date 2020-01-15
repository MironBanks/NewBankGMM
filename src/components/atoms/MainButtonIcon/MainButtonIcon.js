import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 77px;
  height: 77px;
  border-radius: 50px;
  background-image: url(${({ icon }) => icon});
  background-color: ${({ theme }) => theme.grey100};
  background-repeat: no-repeat;
  background-position: 50% 70%;
  background-size: 60%;
  border: none;
`;

export default ButtonIcon; // ButtonIcon component
