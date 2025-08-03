import { HeaderContainer, Title } from './PageHeader.styles';
import Button from '../Button/Button';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function PageHeader({ title, showExportButton = false }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {showExportButton && 
        <Button 
          color="primary" 
          size="medium" 
          variant="outlined" 
          icon={faDownload}
          onClick={() => console.log('Exporting attendees...')}
        >
        Export attendees
      </Button>
    }
    </HeaderContainer>
  )
}
