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
      showMessage(response);
  });
};

function message(response){
  if (response.success){
      ProfileWidget.showProfile(response.data);
      money.setMessage(true, String("Операция прошла успешно"));
  } else {
      money.setMessage(false, String(response.error + "Ошибка в операции"));
  };
};

//Реализуйте конвертирование валюты
money.conversionMoneyCallback = function(data){
  ApiConnector.convertMoney(data, (response) => {
      showMessage(response);
  });  
};