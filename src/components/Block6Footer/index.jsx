import React from 'react'
import css from './Block6Footer.module.css'
import img1 from './images/f.png'
import img2 from './images/f2.png'
import img3 from './images/f3.png'
import img4 from './images/f4.png'



export const Block6Footer = () => {
    return <div className={css.header}>
        <div className={css.header2}>
        <div className={css.header3}>
        <div className={css.circle}></div>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Documentation</li>
            </ul>
        </div>
        <div className={css.imgGroup}>
            <div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className={css.button}>Get startted</div>
        </div>
        </div>
            <div className={css.end}>Copyright © 2018 by Random site</div>
    </div>
}