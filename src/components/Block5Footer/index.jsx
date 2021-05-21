import React from 'react'
import css from './Block5Footer.module.css'


export const Block5Footer = () => {
    return<div className={css.block5Footer}>
        <b>PLAN YOUR LIFE</b>
        <h1>Get started now</h1>
        <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
        <div className={css.buttonsStyle}>
            <div className={css.button1}>View pricing</div>
            <div className={css.button2}>Read documentation</div>
        </div>
    </div>
}