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
  	// temp step until we actually get a "loading/status" view ready
    Klb.mainController.set('currentSection','Klb.prehomePage.mainView');
  },
  
  willLoseFirstResponder: function() {
  },
      
});