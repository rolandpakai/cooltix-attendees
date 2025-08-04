import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import MainHeader from './MainHeader/MainHeader';
import { StyledLayout, Body, Main, SidebarContainer } from './Layout.styles';

export default function Layout() {
  return (
    <StyledLayout>
      <Body>
        <SidebarContainer>
          <SidebarHeader />
          <Sidebar />
        </SidebarContainer>
        <Main>
          <MainHeader />
          <Outlet />
        </Main>
      </Body>
    </StyledLayout>
  );
};
