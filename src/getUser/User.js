import React, { useState, useEffect } from 'react'
import './user.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/get')
                setUsers(response.data)
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8000/api/delete/${userId}`)
            .then((response) => {
                setUsers((prevUser) => {
                       return prevUser.filter((user) => user._id !== userId)
                }
                )
                toast.success(response.data.message, { position: 'tope-right' })
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='uesrTable'>
            <Link to="/add" type="button" className="btn btn-primary">
                Add User <i className="fa-solid fa-user-plus"></i>
            </Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {users?.userData?.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>{elem.age}</td>
                                <td>{elem.address}</td>
                                <td className="actionButton">
                                    <Link to={`/update/${elem._id}`} type="button" className="btn btn-info">
                                        <i className="fa-regular fa-pen-to-square"></i>

                                    </Link>
                                    <button type="button" onClick={() => deleteUser(elem._id)} className="btn btn-danger">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )

                    }

                    )}


                </tbody>
            </table>
        </div>
    )
}
export default User