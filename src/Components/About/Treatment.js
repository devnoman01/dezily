import React from 'react';

const Treatment = ({ treatment }) => {
    const { name, description } = treatment;
    return (
        <div className='grid grid-cols-3 '>
            <div className='col-span-1'>
                icon here
            </div>
            <div className='col-span-2'>
                <h4 className='font-saira text-xl leading-8 font-semibold text-[#2A334E]'>{name}</h4>
                <p className='font-sans text-[#8d8d8d]'>{description}</p>
            </div>
        </div>
    );
};

export default Treatment;