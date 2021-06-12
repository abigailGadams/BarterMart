import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($title: String!) {
    addItem(title: $title) {
      _id
      title
      image
      user
      description
      commentcount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentId: ID!, $commentText: String!) {
    addComment(commentId: $commentId, commentText: $commentText) {
      _id
      commentText
      username
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

