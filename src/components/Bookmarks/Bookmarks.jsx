import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 my-6 bg-gray-200 ml-6 rounded-lg'>
            <div className='mt-6 bg-[#6047EC]/10 border-2 border-purple-700  p-4 m-6 rounded-lg'>
                <h3 className='text-2xl text-center text-purple-700 font-bold'>Spent Time on Read: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;