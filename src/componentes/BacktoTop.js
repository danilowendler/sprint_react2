import React, { useEffect, useState } from 'react';
import '../App.css';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button id="backToTop" className={visible ? 'show' : ''} onClick={scrollToTop}>
            Voltar ao Topo
        </button>
    );
};

export default BackToTopButton;
