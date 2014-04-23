/**
 * @class Phonebook.view.EntriesForm
 * @extends Ext.form.Panel
 * The entrie form view.
 */
Ext.require(['Ext.ux.DataTip']);

Ext.define('Phonebook.view.EntriesForm', {
    extend: 'Ext.form.Panel',
    xtype: 'entriesForm',
    plugins: {
        ptype: 'datatip'
    },
    items: [{
        xtype: 'fieldset',
        margin: '10 5 5 5',
        layout: 'fit',
        border: 'none',
        defaults: {xtype: 'textfield', allowBlank: false, margin: '0 0 5 0', afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'},
        items: [{
            name: 'firstname',
            fieldLabel: 'First name',
            tooltip: 'Enter the first name',
            msgTarget: 'side'
        }, {
            name: 'lastname',
            fieldLabel: 'Last name',
            tooltip: 'Enter the last name',
            msgTarget: 'side'
        }, {
            name: 'phone',
            fieldLabel: 'Phone number',
            tooltip: 'Enter the phone number',
            msgTarget: 'side'
        }]
    }],
    buttons: [
        { text: 'Save', action: 'save', hidden: true },
        { text: 'Update', action: 'update', hidden: true }
    ]
    
});