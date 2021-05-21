import React from 'react'
import css from './Block4.module.css'
import img from './images/illustrations.png'
import circl from './images/circles.png'
import vector from './images/Vector.png'
import vector2 from './images/Vector (1).png'

export const Block4 = () => (
    <div className={css.block4}>
        <b>OUR RESOURCES</b>
        <h3>Start reading our blog</h3>
        <div >
            <div className={css.rootStyle}>
                <div className={css.Vector} ><img src={vector} alt="" /></div>
                <img src={img} alt="" />

                <div className={css.textStyle}>
                    <h2>How to start planning</h2>
                    <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...</p>
                    <div className={css.rootButton}>
                        <div className={css.button}>Read now</div>
                        <div className={css.button2}>Add to your bookmarks</div>
                    </div>   
                </div>
                
                <div className={css.Vector2}><img src={vector2} alt="" /> </div>
                
            </div>
            <img className={css.circles} src={circl} alt="" />
        </div>
        
    </div>
    
)