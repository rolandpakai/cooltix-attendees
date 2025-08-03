
import logoSrc from '../../assets/Logo.svg';
import { Logo, StyledSidebarHeader } from './SidebarHeader.styles';

export default function SidebarHeader() {
    return (
        <StyledSidebarHeader>
            <Logo src={logoSrc} alt="Cooltix" />
        </StyledSidebarHeader>
    )
}