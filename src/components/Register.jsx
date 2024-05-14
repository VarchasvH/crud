import axios from "axios"; // Import Axios for making HTTP requests
import { useState } from "react"; // Import useState hook from React

const Register = () => {
  const [username, setUsername] = useState(""); // State for username input
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send POST request to create a new user
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle successful response from API
        if (username === "" || email === "") {
          // If username or email is empty, display alert to fill all details
          alert("Please fill all the details");
        } else {
          // Display success alert with username
          alert(`Data for ${username} was created.`);
          console.log(response.data); // Log response data to console
          setUsername(""); // Reset username state after form submission
          setEmail(""); // Reset email state after form submission
          setPassword(""); // Reset password state after form submission
        }
      })
      .catch((error) => {
        // Handle errors if POST request fails
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
                onChange={(e) => setUsername(e.target.value)} // Update username state on input change
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-1 text-gray-600 font-semibold text-left'
              >
                Email
              </label>
              <input
                type='text'
                className='bg-indigo-50 px-4 py-2 outline-none rounded-md w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
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
