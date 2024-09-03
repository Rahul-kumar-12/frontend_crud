import React, { useState } from 'react'
import './adduser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddUser = () => {
    const users = {
        name: "",
        email: "",
        age: "",
        address: "",

    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/create', user)
            // console.log(fatchData)
            .then((response) => {
                // console.log('user created successfully')
                toast.success(response.data.message, { position: 'top-right' })
                navigate('/')
            }).catch((error) => console.log(error))
    }

    return (
        <div className="addUser">
            <Link to='/' type="button" class="btn btn-secondary">
                <i class="fa-solid fa-backward"></i> Back</Link>
            <h3>Add New User</h3>
            <form action='' className='addUserForm' onSubmit={handleSubmit}>
                <div className='inputGroup'>

                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={handleInput}
                        autoComplete='off'
                        placeholder='enter name '>
                    </input>
                </div>


                <div className='inputGroup'>

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'

                        onChange={handleInput}
                        autoComplete='off'
                        placeholder='enter email name '>
                    </input>
                </div>


                <div className='inputGroup'>

                    <label htmlFor='age'>Age</label>
                    <input
                        type='number'
                        id='age'
                        name='age'

                        onChange={handleInput}
                        autoComplete='off'
                        placeholder='enter your age  '>
                    </input>
                </div>


                <div className='inputGroup'>

                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        id='address'
                        name='address'

                        onChange={handleInput}
                        autoComplete='off'
                        placeholder='enter address name '>
                    </input>
                </div>

                <div className='inputGroup'>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )
}
export default AddUser