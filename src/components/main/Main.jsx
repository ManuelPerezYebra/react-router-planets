import Tabs from "../tabs/Tabs"
import { Content, GeologyImg, Info, Source, StyledImgContainer } from "./main.styles"
import { PLANETS } from "../../constants/planets"
import { useState } from "react"
import NavMenu from "../navMenu/NavMenu"
import Header from "../header/Header"

const Main =({planet, $color})=>{
  
    const [activeTab, setActiveTab]= useState(0);
    const [visibleNav, setVisibleNav]=useState(false);

  if (!planet ) return
    
   
    const NavSwitch =()=>{
        setVisibleNav(prevPosition => !prevPosition);
    } 
  
    return (
    <div>
        <Header NavSwitch={NavSwitch}></Header>
        <NavMenu $visibleNav={visibleNav}></NavMenu>
        <Tabs $color={$color} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <StyledImgContainer>
            <img src={PLANETS[planet][Object.keys(PLANETS[planet])[activeTab]].img} alt="" />
            {activeTab === 2 && ( 
                    <GeologyImg>
                        <img src={PLANETS[planet].surface.geology} alt="Geology" />
                    </GeologyImg>
                )}
        </StyledImgContainer>
        <Content>
            <h1>{PLANETS[planet][Object.keys(PLANETS[planet])[activeTab]].name}</h1>
            <p>{PLANETS[planet][Object.keys(PLANETS[planet])[activeTab]].description}</p>
        </Content>
        <Source>
            <p>Source: <span><a href="https://es.wikipedia.org/wiki/Mercurio_(planeta)">Wikipedia</a> </span></p>
            <img src="square-up-right-solid.svg" alt="" />
        </Source>
        <div>
            <Info>
                <p>ROTATION TIME</p>
                <h1>{PLANETS[planet].overview.rotationtime}</h1>
            </Info><Info>
                <p>REVOLUTION TIME</p>
                <h1>{PLANETS[planet].overview.revolutiontime}</h1>
            </Info>
            <Info>
                <p>RADIUS</p>
                <h1>{PLANETS[planet].overview.radius}</h1>
            </Info>
            <Info>
                <p>AVERAGE TEMP </p>
                <h1>{PLANETS[planet].overview.averagetemp}</h1>
            </Info>
        </div>

    </div>
    )
   
}
export default Main