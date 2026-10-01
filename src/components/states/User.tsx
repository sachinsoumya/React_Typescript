import { useState } from "react";

type User = {
  name: string;
  age: number;

  phone: number;
};

type Address = {
  street: string;
  flatName: string;
  district: string;
  pinCode: number;
};

export const User = () => {
  const [user, setUser] = useState<User | null>(null);

  const [address, setAddress] = useState<Address> ({} as Address);

  return (
    <div>
      <h1>Logged in User</h1>

      {/* <input type="text" placeholder="Enter Name"  onChange={(e)=>setUser(e.target.value)}></input> */}
      <button
        onClick={() =>
          setUser({
            name: "john doe",
            age: 67,

            phone: 1234567890,
          })
        }
      >
        Add user
      </button>

      <button
        onClick={() =>
          setAddress({
            street: "street1",
            flatName: "flat1",
            district: "BBSR",
            pinCode: 123456,
          })
        }
      >
        Add address
      </button>

      <div>Logged User is {user ? user?.name : "None"}</div>
      <div>
        Address is {address.street}, {address.flatName}, {address.district},{" "}
        {address.pinCode}
      </div>
    </div>
  );
};
