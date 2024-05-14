import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (username === "" || email === "") {
          alert("Please fill all the details");
        } else {
          alert(`Data for ${username} was created.`);
          console.log(response.data);
          setUsername(""); // Reset username state
          setEmail(""); // Reset email state
          setPassword(""); // Reset password state
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className='h-screen flex justify-center items-center w-full text-black'>
      <form onSubmit={handleSubmit}>
        <div className='bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm'>
          <div className='space-y-4'>
            <h1 className='text-center text-2xl font-semibold text-gray-600'>
              Register a new User
            </h1>
            <div>
              <label
                htmlFor='name'
                className='block mb-1 text-gray-600 font-semibold text-left'
              >
                Username
              </label>
              <input
                type='text'
                className='bg-indigo-50 px-4 py-2 outline-none rounded-md w-full'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className=' block mb-1 text-gray-600 font-semibold text-left'
              >
                Email
              </label>
              <input
                type='text'
                className='bg-indigo-50 px-4 py-2 outline-none rounded-md w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            type='submit'
            className='mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
