import { useQuery, gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query FAQ {
    sys_faq {
      id
      question
      answer
      status
    }
  }
`;

export const ADD_NEW_QUESTION = gql`
  mutation addFAQ($answer: String!, $question: String!) {
    insert_sys_faq(objects: { answer: $answer, question: $question }) {
      affected_rows
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation updateFAQ($id: uuid!, $answer: String!, $question: String!) {
    update_sys_faq(
      _set: { answer: $answer, question: $question }
      where: { id: { _eq: $id } }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteFAQ($id: uuid!) {
    delete_sys_faq(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const UPDATE_STATUS = gql`
  mutation changeFaqStatus($status: Boolean!, $id: uuid!) {
    update_sys_faq(_set: { status: $status }, where: { id: { _eq: $id } }) {
      returning {
        id
        status
      }
    }
  }
`;
