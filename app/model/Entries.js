Ext.define('Phonebook.model.Entries', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'firstname',  type: 'string'},
        {name: 'lastname',   type: 'string'},
        {name: 'phone', type: 'string'},
    ],
    proxy: {
        type: 'direct',
        api: {
            create: Entries.create,
            read: Entries.read,
            update: Entries.update,
            destroy: Entries.destroy
        }
    }
});