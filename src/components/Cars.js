import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarCard from "./CarCard.js"

import c1 from "../assets/cars/c1.jpg"
import c2 from "../assets/cars/c2.jpg"
import c3 from "../assets/cars/c3.jpg"
import c4 from "../assets/cars/c4.png"
import c5 from "../assets/cars/c5.jpg"
import c6 from "../assets/cars/c6.jpg"
import c7 from "../assets/cars/c7.webp"
import c8 from "../assets/cars/c8.jpg"
import c9 from "../assets/cars/c9.jpg"
import c10 from "../assets/cars/c10.webp"
import c11 from "../assets/cars/c11.jpg"
import c12 from "../assets/cars/c12.jpg"
import c13 from "../assets/cars/c13.jpg"
import c14 from "../assets/cars/c14.jpg"
import c15 from "../assets/cars/c15.webp"
import c16 from "../assets/cars/c16.jpg"
import c17 from "../assets/cars/c17.avif"

export default function Cars() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="cars" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Cars</h1>
            <p className="font-light text-gray-400">Driven by Choice, Fueled by Freedom</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <CarCard name="Toyota Corolla" type="Sedan" img={c1} />
                    <CarCard name="Honda Accord" type="Sedan" img={c2} />
                    <CarCard name="Ford Fusion" type="Sedan" img={c3} />
                    <CarCard name="Toyota Fortuner" type="SUV" img={c4} />
                    <CarCard name="Ford Endeavour" type="SUV" img={c5} />
                    <CarCard name="Hyundai Creta" type="SUV" img={c6} />
                    <CarCard name="Volkswagen Polo" type="Hatchback" img={c7} />
                    <CarCard name="Maruti Suzuki Baleno" type="Hatchback" img={c8} />
                    <CarCard name="Ford Figo" type="Hatchback" img={c9} />
                    <CarCard name="Mercedes-Benz E-Class" type="Luxury Car" img={c10} />
                    <CarCard name="BMW 5 Series" type="Luxury Car" img={c11} />
                    <CarCard name="Audi A6" type="Luxury Car" img={c12} />
                    <CarCard name="Tesla Model 3" type="Electric Car" img={c13} />
                    <CarCard name="Tesla Leaf" type="Electric Car" img={c14} />
                    <CarCard name="Mazda MX-5" type="Convertible" img={c15} />
                    <CarCard name="Jeep Wrangler" type="Off-Road" img={c16} />
                    <CarCard name="Toyota Innova Crysta" type="Minivan" img={c17} />
                </Slider>
            </div>
        </div>
    )
}