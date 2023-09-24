"use strict"


 //Подключите строгий режим выполнения кода.

const userForm = new UserForm();//Создайте объект класса UserForm

    
    userForm.loginFormCallback = (data) => { //Присвойте свойству loginFormCallback созданного...
        ApiConnector.login(data, (response) => { //Функция должна выполнять запрос на сервер для попытки авторизации пользователя
            if(response.success) { //Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации.
                location.reload(); //В случае успеха запроса обновите страницу (с помощью location.reload();).
            } else{
                userForm.setLoginErrorMessage(response.error);
            }
        })
    }

     userForm.registerFormCallback = (data) => {
        ApiConnector.login(data, (response) => { //Функция должна выполнять запрос на сервер для попытки авторизации пользователя
            if(response.success) { //Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации.
                location.reload(); //В случае успеха запроса обновите страницу (с помощью location.reload();).
            } else{
                userForm.setRegisterErrorMessage(response.error);
            }
        })
     }



