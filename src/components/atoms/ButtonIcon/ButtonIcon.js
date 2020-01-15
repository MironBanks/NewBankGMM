import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 57px;
  height: 57px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon; // ButtonIcon component
