import { Outlet } from 'react-router-dom';
import Sidebar from './layout/Sidebar/Sidebar';
import SidebarHeader from './layout/SidebarHeader/SidebarHeader';
import MainHeader from './layout/MainHeader/MainHeader';
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
