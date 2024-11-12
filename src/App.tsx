import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "./utils/api";
import { userData } from "./utils/types";

function App() {
  const [data: user, isLoading, error] = useQuery<userData[]>({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return <></>;
};

export default App;
