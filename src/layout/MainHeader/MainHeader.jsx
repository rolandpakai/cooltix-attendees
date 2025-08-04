import Button from '../../components/Button/Button';
import logoSrc from '../../assets/Logo.svg';
import { StyledMainHeader, ProfileIcon, HeaderButton, HeaderLogo, Logo } from './MainHeader.styles';

export default function MainHeader() {
    return (
        <StyledMainHeader>
            <HeaderLogo>
                <Logo src={logoSrc} alt="Cooltix" />
            </HeaderLogo>
            <HeaderButton>
                <Button color="secondary" size="medium" variant="text" >Segítség</Button>
            </HeaderButton>
            <ProfileIcon>PR</ProfileIcon>
        </StyledMainHeader>
    )
}