import axios from 'axios';
import { UserData } from './types';

export const fetchUserData = async (): Promise<UserData[]> => {
  // Incorrect url: added https protocol
  const { data } = await axios.get('https://randomuser.me/api?results=10');
  return data.results;
};
