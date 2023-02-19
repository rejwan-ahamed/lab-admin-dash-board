import React from 'react';
import { Link } from 'react-router-dom';

const notValid = () => {
    return (
        <div className='flex w-full h-screen justify-center items-center flex-col'>
            <img className='w-[20rem]' src="/images/user.svg" alt="" srcset="" />
            <h1 className='text-8xl font-general font-[500] text-gray-300'>Oops!</h1>
            <p className='font-general text-lg mt-4 font-[500] text-orange-500'>Something wrong. Don't worry we will fixed that soon.</p>
            <Link to={'/student_login'} className='font-general text-lg mt-2 underline font-[500] text-orange-500'>Back to home</Link>
        </div>
    );
};

export default notValid;