import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <form className='font-bold bg-fuchsia-500 hover:col-start-auto'>
                <input type='text ' placeholder='Name' />
                <br />
                <input type='email ' placeholder='Email' />
                <br />
                <input type='name ' placeholder='Name' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm