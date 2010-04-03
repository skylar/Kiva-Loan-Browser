// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('models/loan');

Klb.loansController = SC.ArrayController.create(
/** @scope Klb.loansController.prototype */ {
  
  filterConditions: null,
  
  init: function() {
    sc_super();
    this.filterConditionsDidChange();
  },
  
  filterConditionsDidChange: function() {
    var filterConditions = this.get('filterConditions') || '';
    this.set('content', Klb.store.find(SC.Query.local(Klb.Loan, filterConditions)));
  }.observes('filterConditions')
  
});
