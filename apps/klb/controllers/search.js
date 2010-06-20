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
	showMale: true,
	showFemale: true,
	showGroups: true,
	
	sortOptions: [
		{"name":"_Most_Recent".loc(), "value":"postedDate DESC"},
		{"name":"_Amount_Remaining".loc(), "value":"remainingAmount"},
		{"name":"_Loan_Amount".loc(), "value":"loanAmount"},
		{"name":"_Sector".loc(), "value":"sector"},
		{"name":"_Expiring_Soon".loc(), "value":"postedDate ASC"}
	],
	currentSortOrder: 'postedDate DESC',
	currentSearch: Klb.Search.create(),
	
	canCheckout: NO,

	query: function() {
	  var ands = [],
	      parameters = {},
	      iFemale, iMale, gQuery, cSearch,
	      selectedCountries,
	      selectedSectors;
	  
	  // copy in any changed properties to the currentSearch
		this.currentSearch.set('male',this.get('showMale'));
		this.currentSearch.set('female',this.get('showFemale'));
		this.currentSearch.set('groups',this.get('showGroups'));
		this.currentSearch.set('sortOrder',this.get('currentSortOrder'));
		
    cSearch = this.get('currentSearch'),
	  selectedCountries = cSearch.get('countries');
	  selectedSectors = cSearch.get('sectors');
	  
	  if (selectedCountries && selectedCountries.get('length') > 0) {
	    ands.push("country ANY_COUNTRY {countries}");
	    parameters.countries = selectedCountries;
	  }
	  
	  if (selectedSectors && selectedSectors.get('length') > 0) {
	  	ands.push('sector ANY {sectors}');
	  	parameters.sectors = selectedSectors.getEach('value');
	  }
	  
	  // gender/groups
	  iMale = "(borrowerCount=1 AND gender='male')";
	  iFemale = "(borrowerCount=1 AND gender='female')";
	 	if (cSearch.get('male') && cSearch.get('female')) {
	 		if(!cSearch.get('groups')) {
		 		ands.push("borrowerCount = 1");
		 	} // else, do nothing
	 	} 
	 	else if (cSearch.get('groups')) {
	 		gQuery = "(borrowerCount > 2";
	 		if(cSearch.get('male')) { gQuery += " OR " + iMale; }
	 		else if(cSearch.get('female')) { gQuery += " OR " + iFemale; }
	 		gQuery += ")";
	 		ands.push(gQuery);
	 	}
	 	else if (cSearch.get('male')) { ands.push(iMale); }
	 	else if (cSearch.get('female')) { ands.push(iFemale); }
	  
	  console.log("MY JOINS: " + ands.join(' AND '));
	  return { conditions: ands.join(' AND '), parameters: parameters,
	  	 orderBy: cSearch.get('sortOrder') };
	}.property('showMale','showFemale','showGroups','currentSortOrder'),

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
    var countries = this.get('currentSearch').get('countries'),
        len = countries.get('length');
        
    return len === 0 ? '_All'.loc() : countries.mapProperty('name').sort().join(', ');
  }.property('currentSearch','currentSearch.countries').cacheable(),

	formattedSectors: function() {
	  var sectors = this.get('currentSearch').get('sectors'),
	      len = sectors.get('length');
	      
	  return len === 0 ? '_All'.loc() : sectors.mapProperty('name').sort().join(', ');
	}.property('currentSearch','currentSearch.sectors').cacheable(),
	
	// this is a bit of hack for a moment as we create a static 
	// data tree for the filterController
	currentFilters: SC.Object.extend({

	  treeItemIsExpanded: YES,		  
	  title: "Root",
	  isSelectable: YES,
	  value: null,
	  
	  treeItemChildren: function() {
	    var idx, ret = [];
	    
//	    ret.push(Klb.searchController.currentFilters.create({
//	    	title: '_Getting Started'.loc(),
//	    	value: 'start',
//	    	treeItemIsExpanded:NO,
//	    	treeItemChildren: null,
//	    }));
			ret.push(Klb.searchController.currentFilters.create({
				title: '_Browse All Loans'.loc(),
				value: Klb.Search.create(),
				treeItemIsExpanded:NO,
				treeItemChildren: null,
			}));
			ret.push(Klb.searchController.sampleFilters.create());
			
	    return ret;
	  }.property().cacheable()

	}),
	sampleFilters: SC.Object.extend({

	  treeItemIsExpanded: YES,		  
	  title: "_Sample Filters".loc(),
	  isEnabled: NO,
	  isSelectable: NO,
	  
	  treeItemChildren: function() {
	    var idx, ret = [];
	    
	    ret.push(Klb.searchController.currentFilters.create({
	    	title: '_African Farmers'.loc(),
				value: Klb.Search.create({
//					countries:['KE','SN','CG','ET','TG','NG','RW'],
					sectors:[{'name':'_Agriculture'.loc(),'value':'Agriculture','isSelected':false}]
				}),
	    	treeItemIsExpanded:NO,
	    	treeItemChildren: null,
	    }));
			ret.push(Klb.searchController.currentFilters.create({
				title: '_Group Loans in South Asia'.loc(),
				value: Klb.Search.create({
					male:false,female:false
				}),
				treeItemIsExpanded:NO,
				treeItemChildren: null,
			}));
			ret.push(Klb.searchController.currentFilters.create({
				title: '_Francophone Countries'.loc(),
				value: Klb.Search.create({
					countries:['SN','CG','TG','RW']
				}),
				treeItemIsExpanded:NO,
				treeItemChildren: null,
			}));
			
	    return ret;
	  }.property().cacheable()

	}),
	
