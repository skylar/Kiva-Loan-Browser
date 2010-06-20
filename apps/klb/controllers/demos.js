// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('models/demo');


Klb.demosController = SC.ArrayController.create({		
		primeData: function() {
//			Klb.store.loadRecords(Klb.Demo, Klb.Demo.FIXTURES);
//			Klb.demosController.set('content', Klb.store.find(SC.Query.local(Klb.Demo)));		
		}	
});

