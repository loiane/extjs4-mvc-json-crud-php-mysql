/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'ExtMVC.view.contato.Grid',
        'ExtMVC.view.contato.Formulario'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'contatogrid'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});