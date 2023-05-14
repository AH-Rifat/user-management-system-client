import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const NewUser = () => {
    const handleAddUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const userData = { name, email, gender, status }
        console.log(userData);

        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    return alert('Successfully Inserted !')
                }
            })

        form.reset()
    }


    return (
        <>
            <div className='w-36 my-10'>
                <Link to={'/'} className='text-lg font-bold text-purple-800 border-2 border-violet-100 p-2 shadow-lg rounded-lg bg-violet-100 hover:bg-violet-200 flex justify-center items-center gap-2'> <FaArrowLeft></FaArrowLeft> <span>All Users</span></Link>
            </div>
            <div className='text-center'>
                <h1 className='text-5xl font-serif mb-3'>New User</h1>
                <p className='text-gray-500 font-serif'>Use the below form to create a new account</p>
            </div>


            <form onSubmit={handleAddUser} className='w-1/2 mx-auto'>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="name@flowbite.com" />
                </div>
                <div className="flex items-center mb-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white me-10">Gender</label>

                    <input type="radio" name="gender" value="Male" className="w-4 h-4 border-gray-300 checked:bg-lime-600 focus:ring-2 focus:ring-lime-300 focus:bg-lime-600 dark:focus:ring-lime-600 dark:focus:bg-lime-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Male
                    </label>

                    <input type="radio" name="gender" value="Female" className="w-4 h-4 border-gray-300 checked:bg-lime-600 focus:ring-2 focus:ring-lime-300 focus:bg-lime-600 dark:focus:ring-lime-600 dark:focus:bg-lime-600 dark:bg-gray-700 dark:border-gray-600 ms-7" />
                    <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Female
                    </label>
                </div>
                <div className="flex items-center mb-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white me-12">Status</label>

                    <input type="radio" name="status" value="Active" className="w-4 h-4 border-gray-300 checked:bg-lime-600 focus:ring-2 focus:ring-lime-300 focus:bg-lime-600 dark:focus:ring-lime-600 dark:focus:bg-lime-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Active
                    </label>

                    <input type="radio" name="status" value="Inactive" className="w-4 h-4 border-gray-300 checked:bg-lime-600 focus:ring-2 focus:ring-lime-300 focus:bg-lime-600 dark:focus:ring-lime-600 dark:focus:bg-lime-600 dark:bg-gray-700 dark:border-gray-600 ms-5" />
                    <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Inactive
                    </label>
                </div>
                <button type="submit" className=" text-white bg-lime-700 lime:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Submit</button>
            </form>

        </>
    );
};

export default NewUser;