///////////////////////////////////////
// Methods
	
	// call this when you're ready to prime the search w/ data
	primeData: function() {		
		// init vars
	  var sectors = [
	    {'name':'_Agriculture'.loc(),'value':'Agriculture','isSelected':false},
			{'name':'_Transportation'.loc(),'value':'Transportation','isSelected':false},
			{'name':'_Services'.loc(),'value':'Services','isSelected':false},
			{'name':'_Clothing'.loc(),'value':'Clothing','isSelected':false},
			{'name':'_Health'.loc(),'value':'Health','isSelected':false},
			{'name':'_Retail'.loc(),'value':'Retail','isSelected':false},
			{'name':'_Manufacturing'.loc(),'value':'Manufacturing','isSelected':false},
			{'name':'_Arts'.loc(),'value':'Arts','isSelected':false},
			{'name':'_Housing'.loc(),'value':'Housing','isSelected':false},
			{'name':'_Food'.loc(),'value':'Food','isSelected':false},
			{'name':'_Wholesale'.loc(),'value':'Wholesale','isSelected':false},
			{'name':'_Construction'.loc(),'value':'Construction','isSelected':false},
			{'name':'_Education'.loc(),'value':'Education','isSelected':false},
			{'name':'_Personal_Use'.loc(),'value':'Personal Use','isSelected':false},
			{'name':'_Entertainment'.loc(),'value':'Entertainment','isSelected':false},
			{'name':'_Green'.loc(),'value':'Green','isSelected':false}];
		this.set('availableSectors',sectors);

		Klb.store.loadRecords(Klb.Country, Klb.COUNTRIES_ISO);
		this.set('availableCountries', Klb.store.find(SC.Query.local(Klb.Country)));		
		this.set('availablePartners', Klb.store.find(Klb.AVAILABLE_PARTNERS_QUERY));
		
		// set up the left nav w/ filter options
		Klb.filtersController.set('content', Klb.searchController.currentFilters.create());
		// select the 'browse all loans' option by default
		Klb.filtersController.selectObject(Klb.filtersController.get('arrangedObjects').objectAt(0));

		// set a default search object (to avoid issues w/ null for now)
		this.set('currentSearch',Klb.Search.create());
		
		// Though results handled, this triggers the data store to fetch loans...
		Klb.store.find(Klb.AVAILABLE_LOANS_QUERY);
		
		// The actual query that drives loan serach results
		this.notifyPropertyChange('query');
	},

	selectSidebarItem: function(collectionView) {
		var newSearch = collectionView.get('selection').firstObject().get('value');
		this.set('currentSearch',newSearch);
		this.notifyPropertyChange('query');
		this.notifyPropertyChange('formattedSectors');
		this.notifyPropertyChange('formattedCountries');
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
			
	updateLocalBindingsForNewCurrentSearch: function() {
		var cSearch = this.get('currentSearch');
		
		this.beginPropertyChanges();
		this.set('showMale',cSearch.get('male'));
		this.set('showFemale',cSearch.get('female'));
		this.set('showGroups',cSearch.get('groups'));
		this.set('currentSortOrder',cSearch.get('sortOrder'));
		this.endPropertyChanges();
	}.observes('currentSearch'),
		
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
		
		this.get('currentSearch').set('countries', countries);
		Klb.getPath('pickerPanes.countryPicker.mainPane').remove();
		
		this.notifyPropertyChange('query');
		this.notifyPropertyChange('formattedCountries');
	},

	showSectorPicker: function(context) {
		Klb.getPath('pickerPanes.sectorPicker.mainPane').append();
	},

	chooseSectors: function(context) {
		var options = context.getPath('parentView.scrollView.contentView.selection');
	  this.get('currentSearch').set('sectors', options);
		Klb.getPath('pickerPanes.sectorPicker.mainPane').remove();

		console.log("PICKED SECTOR COUNT: " + this.get('selectedSectors').get('length'));
		this.notifyPropertyChange('query');
		this.notifyPropertyChange('formattedSectors');
	},
	
	lendNow: function(context) {
		console.log('LENDING NOW.');
		var loanId = context.parentView.get('content').get('id'), 
			form, loansInput, donationInput, appIdInput;
		
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
		
		document.getElementById('invisible_form_view').appendChild(form);
		
		form.submit();
		console.log('DID LENDING!!!');
	}
});
