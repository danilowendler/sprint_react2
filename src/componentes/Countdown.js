// Countdown.js
import React, { useEffect, useState } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState('');
    const [isRaceOngoing, setIsRaceOngoing] = useState(false);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const raceDate = new Date('July 21, 2024 15:00:00').getTime();
            const now = new Date().getTime();
            const timeLeft = raceDate - now;

            if (timeLeft < 0) {
                setIsRaceOngoing(true);
                clearInterval(countdownInterval);
            } else {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div id="countdown">
            {isRaceOngoing ? (
                <p className="text-in-progress">Corrida em andamento!</p>
            ) : (
                <p>{timeLeft}</p>
            )}
        </div>
    );
}

export default Countdown;
