import { createContext } from 'react';

export const initialUserContext = {
  isAuthenticated: false,
  token: '',
}

const UserContext = createContext(initialUserContext);

export default UserContext;