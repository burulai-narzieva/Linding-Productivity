import React from 'react'
import { data } from './scr.js'
import css from './Block3.module.css'

export const Block3 = () => {
    return (
        <>
        <div className={css.Block3}>
            <b>ABOUT US</b>
            <h4>Read about our app</h4>
            
            <div className={css.renderBlock}>
                {data.map((el, id) => (
                    <div key={id}>
                    <img src={el.img}/>
                    <br />
                    <b>{el.title}</b>
                    <p>{el.text}</p>
                    </div>
                ))}
            </div>
{}
            <div className={css.buttonsBlock}>
                <div className={css.button1}>Read more</div>
                <div className={css.line1}></div>
                <div className={css.or}>OR</div>
                <div className={css.line1}></div>
                <div className={css.button2}>Get started</div>
            </div>
            
        </div>
        </>
    )
}