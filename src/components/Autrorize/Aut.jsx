import React from "react"
import "./aut.css"

export default function Aut (){
    return(
        <><div  className="Aut-ent"><h1>Войти</h1></div>
        <div className="Aut">
            <div className="Aut-list">
                <div className="Aut-item">
                <label for="mail">Mail</label>
                <input placeholder="Введите адрес электронной почты"></input>
                <label for="name">Пароль</label>
                <input type="password" placeholder="Введите ваш пароль"></input>
                </div>
                <div className="btn-aut">
                    <a className="btn">отправить</a>
                </div>
            </div>
        </div></>)
}