// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('models/search');


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

	init: function() {		
		// set up a self-observer for when loan results change
		this.addObserver('activeResults.status', this, 'notifyResultsChange');
	},

	// call this when you're ready to prime the search w/ data
	primeData: function() {	
		this.search();
		var countries = Klb.store.find(Klb.Country);
		this.set('availableCountries', countries);
	},

	search: function() {
		this.set('activeSearch', Klb.store.createRecord(Klb.Search, {}));

		var loans = Klb.store.find(Klb.Loan);
		this.set('activeResults', loans);
	},
	
	showCountryPicker: function(context) {
		Klb.getPath('pickerPanes.countryPicker.mainPane').append();
	},
	
	chooseCountries: function(context) {
		var options = context.getPath('parentView.buttonGridView.optionButtons'),
		    countries = this.getPath('activeSearch.countries'),
		    newCountries = [];
				
		options.forEach(function(item) {
			if (item.isSelected) {
				newCountries.push(item.get('content'));
			}
		});
		
		countries.replace(0, countries.get('length'), newCountries);
				
		Klb.getPath('pickerPanes.countryPicker.mainPane').remove();
	},
	
// implementing interfaces
	notifyResultsChange: function() {
		// notify responder change of new search results by sending
		//  this action
		console.log("RESULTS CHANGED.");
	   Klb.sendAction('targetsDidChange');
	 }.observes('status')
	
});