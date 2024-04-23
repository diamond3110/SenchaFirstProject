/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],/*
    launch: function() {
        // Создаем экземпляр класса ApiService
        var apiService = Ext.create('MyApp.service.ApiService');
        // Вызываем метод apiService для выполнения запроса к API
        var teamArray = apiService.apiService();
        for (var team in teamArray) {
            console.log(team.teamName); // Выведет название команды
            console.log(team.opponents); // Выведет объект оппонентов
        }
    },*/
    
    // The name of the initial view to create.
    mainView: 'MyApp.view.main.Main'
});
