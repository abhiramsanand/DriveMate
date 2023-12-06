import BookingCard from "./BookingCard.js"

import b1 from '../assets/booking/b1.jpg'
import b2 from '../assets/booking/b2.jpg'
import b3 from '../assets/booking/b3.jpg'
import b4 from '../assets/booking/b4.jpg'
import b5 from '../assets/booking/b5.jpg'
import b6 from '../assets/booking/b6.jpg'

export default function Booking(){
    return (
        <div id="booking" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Booking</h1>
            <p className="font-light text-gray-400">Book Your Journey, Unlock Your Adventure</p>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <BookingCard name="Subscription Plans" img={b1} />
                <BookingCard name="Weekly Rental" img={b2} />
                <BookingCard name="Daily Rental" img={b3} />
                <BookingCard name="Hourly Rental" img={b4} />
                <BookingCard name="One-Way Rental" img={b5} />
                <BookingCard name="Chauffeur-Driven Service" img={b6} />

            </div>
        </div>
    )
}
