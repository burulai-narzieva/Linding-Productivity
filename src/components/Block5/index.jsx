import React from 'react'
import css from './Block5.module.css'
import vector from './images/Vector (2).png'
import vector2 from './images/Vector (3).png'

export const Block5 = () => (
    <div className={css.Block5}>
        <b>Customer help</b>
        <h1>Frequently asked questions</h1>
        <div className={css.line}>
            <img src={vector} alt="" />
            <div>Reque insolens in vel?</div>
        </div>
        
        <div className={css.line}>   
            <img src={vector} alt="" />
            <div>Vis rebum error graecis ea, id sit postea accusamus?</div>
        </div>
        
        <div className={css.line2}>
            <img src={vector2} alt="" />
            <div>Lorem repudiandae ne nec?</div>
        </div>

        <div className={css.line3}>
            <div className={css.line3Div}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</div>
            <div className={css.line3Button}>Go to documentation</div>
        </div>

        <div className={css.line}>
            <img src={vector} alt="" />
            <div>Ad dicit numquam vel. Et eos iudico feugait percipitur?</div>
        </div>
        
        <div className={css.line}>
            <img src={vector} alt="" />
            <div>Sea no dico percipitur. Fierent constituam definitiones id eum?</div>
        </div>
        
        
    </div>
)   