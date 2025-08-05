import React from 'react'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='bg-red-600 font-bold f'> Page Not Found | 404</h1>
            <button className='bg-blue-600' onClick={() => navigate('Home')}>Go To Home Page</button>
        </div>
    )
}

export default Notfound