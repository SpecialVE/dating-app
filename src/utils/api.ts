import axios from "axios";
import { UserData } from "./types";

export const fetchUserData = async (): Promise<UserData[]> => {
  const { data } = await axios.get("randomuser.me/api/.com/?results=10");
  return data.results;
};
