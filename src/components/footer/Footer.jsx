import React from 'react';

import "./Footer.css"
import pdf from "./cv/cv.pdf"


export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='container'>
                <p className='footer-contact'>Znajdziesz mnie tutaj</p>
                <a href='https://www.facebook.com/elzbieta.sujeta' target='_blank'> <i class="fab fa-facebook-square fa-3x"></i></a>
                <a href='https://www.linkedin.com/in/el%C5%BCbieta-sujeta-67883098/' target='_blank'><i class="fab fa-linkedin fa-3x"></i></a>
                <a href='https://github.com/ElaSujeta'><i class="fab fa-github fa-3x"></i></a>

                <a className='cv_link' href={pdf} target='_blank'>POBIERZ MOJE CV</a>

                <p className='copy'>&copy 2018 Elżbieta Sujeta</p>
            </div>
        </div>
    )
};