import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b border-gray-300 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-12 h-12' src={profile}></img>
        </header>
    );
};

export default Header;