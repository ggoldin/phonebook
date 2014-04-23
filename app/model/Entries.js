Ext.define('Phonebook.model.Entries', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'firstname',  type: 'string'},
        {name: 'lastname',   type: 'string'},
        {name: 'phone', type: 'string'},
    ],
    proxy: PhonebookSettings.useLocalStorage ? {
        type: 'localstorage',
        id: 'Phonebook-Entries'
    }: {
        type: 'ajax',
        api: {
            create: 'php/entries/create.php',
            read: 'php/entries/read.php',
            update: 'php/entries/update.php',
            destroy: 'php/entries/delete.php'
        },
        reader: {
            type: 'json',
            root: 'entries',
            messageProperty: 'message'
        }
    }
});