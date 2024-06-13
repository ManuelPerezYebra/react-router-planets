import { Route, Routes } from "react-router-dom"

import Main from "../main/Main"

const Router =()=>{
    return(
        <Routes>
            <Route path="/" element={<Main planet='mercury' $color='#419EBB'/>}/>
            <Route path="/venus" element={<Main planet='venus' $color='#EDA249'/>}/>
            <Route path="/earth" element={<Main planet='earth' $color='#6D2ED5'/>}/>
            <Route path="/mars" element={<Main planet='mars' $color='#D14C32'/>}/>
            <Route path="/jupiter" element={<Main planet='jupiter' $color='#D14C32'/>}/>
            <Route path="/saturn" element={<Main planet='saturn' $color='#CD5120'/>}/>
            <Route path="/uranus" element={<Main planet='uranus' $color='#1EC1A2'/>}/>
            <Route path="/neptune" element={<Main planet='neptune' $color='#2D68F0'/>}/>

        </Routes>
    )
    
}

export default Router