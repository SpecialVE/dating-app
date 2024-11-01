import ProfileCard from "./components/ProfileCard";
import { useUserData } from "./hooks/useUserData";

function App() {
  const { data, isLoading, error, refetch } = useUserData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p> Something went wrong!</p>;

  console.log("Data:", data);

  if (!data || !data.results || data.results.length === 0) {
    return <p>No user data found</p>;
  }

  const user = data.results[0];
  const name = `${user.name.first} ${user.name.last}`;
  const age = user.dob.age;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <ProfileCard
        picture={user.picture.large}
        name={name}
        gender={user.gender}
        email={user.email}
        age={age}
      />
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={() => refetch()}>
          Next Profile
        </button>
      </div>
    </div>
  );
}

export default App;
