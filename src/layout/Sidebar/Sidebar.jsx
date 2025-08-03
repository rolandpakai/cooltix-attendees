import { SidebarContainer, SidebarList, SidebarListItem, StyledLink } from "./Sidebar.styles";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarListItem>
          <StyledLink to="/attendees">Attendees</StyledLink>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  );
}

export default Sidebar;
