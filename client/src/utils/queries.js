import gql from 'graphql-tag';

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      title
      image
      username
      description
    }
  }
`;

export const QUERY_ITEM = gql`
  query item($id: ID!) {
    item(_id: $id) {
      _id
      title
      image
      description
      createdAt
      username
      
      
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      items {
        _id
        description
        createdAt
        commentCount
      }
    }
  }
`;

export const QUERY_ACCOUNT = gql`
  {
    account {
      _id
      username
      email
      items {
        _id
        title
        description
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentText
          username
        }
      }
    }
  }
`;

export const QUERY_ACCOUNT_BASIC = gql`
  {
    account {
      _id
      username
      email
      itemCount
      items {
        title
        description
      }
    }
  }
`;