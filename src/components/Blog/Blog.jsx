import PropTypes from 'prop-types'; 
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='mb-10'>
            <img className='w-full mb-6 rounded-lg' src={cover} alt={`Cover pictures of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex space-y-4'>
                    <img className='w-14' src={author_img} alt='' />
                    <div className='ml-6'>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-gray-600'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-gray-600'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)} 
                    className='ml-2'>
                        <IoBookmarksOutline />
                    </button>
                </div>
            </div>
            <h2 className='text-3xl font-bold mb-4'>{title}</h2>
            <p className='text-gray-600'>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='ml-2'><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} 
            className='mt-4 text-purple-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;