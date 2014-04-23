/**
 * @class Phonebook.view.EntriesForm
 * @extends Ext.form.Panel
 * The entrie form view.
 */
Ext.define('Phonebook.view.EntriesForm', {
    extend: 'Ext.form.Panel',
    xtype: 'entriesForm',
    items: [{
        xtype: 'fieldset',
        margin: '10 5 5 5',
        layout: 'fit',
        border: 'none',
        defaults: {xtype: 'textfield', allowBlank: false, margin: '0 0 5 0', afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'},
        items: [{
            name: 'firstname',
            fieldLabel: 'First name'
        }, {
            name: 'lastname',
            fieldLabel: 'Last name'
        }, {
            name: 'phone',
            fieldLabel: 'Phone number'
        }]
    }],
    buttons: [
        { text: 'Save', action: 'save', hidden: true },
        { text: 'Update', action: 'update', hidden: true }
    ]
    
});