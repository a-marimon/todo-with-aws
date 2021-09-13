/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      user_id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        title
        description
        completed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const myTodos = (user) => `query MyQuery {
  listTodos(filter: {user_id: {eq: "${user}"}}) {
    items {
      id
      title
      description
      completed
    }
  }
}`