import React from 'react'
import css from './Block4Footer.module.css'
import img1 from './images/testimonials.png'

export const Block4Footer = () => (
    <div className={css.block4Footer}>
        <div className={css.textStyle}>
            <div className={css.text2Style}>
                <b>TESTIMONIALS</b>
                <h3>Customers's quotes</h3>
                <p className={css.block1Text}>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.
                </p>
            </div>
            <img src={img1} alt="" />
        </div>
    </div>   
)