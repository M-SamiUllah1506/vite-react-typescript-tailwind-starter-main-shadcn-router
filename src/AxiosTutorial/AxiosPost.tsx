import axios from 'axios';
import React, { useState } from 'react';

interface User {
    fname: string;
    lastname: string;
    event: string;
}

const AxiosPost: React.FC = () => {
    const [inputData, setInputData] = useState<User>({
        fname: '',
        lastname: '',
        event: ''
    });

    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const submithandle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    return (
        <form onSubmit={submithandle}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="fname"
                    value={inputData.fname}
                    onChange={handleData}
                />
            </div>

            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastname"
                    value={inputData.lastname}
                    onChange={handleData}
                />
            </div>

            <div>
                <label>Event:</label>
                <input
                    type="text"
                    name="event"
                    value={inputData.event}
                    onChange={handleData}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AxiosPost;
