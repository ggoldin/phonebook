/**
 * @class Phonebook.view.EntriesGrid
 * @extends Ext.tree.Panel
 * The phonebook grid view.  A grid that displays all of the entries of the phonebook.
 */
Ext.define('Phonebook.view.EntriesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'entriesGrid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.column.Action',
        'Ext.grid.column.Date',
        'Ext.grid.feature.Grouping',
        'Ext.grid.plugin.DragDrop'
    ],
    store: 'Entries',
    columns: [
        { text: 'First name',  dataIndex: 'firstname', flex: 1 },
        { text: 'Last name', dataIndex: 'lastname', flex: 1 },
        { text: 'Telephone number', dataIndex: 'phone', flex: 1 },
        { xtype: 'actioncolumn', action: 'edit', icon: 'resources/images/silkicons/pencil.png', tooltip: 'Edit', menuText: 'Edit', menuDisabled: true, sortable: false, resizable: false, width: 24},
        { xtype: 'actioncolumn', action: 'delete', icon: 'resources/images/silkicons/cross.png', tooltip: 'Delete', menuText: 'Delete', menuDisabled: true, sortable: false, resizable: false, width: 24}
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'New entrie',
            icon: 'resources/images/silkicons/add.png',
            action: 'newentry'
        }, {
            xtype: 'textfield',
            labelAlign: 'right',
            widthWidth: 100,
            fieldLabel: 'First name',
            name: 'firstname'
        }, {
            xtype: 'textfield',
            labelAlign: 'right',
            widthWidth: 100,
            fieldLabel: 'Last name',
            name: 'lastname'
        }, {
            xtype: 'textfield',
            labelAlign: 'right',
            widthWidth: 100,
            fieldLabel: 'Phone number',
            name: 'phone'
        }, {
            text: 'Search',
            action: 'filterSearch',
            icon: 'resources/images/silkicons/magnifier.png'
        }, {
            text: 'Clear filter',
            icon: 'resources/images/silkicons/delete.png',
            handler: function() {
                Ext.getStore('Entries').clearFilter();
            }
        }]
    }]


});