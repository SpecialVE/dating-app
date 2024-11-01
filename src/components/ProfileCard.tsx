interface ProfileCardProps {
  picture: string;
  name: string;
  gender: string;
  email: string;
  age: number;
}

function ProfileCard({ picture, name, gender, email, age }: ProfileCardProps) {
  return (
    <div className="bg-white shadow-md rounded p-4 max-w-xs mx-auto">
      <img className="rounded-full mx-auto mb-4" src={picture} alt={name} />
      <div className="text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">Gender: {gender}</p>
        <p className="text-gray-600">Email {email}</p>
        <p className="text-gray-600">Age: {age}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
