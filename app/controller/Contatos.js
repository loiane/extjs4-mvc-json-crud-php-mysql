Ext.define('ExtMVC.controller.Contatos', {
    extend: 'Ext.app.Controller',

    stores: ['Contatos'],

    models: ['Contato'],

    views: ['contato.Formulario', 'contato.Grid'],

    refs: [{
            ref: 'contatoPanel',
            selector: 'panel'
        },{
            ref: 'contatoGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
            'contatogrid dataview': {
                itemdblclick: this.editarContato
            },
            'contatogrid button[action=add]': {
            	click: this.editarContato
            },
            'contatogrid button[action=delete]': {
                click: this.deleteContato
            },
            'contatoform button[action=save]': {
                click: this.updateContato
            }
        });
    },

    editarContato: function(grid, record) {
        var edit = Ext.create('ExtMVC.view.contato.Formulario').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updateContato: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var novo = false;
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('ExtMVC.model.Contato');
			record.set(values);
			this.getContatosStore().add(record);
            novo = true;
		}
        
		win.close();
        this.getContatosStore().sync();

        if (novo){ //faz reload para atualziar
            this.getContatosStore().load();
        }
    },
    
    deleteContato: function(button) {
    	
    	var grid = this.getContatoGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getContatosStore();

	    store.remove(record);
	    this.getContatosStore().sync();

        //faz reload para atualziar
        this.getContatosStore().load();
    }
});
