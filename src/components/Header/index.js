import styled from "styled-components";

const valign = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: ${props => valign[props.valign]};
  align-items: center;
  box-sizing: border-box;
  position: relative;

  background: ${props =>
    props.odd && props.theme.header_background_odd
      ? props.theme.header_background_odd
      : props.theme.header_background};
  color: ${props =>
    props.odd && props.theme.header_color_odd
      ? props.theme.header_color_odd
      : props.theme.header_color};
  text-align: right;

  width: 30%;
  padding: ${props => props.theme.header_padding};

  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 200px;
    padding: 35px;
    text-align: center;
  }

  * {
    z-index: 2;
  }

  h2 {
    font-size: 44px;
    line-height: 0.8;
    text-transform: uppercase;
    font-weight: 600;

    @media only screen and (max-width: 850px) {
      font-size: 30px;
    }
  }
`;

Header.defaultProps = {
  valign: "middle",
};

export default Header;
