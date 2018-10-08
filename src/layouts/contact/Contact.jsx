import React from 'react';

import "./Contact.css"


export const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h3 className='contact-header'>Dane kontaktowe</h3>
            <div className='contact-type'><span className='contact-name'> Telefon: </span> +48 515 967 791</div>
            <div className='contact-type'><span className='contact-name'> E-mail: </span> sujeta.elzbieta@gmail.com</div>
            <p>
                <a href='https://www.facebook.com/elzbieta.sujeta' target='_blank'> <i class="fab fa-facebook-square fa-3x"></i></a>
                <a href='https://www.linkedin.com/in/el%C5%BCbieta-sujeta-67883098/' target='_blank'><i class="fab fa-linkedin fa-3x"></i></a>
            </p>

        </div>
    )
};