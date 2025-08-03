import { gql } from '@apollo/client';

export const GET_EVENT_ATTENDEES_CONNECTION = gql`
query Event($eventId: ID!, $first: Int, $orderBy: AttendeeSortingOrder, $searchQuery: String) {
  event(id: $eventId) {
    attendeesConnection(first: $first, orderBy: $orderBy, searchQuery: $searchQuery) {
      count
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          isRefunded
          isValid
          order {
            customer {
              firstName
              lastName
            }
            createdAt
          }
          price {
            total {
              currency
              formatted
              value
            }
          }
          createdAt
        }
      }
    }
  }
}
`;