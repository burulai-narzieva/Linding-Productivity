import React from 'react'
import css from './Header.module.css'
import img1 from './images/f.png'
import img2 from './images/f2.png'
import img3 from './images/f3.png'
import img4 from './images/f4.png'



export const Header = () => {
    return <div className={css.header}>
        <div className={css.circle}></div>
        <div>
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
}