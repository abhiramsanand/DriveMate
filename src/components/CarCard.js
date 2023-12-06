export default function CarCard(props) {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
            className="w-11/12 p-4 text-center justify-center border-2 border-gray-800 bg-dark-600 rounded-md flex flex-col h-48"
            style={cardStyle}
        >
            <div className="flex flex-col h-full bg-opacity-50 bg-dark-600 rounded-md justify-end">
                <div className="mt-2">
                    <h1 className="font-bold text-white md:text-xl">{props.name}</h1>
                    <p className="font-light text-white md:text-lg">{props.type}</p>
                </div>
            </div>
        </div>
    );
}
