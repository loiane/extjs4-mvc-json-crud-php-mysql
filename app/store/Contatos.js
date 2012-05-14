Ext.define('ExtMVC.store.Contatos', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Contato',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
        	create: 'php/criaContato.php', 
            read: 'php/listaContatos.php',
            update: 'php/atualizaContato.php',
            destroy: 'php/deletaContato.php',
        },
        reader: {
            type: 'json',
            root: 'contatos',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'contatos'
        }
    }
});