import React from "react";
import { SidebarContainer, Icon, CloseIcon , SideBtnWrap,SidebarRoute, SidebarWrapper, SidebarMenu, SidebarLink} from "./sidebarelements";
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick= {toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to= "home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to= "timeline" onClick={toggle}>
                        Timeline
                    </SidebarLink>
                    <SidebarLink to= "sponsors" onClick={toggle}>
                        Sponsors
                    </SidebarLink>
                    <SidebarLink to= "contact" onClick={toggle}>
                        Contact US
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to= "/signin">
                        Sign IN
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;