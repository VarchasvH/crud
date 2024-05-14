import { useEffect, useState } from "react";
import axios from "axios";

const Edit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users?id=1"
        );
        const userData = res.data[0];
        setFormData({
          name: userData.name,
          email: userData.email,
          address: {
            street: userData.address.street,
            city: userData.address.city,
            zipcode: userData.address.zipcode,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on mount

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center text-black rounded-lg'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <h2 className='font-semibold text-xl text-gray-600'>
            Responsive Form
          </h2>
          <p className='text-gray-500 mb-6'>
            Form is mobile responsive. Give it a try.
          </p>

          <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
              <div className='text-gray-600'>
                <p className='font-medium text-lg'>Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                  <div className='md:col-span-5'>
                    <label htmlFor='name'>Full Name</label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='John Smith'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...values, name: e.target.value })
                      }
                    />
                  </div>

                  <div className='md:col-span-5'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='email@domain.com'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className='md:col-span-3'>
                    <label htmlFor='address.street'>Address / Street</label>
                    <input
                      type='text'
                      name='address.street'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='Krusty Krab'
                      value={formData.address.street}
                      onChange={(e) =>
                        setFormData({ ...values, name: e.target.value })
                      }
                    />
                  </div>

                  <div className='md:col-span-2'>
                    <label htmlFor='address.city'>City</label>
                    <input
                      type='text'
                      name='address.city'
                      id='city'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='Bottom'
                      value={formData.address.city}
                    />
                  </div>

                  <div className='md:col-span-1'>
                    <label htmlFor='address.zipcode'>Zipcode</label>
                    <input
                      type='text'
                      name='address.zipcode'
                      id='zipcode'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      placeholder='zipcode'
                      value={formData.address.zipcode}
                      onChange={(e) =>
                        setFormData({ ...values, name: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
