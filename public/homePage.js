//Получение текущих курсов валюты
const ratesBoard = new RatesBoard(); //Создайте объект типа RatesBoard

let courseRequest = function () {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
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
      moneyManager.setMessage(response.success, "Баланс успешно пополнен на");
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

//Работа с избранным

//Создайте объект типа FavoritesWidget
const favoritesWidget = new FavoritesWidget();

//Запросите начальный список избранного
ApiConnector.getFavorites(response => {
  if(response.success){
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data)
  } 
});

//Реализуйте добавления пользователя в список избранных
favoritesWidget.addUserCallback = (data) => {
  ApiConnector.addUserToFavorites(data, (response) => {
      if(response.success){
          favoritesWidget.clearTable();
          favoritesWidget.fillTable(response.data);
          moneyManager.updateUsersList(response.data)
          favoritesWidget.setMessage(response.success, "Добавлении пользователя в окне отображения сообщения выполнен успешно");
      } else {
          favoritesWidget.setMessage(response.success, response.error);
      } 
  })
};

//Реализуйте удаление пользователя из избранного
favoritesWidget.removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites(data, (response) => {
    if(response.success){
          favoritesWidget.clearTable();
          favoritesWidget.fillTable(response.data);
          moneyManager.updateUsersList(response.data)
          favoritesWidget.setMessage(response.success, "Удаление пользователя выполнен успешно");
      } else {
          favoritesWidget.setMessage(response.success, response.error);
      }
  });
};