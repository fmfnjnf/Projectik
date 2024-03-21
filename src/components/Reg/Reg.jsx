import React from "react"
import "./reg.css"

export default function Reg (){
    return(
        <><h1 className="Reg-name">Регистрация</h1>
        <div className="Reg">
            <div className="Reg-list">
                <div className="Reg-item">
                <label for="name">Ваше имя </label>
                <input placeholder="Введите имя"></input>
                <label for="username">Придумайте UserName </label>
                <input placeholder="Введите свой userName"></input>
                <label for="mail">Mail</label>
                <input placeholder="Введите адрес электронной почты"></input>
                <label for="name">Пароль</label>
                <input type="password" placeholder="Введите ваш пароль"></input>
                <label for="name">Повторите пароль</label>
                <input type="password" placeholder="Введите повторно пароль"></input>
                </div>
                <div className="btn-reg">
                    <a className="btn2">Зарегистрироваться</a>
                </div>
            </div>
        </div></>)
}