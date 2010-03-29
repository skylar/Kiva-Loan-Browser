// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('models/search');
require('array');


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
		this.set('activeSearch', Klb.store.createRecord(Klb.Search, {}));
		this.activeSearch.set('male', true);
		this.activeSearch.set('female', true);
		this.activeSearch.set('partnerRating', 3.5);
		this.activeSearch.set('borrowerCount', 1);
		this.activeSearch.set('sectors', []);
		
		// set up Sectors (for now, in english)
		var sectors = [{'name':'Agriculture','isSelected':false},
			{'name':'Transportation','isSelected':false},
			{'name':'Services','isSelected':false},
			{'name':'Clothing','isSelected':false},
			{'name':'Health','isSelected':false},
			{'name':'Retail','isSelected':false},
			{'name':'Manufacturing','isSelected':false},
			{'name':'Arts','isSelected':false},
			{'name':'Housing','isSelected':false},
			{'name':'Food','isSelected':false},
			{'name':'Wholesale','isSelected':false},
			{'name':'Construction','isSelected':false},
			{'name':'Education','isSelected':false},
			{'name':'Personal Use','isSelected':false},
			{'name':'Entertainment','isSelected':false},
			{'name':'Green','isSelected':false},
			{'name':'Food','isSelected':false}
			];
		this.set('availableSectors',sectors);

		this.search();
		var countries = Klb.store.find(Klb.Country);
		this.set('availableCountries', countries);
	},

	search: function() {
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

	showSectorPicker: function(context) {
		Klb.getPath('pickerPanes.sectorPicker.mainPane').append();
	},

	chooseSectors: function(context) {
		var options = context.getPath('parentView.scrollView.contentView.selection');
		this.activeSearch.set('sectors', options);
				
		Klb.getPath('pickerPanes.sectorPicker.mainPane').remove();
	},
	
// implementing interfaces
	notifyResultsChange: function() {
		// notify responder change of new search results by sending
		//  this action
		console.log("RESULTS CHANGED.");
	   Klb.sendAction('targetsDidChange');
	 }.observes('status')
	
});