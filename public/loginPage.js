"use strict"
const { response } = require("express");

 //Подключите строгий режим выполнения кода.

const userForm = new UserForm();//Создайте объект класса UserForm
class UserForm{ 
    
    loginFormCallback = (data) => { //Присвойте свойству loginFormCallback созданного...
        ApiConnector.login(data, response => { //Функция должна выполнять запрос на сервер для попытки авторизации пользователя
            if(response.success) { //Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации.
                location.reload(); //В случае успеха запроса обновите страницу (с помощью location.reload();).
                return;
            } else{
                console.log(response.error);//В случае провала запроса выведите ошибку в окно для ошибок.
                setLoginErrorMessage(response.error);
            }
        })
    }

    registerFormCallback(){}

}

class ApiConnector{}