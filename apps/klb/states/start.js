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
Klb.START = SC.Responder.create({
  
  /**
    Show loading loans view.
  */
  didBecomeFirstResponder: function() {
  	var initialSection = Klb.getPath('prehomePage.mainView');

		if(Klb.mainController.checkPrehomeBypassCookie()) {
			initialSection = Klb.getPath('lendingPage.mainView');
	  }	  
  	Klb.mainController.set('currentSection',initialSection);

		Klb.makeFirstResponder(Klb.READY_LOADING);
  },
  
  willLoseFirstResponder: function() {
  	// ANALYTICS: equivalent to tracking successful page views (?)
  	_gaq.push(['_trackEvent', 'navigation', 'beginVisit']);
  	Klb.mainController.set('shouldTrackNavigation',true);
  }
      
});