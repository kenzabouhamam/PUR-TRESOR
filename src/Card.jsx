import { useState } from "react";

const Card = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const addUser = () => {
    setUser({
      username: name,
      email: email,
    });

    setName("");
    setEmail("");
  };

  console.log(user);

  const calc = (type) => {
    if (type === "increment") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    // <div className="mx-8 flex items-center gap-4">
    //   <button
    //     onClick={() => calc("increment")}
    //     className="cursor-pointer text-white bg-red-500 w-fit px-4 py-2 rounded shadow"
    //   >
    //     INC
    //   </button>
    //   <h1 className=" font-bold">{counter}</h1>
    //   <button
    //     onClick={() => calc("decrement")}
    //     className="cursor-pointer text-white bg-red-500 w-fit px-4 py-2 rounded shadow"
    //   >
    //     DEC
    //   </button>
    // </div>
    <div className="flex flex-col gap-3 w-1/3 ">
      <input
        type="text"
        className="w-full px-4 py-2 rounded shadow border border-gray-500 outline-none"
        placeholder="Username ....."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        className="w-full px-4 py-2 rounded shadow border border-gray-500 outline-none"
        placeholder="Email ....."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <button onClick={addUser}>Submit</button>
      <h1>{user?.username}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default Card;