/**
 * @class Phonebook.controller.Entries
 * @extends Ext.app.Controller
 */
Ext.define('Phonebook.controller.Entries', {
    extend: 'Ext.app.Controller',

    models: ['Entries'],
    stores: ['Entries'],

    views: ['EntriesGrid', 'EntriesForm'],
    
    refs: [
        { ref: 'entriesGrid', selector: 'entriesGrid' },
        { ref: 'entriesForm', selector: 'entriesForm' }
    ],

    init: function() {
        this.control({
            'entriesGrid button[action="newentry"]': {
                click: this.newEntry
            },
            'entriesForm button[action="save"]': {
                click: this.handleSave
            },
            'entriesForm button[action="update"]': {
                click: this.handleUpdate
            },
            'entriesGrid actioncolumn[action="edit"]': {
                click: this.handleEdit
            },
            'entriesGrid actioncolumn[action="delete"]': {
                click: this.handleDelete
            },
            'entriesGrid textfield[role="filterfirstname"]': {
                change: this.handleFilter
            }
        });
    },
     
    newEntry: function(btn) {
        // bloccare il drag all'interno della finestra + se finestra già aperta non c'è possibilità di aprirne un'altra
        var window = Ext.create('Ext.window.Window', {
            title: 'Create entry',
            height: 200,
            width: 400,
            layout: 'fit',
            items: {xtype: 'entriesForm'}
        }).show();
        
        var form = window.down('form'),
            buttonSave = form.down('button[action="save"]');
        buttonSave.show();
    },
    
    handleSave: function(btn) {
        var form = btn.up('form'),
            window = form.up('window'),
            values = form.getValues();
        
        if(!form.getForm().isValid()) {
            Ext.Msg.alert('Completare', 'Completare prima tutti i campi, poi salvare');
            return;
        }
        
        var record = Ext.create('Phonebook.model.Entries', values);
        record.save();

        var storeEntries = this.getEntriesGrid().getStore();
        storeEntries.load();
        
        window.hide();
    },
    
    handleUpdate: function(btn) {
        var form = btn.up('form'),
            window = form.up('window'),
            record = form.getRecord();

        if(!form.getForm().isValid()) {
            Ext.Msg.alert('Completare', 'Completare prima tutti i campi, poi salvare');
            return;
        }
            
        form.updateRecord(record);
        record.save();
        window.hide();
    },
    
    handleEdit: function(grid, td, rowNumber, arg, evt, record, row) {
        var window = Ext.create('Ext.window.Window', {
            title: 'Edit entry',
            height: 200,
            width: 400,
            layout: 'fit',
            items: {xtype: 'entriesForm'}
        }).show();
        
        var form = window.down('form'),
            buttonUpdate = form.down('button[action="update"]');
        buttonUpdate.show();
        form.loadRecord(record);
    },
    
    handleDelete: function(grid, td, rowNumber, arg, evt, record, row) {
        var storeEntries = this.getEntriesGrid().getStore();
        
        Ext.Msg.confirm('Cancellazione', 'Sei sicuro di voler cancellare?', function(evt) {
            if(evt == 'yes') {
                record.destroy();
                storeEntries.load();
            }
        });
    },
    
    handleFilter: function(field, value) { // non funziona
console.log(arguments);
        if(value.length <= 2) return;
        
        var grid = field.up('grid'),
            store = grid.getStore();
            
        store.load({
            params: {query: value}
        });
    }
});