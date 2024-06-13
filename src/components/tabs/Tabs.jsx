import { v4 } from "uuid"
import { StyledTabs, TabContainer } from "./tabs.styles";
import { StyledHr } from "../navMenu/navmenu.styles";

const tabs = ['OVERVIEW', 'STRUCTURE', 'SURFACE']


const Tabs =({activeTab, setActiveTab, $color})=>{
 

    return<>
    <TabContainer>

        {tabs.map((tab, index)=>(
        <StyledTabs $color={$color} key={v4()} onClick={()=> TabClick(setActiveTab, index)} $isActive={activeTab === index}>{tab}</StyledTabs>
        
    ))}

    </TabContainer>
    <StyledHr></StyledHr>
    
    </>
}
const TabClick = (setActiveTab, index)=>{
    setActiveTab(index);
}
export default Tabs