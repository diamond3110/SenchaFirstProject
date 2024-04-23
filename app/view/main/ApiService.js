/*
Ext.define('MyApp.service.ApiService',{
    apiService: function() {
        Ext.Ajax.request({
            url: 'http://localhost:8081/api/tournamentTable', // Замените 'your-api-url' на фактический URL вашего API
            method: 'GET',
            success: function(response) {
                var jsonData = Ext.decode(response.responseText);
                var teamsArray = [];
                for (var teamName in jsonData) {
                    var teamData = jsonData[teamName];
                    var opponents = {};
                    for (var opponent in teamData) {
                        opponents[opponent] = teamData[opponent];
                    }
                    var team = Ext.create('MyApp.model.Team', {
                        teamName: teamName,
                        opponents: opponents
                    });
                    console.log(team);
                    teamsArray.push(team);
                }
                return teamsArray;
            },
            failure: function(response) {
                return 'Failed to fetch data from API';
            }
        });
    }
});*/

