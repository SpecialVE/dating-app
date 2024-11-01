interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
}

const ProfileCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-600">Gender: {user.gender}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Age: {user.dob.age}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
