import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCircle, faHistory } from '@fortawesome/free-solid-svg-icons';
import { 
ResultRow,
  ResultDataContainer,
  ResultData,
  StatusIconContainer,
  StyledData,
  ellipsisIconStyle
} from '../../components/ResultList/ResultList.styles';
import Checkbox from '../../components/Checkbox/Checkbox';
import StatusIcon from '../../components/StatusIcon/StatusIcon';
import { getTime } from '../../utils';
import { primaryColor, invalidColor } from '../../styles/globals';

export default function AttendeesResultRow({ item, ids, resultHeader, handleCheckboxChange, handleEllipsisButtonClick }) {
  return (
    <ResultRow 
      key={item.node.id}
      selected={ids.includes(item.node.id)}
    >
      <ResultDataContainer>
        <ResultData width={"120px"}>
          <Checkbox
            name={`checkbox-${item.node.id}`}
            label={getTime(item.node.createdAt)}
            checked={ids.includes(item.node.id)}
            onChange={e => handleCheckboxChange(item.node.id, e.target.checked)}
          />
        </ResultData>
        <ResultData
          width={resultHeader[0].width ? resultHeader[0].width : "auto"}
        >
          <>
            <StyledData>{`${item.node.order.customer.firstName} ${item.node.order.customer.lastName}`}</StyledData>
            <StatusIconContainer>
              {item.node.isRefunded && (
                <StatusIcon label={"refunded"} icon={faHistory} size={"xs"} style={{ color: primaryColor }} />
              )}
              {!item.node.isValid && (
                <StatusIcon label={"invalid"} icon={faCircle} size={"xs"} style={{ color: invalidColor }} />
              )}
            </StatusIconContainer>
          </>
        </ResultData>
        <ResultData
          width={resultHeader[1].width ? resultHeader[1].width : 'auto'}
        >
          <StyledData>{"Early Bird Online Exklúzív csak VIP tagoknak"}</StyledData>
        </ResultData>
        <ResultData
          fontSize={"21px"}
          fontWeight={700}
          width={resultHeader[2].width ? resultHeader[2].width : 'auto'}
        >
          {item.node.price.total.formatted}
        </ResultData>
      </ResultDataContainer>
      <FontAwesomeIcon
        size={"lg"}
        icon={faEllipsisV}
        style={ellipsisIconStyle}
        onClick={handleEllipsisButtonClick}
      />
    </ResultRow>
  );
}