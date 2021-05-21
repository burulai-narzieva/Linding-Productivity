import React from 'react'
import css from './Block3Footer.module.css'
// import rect from './images/Rectangle 4.png'
// import rect2 from './images/Rectangle 4.1.png'
import compass from './images/Group.png'
import man from './images/Group 4.png'

export const Block3Footer = () => (
    <div className={css.block3Footer}>
        <div className={css.container1}>
            <img src={compass} alt="" />
            <h3>89%</h3>
            <p>Customers who have increased their productivity</p>
        </div>

        <div className={css.container2}>
            <img src={man} alt="" />
            <h3 >3123</h3>
            <p>Users who have used our application</p>
        </div>

    </div>
)