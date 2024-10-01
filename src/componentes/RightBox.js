import React from 'react';
import '../App.css';

const RightBox = () => {
    return (
        <div className="right-box">
            <div className="box piloto">
                <h2>My Driver</h2>
                <p>Driver - 1<br />Points: 233</p>
                <img src="assets/driver.png" alt="Driver" />
            </div>

            <div className="box carro">
                <h2>My Car</h2>
                <p>Car - 1<br />Points: 236</p>
                <img src="assets/car.png" alt="Car" />
            </div>

            <div className="box ranking">
                <div className="top-score">
                    <h2>Top Score</h2>
                    <div className="top-score-box">
                        <p>TERRORCB</p>
                        <p>800 Points</p>
                    </div>
                </div>

                <div className="friends-ranking">
                    <h2>Friends</h2>
                    <div className="friends-ranking-box">
                        <p>Your Points: 469</p>
                        <p>1 - Renato: 523</p>
                        <p>2 - Me: 469</p>
                        <p>3 - Lucas: 433</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBox;
