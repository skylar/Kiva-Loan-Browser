// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

/**
  Initial state of application before it has loaded targets.
*/
Klb.READY = SC.Responder.create({
  /**
    Invoked when you select the test.
  */
  selectLoan: function(sender, loan) {
    if (!Klb.searchController.get('hasContent')) return NO ;

    if (loan && loan.isEnumerable) loan = loan.firstObject();
    Klb.detailController.set('content', loan);
    
    if (loan) Klb.makeFirstResponder(Klb.READY_DETAIL);
    else Klb.makeFirstResponder(Klb.READY_LIST);

	return null;
  },
  
  selectSidebarItem: function(sender, loan) {
  	// console.log("ITEM WAS SELECTED!");
  },
  
  back: function() {
    Klb.detailController.set('content', null);
    Klb.makeFirstResponder(Klb.READY_LIST);
  },
      
  checkLoadingState: function() {
  	// we need partners
  	if(Klb.searchController.get('availablePartners').get('length') > 0
  	 && (!Klb.searchController.get('kivaHasLoans') ||
  	 	Klb.searchController.get('storeIsReadyForSearch'))) {
  	// we need at least one callback of data, or kiva-out-of-loans state
	    Klb.makeFirstResponder(Klb.READY_LIST);
  	}
  }
});