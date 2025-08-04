
import logoSrc from '../../assets/Logo.svg';
import { Logo, StyledSidebarHeader } from './SidebarHeader.styles';

export default function SidebarHeader() {
    return (
        <StyledSidebarHeader>
            <a href="https://cooltix.hu/" target="_blank" rel="noopener noreferrer">
                <Logo src={logoSrc} alt="Cooltix" />
            </a>
        </StyledSidebarHeader>
    )
}