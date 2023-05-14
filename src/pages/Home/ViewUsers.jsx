import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';

const ViewUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <>
            <div className='w-36 my-10'>
                <Link to={'/new_user'} className='text-lg font-bold text-purple-800 border-2 border-violet-100 p-2 shadow-lg rounded-lg bg-violet-100 hover:bg-violet-200 flex justify-center items-center gap-2'> <span>New User</span><FaUserAlt></FaUserAlt> </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gmail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(data => {
                                return <tr key={data._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data._id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.status}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-lime-600 dark:text-lime-500 hover:underline">Edit</a>
                                        <a href="#" onClick={() => handleDelete(data._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline ms-4">Delete</a>
                                    </td>
                                </tr>
                            })
                        }

                        {/* <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                Active
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-lime-600 dark:text-lime-500 hover:underline">Edit</a>
                                <a href="#"  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-4">Delete</a>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewUsers;