Ext.define('Phonebook.store.Entries', {
    extend: 'Ext.data.Store',
    model: 'Phonebook.model.Entries',
    autoLoad: true
    //remoteFilter: true     
});