import { Link } from "react-router-dom";
import { StyledHr, StyledLi, StyledNavMenu } from "./navmenu.styles"

const NavMenu = ({$visibleNav, NavSwitch}) => {
    return (
      <StyledNavMenu onClick={NavSwitch} $visibleNav={$visibleNav} >
        <ul>
          <StyledLi $color="#DEF4FC"><Link to="/">MERCURY</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#F7CC7F"><Link to="/venus">VENUS</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#545BFE"><Link to="/earth">EARTH</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#FF6A45"><Link to="/mars">MARS</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#ECAD7A"><Link to="/jupiter">JUPITER</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#FCCB6B"><Link to="/saturn">SATURN</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#65F0D5"><Link to="/uranus">URANUS</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#497EFA"><Link to="/neptune">NEPTUNE</Link><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          
        </ul>
      </StyledNavMenu>
    );
  };
  
  export default NavMenu;