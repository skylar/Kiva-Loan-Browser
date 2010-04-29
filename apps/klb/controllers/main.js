// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

Klb.mainController = SC.ObjectController.create({
	
	currentSection: null,
	
	chooseALoan : function() {
		Klb.makeFirstResponder(Klb.LENDING_ENTRY);
	},
	
	learnMore : function() {
		Klb.makeFirstResponder(Klb.LEARN_MORE);
	},
	
	about: function() {
		Klb.makeFirstResponder(Klb.ABOUT);
	},
	
});