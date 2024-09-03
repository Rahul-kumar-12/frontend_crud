import React, { useState, useEffect } from 'react';
import './update.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateUser = () => {
    const initialUser = {

        name: "",
        email: "",
        age: "",
        address: "",
    };

    const { id } = useParams();
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/${id}`);
                setUser(response.data.userExist);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/update/${id}`, user);
            toast.success(response.data.message, { position: 'top-right' });
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error('Failed to update user', { position: 'top-right' });
        }
    };

    return (
        <div className="addUser">
            <Link to='/' type="button" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back
            </Link>
            <h3>Update User</h3>
            <form className='addUserForm' onSubmit={handleSubmit}>
                <div className='inputGroup'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={user?.name}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'

                        value={user?.email}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter email'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='age'>Age</label>
                    <input
                        type='number'
                        id='age'
                        name='age'
                        value={user?.age}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter age'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        value={user?.address}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter address'
                    />
                </div>
                <div className='inputGroup'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;


































