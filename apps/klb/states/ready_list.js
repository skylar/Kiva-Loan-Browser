// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('states/ready');

/**
  Initial state of application before it has loaded targets.
*/
Klb.READY_LIST = SC.Responder.create({
  
  nextResponder: Klb.READY,
  
  /**
    Show loading targets view.
  */
  didBecomeFirstResponder: function() {
    Klb.lendingController.set('currentScene', 'searchListView');
    Klb.searchController.set('selection', null); // always empty sel
    //Klb.testsController.set('isShowingTests', YES);

    // var target = Klb.sourceController.get('selection').firstObject();
    //     Klb.updateRoute(target, null, NO);
    //     if (Klb.get('routePending')) {
    //       var test = Klb.computeRouteTest();
    //       if (test) Klb.sendAction('selectTest', this, test);
    //       else Klb.updateRoute(target, null, YES);
    //     } 
    
    // select the 'browse all loans' option by default
		Klb.filtersController.selectObject(Klb.filtersController.get('arrangedObjects').objectAt(0));
  },
  
  willLoseFirstResponder: function() {
    Klb.set('currentScene', null);
    //Klb.testsController.set('isShowingTests', NO);
  },
  
  updateStateForResultCount: function() {
  	if(Klb.loansController.get('length') <= 0) {
  		Klb.makeFirstResponder(Klb.NO_LOANS);
  	}
  }
  
});