import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  gender: string;
  email: string;
  dob: {
    age: number;
  };
}

interface UserData {
  results: User[];
}

const fetchUserData = async (): Promise<UserData> => {
  const response = await axios.get("https://randomuser.me/api/");
  return response.data;
};

export const useUserData = () => {
  return useQuery<UserData, Error>("userData", fetchUserData);
};
