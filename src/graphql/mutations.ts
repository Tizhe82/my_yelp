/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation createRestaurant(
    $input: createRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateTodoInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
