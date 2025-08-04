import { SidebarContainer, SidebarList, SidebarListItem, StyledLink } from "./Sidebar.styles";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarListItem>
          <StyledLink to="/event/5b573873a61360071c1f1272/attendees">Attendees</StyledLink>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  );
}

export default Sidebar;
