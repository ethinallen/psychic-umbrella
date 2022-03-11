/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const GetUser = /* GraphQL */ `
query getUser {
  getProfile(id: "0") {
    addrs
  }
}
`;

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      addrs
    }
  }
`;

export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: TableProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        addrs
      }
      nextToken
    }
  }
`;

export default GetUser;
