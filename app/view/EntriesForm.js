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
            msgTarget: 'side',
            validator: function(v) {
                var pattern = new RegExp('[+][0-9]{2}\\s[0-9]+\\s[0-9]{6,}');
                return pattern.test(v)?true:"Invalid Number";
            }
        }]
    }, {
        html: '<p style="color: gray; margin: 0" ><i>The phone number should be formatted by a +, a group of digits, a space, a group of digits and then a group of digits with at least 6 digits</i></p><p style="color: gray;"><i>e.g. +39 01 234567</i></p>',
        border: 0,
        margin: 15
    }],
    buttons: [
        { text: 'Save', action: 'save', hidden: true },
        { text: 'Update', action: 'update', hidden: true }
    ]
    
});