import { JSX, useEffect, useState } from "react";
type PropHello = { age: number; name?: string };
type User = {
  name: string;
  password: string;
};
const Hello = ({ name, age }: PropHello): JSX.Element => {
  // React.FC or JSX.Element

  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    setUser({ name: "tycoon", password: "sd" });
  }, []);
  return (
    <>
      {" "}
      Hello World {name}, and I am {age}{" "}
    </>
  );
};
export default Hello;
