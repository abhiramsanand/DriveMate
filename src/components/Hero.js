import { useState } from 'react'

import hero from '../assets/Hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
            {loaded ?
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
                >Loading...</div>
                :
                null
            }
            <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
                <div className='md:w-3/6 md:p-4'>
                    <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={hero} alt="hero" onLoad={() => setLoaded(false)} />
                </div>
                <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                    <div className="flex flex-col w-full mt-8">
                        <h1 className="text-xl text-gray-400">Welcome to</h1>
                        <h1 className="text-2xl font-bold">DriveMate</h1>
                        <p class="text-xl font-bold text-gray-300">Your Road, Your Rules</p>
                        <p className="text-md font-light text-gray-400 ">DriveMate sparks your adventure with a fleet tailored for every journey. Our seamless service ensures your road trips are not just drives but experiences. Embrace the road with DriveMate, where each mile narrates a story of comfort and exploration.</p>
                    </div>
                    <a href='#booking' className='mt-2 block'>Get Started <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight} /> </a>

                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <a href='' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faWhatsapp} /></a>
                        </li>
                        <li>
                            <a href='' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href='' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faFacebook} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
