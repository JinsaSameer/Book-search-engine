import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;
      
export const SAVE_BOOK = gql`
mutation saveBook($thoughtText: String!)
mutation saveBook($newBook:String!) {
    saveBook(newBook: $newBook) {
        _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        mutation removeBook($bookId: ID!) {
            removeBook(bookId: $bookId) {
                savedBooks {
                    bookId
                    authors
                    description
                    title
                    image
                    link
                  }
                }
              }
            `;
