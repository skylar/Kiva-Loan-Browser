// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('models/search');
require('array');
require('controllers/loans');

Klb.searchController = SC.ObjectController.create({

  availableCountries: null,
  selectedCountries: null,
  
  availableSectors: null,
  selectedSectors: null,

	savedSearches:  null,
	canCheckout: NO,

	// call this when you're ready to prime the search w/ data
	primeData: function() {	
	  var sectors = [
	    {'name':'Agriculture','isSelected':false},
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
			{'name':'Food','isSelected':false}];
		this.set('availableSectors',sectors);

		Klb.store.loadRecords(Klb.Country, Klb.Country.FIXTURES);		
		this.set('availableCountries', Klb.store.find(SC.Query.local(Klb.Country)));
		
		this.loadLoans();
	},

	loadLoans: function() {
	  var remoteQuery, i;

	  Klb.makeFirstResponder(Klb.READY_LIST);
	  
	  for (i = 1; i < 10; ++i) {
	    remoteQuery = SC.Query.create({ location: SC.Query.REMOTE, recordType: 'Klb.Loan', parameters: { page: i } });
	    Klb.store.find(remoteQuery);
    }
	},
	
	showCountryPicker: function(context) {
		Klb.getPath('pickerPanes.countryPicker.mainPane').append();
	},
	
	chooseCountries: function(context) {
		var options = context.getPath('parentView.buttonGridView.optionButtons'),
		    countries = [];
				
		options.forEach(function(item) {
			if (item.isSelected) {
				countries.push(item.get('content'));
			}
		});
		
		this.set('selectedCountries', countries);
		Klb.getPath('pickerPanes.countryPicker.mainPane').remove();
	},

	showSectorPicker: function(context) {
		Klb.getPath('pickerPanes.sectorPicker.mainPane').append();
	},

	chooseSectors: function(context) {
		var options = context.getPath('parentView.scrollView.contentView.selection');
	  this.set('selectedSectors', options);
		Klb.getPath('pickerPanes.sectorPicker.mainPane').remove();
	}
	
});