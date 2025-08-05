import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contant = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='border-l-indigo-900 bg-red-700'>Constant</h1>
            <button className='bg-green-500' onClick={() => navigate('info')}>Contact Information</button>
            <br />
            <button className='bg-red-700 hover: bg-yellow-400' onClick={() => navigate('Form')}>Form Information</button>
        </div>
    )
}

export default Contant