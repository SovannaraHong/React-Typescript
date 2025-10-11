import React, { useState } from "react";

interface ListType {
  name: string;
  email: string;
}
const ListWithType = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<ListType[]>([]);

  function addList(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const ListData = { name, email };
    setData([...data, ListData]);
  }
  function handleRemove(Ind: number): void {
    const removeData = data.filter((_, index) => {
      index !== Ind;
    });
    setData(removeData);
  }
  return (
    <>
      <form
        onSubmit={addList}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 transition-transform duration-300 hover:scale-[1.02]"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Todo List
        </h1>

        <p className="text-center text-sm font-medium text-green-600 bg-green-100 py-2 rounded-lg animate-fadeIn"></p>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">User Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Name..."
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">User Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email..."
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-300"
        >
          Add Todo
        </button>
      </form>
      <div className="w-full max-w-md mt-8 space-y-4">
        {data.map((item, index) => (
          <>
            <p className="text-center text-gray-600 font-medium bg-white rounded-xl py-3 shadow">
              It’s empty — add a Todo 👇
            </p>

            <div className="bg-white shadow-md rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <h2 className="font-semibold text-blue-700 text-lg"></h2>
              <p className="text-gray-600">{item.email}</p>
              <button onClick={() => handleRemove(index)}>remove</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ListWithType;
