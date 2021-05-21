import React from 'react'
import css from './Block1.module.css'
import playButton from './images/play button.png'
import vector from './images/Vector.png'
import vector1 from './images/Vector (1).png'
import vector2 from './images/Vector (2).png'
import vector3 from './images/Vector (3).png'
import vector4 from './images/Vector (4).png'

export const Block1 = () => (
    <>
    <div className={css.block1}>
        <b>PLAN YOUR LIFE</b>
        <h1>
            Increase your <strong>productivity</strong>
        </h1>
        <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
        </p>
        <img src={playButton} alt="button" />
    </div>
    <div className={css.block1_footer}>
        <img src={vector} alt="" />
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={vector3} alt="" />
        <img src={vector4} alt="" />
    </div>
    </>

)