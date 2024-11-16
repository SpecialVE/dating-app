import { UserData } from "../utils/types";


interface ProfileCardProps {
  user: UserData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-center w-80 mx-auto">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="rounded-full w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{`${user.name.first} ${user.name.last}`}</h2>
      <p className="text-gray-600">Gender: {user.gender}</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Age: {user.dob.age}</p>
    </div>
  );
};

export default ProfileCard;
