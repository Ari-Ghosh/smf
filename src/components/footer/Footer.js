import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Smart Maker Festival</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <p>@Copyright <b>SMF.</b> All Rights Reserved</p>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact Us</li>
                            <li>Designed by Team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
