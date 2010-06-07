// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

Klb.mainController = SC.ObjectController.create({
	
	currentSection: null,	
	
	showPrehome: function() { this.set('currentSection', Klb.getPath('prehomePage.mainView')); },
	
	showLending: function() { this.set('currentSection', Klb.getPath('lendingPage.mainView')); },
	
});