export interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    meduim: string;
    thumbnail: string;
  }
}
