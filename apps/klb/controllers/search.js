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
  availableCountries: [],
  selectedCountries: [],
  
  availableSectors: [],
  selectedSectors: [],
  
  availablePartners: [],
	showMales: true,
	showFemales: true,
	showGroups: true,
	
	sortOptions: [
		{"name":"_Most_Recent".loc(), "value":"postedDate DESC"},
		{"name":"_Amount_Remaining".loc(), "value":"remainingAmount"},
		{"name":"_Loan_Amount".loc(), "value":"loanAmount"},
		{"name":"_Sector".loc(), "value":"sector"},
		{"name":"_Expiring_Soon".loc(), "value":"postedDate ASC"}
	],
	currentSortOption: 'postedDate DESC',

	canCheckout: NO,

	query: function() {
	  var ands = [],
	      parameters = {},
	      iFemale, iMale, gQuery,
	      selectedCountries = this.get('selectedCountries'),
	      selectedSectors = this.get('selectedSectors');
	  
	  if (selectedCountries && selectedCountries.get('length') > 0) {
	    ands.push("country ANY_COUNTRY {countries}");
	    parameters.countries = selectedCountries;
	  }
	  
	  if (selectedSectors && selectedSectors.get('length') > 0) {
	  	ands.push('sector ANY {sectors}');
	  	parameters.sectors = selectedSectors.getEach('name');
	  }
	  
	  // gender/groups
	  iMale = "(borrowerCount=1 AND gender='male')";
	  iFemale = "(borrowerCount=1 AND gender='female')";
	 	if (this.get('showMales') && this.get('showFemales')) {
	 		if(!this.get('showGroups')) {
		 		ands.push("borrowerCount = 1");
		 	} // else, do nothing
	 	} 
	 	else if (this.get('showGroups')) {
	 		gQuery = "(borrowerCount > 2";
	 		if(this.get('showMales')) { gQuery += " OR " + iMale; }
	 		else if(this.get('showFemales')) { gQuery += " OR " + iFemale; }
	 		gQuery += ")";
	 		ands.push(gQuery);
	 	}
	 	else if (this.get('showMales')) { ands.push(iMale); }
	 	else if (this.get('showFemales')) { ands.push(iFemale); }
	  
//	  console.log("MY JOINS: " + ands.join(' AND '));
	  return { conditions: ands.join(' AND '), parameters: parameters,
	  	 orderBy: this.get('currentSortOption') };
	}.property('showMales','showFemales','showGroups','currentSortOption'),

	availableCountries: function() {
		var partners = this.get('availablePartners');
		var countries = [];
		partners.forEach( function(item, index, enm) {
			countries.pushObjects(item.get('countries'));
		});
		
		return countries.uniq().sortProperty('name');
	}.property('availablePartners').cacheable(),

	// FORMATTED PROPERTIES for views
  formattedCountries: function() {
    var countries = this.get('selectedCountries'),
        len = countries.get('length');
        
    return len === 0 ? '_All'.loc() : countries.mapProperty('name').sort().join(', ');
  }.property('selectedCountries').cacheable(),

	formattedSectors: function() {
	  var sectors = this.get('selectedSectors'),
	      len = sectors.get('length');
	      
	  return len === 0 ? '_All'.loc() : sectors.mapProperty('name').sort().join(', ');
	}.property('availableSectors').cacheable(),
	
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

		Klb.store.loadRecords(Klb.Country, Klb.COUNTRIES_ISO);
		this.set('availableCountries', Klb.store.find(SC.Query.local(Klb.Country)));		
		this.set('availablePartners', Klb.store.find(Klb.AVAILABLE_PARTNERS_QUERY));
		
		// Though results handled, this triggers the data store to fetch loans...
		Klb.store.find(Klb.AVAILABLE_LOANS_QUERY);
		
		// The actual query that drives loan serach results
		this.notifyPropertyChange('query');
	},

	availablePartnersDidChange: function(key) {
		var len = this.get('availablePartners').get('length');
		console.log("Observed availablePartners change w/ "+len);
		
	// for now, we wait until we have partner data to load activate the display
		if(this.get('availablePartners').get('length') > 0) {
		//	Klb.lendingController.set('currentScene','searchListView');
			Klb.makeFirstResponder(Klb.READY_LIST);
		}
	}.observes('*availablePartners.length'), // something not quite right w/ this
	
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
		this.notifyPropertyChange('formattedCountries');
	},

	showSectorPicker: function(context) {
		Klb.getPath('pickerPanes.sectorPicker.mainPane').append();
	},

	chooseSectors: function(context) {
		var options = context.getPath('parentView.scrollView.contentView.selection');
	  this.set('selectedSectors', options);
		Klb.getPath('pickerPanes.sectorPicker.mainPane').remove();

		console.log("PICKED SECTOR COUNT: " + this.get('selectedSectors').get('length'));
		this.notifyPropertyChange('query');
		this.notifyPropertyChange('formattedSectors');
	},
	
	lendNow: function(context) {
//		console.log(context);
		var loanId = context.parentView.get('content').get('id'), 
			form, loansInput, donationInput, appIdInput;
		
		// consider the user a repeat visitor at this point...
		Klb.mainController.setPrehomeBypassCookie();
		
		form = document.createElement('FORM');
		form.setAttribute('action','http://www.kiva.org/basket/set/');
		form.setAttribute('method','post');
		form.setAttribute('id','kivaBasketPostForm');
		form.setAttribute('target','_kivaBasketFrame');
		
		loansInput = document.createElement('INPUT');
		loansInput.setAttribute('name','loans');
		loansInput.setAttribute('value','[{"id":' + loanId + ', "amount":25}]');

		donationInput = document.createElement('INPUT');
		donationInput.setAttribute('name','donation');
		donationInput.setAttribute('value','2.5');
		
		appIdInput = document.createElement('INPUT');
		appIdInput.setAttribute('name','app_id');
		appIdInput.setAttribute('value','org.kivaenfrancais');
		
		form.appendChild(loansInput);
		form.appendChild(donationInput);
		form.appendChild(appIdInput);
		
		form.submit();
	}
});
