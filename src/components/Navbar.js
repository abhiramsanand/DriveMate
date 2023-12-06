import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <div className='fixed z-50 bg-dark-600 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
            <div className="flex justify-between items-center text-white">
                <img src={logo} className="App-logo w-25 h-20 rounded-full" alt="logo" />
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#home" className="hover:underline">Home</a></li>
                    <li className="p-4"><a href="#cars" className="hover:underline">Cars</a></li>
                    <li className="p-4"><a href="#booking" className="hover:underline">Booking</a></li>
                    <li className="p-4"><a href="" className="hover:underline">Profile</a></li>
                </ul>
                <a href="" rel="noreferrer" target="_blank" className=" rounded-full px-4 py-1 border border-custom-green border-4 hover:bg-opacity-80">Login</a>
            </div>
        </div>
    );
}
