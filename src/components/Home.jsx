import axios from "axios";
import { useEffect, useState } from "react";
import editButton from "../../public/edit-3.svg";
import deleteButton from "../../public/delete.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  });
  return (
    <div>
      {loading ? (
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
                Create +
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
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td className='flex gap-1 px-2'>
                    <Link to={`$/update/${d.id}`}>
                      <button className='bg-green-700 '>
                        <img src={editButton} alt='' width={15} />
                      </button>
                    </Link>
                    <button className='bg-red-700 '>
                      <img src={deleteButton} alt='' width={15} />
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
