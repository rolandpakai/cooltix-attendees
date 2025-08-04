import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PageHeader from '../../components/PageHeader/PageHeader';
import { AttendeesPageContainer } from './Attendees.styles';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import DateRange from '../../components/DateRange/DateRange'; 
import ResultList from '../../components/ResultList/ResultList';
import AttendeesResultRow from './AttendeesResultRow';
import { useForm } from '../../hooks/useForm';
import { buildSearchQuery, validateDateInterval, getDate } from '../../utils';
import { GET_EVENT_ATTENDEES_CONNECTION } from '../../api/graphql/queries/event';
import mockResult from '../../mocks/event.attendeesConnection.json';

/* Handling form state for the Attendees page
  A. Lift state
  B. Use custom hook for form management
  D. Use Context API for global state management if needed
  C. Use a state management library like Redux/Redux Toolkit or Zustand for complex state
  D. Use a form library like Formik or React Hook Form for complex forms with validation Yup or Zod for schema validation
*/

const resultHeader = [
  { name: "Attendee name", width: "25%" }, 
  { name: "Ticket type", width: "55%" }, 
  { name: "Product price" } 
];

export default function Attendees() {
  const { eventId } = useParams();
  const queryVariables = {
    eventId,  
    orderBy: "createdAt_DESC",
    first: 5, 
    searchQuery: JSON.stringify({}),
  }
  
  const { form, updateField } = useForm({ keyword: '', from: '', until: '' });
  const [ errorForm, setErrorForm ] = useState('');
  
  const [result, setResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState(JSON.stringify({}));
  const { loading, error, data, refetch, fetchMore } = useQuery(GET_EVENT_ATTENDEES_CONNECTION, {
    variables: { ...queryVariables, searchQuery,},
  });
  const hasNextPage = data?.event?.attendeesConnection?.pageInfo?.hasNextPage;
  const totalCount = data?.event?.attendeesConnection?.totalCount || 0;

  useEffect(() => {
    if (data?.event?.attendeesConnection?.edges) {
      setResult(data.event.attendeesConnection.edges);
    }
    
    // Testing width mock data
    setResult(mockResult.data.event?.attendeesConnection?.edges)
  }, [data]);
  
  const handleSearchButtonOnClick = () => {
    const dateError  = validateDateInterval(form.from, form.until);
    
    if (dateError ) {
      setErrorForm(dateError);
      return;
    } 
    
    setErrorForm('');

    const searchQuery = buildSearchQuery(form);
    setSearchQuery(JSON.stringify(searchQuery));

    refetch({
      ...queryVariables,
      searchQuery: JSON.stringify(searchQuery),
    });
  }

   const handleLoadMore = () => {
    const endCursor = data.event.attendeesConnection.pageInfo.endCursor;
    
    fetchMore({
      variables: {
        ...queryVariables,
        searchQuery,
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          event: {
            ...prev.event,
            attendeesConnection: {
              ...fetchMoreResult.event.attendeesConnection,
              edges: [
                ...prev.event.attendeesConnection.edges,
                ...fetchMoreResult.event.attendeesConnection.edges,
              ],
            },
          },
        };
      },
    });
  };

  return (
    <AttendeesPageContainer>
      <PageHeader title={"Attendees"} showExportButton={true}/>
      
      <SearchContainer
        form={form}
        fieldName={"keyword"}
        placeholder={"Search attendees"}
        buttonLabel={"Search"}
        loading={loading}
        error={errorForm || error?.message}
        updateField={updateField} 
        onSearch={handleSearchButtonOnClick}
        additionalFields={[
          <DateRange 
            from={{ name: "from", value: form.from, label: "Attendees from", placeholder: "Choose a date" }}
            until={{ name: "until", value: form.until, label: "Attendees until", placeholder: "Choose a date" }}
            loading={loading}
            onChange={updateField}
          />
        ]}
      />

      <ResultList 
        result={result}
        resultHeader={resultHeader}
        loading={loading}
        hasNextPage={hasNextPage}
        totalCountText={`All: ${totalCount} attendees`}
        groupBy={(item) => getDate(item.node.createdAt, {year: 'numeric', month: 'long', day: 'numeric'})}
        onLoadMore={handleLoadMore}
        ResultRow={AttendeesResultRow}
      />
    </AttendeesPageContainer>
  );
}
