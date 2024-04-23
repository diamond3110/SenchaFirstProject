Ext.define('MyApp.view.main.TeamList', {
    extend: 'Ext.grid.Panel',

    xtype: 'teamlist',
    requires: [
        'MyApp.store.Team'
    ],
    store: 'team',
    title: 'Team Table',
    columns: [],
    initComponent: function() {
        var teamStore = this.getStore();
        var columns = teamStore.loadColumns();
        this.reconfigure(columns, columns);
    },
    listeners: {
        select: 'onItemSelected'
    }
});
