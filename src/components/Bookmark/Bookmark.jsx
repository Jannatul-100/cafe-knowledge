import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-4 mx-6 my-4 rounded-lg'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;