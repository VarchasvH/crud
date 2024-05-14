import axios from "axios"; // Import Axios for making HTTP requests
import { useEffect, useState } from "react"; // Import React hooks
import editButton from "../../public/edit-3.svg"; // Import SVG icon for edit button
import deleteButton from "../../public/delete.svg"; // Import SVG icon for delete button
import { Link } from "react-router-dom"; // Import Link component for navigation

const Home = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Effect hook to fetch data when component mounts
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(res.data); // Set fetched data to state
        setLoading(false); // Update loading state once data is fetched
      } catch (err) {
        console.log(err);
        setLoading(false); // Update loading state in case of error
        alert("Failed to fetch data"); // Notify user if fetching data fails
      }
    };

    fetchData(); // Call fetchData function
  }, []);

  const handleDelete = (id) => {
    // Function to handle delete operation
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        // If delete request is successful
        console.log(res); // Log response data

        // Update UI by removing the deleted user from data state
        setData((prevData) => prevData.filter((user) => user.id !== id));
        alert("User was deleted successfully"); // Notify user about successful deletion
      })
      .catch((error) => {
        // If delete request fails
        console.log(error);
        alert("Failed to delete user"); // Notify user about deletion failure
      });
  };

  return (
    <div>
      {loading ? ( // Render loading spinner if data is being fetched
        <svg
          className='animate-spin h-16 w-16'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      ) : (
        <div className='container text-white'>
          <h2 className='text-4xl p-4'>CRUD App using JsonPlaceHolder API</h2>
          <div className='flex justify-start items-center my-3'>
            <Link to='/register' className='text-white'>
              <button className='bg-green-600 align content-start'>
                Create + {/* Button to navigate to registration form */}
              </button>
            </Link>
          </div>
          <table className='table'>
            <thead className='border'>
              <tr>
                <th className='border text-xl'>Username</th>
                <th className='border text-xl'>Email</th>
                <th className='border text-xl'>Phone</th>
                <th className='border text-xl'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i} className='border'>
                  <td>{d.username}</td> {/* Display username */}
                  <td>{d.email}</td> {/* Display email */}
                  <td>{d.phone}</td> {/* Display phone number */}
                  <td className='flex gap-1 px-2'>
                    <Link to={`$/update/${d.id}`}>
                      <button className='bg-green-700 '>
                        <img src={editButton} alt='' width={15} />{" "}
                        {/* Edit button */}
                      </button>
                    </Link>
                    <button
                      className='bg-red-700 '
                      onClick={() => handleDelete(d.id)}
                    >
                      <img src={deleteButton} alt='' width={15} />{" "}
                      {/* Delete button */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
