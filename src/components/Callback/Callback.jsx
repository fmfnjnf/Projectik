import React from "react"
import "./callback.css"

export default function Callback (){
    return(
        <><div  
        className="Call-ent"><h1>Обратная связь</h1>
        </div>
        <div className="Call-text">
        <h3>Заполните форму чтобы мы могли связаться с вами</h3>
        </div>
        
        <div className="Call">
            <div className="Call-list">
                <div className="Call-item">
                <label for="name">Ваше имя</label>
                <input placeholder="Введите имя"></input>
                <label for="mail">Email</label>
                <input placeholder="Введите адрес электронной почты"></input>
                <label for="number">Телефон</label>
                <input type="password" placeholder="Введите номер телефона"></input>
                </div>
                <div className="Call-aut">
                    <a className="btn">отправить</a>
                </div>
            </div>
        </div>
        
        </>
    )
}