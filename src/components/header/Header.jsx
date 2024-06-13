import { StyledHeader, StyledHr } from "./header.styles"

const Header =({NavSwitch})=>{
    return <>
    <StyledHeader>
        
           <h1>THE PLANETS</h1>
           <div onClick={(NavSwitch)}><img src="icon-hamburger.svg" alt="" /></div>
    
    </StyledHeader>
   <StyledHr/>
    </>
}
export default Header
