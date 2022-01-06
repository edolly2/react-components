import styled from "styled-components";
const Btn = styled.button`
  border-radius: 6px;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 0.4rem 0.8rem;
  min-width: 10rem;
  max-width: 10rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

const Button = (props) => {
  return <Btn className={props.buttonColor}>{props.buttonText}</Btn>;
};

export default Button;
