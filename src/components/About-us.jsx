import React from 'react';

const AboutUs = () => {
    return (
        <div className='aboutUs' id='aboutus'>
            <div className="aboutUs__info">
                <h1>Мы маленькая инди компания!</h1>
                <p>За это время у себя дома мы стали городской легендой.
                    Именно доверие рептилоидов позволило нам не только сохранить завод в бурные 90-е,
                    но и с успехом противостоять федеральному пиву – “консервам”,
                    которые имеют мало общего с тем, что привыкли пить юпитерцы.
                    С тех пор мы защищаем местное производство, несём персональную ответственность перед ящерами за то,
                    что варим и разливаем.
                </p>
            </div>
            <div className="aboutUs__pic">
                <img src="./public/img/gold.png" alt="gold"/>
            </div>
        </div>
    );
};

export default AboutUs;