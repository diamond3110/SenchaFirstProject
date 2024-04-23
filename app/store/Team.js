Ext.define('MyApp.store.Team', {
    extend: 'Ext.data.Store',

    alias: 'store.team',

    model: 'MyApp.model.Team',

    autoLoad: true, // Автоматическая загрузка данных при инициализации хранилища

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8081/api/tournamentTable',
        reader: {
            type: 'json'
        }
    },
    loadColumns: function() {
        this.load({
            scope: this,
            callback: function(records, operation, success) {
                if (success) {
                    var columns = [];
                    records.forEach(function(record) {
                        for (var teamName in record.getData()) {
                            if (record.getData().hasOwnProperty(teamName)) {
                                columns.push({
                                    text: teamName,
                                    dataIndex: teamName.toLowerCase()
                                });
                            }
                        }
                    });
                    return columns;
                }
            }
        });
    }
});