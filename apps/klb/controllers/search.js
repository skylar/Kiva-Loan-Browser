// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/** @class

  (Document Your Controller Here)

  @extends SC.Controller
*/
Klb.searchController = SC.ObjectController.create({

//////////////////////
// Properties
	activeSearch: null,  // Klb.Search
	activeResults: null,
	availableCountries: null,
	availableSectors:  null,
	savedSearches:  null,
	canCheckout: NO,
	
	activeResultCount: function() {
		return 122;
	}.property().cacheable(),
		
//////////////////////
// Methods
// TODO: Add your own code here.

	// call this when you're ready to prime the search w/ data
	init: function() {
		// set up a self-observer for when loan results change
		this.addObserver('activeResults', this, 'notifyResultsChange');

		this.search();
		var countries = Klb.store.findAll(Klb.Country);
		this.set('availableCountries', countries);
	},

	search: function() {
		var loans = Klb.store.findAll(Klb.Loan);
		this.set('activeResults', loans);
	},
	
	showCountryPicker: function(context) {
		Klb.getPath('pickerPanes.countryPicker.mainPane').append();
	},
	
	chooseCountries: function(context) {
		Klb.getPath('pickerPanes.countryPicker.mainPane').remove();
	},
	
// implementing interfaces
	notifyResultsChange: function() {
		// notify responder change of new search results by sending
		//  this action
	   Klb.sendAction('targetsDidChange');
	 }.observes('state')
	
});