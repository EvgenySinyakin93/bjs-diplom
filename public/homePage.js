//Получение текущих курсов валюты

const { response } = require("express");

const ratesBoard = new RatesBoard(); //Создайте объект типа RatesBoard

setInterval(() => {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable(), ratesBoard.fillTable(response.data);
    }
  });
}, 3000);


//Операции с деньгами

const moneyManager = new MoneyManager();

//Реализуйте пополнение баланса

moneyManager.addMoneyCallback = (addMoney = {}) => {
    ApiConnector.addMoney(addMoney,(response) => {
        if(response.success) {
            ProfileWidget.smowProfile(response.success, response.error || "Вам успешно добавлено ")
        }
    })
}

//Реализуйте конвертирование валюты