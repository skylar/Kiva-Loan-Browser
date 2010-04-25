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
Klb = SC.Application.create(
  /** @scope Klb.prototype */ {

  NAMESPACE: 'Klb',
  VERSION: '0.1.0',

  // Define app store  
  store: SC.Store.create(),

  // Activates responder tracing
  trace: YES,
  currentScene : null,
	pickerPanes: {},

});

///////////////////////////////////////
// Queries

Klb.AVAILABLE_PARTNERS_QUERY = SC.Query.local(Klb.Partner,
	{conditions: 'rating > 0'});
Klb.AVAILABLE_LOANS_QUERY = SC.Query.local(Klb.Loan, 
	{conditions: 'loanStatus = "fundraising"', orderBy: ['postedDate']});
