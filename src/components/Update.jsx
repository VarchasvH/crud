import axios from "axios"; // Import Axios for making HTTP requests
import { useEffect, useState } from "react"; // Import React hooks for managing state and side effects
import { Link, useParams } from "react-router-dom"; // Import Link and useParams for routing

/**
 * Update component fetches user data based on ID from an API,
 * allows the user to update their details, and submits changes to the API.
 */
const Update = () => {
  const { id } = useParams(); // Get the ID parameter from the URL

  const [user, setUser] = useState({}); // State to hold user data

  useEffect(() => {
    // Fetch user data when component mounts or when ID changes
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data); // Set user data in state upon successful fetch
      } catch (err) {
        console.log(err); // Log error if fetching data fails
        alert("Failed to fetch user data"); // Alert user about fetch failure
      }
    };

    fetchUserData(); // Call fetchUserData function
  }, [id]); // Dependency array ensures effect runs when ID changes

  const handleChange = (e) => {
    // Update user state based on input changes
    const { name, value } = e.target;
    // Split the name into parts to handle nested properties
    const nameParts = name.split(".");

    if (nameParts.length === 1) {
      // If it's a top-level property update
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      // If it's a nested property update
      const [parent, child] = nameParts;
      setUser((prevUser) => ({
        ...prevUser,
        [parent]: {
          ...prevUser[parent],
          [child]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send PUT request to update user data
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        user
      );
      alert("User updated successfully"); // Alert user about successful update
      console.log(res); // Log response data to console
    } catch (err) {
      console.log(err); // Log error if update fails
      alert("Failed to update user"); // Alert user about update failure
    }
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center text-black rounded-lg'>
      <div className='container max-w-screen-lg mx-auto'>
        <h2 className='font-semibold text-xl text-gray-600'>User Details</h2>
        <p className='text-gray-500 mb-6'>
          Change the details you want to update
        </p>
        <form onSubmit={handleSubmit}>
          <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
              <div className='text-gray-600'>
                {/* Placeholder for section details */}
                <p className='font-medium text-lg'></p>
                <p></p>
              </div>
              <div className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                  {/* Input fields for updating user details */}
                  <div className='md:col-span-5 text-left'>
                    <label htmlFor='name'>Full Name</label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='John Smith'
                      value={user.name || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='md:col-span-5 text-left'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='email@domain.com'
                      value={user.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='md:col-span-3 text-left'>
                    <label htmlFor='address.street'>Address / Street</label>
                    <input
                      type='text'
                      name='address.street'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='Krusty Krab'
                      value={user.address?.street || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='md:col-span-2 text-left'>
                    <label htmlFor='address.city'>City</label>
                    <input
                      type='text'
                      name='address.city'
                      id='city'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='Bottom'
                      value={user.address?.city || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='md:col-span-1 text-left'>
                    <label htmlFor='address.zipcode'>Zipcode</label>
                    <input
                      type='text'
                      name='address.zipcode'
                      id='zipcode'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='zipcode'
                      value={user.address?.zipcode || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Submit button to update user details */}
            <div className='flex items-center justify-center sm:mt-5 sm:gap-5'>
              <button
                type='submit'
                className='px-3 md:px-4 py-1 md:py-2 rounded-lg text-white bg-green-600'
                onSubmit={handleSubmit}
              >
                Update
              </button>
              {/* Link to navigate back to home page */}
              <Link to='/'>
                <button
                  type='submit'
                  className='px-3 md:px-4 py-1 md:py-2 rounded-lg text-white'
                >
                  Home
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
