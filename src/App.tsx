import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "./utils/api";
import { UserData } from "./utils/types";

function App() {
  // You used array destructuring, return type is an object
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<UserData[]>({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

export default App;
