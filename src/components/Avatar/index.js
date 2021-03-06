import styled from "styled-components";

const Avatar = styled.img`
  max-width: 100%;
  border-radius: 25px;
  transform: rotateZ(-4deg);

  @media only screen and (max-width: 850px) {
    width: initial;
    height: 100%;
  }
`;

export default Avatar;
