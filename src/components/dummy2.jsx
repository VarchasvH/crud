import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * Fetches user data from an API based on the provided ID and updates the user state.
 * Handles changes to the user data based on the input event.
 * Submits updated user data to the API for persistence.
 *
 * @param {void}
 * @return {void}
 */
const Update = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
        alert("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Split the name into parts to handle nested properties
    const nameParts = name.split(".");

    if (nameParts.length === 1) {
      // If it's a top-level property
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      // If it's a nested property
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
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        user
      );
      alert("User updated successfully");
      console.log(res);
    } catch (err) {
      console.log(err);
      alert("Failed to update user");
    }
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center text-black rounded-lg'>
      <div className='container max-w-screen-lg mx-auto'>
        <h2 className='font-semibold text-xl text-gray-600'>User Details</h2>
        <p className='text-gray-500 mb-6'>
          Change the details, you want to update
        </p>
        <form onSubmit={handleSubmit}>
          <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
              <div className='text-gray-600'>
                <p className='font-medium text-lg'></p>
                <p></p>
              </div>
              <div className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
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
            <div className='flex items-center justify-center sm:mt-5 sm:gap-5'>
              <button
                type='submit'
                className='px-3 md:px-4 py-1 md:py-2 rounded-lg text-white bg-green-600'
                onSubmit={handleSubmit}
              >
                Update
              </button>
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
