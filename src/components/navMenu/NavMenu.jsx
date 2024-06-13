import { StyledHr, StyledLi, StyledNavMenu } from "./navmenu.styles"

const NavMenu = ({$visibleNav}) => {
    return (
      <StyledNavMenu $visibleNav={$visibleNav}>
        <ul>
          <StyledLi $color="#DEF4FC"><a href="/">MERCURY</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#F7CC7F"><a href="/venus">VENUS</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#545BFE"><a href="/earth">EARTH</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#FF6A45"><a href="/mars">MARS</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#ECAD7A"><a href="/jupiter">JUPITER</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#FCCB6B"><a href="/saturn">SATURN</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#65F0D5"><a href="/uranus">URANUS</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          <StyledHr />
          <StyledLi $color="#497EFA"><a href="/neptune">NEPTUNE</a><img src="icon-chevron.svg" alt="Chevron Icon" /></StyledLi>
          
        </ul>
      </StyledNavMenu>
    );
  };
  
  export default NavMenu;