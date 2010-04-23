// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('models/search');
require('controllers/loans');

Klb.searchController = SC.ObjectController.create({

///////////////////////////////////////
// Properties
  availableCountries: null,
  selectedCountries: null,
  
  availableSectors: null,
  selectedSectors: null,
  
  availablePartners: null,

	canCheckout: NO,

	query: function() {
	  var ands = [],
	      parameters = {},
	      selectedCountries = this.get('selectedCountries');
	  
	  if (selectedCountries && selectedCountries.get('length') > 0) {
	    ands.push("country ANY_COUNTRY {countries}");
	    parameters.countries = selectedCountries;
	  }
	  
	  return { conditions: ands.join(' AND '), parameters: parameters };
	}.property(),

	
///////////////////////////////////////
// Methods
	
	// call this when you're ready to prime the search w/ data
	primeData: function() {		
		// init vars
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

		// TODO: move from Fixtures to a localized resource hash...
		Klb.store.loadRecords(Klb.Country, Klb.COUNTRIES_ISO);
		this.set('availableCountries', Klb.store.find(SC.Query.local(Klb.Country)));		
		this.set('availablePartners', Klb.store.find(Klb.AVAILABLE_PARTNERS_QUERY));
		
		// Though results handled, this triggers the data store to fetch loans...
		Klb.store.find(Klb.AVAILABLE_LOANS_QUERY);
		
		// The actual query that drives loan serach results
		this.notifyPropertyChange('query');
	},

	availablePartnersDidChange: function(key) {
	// for now, we wait until we have partner data to load activate the display
		if(this.get('availablePartners').get('length') > 0) {
			Klb.makeFirstResponder(Klb.READY_LIST);
		}
	}.observes('*availablePartners.length'),
	
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
		
		this.notifyPropertyChange('query');
	},

	showSectorPicker: function(context) {
		Klb.getPath('pickerPanes.sectorPicker.mainPane').append();
	},

	chooseSectors: function(context) {
		var options = context.getPath('parentView.scrollView.contentView.selection');
	  this.set('selectedSectors', options);
		Klb.getPath('pickerPanes.sectorPicker.mainPane').remove();
	},
		
});
