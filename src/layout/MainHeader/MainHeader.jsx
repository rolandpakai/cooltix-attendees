import Button from '../../components/Button/Button';
import { StyledMainHeader, ProfileIcon } from './MainHeader.styles';

export default function MainHeader() {
    return (
        <StyledMainHeader>
            <Button color="secondary" size="medium" variant="text" >Segítség</Button>
            <ProfileIcon>PR</ProfileIcon>
        </StyledMainHeader>
    )
}