Ext.onReady(function() {
	Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

    Ext.Loader.setPath('Ext.ux', 'ux/')
    Ext.Loader.setConfig({
        enabled: true
    });
    Ext.application({
        name: 'Phonebook',
        controllers: ['Entries'],
        launch: function() {
            Ext.create('Ext.container.Viewport', {
                requires: [
                    'Ext.layout.container.Border'
                ],
                layout: 'border',
                items: [
                    /* {
                        xtype: 'toolbar',
                        title: 'Phonebook',
                        region: 'north'
                    }, */
                    /* {
                        xtype: 'panel',
                        region: 'west',
                        width: 300,
                        collapsible: true,
                        split: true
                    }, */
                    {
                        region: 'center',
                        xtype: 'entriesGrid',
                        title: 'Phonebook'
                    }
                ]
            });
        }
        
    });

});