import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ProfileCard from "./ProfileCard";
import React from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
  email: string;
  gender: string;
}

const fetchRandomUser = async (): Promise<User> => {
  const { data } = await axios.get("https://randomuser.me/api/");
  return data.results[0];
};

const ProfilePage = () => {
  const queryClient = useQueryClient();
  const [fetchKey, setFetchKey] = useState(0);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery(["randomUser", fetchKey], fetchRandomUser);

  const handleNextProfile =() => {
    setFetchKey((prev) => prev + 1);
    queryClient.invalidateQueries([randomUser]);
  }

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error loading user data</div>;

  return (
    <div>
        {user && (
            
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h2 className="text-lg font-bold">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600">Age: {user.dob.age}</p>
          <button
            onClick={handleNextProfile}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Next Profile
          </button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
