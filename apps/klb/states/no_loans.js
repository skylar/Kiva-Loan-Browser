// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

/**
  Displayed when the app has no targets.
*/
Klb.NO_LOANS = SC.Responder.create({
  
  nextResponder: Klb.READY,
  /**
    Show laoding loan view.
  */
  didBecomeFirstResponder: function() {
    Klb.lendingController.set('currentScene', 'noTargets');
  },
  
  willLoseFirstResponder: function() {
    Klb.lendingController.set('currentScene', null);
  },
    
	updateStateForResultCount: function() {
		if(Klb.loansController.get('length') > 0) {
			Klb.makeFirstResponder(Klb.READY_LIST);
		}
	}
});