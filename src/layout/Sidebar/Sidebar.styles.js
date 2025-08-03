

import styled from 'styled-components';
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor } from "../../styles/globals";

export const SidebarContainer = styled.div`
  background-color: #fff;
  padding-top: 2rem;
`;

export const Logo = styled.img`
  padding: 16px 8px 16px 24px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${secondaryColor};
`;

export const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 36px;
  cursor: pointer;
  font-weight: 600;
  height: 50px;
  transition: background 0.2s;

  &:hover {
    background-color: #E3E3EF5E;
  }

  &:hover ${StyledLink} {
    color: ${primaryColor};
  }
`;
