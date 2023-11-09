import React from 'react';
import {LiaTelegram} from "react-icons/lia";
import {MdOutlineWhatsapp} from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {

    const dataYear = new Date()
    return (
        <footer id='contact'>
            <h3> &copy; All rights reserved</h3>
            <div className='contact__icons'>
                <LiaTelegram/>
                <p>+7(800)5553535</p>
                <MdOutlineWhatsapp/>
                <p>+7(800)5553535</p>
                <MdAlternateEmail/>
                <p>lena-bombovoz@yahoo.com</p>
            </div>
            <div>
                {dataYear.getFullYear()} г.
            </div>
        </footer>
    );
};

export default Footer;