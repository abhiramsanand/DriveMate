

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-600 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#cars" className="hover:underline">Cars</a></li>
        <li><a href="#booking" className="hover:underline">Booking</a></li>
        <li><a href="" className="hover:underline">Profile</a></li>
      </ul>

      <p className="text-sm font-light text-center">Copyright © 2023 DriveMate. All Right Reserved</p>

    </div>
  )
}
