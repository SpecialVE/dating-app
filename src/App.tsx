//
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "./utils/api";
import { UserData } from "./utils/types";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";

function App() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<UserData[]>({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error)
    return <p>Something went wrong: {error.message}</p>;
  if (!users) return null;

  const currentUser = users[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === users.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <ProfileCard user={currentUser} />
      <div className="mt-4 flex justify-between w-80">
        <button
          onClick={handlePrevious}
          className="bg-gray-300 px-4 py-2 rounded-md shadow-md"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 px-4 py-2 rounded-md shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
