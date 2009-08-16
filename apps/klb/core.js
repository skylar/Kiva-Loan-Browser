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

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  
  store: SC.Store.create(),

  // Activates responder tracing
  trace: YES,

	pickerPanes: {}

});
