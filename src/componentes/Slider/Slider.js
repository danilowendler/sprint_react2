import React, { useEffect, useState } from 'react';
import './Slider.css'; // Importando o CSS do Slider

const Slider = () => {
    const slides = [
        { image: 'assets/carrinhu.jpg', text: '“A corrida não é apenas sobre a velocidade; é sobre a paixão e a perseverança.”' },
        { image: 'assets/pistafe.avif', text: '“As pistas são como a vida; você precisa saber quando acelerar e quando frear.”' },
        { image: 'assets/pilotoslide.avif', text: '“Um piloto não é apenas quem dirige, mas quem se conecta com a máquina.”' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index} style={{ backgroundImage: `url(${slide.image})` }}>
                    <p>{slide.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Slider;
