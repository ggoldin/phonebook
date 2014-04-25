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
            'entriesGrid button[action="filterSearch"]': {
                click: this.handleFilter
            }
        });
    },
     
    newEntry: function(btn) {
        var window = Ext.create('Ext.window.Window', {
            title: 'Create entry',
            height: 300,
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
            Ext.Msg.alert('Complete', 'First complete all fields, then save');
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
            Ext.Msg.alert('Complete', 'First complete all fields, then save');
            return;
        }
            
        form.updateRecord(record);
        record.save(); // sistemare: aggiungere callback
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
        
        Ext.Msg.confirm('Deleting', 'Are you sure you want to delete?', function(evt) {
            if(evt == 'yes') {
                storeEntries.remove(record);
                storeEntries.sync();
                storeEntries.load();
            }
        });
    },
    
    handleFilter: function(btn) {
        var store = this.getStore('Entries'),
            grid = btn.up('grid'),
            firstNameField = grid.down('textfield[name="firstname"]'),
            lastNameField = grid.down('textfield[name="lastname"]'),
            phoneField = grid.down('textfield[name="phone"]');

        store.clearFilter();
        store.filter([
            {property: "firstname", value: firstNameField.getValue()},
            {property: "lastname", value: lastNameField.getValue()},
            {property: "phone", value: phoneField.getValue()}
        ]);
    }
});