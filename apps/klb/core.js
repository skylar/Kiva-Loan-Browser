// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/** @namespace

  Kiva Loan Browser - browse them loans - fund them people!
  
  @extends SC.Application
*/

sc_require('utils/ga_loader');
sc_require('utils/typekit');
try{Typekit.load();}catch(e){ console.log("TYPEKIT failed to load.");}

Klb = SC.Application.create(
  /** @scope Klb.prototype */ {

  NAMESPACE: 'Klb',
  VERSION: '0.5.0',

  // Define app store  
  store: SC.Store.create(),

  // Activates responder tracing
  trace: YES,
  currentPane : null,
	pickerPanes: {}

});

// Bonus add-in
Klb.staticImagePath = 'images/ratingStar_full.png';
Klb.absStaticImagePath = sc_static('images/ratingStar_full.png');
Klb.imageByName = function(name) {
	var prefix = Klb.absStaticImagePath.substring(0,
		Klb.absStaticImagePath.indexOf(Klb.staticImagePath));
	return prefix+name;
};

///////////////////////////////////////
// Queries

Klb.AVAILABLE_PARTNERS_QUERY = SC.Query.local(Klb.Partner,
	{conditions: 'rating > 0'});
Klb.AVAILABLE_LOANS_QUERY = SC.Query.local(Klb.Loan, 
	{conditions: 'loanStatus = "fundraising"', orderBy: ['postedDate']});

// try this query for weird stuff
//Klb.AVAILABLE_PARTNERS_QUERY = SC.Query.local(Klb.Partner);
// try this fix by martoche (seems to be the same behavior)
//Klb.AVAILABLE_PARTNERS_QUERY = SC.Query.create({location: SC.Query.LOCAL, recordType: Klb.Partner});