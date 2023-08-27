import { gql } from '@apollo/client';




export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
     colorGameHighScore
     animalGameHighScore
     spellingGameHighScore
    }
  }
`;

export const QUERY_ALL_USERS = gql`

query Me {
  getAllUsers {
    username
    spellingGameHighScore
    colorGameHighScore
    animalGameHighScore
    _id
  }
}
`;