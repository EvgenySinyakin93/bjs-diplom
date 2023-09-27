//Получение текущих курсов валюты
const ratesBoard = new RatesBoard(); //Создайте объект типа RatesBoard

let courseRequest = function () {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable(), ratesBoard.fillTable(response.data);
    }
  });
};
courseRequest();
setInterval(courseRequest, 3000);


//Операции с деньгами

const moneyManager = new MoneyManager();

//Реализуйте пополнение баланса

moneyManager.addMoneyCallback = function(data){
  ApiConnector.addMoney(data, (response) => {
      message(response);
  });
};

function message(response){
  if (response.success){
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, "Операция прошла успешно");
  } else {
      moneyManager.setMessage(response.success, response.error);
  };
};

//Реализуйте конвертирование валюты
moneyManager.conversionMoneyCallback = function(data){
  ApiConnector.convertMoney(data, (response) => {
      message(response);
  });  
};

//Реализуйте перевод валюты:

moneyManager.sendMoneyCallback = function(data){
  ApiConnector.transferMoney(data, (response) => {
      message(response);
  });  
};