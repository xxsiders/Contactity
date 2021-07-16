/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Contacts: undefined;
  NotFound: undefined;
};

export type AuthValues = {
  username: string
  password: string
}

export type Contact = {
  id: string
  name: string
  phone: string
  image: string
}
