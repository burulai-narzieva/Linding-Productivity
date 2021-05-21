import React from 'react'
import css from './Block2.module.css'
import img from './images/illustration.png'


export const Block2 = () => (
    <div className={css.block2}>
        <b>DESKTOP AND MOBILE APP</b>
        <h3>
            <strong>Plan</strong> and <strong>manage </strong>
        </h3>
        <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
        </p>
        <div className={css.rootButton}>
            <div className={css.arrow}></div>
            <div className={css.button1}>View video</div>
            <div className={css.button2}>See features</div>
            <img src={img} alt="" />
        </div>
    </div>
)